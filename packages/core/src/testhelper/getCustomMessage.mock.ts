import {
  CustomMessage,
  EBMessageType,
  getNewCorrelationId,
  getNewEBMessageId,
  getNewInstanceId,
  getNewTraceId,
} from '../core'

/* A function that returns a custom message mock object. */
export const getCustomMessageMessageMock = <PayloadType>(
  eventName: string,
  payload: PayloadType,
  input?: Partial<CustomMessage<PayloadType>>,
): Readonly<CustomMessage<PayloadType>> => {
  const customMessage: Readonly<CustomMessage<PayloadType>> = Object.freeze({
    id: getNewEBMessageId(),
    timestamp: Date.now(),
    messageType: EBMessageType.CustomMessage,
    correlationId: getNewCorrelationId(),
    traceId: getNewTraceId(),
    instanceId: getNewInstanceId(),
    principalId: 'mocked-principal-id',
    eventName,
    sender: {
      serviceName: 'mocked_sender',
      serviceVersion: '1',
      serviceTarget: 'mockedSenderFunction',
    },
    ...input,
    payload,
  })
  return customMessage
}
