import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c,b as e,e as n,w as i,d as t,a,r as o}from"./app.a8dcba40.js";const h={},u=t("PURISTA API - v1.4.3"),_=t(" / @purista/amqpbridge"),p=a('<h1 id="module-purista-amqpbridge" tabindex="-1"><a class="header-anchor" href="#module-purista-amqpbridge" aria-hidden="true">#</a> Module: @purista/amqpbridge</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="namespaces" tabindex="-1"><a class="header-anchor" href="#namespaces" aria-hidden="true">#</a> Namespaces</h3>',3),f=t("internal"),g=e("h3",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),t(" Classes")],-1),m=t("AmqpBridge"),b=e("h3",{id:"type-aliases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type-aliases","aria-hidden":"true"},"#"),t(" Type Aliases")],-1),y=t("AmqpBridgeConfig"),x=t("Encoder"),q=t("EncryptFunctions"),E=t("Encrypter"),k=e("h3",{id:"functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#"),t(" Functions")],-1),B=t("getDefaultConfig"),C=a('<h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="amqpbridgeconfig" tabindex="-1"><a class="header-anchor" href="#amqpbridgeconfig" aria-hidden="true">#</a> AmqpBridgeConfig</h3><p>\u01AC <strong>AmqpBridgeConfig</strong>: <code>Object</code></p><p>AmqpBridge bridge config</p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4>',5),A=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),D=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"defaultCommandTimeout")]),e("td",{style:{"text-align":"left"}},[e("code",null,"number")])],-1),T=e("td",{style:{"text-align":"left"}},[e("code",null,"encoder?")],-1),F={style:{"text-align":"left"}},L=e("code",null,"Encoder",-1),N=e("td",{style:{"text-align":"left"}},[e("code",null,"encrypter?")],-1),w={style:{"text-align":"left"}},O=e("code",null,"Encrypter",-1),R=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"exchangeName")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),v=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"exchangeOptions?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Options.AssertExchange")])],-1),I=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"instanceId")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),P=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"namePrefix?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),V=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"socketOptions?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"any")])],-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"url")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string"),t(" | "),e("code",null,"Options.Connect")])],-1),S=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),t(" Defined in")],-1),M={href:"https://github.com/sebastianwessel/purista/blob/c89c5bf/packages/amqpbridge/src/types/AmqpBridgeConfig.ts#L9",target:"_blank",rel:"noopener noreferrer"},U=t("amqpbridge/src/types/AmqpBridgeConfig.ts:9"),z=e("hr",null,null,-1),G=e("h3",{id:"encoder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#encoder","aria-hidden":"true"},"#"),t(" Encoder")],-1),H=t("\u01AC "),J=e("strong",null,"Encoder",-1),K=t(": "),Q=e("code",null,"Record",-1),W=t("<"),X=e("code",null,"string",-1),Y=t(", "),Z=e("code",null,"EncoderFunctions",-1),$=t(">"),ee=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),t(" Defined in")],-1),te={href:"https://github.com/sebastianwessel/purista/blob/c89c5bf/packages/amqpbridge/src/types/Encoder.ts#L3",target:"_blank",rel:"noopener noreferrer"},ne=t("amqpbridge/src/types/Encoder.ts:3"),se=a('<hr><h3 id="encryptfunctions" tabindex="-1"><a class="header-anchor" href="#encryptfunctions" aria-hidden="true">#</a> EncryptFunctions</h3><p>\u01AC <strong>EncryptFunctions</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>decrypt</code></td><td style="text-align:left;">(<code>input</code>: <code>Buffer</code>) =&gt; <code>Promise</code>&lt;<code>Buffer</code>&gt;</td></tr><tr><td style="text-align:left;"><code>encrypt</code></td><td style="text-align:left;">(<code>input</code>: <code>Buffer</code>) =&gt; <code>Promise</code>&lt;<code>Buffer</code>&gt;</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',6),ie={href:"https://github.com/sebastianwessel/purista/blob/c89c5bf/packages/amqpbridge/src/types/EncryptFunctions.ts#L1",target:"_blank",rel:"noopener noreferrer"},de=t("amqpbridge/src/types/EncryptFunctions.ts:1"),ae=e("hr",null,null,-1),oe=e("h3",{id:"encrypter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#encrypter","aria-hidden":"true"},"#"),t(" Encrypter")],-1),le=t("\u01AC "),re=e("strong",null,"Encrypter",-1),ce=t(": "),he=e("code",null,"Record",-1),ue=t("<"),_e=e("code",null,"string",-1),pe=t(", "),fe=e("code",null,"EncryptFunctions",-1),ge=t(">"),me=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),be={href:"https://github.com/sebastianwessel/purista/blob/c89c5bf/packages/amqpbridge/src/types/Encrypter.ts#L3",target:"_blank",rel:"noopener noreferrer"},ye=t("amqpbridge/src/types/Encrypter.ts:3"),xe=e("h2",{id:"functions-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functions-1","aria-hidden":"true"},"#"),t(" Functions")],-1),qe=e("h3",{id:"getdefaultconfig",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getdefaultconfig","aria-hidden":"true"},"#"),t(" getDefaultConfig")],-1),Ee=t("\u25B8 "),ke=e("strong",null,"getDefaultConfig",-1),Be=t("(): "),Ce=e("code",null,"AmqpBridgeConfig",-1),Ae=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),De=e("code",null,"AmqpBridgeConfig",-1),Te=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),Fe={href:"https://github.com/sebastianwessel/purista/blob/c89c5bf/packages/amqpbridge/src/getDefaultConfig.impl.ts#L5",target:"_blank",rel:"noopener noreferrer"},Le=t("amqpbridge/src/getDefaultConfig.impl.ts:5");function Ne(we,Oe){const s=o("RouterLink"),d=o("ExternalLinkIcon");return r(),c("div",null,[e("p",null,[n(s,{to:"/api/"},{default:i(()=>[u]),_:1}),_]),p,e("ul",null,[e("li",null,[n(s,{to:"/api/modules/purista_amqpbridge.internal.html"},{default:i(()=>[f]),_:1})])]),g,e("ul",null,[e("li",null,[n(s,{to:"/api/classes/purista_amqpbridge.AmqpBridge.html"},{default:i(()=>[m]),_:1})])]),b,e("ul",null,[e("li",null,[n(s,{to:"/api/modules/purista_amqpbridge.html#amqpbridgeconfig"},{default:i(()=>[y]),_:1})]),e("li",null,[n(s,{to:"/api/modules/purista_amqpbridge.html#encoder"},{default:i(()=>[x]),_:1})]),e("li",null,[n(s,{to:"/api/modules/purista_amqpbridge.html#encryptfunctions"},{default:i(()=>[q]),_:1})]),e("li",null,[n(s,{to:"/api/modules/purista_amqpbridge.html#encrypter"},{default:i(()=>[E]),_:1})])]),k,e("ul",null,[e("li",null,[n(s,{to:"/api/modules/purista_amqpbridge.html#getdefaultconfig"},{default:i(()=>[B]),_:1})])]),C,e("table",null,[A,e("tbody",null,[D,e("tr",null,[T,e("td",F,[n(s,{to:"/api/modules/purista_amqpbridge.html#encoder"},{default:i(()=>[L]),_:1})])]),e("tr",null,[N,e("td",w,[n(s,{to:"/api/modules/purista_amqpbridge.html#encrypter"},{default:i(()=>[O]),_:1})])]),R,v,I,P,V,j])]),S,e("p",null,[e("a",M,[U,n(d)])]),z,G,e("p",null,[H,J,K,Q,W,X,Y,n(s,{to:"/api/modules/purista_amqpbridge.internal.html#encoderfunctions"},{default:i(()=>[Z]),_:1}),$]),ee,e("p",null,[e("a",te,[ne,n(d)])]),se,e("p",null,[e("a",ie,[de,n(d)])]),ae,oe,e("p",null,[le,re,ce,he,ue,_e,pe,n(s,{to:"/api/modules/purista_amqpbridge.html#encryptfunctions"},{default:i(()=>[fe]),_:1}),ge]),me,e("p",null,[e("a",be,[ye,n(d)])]),xe,qe,e("p",null,[Ee,ke,Be,n(s,{to:"/api/modules/purista_amqpbridge.html#amqpbridgeconfig"},{default:i(()=>[Ce]),_:1})]),Ae,e("p",null,[n(s,{to:"/api/modules/purista_amqpbridge.html#amqpbridgeconfig"},{default:i(()=>[De]),_:1})]),Te,e("p",null,[e("a",Fe,[Le,n(d)])])])}var Ie=l(h,[["render",Ne],["__file","purista_amqpbridge.html.vue"]]);export{Ie as default};
