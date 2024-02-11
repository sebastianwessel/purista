import{_ as e,c as r,o as t,V as a}from"./chunks/framework.ITQiifkM.js";const m=JSON.parse('{"title":"Class: UnhandledError","description":"","frontmatter":{},"headers":[],"relativePath":"api/classes/purista_core.UnhandledError.md","filePath":"api/classes/purista_core.UnhandledError.md","lastUpdated":1707653747000}'),o={name:"api/classes/purista_core.UnhandledError.md"},d=a('<p><a href="./../README.html">PURISTA API</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/purista_core.html">@purista/core</a> / UnhandledError</p><h1 id="class-unhandlederror" tabindex="-1">Class: UnhandledError <a class="header-anchor" href="#class-unhandlederror" aria-label="Permalink to &quot;Class: UnhandledError&quot;">​</a></h1><p><a href="./../modules/purista_core.html">@purista/core</a>.UnhandledError</p><p>A unhandled error will be thrown if some error response is returned during invoking a service function or when the invocation timed out. This error is not handled by business logic and it is maybe unwanted to expose this error outside.</p><p>Unhandled error are automatically converted into &quot;500 Internal Server Error&quot; to the outside world.</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><code>Error</code></p><p>↳ <strong><code>UnhandledError</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./purista_core.UnhandledError.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./purista_core.UnhandledError.html#data">data</a></li><li><a href="./purista_core.UnhandledError.html#errorcode">errorCode</a></li><li><a href="./purista_core.UnhandledError.html#traceid">traceId</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./purista_core.UnhandledError.html#geterrorresponse">getErrorResponse</a></li><li><a href="./purista_core.UnhandledError.html#intohandlederror">intoHandledError</a></li><li><a href="./purista_core.UnhandledError.html#tojson">toJSON</a></li><li><a href="./purista_core.UnhandledError.html#tostring">toString</a></li><li><a href="./purista_core.UnhandledError.html#fromerror">fromError</a></li><li><a href="./purista_core.UnhandledError.html#frommessage">fromMessage</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new UnhandledError</strong>(<code>errorCode?</code>, <code>message?</code>, <code>data?</code>, <code>traceId?</code>): <a href="./purista_core.UnhandledError.html"><code>UnhandledError</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>errorCode</code></td><td style="text-align:left;"><a href="./../enums/purista_core.StatusCode.html"><code>StatusCode</code></a></td><td style="text-align:left;"><code>StatusCode.InternalServerError</code></td></tr><tr><td style="text-align:left;"><code>message?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>traceId?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_core.UnhandledError.html"><code>UnhandledError</code></a></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p>Error.constructor</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L14" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:14</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><p>• <code>Optional</code> <strong>data</strong>: <code>unknown</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L17" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:17</a></p><hr><h3 id="errorcode" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode" aria-label="Permalink to &quot;errorCode&quot;">​</a></h3><p>• <strong>errorCode</strong>: <a href="./../enums/purista_core.StatusCode.html"><code>StatusCode</code></a> = <code>StatusCode.InternalServerError</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L15" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:15</a></p><hr><h3 id="traceid" tabindex="-1">traceId <a class="header-anchor" href="#traceid" aria-label="Permalink to &quot;traceId&quot;">​</a></h3><p>• <code>Optional</code> <strong>traceId</strong>: <code>string</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L18" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:18</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="geterrorresponse" tabindex="-1">getErrorResponse <a class="header-anchor" href="#geterrorresponse" aria-label="Permalink to &quot;getErrorResponse&quot;">​</a></h3><p>▸ <strong>getErrorResponse</strong>(): <code>Readonly</code>&lt;<a href="./../modules/purista_core.html#errorresponsepayload"><code>ErrorResponsePayload</code></a>&gt;</p><p>Returns error response object</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Readonly</code>&lt;<a href="./../modules/purista_core.html#errorresponsepayload"><code>ErrorResponsePayload</code></a>&gt;</p><p>ErrorResponsePayload</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L69" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:69</a></p><hr><h3 id="intohandlederror" tabindex="-1">intoHandledError <a class="header-anchor" href="#intohandlederror" aria-label="Permalink to &quot;intoHandledError&quot;">​</a></h3><p>▸ <strong>intoHandledError</strong>(): <a href="./purista_core.HandledError.html"><code>HandledError</code></a></p><p>Create a handled error from unhandled error</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_core.HandledError.html"><code>HandledError</code></a></p><p>HandledError</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L61" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:61</a></p><hr><h3 id="tojson" tabindex="-1">toJSON <a class="header-anchor" href="#tojson" aria-label="Permalink to &quot;toJSON&quot;">​</a></h3><p>▸ <strong>toJSON</strong>(): <code>Object</code></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">addition data</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">a human readable error message</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>stack</code></td><td style="text-align:left;"><code>undefined</code> | <code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>status</code></td><td style="text-align:left;"><a href="./../enums/purista_core.StatusCode.html"><code>StatusCode</code></a></td><td style="text-align:left;">the error status code</td></tr><tr><td style="text-align:left;"><code>traceId?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">the trace if of the request</td></tr></tbody></table><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L88" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:88</a></p><hr><h3 id="tostring" tabindex="-1">toString <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;toString&quot;">​</a></h3><p>▸ <strong>toString</strong>(): <code>string</code></p><p>Returns stringified error response object</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>ErrorResponse as string</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L84" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:84</a></p><hr><h3 id="fromerror" tabindex="-1">fromError <a class="header-anchor" href="#fromerror" aria-label="Permalink to &quot;fromError&quot;">​</a></h3><p>▸ <strong>fromError</strong>(<code>err</code>, <code>errorCode?</code>, <code>data?</code>, <code>traceId?</code>): <a href="./purista_core.HandledError.html"><code>HandledError</code></a></p><p>Creates a UnhandledError from an input</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">the input</td></tr><tr><td style="text-align:left;"><code>errorCode?</code></td><td style="text-align:left;"><a href="./../enums/purista_core.StatusCode.html"><code>StatusCode</code></a></td><td style="text-align:left;">the error code</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">optional data</td></tr><tr><td style="text-align:left;"><code>traceId?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">optional trace id</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_core.HandledError.html"><code>HandledError</code></a></p><p>UnhandledError</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L46" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:46</a></p><hr><h3 id="frommessage" tabindex="-1">fromMessage <a class="header-anchor" href="#frommessage" aria-label="Permalink to &quot;fromMessage&quot;">​</a></h3><p>▸ <strong>fromMessage</strong>(<code>message</code>): <a href="./purista_core.UnhandledError.html"><code>UnhandledError</code></a></p><p>Create a error object from EBMessage error message</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>Readonly</code>&lt;{ <code>contentEncoding</code>: <code>&quot;utf-8&quot;</code> ; <code>contentType</code>: <code>&quot;application/json&quot;</code> ; <code>correlationId</code>: <code>string</code> ; <code>eventName?</code>: <code>string</code> ; <code>id</code>: <code>string</code> ; <code>isHandledError</code>: <code>boolean</code> ; <code>messageType</code>: <a href="./../enums/purista_core.EBMessageType.html#commanderrorresponse"><code>CommandErrorResponse</code></a> ; <code>otp?</code>: <code>string</code> ; <code>payload</code>: { <code>data?</code>: <code>unknown</code> ; <code>message</code>: <code>string</code> ; <code>status</code>: <a href="./../enums/purista_core.StatusCode.html"><code>StatusCode</code></a> } ; <code>principalId?</code>: <code>string</code> ; <code>receiver</code>: { <code>instanceId</code>: <code>string</code> ; <code>serviceName</code>: <code>string</code> ; <code>serviceTarget</code>: <code>string</code> ; <code>serviceVersion</code>: <code>string</code> } ; <code>sender</code>: { <code>instanceId</code>: <code>string</code> ; <code>serviceName</code>: <code>string</code> ; <code>serviceTarget</code>: <code>string</code> ; <code>serviceVersion</code>: <code>string</code> } ; <code>tenantId?</code>: <code>string</code> ; <code>timestamp</code>: <code>number</code> ; <code>traceId?</code>: <code>string</code> }&gt;</td><td style="text-align:left;">CommandErrorResponse</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_core.UnhandledError.html"><code>UnhandledError</code></a></p><p>UnhandledError</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/Error/UnhandledError.impl.ts#L33" target="_blank" rel="noreferrer">core/Error/UnhandledError.impl.ts:33</a></p>',97),n=[d];function s(l,i,c,h,u,p){return t(),r("div",null,n)}const g=e(o,[["render",s]]);export{m as __pageData,g as default};
