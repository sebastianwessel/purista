import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as s,c as l,b as e,e as d,w as a,d as t,a as n}from"./app-9aedf0b4.js";const h={},p=e("h1",{id:"interface-httpeventbridgeclient",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-httpeventbridgeclient","aria-hidden":"true"},"#"),t(" Interface: HttpEventBridgeClient")],-1),g=e("p",null,"The HttpEventBridgeClient connects the HTTPEventBridge with the sidecar service. This client is responsible for the communication to the sidecar service.",-1),m=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),f=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),u=n('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="getapipathforcommand" tabindex="-1"><a class="header-anchor" href="#getapipathforcommand" aria-hidden="true">#</a> getApiPathForCommand</h3><p>• <strong>getApiPathForCommand</strong>: (<code>addess</code>: <code>EBMessageAddress</code>, <code>metadata</code>: { <code>expose</code>: { <code>contentEncodingRequest?</code>: <code>string</code> ; <code>contentEncodingResponse?</code>: <code>string</code> ; <code>contentTypeRequest?</code>: <code>string</code> ; <code>contentTypeResponse?</code>: <code>string</code> ; <code>deprecated?</code>: <code>boolean</code> ; <code>inputPayload?</code>: <code>SchemaObject</code> ; <code>outputPayload?</code>: <code>SchemaObject</code> ; <code>parameter?</code>: <code>SchemaObject</code> } &amp; { <code>http</code>: { <code>method</code>: <code>&quot;GET&quot;</code> | <code>&quot;POST&quot;</code> | <code>&quot;PATCH&quot;</code> | <code>&quot;PUT&quot;</code> | <code>&quot;DELETE&quot;</code> ; <code>openApi?</code>: { <code>additionalStatusCodes?</code>: <code>StatusCode</code>[] ; <code>description</code>: <code>string</code> ; <code>isSecure</code>: <code>boolean</code> ; <code>operationId?</code>: <code>string</code> ; <code>query?</code>: <code>QueryParameter</code>&lt;{}&gt;[] ; <code>summary</code>: <code>string</code> ; <code>tags?</code>: <code>string</code>[] } ; <code>path</code>: <code>string</code> } } }) =&gt; <code>string</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>addess</code>, <code>metadata</code>): <code>string</code></p><p>Generate the url path of the command based on the command builder <code>exposeAsHttpEndpoint</code> settings. This url is a POST endpoint and expects the payload and parameter as defined for exposing.</p><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addess</code></td><td style="text-align:left;"><code>EBMessageAddress</code></td></tr><tr><td style="text-align:left;"><code>metadata</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>metadata.expose</code></td><td style="text-align:left;">{ <code>contentEncodingRequest?</code>: <code>string</code> ; <code>contentEncodingResponse?</code>: <code>string</code> ; <code>contentTypeRequest?</code>: <code>string</code> ; <code>contentTypeResponse?</code>: <code>string</code> ; <code>deprecated?</code>: <code>boolean</code> ; <code>inputPayload?</code>: <code>SchemaObject</code> ; <code>outputPayload?</code>: <code>SchemaObject</code> ; <code>parameter?</code>: <code>SchemaObject</code> } &amp; { <code>http</code>: { <code>method</code>: <code>&quot;GET&quot;</code> | <code>&quot;POST&quot;</code> | <code>&quot;PATCH&quot;</code> | <code>&quot;PUT&quot;</code> | <code>&quot;DELETE&quot;</code> ; <code>openApi?</code>: { <code>additionalStatusCodes?</code>: <code>StatusCode</code>[] ; <code>description</code>: <code>string</code> ; <code>isSecure</code>: <code>boolean</code> ; <code>operationId?</code>: <code>string</code> ; <code>query?</code>: <code>QueryParameter</code>&lt;{}&gt;[] ; <code>summary</code>: <code>string</code> ; <code>tags?</code>: <code>string</code>[] } ; <code>path</code>: <code>string</code> } }</td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>string</code></p><p>url path of endpoint</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',12),b={href:"https://github.com/sebastianwessel/purista/blob/master/packages/base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts#L22",target:"_blank",rel:"noopener noreferrer"},y=n('<hr><h3 id="getinternalpathforcommand" tabindex="-1"><a class="header-anchor" href="#getinternalpathforcommand" aria-hidden="true">#</a> getInternalPathForCommand</h3><p>• <strong>getInternalPathForCommand</strong>: (<code>address</code>: <code>EBMessageAddress</code>) =&gt; <code>string</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>address</code>): <code>string</code></p><p>Generate the url path of the command. This url is a POST endpoint and expects a command message as payload</p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>address</code></td><td style="text-align:left;"><code>EBMessageAddress</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5><p><code>string</code></p><p>url path of endpoint</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4>',12),x={href:"https://github.com/sebastianwessel/purista/blob/master/packages/base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts#L14",target:"_blank",rel:"noopener noreferrer"},_=n('<hr><h3 id="getinternalpathforsubscription" tabindex="-1"><a class="header-anchor" href="#getinternalpathforsubscription" aria-hidden="true">#</a> getInternalPathForSubscription</h3><p>• <strong>getInternalPathForSubscription</strong>: (<code>address</code>: <code>EBMessageAddress</code>) =&gt; <code>string</code></p><h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>address</code>): <code>string</code></p><p>Generate the url path of the subscription. This url is a POST endpoint. The expected payload is a EBMessage or an CloudEvent with an EBMessage as data depending on config settings</p><h5 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>address</code></td><td style="text-align:left;"><code>EBMessageAddress</code></td></tr></tbody></table><h5 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h5><p><code>string</code></p><p>url path of endpoint</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',12),v={href:"https://github.com/sebastianwessel/purista/blob/master/packages/base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts#L31",target:"_blank",rel:"noopener noreferrer"},E=n('<hr><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>• <strong>invoke</strong>: (<code>command</code>: { <code>contentEncoding</code>: <code>string</code> ; <code>contentType</code>: <code>string</code> ; <code>correlationId</code>: <code>string</code> ; <code>eventName?</code>: <code>string</code> ; <code>id</code>: <code>string</code> ; <code>messageType</code>: <code>Command</code> ; <code>otp?</code>: <code>string</code> ; <code>payload</code>: { <code>parameter</code>: <code>unknown</code> ; <code>payload</code>: <code>unknown</code> } ; <code>principalId?</code>: <code>string</code> ; <code>receiver</code>: <code>EBMessageAddress</code> ; <code>sender</code>: { serviceName: string; serviceVersion: string; serviceTarget: string; instanceId: string; } ; <code>timestamp</code>: <code>number</code> ; <code>traceId?</code>: <code>string</code> }, <code>headers?</code>: <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;, <code>timeout?</code>: <code>number</code>) =&gt; <code>Promise</code>&lt;<code>CommandResponse</code>&gt;</p><h4 id="type-declaration-3" tabindex="-1"><a class="header-anchor" href="#type-declaration-3" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>command</code>, <code>headers?</code>, <code>timeout?</code>): <code>Promise</code>&lt;<code>CommandResponse</code>&gt;</p><p>Invoke a command</p><h5 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>command</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">Command</td></tr><tr><td style="text-align:left;"><code>command.contentEncoding</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">content encoding of message payload</td></tr><tr><td style="text-align:left;"><code>command.contentType</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">content type of message payload</td></tr><tr><td style="text-align:left;"><code>command.correlationId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">correlation id to know which command response referrs to which command</td></tr><tr><td style="text-align:left;"><code>command.eventName?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">event name for this message</td></tr><tr><td style="text-align:left;"><code>command.id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">global unique id of message</td></tr><tr><td style="text-align:left;"><code>command.messageType</code></td><td style="text-align:left;"><code>Command</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>command.otp?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">stringified Opentelemetry parent trace id</td></tr><tr><td style="text-align:left;"><code>command.payload</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>command.payload.parameter</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>command.payload.payload</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>command.principalId?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">principal id</td></tr><tr><td style="text-align:left;"><code>command.receiver</code></td><td style="text-align:left;"><code>EBMessageAddress</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>command.sender</code></td><td style="text-align:left;">{ serviceName: string; serviceVersion: string; serviceTarget: string; instanceId: string; }</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>command.timestamp</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">timestamp of message creation time</td></tr><tr><td style="text-align:left;"><code>command.traceId?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">trace id of message</td></tr><tr><td style="text-align:left;"><code>headers?</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;</td><td style="text-align:left;">optional HTTP header</td></tr><tr><td style="text-align:left;"><code>timeout?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">the command timeout</td></tr></tbody></table><h5 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h5><p><code>Promise</code>&lt;<code>CommandResponse</code>&gt;</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4>',11),B={href:"https://github.com/sebastianwessel/purista/blob/master/packages/base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts#L40",target:"_blank",rel:"noopener noreferrer"},T=n('<hr><h3 id="issidecaravailable" tabindex="-1"><a class="header-anchor" href="#issidecaravailable" aria-hidden="true">#</a> isSidecarAvailable</h3><p>• <strong>isSidecarAvailable</strong>: () =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="type-declaration-4" tabindex="-1"><a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a> Type declaration</h4><p>▸ (): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Checks if the sidecar container is available to be able to send events and invoke commands</p><h5 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h5><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>boolean</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4>',10),C={href:"https://github.com/sebastianwessel/purista/blob/master/packages/base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts#L54",target:"_blank",rel:"noopener noreferrer"},P=n('<hr><h3 id="sendevent" tabindex="-1"><a class="header-anchor" href="#sendevent" aria-hidden="true">#</a> sendEvent</h3><p>• <strong>sendEvent</strong>: (<code>message</code>: <code>EBMessage</code>, <code>headers?</code>: <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="type-declaration-5" tabindex="-1"><a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>message</code>, <code>headers?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Send a EBMessage as event to the underlaying message infrastructure.</p><h5 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>EBMessage</code></td></tr><tr><td style="text-align:left;"><code>headers?</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>string</code>&gt;</td></tr></tbody></table><h5 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h5><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',11),H={href:"https://github.com/sebastianwessel/purista/blob/master/packages/base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts#L48",target:"_blank",rel:"noopener noreferrer"};function k(q,S){const o=c("RouterLink"),r=c("ExternalLinkIcon");return s(),l("div",null,[e("p",null,[d(o,{to:"/api/"},{default:a(()=>[t("PURISTA API")]),_:1}),t(" / "),d(o,{to:"/api/modules.html"},{default:a(()=>[t("Modules")]),_:1}),t(" / "),d(o,{to:"/api/modules/purista_base_http_bridge.html"},{default:a(()=>[t("@purista/base-http-bridge")]),_:1}),t(" / HttpEventBridgeClient")]),p,e("p",null,[d(o,{to:"/api/modules/purista_base_http_bridge.html"},{default:a(()=>[t("@purista/base-http-bridge")]),_:1}),t(".HttpEventBridgeClient")]),g,m,f,e("ul",null,[e("li",null,[d(o,{to:"/api/interfaces/purista_base_http_bridge.HttpEventBridgeClient.html#getapipathforcommand"},{default:a(()=>[t("getApiPathForCommand")]),_:1})]),e("li",null,[d(o,{to:"/api/interfaces/purista_base_http_bridge.HttpEventBridgeClient.html#getinternalpathforcommand"},{default:a(()=>[t("getInternalPathForCommand")]),_:1})]),e("li",null,[d(o,{to:"/api/interfaces/purista_base_http_bridge.HttpEventBridgeClient.html#getinternalpathforsubscription"},{default:a(()=>[t("getInternalPathForSubscription")]),_:1})]),e("li",null,[d(o,{to:"/api/interfaces/purista_base_http_bridge.HttpEventBridgeClient.html#invoke"},{default:a(()=>[t("invoke")]),_:1})]),e("li",null,[d(o,{to:"/api/interfaces/purista_base_http_bridge.HttpEventBridgeClient.html#issidecaravailable"},{default:a(()=>[t("isSidecarAvailable")]),_:1})]),e("li",null,[d(o,{to:"/api/interfaces/purista_base_http_bridge.HttpEventBridgeClient.html#sendevent"},{default:a(()=>[t("sendEvent")]),_:1})])]),u,e("p",null,[e("a",b,[t("base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts:22"),d(r)])]),y,e("p",null,[e("a",x,[t("base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts:14"),d(r)])]),_,e("p",null,[e("a",v,[t("base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts:31"),d(r)])]),E,e("p",null,[e("a",B,[t("base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts:40"),d(r)])]),T,e("p",null,[e("a",C,[t("base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts:54"),d(r)])]),P,e("p",null,[e("a",H,[t("base-http-bridge/src/HttpEventBridge/types/HttpEventBridgeClient.ts:48"),d(r)])])])}const A=i(h,[["render",k],["__file","purista_base_http_bridge.HttpEventBridgeClient.html.vue"]]);export{A as default};
