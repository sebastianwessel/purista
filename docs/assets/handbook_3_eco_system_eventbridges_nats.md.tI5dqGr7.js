import{_ as s,c as i,o as a,V as e,ae as n}from"./chunks/framework.ITQiifkM.js";const y=JSON.parse('{"title":"NATS Event Bridge","description":"Use the NATS event bridge of PURISTA","frontmatter":{"title":"NATS Event Bridge","description":"Use the NATS event bridge of PURISTA","order":301050},"headers":[],"relativePath":"handbook/3_eco_system/eventbridges/nats.md","filePath":"handbook/3_eco_system/eventbridges/nats.md","lastUpdated":1706444636000}'),t={name:"handbook/3_eco_system/eventbridges/nats.md"},l=e('<p><img src="'+n+`" alt="NATS event bridge"></p><h1 id="nats-event-bridge" tabindex="-1">NATS Event Bridge <a class="header-anchor" href="#nats-event-bridge" aria-label="Permalink to &quot;NATS Event Bridge&quot;">​</a></h1><p>The <a href="https://nats.io/" target="_blank" rel="noreferrer">NATS message broker</a> is a fast and scalable message broker.</p><p>PURISTA provides the <code>@purista/natsbridge</code></p><div class="tip custom-block"><p class="custom-block-title">Pros</p><ul><li>allows scaling</li><li>fault tollerant</li><li>can be used with NATS State store (<code>@purista/nats-state-store</code>)</li><li>can be used with NATS Config store (<code>@purista/nats-config-store</code>)</li></ul></div><div class="warning custom-block"><p class="custom-block-title">Cons</p><ul><li>needs managing of an NATS broker</li><li>no persistance of messages available</li><li>hard to handle dead letters</li></ul></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The NATS event bridge uses the unified configuration schema as all event bridges.</p><div class="info custom-block"><p class="custom-block-title">API documentation</p><ul><li><a href="./../../../api/modules/purista_core.html#eventbridgeconfig">General event bridge config</a></li><li><a href="./../../../api/modules/purista_natsbridge.html#natsbridgeconfig">NATS bridge config</a></li></ul></div><h2 id="usage-example" tabindex="-1">Usage example <a class="header-anchor" href="#usage-example" aria-label="Permalink to &quot;Usage example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { NatsBridge } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@purista/natsbridge&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eventBridge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NatsBridge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eventBridge.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="topic-names" tabindex="-1">Topic names <a class="header-anchor" href="#topic-names" aria-label="Permalink to &quot;Topic names&quot;">​</a></h2><p>The NATS protocol relays on topics for message publishing/subscribe.</p><p>PURISTA is using the following schema for topics:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> topicPrefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.topicPrefix</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> empty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.emptyTopicPartString</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> join(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.config.topicPrefix,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.messageType),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.principalId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.tenantId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.sender.instanceId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.sender.serviceName),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.sender.serviceVersion),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.sender.serviceTarget),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message.eventName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).receiver?.instanceId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).receiver?.serviceName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).receiver?.serviceVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  convertToSnakeCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).receiver?.serviceTarget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empty),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>This allows to have subscriptions for very specific messages. The NATS event bridge does not use the available request-response pattern of NATS to be able to use the unified topic schema. Otherwise, there would be the need to duplicate command response to be available for subscriptions.</p><h2 id="hints" tabindex="-1">Hints <a class="header-anchor" href="#hints" aria-label="Permalink to &quot;Hints&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Ensure settings across instances</p><p>Remember to ensure, prefixes, and so on are the same on every event bridge instance. Otherwise, you might get some unexpected behaviors.</p></div><div class="tip custom-block"><p class="custom-block-title">OpenTelemetry</p><p>PURISTA is using the NATS header feature to add the OpenTelemetry information to each message, as recommended: <a href="https://w3c.github.io/trace-context-mqtt/" target="_blank" rel="noreferrer">https://w3c.github.io/trace-context-mqtt/</a>.</p></div>`,19),h=[l];function p(r,k,o,d,c,g){return a(),i("div",null,h)}const m=s(t,[["render",p]]);export{y as __pageData,m as default};
