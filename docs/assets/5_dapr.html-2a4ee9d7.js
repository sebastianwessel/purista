import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as k,b as n,d as s,e,w as t,a as m}from"./app-2c9217f0.js";const v={},b=n("code",null,"@purista/dapr-sdk",-1),h={href:"https://dapr.io",target:"_blank",rel:"noopener noreferrer"},g={href:"https://dapr.io",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),w=m('<p>The Dapr event bridge contains two basic things.<br> There is an HTTP server, which provides endpoints for invoking commands and receiving events.<br> The second part of the Dapr event bridge is an HTTP client, which allows to send events, invoke functions.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>To prevent timing issues, you need to follow a order, which is not the regular order in PURISTA:</p><ul><li>create a Dapr event bridge instance (not started!)</li><li>create a instance of your service (only one service per instance is possible)</li><li>start your service</li><li>start the Dapr event bridge instance.</li></ul><p>This is necessary, because the Dapr sidecar will call HTTP endpoints of your container at some unknown time.<br> These endpoints must return the finial configuration.<br> Because of the internal flexible and asynchronous structure within PURISTA, the Dapr event bridge webserver will never know, if all commands and subscriptions are added at the time of some endpoint invocation.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',6),_={href:"https://hono.dev/",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),S=n("br",null,null,-1),D={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://bun.sh/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://deno.com/runtime",target:"_blank",rel:"noopener noreferrer"},x=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Node.js package required"),n("p",null,[s("If you use Node.js as runtime, you need to install the additional package "),n("code",null,"@hono/node-server"),s(" with version "),n("code",null,"1.0.0-rc.1"),s(" or higher!")])],-1),V=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// package required for node adapter"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" serve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@hono/node-server'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" gracefulShutdown "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@purista/core'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" DaprEventBridge "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@purista/dapr-sdk'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" userV1Service "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../src/service/user/v1/userV1Service'"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"main"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token comment"},"// create a Dapr event bridge instance"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" eventBridge "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DaprEventBridge"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    serve`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// create your service instance"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" userService "),n("span",{class:"token operator"},"="),s(" userV1Service"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),s("eventBridge"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// start your service instance"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" userService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// start the Dapr event bridge instance"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" eventBridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token function"},"gracefulShutdown"),n("span",{class:"token punctuation"},"("),s("logger"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// begin with the event bridge to no longer accept incoming messages"),s(`
    eventBridge`),n("span",{class:"token punctuation"},","),s(`
    userService`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// no extra import required"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" gracefulShutdown "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@purista/core'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" DaprEventBridge "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@purista/dapr-sdk'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" userV1Service "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../src/service/user/v1/userV1Service'"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"main"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token comment"},"// create a Dapr event bridge instance"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" eventBridge "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DaprEventBridge"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    serve`),n("span",{class:"token operator"},":"),s(" Bun"),n("span",{class:"token punctuation"},"."),s("serve"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// create your service instance"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" userService "),n("span",{class:"token operator"},"="),s(" userV1Service"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),s("eventBridge"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// start your service instance"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" userService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// start the Dapr event bridge instance"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" eventBridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token function"},"gracefulShutdown"),n("span",{class:"token punctuation"},"("),s("logger"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// begin with the event bridge to no longer accept incoming messages"),s(`
    eventBridge`),n("span",{class:"token punctuation"},","),s(`
    userService`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// import Deno serve"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" serve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'https://deno.land/std/http/server.ts'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" gracefulShutdown "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@purista/core'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" DaprEventBridge "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@purista/dapr-sdk'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" userV1Service "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../src/service/user/v1/userV1Service'"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"main"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token comment"},"// create a Dapr event bridge instance"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" eventBridge "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DaprEventBridge"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    serve`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// create your service instance"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" userService "),n("span",{class:"token operator"},"="),s(" userV1Service"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),s("eventBridge"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// start your service instance"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" userService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// start the Dapr event bridge instance"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" eventBridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token function"},"gracefulShutdown"),n("span",{class:"token punctuation"},"("),s("logger"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// begin with the event bridge to no longer accept incoming messages"),s(`
    eventBridge`),n("span",{class:"token punctuation"},","),s(`
    userService`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"ressources",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ressources","aria-hidden":"true"},"#"),s(" Ressources")],-1),N={href:"https://dapr.io",target:"_blank",rel:"noopener noreferrer"},P={href:"https://twitter.com/purista_js",target:"_blank",rel:"noopener noreferrer"},A={href:"https://discord.gg/9feaUm3H2v",target:"_blank",rel:"noopener noreferrer"};function R(H,U){const a=o("ExternalLinkIcon"),l=o("RouterLink"),u=o("CodeTabs");return d(),k("div",null,[n("p",null,[s("PURISTA provides the "),b,s(" package, which includes an event bridge to use the "),n("a",h,[s("Dapr"),e(a)]),s(" features.")]),n("p",null,[s("You should be familiar with the core concepts of "),n("a",g,[s("Dapr"),e(a)]),s("."),f,s(" There are also some more information available at the chapter "),e(l,{to:"/handbook/7._deployment/4_dapr.html"},{default:t(()=>[s("Deployment - Dapr")]),_:1}),s(".")]),w,n("p",null,[s("The Dapr event bridge HTTP server is based on the awesome "),n("a",_,[s("Hono"),e(a)]),s(" framework."),y,s(" This small, simple, and ultrafast web framework provides the ability, to profit from the benefits of your runtime."),S,s(" You can use regular "),n("a",D,[s("Node.js"),e(a)]),s(" or "),n("a",B,[s("Bun"),e(a)]),s(" or "),n("a",T,[s("Deno"),e(a)]),s(".")]),x,e(u,{id:"51",data:[{title:"Node.js"},{title:"Bun"},{title:"Deno"}],active:0,"tab-id":"shell"},{tab0:t(({title:c,value:i,isActive:r})=>[V]),tab1:t(({title:c,value:i,isActive:r})=>[E]),tab2:t(({title:c,value:i,isActive:r})=>[I]),_:1},8,["data"]),j,n("ul",null,[n("li",null,[n("a",N,[s("Dapr.io"),e(a)]),s(" (official website)")])]),n("p",null,[n("strong",null,[s("You can follow updated on Twitter "),n("a",P,[s("@purista_js"),e(a)]),s(" or join the "),n("a",A,[s("Discord server"),e(a)]),s(" to get in touch with PURISTA maintainers and other developers.")])])])}const q=p(v,[["render",R],["__file","5_dapr.html.vue"]]);export{q as default};
