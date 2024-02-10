---
title: The Service Builder
description: Working with the PURISTA service builder
order: 201010
---

# Service builder

The service builder is a powerfull tool, to define a service. The builder helps to keep the code unified, clear & speakable and takes care of configs, types and so on.

To create a new service, please use the CLI command.

```bash
purista add service [serviceName]
```

This will generate all necessary files and structures for you.
In most cases, you only might want to add/change the service config.

Adding commands and subscriptions can also be done via CLI, and does not require manual changes in the service files.

## File structure

### Service definition

As the first step, we will need to set up a service. This can be done by using the service builder.

::: code-group

```typescript [myServiceV1ServiceBuilder.ts]
import { ServiceBuilder, ServiceInfoType } from '@purista/core'

export const myServiceInfo = {
  serviceName: 'MyService',
  serviceVersion: '1',
  serviceDescription: 'my service',
} as const satisfies ServiceInfoType

export const myServiceV1ServiceBuilder = new ServiceBuilder(myServiceInfo)
```

:::

::: tip 💪 Use strong types
Use `as const satisfies ServiceInfoType = {...}` instead of `export const myServiceInfo: ServiceInfoType = {...}` for better types.
:::

::: warning ⚠️ Avoid cycling dependencies
The basic service definition (name, version, config) and adding the commands and subscriptions should be done in seperate files, to prevent cycling dependencies.
The command and subscription builders are generated from the basic service builder, to propagate config & custom classes correctly.
:::

### Add commands

Adding subscriptions to a service builder can be done by using the `addSubscriptionDefinition` method.
It takes a single subscription definition as parameter, which will be generated by  the subscription builder.

::: code-group

```typescript [myServiceV1Service.ts]
import type { CommandDefinitionList } from '@purista/core'


import { pingCommandBuilder } from './command/ping/index.js'
import { fooCommandBuilder } from './command/foo/index.js'
import { myServiceV1ServiceBuilder } from './myServiceV1ServiceBuilder'

const commandDefinitions: CommandDefinitionList<any> = [
  pingCommandBuilder.getDefinition(),
  fooCommandBuilder.getDefinition()
]

export const myServiceV1Service = myServiceV1ServiceBuilder
  .addCommandDefinition(...commandDefinitions)
```

```typescript [myServiceV1ServiceBuilder.ts]
import { ServiceBuilder, ServiceInfoType } from '@purista/core'

export const myServiceInfo = {
  serviceName: 'MyService',
  serviceVersion: '1',
  serviceDescription: 'my service',
} as const satisfies ServiceInfoType

export const myServiceV1ServiceBuilder = new ServiceBuilder(myServiceInfo)
```

:::

::: tip
The additional `const commandDefinitions` is used by the CLI tool!
In regular usecases, you do not need to create or manipulate this file.
:::

### Add subscriptions

::: code-group

```typescript [myServiceV1Service.ts]
import type { CommandDefinitionList, SubscriptionDefinitionList } from '@purista/core' // [!code ++]


import { pingCommandBuilder } from './command/ping/index.js'
import { fooCommandBuilder } from './command/foo/index.js'
import { barSubscriptionBuilder } from './subscription/bar/index.js' // [!code ++]
import { myServiceV1ServiceBuilder } from './myServiceV1ServiceBuilder'

const commandDefinitions: CommandDefinitionList<any> = [
  pingCommandBuilder.getDefinition(),
  fooCommandBuilder.getDefinition()
]

const subscriptionDefinitions: SubscriptionDefinitionList<any> = [  // [!code ++]
  barSubscriptionBuilder.getDefinition()  // [!code ++]
]  // [!code ++]

export const myServiceV1Service = myServiceV1ServiceBuilder
  .addCommandDefinition(...commandDefinitions)
  .addSubscriptionDefinition(...subscriptionDefinitions)  // [!code ++]
```

```typescript [myServiceV1ServiceBuilder.ts]
import { ServiceBuilder, ServiceInfoType } from '@purista/core'

export const myServiceInfo = {
  serviceName: 'MyService',
  serviceVersion: '1',
  serviceDescription: 'my service',
} as const satisfies ServiceInfoType

export const myServiceV1ServiceBuilder = new ServiceBuilder(myServiceInfo)
```

:::

::: tip
The additional `const commandDefinitions` is used by the CLI tool!
In regular usecases, you do not need to create or manipulate this file.
:::

## Create a service instance

The service builder is able to create a new instance of a service.
The most minimal version is, to call the `getInstance` method of the service builder and to provide a event bridge instance as first parameter.

```typescript
const myService = myServiceV1Service.getInstance(eventBridge)
```

At this point, we've created a service instance, but the instance is not fully connected to the event bridge and has not announced the existence of the commands and subscriptions.

We need to start the service, to get a fully working service instance:

```typescript
const myService = myServiceV1Service.getInstance(eventBridge)
await myService.start() // [!code ++]
```

There are two reasons for this 2-step-behaviour.

1. The regular typescript constructur can't be an async function, which makes it hard to handle async method calls - like sending info messages to the event bridge.
2. If you are using a [custom service class](./custom-service-class.md), you might need to do some logic on startup, and only on success, the service should fully connect the event bridge.

### Instance options

The `getInstance` provides a second, optional parameter.