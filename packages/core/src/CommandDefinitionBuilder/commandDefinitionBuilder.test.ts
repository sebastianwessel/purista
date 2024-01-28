import { createSandbox } from 'sinon'
import { z } from 'zod'

import { Service } from '../core/index.js'
import { safeBind } from '../helper/index.js'
import { getEventBridgeMock, getLoggerMock } from '../mocks/index.js'
import { CommandDefinitionBuilder } from './CommandDefinitionBuilder.impl.js'

describe('CommandDefinitionBuilder', () => {
  const sandbox = createSandbox()
  const service = new Service({
    info: { serviceName: 'TestService', serviceVersion: '1', serviceDescription: 'A service' },
    commandDefinitionList: [],
    subscriptionDefinitionList: [],
    logger: getLoggerMock(sandbox).mock,
    eventBridge: getEventBridgeMock(sandbox).mock,
    config: {},
  })

  const functionPayloadSchema = z.object({ foo: z.string(), bar: z.number() })
  const functionParameterSchema = z.object({ paramOne: z.string(), paramTwo: z.number() })
  const functionOutputSchema = z.object({
    result: z.object({
      payload: z.object({ foo: z.string(), bar: z.number(), other: z.string() }),
      parameter: z.object({ paramOne: z.string(), paramTwo: z.number() }),
    }),
  })
  const transformPayloudSchema = z.string()
  const transformParameterSchema = z.string()
  const transformOutputSchema = z.string()

  const beforeOneStub = sandbox.stub()
  const afterOneStub = sandbox.stub()

  const builder = new CommandDefinitionBuilder('testCommand', 'a unit test command')
    .addPayloadSchema(functionPayloadSchema)
    .addParameterSchema(functionParameterSchema)
    .addOutputSchema(functionOutputSchema)
    .setTransformInput(transformPayloudSchema, transformParameterSchema, async (_context, payload, parameter) => {
      const pay = JSON.parse(payload)
      const param = JSON.parse(parameter)

      return {
        payload: pay,
        parameter: param,
      }
    })
    .setTransformOutput(transformOutputSchema, async (_context, payload, _parameter) => {
      return JSON.stringify(payload)
    })
    .setBeforeGuardHooks({
      beforeOne: async (_context, payload, parameter) => {
        beforeOneStub(payload, parameter)
      },
    })
    .setAfterGuardHooks({
      afterOne: async (_context, fnOutputPayload, parameter) => {
        afterOneStub(fnOutputPayload, parameter)
      },
    })
    .canInvoke('OtherService', '2', 'testCommand', functionOutputSchema, functionPayloadSchema, functionParameterSchema)
    .canEmit('some', z.object({ example: z.string() }))
    .setCommandFunction(async (context, payload, parameter) => {
      const result = await context.service.OtherService[2].testCommand(payload, parameter)

      context.emit('some', { example: 'test' })

      return result
    })

  const payload = {
    foo: 'foo',
    bar: 1,
  }
  const parameter = {
    paramOne: 'Parameter 1',
    paramTwo: 2,
  }

  beforeEach(() => {
    sandbox.reset()
  })

  afterAll(() => {
    sandbox.restore()
  })

  it('can build a command with schemas', async () => {
    const commandFunction = safeBind(builder.getCommandFunction(), service)
    const context = builder.getCommandContextMock(JSON.stringify(payload), JSON.stringify(parameter))
    context.stubs.service.OtherService[2].testCommand.callsFake(async (payload, parameter) => {
      return {
        result: {
          payload: { ...payload, other: 'added by invoke' },
          parameter,
        },
      }
    })

    // context.stubs.emit['some'].rejects(new Error('stub works'))

    const result = await commandFunction(context.mock, payload, parameter)

    expect(result).toStrictEqual({
      result: {
        payload: { ...payload, other: 'added by invoke' },
        parameter,
      },
    })

    expect(context.stubs.emit['some'].called).toBeTruthy()
    expect(beforeOneStub.callCount).toBe(1)
  })

  it('does not throw on transform input', async () => {
    const fn = builder.getTransformInputFunction()

    if (!fn) {
      expect(fn).toBeDefined()
      return
    }

    const transformFunction = safeBind(fn, service)

    const context = builder.getCommandTransformContextMock(JSON.stringify(payload), JSON.stringify(parameter), sandbox)

    const result = await transformFunction(context.mock, JSON.stringify(payload), JSON.stringify(parameter))

    expect(result).toStrictEqual({ payload, parameter })
  })

  it('does not throw on transform output', async () => {
    const fn = builder.getTransformOutputFunction()

    if (!fn) {
      expect(fn).toBeDefined()
      return
    }

    const transformFunction = safeBind(fn, service)

    const context = builder.getCommandTransformContextMock(JSON.stringify(payload), JSON.stringify(parameter), sandbox)

    const result = await transformFunction(
      context.mock,
      { result: { payload: { ...payload, other: 'added by invoke' }, parameter } },
      parameter,
    )

    expect(result).toStrictEqual(
      JSON.stringify({ result: { payload: { ...payload, other: 'added by invoke' }, parameter } }),
    )
  })
})
