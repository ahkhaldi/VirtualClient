"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={},o="LMbench Workload",i={unversionedId:"workloads/lmbench/LMbench",id:"workloads/lmbench/LMbench",title:"LMbench Workload",description:"LMbench (version 3) is a suite of simple, portable benchmarks ANSI/C microbenchmarks for UNIX/POSIX. In general, it measures two key",source:"@site/docs/workloads/lmbench/LMbench.md",sourceDirName:"workloads/lmbench",slug:"/workloads/lmbench/",permalink:"/VirtualClient/docs/workloads/lmbench/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/lmbench/LMbench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HPCG Workload Profiles",permalink:"/VirtualClient/docs/workloads/hpcg/HpcgProfiles"},next:{title:"LMbench Workload Metrics",permalink:"/VirtualClient/docs/workloads/lmbench/LMbenchMetrics"}},s={},m=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"System Requirement",id:"system-requirement",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lmbench-workload"},"LMbench Workload"),(0,a.kt)("p",null,"LMbench (version 3) is a suite of simple, portable benchmarks ANSI/C microbenchmarks for UNIX/POSIX. In general, it measures two key\nfeatures: component bandwidth and latency. LMbench is intended to provide system developers insights into basic performance and costs\nof key system operations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.bitmover.com/lmbench/whatis_lmbench.html"},"LMbench Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.bitmover.com/lmbench/man_lmbench.html"},"LMbench Manual"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,a.kt)("p",null,"The following performance analysis tests are ran as part of the LMbench workload. Note that although LMbench runs benchmarks covering\nvarious aspects of the system, the memory performance benchmarks are the ones that are most interesting for net impact analysis."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.bitmover.com/lmbench/man_lmbench.html"},"http://www.bitmover.com/lmbench/man_lmbench.html")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bandwidth Benchmark"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cached file read"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures times for reading and summing a file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Memory copy (bcopy)"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures memory copy operation speeds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Memory read"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures memory read operation speeds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Memory write"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures memory write operation speeds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pipe"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures data movement times through named pipes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures data movement times through TCP/IP sockets")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Latency Benchmark"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Context switching"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures context switching time for processes on the system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Networking: connection establishment, pipe, TCP, UDP, and RPC hot potato"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures inter-process connection latency via communications sockets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File system creates and deletes"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures file system create/delete performance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Process creation"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures the time the system takes to create new processes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System call overhead"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures the time it takes to make simple operating system calls")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Memory read latency"),(0,a.kt)("td",{parentName:"tr",align:null},"Measures memory read latency")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"system-requirement"},"System Requirement"),(0,a.kt)("p",null,"The following section provides special considerations required for the system on which the LMbench workload will be run."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Physical Memory = 16 GB minimum  "),(0,a.kt)("li",{parentName:"ul"},"Disk Space = At least 20 MB of free space on the OS disk")),(0,a.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux x64"),(0,a.kt)("li",{parentName:"ul"},"Linux arm64")),(0,a.kt)("h3",{id:"package-dependencies"},"Package Dependencies"),(0,a.kt)("p",null,"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the LMbench workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gcc"),(0,a.kt)("li",{parentName:"ul"},"make")))}p.isMDXComponent=!0}}]);