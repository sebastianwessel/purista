import{_ as t,E as s,c as i,J as a,V as e,o as n,ao as l}from"./chunks/framework.ITQiifkM.js";const b=JSON.parse('{"title":"Monolithic","description":"Deploy your typescript application as monolithic application","frontmatter":{"title":"Monolithic","description":"Deploy your typescript application as monolithic application","order":501000},"headers":[],"relativePath":"handbook/5_deploy_and_scale/monolithic.md","filePath":"handbook/5_deploy_and_scale/monolithic.md","lastUpdated":1706444636000}'),r={name:"handbook/5_deploy_and_scale/monolithic.md"},c=e('<h1 id="monolithic" tabindex="-1">Monolithic <a class="header-anchor" href="#monolithic" aria-label="Permalink to &quot;Monolithic&quot;">​</a></h1><p>It is the most mature and straightforward way, to simply deploy multiple instances to have horizontal scaling and to provide some kind of failover solution.</p><p>In the picture below, a simplified setup with two instances is shown. You can scale it up by adding more instances or scale down, to one instance, if you think of <a href="./edge.html">IoT and small edge devices</a>.</p><p><img src="'+l+'" alt="example"></p><p>This solution works for a single developer team or local, development and test environments. It perfectly fits for early stages if the final decision about infrastructure/cloud provider is not made. If not enough DevOps resources are available, this might be the preferred way. Also, costs for running the application are predictable - price per instance. The costs do not directly correlate to the usage amount of executing single functions. This approach does not need a real cloud provider and you can choose cheap (dedicated) servers.</p><p>To have a scalable solution, there is a need to ensure that the message broker and the HTTP proxy/load balancer do not become a single point of failure. They need to be fault tolerant and should be able to scale or at least handle the number of requests.</p><p>The overall workload is distributed across all running instances. In the picture above you can see, that every user request is sent to the HTTP server service of one of the instances. The HTTP server itself invokes the correlating command of the matching service. The invoked service might be executed on the same instance or a different instance. This depends on the message broker and the timing. The command execution result will be sent to the instance, which was receiving the user&#39;s request and will respond to the user&#39;s request.</p><p>Subscriptions are triggered by messages from the message broker. This means they are executed at &quot;any of&quot; the instances.</p>',8),d=e('<p>If you need some kind of <strong>state or session handling</strong>: Because the execution of commands and subscription is generally done on &quot;any of the instances&quot; (random!), state handling will need some shared state store, even if a single user session is pinned to a specific instance!</p><p>The simple and common solution, to advise the load balancer/proxy, to pin the user&#39;s session to always the same instance, and to store the session data simply in the memory of that instance, will <strong>not work</strong> properly! Only the same HTTP server service will be invoked, but the command, corresponding to called HTTP endpoint, might be executed on any of the available instances.</p><p>You will need some additional external, shared-state storage!</p><div class="tip custom-block"><p class="custom-block-title">Pros</p><ul><li>simple in the basic setup</li><li>can run on bare metal with no additional overhead (IoT/edge devices)</li><li>low configuration</li><li>scales workload</li><li>provides low-level backup</li><li>different geo locations possible</li><li>ensures all services (schemas, db migrations...) are in sync</li><li>can be done at nearly any provider</li></ul></div><div class="warning custom-block"><p class="custom-block-title">Cons</p><ul><li>the need to deploy always all services</li><li>different access levels, restrictions, and policies for services &amp; functions is not possible</li><li>instances (incl. all services &amp; functions) are running 24/7</li><li>most likely a lot of manual steps</li><li>the (manual) effort for managing instances grows, with the number of instances in most cases</li><li>every addition, like state handling, secret, and config stores, must also be provided &amp; managed</li><li>code must be in mono repo or additional effort to merge all repos to a single deployment bundle</li></ul></div>',5);function p(h,m,u,f,g,_){const o=s("Badge");return n(),i("div",null,[c,a(o,{text:"Be aware",type:"warning"}),d])}const y=t(r,[["render",p]]);export{b as __pageData,y as default};
