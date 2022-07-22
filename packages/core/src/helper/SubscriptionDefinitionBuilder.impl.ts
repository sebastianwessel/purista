import type { EBMessage, EBMessageType, ServiceClass, SubscriptionDefinition, SubscriptionFunction } from '../core'

/**
 * Subscription definition builder is a helper to create and define a subscriptions for a service.
 * It helps to set all needed filters.
 *
 * A working schema definition needs at least a subscription name, a short description and the subscription implementation.
 */
export class SubscriptionDefinitionBuilder<
  ServiceClassType = ServiceClass,
  MessageType = EBMessage,
  Payload = unknown,
> {
  private messageType: EBMessageType | undefined

  private sender?: {
    serviceName?: string
    serviceVersion?: string
    serviceTarget?: string
  }

  private receiver?: {
    serviceName?: string
    serviceVersion?: string
    serviceTarget?: string
  }

  private eventName?: string

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private subscriptionName: string,
    private subscriptionDescription: string,
    private fn: SubscriptionFunction<ServiceClassType, MessageType, Payload>,
  ) {}

  /**
   * Add a filter to only subscribe to messages with matching event name
   * @param eventName Event name
   * @returns SubscriptionDefinitionBuilder
   */
  subscribeToEvent(eventName: string) {
    this.eventName = eventName
    return this
  }

  /**
   * Add filter to only match messages send by given service function & version.
   * Set one or more parameters to undefined means "do not filter by this criteria".
   * For example:
   *
   * This will filter for all messages send from function testFunction of service UserService.
   * This will include messages from all versions of this function.
   *
   * ```typescript
   * sendFrom('UserService', undefined, 'testFunction')
   * ```
   *
   * @param serviceName
   * @param serviceVersion
   * @param serviceTarget
   * @returns
   */
  sendFrom(serviceName: string | undefined, serviceVersion: string | undefined, serviceTarget: string | undefined) {
    this.sender = {
      serviceName,
      serviceVersion,
      serviceTarget,
    }
    return this
  }

  /**
   * Add filter to only match messages received by given service function & version.
   * Set one or more parameters to undefined means "do not filter by this criteria".
   * For example:
   *
   * This will filter for all messages send to function testFunction of service UserService.
   * This will include messages from all versions of this function.
   *
   * ```typescript
   * receivedBy('UserService', undefined, 'testFunction')
   * ```
   *
   * @param serviceName
   * @param serviceVersion
   * @param serviceTarget
   * @returns
   */
  receivedBy(serviceName: string | undefined, serviceVersion: string | undefined, serviceTarget: string | undefined) {
    this.receiver = {
      serviceName,
      serviceVersion,
      serviceTarget,
    }
    return this
  }

  /**
   * Adds a filter to match specific message type.
   *
   * Common message types are `Command`, `CommandSuccessResponse` and `CommandErrorResponse`.
   *
   * See @enum EBMessageType for full available list.
   *
   * @param messageType
   * @returns
   */
  addMessageType(messageType: EBMessageType) {
    this.messageType = messageType

    return this
  }

  /**
   * Returns the final subscription definition which will be passed into the service class.
   * @returns SubscriptionDefinition
   */
  getDefinition(): SubscriptionDefinition<ServiceClassType, MessageType, Payload> {
    const subscription: SubscriptionDefinition<ServiceClassType, MessageType, Payload> = {
      sender: this.sender,
      receiver: this.receiver,
      subscriptionName: this.subscriptionName,
      subscriptionDescription: this.subscriptionDescription,
      call: this.fn,
      messageType: this.messageType,
      eventName: this.eventName,
    }

    return subscription
  }
}
