import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,a as h,b as e,e as t,w as d,F as l,d as r,c as n,o as c}from"./app.6c1bf1c7.js";const u={},p=r("@purista/core"),_=r(" / "),f=r("Exports"),m=r(" / UnhandledError"),g=n('<h1 id="class-unhandlederror" tabindex="-1"><a class="header-anchor" href="#class-unhandlederror" aria-hidden="true">#</a> Class: UnhandledError</h1><p>A unhandled error will be thrown if some error response is returned during invoking a service function or when the invocation timed out. This error is not handled by business logic and it is maybe unwanted to expose this error outside.</p><p>Unhandled error are automatically converted into &quot;500 Internal Server Error&quot; to the outside world.</p><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2><ul><li><p><code>Error</code></p><p>\u21B3 <strong><code>UnhandledError</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',7),b=r("constructor"),x=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),r(" Properties")],-1),E=r("cause"),y=r("data"),k=r("errorCode"),U=r("message"),S=r("name"),C=r("stack"),T=r("prepareStackTrace"),v=r("stackTraceLimit"),R=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),r(" Methods")],-1),w=r("getErrorResponse"),D=r("intoHandledError"),L=r("toString"),I=r("captureStackTrace"),O=r("fromMessage"),H=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new UnhandledError</strong>(<code>errorCode?</code>, <code>message?</code>, <code>data?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),N=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Default value")])],-1),j=e("td",{style:{"text-align":"left"}},[e("code",null,"errorCode")],-1),M={style:{"text-align":"left"}},P=e("code",null,"StatusCode",-1),B=e("td",{style:{"text-align":"left"}},[e("code",null,"StatusCode.InternalServerError")],-1),V=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"message?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},[e("code",null,"undefined")])],-1),F=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"data?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"unknown")]),e("td",{style:{"text-align":"left"}},[e("code",null,"undefined")])],-1),q=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides","aria-hidden":"true"},"#"),r(" Overrides")],-1),z=e("p",null,"Error.constructor",-1),A=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),r(" Defined in")],-1),G={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/UnhandledError.impl.ts#L13",target:"_blank",rel:"noopener noreferrer"},J=r("src/core/UnhandledError.impl.ts:13"),K=n('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="cause" tabindex="-1"><a class="header-anchor" href="#cause" aria-hidden="true">#</a> cause</h3><p>\u2022 <code>Optional</code> <strong>cause</strong>: <code>Error</code></p><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4><p>Error.cause</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es2022.error.d.ts:26</p><hr><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>\u2022 <code>Optional</code> <strong>data</strong>: <code>unknown</code></p><hr><h3 id="errorcode" tabindex="-1"><a class="header-anchor" href="#errorcode" aria-hidden="true">#</a> errorCode</h3>',12),Q=r("\u2022 "),W=e("strong",null,"errorCode",-1),X=r(": "),Y=e("code",null,"StatusCode",-1),Z=r(" = "),$=e("code",null,"StatusCode.InternalServerError",-1),ee=n('<hr><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h3><p>\u2022 <strong>message</strong>: <code>string</code></p><h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a> Inherited from</h4><p>Error.message</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es5.d.ts:1023</p><hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>\u2022 <strong>name</strong>: <code>string</code></p><h4 id="inherited-from-2" tabindex="-1"><a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a> Inherited from</h4><p>Error.name</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es5.d.ts:1022</p><hr><h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> stack</h3><p>\u2022 <code>Optional</code> <strong>stack</strong>: <code>string</code></p><h4 id="inherited-from-3" tabindex="-1"><a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a> Inherited from</h4><p>Error.stack</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>node_modules/typescript/lib/lib.es5.d.ts:1024</p><hr><h3 id="preparestacktrace" tabindex="-1"><a class="header-anchor" href="#preparestacktrace" aria-hidden="true">#</a> prepareStackTrace</h3><p>\u25AA <code>Static</code> <code>Optional</code> <strong>prepareStackTrace</strong>: (<code>err</code>: <code>Error</code>, <code>stackTraces</code>: <code>CallSite</code>[]) =&gt; <code>any</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>\u25B8 (<code>err</code>, <code>stackTraces</code>): <code>any</code></p><p>Optional override for formatting stack traces</p><p><strong><code>see</code></strong> https://v8.dev/docs/stack-trace-api#customizing-stack-traces</p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>Error</code></td></tr><tr><td style="text-align:left;"><code>stackTraces</code></td><td style="text-align:left;"><code>CallSite</code>[]</td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>any</code></p><h4 id="inherited-from-4" tabindex="-1"><a class="header-anchor" href="#inherited-from-4" aria-hidden="true">#</a> Inherited from</h4><p>Error.prepareStackTrace</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>node_modules/@types/node/globals.d.ts:11</p><hr><h3 id="stacktracelimit" tabindex="-1"><a class="header-anchor" href="#stacktracelimit" aria-hidden="true">#</a> stackTraceLimit</h3><p>\u25AA <code>Static</code> <strong>stackTraceLimit</strong>: <code>number</code></p><h4 id="inherited-from-5" tabindex="-1"><a class="header-anchor" href="#inherited-from-5" aria-hidden="true">#</a> Inherited from</h4><p>Error.stackTraceLimit</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4><p>node_modules/@types/node/globals.d.ts:13</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="geterrorresponse" tabindex="-1"><a class="header-anchor" href="#geterrorresponse" aria-hidden="true">#</a> getErrorResponse</h3>',45),re=r("\u25B8 "),te=e("strong",null,"getErrorResponse",-1),ae=r("(): "),de=e("code",null,"ErrorResponse",-1),ne=e("p",null,"Returns error response object",-1),oe=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),r(" Returns")],-1),se=e("code",null,"ErrorResponse",-1),ie=e("p",null,"ErrorResponse",-1),he=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),r(" Defined in")],-1),le={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/UnhandledError.impl.ts#L38",target:"_blank",rel:"noopener noreferrer"},ce=r("src/core/UnhandledError.impl.ts:38"),ue=e("hr",null,null,-1),pe=e("h3",{id:"intohandlederror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intohandlederror","aria-hidden":"true"},"#"),r(" intoHandledError")],-1),_e=r("\u25B8 "),fe=e("strong",null,"intoHandledError",-1),me=r("(): "),ge=e("code",null,"HandledError",-1),be=e("p",null,"Create a handled error from unhandled error",-1),xe=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),r(" Returns")],-1),Ee=e("code",null,"HandledError",-1),ye=e("p",null,"HandledError",-1),ke=e("h4",{id:"defined-in-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-8","aria-hidden":"true"},"#"),r(" Defined in")],-1),Ue={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/UnhandledError.impl.ts#L30",target:"_blank",rel:"noopener noreferrer"},Se=r("src/core/UnhandledError.impl.ts:30"),Ce=n('<hr><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString</h3><p>\u25B8 <strong>toString</strong>(): <code>string</code></p><p>Returns stringified error response object</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><p>ErrorResponse as string</p><h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>',8),Te={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/UnhandledError.impl.ts#L52",target:"_blank",rel:"noopener noreferrer"},ve=r("src/core/UnhandledError.impl.ts:52"),Re=n('<hr><h3 id="capturestacktrace" tabindex="-1"><a class="header-anchor" href="#capturestacktrace" aria-hidden="true">#</a> captureStackTrace</h3><p>\u25B8 <code>Static</code> <strong>captureStackTrace</strong>(<code>targetObject</code>, <code>constructorOpt?</code>): <code>void</code></p><p>Create .stack property on a target object</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>targetObject</code></td><td style="text-align:left;"><code>object</code></td></tr><tr><td style="text-align:left;"><code>constructorOpt?</code></td><td style="text-align:left;"><code>Function</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1"><a class="header-anchor" href="#inherited-from-6" aria-hidden="true">#</a> Inherited from</h4><p>Error.captureStackTrace</p><h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4><p>node_modules/@types/node/globals.d.ts:4</p><hr><h3 id="frommessage" tabindex="-1"><a class="header-anchor" href="#frommessage" aria-hidden="true">#</a> fromMessage</h3>',14),we=r("\u25B8 "),De=e("code",null,"Static",-1),Le=r(),Ie=e("strong",null,"fromMessage",-1),Oe=r("("),He=e("code",null,"message",-1),Ne=r("): "),je=e("code",null,"UnhandledError",-1),Me=e("p",null,"Create a error object from EBMessage error message",-1),Pe=e("h4",{id:"parameters-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-3","aria-hidden":"true"},"#"),r(" Parameters")],-1),Be=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Ve=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),Fe={style:{"text-align":"left"}},qe=e("code",null,"CommandErrorResponse",-1),ze=e("td",{style:{"text-align":"left"}},"CommandErrorResponse",-1),Ae=e("h4",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5","aria-hidden":"true"},"#"),r(" Returns")],-1),Ge=e("code",null,"UnhandledError",-1),Je=e("p",null,"UnhandledError",-1),Ke=e("h4",{id:"defined-in-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-11","aria-hidden":"true"},"#"),r(" Defined in")],-1),Qe={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/UnhandledError.impl.ts#L22",target:"_blank",rel:"noopener noreferrer"},We=r("src/core/UnhandledError.impl.ts:22");function Xe(Ye,Ze){const a=s("RouterLink"),o=s("ExternalLinkIcon");return c(),h(l,null,[e("p",null,[t(a,{to:"/api/"},{default:d(()=>[p]),_:1}),_,t(a,{to:"/api/modules.html"},{default:d(()=>[f]),_:1}),m]),g,e("ul",null,[e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#constructor"},{default:d(()=>[b]),_:1})])]),x,e("ul",null,[e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#cause"},{default:d(()=>[E]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#data"},{default:d(()=>[y]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#errorcode"},{default:d(()=>[k]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#message"},{default:d(()=>[U]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#name"},{default:d(()=>[S]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#stack"},{default:d(()=>[C]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#preparestacktrace"},{default:d(()=>[T]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#stacktracelimit"},{default:d(()=>[v]),_:1})])]),R,e("ul",null,[e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#geterrorresponse"},{default:d(()=>[w]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#intohandlederror"},{default:d(()=>[D]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#tostring"},{default:d(()=>[L]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#capturestacktrace"},{default:d(()=>[I]),_:1})]),e("li",null,[t(a,{to:"/api/classes/UnhandledError.html#frommessage"},{default:d(()=>[O]),_:1})])]),H,e("table",null,[N,e("tbody",null,[e("tr",null,[j,e("td",M,[t(a,{to:"/api/enums/StatusCode.html"},{default:d(()=>[P]),_:1})]),B]),V,F])]),q,z,A,e("p",null,[e("a",G,[J,t(o)])]),K,e("p",null,[Q,W,X,t(a,{to:"/api/enums/StatusCode.html"},{default:d(()=>[Y]),_:1}),Z,$]),ee,e("p",null,[re,te,ae,t(a,{to:"/api/modules.html#errorresponse"},{default:d(()=>[de]),_:1})]),ne,oe,e("p",null,[t(a,{to:"/api/modules.html#errorresponse"},{default:d(()=>[se]),_:1})]),ie,he,e("p",null,[e("a",le,[ce,t(o)])]),ue,pe,e("p",null,[_e,fe,me,t(a,{to:"/api/classes/HandledError.html"},{default:d(()=>[ge]),_:1})]),be,xe,e("p",null,[t(a,{to:"/api/classes/HandledError.html"},{default:d(()=>[Ee]),_:1})]),ye,ke,e("p",null,[e("a",Ue,[Se,t(o)])]),Ce,e("p",null,[e("a",Te,[ve,t(o)])]),Re,e("p",null,[we,De,Le,Ie,Oe,He,Ne,t(a,{to:"/api/classes/UnhandledError.html"},{default:d(()=>[je]),_:1})]),Me,Pe,e("table",null,[Be,e("tbody",null,[e("tr",null,[Ve,e("td",Fe,[t(a,{to:"/api/modules.html#commanderrorresponse"},{default:d(()=>[qe]),_:1})]),ze])])]),Ae,e("p",null,[t(a,{to:"/api/classes/UnhandledError.html"},{default:d(()=>[Ge]),_:1})]),Je,Ke,e("p",null,[e("a",Qe,[We,t(o)])])],64)}var rr=i(u,[["render",Xe],["__file","UnhandledError.html.vue"]]);export{rr as default};