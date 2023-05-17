import { SpanKind, SpanStatusCode } from '@opentelemetry/api'
import {
  EventBridgeEventNames,
  HandledError,
  isCommandErrorResponse,
  isCommandResponse,
  isCommandSuccessResponse,
  PuristaSpanName,
  StatusCode,
  UnhandledError,
} from '@purista/core'

import { deserializeOtpFromMqtt } from '../deserializeOtpFromMqtt.impl'
import { IncomingMessageFunction } from '../types'

export const handleCommandResponse: IncomingMessageFunction = async function (message, packet) {
  const context = deserializeOtpFromMqtt(this.logger, message, packet.properties?.userProperties)
  return this.startActiveSpan(
    PuristaSpanName.EventBridgeCommandResponseReceived,
    { kind: SpanKind.CONSUMER },
    context,
    async (span) => {
      const log = this.logger.getChildLogger({ ...span.spanContext(), traceId: message.traceId })

      if (message.eventName) {
        span.addEvent(message.eventName)
      }

      if (!isCommandResponse(message)) {
        const err = new UnhandledError(StatusCode.InternalServerError, 'the received message is not a command')
        log.error({ err }, err.message)
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: err.message,
        })
        span.recordException(err)
        this.emit(EventBridgeEventNames.EventbridgeError, err)
        return
      }

      const correlationId = packet.properties?.correlationData?.toString() || message.correlationId

      const invocation = this.pendingInvocations.get(correlationId)

      if (!invocation) {
        const err = new UnhandledError(
          StatusCode.InternalServerError,
          `received response with invalid correlationId ${correlationId}`,
        )
        log.error({ err }, err.message)
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: err.message,
        })
        span.recordException(err)
        this.emit(EventBridgeEventNames.EventbridgeError, err)
        return
      }

      if (isCommandSuccessResponse(message)) {
        invocation.resolve(message.payload)
      } else if (isCommandErrorResponse(message)) {
        const error = message.isHandledError ? HandledError.fromMessage(message) : UnhandledError.fromMessage(message)
        invocation.reject(error)
      }
    },
  )
}