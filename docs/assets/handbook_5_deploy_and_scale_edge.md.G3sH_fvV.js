import{_ as e,c as o,o as t,V as a,ac as s,al as i}from"./chunks/framework.ITQiifkM.js";const v=JSON.parse('{"title":"Edge","description":"Deploy your typescript application on edge devices or a single instance","frontmatter":{"title":"Edge","description":"Deploy your typescript application on edge devices or a single instance","order":502000},"headers":[],"relativePath":"handbook/5_deploy_and_scale/edge.md","filePath":"handbook/5_deploy_and_scale/edge.md","lastUpdated":1706444636000}'),n={name:"handbook/5_deploy_and_scale/edge.md"},r=a('<h1 id="edge" tabindex="-1">Edge <a class="header-anchor" href="#edge" aria-label="Permalink to &quot;Edge&quot;">​</a></h1><p>When it comes to scale, it mostly does not mean the same as for servers or cloud. In a server or cloud environment, you have &quot;one big thing&quot;, which you need to scale somehow. You can simply add more powerful hardware or more instance on more hardware. Especially in cloud environments, you &quot;simply&quot; add more ressources &amp; instances.</p><p>If you&#39;re looking into some IoT or edge scenario, scaling means something different. The ressources of a single edge device is fixed and cant simply be upgraded. You might have hundereds or thousend devices with fixed ressources providing raw data.</p><p>One option is, to collect the raw data of all your devices, send them to your server/cloud. This works, but wastes a lot of ressources for data transmition and handling on the server side. While leaving ressources on the edge device unused. A better approach is, to prepare the data on every edge device for further processing. This prepeared data is most likely much smaller than raw data and reduces the amount of computation on the server side. Also things like unstable data connection, caching and so on will become important at some point.</p><p>With the concept of services with single, independent commands and subscriptions, you can simply decide how a single instance of your application should look like. It is possible to run some services only on the edge device, some services only on the cloud and some of them on both sides. This means, scaling becomes more a decision &quot;where is the best place to do it&quot;.</p><p>Running software built with PURISTA on edge devices is quite simple and does not need special handling.</p><p>There are in general 2 options.</p><h2 id="_100-on-edge-device" tabindex="-1">100% on edge device <a class="header-anchor" href="#_100-on-edge-device" aria-label="Permalink to &quot;100% on edge device&quot;">​</a></h2><p>The first approach is, to run a single instance of your application and use the <code>DefaultEventBridge</code> of <code>@purista/core</code> package. Especially if there are only limited system resources available, this fits perfectly. There is no need to have some additional message broker running on the edge device. This means lower resource consumption and no software dependency.</p><p><img src="'+s+'" alt="single instance"></p><p>The downside of this approach is, that you need to somehow share the data with your server or cloud instances. One way would be, that you provide some kind of API and the server is pulling the data from your devices. A other option would be, that you create a subscription or a cron job, which is sending data to your cloud. In this case, you also need to handle connection issues, cache data and so on.</p><p>This might be sufficient for many scenarios - but also not sufficient for many other.</p><h2 id="run-on-edge-and-share-data-to-server-cloud" tabindex="-1">Run on edge and share data to server &amp; cloud <a class="header-anchor" href="#run-on-edge-and-share-data-to-server-cloud" aria-label="Permalink to &quot;Run on edge and share data to server &amp; cloud&quot;">​</a></h2><p>The second approach is, to use an MQTT broker like <a href="https://mosquitto.org" target="_blank" rel="noreferrer">mosquitto</a> with a low footprint, but more capabilities. An MQTT broker does not only provide better fault tolerance by persisting messages which are not processed. It also provides the capability to connect the edge device to a higher instance like the cloud.</p><p>It is possible to configure the broker in a way, where specific event messages are automatically available in some other broker. This means you can &quot;extract/listen for data&quot; without the need to change the application.</p><p>As a simplified illustration how it might look like this:</p><p><img src="'+i+'" alt="edge device example"></p><p>PURISTA is providing the <code>@purista/mqttbridge</code> package, which is focusing on IoT and edge devices. You can learn more about it at <a href="./../3_eco_system/eventbridges/mqtt.html">MQTT event bridge</a>.</p><div class="tip custom-block"><p class="custom-block-title">Pros</p><ul><li>low footprint</li><li>can be connected to the cloud/server without much effort</li><li>together with webassembly 🚀</li><li>use the same application to run on edge and be able to scale on the cloud</li></ul></div><div class="warning custom-block"><p class="custom-block-title">Cons</p><ul><li>🤷</li></ul></div>',20),d=[r];function c(l,h,p,u,m,g){return t(),o("div",null,d)}const b=e(n,[["render",c]]);export{v as __pageData,b as default};
