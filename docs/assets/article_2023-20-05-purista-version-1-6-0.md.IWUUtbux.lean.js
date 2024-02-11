import{_ as t,E as a,c as n,J as l,w as h,o as r,a as i,m as s}from"./chunks/framework.ITQiifkM.js";const U=JSON.parse('{"title":"Version 1.6","description":"Checkout all the awesome features, improvements and changes in PURISTA v1.6.0 typescript framework.","frontmatter":{"title":"Version 1.6","description":"Checkout all the awesome features, improvements and changes in PURISTA v1.6.0 typescript framework.","date":"2023-05-20T00:00:00.000Z","order":20230520,"image":"/graphic/purista_1_6_cover.png"},"headers":[],"relativePath":"article/2023-20-05-purista-version-1-6-0.md","filePath":"article/2023-20-05-purista-version-1-6-0.md","lastUpdated":1706444636000}'),o={name:"article/2023-20-05-purista-version-1-6-0.md"},k=s("hr",null,null,-1),p=s("p",null,"On the other side, Dapr support is now added for cloud environments. This not only includes simple deployments and usage of the core event functionality. The new Dapr-SDK provides also the integration of state, config, and secret stores via Dapr.",-1),d=s("p",null,[s("strong",null,"PURISTA now requires Node version >= 18.15"),i(". Also, the provided PURISTA packages no longer contain source map files, resulting in a much smaller size.")],-1),c=s("p",null,[i("A very common task is, to build an HTTP adapter and call external REST APIs. For such a task, the new base class "),s("code",null,"HttpClient"),i(" is available, which is based on the native fetch function. Error handling, JSON decoding, timeout handling, and OpenTelemetry support are built in.")],-1),g=s("p",null,"In addition, there are a bunch of improvements regarding types, and configurations, and some bugs have been fixed.",-1),E=s("h2",{id:"mqtt-event-bridge",tabindex:"-1"},[i("MQTT event bridge "),s("a",{class:"header-anchor",href:"#mqtt-event-bridge","aria-label":'Permalink to "MQTT event bridge"'},"​")],-1),u=s("p",null,"By providing the MQTT event bridge, PURISTA is making a huge step into the IoT and edge device area. The MQTT bridge is based on the MQTT 5 protocol, which makes it possible to provide nearly the same functionality as on other event bridges.",-1),y=s("h2",{id:"dapr-sdk",tabindex:"-1"},[i("Dapr SDK "),s("a",{class:"header-anchor",href:"#dapr-sdk","aria-label":'Permalink to "Dapr SDK"'},"​")],-1),m=s("p",null,"The SDK for Dapr includes an event bridge and adapters for config, secret and state stores. This allows an easy integration into the Dapr infrastructure without touching the business logic.",-1),F=s("h2",{id:"http-client",tabindex:"-1"},[i("Http client "),s("a",{class:"header-anchor",href:"#http-client","aria-label":'Permalink to "Http client"'},"​")],-1),f=s("p",null,[i("The core package has some new nice helpers. With the "),s("code",null,"HttpClient"),i(" class, it is possible to build HTTP-based clients quickly & easily.")],-1),_=s("p",null,[i("The "),s("code",null,"HttpClient"),i(" is based on Node.js native "),s("code",null,"fetch"),i(".")],-1),v=s("p",null,"Example:",-1),b=s("div",{class:"language-typescript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { HttpClient } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@purista/core'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," LoginResponse"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  token"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," async"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," client"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," HttpClient"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    baseUrl: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'http://example.com'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    defaultHeaders: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"      'content-type'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'application/json; charset=utf-8'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  })")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," loginCredentials"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    username: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'user'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    password: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'secret_thing'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // to a POST request to receive a bearer token")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," loginResponse"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," await"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," client."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"post"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"LoginResponse"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/login'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", loginCredentials)")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // set the bearer token for all following requests")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  client."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setBearerToken"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(loginResponse.token)")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // make a GET request with bearer token set in header")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," restrictedResponse"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," await"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," client."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/restricted/path'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // log the response from a protected route")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(restrictedResponse)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1),T=s("h2",{id:"improvements",tabindex:"-1"},[i("Improvements "),s("a",{class:"header-anchor",href:"#improvements","aria-label":'Permalink to "Improvements"'},"​")],-1),D=s("p",null,"This release contains a lot of improvements. By default, HTTP compression is enabled in the Dapr event bridge and the Kubernetes webserver. Configurations are now more flat to avoid too much nested parameters.",-1),C=s("p",null,[i("Dependencies have been updated to the most recent versions. Because of this, the plugin "),s("code",null,"@anatine/zod-openapi"),i(" is replaced by a own version. A lot of unit and integration tests have been added to the project.")],-1),A=s("h2",{id:"shout-out",tabindex:"-1"},[i("Shout out "),s("a",{class:"header-anchor",href:"#shout-out","aria-label":'Permalink to "Shout out"'},"​")],-1),w=s("p",null,'A special "Thank You!" to the contributors and developers of:',-1),B=s("ul",null,[s("li",null,[s("a",{href:"https://hono.dev",target:"_blank",rel:"noreferrer"},"Hono")]),s("li",null,[s("a",{href:"https://www.emqx.io",target:"_blank",rel:"noreferrer"},"EMQ")]),s("li",null,[s("a",{href:"https://github.com/tgreyuk/typedoc-plugin-markdown",target:"_blank",rel:"noreferrer"},"typedoc-plugin-markdown")]),s("li",null,[s("a",{href:"https://snappify.com/",target:"_blank",rel:"noreferrer"},"Snappify")])],-1),P=s("p",null,"Thanks for your cool stuff and your help - I appreciate it!",-1);function S(x,I,R,H,q,M){const e=a("PostDetail");return r(),n("div",null,[l(e,null,{default:h(()=>[i(" PURISTA version 1.6.0 comes with a set of new event bridges. Starting from version 1.6.0, the new MQTT event bridge supports the MQTT protocol. This is a huge step forward if you're developing solutions for IoT and Edge. "),k,p,d,c,g,E,u,y,m,F,f,_,v,b,T,D,C,A,w,B,P]),_:1})])}const N=t(o,[["render",S]]);export{U as __pageData,N as default};