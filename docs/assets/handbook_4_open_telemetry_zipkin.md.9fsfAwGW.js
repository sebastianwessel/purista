import{_ as n,E as p,c as o,m as i,a as e,J as s,V as t,o as r,ak as l}from"./chunks/framework.ITQiifkM.js";const C=JSON.parse('{"title":"Zipkin","description":"Use Opentelemetry with Zipkin to trace PURISTA based typescript applications","frontmatter":{"title":"Zipkin","description":"Use Opentelemetry with Zipkin to trace PURISTA based typescript applications","order":409000},"headers":[],"relativePath":"handbook/4_open_telemetry/zipkin.md","filePath":"handbook/4_open_telemetry/zipkin.md","lastUpdated":1706444636000}'),c={name:"handbook/4_open_telemetry/zipkin.md"},h=t('<h1 id="zipkin" tabindex="-1">Zipkin <a class="header-anchor" href="#zipkin" aria-label="Permalink to &quot;Zipkin&quot;">​</a></h1><p><img src="'+l+'" alt="Zipkin"><strong>Official website: <a href="https://zipkin.io" target="_blank" rel="noreferrer">Zipkin</a></strong></p><p>See it in action and try out! You will need docker and docker-compose installed at your machine. At the <a href="https://github.com/sebastianwessel/purista" target="_blank" rel="noreferrer">PURISTA repository</a> in <code>examples/fullexample</code> you will find a running example:</p><p>Start the required docker containers:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run zipkin:up</span></span></code></pre></div>',5),d=t('<p>Start the example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run zipkin:start</span></span></code></pre></div>',2),_=t('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run zipkin:down</span></span></code></pre></div>',1);function k(m,u,g,b,y,T){const a=p("ExternalLink");return r(),o("div",null,[h,i("p",null,[e("Open the Zipkin in your browser: "),s(a,{href:"http://localhost:9411"}),e(".")]),d,i("p",null,[e("To generate some traces, go to the OpenAPI UI at "),s(a,{href:"http://localhost:8080"}),e(" and call some commands. To stop and cleanup and stop all docker containers:")]),_])}const v=n(c,[["render",k]]);export{C as __pageData,v as default};
