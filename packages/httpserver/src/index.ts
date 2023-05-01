/**
 * The HttpServerService is a service which exposes commands of services as http endpoints.  
 * All exposed commands must be marked as exposed endpoints in the CommandBuilder.
 *
 * While the main focus is on development and debug, the HttpServerService will also fit for small projects or running on IoT/edge.
 *
 * Under the hood, [fastify](https://www.fastify.io/) is used as basement.  
 * Because of this, the whole [fastify ecosystem](https://www.fastify.io/ecosystem/) can be used and integrated.
 *
 * The HttpServerService can also be configured, to provide the OpenApi-UI in browsers.  
 * The OpenApi definitions is created from the CommandBuilder settings of each command.  
 * This means, that there are no additional steps or code required, to provide the OpenApi definition.  
 * It is autogenerated mostly from input and output schema definitions.
 * 
 * @example ```typescript
import fastifyStatic from '@fastify/static'
import { DefaultEventBridge, gracefulShutdown, initLogger } from '@purista/core'
import { httpServerV1Service, HttpServerServiceV1Config } from '@purista/httpserver'

const main = async() => {
  const logger = initLogger()

  const eventBridge = new DefaultEventBridge()

  const httpServerConfig: HttpServerServiceV1Config = {
    fastify: {},
    port: 8080,
    logLevel: 'debug',
    domain: 'localhost',
    apiMountPath: '/api',
    openApi: {
      enabled: true,
      info: {
        title: 'backend api',
        description: 'OpenApi definition for server endpoints',
        version: '1.0.0',
      },
    },
  }

  const httpServerService = httpServerV1Service.getInstance(eventBridge, {
    serviceConfig: httpServerConfig,
  })

  // static file handler
  const defaultPublicPath = resolve(__dirname, '..', 'public')
  httpServerService.server?.register(fastifyStatic, {
    root: defaultPublicPath,
    decorateReply: false,
  })

  // start the webserver
  await httpServerService.start()

  // and and start your services here
  // ...
  // ...

  gracefulShutdown(logger, [
    // begin with the event bridge to no longer accept incoming messages
    eventBridge,
    // shut down optional services
    // ...
    // ...
    httpServerService,
  ])
}

main()
```
 * 
 * @module
 */
export * from './service/httpServer/v1/'
export * from './service/ServiceEvent.enum'
export * from './version'
