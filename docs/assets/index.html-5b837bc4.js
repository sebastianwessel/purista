import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as d,b as n,d as e,e as o,w as r,f as s,a as c}from"./app-7e2ebe05.js";const u={},p=c('<h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><p>All notable changes to this project will be documented in this file.</p><h2 id="_1-7-2-2023-06-10" tabindex="-1"><a class="header-anchor" href="#_1-7-2-2023-06-10" aria-hidden="true">#</a> [1.7.2] - 2023-06-10</h2><h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Lint</li><li>Error logging</li><li>Remove cycling dependency</li><li>Remove cycling dependency</li><li>Export test</li><li>TraceId in payload of error responses</li><li>Missing receiver and sender in SubscriptionBuilder getDefinition</li><li>AMQP bridge ack handling #72</li><li>Improve gracefully shutdown of eventbridges</li><li>Esbuild issue</li><li>Redis state store and add integration test</li><li>Issues and improve code and add inline documentation</li><li>Strip and check query parameter</li><li>Generate correlation id only once</li><li>Use loglevel from config</li><li>Typo</li><li>Add types to exports in package.json</li><li>Use correct package in examples</li><li>Use function from core in generated code</li><li>Rebuild packages after version bump to reflect correct version</li><li>Version bump of state-store-redis</li><li>Trace and log command error responses</li><li>Mqtt command handler</li><li>Disable durable for endpoint info subscription</li><li>Setting instance id in event bridge</li><li>Cli init template outdated fixes #128</li><li>Cli init does not contain nats bridge #130</li><li>Core package requires Hono package fixes #129</li><li>Blueprint tsconfig files</li><li>Deps in package.json</li><li>Do not overwrite user config with defaults</li></ul><h3 id="depreciation" tabindex="-1"><a class="header-anchor" href="#depreciation" aria-hidden="true">#</a> Depreciation</h3><ul><li>FunctionDefinitionBuilder in favor of CommandDefinitionBuilder resolve #66</li><li>Set/getFunction in SubscriptionDefinitionBuilder</li><li>GetFunctionContextMock in favor of getCommandContextMock</li></ul><h3 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h3><ul><li>Update documentation</li><li>Update code example</li><li>Update documentation according to breaking changes</li><li>Add blog to website</li><li>Refactor handbook</li><li>Update example</li><li>Update doc structure</li><li>Fix website setting</li><li>Update documentation #97</li><li>Revamp website #97</li><li>Revamp example #96</li><li>Update api documentation</li><li>Update documentation</li><li>Update CHANGELOG</li><li>Update doc</li><li>Add Product hunt upvote</li><li>Update website</li><li>Update website</li><li>Update twitter img</li><li>Add inline code documentation</li><li>Improve doc</li><li>Update dapr doc</li><li>Update typedoc config and update packages</li><li>Add postman collection to Dapr example</li><li>Update block entry</li><li>Update</li><li>Update doc</li><li>Update doc</li><li>Update api documentation</li><li>Update api documentation</li><li>Update documentation</li><li>Update CHANGELOG</li><li>Add quickstart example code</li><li>Update package readme files</li><li>Update nav</li><li>Add nats bridge info</li><li>Update api documentation</li><li>Update documentation</li><li>Update CHANGELOG</li><li>Add version 1.7 blog article</li><li>Fix order of posts in blog</li><li>Update api documentation</li><li>Update documentation</li><li>Update CHANGELOG</li><li>Update outdated docs</li><li>Update api documentation</li><li>Update documentation</li><li>Update CHANGELOG</li></ul><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><ul><li>Implement OpenTelemetry into core resolve #63</li><li>Subscribe to event now supports optional version parameter</li><li>Add purista version to packages</li><li>Add support for sinon sandbox in test helpers</li><li>Simplify init logger - set default instead of required property</li><li>Implement OpenTelemetry into AmqpBridge resolve #63</li><li>Add @purista/cli package</li><li>Implement purista cli</li><li>Add EventBridge status check resolve #68</li><li>Add /healthz endpoint to httpServer resolve #69</li><li>Add string case helper functions</li><li>Add operationId to OpenAPI schema resolve #77</li><li>Provide an abstract secret store (getter) similar to event bridge #88</li><li>Improve secret store #88</li><li>Provide an abstract config store (getter) similar to event bridge #87</li><li>Provide an abstract key-value state store similar to event bridge #89</li><li>Add OpenApi deprecated flag option #78</li><li>Add predefined tests for service builder usage #100</li><li>Add receiveMessageOnEveryInstance flag</li><li>Add package @purista/redis-state-store #103</li><li>Add k8s helper package #110</li><li>Add helper and cleanup code</li><li>Add Dapr eventbridge #85</li><li>Add optional log level to general event bridge config</li><li>Add HttpEventBridge and HttpClient</li><li>Implement Dapr SDK</li><li>MQTT eventBridge #98</li><li>Add AMQP &amp; MQTT bridges to cli tool</li><li>Add js emit event to bridges</li><li>NATS as message broker #112</li><li>Add NATS JetStream state store package #124</li><li>Redis config store #125</li><li>NATS config store for JetStream enabled NATS server #126</li><li>Infisical secret store #127</li></ul><h3 id="miscellaneous-tasks" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Bump dependency packages</li><li>Update doc theme config</li><li>Bump versions to 1.4.9</li><li>Cleanup code structure</li><li>Provide full example</li><li>Update vuepress-theme-hope</li><li>Correct vuepress packages</li><li>Cleanup setup</li><li>Improve automated document generation</li><li>Use @swc/jest in favor of ts-jest</li><li>Minor code cleanup</li><li>Update package.lock</li><li>Cleanup code - remove onSuccess and onError hook in favor of event listening</li><li>Add cycling dependency checker</li><li>Add inline documentation</li><li>Fix file casing</li><li>Fix git file casing</li><li>Minor improvements</li><li>Update github issue templates</li><li>Evaluate bun and correct package.json duplicates resolve #74</li><li>Add vscode launch jest single file execution</li><li>Improve types and code cleanup</li><li>Code cleanup</li><li>Bump zod package versions</li><li>Improve code and types</li><li>Add fatal to logger mock and improve type</li><li>Improve code, types and inline documentation</li><li>Add unit tests #2</li><li>Improve addQueryParameters types solves #90</li><li>Update github issue templates</li><li>Update github issue templates</li><li>Update integration test #2</li><li>Minor fix and improvements</li><li>Remove spanProcessor parameter</li><li>Minor code improvements</li><li>Improve getter types in stores #87 #88</li><li>Improve types</li><li>Add warning</li><li>Add inline doc #78</li><li>Update test</li><li>Add inline doc</li><li>Update and improve cli #102</li><li>Update gitignore</li><li>Bump dependencies</li><li>Set types because of package update</li><li>Code and type improvements</li><li>Improve code</li><li>Update uptrace example config</li><li>Refactor HttpserverService to ServiceBuilder #111</li><li>Big code cleanup</li><li>Update packages and project config</li><li>Unify config handling in event bridge</li><li>Minor output improvement</li><li>Improve types</li><li>Update project config</li><li>Update package script</li><li>Update packages</li><li>Set current version</li><li>Package</li><li>Bump versions to 1.5.0</li><li>Improve k8s-sdk</li><li>Improve event bridge config typ</li><li>Use node query parser instead of external qs package</li><li>Require at least node v 18.15</li><li>Use enum EventBridgeEventNames</li><li>Cleanup code</li><li>Improve span names</li><li>Improve setup</li><li>Improve k8s-sdk and enable http compression</li><li>Improve setup</li><li>Add testcontainers package</li><li>Add test and cleanup and improve code</li><li>Improve types</li><li>Add test</li><li>Minor fixes</li><li>Update dependencies</li><li>Remove async if not needed</li><li>Use @hono/node-server 1.0.0-rc.1 with native fetch</li><li>Log span context and traceId</li><li>Add inline doc and cleanup code</li><li>Minor changes</li><li>Minor cleanup</li><li>Bump versions to 1.6.0</li><li>Update packages</li><li>Add Teletrace example and docu #122</li><li>Share bridge integration test setup</li><li>Set hono router name</li><li>Unify folder name to package name</li><li>Minor opentelemetry improvements</li><li>Update config</li><li>Minor code improvements</li><li>Update dependencies</li><li>NATS only without durable</li><li>Minor updates</li><li>Cleanup</li><li>Do not run release build parallel</li><li>Bump versions to 1.7.0</li><li>Disable coverage threshold for quickfix</li><li>Bump versions to 1.7.1</li><li>Cleanup tsconfig blueprint in cli tool</li><li>Remove unused dependency</li></ul><h3 id="refactor" tabindex="-1"><a class="header-anchor" href="#refactor" aria-hidden="true">#</a> Refactor</h3><ul><li>Improve code and types and reduce complexity in DefaultEventBridge</li><li>Improve code and types and reduce complexity in Service</li><li>Unify logger name to be always logger</li></ul><h2 id="_1-4-8-2022-10-09" tabindex="-1"><a class="header-anchor" href="#_1-4-8-2022-10-09" aria-hidden="true">#</a> [1.4.8] - 2022-10-09</h2><h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>[BUG] HttpServer onError hook does not return #55</li><li>[BUG] OpenApi does not reflect multiple path parameter resolves #57</li><li>Correct documentation generation</li></ul><h3 id="documentation-1" tabindex="-1"><a class="header-anchor" href="#documentation-1" aria-hidden="true">#</a> Documentation</h3><ul><li>Update documentation</li><li>Update documentation</li></ul><h3 id="features-1" tabindex="-1"><a class="header-anchor" href="#features-1" aria-hidden="true">#</a> Features</h3><ul><li>Add token status codes</li></ul><h3 id="miscellaneous-tasks-1" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-1" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Bump versions to 1.4.7</li><li>Bump version</li><li>Bump dependencies</li><li>Bump versions to 1.4.8</li></ul><h3 id="resolves" tabindex="-1"><a class="header-anchor" href="#resolves" aria-hidden="true">#</a> Resolves</h3><ul><li>[TASK] Add duplication check on service builder #54</li></ul><h2 id="_1-4-6-2022-09-25" tabindex="-1"><a class="header-anchor" href="#_1-4-6-2022-09-25" aria-hidden="true">#</a> [1.4.6] - 2022-09-25</h2><h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Package run command</li></ul><h3 id="documentation-2" tabindex="-1"><a class="header-anchor" href="#documentation-2" aria-hidden="true">#</a> Documentation</h3><ul><li>Update documentation</li></ul><h3 id="miscellaneous-tasks-2" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-2" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Bump versions to 1.4.6</li></ul><h2 id="_1-4-5-2022-08-21" tabindex="-1"><a class="header-anchor" href="#_1-4-5-2022-08-21" aria-hidden="true">#</a> [1.4.5] - 2022-08-21</h2><h3 id="miscellaneous-tasks-3" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-3" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Correct tag</li></ul><h2 id="_1-4-4-2022-08-21" tabindex="-1"><a class="header-anchor" href="#_1-4-4-2022-08-21" aria-hidden="true">#</a> [1.4.4] - 2022-08-21</h2><h3 id="bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-3" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Httpserver error response</li><li>Improve types</li><li>Use status 204 on empty response and log errors</li></ul><h3 id="documentation-3" tabindex="-1"><a class="header-anchor" href="#documentation-3" aria-hidden="true">#</a> Documentation</h3><ul><li>Add documentation</li><li>Update api documentation</li><li>Update documentation</li><li>Update doc</li><li>Update api doc</li><li>Update documentation</li><li>Update doc</li><li>Update documentation</li><li>Update documentation</li></ul><h3 id="miscellaneous-tasks-4" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-4" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Cleanup example</li><li>Return trace id in response header</li><li>Update dependencies</li><li>Bump versions to 1.4.4</li></ul><h2 id="_1-4-3-2022-07-31" tabindex="-1"><a class="header-anchor" href="#_1-4-3-2022-07-31" aria-hidden="true">#</a> [1.4.3] - 2022-07-31</h2><h3 id="documentation-4" tabindex="-1"><a class="header-anchor" href="#documentation-4" aria-hidden="true">#</a> Documentation</h3><ul><li>Update documentation</li></ul><h3 id="miscellaneous-tasks-5" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-5" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Add eslintignore</li><li>Bump versions to 1.4.3</li></ul><h2 id="_1-4-2-2022-07-31" tabindex="-1"><a class="header-anchor" href="#_1-4-2-2022-07-31" aria-hidden="true">#</a> [1.4.2] - 2022-07-31</h2><h3 id="bug-fixes-4" tabindex="-1"><a class="header-anchor" href="#bug-fixes-4" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Make testhelper package private</li><li>Subscription builder typings</li><li>CreateTestCommandResponseMsg helper return type</li></ul><h3 id="documentation-5" tabindex="-1"><a class="header-anchor" href="#documentation-5" aria-hidden="true">#</a> Documentation</h3><ul><li>Add google analytics</li><li>Update documentation</li><li>Add inline documentation</li><li>Update handbook src</li><li>Update documentation</li><li>Update api docs</li><li>Add and extend examples</li><li>Update doc</li><li>Update documentation</li><li>Update documentation</li><li>Update api documentation</li><li>Update documentation</li><li>Fix typos</li><li>Update documentation</li><li>Update documentation</li></ul><h3 id="features-2" tabindex="-1"><a class="header-anchor" href="#features-2" aria-hidden="true">#</a> Features</h3><ul><li>Add function context mocks and refactor mocks</li><li>Refactor http server to use fastify and move to own package</li><li>Update testhelper and example</li><li>Create logger abstraction to allow different loggers</li><li>Add service builder</li><li>Add events to service and event bridge</li><li>Add metric events</li><li>Add principalId handling to httpserver service</li><li>Add before response hook in http server solves #50</li></ul><h3 id="miscellaneous-tasks-6" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-6" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Add task template</li><li>Add unit tests for core</li><li>Improve types</li><li>Update project config</li><li>Improve file naming</li><li>Make getErrorMessageForCode generic</li><li>Improve code</li><li>Update config</li><li>Improve types, add instanceId</li><li>Remove obsolete http-server code from core package</li><li>Cleanup package json and minor fixes</li><li>Move testhelper back to core to prevent cycling dependencies</li><li>Improve types and subscription builder</li><li>Use test helper in tests</li><li>Update packages</li><li>Minor cleanup</li><li>Minor code cleanup</li><li>Update packages</li><li>Update test</li><li>Bump versions to 1.4.0</li><li>Bump versions to 1.4.1</li><li>Update packages and config</li><li>Cleanup simple example</li><li>Bump versions to 1.4.2</li></ul><h3 id="refactor-1" tabindex="-1"><a class="header-anchor" href="#refactor-1" aria-hidden="true">#</a> Refactor</h3><ul><li>Default eventbridge and add function context</li></ul><h2 id="_1-3-1-2022-06-23" tabindex="-1"><a class="header-anchor" href="#_1-3-1-2022-06-23" aria-hidden="true">#</a> [1.3.1] - 2022-06-23</h2><h3 id="documentation-6" tabindex="-1"><a class="header-anchor" href="#documentation-6" aria-hidden="true">#</a> Documentation</h3><ul><li>Add change log file #11</li><li>Add simple example #5</li><li>Update documentation</li><li>Update documentation</li><li>Add readme to packages</li><li>Fix typos</li><li>Add documentation for hooks</li><li>Update documentation</li></ul><h3 id="features-3" tabindex="-1"><a class="header-anchor" href="#features-3" aria-hidden="true">#</a> Features</h3><ul><li>Add form multipart upload suppport to webserver</li><li>[FEATURE-REQUEST] Add hooks #34</li><li>Allow multiple hooks closes #34</li><li>Improve service function hooks</li></ul><h3 id="miscellaneous-tasks-7" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-7" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Migrate to mono repo #31</li><li>Add turbo</li><li>Update project configs</li><li>Build esm and commonjs</li><li>Setup publish pipeline</li><li>Bump versions to 1.3.0</li><li>Update changelog</li><li>Align command naming</li><li>Correct file name</li><li>Simplify typing</li><li>Bump versions to 1.3.1</li></ul><h2 id="_1-1-5-2022-05-15" tabindex="-1"><a class="header-anchor" href="#_1-1-5-2022-05-15" aria-hidden="true">#</a> [1.1.5] - 2022-05-15</h2><h3 id="bug-fixes-5" tabindex="-1"><a class="header-anchor" href="#bug-fixes-5" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Function builder</li></ul><h2 id="_1-1-3-2022-05-15" tabindex="-1"><a class="header-anchor" href="#_1-1-3-2022-05-15" aria-hidden="true">#</a> [1.1.3] - 2022-05-15</h2><h3 id="bug-fixes-6" tabindex="-1"><a class="header-anchor" href="#bug-fixes-6" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Minor code fixes</li></ul><h3 id="features-4" tabindex="-1"><a class="header-anchor" href="#features-4" aria-hidden="true">#</a> Features</h3><ul><li>Add authorization method to openapi #32</li></ul><h3 id="miscellaneous-tasks-8" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-8" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Move test helper into own package #19</li></ul><h2 id="_1-1-0-2022-05-14" tabindex="-1"><a class="header-anchor" href="#_1-1-0-2022-05-14" aria-hidden="true">#</a> [1.1.0] - 2022-05-14</h2><h3 id="bug-fixes-7" tabindex="-1"><a class="header-anchor" href="#bug-fixes-7" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Cookie handling</li><li>Log traceId and service name + version #28</li><li>Allow string array in headers</li></ul><h3 id="documentation-7" tabindex="-1"><a class="header-anchor" href="#documentation-7" aria-hidden="true">#</a> Documentation</h3><ul><li>Update documentation and website</li><li>Update config and update generated docs</li><li>Update doc</li><li>Update building documentation</li><li>Add costum events page dummy</li></ul><h3 id="features-5" tabindex="-1"><a class="header-anchor" href="#features-5" aria-hidden="true">#</a> Features</h3><ul><li>Unify ErrorStatus and SuccessStatus to StatusCode resolves #26</li><li>Add traceId to handled and unhandled errors resolves #27</li><li>Use promise.race instead timer interval #29</li><li>Timed out invoke should send a info message #30</li><li>Failing subscription should emit a info message #25</li><li>Improve error handling - differentiate between handled and unhandled #24</li></ul><h3 id="miscellaneous-tasks-9" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-9" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Update website</li><li>Code cleanup and update doc</li><li>Fix lint</li></ul><h2 id="_1-0-5-2022-05-11" tabindex="-1"><a class="header-anchor" href="#_1-0-5-2022-05-11" aria-hidden="true">#</a> [1.0.5] - 2022-05-11</h2><h3 id="bug-fixes-8" tabindex="-1"><a class="header-anchor" href="#bug-fixes-8" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>Middleware response issue</li></ul><h2 id="_1-0-4-2022-05-11" tabindex="-1"><a class="header-anchor" href="#_1-0-4-2022-05-11" aria-hidden="true">#</a> [1.0.4] - 2022-05-11</h2><h3 id="documentation-8" tabindex="-1"><a class="header-anchor" href="#documentation-8" aria-hidden="true">#</a> Documentation</h3><ul><li>Update documentation</li></ul><h3 id="miscellaneous-tasks-10" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-10" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Remove js files from linting</li></ul><h2 id="_1-0-3-2022-05-10" tabindex="-1"><a class="header-anchor" href="#_1-0-3-2022-05-10" aria-hidden="true">#</a> [1.0.3] - 2022-05-10</h2><h3 id="bug-fixes-9" tabindex="-1"><a class="header-anchor" href="#bug-fixes-9" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>[BUG] openapi3-ts dependency missing #14</li><li>Use copressionMiddleware as default last middleware</li></ul><h3 id="documentation-9" tabindex="-1"><a class="header-anchor" href="#documentation-9" aria-hidden="true">#</a> Documentation</h3><ul><li>Add first simple documentation version resolves #4</li><li>Add .nojekyll file to vuepress and doc folder</li><li>Correct doc folders</li><li>Minor improvements</li></ul><h3 id="features-6" tabindex="-1"><a class="header-anchor" href="#features-6" aria-hidden="true">#</a> Features</h3><ul><li>Add swagger ui</li></ul><h3 id="miscellaneous-tasks-11" tabindex="-1"><a class="header-anchor" href="#miscellaneous-tasks-11" aria-hidden="true">#</a> Miscellaneous Tasks</h3><ul><li>Initial</li><li>Setup domain and gh-pages</li><li>Install and setup vuepress</li><li>Minor code cleanup</li><li>Add vuepress config to lint ignore</li><li>Add CNAME to doc public folder</li><li>Update test config</li><li>Improve test mock</li><li>Fix package.json script</li></ul>',102);function h(m,f){const i=a("RouterLink");return t(),d("div",null,[n("p",null,[e("PURISTA API / "),o(i,{to:"/api/modules.html"},{default:r(()=>[e("Modules")]),_:1})]),p,s(" generated by git-cliff ")])}const b=l(u,[["render",h],["__file","index.html.vue"]]);export{b as default};
