const e=JSON.parse(`{"key":"v-a10f7efa","path":"/handbook/3._event-bridge/100_insights.html","title":"Structure of PURISTA messages","lang":"en-US","frontmatter":{"order":100,"title":"Structure of PURISTA messages","shortTitle":"Message insights","description":"A deeper look into internals of PURISTA typescript application backend framework.","tag":["event bridge","messages"],"head":[["meta",{"property":"og:url","content":"https://purista.dev/handbook/3._event-bridge/100_insights.html"}],["meta",{"property":"og:site_name","content":"PURISTA"}],["meta",{"property":"og:title","content":"Structure of PURISTA messages"}],["meta",{"property":"og:description","content":"A deeper look into internals of PURISTA typescript application backend framework."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"/purista_slogan.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-29T09:05:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Structure of PURISTA messages"}],["meta",{"property":"article:author","content":"Sebastian Wessel"}],["meta",{"property":"article:tag","content":"event bridge"}],["meta",{"property":"article:tag","content":"messages"}],["meta",{"property":"article:modified_time","content":"2023-03-29T09:05:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Structure of PURISTA messages\\",\\"image\\":[\\"/purista_slogan.png\\"],\\"dateModified\\":\\"2023-03-29T09:05:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sebastian Wessel\\",\\"url\\":\\"https://sebastianwessel.de\\"}]}"]]},"headers":[{"level":2,"title":"ID's","slug":"id-s","link":"#id-s","children":[{"level":3,"title":"traceId","slug":"traceid","link":"#traceid","children":[]},{"level":3,"title":"instanceId","slug":"instanceid","link":"#instanceid","children":[]},{"level":3,"title":"correlationId","slug":"correlationid","link":"#correlationid","children":[]},{"level":3,"title":"id (message id)","slug":"id-message-id","link":"#id-message-id","children":[]},{"level":3,"title":"principalId","slug":"principalid","link":"#principalid","children":[]}]},{"level":2,"title":"Message structure","slug":"message-structure","link":"#message-structure","children":[]}],"git":{"createdTime":1676501895000,"updatedTime":1680080720000,"contributors":[{"name":"Sebastian Wessel","email":"sebastianwessel@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"handbook/3._event-bridge/100_insights.md","localizedDate":"February 15, 2023","excerpt":"<h2> ID's</h2>\\n<h3> traceId</h3>\\n<p>The trace id is a id, which will be used for one complete process.</p>\\n<p>As an example:</p>\\n<p>The Frontend makes a url request, which invokes a service function A. The service function A invokes a service function B.<br>\\nService function A is returning a result back to the frontend. There is also a subscription C which listens for success responses of service A.</p>"}`);export{e as data};
