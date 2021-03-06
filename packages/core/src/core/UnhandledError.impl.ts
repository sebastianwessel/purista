import { HandledError } from './HandledError.impl'
import { getErrorMessageForCode } from './helper'
import { CommandErrorResponse, ErrorResponse, StatusCode, TraceId } from './types'

/**
 * A unhandled error will be thrown if some error response is returned during invoking a service function
 * or when the invocation timed out.
 * This error is not handled by business logic and it is maybe unwanted to expose this error outside.
 *
 * Unhandled error are automatically converted into "500 Internal Server Error" to the outside world.
 */
export class UnhandledError extends Error {
  constructor(
    public errorCode: StatusCode = StatusCode.InternalServerError,
    message?: string,
    public data?: unknown,
    public traceId?: TraceId,
  ) {
    super(message || getErrorMessageForCode(errorCode))
  }

  /**
   * Create a error object from EBMessage error message
   * @param message CommandErrorResponse
   * @returns UnhandledError
   */
  static fromMessage(message: CommandErrorResponse): UnhandledError {
    return new UnhandledError(message.response.status, message.response.message, message.response.data, message.traceId)
  }

  /**
   * Create a handled error from unhandled error
   * @returns HandledError
   */
  intoHandledError(): HandledError {
    return new HandledError(this.errorCode, this.message, this.data, this.traceId)
  }

  /**
   * Returns error response object
   * @returns ErrorResponse
   */
  getErrorResponse() {
    const errorResponse: ErrorResponse = {
      status: this.errorCode,
      message: this.message,
      data: this.data,
      traceId: this.traceId,
    }

    return errorResponse
  }

  /**
   * Returns stringified error response object
   * @returns ErrorResponse as string
   */
  toString() {
    return JSON.stringify(this.getErrorResponse())
  }
}
