/**
The secret store adapter for Azure Key Vault.
It will store, retrive, update or remove secrets in Azure Key Vault.

For performance reasons, and to reduce costs, the secret values are cached in memory after first fetch.

You can disable the whole caching via config by setting enableCache to false.
If the cache is enabled, you can set the ttl for cached secret values via config cacheTtl (in ms).

This will return the cached secret if available and if ttl is not exceeded.
If a secret value exceeds the ttl, it does not automatically get removed from cache.
It will be removed/overwritten on next get request.

@example ```typescript
const config = {
  vaultUrl: 'https://[KEY_VAULT_NAME].vault.azure.net'
}

const store = new AzureSecretStore({ config })

await store.setSecret('mySecret', 'value')

let value = await store.getSecret('mySecret')
console.log(value) // outputs: { mySecret: 'value' }

await store.removeSecret('mySecret')

value = await store.getSecret('mySecret')
console.log(value) // outputs: undefined

```
@module
*/
export * from './AzureSecretStore.impl.js'
export * from './types.js'
export * from './version.js'
