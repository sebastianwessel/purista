import { getCommandContextMock, getEventBridgeMock, getLoggerMock } from '@purista/core'
import { createSandbox } from 'sinon'

import { delayV1Service } from '../../delayV1Service.js'
import { fooBarCommandBuilder } from './fooBarCommandBuilder.js'
import type { DelayV1FooBarInputParameter, DelayV1FooBarInputPayload } from './types.js'

describe('service Delay version 1 - command fooBar', () => {
  let sandbox = createSandbox()
  beforeEach(() => {
    sandbox = createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  test('does not throw', async () => {
    const service = delayV1Service.getInstance(getEventBridgeMock(sandbox).mock, {
      logger: getLoggerMock(sandbox).mock,
    })

    const fooBar = fooBarCommandBuilder.getCommandFunction().bind(service)

    const payload: DelayV1FooBarInputPayload = undefined

    const parameter: DelayV1FooBarInputParameter = {}

    const context = getCommandContextMock(payload, parameter, sandbox)

    const result = await fooBar(context.mock, payload, parameter)

    expect(result).toBeUndefined()
  })
})
