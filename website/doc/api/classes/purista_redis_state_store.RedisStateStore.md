[PURISTA API](../README.md) / [Modules](../modules.md) / [@purista/redis-state-store](../modules/purista_redis_state_store.md) / RedisStateStore

# Class: RedisStateStore\<M, F, S\>

[@purista/redis-state-store](../modules/purista_redis_state_store.md).RedisStateStore

A state store for using redis as storage.
State values are stored as stringified JSON.

Per default, setting/changing and removal of values are enabled.

**`Example`**

```typescript
const config = {
 enableGet: true, // optional, default is true
 enableRemove: true, // optional, default is true
 enableSet: true, // optional, default is true
 url: 'redis://alice:foobared@awesome.redis.server:6379'
}

const store = new RedisStateStore({ config })

await store.setState('stateKey',{ myState: 'value' })

let value = await store.getState('stateKey')
console.log(value) // outputs: { stateKey: { myState: 'value' } }

await store.removeState('stateKey')

value = await store.getState('stateKey')
console.log(value) // outputs: undefined
```

See documentation of underlaying redis lib package for detailed configuration options.

**`See`**

[NODE-REDIS](https://redis.js.org)

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `RedisModules` = `RedisModules` |
| `F` | extends `RedisFunctions` = `RedisFunctions` |
| `S` | extends `RedisScripts` = `RedisScripts` |

## Hierarchy

- [`StateStoreBaseClass`](purista_core.StateStoreBaseClass.md)\<[`RedisStoreConfig`](../modules/purista_redis_state_store.md#redisstoreconfig)\<`M`, `F`, `S`\>\>

  ↳ **`RedisStateStore`**

## Table of contents

### Constructors

- [constructor](purista_redis_state_store.RedisStateStore.md#constructor)

### Properties

- [client](purista_redis_state_store.RedisStateStore.md#client)
- [config](purista_redis_state_store.RedisStateStore.md#config)
- [logger](purista_redis_state_store.RedisStateStore.md#logger)
- [name](purista_redis_state_store.RedisStateStore.md#name)

### Methods

- [destroy](purista_redis_state_store.RedisStateStore.md#destroy)
- [getClient](purista_redis_state_store.RedisStateStore.md#getclient)
- [getState](purista_redis_state_store.RedisStateStore.md#getstate)
- [removeState](purista_redis_state_store.RedisStateStore.md#removestate)
- [setState](purista_redis_state_store.RedisStateStore.md#setstate)

## Constructors

### constructor

• **new RedisStateStore**\<`M`, `F`, `S`\>(`config?`): [`RedisStateStore`](purista_redis_state_store.RedisStateStore.md)\<`M`, `F`, `S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `RedisModules` = `RedisModules` |
| `F` | extends `RedisFunctions` = `RedisFunctions` |
| `S` | extends `RedisScripts` = `RedisScripts` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Object` | - |
| `config.cacheTtl?` | `number` | Cache time to live in ms |
| `config.config?` | `RedisClientOptions`\<`M`, `F`, `S`\> | - |
| `config.enableCache?` | `boolean` | Enable cache |
| `config.enableGet?` | `boolean` | Enable generally get method |
| `config.enableRemove?` | `boolean` | Enable generally remove method |
| `config.enableSet?` | `boolean` | Enable generally set method |
| `config.logLevel?` | [`LogLevelName`](../modules/purista_core.md#loglevelname) | A log level for new logger if logger is not set |
| `config.logger?` | [`Logger`](purista_core.Logger.md) | A logger instance |

#### Returns

[`RedisStateStore`](purista_redis_state_store.RedisStateStore.md)\<`M`, `F`, `S`\>

#### Overrides

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[constructor](purista_core.StateStoreBaseClass.md#constructor)

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:48](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L48)

## Properties

### client

• **client**: `RedisClientType`\<`M`, `F`, `S`\>

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:46](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L46)

___

### config

• **config**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheTtl?` | `number` | Cache time to live in ms |
| `config?` | `RedisClientOptions`\<`M`, `F`, `S`\> | - |
| `enableCache?` | `boolean` | Enable cache |
| `enableGet?` | `boolean` | Enable generally get method |
| `enableRemove?` | `boolean` | Enable generally remove method |
| `enableSet?` | `boolean` | Enable generally set method |
| `logLevel?` | [`LogLevelName`](../modules/purista_core.md#loglevelname) | A log level for new logger if logger is not set |
| `logger?` | [`Logger`](purista_core.Logger.md) | A logger instance |

#### Inherited from

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[config](purista_core.StateStoreBaseClass.md#config)

#### Defined in

core/dist/commonjs/core/StateStore/StateStoreBaseClass.impl.d.ts:10

___

### logger

• **logger**: [`Logger`](purista_core.Logger.md)

#### Inherited from

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[logger](purista_core.StateStoreBaseClass.md#logger)

#### Defined in

core/dist/commonjs/core/StateStore/StateStoreBaseClass.impl.d.ts:9

___

### name

• **name**: `string`

name of store

#### Inherited from

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[name](purista_core.StateStoreBaseClass.md#name)

#### Defined in

core/dist/commonjs/core/StateStore/StateStoreBaseClass.impl.d.ts:11

## Methods

### destroy

▸ **destroy**(): `Promise`\<`void`\>

disconnects and shuts down the state store

#### Returns

`Promise`\<`void`\>

#### Overrides

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[destroy](purista_core.StateStoreBaseClass.md#destroy)

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:113](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L113)

___

### getClient

▸ **getClient**(): `Promise`\<`RedisClientType`\<`M`, `F`, `S`\>\>

#### Returns

`Promise`\<`RedisClientType`\<`M`, `F`, `S`\>\>

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:54](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L54)

___

### getState

▸ **getState**(`...stateNames`): `Promise`\<`Record`\<`string`, `unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...stateNames` | `string`[] |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Overrides

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[getState](purista_core.StateStoreBaseClass.md#getstate)

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:61](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L61)

___

### removeState

▸ **removeState**(`stateName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[removeState](purista_core.StateStoreBaseClass.md#removestate)

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:82](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L82)

___

### setState

▸ **setState**(`stateName`, `stateValue`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateName` | `string` |
| `stateValue` | `unknown` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StateStoreBaseClass](purista_core.StateStoreBaseClass.md).[setState](purista_core.StateStoreBaseClass.md#setstate)

#### Defined in

[redis-state-store/src/RedisStateStore.impl.ts:98](https://github.com/sebastianwessel/purista/blob/master/packages/redis-state-store/src/RedisStateStore.impl.ts#L98)