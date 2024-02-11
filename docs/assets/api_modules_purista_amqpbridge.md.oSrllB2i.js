import{_ as e,c as t,o as a,V as r}from"./chunks/framework.ITQiifkM.js";const u=JSON.parse('{"title":"Module: @purista/amqpbridge","description":"","frontmatter":{},"headers":[],"relativePath":"api/modules/purista_amqpbridge.md","filePath":"api/modules/purista_amqpbridge.md","lastUpdated":1706444636000}'),i={name:"api/modules/purista_amqpbridge.md"},d=r(`<p><a href="./../README.html">PURISTA API</a> / <a href="./../modules.html">Modules</a> / @purista/amqpbridge</p><h1 id="module-purista-amqpbridge" tabindex="-1">Module: @purista/amqpbridge <a class="header-anchor" href="#module-purista-amqpbridge" aria-label="Permalink to &quot;Module: @purista/amqpbridge&quot;">​</a></h1><p>Package for using a AMQP broker like rabbitMQ as event bridge.</p><p>Example usage:</p><p><strong><code>Example</code></strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { AmqpBridge } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@purista/amqpbridge&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// create and init our eventbridge</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eventBridge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AmqpBridge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eventBridge.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./purista_amqpbridge.html#amqpbridgeconfig">AmqpBridgeConfig</a></li><li><a href="./purista_amqpbridge.html#encoder">Encoder</a></li><li><a href="./purista_amqpbridge.html#encoderfunctions">EncoderFunctions</a></li><li><a href="./purista_amqpbridge.html#encryptfunctions">EncryptFunctions</a></li><li><a href="./purista_amqpbridge.html#encrypter">Encrypter</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./purista_amqpbridge.html#puristaversion">puristaVersion</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./purista_amqpbridge.html#deserializeotpfromamqpheader">deserializeOtpFromAmqpHeader</a></li><li><a href="./purista_amqpbridge.html#getdefaultconfig">getDefaultConfig</a></li><li><a href="./purista_amqpbridge.html#serializeotpforamqpheader">serializeOtpForAmqpHeader</a></li></ul><h3 id="event-bridge" tabindex="-1">Event bridge <a class="header-anchor" href="#event-bridge" aria-label="Permalink to &quot;Event bridge&quot;">​</a></h3><ul><li><a href="./../classes/purista_amqpbridge.AmqpBridge.html">AmqpBridge</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="amqpbridgeconfig" tabindex="-1">AmqpBridgeConfig <a class="header-anchor" href="#amqpbridgeconfig" aria-label="Permalink to &quot;AmqpBridgeConfig&quot;">​</a></h3><p>Ƭ <strong>AmqpBridgeConfig</strong>: <code>Object</code></p><p>AmqpBridge bridge config</p><p><strong><code>See</code></strong></p><p><a href="https://amqp-node.github.io/amqplib/" target="_blank" rel="noreferrer">amqplib documentation</a></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>encoder?</code></td><td style="text-align:left;"><a href="./purista_amqpbridge.html#encoder"><code>Encoder</code></a></td><td style="text-align:left;">the encoder(s) to be used for AMQP messages <strong><code>Default</code></strong> <code>ts jsonEncoder </code></td></tr><tr><td style="text-align:left;"><code>encrypter?</code></td><td style="text-align:left;"><a href="./purista_amqpbridge.html#encrypter"><code>Encrypter</code></a></td><td style="text-align:left;">the encrypter(s) to be used for AMQP messages <strong><code>Default</code></strong> <code>ts plain </code></td></tr><tr><td style="text-align:left;"><code>exchangeName?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">the AMQP exchage name to be used <strong><code>Default</code></strong> <code>ts purista </code></td></tr><tr><td style="text-align:left;"><code>exchangeOptions?</code></td><td style="text-align:left;"><code>Options.AssertExchange</code></td><td style="text-align:left;">the AMQP exchange options</td></tr><tr><td style="text-align:left;"><code>namePrefix?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">the queue prefix to be used for all PURISTA queues except short living queues created by the broker on request <strong><code>Default</code></strong> <code>ts purista </code></td></tr><tr><td style="text-align:left;"><code>socketOptions?</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">socket options</td></tr><tr><td style="text-align:left;"><code>url?</code></td><td style="text-align:left;"><code>string</code> | <code>Options.Connect</code></td><td style="text-align:left;">the AMQP broker url <strong><code>Default</code></strong> <code>ts amqp://localhost </code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/types/AmqpBridgeConfig.ts#L11" target="_blank" rel="noreferrer">amqpbridge/src/types/AmqpBridgeConfig.ts:11</a></p><hr><h3 id="encoder" tabindex="-1">Encoder <a class="header-anchor" href="#encoder" aria-label="Permalink to &quot;Encoder&quot;">​</a></h3><p>Ƭ <strong>Encoder</strong>: <code>Record</code>&lt;<code>string</code>, <a href="./purista_amqpbridge.html#encoderfunctions"><code>EncoderFunctions</code></a>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/types/Encoder.ts#L3" target="_blank" rel="noreferrer">amqpbridge/src/types/Encoder.ts:3</a></p><hr><h3 id="encoderfunctions" tabindex="-1">EncoderFunctions <a class="header-anchor" href="#encoderfunctions" aria-label="Permalink to &quot;EncoderFunctions&quot;">​</a></h3><p>Ƭ <strong>EncoderFunctions</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>decode</code></td><td style="text-align:left;">&lt;T&gt;(<code>input</code>: <code>Buffer</code>) =&gt; <code>Promise</code>&lt;<code>T</code>&gt;</td></tr><tr><td style="text-align:left;"><code>encode</code></td><td style="text-align:left;">&lt;T&gt;(<code>input</code>: <code>T</code>) =&gt; <code>Promise</code>&lt;<code>Buffer</code>&gt;</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/types/EncoderFunctions.ts#L1" target="_blank" rel="noreferrer">amqpbridge/src/types/EncoderFunctions.ts:1</a></p><hr><h3 id="encryptfunctions" tabindex="-1">EncryptFunctions <a class="header-anchor" href="#encryptfunctions" aria-label="Permalink to &quot;EncryptFunctions&quot;">​</a></h3><p>Ƭ <strong>EncryptFunctions</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>decrypt</code></td><td style="text-align:left;">(<code>input</code>: <code>Buffer</code>) =&gt; <code>Promise</code>&lt;<code>Buffer</code>&gt;</td></tr><tr><td style="text-align:left;"><code>encrypt</code></td><td style="text-align:left;">(<code>input</code>: <code>Buffer</code>) =&gt; <code>Promise</code>&lt;<code>Buffer</code>&gt;</td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/types/EncryptFunctions.ts#L1" target="_blank" rel="noreferrer">amqpbridge/src/types/EncryptFunctions.ts:1</a></p><hr><h3 id="encrypter" tabindex="-1">Encrypter <a class="header-anchor" href="#encrypter" aria-label="Permalink to &quot;Encrypter&quot;">​</a></h3><p>Ƭ <strong>Encrypter</strong>: <code>Record</code>&lt;<code>string</code>, <a href="./purista_amqpbridge.html#encryptfunctions"><code>EncryptFunctions</code></a>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/types/Encrypter.ts#L3" target="_blank" rel="noreferrer">amqpbridge/src/types/Encrypter.ts:3</a></p><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="puristaversion" tabindex="-1">puristaVersion <a class="header-anchor" href="#puristaversion" aria-label="Permalink to &quot;puristaVersion&quot;">​</a></h3><p>• <code>Const</code> <strong>puristaVersion</strong>: <code>&quot;1.9.1&quot;</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/version.ts#L1" target="_blank" rel="noreferrer">amqpbridge/src/version.ts:1</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="deserializeotpfromamqpheader" tabindex="-1">deserializeOtpFromAmqpHeader <a class="header-anchor" href="#deserializeotpfromamqpheader" aria-label="Permalink to &quot;deserializeOtpFromAmqpHeader&quot;">​</a></h3><p>▸ <strong>deserializeOtpFromAmqpHeader</strong>(<code>logger</code>, <code>message</code>, <code>encrypter</code>, <code>encoder</code>): <code>Promise</code>&lt;<code>undefined</code> | <code>Context</code>&gt;</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>logger</code></td><td style="text-align:left;"><a href="./../classes/purista_core.Logger.html"><code>Logger</code></a></td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>null</code> | <code>ConsumeMessage</code></td></tr><tr><td style="text-align:left;"><code>encrypter</code></td><td style="text-align:left;"><a href="./purista_amqpbridge.html#encrypter"><code>Encrypter</code></a></td></tr><tr><td style="text-align:left;"><code>encoder</code></td><td style="text-align:left;"><a href="./purista_amqpbridge.html#encoder"><code>Encoder</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>undefined</code> | <code>Context</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/deserializeOtpFromAmqpHeader.impl.ts#L9" target="_blank" rel="noreferrer">amqpbridge/src/deserializeOtpFromAmqpHeader.impl.ts:9</a></p><hr><h3 id="getdefaultconfig" tabindex="-1">getDefaultConfig <a class="header-anchor" href="#getdefaultconfig" aria-label="Permalink to &quot;getDefaultConfig&quot;">​</a></h3><p>▸ <strong>getDefaultConfig</strong>(): <a href="./purista_core.html#complete"><code>Complete</code></a>&lt;<a href="./purista_amqpbridge.html#amqpbridgeconfig"><code>AmqpBridgeConfig</code></a>&gt; &amp; { <code>exchangeName</code>: <code>string</code> ; <code>url</code>: <code>string</code> }</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_core.html#complete"><code>Complete</code></a>&lt;<a href="./purista_amqpbridge.html#amqpbridgeconfig"><code>AmqpBridgeConfig</code></a>&gt; &amp; { <code>exchangeName</code>: <code>string</code> ; <code>url</code>: <code>string</code> }</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/getDefaultConfig.impl.ts#L5" target="_blank" rel="noreferrer">amqpbridge/src/getDefaultConfig.impl.ts:5</a></p><hr><h3 id="serializeotpforamqpheader" tabindex="-1">serializeOtpForAmqpHeader <a class="header-anchor" href="#serializeotpforamqpheader" aria-label="Permalink to &quot;serializeOtpForAmqpHeader&quot;">​</a></h3><p>▸ <strong>serializeOtpForAmqpHeader</strong>(<code>header</code>): <code>Record</code>&lt;<code>string</code>, <code>undefined</code> | <code>string</code>&gt;</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>header</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>undefined</code> | <code>string</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Record</code>&lt;<code>string</code>, <code>undefined</code> | <code>string</code>&gt;</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/amqpbridge/src/serializeOtpForAmqpHeader.impl.ts#L3" target="_blank" rel="noreferrer">amqpbridge/src/serializeOtpForAmqpHeader.impl.ts:3</a></p>`,79),o=[d];function s(n,l,c,p,h,g){return a(),t("div",null,o)}const m=e(i,[["render",s]]);export{u as __pageData,m as default};