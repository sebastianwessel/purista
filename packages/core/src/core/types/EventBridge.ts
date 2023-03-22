import { Command, CommandDefinitionMetadataBase, CommandErrorResponse, CommandSuccessResponse } from './commandType'
import { CustomMessage } from './CustomMessage'
import { DefinitionEventBridgeConfig } from './DefinitionEventBridgeConfig'
import type { EBMessage } from './EBMessage'
import type { EBMessageAddress } from './EBMessageAddress'
import type { Subscription } from './subscription'

/**
 * Event bridge interface
 * The event bridge must implement this interface.
 */
export interface EventBridge {
  readonly name: string
  /**
   * The default time until when a command invocation automatically returns a time out error
   */
  readonly defaultCommandTimeout: number

  /**
   * Start the eventbridge and connect to the underlaying message broker
   */
  start(): Promise<void>

  /**
   * Emit a message to the eventbridge without awaiting a result
   * @param message the message
   */
  emitMessage(
    message: Omit<EBMessage, 'id' | 'timestamp' | 'instanceId' | 'correlationId'>,
  ): Promise<Readonly<EBMessage>>

  /**
   * Call a command of a service and return the result of this command
   * @param input a partial command message
   * @param contentType the content type of the message payload
   * @param contentEncoding the content encoding of the message
   * @param ttl the time to live (timeout) of the invocation
   */
  invoke<T>(
    input: Omit<Command, 'id' | 'messageType' | 'timestamp' | 'correlationId' | 'instanceId'>,
    ttl?: number,
  ): Promise<T>

  /**
   *
   * @param address the address of the service command (service name, version and command name)
   * @param cb the function to be called if a matching command arrives
   */
  registerCommand(
    address: EBMessageAddress,
    cb: (
      message: Command,
    ) => Promise<
      Readonly<Omit<CommandSuccessResponse, 'instanceId'>> | Readonly<Omit<CommandErrorResponse, 'instanceId'>>
    >,
    metadata: CommandDefinitionMetadataBase,
    eventBridgeConfig: DefinitionEventBridgeConfig,
  ): Promise<string>

  /**
   * Unregister a service command
   * @param address The address (service name, version and command name) of the command to be de-registered
   */
  unregisterCommand(address: EBMessageAddress): Promise<void>

  /**
   * Register a new subscription
   * @param subscription the subscription definition
   * @param cb the function to be called if a matching message arrives
   */
  registerSubscription(
    subscription: Subscription,
    cb: (message: EBMessage) => Promise<Omit<CustomMessage, 'id' | 'timestamp' | 'instanceId'> | undefined>,
  ): Promise<string>

  /**
   *
   * @param address
   */
  unregisterSubscription(address: EBMessageAddress): Promise<void>

  /**
   * Indicates if the eventbridge has been started and is connected to underlaying message broker
   */
  isReady(): Promise<boolean>

  /**
   * Indicates if the eventbridge is running and works correctly
   */
  isHealthy(): Promise<boolean>

  /**
   * Shut down event bridge as gracefully as possible
   */
  destroy(): Promise<void>
}
