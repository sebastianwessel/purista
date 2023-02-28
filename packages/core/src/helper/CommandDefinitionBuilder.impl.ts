import { generateSchema } from '@anatine/zod-openapi'
import { SchemaObject } from 'openapi3-ts'
import type { z } from 'zod'

import type {
  CommandAfterGuardHook,
  CommandBeforeGuardHook,
  CommandDefinition,
  CommandFunction,
  CommandTransformInputHook,
  CommandTransformOutputHook,
  ServiceClass,
  StatusCode,
} from '../core'
import { ContentType, HttpExposedServiceMeta, QueryParameter } from '../httpserver'
import { getCommandFunctionWithValidation } from './getCommandFunctionWithValidation'
import type { SupportedHttpMethod } from './types'

/**
 * Command definition builder is a helper to create and define a command for a service.
 * It helps to set all needed information like schemas and hooks.
 * With these information, the types are automatically set and extended.
 *
 * A working schema definition needs at least a command name, a short description and the function implementation.
 *
 */
export class CommandDefinitionBuilder<
  ServiceClassType extends ServiceClass,
  MessagePayloadType = unknown,
  MessageParamsType = undefined,
  MessageResultType = void,
  FunctionPayloadType = MessagePayloadType,
  FunctionParamsType = MessageParamsType,
  FunctionResultType = MessageResultType,
> {
  private httpMetadata?: HttpExposedServiceMeta
  private inputSchema?: z.ZodType
  private outputSchema?: z.ZodType
  private parameterSchema?: z.ZodType
  private queryParameter: QueryParameter[] = []

  private tags: string[] = []

  private summary?: string

  private errorStatusCodes: StatusCode[] = []

  private isSecure = true

  private hooks: {
    transformInput?: {
      transformInputSchema: z.ZodType
      transformParameterSchema: z.ZodType
      transformFunction: CommandTransformInputHook<ServiceClassType, any, any, any, any>
    }
    beforeGuard: CommandBeforeGuardHook<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      FunctionPayloadType,
      FunctionParamsType
    >[]
    afterGuard: CommandAfterGuardHook<ServiceClassType, MessageResultType, MessagePayloadType, MessageParamsType>[]
    transformOutput?: {
      transformOutputSchema: z.ZodType
      transformFunction: CommandTransformOutputHook<ServiceClassType, any, any, FunctionParamsType, any>
    }
  } = {
    transformInput: undefined,
    beforeGuard: [],
    afterGuard: [],
    transformOutput: undefined,
  }

  private fn?: CommandFunction<
    ServiceClassType,
    MessagePayloadType,
    MessageParamsType,
    FunctionPayloadType,
    FunctionParamsType,
    FunctionResultType
  >

  // eslint-disable-next-line no-useless-constructor
  constructor(private commandName: string, private commandDescription: string, private eventName?: string) {}

  /*
   * Event name of success response message.
   * This makes it easy to subscribe to something like `UserCreated` (optional add service version to the subscription).
   * Otherwise you will need to subscribe to service name, service function, and message type to get the message.
   * It is also essential to have this possibility to be able to build event sourcing architectures.
   */
  setSuccessEventName(eventName: string) {
    this.eventName = eventName
    return this
  }

  /**
   * Add a schema for input payload validation.
   * Types for payload of message and function payload input are generated from given schema.
   * @param inputSchema The schema validation for input payload
   * @returns CommandDefinitionBuilder
   */
  addPayloadSchema<I = unknown, D extends z.ZodTypeDef = z.ZodTypeDef, O = unknown>(inputSchema: z.ZodType<O, D, I>) {
    this.inputSchema = inputSchema
    return this as unknown as CommandDefinitionBuilder<
      ServiceClassType,
      I,
      MessageParamsType,
      MessageResultType,
      O,
      FunctionParamsType,
      FunctionResultType
    >
  }

  /**
   * Add a schema for output payload validation.
   * Types for payload of message and function payload output are generated from given schema.
   * @param outputSchema The schema validation for output payload
   * @returns CommandDefinitionBuilder
   */
  addOutputSchema<I, D extends z.ZodTypeDef, O>(outputSchema: z.ZodType<O, D, I>) {
    this.outputSchema = outputSchema
    return this as unknown as CommandDefinitionBuilder<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      O,
      FunctionPayloadType,
      FunctionParamsType,
      I
    >
  }

  /**
   * Add a schema for output parameter validation.
   * Types for parameter of message and function parameter output are generated from given schema.
   * @param parameterSchema The schema validation for output parameter
   * @returns CommandDefinitionBuilder
   */
  addParameterSchema<I, D extends z.ZodTypeDef, O>(parameterSchema: z.ZodType<O, D, I>) {
    this.parameterSchema = parameterSchema
    return this as unknown as CommandDefinitionBuilder<
      ServiceClassType,
      MessagePayloadType,
      I,
      MessageResultType,
      FunctionPayloadType,
      O,
      FunctionResultType
    >
  }

  /**
   * Define query parameters if you expose the function as http endpoint.
   * Query parameters are add to openApi definition.
   * Query parameters are add to input parameters.
   *
   * @example
   * ```ts
   * .addQueryParameters(
   *   {
   *     required: false,
   *     name: 'search',
   *   },
   *   {
   *     required: false,
   *     name: 'limit',
   *   },
   * )
   * ```
   *
   * @param queryParams Add one or more query parameter definitions
   * @returns CommandDefinitionBuilder
   */
  addQueryParameters(...queryParams: QueryParameter[]) {
    this.queryParameter.push(...queryParams)
    return this
  }

  /**
   * Add tags for openApi definition for given function.
   * It is recommended to use some enum for tags to avoid typo issues.
   *
   * @example
   * ```ts
   * addTags('User','Public')
   * ```
   *
   * @param tags List of tag strings
   * @returns CommandDefinitionBuilder
   */
  addTags(...tags: string[]) {
    this.tags.push(...tags)
    return this
  }

  /**
   * If a function can return other status codes you should add them to openApi definition.
   * Per default, 200, 204, 400, 401 and 500 can be autogenerated in most cases.
   * Special cases or different status codes should be added with this function.
   *
   * @example
   * ```ts
   * addErrorStatusCodes(StatusCode.PaymentRequired, StatusCode.Conflict)
   * ```
   *
   * @param codes List of status codes
   * @returns CommandDefinitionBuilder
   */
  addErrorStatusCodes(...codes: StatusCode[]) {
    this.errorStatusCodes.push(...codes)
    return this
  }

  /**
   * Set a transform input hook which will encode or transform the input payload and parameters.
   * Will be executed as first step before input validation, before guard and the function itself.
   * This will change the type of input message payload and input message parameter.
   * @param transformInput Transform input function
   * @returns CommandDefinitionBuilder
   */
  setTransformInput<
    PayloadIn = MessagePayloadType,
    ParamsIn = MessageParamsType,
    PayloadOut = MessagePayloadType,
    ParamsOut = MessageParamsType,
    PayloadD extends z.ZodTypeDef = z.ZodTypeDef,
    ParamsD extends z.ZodTypeDef = z.ZodTypeDef,
  >(
    transformInputSchema: z.ZodType<PayloadOut, PayloadD, PayloadIn>,
    transformParameterSchema: z.ZodType<ParamsOut, ParamsD, ParamsIn>,
    transformFunction: CommandTransformInputHook<ServiceClassType, PayloadOut, ParamsOut, PayloadIn, ParamsIn>,
  ) {
    this.hooks.transformInput = {
      transformFunction,
      transformInputSchema,
      transformParameterSchema,
    }
    return this as unknown as CommandDefinitionBuilder<
      ServiceClassType,
      PayloadIn,
      ParamsIn,
      MessageResultType,
      FunctionPayloadType,
      FunctionParamsType,
      FunctionResultType
    >
  }

  /**
   * Set a transform output hook which will encode or transform the response payload.
   * Will be executed at very last step after function execution, output validation and after guard hooks.
   * This will change the type of output message payload.
   * @param transformOutput Transform output function
   * @returns CommandDefinitionBuilder
   */
  setTransformOutput<PayloadOut, PayloadD extends z.ZodTypeDef, PayloadIn>(
    transformOutputSchema: z.ZodType<PayloadOut, PayloadD, PayloadIn>,
    transformFunction: CommandTransformOutputHook<
      ServiceClassType,
      PayloadOut,
      MessagePayloadType,
      FunctionParamsType,
      PayloadIn
    >,
  ) {
    this.hooks.transformOutput = {
      transformFunction,
      transformOutputSchema,
    }
    return this as unknown as CommandDefinitionBuilder<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      PayloadOut,
      FunctionPayloadType,
      FunctionParamsType,
      FunctionResultType
    >
  }

  /**
   * Set one or more before guard hook(s).
   * If there are multiple before guard hooks, they are executed in parallel
   * @param beforeGuards Before guard function
   * @returns CommandDefinitionBuilder
   */
  setBeforeGuardHook(
    ...beforeGuards: CommandBeforeGuardHook<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      FunctionPayloadType,
      FunctionParamsType
    >[]
  ) {
    this.hooks.beforeGuard.push(...beforeGuards)
    return this
  }

  /**
   * Set one or more after guard hook(s).
   * If there are multiple after guard hooks, they are executed in parallel
   * @param afterGuard After guard function
   * @returns CommandDefinitionBuilder
   */
  setAfterGuardHook(
    ...afterGuard: CommandAfterGuardHook<ServiceClassType, MessageResultType, MessagePayloadType, MessageParamsType>[]
  ) {
    this.hooks.afterGuard.push(...afterGuard)
    return this
  }

  /**
   * Mark the function to be exposed as http endpoint.
   * @param method Http method POST, PUT, PATCH, GET, DELETE
   * @param path The url path
   * @param contentType input content type defaults to application/json
   * @param contentTypeResponse response content type defaults to application/json
   * @returns CommandDefinitionBuilder
   */
  exposeAsHttpEndpoint(
    method: SupportedHttpMethod,
    path: string,
    contentType: ContentType = 'application/json',
    contentTypeResponse: ContentType = 'application/json',
  ) {
    this.httpMetadata = {
      expose: {
        http: {
          method,
          path,
          contentType,
          contentTypeResponse,
        },
      },
    }
    return this
  }

  /**
   * enable or disable security for this endpoint
   * @param enabled Defaults to true if not set means "enable security"
   * @returns CommandDefinitionBuilder
   */
  enableHttpSecurity(enabled = true) {
    this.isSecure = enabled
    return this
  }

  /**
   * enable or disable security for this endpoint
   * @param enabled Defaults to tre if not set meaning "disable security"
   * @returns CommandDefinitionBuilder
   */
  disableHttpSecurity(disabled = true) {
    this.isSecure = !disabled
    return this
  }

  /**
   * Set the function summary text used for example in openApi documentation
   *
   * @example
   * ```ts
   * setSummary('Some function summary')
   * ```
   *
   * @param summary Summary text
   * @returns CommandDefinitionBuilder
   */
  setSummary(summary: string) {
    this.summary = summary
    return this
  }

  private extendWithHttpMetadata(
    definition: CommandDefinition<
      ServiceClassType,
      Record<string, unknown>,
      MessagePayloadType,
      MessageParamsType,
      MessageResultType,
      FunctionPayloadType,
      FunctionParamsType
    >,
  ) {
    if (!this.httpMetadata) {
      return definition
    }

    const def = definition as CommandDefinition<
      ServiceClassType,
      HttpExposedServiceMeta,
      MessagePayloadType,
      MessageParamsType,
      MessageResultType,
      FunctionPayloadType,
      FunctionParamsType
    >

    def.metadata.expose = {
      ...(def.metadata.expose || {}),
      ...this.httpMetadata.expose,
    }

    const inputPayloadSchema: any = this.hooks.transformInput?.transformInputSchema || this.inputSchema
    const inputParameterSchema: any = this.hooks.transformInput?.transformParameterSchema || this.parameterSchema
    const outputPayloadSchema: any = this.hooks.transformOutput?.transformOutputSchema || this.outputSchema

    def.metadata.expose.http.openApi = {
      description: this.commandDescription,
      summary: this.summary || this.commandName,
      isSecure: this.isSecure,
      inputPayload: inputPayloadSchema ? (generateSchema(inputPayloadSchema) as SchemaObject) : undefined,
      parameter: inputParameterSchema ? (generateSchema(inputParameterSchema) as SchemaObject) : undefined,
      outputPayload: outputPayloadSchema ? (generateSchema(outputPayloadSchema) as SchemaObject) : undefined,
      query: this.queryParameter,
      tags: this.tags,
      additionalStatusCodes: this.errorStatusCodes,
    }

    return def
  }

  /**
   * Creates and returns the CommandDefinition used as input for the service.
   * @returns CommandDefinition
   */
  getDefinition(): CommandDefinition<
    ServiceClassType,
    Record<string, unknown>,
    MessagePayloadType,
    MessageParamsType,
    MessageResultType,
    FunctionPayloadType,
    FunctionParamsType
  > {
    if (!this.fn) {
      throw new Error('CommandDefinitionBuilder: missing function implementation')
    }

    const eventName = this.eventName
    let definition: CommandDefinition<
      ServiceClassType,
      Record<string, unknown>,
      MessagePayloadType,
      MessageParamsType,
      MessageResultType,
      FunctionPayloadType,
      FunctionParamsType
    > = {
      commandName: this.commandName,
      commandDescription: this.commandDescription,
      metadata: {},
      eventName,
      call: getCommandFunctionWithValidation<
        ServiceClassType,
        MessagePayloadType,
        MessageParamsType,
        MessageResultType,
        FunctionPayloadType,
        FunctionParamsType,
        FunctionResultType
      >(this.fn, this.inputSchema, this.parameterSchema, this.outputSchema, this.hooks.beforeGuard),
      hooks: this.hooks,
    }

    definition = this.extendWithHttpMetadata(definition)

    return definition
  }

  /**
   *
   * @deprecated use setCommandFunction instead. It will be removed soon.
   */
  public setFunction(
    fn: CommandFunction<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      FunctionPayloadType,
      FunctionParamsType,
      FunctionResultType
    >,
  ): CommandDefinitionBuilder<
    ServiceClassType,
    MessagePayloadType,
    MessageParamsType,
    MessageResultType,
    FunctionPayloadType,
    FunctionParamsType,
    FunctionResultType
  > {
    return this.setCommandFunction(fn)
  }

  /**
   * Required: Set the function implementation.
   * The types should be automatically set as soon as schemas previously defined.
   * As the function will be a a function of a service class you need to implement as function declaration.
   * Anonymous functions do not have access to the `this` scope.
   *
   * @example
   * ```ts
   * async function (context, payload, parameter) {
   *
   *    return `the result output payload`
   * }
   * ```
   * @param fn the function implementation
   * @returns CommandDefinitionBuilder
   */
  public setCommandFunction(
    fn: CommandFunction<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      FunctionPayloadType,
      FunctionParamsType,
      FunctionResultType
    >,
  ): CommandDefinitionBuilder<
    ServiceClassType,
    MessagePayloadType,
    MessageParamsType,
    MessageResultType,
    FunctionPayloadType,
    FunctionParamsType,
    FunctionResultType
  > {
    this.fn = fn as unknown as CommandFunction<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      FunctionPayloadType,
      FunctionParamsType,
      FunctionResultType
    >

    return this as unknown as CommandDefinitionBuilder<
      ServiceClassType,
      MessagePayloadType,
      MessageParamsType,
      MessageResultType,
      FunctionPayloadType,
      FunctionParamsType,
      FunctionResultType
    >
  }

  /**
   *
   * @deprecated use getCommandFunction instead. It will be removed soon.
   */
  getFunction(): CommandFunction<
    ServiceClassType,
    MessagePayloadType,
    MessageParamsType,
    FunctionPayloadType,
    FunctionParamsType,
    FunctionResultType
  > {
    return this.getCommandFunction()
  }

  /**
   * Get the function implementation
   * @returns the function
   */
  getCommandFunction(): CommandFunction<
    ServiceClassType,
    MessagePayloadType,
    MessageParamsType,
    FunctionPayloadType,
    FunctionParamsType,
    FunctionResultType
  > {
    if (!this.fn) {
      throw new Error(`No function implementation for ${this.commandName}`)
    }
    return this.fn
  }
}