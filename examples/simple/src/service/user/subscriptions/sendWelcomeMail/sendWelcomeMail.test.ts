import { createTestCommandMsg, getEventBridgeMock, getLoggerMock, getSubscriptionContextMock } from '@purista/core'

import { UserService } from '../../UserService'
import functionDefinition from './index'

const f = functionDefinition.getFunction()

const service = new UserService(getLoggerMock().mock, getEventBridgeMock().mock)
const fn = f.bind(service)

test('returns a new user id', async () => {
  const payload = {
    email: 'mail@example.com',
    password: 'the_password',
    test: '',
  }

  const parameter = {}

  const messagePayload = { payload: { payload, parameter } }

  const context = getSubscriptionContextMock(createTestCommandMsg(messagePayload))

  // as we have a subscription here.
  // the function has only payload as second parameter.
  // if your subscription is listening on command
  await fn(context.mock, messagePayload)

  expect(context.stubs.logger.info.called).toBeTruthy()
})
