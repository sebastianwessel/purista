import{_ as r,W as l,X as a,Z as e,$ as n,a0 as t,D as s}from"./framework-d89ed822.js";const c="/graphic/microservice_style.svg",d={},h=e("em",null,"microservice style",-1),u={href:"https://istio.io",target:"_blank",rel:"noopener noreferrer"},p={href:"https://dapr.io",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[n("This solution fits if you have multiple developer teams, which should be able to work (and scale) independently. This is the "),e("strong",null,"biggest PRO"),n(" in comparison to the monolithic approach: It enables scaling the whole project and not only some software instances.")],-1),m=e("p",null,[e("img",{src:c,alt:"example"})],-1),g={href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"The overall workload is distributed across all running instances and the number of running instances per service can be set differently. If you have for example some service, which does some time-consuming computation, it might make sense to have more instances running.",-1),b=e("p",null,[n("In case, you are using the "),e("code",null,"@purista/httpserver"),n(" package, keep in mind, that the instances should be started before all other services or the API routing table must be provided as config. Otherwise, the HTTP server instance won't know the correct endpoints and correlating services!")],-1),y={class:"hint-container tip"},v=e("p",{class:"hint-container-title"},"Pros",-1),k=e("li",null,"services can be deployed independently",-1),w=e("li",null,"services can be scaled independently",-1),T=e("li",null,"code can be handled in multiple repositories and multiple teams independently",-1),x=e("li",null,'if one service instance crashes, the rest will not be impacted (in the meaning of "they are not automatically killed/crashing")',-1),I=e("li",null,"different access levels, restrictions, and policies for single services possible",-1),B={href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"},P={href:"https://grafana.com",target:"_blank",rel:"noopener noreferrer"},H={href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"},E={class:"hint-container danger"},N=e("p",{class:"hint-container-title"},"Cons",-1),V={href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"},A={href:"https://dapr.io",target:"_blank",rel:"noopener noreferrer"},C=e("li",null,"needs knowledge, time, and ressources to be configured correctly",-1),L=e("li",null,"instances of services are running 24/7",-1),O=e("li",null,"will in most cases need third-party applications to handle logs (collecting and merging logs from all instances)",-1),R=e("li",null,"monitoring and alerting become much more complex and might need third-party solutions",-1);function U(W,j){const o=s("ExternalLinkIcon"),i=s("Badge");return l(),a("div",null,[e("p",null,[n("It's a common way, to have a microservice approach. We call it here "),h,n(", as classical microservices are typically (more or less) directly communicating via HTTP. In PURISTA, the communication is not a direct connection between two instances - it is done via a message broker. Because of this, service mesh software like "),e("a",u,[n("Istio"),t(o)]),n(" can't be simply used. Here, you might want to consider "),e("a",p,[n("dapr"),t(o)]),n(".")]),_,m,e("p",null,[n("This solution will need the effort to set up, configure and maintain. You will also quickly hit the point, where you will need additional third-party solutions to handle the bigger complexity. Here, a common way is, the usage of "),e("a",g,[n("kubernetes"),t(o)]),n('. These third-party solutions will also bring a lot of additional benefits. The range will be from "some nicer UI" up to "autoscaling services" and automated, reproducible deployment. The costs, for running a system this way, are (mostly) predictable - similar to the monolithic approach.')]),f,t(i,{text:"Be aware",type:"warning"}),b,e("div",y,[v,e("ul",null,[k,w,T,x,I,e("li",null,[n("by using tools like "),e("a",B,[n("kubernetes"),t(o)]),n(" more enhanced functions on infrastructure level like autoscaling")]),e("li",null,[n("enhanced monitoring and alerting become available because of the needed usage of third-party solutions (like "),e("a",P,[n("grafana"),t(o)]),n(")")]),e("li",null,[n("any bigger server/cloud provider has "),e("a",H,[n("kubernetes"),t(o)]),n(" focused solutions in his portfolio")])])]),e("div",E,[N,e("ul",null,[e("li",null,[n("much more complex orchestration to handle and will probably need some additional layer like "),e("a",V,[n("kubernetes.io"),t(o)]),n(" or "),e("a",A,[n("dapr.io"),t(o)])]),C,L,O,R])])])}const D=r(d,[["render",U],["__file","3_microservice_style.html.vue"]]);export{D as default};
