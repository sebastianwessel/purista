import{_ as s,c as i,o as a,V as e}from"./chunks/framework.ITQiifkM.js";const g=JSON.parse('{"title":"Error Handling","description":"Error handling in typescript backend framework PURISTA","frontmatter":{"title":"Error Handling","description":"Error handling in typescript backend framework PURISTA","order":204020},"headers":[],"relativePath":"handbook/2_building_business-logic/error-handling.md","filePath":"handbook/2_building_business-logic/error-handling.md","lastUpdated":1706444636000}'),n={name:"handbook/2_building_business-logic/error-handling.md"},t=e(`<h1 id="error-handling" tabindex="-1">Error handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error handling&quot;">​</a></h1><p>Error handling is one of the essentials of software development. But it&#39;s not easy - especially when your complexity is growing.</p><p>By implementing only happy path, without proper error handling, maintenance will quickly become a nightmare.</p><p>PURISTA is build with error handling in mind and helps developers to build understandable, predictable and secure applications.</p><p>Error handling is done in different layers of your application, and errors are also unified for better error handling.</p><p>PURISTA has deeply integrated support for <a href="https://opentelemetry.io/" target="_blank" rel="noreferrer">OpenTelemetry</a>. This provides an industrial standard way to keep track of errors and issues. See <a href="./logging.html">Logging</a> and <a href="./../4_open_telemetry/">Tracing</a> section.</p><p>Errors are automatically added to the OpeneTelemetry trace.</p><p>There are two error types provided by PURISTA - <code>HandledError</code> and <code>UnhandledError</code>. Both types are logged automatically as soon as they get thrown.</p><p>Using these both error types ensures, that we have a defined error structure.</p><h2 id="handlederror" tabindex="-1">HandledError <a class="header-anchor" href="#handlederror" aria-label="Permalink to &quot;HandledError&quot;">​</a></h2><p>Handled errors are thrown by intention. These errors are kind of &quot;Ok, I know there is something wrong, and I give back a proper response&quot;.</p><p>Use cases are something like an API call requests an entity by ID, but no entity for a given ID exist, or the requester does not have proper permissions to access the entity. Also, every failing input validation in PURISTA is a <code>HandledError</code>, as we know what happens and how to react.</p><p>Example:</p><p>An API call is invoking a service function like this:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dbRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findOne</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandledError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StatusCode.NotFound, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entity not found&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>This will give the client who has called the API endpoint a response with HTTP status code <strong>404 NOT FOUND</strong> and with a payload like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;entity not found&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>You can provide additional data to that error response:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findOne</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandledError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StatusCode.NotFound, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entity not found&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { id })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>which results in:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;entity not found&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Be aware:</p><p>A <code>HandledError</code> is only logged in <code>debug</code> log level, as it is expected, that this kind of error, is part of the regular business logic, which does not need to get persisted in logs or is used for alerting.</p></div><h2 id="unhandlederror" tabindex="-1">UnhandledError <a class="header-anchor" href="#unhandlederror" aria-label="Permalink to &quot;UnhandledError&quot;">​</a></h2><p>Unhandled Errors are more generic errors, where it is not clear, what exactly happened, or how we should handle it.</p><p>Let&#39;s take an example of a POST endpoint for creating a new Entity.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dbRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(payload)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isConstraintViolation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // give the client a propper answer, that he tries to insert a record, but a record with same id already exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandledError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StatusCode.Conflict, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entity with same id already exist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UnhandledError.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err, StatusCode.InternalServerError)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>As you can see, the error is handled in the sense of <em>&quot;Ok there is something wrong, and I log this error, and I prevent the system to crash&quot;</em>, but from client side it is more like <em>&quot;Ups, something wrong - this should not happen - try again later&quot;</em></p><h2 id="general-error-handling" tabindex="-1">General error handling <a class="header-anchor" href="#general-error-handling" aria-label="Permalink to &quot;General error handling&quot;">​</a></h2><p>It is totally fine, if you reduce your error handling in service functions and subscriptions to HandledErrors only. It is JavaScript/typescript - so just let it throw!</p><p>Each service function, and each subscription itself, is wrapped by a try-catch, which will convert any error other than a instance of HandledError, into a UnhandledError with error code 500. The error will be logged. And an error message is send. So no worries, that your whole system can break.</p><p>You can create subscriptions to track errors, you have the logs, the user gets a proper response, no information will be leaked.</p><p>Because of this, the example from <code>HandledError</code> is totally fine, and we do not need to write more code here. We know that any database issue is handled and returned as <strong>500 INTERNAL SERVER ERROR</strong>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><strong>👎 BAD PRACTICE</strong></p><p>Do not catch and handle only <em>some</em> errors.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(payload)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isConstraintViolation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // give the client a propper answer, that he tries to insert a record,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // but a record with same id already exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandledError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StatusCode.Conflict, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entity with same id already exist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ANY NON-CONSTRAINT-ERROR is swallowed, because it is catched, but not handled</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // if it is some other error you never get informed about it</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // it will not throw and will not be logged</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>👍 GOOD PRACTICE</strong></p><p>Handle the things you can, and throw the rest.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(payload)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isConstraintViolation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // give the client a propper answer, that he tries to insert a record,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // but a record with same id already exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandledError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StatusCode.Conflict, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entity with same id already exist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // use static class method .from() to keep the stack trace!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UnhandledError.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err, StatusCode.InternalServerError)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="validation-errors" tabindex="-1">Validation errors <a class="header-anchor" href="#validation-errors" aria-label="Permalink to &quot;Validation errors&quot;">​</a></h2><p>Each service function has input and output validation enforced by design.</p><p>Data which is not included in the schema is automatically stripped out and not available inside the service function. Same for function outputs - unknown is stripped out to prevent exposing sensitive data to the outside in result payload.</p><h3 id="input-validation" tabindex="-1">Input validation <a class="header-anchor" href="#input-validation" aria-label="Permalink to &quot;Input validation&quot;">​</a></h3><p>If an input validation fails (parameter or payload validation), the validation error is transformed into a HandledError with status <strong>400 BAD REQUEST</strong> and a more specific error detail is available in error response data object. This is ok, because the one who invoked the function, does already know the input data, and we are safe to give some hints, what data is violating the schema.</p><p>PURISTA is passing the <code>issues</code> property if Zod error instances into the <code>data</code> field. See <a href="https://zod.dev/?id=error-handling" target="_blank" rel="noreferrer">Zod - Error handling</a>.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bad request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;invalid_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;expected&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;received&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Expected string, received number&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="output-validation" tabindex="-1">Output validation <a class="header-anchor" href="#output-validation" aria-label="Permalink to &quot;Output validation&quot;">​</a></h3><p>On the other hand, output validation errors are transformed into UnhandledError with status <strong>500 INTERNAL SERVER ERROR</strong> and no additional data is provided within the error response. This way, we can be sure, that we do not accidentally expose data or further information which allows attackers to get more insights of our system.</p><h3 id="errors-in-subscriptions" tabindex="-1">Errors in subscriptions <a class="header-anchor" href="#errors-in-subscriptions" aria-label="Permalink to &quot;Errors in subscriptions&quot;">​</a></h3><p>Subscriptions should implement their own input validation. Because a subscription can receive different message types, depending on the subscription settings, there is currently no way to automate it.</p><p>If a subscription throws some error - other than a <code>HandledError</code>, it is automatically transformed into an UnhandledError and the original error gets logged.</p><h2 id="error-tracking" tabindex="-1">Error tracking <a class="header-anchor" href="#error-tracking" aria-label="Permalink to &quot;Error tracking&quot;">​</a></h2><p>In general, there are three different options available, to track errors in PURISTA.</p><h3 id="open-telemetry-and-logging" tabindex="-1">Open Telemetry and logging <a class="header-anchor" href="#open-telemetry-and-logging" aria-label="Permalink to &quot;Open Telemetry and logging&quot;">​</a></h3><p>The default and recommended way to track errors in a PURISTA based application is, to use the OpeneTelementry possibilities.</p><h3 id="tracking-of-javascript-events" tabindex="-1">Tracking of javascript events <a class="header-anchor" href="#tracking-of-javascript-events" aria-label="Permalink to &quot;Tracking of javascript events&quot;">​</a></h3><p>To allow a more flexible way of tracking, monitoring or alerting, you might want to use some external services like <a href="https://sentry.io/" target="_blank" rel="noreferrer">sentry</a> or you like to programmatically react on errors and issues. For example, automatically open a issue in your ticket system.</p><p>To allow a flexible and decoupled way, a service emits the following events:</p><ul><li><code>handled-subscription-error</code> emitted when a subscription throws a HandledError</li><li><code>handled-command-error</code> emitted when a command throws a HandledError</li><li><code>unhandled-subscription-error</code> emitted when a subscription throws an error other than a HandledError</li><li><code>unhandled-command-error</code> emitted when a command throws an error other than a HandledError</li></ul><p>This means, you can attach your logic like opening a issue in your ticket system, instead of deeply integrate it into your business logic.</p><h3 id="tracking-of-error-messages" tabindex="-1">Tracking of error messages <a class="header-anchor" href="#tracking-of-error-messages" aria-label="Permalink to &quot;Tracking of error messages&quot;">​</a></h3>`,61),r=[t];function l(h,p,o,d,k,E){return a(),i("div",null,r)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
