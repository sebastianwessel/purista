import { ErrorResponse, getErrorMessageForCode, StatusCode } from '../../../core'
import { Handler } from '../../types'

export type InternalError500HandlerOptions = {}

/**
 * It returns an object with default values for the InternalError500HandlerOptions.
 * @returns An object with the following properties:
 */
export const getDefaultInternalError500HandlerOptions = (): InternalError500HandlerOptions => {
  const defaultConfig = {}
  return defaultConfig
}

/**
 * Creates a handler that returns a 500 Internal Server Error response
 * @param options - An object that contains the following properties:
 * @returns A handler function that returns a context object.
 */
export const createInternalError500Handler = (options = getDefaultInternalError500HandlerOptions()): Handler => {
  const _config = { ...getDefaultInternalError500HandlerOptions(), ...options }

  const internalError500Handler: Handler = async function (_log, _request, response, context) {
    const errorResponse: ErrorResponse = {
      status: StatusCode.InternalServerError,
      message: getErrorMessageForCode(StatusCode.InternalServerError),
      traceId: context.traceId,
    }
    response.statusCode = errorResponse.status
    response.setHeader('content-type', 'application/json; charset=utf-8')
    response.setHeader('x-trace-id', context.traceId as string)
    response.end(JSON.stringify(errorResponse))
    context.isResponseSend = true
    return context
  }

  return internalError500Handler
}
