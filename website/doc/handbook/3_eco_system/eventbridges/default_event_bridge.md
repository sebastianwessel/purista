---
title: Default Event Bridge
description: Use the built in default event bridge of PURISTA
order: 301010
---

# Default Event Bridge

The core package comes with `DefaultEventBridge`, which will work on local without any further installation.
The `DefaultEventBridge` acts as event bridge and simple message broker.

It should work out of the box for single instances.
You can also use it, for simple horizontal scaling, but the messages and states are not shared or load balanced between instances.

This means a subscription is always running on the same instance. Also, any command invocation is done within the same instance.
Sharing of states and data must be done over third party software, like usage of redis or other databases.

Because of this, the `DefaultEventBridge` will only work for scenarios, where you deploy your services as single instance monolith (edge) and you don't have the requirement to share messages and states across instances.

A simplified schema of how the `DefaultEventBridge` works:

![single instance](/graphic/single_instance.svg)

::: tip Pros

- no extra message broker needed
- full subscription support
- ideal for local development and debug purpose
:::

::: warning Cons

- does not scale
- no persistance of messages
- no retry mechanism for messages
:::

## Configuration

The `DefaultEventBridge` can be configured to emit every message, which has set the  `eventName` property as javascript event.
This must be enabled in the configuration by setting the `emitMessagesAsEventBridgeEvents` property to true.
Than, you can subscribe to specific events in regular JavaScript fashion.
The event names will be prefixed with `custom-` to avoid name collisions.

## Usage example

```typescript
import { DefaultEventBridge } from '@purista/core'

const eventBridge = new DefaultEventBridge({ emitMessagesAsEventBridgeEvents: true })
await eventBridge.start()

eventBridge.on('custom-example-event', (msg)=> {
  console.log(JSON.stringify(msg, null, 2))
})

// ... register and start your services

```