"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2489],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={id:"environment-layout",sidebar_position:2},a="Environment Layouts Json",l={unversionedId:"guides/server-client/environment-layout",id:"guides/server-client/environment-layout",title:"Environment Layouts Json",description:"Some information required to conduct experiments cannot be easily discovered by the Virtual Client when the application starts. This type of",source:"@site/docs/guides/3-server-client/environment-layout.md",sourceDirName:"guides/3-server-client",slug:"/guides/server-client/environment-layout",permalink:"/VirtualClient/docs/guides/server-client/environment-layout",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/3-server-client/environment-layout.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"environment-layout",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Run client -> server workloads",permalink:"/VirtualClient/docs/guides/server-client/"},next:{title:"Command Line options",permalink:"/VirtualClient/docs/guides/command-options/"}},s={},c=[{value:"Advanced Scenarios (Client/Server)",id:"advanced-scenarios-clientserver",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-layouts-json"},"Environment Layouts Json"),(0,o.kt)("p",null,'Some information required to conduct experiments cannot be easily discovered by the Virtual Client when the application starts. This type of\ninformation must be provided to the Virtual Client via an "environment layout". An environment layout provides additional information\nto the Virtual Client in support of the needs of the experiment that is not otherwise discoverable from the information on the VM/host system\nitself.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# Example Environment Layout\n# The following example is a JSON representation of an environment layout. Environment layouts are supplied to the \n# Virtual Client in a JSON file that is referenced on the command line.\n\n# Command line reference to the environment layout:\nVirtualClient.exe --profile=PERF-IO-FIO.json --system=Azure --timeout=1440 --layoutPath="C:\\any\\path\\to\\layout.json"\n\n# Contents of the \'layout.json\' file:\n{\n    "clients": [\n        {\n            "name": "cluster01,dfea5b55-abe6-4193-9a4d-461bd133a09d,e46ae74e-0",\n            "privateIPAddress": "10.1.0.1"\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"advanced-scenarios-clientserver"},"Advanced Scenarios (Client/Server)"),(0,o.kt)("p",null,"Some experiment workload scenarios are more advanced than others. In a basic experiment, the Virtual Client application runs on a\nsingle VM or host system and all of the necessities for running the workload are self-contained on that system (e.g. running a\nbenchmark CPU workload such as OpenSSL). However, the Virtual Client application can support more advanced workload scenarios as\nwell where more than 1 VM or host system is required in order to support the needs of the workload. In these scenarios, the Virtual\nClient requires the user/automation to provide a little information up front so that the details of the environment are known to each\ninstance running on separate VMs/hosts."),(0,o.kt)("p",null,'In advanced environment layouts each client instance will have a specific "role" assigned. These roles are specific to each different\nworkload profile/workload and can be determined by looking at the documentation for that particular profile.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# Example Environment Layout\n# The following example is a JSON representation of an environment layout. Environment layouts are supplied to the \n# Virtual Client in a JSON file that is referenced on the command line.\n\n# Command line reference to the environment layout:\nVirtualClient.exe --profile=PERF-NETWORK.json --system=Azure --timeout=1440 --layoutPath="C:\\any\\path\\to\\layout.json"\n\n# Contents of the \'layout.json\' file:\n# In the PERF-NETWORKING.json workload profile, there are 2 roles: Client and Server. They must be named exactly that in\n# the environment layout.\n{\n    "clients": [\n        {\n            "name": "cluster01,dfea5b55-abe6-4193-9a4d-461bd133a09d,e46ae74e-0",\n            "role": "Client",\n            "privateIPAddress": "10.1.0.1"\n        },\n        {\n            "name": "cluster01,3a326892-b4f6-41ac-b185-b57253812323,e46ae74e-1",\n            "role": "Server",\n            "privateIPAddress": "10.1.0.2"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);