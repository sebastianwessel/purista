import { Http2ServerRequest, Http2ServerResponse } from 'http2'

import { Logger } from '../../core'
import { HttpServerService } from '../HttpServerService.impl'
import { Context } from './Context'

export type Handler = (
  this: HttpServerService,
  log: Logger,
  request: Http2ServerRequest,
  response: Http2ServerResponse,
  context: Context<unknown, Record<string, unknown>>,
) => Promise<Context<unknown, Record<string, unknown>>>
