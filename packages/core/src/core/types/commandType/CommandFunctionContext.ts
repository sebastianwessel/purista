import { EBMessageAddress } from '../EBMessageAddress'
import type { Logger } from '../Logger'
import type { ServiceClass } from '../ServiceClass'
import type { Command } from './Command'

export type CommandFunctionContext<MessagePayloadType = unknown, MessageParamsType = unknown> = {
  logger: Logger
  message: Command<MessagePayloadType, MessageParamsType>
  emit: <Service extends ServiceClass, Payload = unknown>(
    this: Service,
    eventName: string,
    payload?: Payload,
  ) => Promise<void>
  invoke: <Service extends ServiceClass>(
    this: Service,
    address: EBMessageAddress,
    payload: unknown,
    parameter: unknown,
  ) => Promise<unknown>
}
