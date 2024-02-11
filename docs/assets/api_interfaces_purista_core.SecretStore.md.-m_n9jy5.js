import{_ as e,c as r,o as t,V as a}from"./chunks/framework.ITQiifkM.js";const f=JSON.parse('{"title":"Interface: SecretStore","description":"","frontmatter":{},"headers":[],"relativePath":"api/interfaces/purista_core.SecretStore.md","filePath":"api/interfaces/purista_core.SecretStore.md","lastUpdated":1706444636000}'),o={name:"api/interfaces/purista_core.SecretStore.md"},s=a('<p><a href="./../README.html">PURISTA API</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/purista_core.html">@purista/core</a> / SecretStore</p><h1 id="interface-secretstore" tabindex="-1">Interface: SecretStore <a class="header-anchor" href="#interface-secretstore" aria-label="Permalink to &quot;Interface: SecretStore&quot;">​</a></h1><p><a href="./../modules/purista_core.html">@purista/core</a>.SecretStore</p><p>Interface definition for a secret store implementation</p><h2 id="implemented-by" tabindex="-1">Implemented by <a class="header-anchor" href="#implemented-by" aria-label="Permalink to &quot;Implemented by&quot;">​</a></h2><ul><li><a href="./../classes/purista_core.DefaultSecretStore.html"><code>DefaultSecretStore</code></a></li><li><a href="./../classes/purista_core.SecretStoreBaseClass.html"><code>SecretStoreBaseClass</code></a></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./purista_core.SecretStore.html#getsecret">getSecret</a></li><li><a href="./purista_core.SecretStore.html#name">name</a></li><li><a href="./purista_core.SecretStore.html#removesecret">removeSecret</a></li><li><a href="./purista_core.SecretStore.html#setsecret">setSecret</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./purista_core.SecretStore.html#destroy">destroy</a></li></ul><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="getsecret" tabindex="-1">getSecret <a class="header-anchor" href="#getsecret" aria-label="Permalink to &quot;getSecret&quot;">​</a></h3><p>• <strong>getSecret</strong>: <a href="./../modules/purista_core.html#secretgetterfunction"><code>SecretGetterFunction</code></a></p><p>get a secret</p><p><strong><code>Param</code></strong></p><p>name of secret</p><p><strong><code>Throws</code></strong></p><p>UnhandledError</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/SecretStore/types/SecretStore.ts#L18" target="_blank" rel="noreferrer">core/SecretStore/types/SecretStore.ts:18</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>name of store</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/SecretStore/types/SecretStore.ts#L11" target="_blank" rel="noreferrer">core/SecretStore/types/SecretStore.ts:11</a></p><hr><h3 id="removesecret" tabindex="-1">removeSecret <a class="header-anchor" href="#removesecret" aria-label="Permalink to &quot;removeSecret&quot;">​</a></h3><p>• <strong>removeSecret</strong>: <a href="./../modules/purista_core.html#secretdeletefunction"><code>SecretDeleteFunction</code></a></p><p>delete a secret</p><p><strong><code>Param</code></strong></p><p>name of secret</p><p><strong><code>Throws</code></strong></p><p>UnhandledError</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/SecretStore/types/SecretStore.ts#L25" target="_blank" rel="noreferrer">core/SecretStore/types/SecretStore.ts:25</a></p><hr><h3 id="setsecret" tabindex="-1">setSecret <a class="header-anchor" href="#setsecret" aria-label="Permalink to &quot;setSecret&quot;">​</a></h3><p>• <strong>setSecret</strong>: <a href="./../modules/purista_core.html#secretsetterfunction"><code>SecretSetterFunction</code></a></p><p>set a secret</p><p><strong><code>Param</code></strong></p><p>name of secret</p><p><strong><code>Param</code></strong></p><p>value of secret</p><p><strong><code>Throws</code></strong></p><p>UnhandledError</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/SecretStore/types/SecretStore.ts#L33" target="_blank" rel="noreferrer">core/SecretStore/types/SecretStore.ts:33</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>disconnects and shuts down the secret store</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/SecretStore/types/SecretStore.ts#L38" target="_blank" rel="noreferrer">core/SecretStore/types/SecretStore.ts:38</a></p>',57),c=[s];function n(i,d,l,h,p,S){return t(),r("div",null,c)}const m=e(o,[["render",n]]);export{f as __pageData,m as default};
