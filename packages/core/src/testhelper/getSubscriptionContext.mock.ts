import { SinonSandbox, stub } from 'sinon'

import { EBMessage, SubscriptionFunctionContext } from '../core'
import { getLoggerMock } from './getLogger.mock'

/* A function that returns a mock object for subscription function context */
export const getSubscriptionContextMock = (message: EBMessage, sandbox?: SinonSandbox) => {
  const logger = getLoggerMock(sandbox)
  const stubs = {
    logger: logger.stubs,
    emit: sandbox?.stub() || stub(),
    invoke: sandbox?.stub() || stub(),
    wrapInSpan: sandbox?.stub() || stub(),
    startActiveSpan: sandbox?.stub() || stub(),
  }

  const mock: SubscriptionFunctionContext = {
    logger: logger.mock,
    message,
    emit: stubs.emit.rejects(new Error('emit is not stubbed')),
    invoke: stubs.invoke.rejects(new Error('Invoke is not stubbed')),
    wrapInSpan: stubs.wrapInSpan.callsFake((_name, _opts, fn) => fn()),
    startActiveSpan: stubs.startActiveSpan.callsFake((_name, _opts, _context, fn) => fn()),
  }

  return {
    mock,
    stubs,
  }
}
