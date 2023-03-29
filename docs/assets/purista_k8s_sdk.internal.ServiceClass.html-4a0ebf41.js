import{_ as n,W as s,X as o,Z as e,a0 as d,a1 as r,$ as t,Y as i,D as l}from"./framework-d89ed822.js";const c={},h=e("h1",{id:"interface-serviceclass-configtype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-serviceclass-configtype","aria-hidden":"true"},"#"),t(" Interface: ServiceClass<ConfigType>")],-1),p=i('<p>The ServiceClass interface</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ConfigType</code></td><td style="text-align:left;"><code>unknown</code> | <code>undefined</code></td></tr></tbody></table><h2 id="implemented-by" tabindex="-1"><a class="header-anchor" href="#implemented-by" aria-hidden="true">#</a> Implemented by</h2>',4),f=e("code",null,"Service",-1),u=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),g=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),m=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),_=i('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>• <strong>config</strong>: <code>ConfigType</code></p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:10</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Stop and destroy the current service</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:14</p><hr><h3 id="gettracer" tabindex="-1"><a class="header-anchor" href="#gettracer" aria-hidden="true">#</a> getTracer</h3><p>▸ <strong>getTracer</strong>(): <code>Tracer</code></p><p>get the opentelemetry tracer of the service</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Tracer</code></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:42</p><hr><h3 id="registercommand" tabindex="-1"><a class="header-anchor" href="#registercommand" aria-hidden="true">#</a> registerCommand</h3><p>▸ <strong>registerCommand</strong>(<code>commandDefinition</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Registers a new command for the service</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',26),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),x=e("td",{style:{"text-align":"left"}},[e("code",null,"commandDefinition")],-1),b={style:{"text-align":"left"}},v=e("code",null,"CommandDefinition",-1),k=e("td",{style:{"text-align":"left"}},"the service command definition",-1),S=i('<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:47</p><hr><h3 id="registersubscription" tabindex="-1"><a class="header-anchor" href="#registersubscription" aria-hidden="true">#</a> registerSubscription</h3><p>▸ <strong>registerSubscription</strong>(<code>subscriptionDefinition</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Registers a new subscription for the service</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',9),C=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),P=e("td",{style:{"text-align":"left"}},[e("code",null,"subscriptionDefinition")],-1),T={style:{"text-align":"left"}},D=e("code",null,"SubscriptionDefinition",-1),w=e("td",{style:{"text-align":"left"}},"the subscription definition",-1),R=i('<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:52</p><hr><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><p>▸ <strong>start</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Start the service</p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:18</p><hr><h3 id="startactivespan" tabindex="-1"><a class="header-anchor" href="#startactivespan" aria-hidden="true">#</a> startActiveSpan</h3><p>▸ <strong>startActiveSpan</strong>&lt;<code>F</code>&gt;(<code>name</code>, <code>opts</code>, <code>context</code>, <code>fn</code>): <code>Promise</code>&lt;<code>F</code>&gt;</p><p>Start a new active opentelemetry span with given options. A active span will be below the current span in hierarchy</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>F</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">the name of the span</td></tr><tr><td style="text-align:left;"><code>opts</code></td><td style="text-align:left;"><code>SpanOptions</code></td><td style="text-align:left;">the additional span options</td></tr><tr><td style="text-align:left;"><code>context</code></td><td style="text-align:left;"><code>undefined</code> | <code>Context</code></td><td style="text-align:left;">the span context</td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>span</code>: <code>Span</code>) =&gt; <code>Promise</code>&lt;<code>F</code>&gt;</td><td style="text-align:left;">the function to be wrapped into the span</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>F</code>&gt;</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:38</p><hr><h3 id="wrapinspan" tabindex="-1"><a class="header-anchor" href="#wrapinspan" aria-hidden="true">#</a> wrapInSpan</h3><p>▸ <strong>wrapInSpan</strong>&lt;<code>F</code>&gt;(<code>name</code>, <code>opts</code>, <code>fn</code>, <code>context?</code>): <code>Promise</code>&lt;<code>F</code>&gt;</p><p>Wrap the given function in a opententelemetry span. The span will be on same hierarchy level as the current span.</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>F</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">the name of the span</td></tr><tr><td style="text-align:left;"><code>opts</code></td><td style="text-align:left;"><code>SpanOptions</code></td><td style="text-align:left;">the additional span options</td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>span</code>: <code>Span</code>) =&gt; <code>Promise</code>&lt;<code>F</code>&gt;</td><td style="text-align:left;">the function to be wrapped in span</td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>Context</code></td><td style="text-align:left;">the span context</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>F</code>&gt;</p><h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4><p>packages/core/lib/core/types/ServiceClass.d.ts:28</p>',36);function N(F,I){const a=l("RouterLink");return s(),o("div",null,[e("p",null,[d(a,{to:"/api/"},{default:r(()=>[t("PURISTA API - v1.4.9")]),_:1}),t(" / "),d(a,{to:"/api/modules.html"},{default:r(()=>[t("Modules")]),_:1}),t(" / "),d(a,{to:"/api/modules/purista_k8s_sdk.html"},{default:r(()=>[t("@purista/k8s-sdk")]),_:1}),t(" / "),d(a,{to:"/api/modules/purista_k8s_sdk.internal.html"},{default:r(()=>[t("internal")]),_:1}),t(" / ServiceClass")]),h,e("p",null,[d(a,{to:"/api/modules/purista_k8s_sdk.html"},{default:r(()=>[t("@purista/k8s-sdk")]),_:1}),t("."),d(a,{to:"/api/modules/purista_k8s_sdk.internal.html"},{default:r(()=>[t("internal")]),_:1}),t(".ServiceClass")]),p,e("ul",null,[e("li",null,[d(a,{to:"/api/classes/purista_k8s_sdk.internal.Service.html"},{default:r(()=>[f]),_:1})])]),u,g,e("ul",null,[e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#config"},{default:r(()=>[t("config")]),_:1})])]),m,e("ul",null,[e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#destroy"},{default:r(()=>[t("destroy")]),_:1})]),e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#gettracer"},{default:r(()=>[t("getTracer")]),_:1})]),e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#registercommand"},{default:r(()=>[t("registerCommand")]),_:1})]),e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#registersubscription"},{default:r(()=>[t("registerSubscription")]),_:1})]),e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#start"},{default:r(()=>[t("start")]),_:1})]),e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#startactivespan"},{default:r(()=>[t("startActiveSpan")]),_:1})]),e("li",null,[d(a,{to:"/api/interfaces/purista_k8s_sdk.internal.ServiceClass.html#wrapinspan"},{default:r(()=>[t("wrapInSpan")]),_:1})])]),_,e("table",null,[y,e("tbody",null,[e("tr",null,[x,e("td",b,[d(a,{to:"/api/modules/purista_k8s_sdk.internal.html#commanddefinition"},{default:r(()=>[v]),_:1})]),k])])]),S,e("table",null,[C,e("tbody",null,[e("tr",null,[P,e("td",T,[d(a,{to:"/api/modules/purista_k8s_sdk.internal.html#subscriptiondefinition"},{default:r(()=>[D]),_:1})]),w])])]),R])}const V=n(c,[["render",N],["__file","purista_k8s_sdk.internal.ServiceClass.html.vue"]]);export{V as default};