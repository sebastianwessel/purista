import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,b as s,d as n,e,w as o,a}from"./app-cbf1ff6b.js";const u="/graphic/add_command.png",m="/graphic/command_builder.svg",k={},h=a('<p><img src="'+u+`" alt="Add command with cli"></p><p>A command is a single function, which will be called (invoked) by someone with the expectation to get a result back.</p><h2 id="create-the-files" tabindex="-1"><a class="header-anchor" href="#create-the-files" aria-hidden="true">#</a> Create the files</h2><p>Commands can be added to services. The most sight-forward way for adding a command is the usage of the PURISTA CLI.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>purista <span class="token function">add</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The CLI will guide you through all steps and will create all files for you.<br> In the first step, you will be asked for the name of the new command.<br> We will start with <em>signUp</em>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? What is the name of the new <span class="token builtin class-name">command</span> sign up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As you can see, it is possible to enter the name of the command in a very natural way.<br> The CLI tool will handle the naming conventions for you.<br> Command names will be camel-case.</p><div class="hint-container tip"><p class="hint-container-title">Try to use a command name, which is:</p><ul><li>global unique (a command in different service versions should have the same name)</li><li>short, but speaking &amp; understandable</li><li>use simple present, like <code>addNewFeature</code> or <code>getUser</code></li><li>try to standard prefixes, like <code>createBankAccount</code> or <code>updateUserProfile</code></li></ul></div><p>After you have confirmed your input by pressing the enter key, you will be asked for a short description of the command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? What is the matter of <span class="token builtin class-name">command</span> <span class="token string">&quot;sign up&quot;</span> registers a new user at our product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here, you should enter some short, general description, which will be used for some human-facing documentation.<br> So, please provide here something like: <em>registers a new user at our product</em>.</p><p>The following step is a bit more interesting, as you will be asked for the response event name.<br> A response to a command can be marked as an event, which can be subscribed to.<br> You can leave the field blank and simply press enter if you do not want to add an event name.</p><p>For example, we want to add an event name.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? Name of response event newUserRegistered
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The CLI will not handle any naming conventions here. So you are free to choose.<br> The event will be automatically added as a new enum entry in <code>src/service/ServiceEvent.enum.ts</code>. This new enum entry will be used in the generated source code files.</p><div class="hint-container tip"><p class="hint-container-title">Try use an event name, which is:</p><ul><li>global unique (a command in different service versions should have the same event name)</li><li>short, but speaking &amp; understandable</li><li>should not contain a version in the name</li><li>try to describe what happened, when the command execution was successfully</li><li>use simple past, like <code>newFeatureAdded</code> or <code>userDeleted</code></li></ul></div><p>In the next step, you will see a service selection.<br> Use the arrow keys to select the service (and version), on which the new command should be registered.<br> In our example, choose <em>User</em> .</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? <span class="token keyword">select</span> a <span class="token function">service</span> user <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Confirm your choice by pressing the enter key.</p><p>Now, the files will be created, the event name will be added as a new enum entry and the command will be added to the command list of the service.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>✔  -<span class="token operator">&gt;</span> checking current setup
✔  ++ /src/service/user/v1/command/signUp/index.ts
✔  ++ /src/service/user/v1/command/signUp/schema.ts
✔  ++ /src/service/user/v1/command/signUp/types.ts
✔  ++ /src/service/user/v1/command/signUp/signUp.test.ts
✔  ++ /src/service/user/v1/command/signUp/signUpCommandBuilder.ts
✔  _+ /src/service/user/v1/index.ts
⠋ try to update existing files - pls be patient<span class="token operator">!</span>
👷🏗️ -<span class="token operator">&gt;</span> ensure new enum entry
⠙ 👍  -<span class="token operator">&gt;</span> event <span class="token string">&quot;newUserRegistered&quot;</span> added to enum as ServiceEvent.NewUserRegistered
👷🏗️ -<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> event name from enum <span class="token keyword">in</span> <span class="token builtin class-name">command</span> builder
👍  -<span class="token operator">&gt;</span> updated event to use enum <span class="token keyword">in</span> <span class="token builtin class-name">command</span> builder
⠹ 👷🏗️ -<span class="token operator">&gt;</span> try to <span class="token function">add</span> definition to builder
👍  -<span class="token operator">&gt;</span> definition added to <span class="token function">service</span> builder
⠸ 👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/command/signUp/index.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/command/signUp/schema.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/command/signUp/types.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/command/signUp/signUp.test.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/command/signUp/signUpCommandBuilder.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/userV1Service.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/user/v1/index.ts
👷🏗️ -<span class="token operator">&gt;</span> lint  src/service/ServiceEvent.enum.ts
⠼ 👍  -<span class="token operator">&gt;</span> <span class="token keyword">done</span> linting
✔  -<span class="token operator">&gt;</span> files updated
⠋ 

🎉 The <span class="token builtin class-name">command</span> <span class="token string">&quot;sign up&quot;</span> <span class="token keyword">in</span> <span class="token function">service</span> <span class="token string">&quot;user&quot;</span> version1 is created 🎉


start adding your business logic here:
./src/service/user/v1/command/signUp/signUpCommandBuilder.ts

✔  -<span class="token operator">&gt;</span> 📖 Learn <span class="token function">more</span> about PURISTA at https://purista.dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, in the output above, the CLI will print a direct link to the command builder file, where you can start adding your business logic.</p><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><p>A folder for the new command is created - in our example it is <code>src/service/user/v1/command/signUp</code>.<br> Here, you can find, all files relating to this single command function.</p><h3 id="command-builder-file" tabindex="-1"><a class="header-anchor" href="#command-builder-file" aria-hidden="true">#</a> Command builder file</h3><p>The main file for a command is the command builder file - <code>signUpCommandBuilder.ts</code> in our example.<br> As you can see, the CLI tool already added some configuration properties - the ones you normally always have for a command.</p><p>The implementation of the business logic should be done in this file.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ServiceEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../ServiceEvent.enum&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> userV1ServiceBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../userV1ServiceBuilder&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  userV1SignUpInputParameterSchema<span class="token punctuation">,</span>
  userV1SignUpInputPayloadSchema<span class="token punctuation">,</span>
  userV1SignUpOutputPayloadSchema<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> signUpCommandBuilder <span class="token operator">=</span> userV1ServiceBuilder
  <span class="token comment">// command name and description</span>
  <span class="token punctuation">.</span><span class="token function">getCommandBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;signUp&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;registers a new user at our product&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// adding of the response event name</span>
  <span class="token punctuation">.</span><span class="token function">setSuccessEventName</span><span class="token punctuation">(</span>ServiceEvent<span class="token punctuation">.</span>NewUserRegistered<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addPayloadSchema</span><span class="token punctuation">(</span>userV1SignUpInputPayloadSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addParameterSchema</span><span class="token punctuation">(</span>userV1SignUpInputParameterSchema<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addOutputSchema</span><span class="token punctuation">(</span>userV1SignUpOutputPayloadSchema<span class="token punctuation">)</span>
  <span class="token comment">// adding the implementation of the command</span>
  <span class="token punctuation">.</span><span class="token function">setCommandFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>_context<span class="token punctuation">,</span> _payload<span class="token punctuation">,</span> _parameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your business logic here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),v={class:"hint-container info"},b=s("p",{class:"hint-container-title"},"More on command builder usage:",-1),g=s("li",null,[n("chapter: "),s("em",null,"4. Exposing")],-1),f=a(`<h3 id="schema-file" tabindex="-1"><a class="header-anchor" href="#schema-file" aria-hidden="true">#</a> Schema file</h3><p>The schema file contains the schemas for input and output validation.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> extendApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> z <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zod&#39;</span>

<span class="token comment">// define the input parameters</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> userV1SignUpInputParameterSchema <span class="token operator">=</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;sign up input parameter schema&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// define the input payload</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> userV1SignUpInputPayloadSchema <span class="token operator">=</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;sign up input payload schema&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// define the output payload</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> userV1SignUpOutputPayloadSchema <span class="token operator">=</span> <span class="token function">extendApi</span><span class="token punctuation">(</span>z<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;sign up output payload schema&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={href:"https://github.com/anatine/zod-plugins/blob/main/packages/zod-openapi/README.md",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"@anatine/zod-openapi",-1),x=s("br",null,null,-1),_=s("br",null,null,-1),U=s("br",null,null,-1),S={href:"https://zod.dev",target:"_blank",rel:"noopener noreferrer"},I=a(`<h3 id="type-file" tabindex="-1"><a class="header-anchor" href="#type-file" aria-hidden="true">#</a> Type file</h3><p>There is also a file <code>types.ts</code>, which contains types, that are generated out of the input and output schemas defined in <code>schema.ts</code>.<br> The types are not used by PURISTA or one of the builders. The types can be used by the developers.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> z <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zod&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  userV1SignUpInputParameterSchema<span class="token punctuation">,</span>
  userV1SignUpInputPayloadSchema<span class="token punctuation">,</span>
  userV1SignUpOutputPayloadSchema<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schema&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UserV1SignUpInputParameter</span> <span class="token operator">=</span> z<span class="token punctuation">.</span>input<span class="token operator">&lt;</span><span class="token keyword">typeof</span> userV1SignUpInputParameterSchema<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UserV1SignUpInputPayload</span> <span class="token operator">=</span> z<span class="token punctuation">.</span>input<span class="token operator">&lt;</span><span class="token keyword">typeof</span> userV1SignUpInputPayloadSchema<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UserV1SignUpOutputPayload</span> <span class="token operator">=</span> z<span class="token punctuation">.</span>output<span class="token operator">&lt;</span><span class="token keyword">typeof</span> userV1SignUpOutputPayloadSchema<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-file" tabindex="-1"><a class="header-anchor" href="#test-file" aria-hidden="true">#</a> Test file</h3><p>The file with the <code>.test.ts</code> extension, is the unit test for the command implementation.<br> It contains a real test, which then can be extended and aligned to your actual implementation.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCommandContextMock<span class="token punctuation">,</span> getEventBridgeMock<span class="token punctuation">,</span> getLoggerMock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@purista/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSandbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;sinon&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> userV1Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../userV1Service&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signUpCommandBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./signUpCommandBuilder&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserV1SignUpInputParameter<span class="token punctuation">,</span> UserV1SignUpInputPayload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;service User version 1 - command signUp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sandbox <span class="token operator">=</span> <span class="token function">createSandbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    sandbox <span class="token operator">=</span> <span class="token function">createSandbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    sandbox<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;does not throw&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> service <span class="token operator">=</span> userV1Service<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token function">getEventBridgeMock</span><span class="token punctuation">(</span>sandbox<span class="token punctuation">)</span><span class="token punctuation">.</span>mock<span class="token punctuation">,</span> <span class="token punctuation">{</span> logger<span class="token operator">:</span> <span class="token function">getLoggerMock</span><span class="token punctuation">(</span>sandbox<span class="token punctuation">)</span><span class="token punctuation">.</span>mock <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> signUp <span class="token operator">=</span> signUpCommandBuilder<span class="token punctuation">.</span><span class="token function">getCommandFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span>

    <span class="token keyword">const</span> payload<span class="token operator">:</span> UserV1SignUpInputPayload <span class="token operator">=</span> <span class="token keyword">undefined</span>

    <span class="token keyword">const</span> parameter<span class="token operator">:</span> UserV1SignUpInputParameter <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">getCommandContextMock</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> parameter<span class="token punctuation">,</span> sandbox<span class="token punctuation">)</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">signUp</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>mock<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> parameter<span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),T=s("h2",{id:"implement-the-command",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#implement-the-command","aria-hidden":"true"},"#"),n(" Implement the command")],-1),C=s("p",null,[n("In the command builder file, you can implement the command function."),s("br"),n(" A command function has the service instance as "),s("code",null,"this"),n(" scope assigned. Because of this, you can't use arrow functions.")],-1),P=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">setCommandFunction</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> parameter<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your business logic here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">setCommandFunction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> parameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your business logic here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>this</code> scope allows access to methods and properties of the service instance.<br> You can access:</p><ul><li>the service config <code>this.config</code></li><li>the service information name, version and description of service with <code>this.info</code></li></ul><p><strong>It is not recommended to directly access the service instance for any other purpose.</strong>.<br> Use the function context instead, to access logger, stores and other functionality.</p><p>As types are automatically generated, depending on given schemas and settings, a logical flow for adding settings is adviced.<br> You should always start with the command function input and output schemas, follwed by the transform schemas.</p><p><img src="`+m+'" alt="Command builder defintion and execution flow"></p><h3 id="command-function-context" tabindex="-1"><a class="header-anchor" href="#command-function-context" aria-hidden="true">#</a> Command function context</h3><p>The function context provides a unified interface for</p><ul><li>the logger</li><li>the original command message</li><li>the config store</li><li>the secret store</li><li>the state store</li><li>a method <code>emit</code>, which allows emitting of custom events to the event bridge</li><li>a method <code>invoke</code>, which allows invoking of other commands</li></ul>',9),A={class:"hint-container tip"},B=s("p",{class:"hint-container-title"},"API documentation",-1),E=a('<h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h3><p>The payload contains the payload for this command. It is validated against the input payload schema, before the command function is called. They typescript type is automatically generated from the input schema.</p><h3 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter" aria-hidden="true">#</a> Parameter</h3><p>In addition to the payload, a command function can have parameters. This is especially usefull, when the command is exposed as http or GraphQL endpoint.<br> Url parameter, query parameter or GraphQL query inputs can be mapped to parameters. The parameters will be validated against the parameter schema, before the command function is called.</p><h3 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return value</h3><p>A command function is expected to return a value. The returned value is validated against the output schema.<br> The result typescript type of the command function is generated from the output schema.</p><p>It is possible to not return a value. In this case the response message, which is always sent back, will contain a payload with value <code>undefined</code>.</p><h2 id="event-bridge-advice" tabindex="-1"><a class="header-anchor" href="#event-bridge-advice" aria-hidden="true">#</a> Event bridge advice</h2><p>The PURISTA builder for commands and subscriptions allowing the developer to give the underlaying event bridge advices.<br> Advices can help to build more robust systems and to configure the system for special needs.</p><p>If the underlaying message broker does not support a feature, required for an advice, the advice is ignored and has no effect.</p><h3 id="adviceautoacknowledgemessage" tabindex="-1"><a class="header-anchor" href="#adviceautoacknowledgemessage" aria-hidden="true">#</a> adviceAutoacknowledgeMessage</h3><p>Many message brokers have the mesage acknowledge pattern. If a message is sent from the message broker and received by the consumer, the message broker expects to get a acknowledgement from the consumer.<br> Because of this, there are two major questions here:</p><p>How to handle a message with negative or without acknowledgment?<br> This will mostly configured on the message broker itself.<br> They will re-send the message or move the message to a dead letter queue.<br> The consumer should not take care of this.</p><p>When should the consumer return the acknowledgment - on receiving the message or after processing the message?<br> This is on consumer side and the message broker can not take care of this.<br> The <code>adviceAutoacknowledgeMessage</code> method in the builders, is advising the PURISTA even bridge to send the acknowledgement as soon as the message receives. When the method is called with parameter <code>false</code>, the acknowledgement is sent, after the processing the message. In case the processing is throwing an <code>UnhandledError</code>, a negative acknowledgement is sent.</p><div class="hint-container info"><p class="hint-container-title">Default settings:</p><p>Enabled for commands by default.<br> Disabled for subscriptions by default.</p></div>',15);function q(z,L){const t=i("RouterLink"),p=i("ExternalLinkIcon"),c=i("Badge");return r(),d("div",null,[h,s("div",v,[b,s("ul",null,[s("li",null,[n("API documentation: "),e(t,{to:"/api/classes/purista_core.CommandDefinitionBuilder.html#methods"},{default:o(()=>[n("CommandDefinitionBuilder - Methods")]),_:1})]),g])]),f,s("p",null,[n("The core package contains some helper here, which are based on the package "),s("a",y,[w,e(p)]),n("."),x,n(" This gives the opportunity, to enrich the schema with more information and details, which than can be used, to improve a generated OpenAPI/AsyncAPI documentation."),_,n(" Because of this, you can add human understandable titles, descriptions, examples and so on."),U,n(" It is not required, but recommended, to use this package. You can also use plain "),s("a",S,[n("zod"),e(p)]),n(".")]),I,s("p",null,[n("More about unit testing in the next chapter "),e(t,{to:"/handbook/2._start-building/2.2_command/2_test-a-command.html"},{default:o(()=>[n("Test a command")]),_:1})]),T,C,e(c,{text:"👎 does not work",type:"danger"}),P,e(c,{text:"👍 works",type:"tip"}),V,s("div",A,[B,s("p",null,[n("The "),e(t,{to:"/api/modules/purista_core.html#commandfunctioncontext"},{default:o(()=>[n("CommandFunctionContext")]),_:1}),n(" is a union type of "),e(t,{to:"/api/modules/purista_core.html#contextbase"},{default:o(()=>[n("ContextBase")]),_:1}),n(" and "),e(t,{to:"/api/modules/purista_core.html#commandfunctioncontextenhancements"},{default:o(()=>[n("CommandFunctionContextEnhancements")]),_:1})])]),E])}const N=l(k,[["render",q],["__file","1_add-command-to-service.html.vue"]]);export{N as default};