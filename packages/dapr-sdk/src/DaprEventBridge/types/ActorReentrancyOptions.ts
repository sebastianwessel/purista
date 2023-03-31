/**
 * ActorReentrancyOptions provides options for configuring reentrancy in actors.
 * For more, see https://docs.dapr.io/developing-applications/building-blocks/actors/actor-reentrancy/.
 */
export declare type ActorReentrancyOptions = {
  /**
   * Configure the reentrancy behavior for an actor. If not provided, reentrancy is disabled.
   */
  enabled?: boolean
  /**
   * If reentrancy is enabled, this specifies the limit after which concurrent reentrant
   * requests to an actor are stopped. This is a safety measure against infinite reentrant calls.
   */
  maxStackDepth?: number
}
