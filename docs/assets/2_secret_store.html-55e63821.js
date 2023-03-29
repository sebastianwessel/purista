import{_ as e,W as o,X as p,Z as n,$ as s,a0 as t,Y as c,D as i}from"./framework-d89ed822.js";const l={},u=n("p",null,[s("The secret store is addressing two things."),n("br"),s(" One focus is, to provide a solution, where the secret is short living, and only available, when there is an actual need for it. Secrets should not be provided via the general service configuration. They should also be persited in some secret way."),n("br"),s(" The second reason for the secret store interface:"),n("br"),s(" It provides the possibility, to use different solutions without vendor specific code implementation, within your business code."),n("br"),s(" The secret store is a simple interface to a key-value-store. Keys and values are strings.")],-1),r=n("h2",{id:"available-secret-stores",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#available-secret-stores","aria-hidden":"true"},"#"),s(" Available secret stores")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"vendor"),n("th",null,"package")])],-1),d={href:"https://aws.amazon.com/secrets-manager",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/sebastianwessel/purista/issues/106",target:"_blank",rel:"noopener noreferrer"},m={href:"https://azure.microsoft.com/en-us/products/key-vault",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/sebastianwessel/purista/issues/107",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cloud.google.com/secret-manager",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/sebastianwessel/purista/issues/108",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.vaultproject.io",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/sebastianwessel/purista/issues/109",target:"_blank",rel:"noopener noreferrer"},w=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>The secret store is provided inside the <code>context</code> of command functions and subscription functions.<br> It can be used like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">setCommandFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// set a config</span>
  <span class="token keyword">await</span> context<span class="token punctuation">.</span>configs<span class="token punctuation">.</span><span class="token function">setSecret</span><span class="token punctuation">(</span><span class="token string">&#39;secret_key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;super_secret_string_only&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> context<span class="token punctuation">.</span>configs<span class="token punctuation">.</span><span class="token function">setSecret</span><span class="token punctuation">(</span><span class="token string">&#39;other_secret&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;confidential&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// get a config</span>
  <span class="token keyword">const</span> myConfig <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span>configs<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token string">&#39;secret_key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;other_secret&#39;</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myConfig<span class="token punctuation">)</span> <span class="token comment">// outputs: { secret_key: &quot;super_secret_string_only&quot;, other_secret: &quot;confidential&quot; }</span>

  <span class="token comment">// remove a config</span>
  <span class="token keyword">await</span> context<span class="token punctuation">.</span>configs<span class="token punctuation">.</span><span class="token function">removeConfig</span><span class="token punctuation">(</span><span class="token string">&#39;port&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Config stores per default:</p><ul><li>enabled getter</li><li>disabled setter</li><li>disabled removal</li></ul><p>You need to explicit enable via config if needed</p></div><h2 id="default-secret-store" tabindex="-1"><a class="header-anchor" href="#default-secret-store" aria-hidden="true">#</a> Default secret store</h2><p>PURISTA comes with a default secret store, which can be used as placeholder or connector to config files and environment variables.<br> In the constructor config, you can add a <code>config</code> property. The property must be from type object.</p><p>Example:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultSecretStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  enableGet<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  enableRemove<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  enableSet<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    mySecret<span class="token operator">:</span> <span class="token string">&#39;secret_value&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token string">&#39;mySecret&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// outputs: secret_value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-secret-store" tabindex="-1"><a class="header-anchor" href="#custom-secret-store" aria-hidden="true">#</a> Custom secret store</h2><p>It is quite simple to build a custom secret store.<br> You can simply extend the <code>SecretStoreBaseClass</code> with type parameter of your custom store config.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SecretStoreBaseClass<span class="token punctuation">,</span> UnhandledError<span class="token punctuation">,</span> StatusCode<span class="token punctuation">,</span> StoreBaseConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">CustomStoreConfig</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CustomStore</span> <span class="token keyword">extends</span> <span class="token class-name">SecretStoreBaseClass<span class="token operator">&lt;</span>CustomStoreConfig<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> client

  <span class="token function">constructor</span><span class="token punctuation">(</span>config<span class="token operator">:</span> StoreBaseConfig<span class="token operator">&lt;</span>CustomStoreConfig<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;CustomStoreName&#39;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> customCLient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>config<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token operator">...</span>secretNames<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>enableGet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnhandledError</span><span class="token punctuation">(</span>StatusCode<span class="token punctuation">.</span>Unauthorized<span class="token punctuation">,</span> <span class="token string">&#39;get secret from store is disabled by config&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> result<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> name <span class="token keyword">of</span> secretNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// your custom logic goes here:</span>
        result<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">error in secret store getting value </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span> err <span class="token punctuation">}</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnhandledError</span><span class="token punctuation">(</span>StatusCode<span class="token punctuation">.</span>InternalServerError<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result

  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">removeSecret</span><span class="token punctuation">(</span>secretName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>enableRemove<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnhandledError</span><span class="token punctuation">(</span>StatusCode<span class="token punctuation">.</span>Unauthorized<span class="token punctuation">,</span> <span class="token string">&#39;remove secret from store is disabled by config&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// your custom logic goes here:</span>
      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span>secretName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">error in secret store removing value </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secretName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span> err <span class="token punctuation">}</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnhandledError</span><span class="token punctuation">(</span>StatusCode<span class="token punctuation">.</span>InternalServerError<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">setSecret</span><span class="token punctuation">(</span>secretName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> secretValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>enableSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnhandledError</span><span class="token punctuation">(</span>StatusCode<span class="token punctuation">.</span>Unauthorized<span class="token punctuation">,</span> <span class="token string">&#39;set secret at store is disabled by config&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// your custom logic goes here:</span>
      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>secretName<span class="token punctuation">,</span> secretValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">error in secret store setting value </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stateName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span> err <span class="token punctuation">}</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnhandledError</span><span class="token punctuation">(</span>StatusCode<span class="token punctuation">.</span>InternalServerError<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function _(S,C){const a=i("ExternalLinkIcon");return o(),p("div",null,[u,r,n("table",null,[k,n("tbody",null,[n("tr",null,[n("td",null,[n("a",d,[s("AWS Secrets Manager"),t(a)])]),n("td",null,[n("a",v,[s("planned"),t(a)])])]),n("tr",null,[n("td",null,[n("a",m,[s("Azure Key Vault"),t(a)])]),n("td",null,[n("a",b,[s("planned"),t(a)])])]),n("tr",null,[n("td",null,[n("a",g,[s("Google Cloud Secret Manager"),t(a)])]),n("td",null,[n("a",h,[s("planned"),t(a)])])]),n("tr",null,[n("td",null,[n("a",y,[s("HashiCorp Vault"),t(a)])]),n("td",null,[n("a",f,[s("planned"),t(a)])])])])]),w])}const E=e(l,[["render",_],["__file","2_secret_store.html.vue"]]);export{E as default};