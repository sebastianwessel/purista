[PURISTA API - v1.4.9](../README.md) / [Modules](../modules.md) / [@purista/core](../modules/purista_core.md) / EventBridgeBaseClass

# Class: EventBridgeBaseClass<ConfigType\>

[@purista/core](../modules/purista_core.md).EventBridgeBaseClass

The base class to be extended by event bridge implementations

## Type parameters

| Name |
| :------ |
| `ConfigType` |

## Hierarchy

- [`GenericEventEmitter`](purista_core.GenericEventEmitter.md)<[`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)\>

  ↳ **`EventBridgeBaseClass`**

  ↳↳ [`DefaultEventBridge`](purista_core.DefaultEventBridge.md)

## Table of contents

### Constructors

- [constructor](purista_core.EventBridgeBaseClass.md#constructor)

### Properties

- [config](purista_core.EventBridgeBaseClass.md#config)
- [defaultCommandTimeout](purista_core.EventBridgeBaseClass.md#defaultcommandtimeout)
- [instanceId](purista_core.EventBridgeBaseClass.md#instanceid)
- [logger](purista_core.EventBridgeBaseClass.md#logger)
- [name](purista_core.EventBridgeBaseClass.md#name)
- [traceProvider](purista_core.EventBridgeBaseClass.md#traceprovider)

### Methods

- [destroy](purista_core.EventBridgeBaseClass.md#destroy)
- [emit](purista_core.EventBridgeBaseClass.md#emit)
- [getTracer](purista_core.EventBridgeBaseClass.md#gettracer)
- [off](purista_core.EventBridgeBaseClass.md#off)
- [on](purista_core.EventBridgeBaseClass.md#on)
- [removeAllListeners](purista_core.EventBridgeBaseClass.md#removealllisteners)
- [start](purista_core.EventBridgeBaseClass.md#start)
- [startActiveSpan](purista_core.EventBridgeBaseClass.md#startactivespan)
- [wrapInSpan](purista_core.EventBridgeBaseClass.md#wrapinspan)

## Constructors

### constructor

• **new EventBridgeBaseClass**<`ConfigType`\>(`name`, `config`)

#### Type parameters

| Name |
| :------ |
| `ConfigType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `config` | [`EventBridgeConfig`](../modules/purista_core.md#eventbridgeconfig)<[`Complete`](../modules/purista_core.md#complete)<`ConfigType`\>\> |

#### Overrides

[GenericEventEmitter](purista_core.GenericEventEmitter.md).[constructor](purista_core.GenericEventEmitter.md#constructor)

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:28](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L28)

## Properties

### config

• **config**: [`Complete`](../modules/purista_core.md#complete)<[`EventBridgeConfig`](../modules/purista_core.md#eventbridgeconfig)<[`Complete`](../modules/purista_core.md#complete)<`ConfigType`\>\>\>

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:21](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L21)

___

### defaultCommandTimeout

• **defaultCommandTimeout**: `number`

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:27](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L27)

___

### instanceId

• **instanceId**: `string`

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:25](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L25)

___

### logger

• **logger**: [`Logger`](purista_core.Logger.md)

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:18](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L18)

___

### name

• **name**: `string`

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:23](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L23)

___

### traceProvider

• **traceProvider**: `NodeTracerProvider`

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:19](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L19)

## Methods

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:154](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L154)

___

### emit

▸ **emit**<`K`\>(`eventName`, `parameter?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/purista_core.md#eventkey)<[`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `parameter?` | [`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)[`K`] |

#### Returns

`void`

#### Inherited from

[GenericEventEmitter](purista_core.GenericEventEmitter.md).[emit](purista_core.GenericEventEmitter.md#emit)

#### Defined in

[packages/core/src/core/types/GenericEventEmitter.ts:24](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/types/GenericEventEmitter.ts#L24)

___

### getTracer

▸ **getTracer**(): `Tracer`

Returns open telemetry tracer of this service

#### Returns

`Tracer`

Tracer

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:69](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L69)

___

### off

▸ **off**<`K`\>(`eventName`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/purista_core.md#eventkey)<[`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `fn` | [`EventReceiver`](../modules/purista_core.internal.md#eventreceiver)<[`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)[`K`]\> |

#### Returns

`void`

#### Inherited from

[GenericEventEmitter](purista_core.GenericEventEmitter.md).[off](purista_core.GenericEventEmitter.md#off)

#### Defined in

[packages/core/src/core/types/GenericEventEmitter.ts:20](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/types/GenericEventEmitter.ts#L20)

___

### on

▸ **on**<`K`\>(`eventName`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/purista_core.md#eventkey)<[`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `fn` | [`EventReceiver`](../modules/purista_core.internal.md#eventreceiver)<[`EventBridgeEvents`](../modules/purista_core.md#eventbridgeevents)[`K`]\> |

#### Returns

`void`

#### Inherited from

[GenericEventEmitter](purista_core.GenericEventEmitter.md).[on](purista_core.GenericEventEmitter.md#on)

#### Defined in

[packages/core/src/core/types/GenericEventEmitter.ts:16](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/types/GenericEventEmitter.ts#L16)

___

### removeAllListeners

▸ **removeAllListeners**(): `void`

#### Returns

`void`

#### Inherited from

[GenericEventEmitter](purista_core.GenericEventEmitter.md).[removeAllListeners](purista_core.GenericEventEmitter.md#removealllisteners)

#### Defined in

[packages/core/src/core/types/GenericEventEmitter.ts:28](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/types/GenericEventEmitter.ts#L28)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:155](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L155)

___

### startActiveSpan

▸ **startActiveSpan**<`F`\>(`name`, `opts`, `context?`, `fn`): `Promise`<`F`\>

Start a child span for opentelemetry tracking

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | name of span |
| `opts` | `SpanOptions` | `undefined` | span options |
| `context` | `undefined` \| `Context` | `undefined` | optional context |
| `fn` | (`span`: `Span`) => `Promise`<`F`\> | `undefined` | function to be executed within the span |

#### Returns

`Promise`<`F`\>

return value of fn

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:81](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L81)

___

### wrapInSpan

▸ **wrapInSpan**<`F`\>(`name`, `opts`, `fn`, `context?`): `Promise`<`F`\>

Start span for opentelemetry tracking on same level.
The created span will not become the "active" span within opentelemetry!

This means during logging and similar the spanId of parent span is logged.

Use wrapInSpan for marking points in flow of one bigger function,
but not to trace the program flow itself

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of span |
| `opts` | `SpanOptions` | span options |
| `fn` | (`span`: `Span`) => `Promise`<`F`\> | function te be executed in the span |
| `context?` | `Context` | span context |

#### Returns

`Promise`<`F`\>

return value of fn

#### Defined in

[packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts:131](https://github.com/sebastianwessel/purista/blob/dde9cc6/packages/core/src/core/EventBridge/EventBridgeBaseClass.impl.ts#L131)