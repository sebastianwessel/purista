import { SpanKind, SpanStatusCode } from '@opentelemetry/api'
import {
  Command,
  CommandDefinitionMetadataBase,
  CommandErrorResponse,
  CommandSuccessResponse,
  DefinitionEventBridgeConfig,
  deserializeOtp,
  EBMessageAddress,
  EventBridgeEventNames,
  isCommand,
  isCommandErrorResponse,
  PuristaSpanName,
  PuristaSpanTag,
  serializeOtp,
  StatusCode,
  UnhandledError,
} from '@purista/core'
import { headers as getNewHeaders, MsgHdrs } from 'nats'

import { deserializeOtpFromNats } from '../deserializeOtpFromNats.impl'
import { serializeOtpToNats } from '../serializeOtpToNats.impl'
import { getTopicName } from '../topic'
import { IncomingMessageFunction } from '../types'

export const getCommandHandler = (
  address: EBMessageAddress,
  cb: (message: Command) => Promise<CommandSuccessResponse | CommandErrorResponse>,
  _metadata: CommandDefinitionMetadataBase,
  _eventBridgeConfig: DefinitionEventBridgeConfig,
) => {
  const handleCommand: IncomingMessageFunction = async function (error, msg) {
    if (error) {
      const err = UnhandledError.fromError(error)
      this.logger.error({ err, address }, `error in command subscription: ${err.message}`)
      return
    }

    let command: Command
    try {
      command = this.sc.decode(msg.data) as Command
    } catch (err) {
      this.logger.error({ err, address }, `error in command subscription - unable to extract payload`)
      return
    }

    const context = deserializeOtpFromNats(this.logger, command, msg.headers)
    return this.startActiveSpan(
      PuristaSpanName.EventBridgeCommandReceived,
      { kind: SpanKind.CONSUMER },
      context,
      async (span) => {
        const log = this.logger.getChildLogger({ ...span.spanContext(), traceId: command.traceId })
        try {
          if (!isCommand(command)) {
            const err = new UnhandledError(StatusCode.InternalServerError, 'expected a command message')
            log.error({ err }, err.message)
            span.setStatus({
              code: SpanStatusCode.ERROR,
              message: err.message,
            })
            span.recordException(err)
            this.emit(EventBridgeEventNames.EventbridgeError, err)
            return
          }

          const result = await cb(command)

          const returnContext = deserializeOtp(log, result.otp)
          return this.startActiveSpan(
            PuristaSpanName.EventBridgeCommandResponseSent,
            { kind: SpanKind.PRODUCER },
            returnContext,
            async (subSpan) => {
              const responseMessage = {
                ...result,
                instanceId: this.instanceId,
                otp: result.otp || serializeOtp(),
              }

              subSpan.setAttribute(PuristaSpanTag.SenderServiceName, responseMessage.sender.serviceName)
              subSpan.setAttribute(PuristaSpanTag.SenderServiceVersion, responseMessage.sender.serviceVersion)
              subSpan.setAttribute(PuristaSpanTag.SenderServiceTarget, responseMessage.sender.serviceTarget)

              if (responseMessage.eventName) {
                subSpan.addEvent(responseMessage.eventName)
              }

              let headers: MsgHdrs | undefined
              if (this.connection?.info?.headers) {
                headers = getNewHeaders()

                const userProperties: Record<string, string> = serializeOtpToNats({
                  messageType: responseMessage.messageType,
                  senderServiceName: responseMessage.sender.serviceName,
                  senderServiceVersion: responseMessage.sender.serviceVersion,
                  senderServiceTarget: responseMessage.sender.serviceTarget,
                  receiverServiceName: responseMessage.receiver.serviceName,
                  receiverServiceVersion: responseMessage.receiver.serviceVersion,
                  receiverServiceTarget: responseMessage.receiver.serviceTarget,
                  instanceId: responseMessage.instanceId,
                })

                if (responseMessage.eventName) {
                  userProperties.eventName = responseMessage.eventName
                }

                if (responseMessage.principalId) {
                  userProperties.principalId = responseMessage.principalId
                }

                Object.entries(userProperties).forEach((value) => headers?.set(value[0], value[1]))
              }

              const responseData = this.sc.encode(responseMessage)

              msg.respond(responseData, {
                headers,
              })

              if (this.config.commandResponsePublishTwice === 'never') {
                return
              }

              // emit the message 2nd time as event
              if (
                this.config.commandResponsePublishTwice === 'always' ||
                (responseMessage.eventName && this.config.commandResponsePublishTwice === 'eventOnly') ||
                (isCommandErrorResponse(responseMessage) && this.config.commandResponsePublishTwice === 'eventAndError')
              ) {
                const eventTopic = getTopicName.bind(this)(responseMessage)

                this.connection?.publish(eventTopic, responseData, { headers })
              }
            },
          )
        } catch (error) {
          const err = new UnhandledError(StatusCode.InternalServerError, 'Failed to consume command response message', {
            error,
          })
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: err.message,
          })
          span.recordException(err)
          this.emit(EventBridgeEventNames.EventbridgeError, err)
          log.error({ err }, 'Failed to consume command response message')
          throw err
        }
      },
    )
  }

  return handleCommand
}