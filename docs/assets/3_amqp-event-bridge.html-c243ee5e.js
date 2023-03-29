import{_ as l,W as c,X as p,Z as e,$ as n,a0 as a,a1 as i,Y as r,D as o}from"./framework-d89ed822.js";const d={},u=e("h2",{id:"general",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#general","aria-hidden":"true"},"#"),n(" General")],-1),m=e("p",null,"The AMQP protocol and the corresponding brokers are perfectly for PURISTA.",-1),h=e("code",null,"@purista/amqpbridge",-1),b={href:"https://www.rabbitmq.com",target:"_blank",rel:"noopener noreferrer"},v={href:"https://activemq.apache.org/",target:"_blank",rel:"noopener noreferrer"},g=r('<p>By using the AMQP event bridge, the system will scale and load balance any task across all instances.<br> It also allows you, to choose a more flexible way of deployment, as you are now able to split your monolith into small pieces.</p><p>You can:</p><ul><li>spin up multiple monolith instances</li><li>you can split your monolith by services and run multiple service instances (microservice style)</li><li>you can split even more down to single function and subscription level</li><li>you are able to connect other systems via the amqp broker</li></ul><div class="hint-container tip"><p class="hint-container-title">Pros</p><ul><li>allows scaling</li><li>full subscription support</li><li>support of durable queues</li><li>retry mechanism</li><li>dead letter queues</li></ul></div><div class="hint-container danger"><p class="hint-container-title">Cons</p><ul><li>needs managing of an AMQP broker</li></ul></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><p>The AMQP event bridge uses the unified configuration schema as all event bridges.</p>',7),k={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"API documentation",-1),f=r(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>The easiest way to start - simply start a RabbitMQ docker container:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">--hostname</span> my-rabbit <span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add the AMQP bridge to your code:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AmqpBridge<span class="token punctuation">,</span> AmqpBridgeConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/amqpbridge&#39;</span>

<span class="token comment">// create and init our eventbridge</span>

<span class="token keyword">const</span> config<span class="token operator">:</span>AmqpBridgeConfig <span class="token operator">=</span> <span class="token punctuation">{</span> 
    url<span class="token operator">:</span> <span class="token string">&#39;amqp://my-amqp-host.example.com&#39;</span>
  <span class="token punctuation">}</span>

<span class="token keyword">const</span> eventBridge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AmqpBridge</span><span class="token punctuation">(</span><span class="token punctuation">{</span> config <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> eventBridge<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function y(w,q){const s=o("ExternalLinkIcon"),t=o("RouterLink");return c(),p("div",null,[u,m,e("p",null,[n("The package "),h,n(" provides an event bridge for the AMQP protocol. This means you can use "),e("a",b,[n("RabbitMQ"),a(s)]),n(" as message broker. This is the recommended message broker. Also, "),e("a",v,[n("Apache ActiveMQ"),a(s)]),n(" should work.")]),g,e("div",k,[_,e("ul",null,[e("li",null,[a(t,{to:"/api/modules/purista_core.html#eventbridgeconfig"},{default:i(()=>[n("General event bridge config")]),_:1})]),e("li",null,[a(t,{to:"/api/modules/purista_amqpbridge.html#amqpbridgeconfig"},{default:i(()=>[n("AMQP bridge config")]),_:1})])])]),f])}const A=l(d,[["render",y],["__file","3_amqp-event-bridge.html.vue"]]);export{A as default};
