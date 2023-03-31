import{_ as i,W as l,X as c,Z as e,a0 as s,a1 as r,$ as t,Y as d,D as o}from"./framework-d89ed822.js";const h={},u=e("h1",{id:"interface-eventbridge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-eventbridge","aria-hidden":"true"},"#"),t(" Interface: EventBridge")],-1),_=e("p",null,"Event bridge interface The event bridge must implement this interface.",-1),p=e("h2",{id:"implemented-by",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#implemented-by","aria-hidden":"true"},"#"),t(" Implemented by")],-1),g=e("code",null,"DefaultEventBridge",-1),m=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),f=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),b=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),y=d('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="defaultcommandtimeout" tabindex="-1"><a class="header-anchor" href="#defaultcommandtimeout" aria-hidden="true">#</a> defaultCommandTimeout</h3><p>• <code>Readonly</code> <strong>defaultCommandTimeout</strong>: <code>number</code></p><p>The default time until when a command invocation automatically returns a time out error</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',5),v={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L24",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),B=e("h3",{id:"name",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#name","aria-hidden":"true"},"#"),t(" name")],-1),E=e("p",null,[t("• "),e("code",null,"Readonly"),t(),e("strong",null,"name"),t(": "),e("code",null,"string")],-1),k=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),t(" Defined in")],-1),P={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L20",target:"_blank",rel:"noopener noreferrer"},R=d('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Shut down event bridge as gracefully as possible</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',7),D={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L102",target:"_blank",rel:"noopener noreferrer"},C=e("hr",null,null,-1),T=e("h3",{id:"emitmessage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#emitmessage","aria-hidden":"true"},"#"),t(" emitMessage")],-1),w=e("strong",null,"emitMessage",-1),L=e("code",null,"message",-1),I=e("code",null,"Promise",-1),M=e("code",null,"Readonly",-1),S=e("code",null,"EBMessage",-1),N=e("p",null,"Emit a message to the eventbridge without awaiting a result",-1),A=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),O=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),V=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),H={style:{"text-align":"left"}},U=e("code",null,"Omit",-1),W=e("code",null,"EBMessage",-1),X=e("code",null,'"id"',-1),Y=e("code",null,'"instanceId"',-1),Z=e("code",null,'"correlationId"',-1),$=e("code",null,'"timestamp"',-1),j=e("td",{style:{"text-align":"left"}},"the message",-1),q=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),z=e("code",null,"Promise",-1),F=e("code",null,"Readonly",-1),G=e("code",null,"EBMessage",-1),J=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),K={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L35",target:"_blank",rel:"noopener noreferrer"},Q=d('<hr><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>▸ <strong>invoke</strong>&lt;<code>T</code>&gt;(<code>input</code>, <code>ttl?</code>): <code>Promise</code>&lt;<code>T</code>&gt;</p><p>Call a command of a service and return the result of this command</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',7),ee=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),te=e("td",{style:{"text-align":"left"}},[e("code",null,"input")],-1),se={style:{"text-align":"left"}},ne=e("code",null,"Omit",-1),re=e("code",null,"Command",-1),ae=e("code",null,'"id"',-1),de=e("code",null,'"messageType"',-1),oe=e("code",null,'"instanceId"',-1),ie=e("code",null,'"correlationId"',-1),le=e("code",null,'"timestamp"',-1),ce=e("td",{style:{"text-align":"left"}},"a partial command message",-1),he=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"ttl?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"number")]),e("td",{style:{"text-align":"left"}},"the time to live (timeout) of the invocation")],-1),ue=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),t(" Returns")],-1),_e=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"T"),t(">")],-1),pe=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),ge={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L46",target:"_blank",rel:"noopener noreferrer"},me=d('<hr><h3 id="ishealthy" tabindex="-1"><a class="header-anchor" href="#ishealthy" aria-hidden="true">#</a> isHealthy</h3><p>▸ <strong>isHealthy</strong>(): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Indicates if the eventbridge is running and works correctly</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',7),fe={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L97",target:"_blank",rel:"noopener noreferrer"},be=d('<hr><h3 id="isready" tabindex="-1"><a class="header-anchor" href="#isready" aria-hidden="true">#</a> isReady</h3><p>▸ <strong>isReady</strong>(): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Indicates if the eventbridge has been started and is connected to underlaying message broker</p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',7),ye={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L92",target:"_blank",rel:"noopener noreferrer"},ve=d('<hr><h3 id="registercommand" tabindex="-1"><a class="header-anchor" href="#registercommand" aria-hidden="true">#</a> registerCommand</h3><p>▸ <strong>registerCommand</strong>(<code>address</code>, <code>cb</code>, <code>metadata</code>, <code>eventBridgeConfig</code>): <code>Promise</code>&lt;<code>string</code>&gt;</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',4),xe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Be=e("td",{style:{"text-align":"left"}},[e("code",null,"address")],-1),Ee={style:{"text-align":"left"}},ke=e("code",null,"EBMessageAddress",-1),Pe=e("td",{style:{"text-align":"left"}},"the address of the service command (service name, version and command name)",-1),Re=e("td",{style:{"text-align":"left"}},[e("code",null,"cb")],-1),De={style:{"text-align":"left"}},Ce=e("code",null,"message",-1),Te=e("code",null,"Command",-1),we=e("code",null,"Promise",-1),Le=e("code",null,"Readonly",-1),Ie=e("code",null,"Omit",-1),Me=e("code",null,"CommandErrorResponse",-1),Se=e("code",null,'"instanceId"',-1),Ne=e("code",null,"Readonly",-1),Ae=e("code",null,"Omit",-1),Oe=e("code",null,"CommandSuccessResponse",-1),Ve=e("code",null,'"instanceId"',-1),He=e("td",{style:{"text-align":"left"}},"the function to be called if a matching command arrives",-1),Ue=e("td",{style:{"text-align":"left"}},[e("code",null,"metadata")],-1),We={style:{"text-align":"left"}},Xe=e("code",null,"CommandDefinitionMetadataBase",-1),Ye=e("td",{style:{"text-align":"left"}},"-",-1),Ze=e("td",{style:{"text-align":"left"}},[e("code",null,"eventBridgeConfig")],-1),$e={style:{"text-align":"left"}},je=e("code",null,"DefinitionEventBridgeConfig",-1),qe=e("td",{style:{"text-align":"left"}},"-",-1),ze=e("h4",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5","aria-hidden":"true"},"#"),t(" Returns")],-1),Fe=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"string"),t(">")],-1),Ge=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),t(" Defined in")],-1),Je={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L56",target:"_blank",rel:"noopener noreferrer"},Ke=d('<hr><h3 id="registersubscription" tabindex="-1"><a class="header-anchor" href="#registersubscription" aria-hidden="true">#</a> registerSubscription</h3><p>▸ <strong>registerSubscription</strong>(<code>subscription</code>, <code>cb</code>): <code>Promise</code>&lt;<code>string</code>&gt;</p><p>Register a new subscription</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>',5),Qe=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),et=e("td",{style:{"text-align":"left"}},[e("code",null,"subscription")],-1),tt={style:{"text-align":"left"}},st=e("code",null,"Subscription",-1),nt=e("td",{style:{"text-align":"left"}},"the subscription definition",-1),rt=e("td",{style:{"text-align":"left"}},[e("code",null,"cb")],-1),at={style:{"text-align":"left"}},dt=e("code",null,"message",-1),ot=e("code",null,"EBMessage",-1),it=e("code",null,"Promise",-1),lt=e("code",null,"undefined",-1),ct=e("code",null,"Omit",-1),ht=e("code",null,"CustomMessage",-1),ut=e("code",null,'"id"',-1),_t=e("code",null,'"instanceId"',-1),pt=e("code",null,'"timestamp"',-1),gt=e("td",{style:{"text-align":"left"}},"the function to be called if a matching message arrives",-1),mt=e("h4",{id:"returns-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-6","aria-hidden":"true"},"#"),t(" Returns")],-1),ft=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"string"),t(">")],-1),bt=e("h4",{id:"defined-in-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-8","aria-hidden":"true"},"#"),t(" Defined in")],-1),yt={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L78",target:"_blank",rel:"noopener noreferrer"},vt=d('<hr><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><p>▸ <strong>start</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Start the eventbridge and connect to the underlaying message broker</p><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>',7),xt={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L29",target:"_blank",rel:"noopener noreferrer"},Bt=d('<hr><h3 id="unregistercommand" tabindex="-1"><a class="header-anchor" href="#unregistercommand" aria-hidden="true">#</a> unregisterCommand</h3><p>▸ <strong>unregisterCommand</strong>(<code>address</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Unregister a service command</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>',5),Et=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),kt=e("td",{style:{"text-align":"left"}},[e("code",null,"address")],-1),Pt={style:{"text-align":"left"}},Rt=e("code",null,"EBMessageAddress",-1),Dt=e("td",{style:{"text-align":"left"}},"The address (service name, version and command name) of the command to be de-registered",-1),Ct=e("h4",{id:"returns-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-8","aria-hidden":"true"},"#"),t(" Returns")],-1),Tt=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),wt=e("h4",{id:"defined-in-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-10","aria-hidden":"true"},"#"),t(" Defined in")],-1),Lt={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L71",target:"_blank",rel:"noopener noreferrer"},It=d('<hr><h3 id="unregistersubscription" tabindex="-1"><a class="header-anchor" href="#unregistersubscription" aria-hidden="true">#</a> unregisterSubscription</h3><p>▸ <strong>unregisterSubscription</strong>(<code>address</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4>',4),Mt=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),St=e("td",{style:{"text-align":"left"}},[e("code",null,"address")],-1),Nt={style:{"text-align":"left"}},At=e("code",null,"EBMessageAddress",-1),Ot=e("h4",{id:"returns-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-9","aria-hidden":"true"},"#"),t(" Returns")],-1),Vt=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),Ht=e("h4",{id:"defined-in-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-11","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ut={href:"https://github.com/sebastianwessel/purista/blob/8c66693/packages/core/src/core/EventBridge/types/EventBridge.ts#L87",target:"_blank",rel:"noopener noreferrer"};function Wt(Xt,Yt){const n=o("RouterLink"),a=o("ExternalLinkIcon");return l(),c("div",null,[e("p",null,[s(n,{to:"/api/"},{default:r(()=>[t("PURISTA API - v1.4.9")]),_:1}),t(" / "),s(n,{to:"/api/modules.html"},{default:r(()=>[t("Modules")]),_:1}),t(" / "),s(n,{to:"/api/modules/purista_core.html"},{default:r(()=>[t("@purista/core")]),_:1}),t(" / EventBridge")]),u,e("p",null,[s(n,{to:"/api/modules/purista_core.html"},{default:r(()=>[t("@purista/core")]),_:1}),t(".EventBridge")]),_,p,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/purista_core.DefaultEventBridge.html"},{default:r(()=>[g]),_:1})])]),m,f,e("ul",null,[e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#defaultcommandtimeout"},{default:r(()=>[t("defaultCommandTimeout")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#name"},{default:r(()=>[t("name")]),_:1})])]),b,e("ul",null,[e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#destroy"},{default:r(()=>[t("destroy")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#emitmessage"},{default:r(()=>[t("emitMessage")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#invoke"},{default:r(()=>[t("invoke")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#ishealthy"},{default:r(()=>[t("isHealthy")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#isready"},{default:r(()=>[t("isReady")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#registercommand"},{default:r(()=>[t("registerCommand")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#registersubscription"},{default:r(()=>[t("registerSubscription")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#start"},{default:r(()=>[t("start")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#unregistercommand"},{default:r(()=>[t("unregisterCommand")]),_:1})]),e("li",null,[s(n,{to:"/api/interfaces/purista_core.EventBridge.html#unregistersubscription"},{default:r(()=>[t("unregisterSubscription")]),_:1})])]),y,e("p",null,[e("a",v,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:24"),s(a)])]),x,B,E,k,e("p",null,[e("a",P,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:20"),s(a)])]),R,e("p",null,[e("a",D,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:102"),s(a)])]),C,T,e("p",null,[t("▸ "),w,t("("),L,t("): "),I,t("<"),M,t("<"),s(n,{to:"/api/modules/purista_core.html#ebmessage"},{default:r(()=>[S]),_:1}),t(">>")]),N,A,e("table",null,[O,e("tbody",null,[e("tr",null,[V,e("td",H,[U,t("<"),s(n,{to:"/api/modules/purista_core.html#ebmessage"},{default:r(()=>[W]),_:1}),t(", "),X,t(" | "),Y,t(" | "),Z,t(" | "),$,t(">")]),j])])]),q,e("p",null,[z,t("<"),F,t("<"),s(n,{to:"/api/modules/purista_core.html#ebmessage"},{default:r(()=>[G]),_:1}),t(">>")]),J,e("p",null,[e("a",K,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:35"),s(a)])]),Q,e("table",null,[ee,e("tbody",null,[e("tr",null,[te,e("td",se,[ne,t("<"),s(n,{to:"/api/modules/purista_core.html#command"},{default:r(()=>[re]),_:1}),t(", "),ae,t(" | "),de,t(" | "),oe,t(" | "),ie,t(" | "),le,t(">")]),ce]),he])]),ue,_e,pe,e("p",null,[e("a",ge,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:46"),s(a)])]),me,e("p",null,[e("a",fe,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:97"),s(a)])]),be,e("p",null,[e("a",ye,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:92"),s(a)])]),ve,e("table",null,[xe,e("tbody",null,[e("tr",null,[Be,e("td",Ee,[s(n,{to:"/api/modules/purista_core.html#ebmessageaddress"},{default:r(()=>[ke]),_:1})]),Pe]),e("tr",null,[Re,e("td",De,[t("("),Ce,t(": "),s(n,{to:"/api/modules/purista_core.html#command"},{default:r(()=>[Te]),_:1}),t(") => "),we,t("<"),Le,t("<"),Ie,t("<"),s(n,{to:"/api/modules/purista_core.html#commanderrorresponse"},{default:r(()=>[Me]),_:1}),t(", "),Se,t(">> | "),Ne,t("<"),Ae,t("<"),s(n,{to:"/api/modules/purista_core.html#commandsuccessresponse"},{default:r(()=>[Oe]),_:1}),t(", "),Ve,t(">>>")]),He]),e("tr",null,[Ue,e("td",We,[s(n,{to:"/api/modules/purista_core.html#commanddefinitionmetadatabase"},{default:r(()=>[Xe]),_:1})]),Ye]),e("tr",null,[Ze,e("td",$e,[s(n,{to:"/api/modules/purista_core.html#definitioneventbridgeconfig"},{default:r(()=>[je]),_:1})]),qe])])]),ze,Fe,Ge,e("p",null,[e("a",Je,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:56"),s(a)])]),Ke,e("table",null,[Qe,e("tbody",null,[e("tr",null,[et,e("td",tt,[s(n,{to:"/api/modules/purista_core.html#subscription"},{default:r(()=>[st]),_:1})]),nt]),e("tr",null,[rt,e("td",at,[t("("),dt,t(": "),s(n,{to:"/api/modules/purista_core.html#ebmessage"},{default:r(()=>[ot]),_:1}),t(") => "),it,t("<"),lt,t(" | "),ct,t("<"),s(n,{to:"/api/modules/purista_core.html#custommessage"},{default:r(()=>[ht]),_:1}),t(", "),ut,t(" | "),_t,t(" | "),pt,t(">>")]),gt])])]),mt,ft,bt,e("p",null,[e("a",yt,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:78"),s(a)])]),vt,e("p",null,[e("a",xt,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:29"),s(a)])]),Bt,e("table",null,[Et,e("tbody",null,[e("tr",null,[kt,e("td",Pt,[s(n,{to:"/api/modules/purista_core.html#ebmessageaddress"},{default:r(()=>[Rt]),_:1})]),Dt])])]),Ct,Tt,wt,e("p",null,[e("a",Lt,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:71"),s(a)])]),It,e("table",null,[Mt,e("tbody",null,[e("tr",null,[St,e("td",Nt,[s(n,{to:"/api/modules/purista_core.html#ebmessageaddress"},{default:r(()=>[At]),_:1})])])])]),Ot,Vt,Ht,e("p",null,[e("a",Ut,[t("packages/core/src/core/EventBridge/types/EventBridge.ts:87"),s(a)])])])}const $t=i(h,[["render",Wt],["__file","purista_core.EventBridge.html.vue"]]);export{$t as default};