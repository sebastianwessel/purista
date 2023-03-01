import * as index from './index'

it('exports core functions', () => {
  // core
  expect(index.DefaultEventBridge).toBeDefined()
  expect(index.createErrorResponse).toBeDefined()
  expect(index.createInfoMessage).toBeDefined()
  expect(index.createSuccessResponse).toBeDefined()
  expect(index.getCleanedMessage).toBeDefined()
  expect(index.getErrorMessageForCode).toBeDefined()
  expect(index.getNewCorrelationId).toBeDefined()
  expect(index.getNewEBMessageId).toBeDefined()
  expect(index.getNewTraceId).toBeDefined()
  expect(index.getTimeoutPromise).toBeDefined()
  expect(index.getUniqueId).toBeDefined()
  expect(index.infoMessageTypes).toBeDefined()
  expect(index.initLogger).toBeDefined()
  expect(index.isCommand).toBeDefined()
  expect(index.isCommandErrorResponse).toBeDefined()
  expect(index.isCommandResponse).toBeDefined()
  expect(index.isCommandSuccessResponse).toBeDefined()
  expect(index.isInfoMessage).toBeDefined()
  expect(index.isInfoServiceFunctionAdded).toBeDefined()
  expect(index.HandledError).toBeDefined()
  expect(index.EBMessageType).toBeDefined()
  expect(index.Service).toBeDefined()
  expect(index.StatusCode).toBeDefined()
  expect(index.UnhandledError).toBeDefined()

  // helper
  expect(index.FunctionDefinitionBuilder).toBeDefined()
  expect(index.CommandDefinitionBuilder).toBeDefined()
  expect(index.getCommandFunctionWithValidation).toBeDefined()
  expect(index.getSubscriptionFunctionWithValidation).toBeDefined()
  expect(index.SubscriptionDefinitionBuilder).toBeDefined()
})
