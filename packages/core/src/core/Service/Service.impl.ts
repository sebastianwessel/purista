import { HandledError } from '../HandledError.impl'
import {
  createErrorResponse,
  createInfoMessage,
  createSuccessResponse,
  getCleanedMessage,
  getNewCorrelationId,
  getNewEBMessageId,
  getNewTraceId,
  getTimeoutPromise,
} from '../helper'
import {
  Command,
  CommandDefinition,
  EBMessage,
  EBMessageId,
  EBMessageType,
  EventBridge,
  InfoInvokeTimeoutPayload,
  InfoMessageType,
  isCommand,
  isCommandErrorResponse,
  isCommandResponse,
  isCommandSuccessResponse,
  Logger,
  ServiceClass,
  ServiceInfoType,
  StatusCode,
  Subscription,
  SubscriptionDefinition,
  SubscriptionId,
} from '../types'
import { UnhandledError } from '../UnhandledError.impl'

/** Internal type for holding pending invocations */
type PendigInvocation = {
  command: Command
  resolve(responsePayload: unknown): void
  reject(error: UnhandledError | HandledError): void
}

/**
 * Base class for all services.
 * This class provides base functions to work with the event bridge, logging and so on
 *
 * Every service should extend this class and should not directly access the eventbridge or other service
 *
 * ```typescript
 * class MyService extends Service {
 *
 *   constructor(baseLogger: Logger, info: ServiceInfoType, eventBridge: EventBridge) {
 *     super( baseLogger, info, eventBridge )
 *     // ... initial service logic
 *   }
 *   // ... service methods, functions and logic
 * }
 * ```
 */
export class Service extends ServiceClass {
  info: ServiceInfoType
  protected serviceLogger: Logger

  protected eventBridge: EventBridge

  protected pendingInvocations = new Map<EBMessageId, PendigInvocation>()

  protected subscriptions = new Map<SubscriptionId, SubscriptionDefinition>()

  protected commands = new Map<string, CommandDefinition>()

  protected mainSubscriptionId: SubscriptionId | undefined

  constructor(
    baseLogger: Logger,
    info: ServiceInfoType,
    eventBridge: EventBridge,
    private commandFunctions: CommandDefinition[],
    private subscriptionList: SubscriptionDefinition[],
  ) {
    super()
    this.info = info

    this.serviceLogger = baseLogger.getChildLogger({
      prefix: [this.info.serviceName, this.info.serviceVersion],
      name: `${this.info.serviceName} V${this.info.serviceVersion}`,
    })
    this.serviceLogger.debug(`creating ${this.info.serviceName} ${this.info.serviceVersion}`)

    this.eventBridge = eventBridge
  }

  /**
   * It connects to the event bridge and subscribes to the topics that are in the subscription list.
   */
  async start() {
    try {
      await this.initializeEventbridgeConnect(this.commandFunctions, this.subscriptionList)
      await this.sendServiceInfo(EBMessageType.InfoServiceReady)
    } catch (err) {
      this.serviceLogger.error(`failed to start service`, err)
      throw err
    }
  }

  /**
   * Connect service to event bridge to receive commands and command responses
   */
  protected async initializeEventbridgeConnect(
    commandFunctions: CommandDefinition[],
    subscriptions: SubscriptionDefinition[],
  ) {
    // send info message that this service is going to start up now
    await this.sendServiceInfo(EBMessageType.InfoServiceInit)

    // create a subscription for all commands, and command responses send to this service
    const ebSubscription: Subscription = {
      receiver: {
        serviceName: this.info.serviceName,
        serviceVersion: this.info.serviceVersion,
      },
      messageTypes: [EBMessageType.Command, EBMessageType.CommandSuccessResponse, EBMessageType.CommandErrorResponse],
      callback: this.defaultMessageHandler.bind(this),
      subscriber: {
        serviceName: this.info.serviceName,
        serviceVersion: this.info.serviceVersion,
        serviceTarget: '__defaultCommandResponseSubscription',
      },
    }
    this.mainSubscriptionId = await this.eventBridge.subscribe(ebSubscription)

    // register subscriptions for this service
    for (const subscription of subscriptions) {
      this.serviceLogger.debug('start subscription', subscription.subscriptionName)
      await this.subscribe(subscription)
    }

    // register commands for this service
    for (const command of commandFunctions) {
      await this.registerCommand(command)
    }
  }

  /**
   * Broadcast service info message
   * @param infoType type of info message
   * @param target function name is need in messages like InfoServiceFunctionAdded
   */
  async sendServiceInfo(infoType: InfoMessageType, target?: string, data?: Record<string, unknown>) {
    const info = createInfoMessage(infoType, this.info.serviceName, this.info.serviceVersion, target, data)

    return this.eventBridge.emit(info)
  }

  /**
   * There is one subscription with a specific id which set during init.
   * This subscriptions handles all incoming commands and invoke responses.
   *
   * If the handler receives a message for a subscription with different id,
   * the message relates to a regular subscription (passiv listener)
   *
   * @param subscriptionId id of subscription
   * @param message event bridge message
   */
  protected async defaultMessageHandler(subscriptionId: SubscriptionId, message: EBMessage) {
    if (isCommand(message)) {
      // handle incoming command
      this.executeCommand(subscriptionId, message)
      return
    }

    if (this.mainSubscriptionId !== subscriptionId) {
      // handle incoming subscription message
      this.handleSubscriptionMessage(subscriptionId, message)
      return
    }

    // if it is a response to request resolve/reject pending local request
    if (isCommandResponse(message)) {
      const pending = this.pendingInvocations.get(message.correlationId)
      if (pending) {
        if (isCommandSuccessResponse(message)) {
          pending.resolve(message.response)
        } else if (isCommandErrorResponse(message)) {
          const error = message.isHandledError ? HandledError.fromMessage(message) : UnhandledError.fromMessage(message)
          pending.reject(error)
        }
      } else {
        this.serviceLogger
          .getChildLogger({ name: `${this.info.serviceName} V${this.info.serviceVersion}`, requestId: message.traceId })
          .warn('invocation message id not found - maybe already timed out', getCleanedMessage(message))
      }
    }
  }

  async invoke<T>(
    input: Omit<Command, 'id' | 'sender' | 'messageType' | 'timestamp' | 'correlationId'>,
    ttl = this.eventBridge.defaultTtl,
    originalCommand?: Partial<Command>,
  ): Promise<T> {
    const traceId = originalCommand?.traceId || getNewTraceId()
    const correlationId = getNewCorrelationId()

    const command: Command = {
      id: getNewEBMessageId(),
      correlationId,
      timestamp: Date.now(),
      traceId,
      messageType: EBMessageType.Command,
      ...input,
      sender: {
        serviceName: this.info.serviceName,
        serviceVersion: this.info.serviceVersion,
        serviceTarget: '',
      },
    }

    const removeFromPending = () => {
      this.pendingInvocations.delete(correlationId)
    }

    const sendErrorInfoMsg = async () => {
      try {
        const data: InfoInvokeTimeoutPayload = {
          traceId,
          correlationId,
          sender: command.sender,
          receiver: command.receiver,
          timestamp: command.timestamp,
        }

        await this.sendServiceInfo(EBMessageType.InfoInvokeTimeout, undefined, data)
      } catch (err) {
        this.serviceLogger
          .getChildLogger({ name: `${this.info.serviceName} V${this.info.serviceVersion}`, requestId: traceId })
          .error(`failed to send InfoInvokeTimeout message for ${correlationId}`, err)
      }
    }

    const executionPromise = new Promise<T>((resolve, reject) => {
      this.pendingInvocations.set(command.correlationId, {
        command,
        resolve: (successPayload: T) => {
          removeFromPending()
          resolve(successPayload)
        },
        reject: (err: unknown) => {
          removeFromPending()
          reject(err)
          sendErrorInfoMsg()
        },
      })
    })

    this.eventBridge.emit(command)
    return Promise.race([executionPromise, getTimeoutPromise(ttl, traceId)])
  }

  protected async subscribe(subscription: SubscriptionDefinition): Promise<SubscriptionId> {
    const ebSubscription: Subscription = {
      sender: subscription.sender,
      receiver: subscription.receiver,
      messageTypes: subscription.messageTypes,
      callback: this.defaultMessageHandler.bind(this),
      subscriber: {
        serviceName: this.info.serviceName,
        serviceVersion: this.info.serviceVersion,
        serviceTarget: subscription.subscriptionName,
      },
    }
    const id = await this.eventBridge.subscribe(ebSubscription)
    this.subscriptions.set(id, subscription)
    return id
  }

  /**
   * Called when a command is received by the service
   *
   * @param subscriptionId
   * @param command
   */
  protected async executeCommand(_subscriptionId: SubscriptionId, message: Command) {
    const command = this.commands.get(message.receiver.serviceTarget)
    if (!command) {
      this.serviceLogger
        .getChildLogger({
          name: `${this.info.serviceName} V${this.info.serviceVersion} unknown`,
          requestId: message.traceId,
        })
        .error('received invalid command', getCleanedMessage(message))
      const errorResponse = createErrorResponse(message, StatusCode.NotImplemented)
      await this.eventBridge.emit(errorResponse)
      return
    }

    const log = this.serviceLogger.getChildLogger({
      prefix: [command.commandName],
      name: `${this.info.serviceName} V${this.info.serviceVersion} ${command.commandName}`,
      requestId: message.traceId,
    })

    try {
      let payloadInput = message.command.payload
      let parameterInput = message.command.parameter

      if (command.hooks.beforeTransformInput) {
        for (const hook of command.hooks.beforeTransformInput) {
          const transform = hook.bind(this, log)
          const transformResponse = await transform(payloadInput, parameterInput, message)
          payloadInput = transformResponse.payload
          parameterInput = transformResponse.params
        }
      }

      const call = command.call.bind(this, log)
      let payload = await call(payloadInput, parameterInput, message)

      if (command.hooks.afterGuard) {
        for (const hook of command.hooks.afterGuard) {
          const afterGuard = hook.bind(this, log)
          await afterGuard(payload, payloadInput, parameterInput, message)
        }
      }

      if (command.hooks.afterTransformOutput) {
        for (const hook of command.hooks.afterTransformOutput) {
          const afterTransform = hook.bind(this, log)
          payload = await afterTransform(payload, payloadInput, parameterInput, message)
        }
      }

      const successResponse = createSuccessResponse(message, payload)
      await this.eventBridge.emit(successResponse)
    } catch (error) {
      if (error instanceof HandledError) {
        await this.eventBridge.emit(createErrorResponse(message, error.errorCode, error))
        return
      }

      log.error('executeCommand unhandled error', { error, message: getCleanedMessage(message) })
      await this.eventBridge.emit(createErrorResponse(message, StatusCode.InternalServerError, error))
    }
  }

  protected async handleSubscriptionMessage(subscriptionId: SubscriptionId, message: EBMessage) {
    const subscription = this.subscriptions.get(subscriptionId)
    if (!subscription) {
      this.serviceLogger
        .getChildLogger({ name: `${this.info.serviceName} V${this.info.serviceVersion}`, requestId: message.traceId })
        .error('received message for non existing subscription', {
          subscriptionId,
          message: getCleanedMessage(message),
        })
      return
    }

    try {
      await subscription.call.bind(
        this,
        this.serviceLogger.getChildLogger({
          prefix: [this.info.serviceName, this.info.serviceVersion, subscription.subscriptionName],
          name: `${this.info.serviceName} V${this.info.serviceVersion} ${subscription.subscriptionName}`,
          requestId: message.traceId,
        }),
      )(subscriptionId, message)
    } catch (error) {
      this.serviceLogger
        .getChildLogger({
          name: `${this.info.serviceName} V${this.info.serviceVersion} ${subscription.subscriptionName}`,
          requestId: message.traceId,
        })
        .error(error)

      const data = {
        traceId: message.traceId,
        subscription: subscription.subscriptionName,
        error,
      }

      await this.sendServiceInfo(EBMessageType.InfoSubscriptionError, undefined, data)
    }
  }

  protected async registerCommand(commandDefinition: CommandDefinition): Promise<void> {
    this.serviceLogger.debug(
      'register command',
      `${this.serviceInfo.serviceName} ${this.serviceInfo.serviceVersion} ${commandDefinition.commandName}`,
    )
    this.commands.set(commandDefinition.commandName, commandDefinition)
    await this.sendServiceInfo(
      EBMessageType.InfoServiceFunctionAdded,
      commandDefinition.commandName,
      commandDefinition.metadata,
    )
  }

  async destroy() {
    await this.sendServiceInfo(EBMessageType.InfoServiceDrain)
    this.serviceLogger.info('destroy', this.info)
    this.pendingInvocations.forEach((pending) => {
      pending.reject(new HandledError(StatusCode.ServiceUnavailable, undefined, undefined, pending.command.traceId))
    })
    this.pendingInvocations.clear()
    await this.eventBridge.unsubscribeService({
      serviceName: this.info.serviceName,
      serviceVersion: this.info.serviceVersion,
      serviceTarget: '*',
    })
    await this.sendServiceInfo(EBMessageType.InfoServiceShutdown)
  }
}
