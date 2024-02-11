import{_ as a,c as e,o,V as i}from"./chunks/framework.ITQiifkM.js";const g=JSON.parse('{"title":"Principles","description":"PURISTA typescript backend framework concept","frontmatter":{"title":"Principles","description":"PURISTA typescript backend framework concept","order":20},"headers":[],"relativePath":"handbook/principles.md","filePath":"handbook/principles.md","lastUpdated":1706444636000}'),n={name:"handbook/principles.md"},t=i('<h1 id="principles-of-purista" tabindex="-1">Principles of PURISTA <a class="header-anchor" href="#principles-of-purista" aria-label="Permalink to &quot;Principles of PURISTA&quot;">​</a></h1><h2 id="focus-on-business-logic" tabindex="-1">Focus on business logic <a class="header-anchor" href="#focus-on-business-logic" aria-label="Permalink to &quot;Focus on business logic&quot;">​</a></h2><h2 id="isolation-separation" tabindex="-1">Isolation &amp; separation <a class="header-anchor" href="#isolation-separation" aria-label="Permalink to &quot;Isolation &amp; separation&quot;">​</a></h2><p>The implementation of business logic should follow the principals of isolation and separation. The &quot;outside world&quot; should be seen as black box with known interfaces.</p><ul><li>a service relates to one entity</li><li>commands and subscriptions are isolated and they only know the interface shape to the outside world</li><li>every input and output to/from a command or subscription should be validated</li></ul><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>PURISTA follows the pattern to have always default values for config and settings. These defaults can be overwritten.</p><h2 id="handling-of-data" tabindex="-1">Handling of data <a class="header-anchor" href="#handling-of-data" aria-label="Permalink to &quot;Handling of data&quot;">​</a></h2><h2 id="tracing-logging" tabindex="-1">Tracing &amp; Logging <a class="header-anchor" href="#tracing-logging" aria-label="Permalink to &quot;Tracing &amp; Logging&quot;">​</a></h2><h2 id="performance-via-scaling" tabindex="-1">Performance via scaling <a class="header-anchor" href="#performance-via-scaling" aria-label="Permalink to &quot;Performance via scaling&quot;">​</a></h2>',10),r=[t];function s(l,c,d,p,h,u){return o(),e("div",null,r)}const m=a(n,[["render",s]]);export{g as __pageData,m as default};