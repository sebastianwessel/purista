import{_ as o,W as l,X as r,Z as e,$ as n,a0 as t,Y as s,D as i}from"./framework-d89ed822.js";const c="/graphic/grafana_screenshot.png",d={},h=e("h2",{id:"example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),n(" Example")],-1),p=e("p",null,[e("img",{src:c,alt:"Grafana"})],-1),u={href:"https://grafana.com",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),m=e("br",null,null,-1),f={href:"https://github.com/sebastianwessel/purista",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"examples/fullexample",-1),b=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run grafana:up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),v={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},x=e("em",null,"Explore",-1),k=e("em",null,"Tempo",-1),y=s(`<p>Start the example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run grafana:start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),w={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},I=e("br",null,null,-1),T=e("br",null,null,-1),E=e("em",null,"Loki",-1),G=e("em",null,"Tempo",-1),L=s(`<p>To stop and cleanup and stop all docker containers:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run grafana:down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function N(S,O){const a=i("ExternalLinkIcon");return l(),r("div",null,[h,p,e("p",null,[e("strong",null,[n("Official website: "),e("a",u,[n("Grafana Labs"),t(a)])])]),e("p",null,[n("See it in action and try out!"),_,n(" You will need docker and docker-compose installed at your machine."),m,n(" At the "),e("a",f,[n("PURISTA repository"),t(a)]),n(" in "),g,n(" you will find a running example:")]),b,e("p",null,[n("Open the Grafana UI in your browser: "),e("a",v,[n("http://localhost:3000"),t(a)]),n(" and go to page "),x,n(" and select "),k,n(".")]),y,e("p",null,[n("To generate some traces, go to the OpenAPI UI at "),e("a",w,[n("http://localhost:8080/"),t(a)]),n(" and call some commands."),I,n(" In the example, the log output is also sent to Grafana Loki and certain JSON fields are pre-configured."),T,n(" If you switch to "),E,n(" in the Grafana UI, you can see, that if you expand a log entry, the trace id is a link, which opens "),G,n(" with the selected trace and span for the log entry.")]),L])}const V=o(d,[["render",N],["__file","grafana.html.vue"]]);export{V as default};