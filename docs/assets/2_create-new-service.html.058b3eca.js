import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as i,c as l,b as e,e as a,a as n,d as s}from"./app.3f3b1b0c.js";const r={},u=n(`<h1 id="create-a-new-service" tabindex="-1"><a class="header-anchor" href="#create-a-new-service" aria-hidden="true">#</a> Create a new service</h1><p>A service is a logical group of functions and this where the domain driven aspect comes in.<br> In our example we will use the classic example - Users.</p><p>We want to have the domain <em>User</em> and the following functionality:</p><ul><li>sign up a new user</li><li>send a welcome email to user</li></ul><h2 id="setup-a-new-service" tabindex="-1"><a class="header-anchor" href="#setup-a-new-service" aria-hidden="true">#</a> Setup a new service</h2><p>First we need to create a new service.<br> All we need to do is to create a new class which extends the <code>Service</code> class.</p><p>Create a folder <code>src/service/user</code> and inside this folder create a file <code>UserService.ts</code> with following content:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Service<span class="token punctuation">,</span> ServiceInfoType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> userServiceInfo<span class="token operator">:</span> ServiceInfoType <span class="token operator">=</span> <span class="token punctuation">{</span>
  serviceName<span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>
  serviceVersion<span class="token operator">:</span> <span class="token string">&#39;1.0.0&#39;</span><span class="token punctuation">,</span>
  serviceDescription<span class="token operator">:</span> <span class="token string">&#39;service which handles all user related information&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add a file <code>index.ts</code> in <code>src/service/user</code> and export our user service class.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./UserService.ts&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now we are ready to use our Service <em>User</em> in our <code>src/index.ts</code>.<br> Extend the file as shown below:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token comment">// add imports</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> UserService<span class="token punctuation">,</span> userServiceInfo<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./service/user&#39;</span>


  <span class="token comment">// at the end of function main below await httpServerService.start()</span>

  <span class="token comment">// create the user service </span>
  <span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span>baseLogger<span class="token punctuation">,</span> userServiceInfo<span class="token punctuation">,</span> eventBridge<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// start the user service</span>
  <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Our domain service <em>User</em> is now created, initialized and started. It has no functionality yet, so let&#39;s add some logic.</p><h2 id="create-a-command-function" tabindex="-1"><a class="header-anchor" href="#create-a-command-function" aria-hidden="true">#</a> Create a command function</h2><p>Now we want to be able to sign up new users, so we will create a function for it.</p><p>Create a new subfolder <code>src/service/user/commands</code> and create files <code>index.ts</code>, <code>schema.ts</code> and <code>signUp.ts</code></p>`,16),d=s("First let's define the shape of our data."),k=e("br",null,null,-1),v=s(" Todo so, we will use awesome "),m={href:"https://github.com/colinhacks/zod",target:"_blank",rel:"noopener noreferrer"},h=s("zod library"),y=s(" which will provide use schema validation, typescript types and with some plugin openapi (swagger) definition from one single definition."),b=n(`<p>Add the needed dependencies to our project:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save zod @anatine/zod-openapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="define-schema-and-type" tabindex="-1"><a class="header-anchor" href="#define-schema-and-type" aria-hidden="true">#</a> Define schema and type</h3><p>Now we can start to create a schema for input payload, parameters and output payload.</p><p>Add following content into <code>src/service/user/commands/schema.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> extendApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@anatine/zod-openapi&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> z <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zod&#39;</span>

<span class="token comment">// define the input parameters</span>
<span class="token comment">// parameters are given as object (key-value)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> inputParameterSchema <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// define the input payload</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> inputPayloadSchema <span class="token operator">=</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>
  z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    email<span class="token operator">:</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>
      z
        <span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> email<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        example<span class="token operator">:</span> <span class="token string">&#39;newuser@example.com&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;the users email address&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      example<span class="token operator">:</span> <span class="token string">&#39;the_super_secret_user_password&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;the user password&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// define the output payload</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> outputPayloadSchema <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  uuid<span class="token operator">:</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> example<span class="token operator">:</span> <span class="token string">&#39;e118e649-09c4-4d00-917b-3a0a940e1d45&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;the users uuid&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">InputPayloadType</span> <span class="token operator">=</span> z<span class="token punctuation">.</span>infer<span class="token operator">&lt;</span><span class="token keyword">typeof</span> inputPayloadSchema<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">InputParameterType</span> <span class="token operator">=</span> z<span class="token punctuation">.</span>infer<span class="token operator">&lt;</span><span class="token keyword">typeof</span> inputParameterSchema<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">OutputPayloadType</span> <span class="token operator">=</span> z<span class="token punctuation">.</span>infer<span class="token operator">&lt;</span><span class="token keyword">typeof</span> outputPayloadSchema<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see we define the shape of our data.<br> We also add some additional metadata like <code>title</code> and <code>example</code>. This will be used to generate the openapi definition for our function as we want to expose this function as rest api endpoint.</p><h3 id="implement-logic" tabindex="-1"><a class="header-anchor" href="#implement-logic" aria-hidden="true">#</a> Implement logic</h3><p>Now we&#39;re ready to implement the function in <code>signUp.ts</code>.<br> Add following content:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> randomUUID <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;crypto&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CommandFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> InputParameterType<span class="token punctuation">,</span> InputPayloadType<span class="token punctuation">,</span> OutputPayloadType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> signUp<span class="token operator">:</span> CommandFunction<span class="token operator">&lt;</span>UserService<span class="token punctuation">,</span> InputPayloadType<span class="token punctuation">,</span> InputParameterType<span class="token punctuation">,</span> OutputPayloadType<span class="token operator">&gt;</span> <span class="token operator">=</span> 
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>payload<span class="token punctuation">,</span> _parameter<span class="token punctuation">,</span> _message<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sign up new user&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

    <span class="token keyword">const</span> uuid <span class="token operator">=</span> <span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      uuid
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s a simple function where we log the input and return a response object.<br> But you can see some basic features:</p><p>Our function is a async function, which allows us to use async-await within our code.<br> The types generated from schema are used and your linter/typescript will complain on missmatches.<br> You have a <code>this</code> scope, which is you domain service class <code>User</code>.<br> As this service class is extending the base <code>Service</code> class, you will have some more usefull functions, which we will cover later on.</p>`,12),w=n(`<p><em>You can&#39;t use arrow function to create a new service function, because they don&#39;t allow the <code>this</code> scope!</em></p><p>Because we have access to our <code>User</code> domain class instance, we can extend this class like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> users<span class="token operator">:</span><span class="token punctuation">{</span> uuid<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> password<span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and change our <code>signUp.ts</code> to:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> randomUUID <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;crypto&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CommandFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> InputParameterType<span class="token punctuation">,</span> InputPayloadType<span class="token punctuation">,</span> OutputPayloadType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> signUp<span class="token operator">:</span> CommandFunction<span class="token operator">&lt;</span>UserService<span class="token punctuation">,</span> InputPayloadType<span class="token punctuation">,</span> InputParameterType<span class="token punctuation">,</span> OutputPayloadType<span class="token operator">&gt;</span> <span class="token operator">=</span> 
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>payload<span class="token punctuation">,</span> _parameter<span class="token punctuation">,</span> _message<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sign up new user&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

    <span class="token keyword">const</span> uuid <span class="token operator">=</span> <span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      uuid<span class="token punctuation">,</span>
      <span class="token operator">...</span>payload
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      uuid
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),g=n(`<p>In real world, holding states in the service class is a bad approach and should be avoided.<br> Such stuff is hard to handle and to scale. Try to keep things as stateless as possible.</p><p>So, you might ask why a service class at all?</p><p>There are use cases, where it makes sens to have it - if not, than it&#39;s an empty class which doesn&#39;t hurt.</p><p>Use cases are something like simply holding some configurations, which is needed by service functions.<br> Or you might want to have a service which holds some connection to external services, databases and so on.</p><p>But please avoid to hold states in service classes, but real logic into service classes and so on.<br> It will hit you hard, when you try to scale your system, during tests and so on.</p><h3 id="add-the-function-to-service" tabindex="-1"><a class="header-anchor" href="#add-the-function-to-service" aria-hidden="true">#</a> Add the function to service</h3><p>Now it&#39;s time to let our <code>User</code> service know that he has some function <code>signUp</code>.<br> First of all we will create a function definition in our <code>src/service/user/commands/index.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FunctionDefinitionBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> inputParameterSchema<span class="token punctuation">,</span> inputPayloadSchema<span class="token punctuation">,</span> outputPayloadSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signUp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./signUp&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">FunctionDefinitionBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;signUp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sign up a new unknown user&#39;</span><span class="token punctuation">,</span> signUp<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addInputSchema</span><span class="token punctuation">(</span>inputPayloadSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addParameterSchema</span><span class="token punctuation">(</span>inputParameterSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addOutputSchema</span><span class="token punctuation">(</span>outputPayloadSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">exposeAsHttpEndpoint</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/sign-up&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This code should be self explaining.<br> We say:</p><p><em>There is a new function <code>signUp</code> with input schema, parameter schema, output schema which should be exposed as POST endpoint on <code>/sign-up</code> path.</em></p><p>Now we should add the definition to our <code>User</code> service in our <code>src/index.ts</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  <span class="token comment">// add imports</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> signUp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./service/user&#39;</span>


  <span class="token comment">// add to function array</span>
  <span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span>baseLogger<span class="token punctuation">,</span> userServiceInfo<span class="token punctuation">,</span> eventBridge<span class="token punctuation">,</span> <span class="token punctuation">[</span> signUp<span class="token punctuation">.</span><span class="token function">getDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you now start the application with <code>npm start</code> you should have a POST endpoint <code>https://localhost:8080/api/v1/sign-up</code> which should trigger our function.</p><p>There you can see we expose our function versioned by the service version.<br> This means we can also have same domain service running with different version.</p><p>If you have for example breaking api changes in a new version of our <code>User</code> service, than you would create a new Service (or copy the old one an make your changes) and set service version to a higher version.</p><p>Try to open <code>https://localhost:8080/api</code> in your browser. You should see the openApi-UI with your new endpoint.</p><h2 id="add-a-subscription" tabindex="-1"><a class="header-anchor" href="#add-a-subscription" aria-hidden="true">#</a> Add a subscription</h2>`,17);function f(x,S){const o=p("ExternalLinkIcon"),t=p("Badge");return i(),l("div",null,[u,e("p",null,[d,k,v,e("a",m,[h,a(o)]),y]),b,a(t,{text:"Be aware",type:"warning"}),w,a(t,{text:"Be aware",type:"warning"}),g])}var I=c(r,[["render",f],["__file","2_create-new-service.html.vue"]]);export{I as default};