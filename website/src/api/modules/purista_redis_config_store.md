[PURISTA API](../README.md) / [Modules](../modules.md) / @purista/redis-config-store

# Module: @purista/redis-config-store

A state store for using redis as storage.
Config values are stored as stringified JSON.

Per default, setting/changing and removal of values are enabled.

**`Example`**

```typescript
const config = {
 enableGet: true, // optional, default is true
 enableRemove: true, // optional, default is true
 enableSet: true, // optional, default is true
 url: 'redis://alice:foobared@awesome.redis.server:6379'
}

const store = new RedisConfigStore(config)

await store.setConfig('stateKey',{ myConfig: 'value' })

let value = await store.getConfig('stateKey')
console.log(value) // outputs: { myConfig: 'value' }

await store.removeConfig('stateKey')

value = await store.getConfig('stateKey')
console.log(value) // outputs: undefined
```

See documentation of underlaying redis lib package for detailed configuration options.

**`See`**

[NODE-REDIS](https://redis.js.org)

## Table of contents

### Classes

- [RedisConfigStore](../classes/purista_redis_config_store.RedisConfigStore.md)

### Type Aliases

- [RedisStoreConfig](purista_redis_config_store.md#redisstoreconfig)

## Type Aliases

### RedisStoreConfig

Ƭ **RedisStoreConfig**<`M`, `F`, `S`\>: `Object`

The redis state store configuration.
It will extend the StoreBaseConfig.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `RedisModules` = `RedisModules` |
| `F` | extends `RedisFunctions` = `RedisFunctions` |
| `S` | extends `RedisScripts` = `RedisScripts` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | `RedisClientOptions`<`M`, `F`, `S`\> |

#### Defined in

[redis-config-store/src/types.ts:7](https://github.com/sebastianwessel/purista/blob/master/packages/redis-config-store/src/types.ts#L7)