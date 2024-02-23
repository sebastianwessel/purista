import{_ as e,c as t,o as r,V as a}from"./chunks/framework.ITQiifkM.js";const g=JSON.parse('{"title":"Class: DaprSecretStore","description":"","frontmatter":{},"headers":[],"relativePath":"api/classes/purista_dapr_sdk.DaprSecretStore.md","filePath":"api/classes/purista_dapr_sdk.DaprSecretStore.md","lastUpdated":1708505616000}'),o={name:"api/classes/purista_dapr_sdk.DaprSecretStore.md"},d=a('<p><a href="./../README.html">PURISTA API</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/purista_dapr_sdk.html">@purista/dapr-sdk</a> / DaprSecretStore</p><h1 id="class-daprsecretstore" tabindex="-1">Class: DaprSecretStore <a class="header-anchor" href="#class-daprsecretstore" aria-label="Permalink to &quot;Class: DaprSecretStore&quot;">​</a></h1><p><a href="./../modules/purista_dapr_sdk.html">@purista/dapr-sdk</a>.DaprSecretStore</p><p>DaprSecretStore is an adapter which connects to the secret store provided by the underlaying Dapr infrastructure.</p><p>Dapr currently provides only the possibility to fetch a secret. Creating a new secret, changing an existing secret or removal of secrets is not supported.</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./purista_core.SecretStoreBaseClass.html"><code>SecretStoreBaseClass</code></a>&lt;<a href="./../modules/purista_dapr_sdk.html#daprsecretstoreconfig"><code>DaprSecretStoreConfig</code></a>&gt;</p><p>↳ <strong><code>DaprSecretStore</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./purista_dapr_sdk.DaprSecretStore.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./purista_dapr_sdk.DaprSecretStore.html#cache">cache</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#client">client</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#config">config</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#logger">logger</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#name">name</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./purista_dapr_sdk.DaprSecretStore.html#destroy">destroy</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#getsecret">getSecret</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#getsecretimpl">getSecretImpl</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#removesecret">removeSecret</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#removesecretimpl">removeSecretImpl</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#setsecret">setSecret</a></li><li><a href="./purista_dapr_sdk.DaprSecretStore.html#setsecretimpl">setSecretImpl</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new DaprSecretStore</strong>(<code>config?</code>): <a href="./purista_dapr_sdk.DaprSecretStore.html"><code>DaprSecretStore</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>config.cacheTtl?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Cache time to live in ms</td></tr><tr><td style="text-align:left;"><code>config.clientConfig?</code></td><td style="text-align:left;"><a href="./../modules/purista_dapr_sdk.html#daprclientconfig"><code>DaprClientConfig</code></a></td><td style="text-align:left;">The Dapr client config to interact with Dapr sidecar</td></tr><tr><td style="text-align:left;"><code>config.enableCache?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable cache</td></tr><tr><td style="text-align:left;"><code>config.enableGet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally get method</td></tr><tr><td style="text-align:left;"><code>config.enableRemove?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally remove method</td></tr><tr><td style="text-align:left;"><code>config.enableSet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally set method</td></tr><tr><td style="text-align:left;"><code>config.logLevel?</code></td><td style="text-align:left;"><a href="./../modules/purista_core.html#loglevelname"><code>LogLevelName</code></a></td><td style="text-align:left;">A log level for new logger if logger is not set</td></tr><tr><td style="text-align:left;"><code>config.logger?</code></td><td style="text-align:left;"><a href="./purista_core.Logger.html"><code>Logger</code></a></td><td style="text-align:left;">A logger instance</td></tr><tr><td style="text-align:left;"><code>config.metadata?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">Dapr secret store metadata</td></tr><tr><td style="text-align:left;"><code>config.metadata.namespace?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">In case of deploying into namespace other than default, the namespace (e.g. production) must be set</td></tr><tr><td style="text-align:left;"><code>config.secretStoreName?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The name of the secret store</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_dapr_sdk.DaprSecretStore.html"><code>DaprSecretStore</code></a></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts#L20" target="_blank" rel="noreferrer">dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts:20</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;cache&quot;">​</a></h3><p>• <strong>cache</strong>: <a href="./../modules/purista_core.html#secretstorecachemap"><code>SecretStoreCacheMap</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#cache">cache</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:20</p><hr><h3 id="client" tabindex="-1">client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;client&quot;">​</a></h3><p>• <code>Private</code> <strong>client</strong>: <a href="./purista_core.HttpClient.html"><code>HttpClient</code></a>&lt;<a href="./../modules/purista_dapr_sdk.html#daprclientconfig"><code>DaprClientConfig</code></a>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts#L18" target="_blank" rel="noreferrer">dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts:18</a></p><hr><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>• <strong>config</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cacheTtl?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Cache time to live in ms</td></tr><tr><td style="text-align:left;"><code>clientConfig?</code></td><td style="text-align:left;"><a href="./../modules/purista_dapr_sdk.html#daprclientconfig"><code>DaprClientConfig</code></a></td><td style="text-align:left;">The Dapr client config to interact with Dapr sidecar</td></tr><tr><td style="text-align:left;"><code>enableCache?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable cache</td></tr><tr><td style="text-align:left;"><code>enableGet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally get method</td></tr><tr><td style="text-align:left;"><code>enableRemove?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally remove method</td></tr><tr><td style="text-align:left;"><code>enableSet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally set method</td></tr><tr><td style="text-align:left;"><code>logLevel?</code></td><td style="text-align:left;"><a href="./../modules/purista_core.html#loglevelname"><code>LogLevelName</code></a></td><td style="text-align:left;">A log level for new logger if logger is not set</td></tr><tr><td style="text-align:left;"><code>logger?</code></td><td style="text-align:left;"><a href="./purista_core.Logger.html"><code>Logger</code></a></td><td style="text-align:left;">A logger instance</td></tr><tr><td style="text-align:left;"><code>metadata?</code></td><td style="text-align:left;">{ <code>namespace?</code>: <code>string</code> }</td><td style="text-align:left;">Dapr secret store metadata</td></tr><tr><td style="text-align:left;"><code>metadata.namespace?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">In case of deploying into namespace other than default, the namespace (e.g. production) must be set</td></tr><tr><td style="text-align:left;"><code>secretStoreName?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The name of the secret store</td></tr></tbody></table><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#config">config</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:18</p><hr><h3 id="logger" tabindex="-1">logger <a class="header-anchor" href="#logger" aria-label="Permalink to &quot;logger&quot;">​</a></h3><p>• <strong>logger</strong>: <a href="./purista_core.Logger.html"><code>Logger</code></a></p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#logger">logger</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:17</p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#name">name</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:19</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#destroy">destroy</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:28</p><hr><h3 id="getsecret" tabindex="-1">getSecret <a class="header-anchor" href="#getsecret" aria-label="Permalink to &quot;getSecret&quot;">​</a></h3><p>▸ <strong>getSecret</strong>&lt;<code>SecretNames</code>&gt;(<code>...secretNames</code>): <code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>SecretNames</code>, <code>undefined</code> | <code>string</code>&gt;&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>SecretNames</code></td><td style="text-align:left;">extends <code>string</code>[]</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...secretNames</code></td><td style="text-align:left;"><code>SecretNames</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>SecretNames</code>, <code>undefined</code> | <code>string</code>&gt;&gt;</p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#getsecret">getSecret</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:23</p><hr><h3 id="getsecretimpl" tabindex="-1">getSecretImpl <a class="header-anchor" href="#getsecretimpl" aria-label="Permalink to &quot;getSecretImpl&quot;">​</a></h3><p>▸ <strong>getSecretImpl</strong>&lt;<code>SecretNames</code>&gt;(<code>...secretNames</code>): <code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>SecretNames</code>, <code>undefined</code> | <code>string</code>&gt;&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>SecretNames</code></td><td style="text-align:left;">extends <code>string</code>[]</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...secretNames</code></td><td style="text-align:left;"><code>SecretNames</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>SecretNames</code>, <code>undefined</code> | <code>string</code>&gt;&gt;</p><h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#getsecretimpl">getSecretImpl</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts#L55" target="_blank" rel="noreferrer">dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts:55</a></p><hr><h3 id="removesecret" tabindex="-1">removeSecret <a class="header-anchor" href="#removesecret" aria-label="Permalink to &quot;removeSecret&quot;">​</a></h3><p>▸ <strong>removeSecret</strong>(<code>secretName</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>secretName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#removesecret">removeSecret</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:25</p><hr><h3 id="removesecretimpl" tabindex="-1">removeSecretImpl <a class="header-anchor" href="#removesecretimpl" aria-label="Permalink to &quot;removeSecretImpl&quot;">​</a></h3><p>▸ <strong>removeSecretImpl</strong>(<code>_secretName</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>_secretName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-2" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-2" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#removesecretimpl">removeSecretImpl</a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts#L93" target="_blank" rel="noreferrer">dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts:93</a></p><hr><h3 id="setsecret" tabindex="-1">setSecret <a class="header-anchor" href="#setsecret" aria-label="Permalink to &quot;setSecret&quot;">​</a></h3><p>▸ <strong>setSecret</strong>(<code>secretName</code>, <code>secretValue</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>secretName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>secretValue</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#setsecret">setSecret</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/SecretStore/SecretStoreBaseClass.impl.d.ts:27</p><hr><h3 id="setsecretimpl" tabindex="-1">setSecretImpl <a class="header-anchor" href="#setsecretimpl" aria-label="Permalink to &quot;setSecretImpl&quot;">​</a></h3><p>▸ <strong>setSecretImpl</strong>(<code>_secretName</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>_secretName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-3" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-3" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.SecretStoreBaseClass.html">SecretStoreBaseClass</a>.<a href="./purista_core.SecretStoreBaseClass.html#setsecretimpl">setSecretImpl</a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts#L89" target="_blank" rel="noreferrer">dapr-sdk/src/DaprSecretStore/DaprSecretStore.impl.ts:89</a></p>',139),l=[d];function s(i,c,n,h,p,m){return r(),t("div",null,l)}const u=e(o,[["render",s]]);export{g as __pageData,u as default};