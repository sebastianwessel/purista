const e=JSON.parse('{"key":"v-52e4caa4","path":"/handbook/3._event-bridge/99_Implement_a_bridge.html","title":"Implement a custom event bridge","lang":"en-US","frontmatter":{"order":99,"title":"Implement a custom event bridge","shortTitle":"Custom event bridge","description":"A deeper look into internals of PURISTA typescript application backend framework.","tag":["event bridge"],"head":[["meta",{"property":"og:url","content":"https://purista.dev/handbook/3._event-bridge/99_Implement_a_bridge.html"}],["meta",{"property":"og:site_name","content":"PURISTA"}],["meta",{"property":"og:title","content":"Implement a custom event bridge"}],["meta",{"property":"og:description","content":"A deeper look into internals of PURISTA typescript application backend framework."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"/graphic/advertise_large.svg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T09:05:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Implement a custom event bridge"}],["meta",{"property":"article:author","content":"Sebastian Wessel"}],["meta",{"property":"article:tag","content":"event bridge"}],["meta",{"property":"article:modified_time","content":"2023-03-29T09:05:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Implement a custom event bridge\\",\\"image\\":[\\"/graphic/advertise_large.svg\\"],\\"dateModified\\":\\"2023-03-29T09:05:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sebastian Wessel\\",\\"url\\":\\"https://sebastianwessel.de\\"}]}"]]},"headers":[],"git":{"createdTime":1679090364000,"updatedTime":1680080720000,"contributors":[{"name":"Sebastian Wessel","email":"sebastianwessel@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"handbook/3._event-bridge/99_Implement_a_bridge.md","localizedDate":"March 17, 2023","excerpt":"<p>An example for implementing a own custom event bridge will be available in the next time.<br>\\nIn the meanwile, you can have a look into the <code>@purista/amqpbridge</code> package.</p>\\n<p>Basically, you need to create a class, which extends the <code>EventBridgeBaseClass</code>.</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">MyBridge</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">EventBridgeBaseClass<span class=\\"token operator\\">&lt;</span>MyConfig<span class=\\"token operator\\">&gt;</span></span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">EventBridge</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
