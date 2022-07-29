import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c,b as e,e as n,w as t,d as s,a as h,r as i}from"./app.0777453f.js";const l={},u=s("PURISTA API - v1.3.1"),_=s(" / "),p=s("@purista/core"),f=s(" / EBMessageType"),m=e("h1",{id:"enumeration-ebmessagetype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#enumeration-ebmessagetype","aria-hidden":"true"},"#"),s(" Enumeration: EBMessageType")],-1),g=s("@purista/core"),b=s(".EBMessageType"),y=e("p",null,"Type of event bridge message",-1),v=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),s(" Table of contents")],-1),E=e("h3",{id:"enumeration-members",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#enumeration-members","aria-hidden":"true"},"#"),s(" Enumeration Members")],-1),T=s("Command"),M=s("CommandErrorResponse"),B=s("CommandSuccessResponse"),I=s("CustomMessage"),x=s("InfoInvokeTimeout"),S=s("InfoServiceDrain"),k=s("InfoServiceFunctionAdded"),w=s("InfoServiceInit"),R=s("InfoServiceNotReady"),D=s("InfoServiceReady"),L=s("InfoServiceShutdown"),C=s("InfoSubscriptionError"),N=h('<h2 id="enumeration-members-1" tabindex="-1"><a class="header-anchor" href="#enumeration-members-1" aria-hidden="true">#</a> Enumeration Members</h2><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h3><p>\u2022 <strong>Command</strong> = <code>&quot;command&quot;</code></p><p>Command message type: Message which is sent from a single sender to exactly one single receiver. The sender expects a answer response from receiver within a specific time frame (ttl). If the sender does not receive a answer within this time frame, the command will be rejected with timeout error.</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',5),A={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L11",target:"_blank",rel:"noopener noreferrer"},F=s("core/src/core/types/EBMessageType.enum.ts:11"),V=e("hr",null,null,-1),q=e("h3",{id:"commanderrorresponse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commanderrorresponse","aria-hidden":"true"},"#"),s(" CommandErrorResponse")],-1),P=e("p",null,[s("\u2022 "),e("strong",null,"CommandErrorResponse"),s(" = "),e("code",null,'"commandErrorResponse"')],-1),j=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),s(" Defined in")],-1),U={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L15",target:"_blank",rel:"noopener noreferrer"},z=s("core/src/core/types/EBMessageType.enum.ts:15"),G=e("hr",null,null,-1),H=e("h3",{id:"commandsuccessresponse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commandsuccessresponse","aria-hidden":"true"},"#"),s(" CommandSuccessResponse")],-1),J=e("p",null,[s("\u2022 "),e("strong",null,"CommandSuccessResponse"),s(" = "),e("code",null,'"commandSuccessResponse"')],-1),K=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),s(" Defined in")],-1),O={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L13",target:"_blank",rel:"noopener noreferrer"},Q=s("core/src/core/types/EBMessageType.enum.ts:13"),W=e("hr",null,null,-1),X=e("h3",{id:"custommessage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custommessage","aria-hidden":"true"},"#"),s(" CustomMessage")],-1),Y=e("p",null,[s("\u2022 "),e("strong",null,"CustomMessage"),s(" = "),e("code",null,'"customMessage"')],-1),Z=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),s(" Defined in")],-1),$={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L31",target:"_blank",rel:"noopener noreferrer"},ee=s("core/src/core/types/EBMessageType.enum.ts:31"),se=e("hr",null,null,-1),ne=e("h3",{id:"infoinvoketimeout",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoinvoketimeout","aria-hidden":"true"},"#"),s(" InfoInvokeTimeout")],-1),oe=e("p",null,[s("\u2022 "),e("strong",null,"InfoInvokeTimeout"),s(" = "),e("code",null,'"infoInvokeTimeout"')],-1),te=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),s(" Defined in")],-1),re={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L29",target:"_blank",rel:"noopener noreferrer"},ie=s("core/src/core/types/EBMessageType.enum.ts:29"),ae=e("hr",null,null,-1),de=e("h3",{id:"infoservicedrain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoservicedrain","aria-hidden":"true"},"#"),s(" InfoServiceDrain")],-1),ce=e("p",null,[s("\u2022 "),e("strong",null,"InfoServiceDrain"),s(" = "),e("code",null,'"infoServiceDrain"')],-1),he=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),s(" Defined in")],-1),le={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L27",target:"_blank",rel:"noopener noreferrer"},ue=s("core/src/core/types/EBMessageType.enum.ts:27"),_e=e("hr",null,null,-1),pe=e("h3",{id:"infoservicefunctionadded",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoservicefunctionadded","aria-hidden":"true"},"#"),s(" InfoServiceFunctionAdded")],-1),fe=e("p",null,[s("\u2022 "),e("strong",null,"InfoServiceFunctionAdded"),s(" = "),e("code",null,'"infoServiceFunctionAdded"')],-1),me=e("h4",{id:"defined-in-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-6","aria-hidden":"true"},"#"),s(" Defined in")],-1),ge={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L26",target:"_blank",rel:"noopener noreferrer"},be=s("core/src/core/types/EBMessageType.enum.ts:26"),ye=e("hr",null,null,-1),ve=e("h3",{id:"infoserviceinit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoserviceinit","aria-hidden":"true"},"#"),s(" InfoServiceInit")],-1),Ee=e("p",null,[s("\u2022 "),e("strong",null,"InfoServiceInit"),s(" = "),e("code",null,'"infoServiceInit"')],-1),Te=e("p",null,"Info message type: Message which is sent from a single sender to unspecified receivers. The sender does not expect any answer to this message and does not process any reply to this message. Info messages are fire & forget broadcasting messages.",-1),Me=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),s(" Defined in")],-1),Be={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L23",target:"_blank",rel:"noopener noreferrer"},Ie=s("core/src/core/types/EBMessageType.enum.ts:23"),xe=e("hr",null,null,-1),Se=e("h3",{id:"infoservicenotready",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoservicenotready","aria-hidden":"true"},"#"),s(" InfoServiceNotReady")],-1),ke=e("p",null,[s("\u2022 "),e("strong",null,"InfoServiceNotReady"),s(" = "),e("code",null,'"infoServiceNotReady"')],-1),we=e("h4",{id:"defined-in-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-8","aria-hidden":"true"},"#"),s(" Defined in")],-1),Re={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L25",target:"_blank",rel:"noopener noreferrer"},De=s("core/src/core/types/EBMessageType.enum.ts:25"),Le=e("hr",null,null,-1),Ce=e("h3",{id:"infoserviceready",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoserviceready","aria-hidden":"true"},"#"),s(" InfoServiceReady")],-1),Ne=e("p",null,[s("\u2022 "),e("strong",null,"InfoServiceReady"),s(" = "),e("code",null,'"infoServiceReady"')],-1),Ae=e("h4",{id:"defined-in-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-9","aria-hidden":"true"},"#"),s(" Defined in")],-1),Fe={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L24",target:"_blank",rel:"noopener noreferrer"},Ve=s("core/src/core/types/EBMessageType.enum.ts:24"),qe=e("hr",null,null,-1),Pe=e("h3",{id:"infoserviceshutdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoserviceshutdown","aria-hidden":"true"},"#"),s(" InfoServiceShutdown")],-1),je=e("p",null,[s("\u2022 "),e("strong",null,"InfoServiceShutdown"),s(" = "),e("code",null,'"infoServiceShutdown"')],-1),Ue=e("h4",{id:"defined-in-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-10","aria-hidden":"true"},"#"),s(" Defined in")],-1),ze={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L28",target:"_blank",rel:"noopener noreferrer"},Ge=s("core/src/core/types/EBMessageType.enum.ts:28"),He=e("hr",null,null,-1),Je=e("h3",{id:"infosubscriptionerror",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infosubscriptionerror","aria-hidden":"true"},"#"),s(" InfoSubscriptionError")],-1),Ke=e("p",null,[s("\u2022 "),e("strong",null,"InfoSubscriptionError"),s(" = "),e("code",null,'"infoSubscriptionError"')],-1),Oe=e("h4",{id:"defined-in-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-11","aria-hidden":"true"},"#"),s(" Defined in")],-1),Qe={href:"https://github.com/sebastianwessel/purista/blob/81fe9e5/packages/core/src/core/types/EBMessageType.enum.ts#L30",target:"_blank",rel:"noopener noreferrer"},We=s("core/src/core/types/EBMessageType.enum.ts:30");function Xe(Ye,Ze){const o=i("RouterLink"),r=i("ExternalLinkIcon");return d(),c("div",null,[e("p",null,[n(o,{to:"/api/"},{default:t(()=>[u]),_:1}),_,n(o,{to:"/api/modules/purista_core.html"},{default:t(()=>[p]),_:1}),f]),m,e("p",null,[n(o,{to:"/api/modules/purista_core.html"},{default:t(()=>[g]),_:1}),b]),y,v,E,e("ul",null,[e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#command"},{default:t(()=>[T]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#commanderrorresponse"},{default:t(()=>[M]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#commandsuccessresponse"},{default:t(()=>[B]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#custommessage"},{default:t(()=>[I]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoinvoketimeout"},{default:t(()=>[x]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoservicedrain"},{default:t(()=>[S]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoservicefunctionadded"},{default:t(()=>[k]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoserviceinit"},{default:t(()=>[w]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoservicenotready"},{default:t(()=>[R]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoserviceready"},{default:t(()=>[D]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infoserviceshutdown"},{default:t(()=>[L]),_:1})]),e("li",null,[n(o,{to:"/api/enums/purista_core.EBMessageType.html#infosubscriptionerror"},{default:t(()=>[C]),_:1})])]),N,e("p",null,[e("a",A,[F,n(r)])]),V,q,P,j,e("p",null,[e("a",U,[z,n(r)])]),G,H,J,K,e("p",null,[e("a",O,[Q,n(r)])]),W,X,Y,Z,e("p",null,[e("a",$,[ee,n(r)])]),se,ne,oe,te,e("p",null,[e("a",re,[ie,n(r)])]),ae,de,ce,he,e("p",null,[e("a",le,[ue,n(r)])]),_e,pe,fe,me,e("p",null,[e("a",ge,[be,n(r)])]),ye,ve,Ee,Te,Me,e("p",null,[e("a",Be,[Ie,n(r)])]),xe,Se,ke,we,e("p",null,[e("a",Re,[De,n(r)])]),Le,Ce,Ne,Ae,e("p",null,[e("a",Fe,[Ve,n(r)])]),qe,Pe,je,Ue,e("p",null,[e("a",ze,[Ge,n(r)])]),He,Je,Ke,Oe,e("p",null,[e("a",Qe,[We,n(r)])])])}var ss=a(l,[["render",Xe],["__file","purista_core.EBMessageType.html.vue"]]);export{ss as default};
