import { ActorReentrancyOptions } from './ActorReentrancyOptions'
/**
 * ActorRuntimeOptions provides options for configuring the actor runtime in Dapr.
 * For more, see https://docs.dapr.io/developing-applications/building-blocks/actors/howto-actors/.
 */
export type ActorRuntimeOptions = {
  /**
   * The timeout before deactivating an idle actor.
   * Checks for timeouts occur every `actorScanInterval` interval.
   * It uses the format required by [time.ParseDuration](https://pkg.go.dev/time#ParseDuration).
   */
  actorIdleTimeout?: string
  /**
   * Specifies how often to scan for idle actors to deactivate them.
   * Actors that have been idle longer than `actorIdleTimeout` will be deactivated.
   * It uses the format required by [time.ParseDuration](https://pkg.go.dev/time#ParseDuration).
   */
  actorScanInterval?: string
  /**
   * The timeout before draining current active actor methods.
   * If there is no current actor method call, this is ignored.
   * It uses the format required by [time.ParseDuration](https://pkg.go.dev/time#ParseDuration).
   */
  drainOngoingCallTimeout?: string
  /**
   * If true, Dapr will wait for `drainOngoingCallTimeout` before
   * draining current active actor methods.
   */
  drainRebalancedActors?: boolean
  /**
   * Configures different reentrancy parameters.
   */
  reentrancy?: ActorReentrancyOptions
  /**
   * Specifies the number of partitions for actor’s reminders.
   * If not provided, all reminders are saved as a single record in actor’s state store.
   */
  remindersStoragePartitions?: number
}