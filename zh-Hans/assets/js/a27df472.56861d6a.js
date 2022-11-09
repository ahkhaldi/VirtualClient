"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},l="Prime95 Workload Profiles",o={unversionedId:"workloads/prime95/Prime95Profiles",id:"workloads/prime95/Prime95Profiles",title:"Prime95 Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the",source:"@site/docs/workloads/prime95/Prime95Profiles.md",sourceDirName:"workloads/prime95",slug:"/workloads/prime95/Prime95Profiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/prime95/Prime95Profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/prime95/Prime95Profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prime95 Workload Metrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/prime95/Prime95Metrics"},next:{title:"SPECjvm Workload",permalink:"/VirtualClient/zh-Hans/docs/workloads/specjvm/"}},s={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-CPU-PRIME95.json",id:"perf-cpu-prime95json",level:3}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prime95-workload-profiles"},"Prime95 Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the\nPrime95 workload."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/workloads/prime95/"},"Workload Details")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/workloads/prime95/Prime95Metrics"},"Workload Profile Metrics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Workload Packages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Scenarios/Examples"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,a.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies\nfrom a package store. In order to download the workload packages, connection\ninformation must be supplied on the command line. See the 'Workload Packages'\ndocumentation above for details on how that works."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"perf-cpu-prime95json"},"PERF-CPU-PRIME95.json"),(0,a.kt)("p",null,"Runs the Prime95 workload which runs a continuous torture/stress test on system for given time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),"\nThe following dependencies must be met to run this workload profile."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Parameters"),"\nThe following parameters can be optionally supplied on the command line to modify the\nbehavior of the workload. See the 'Usage Scenarios/Examples' above for examples on\nhow to supply parameters to Virtual Client profiles."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Acceptable Range"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TimeInMins"),(0,a.kt)("td",{parentName:"tr",align:null},"Time (in minutes) to run Prime95 StressTest"),(0,a.kt)("td",{parentName:"tr",align:null},">0"),(0,a.kt)("td",{parentName:"tr",align:null},"60")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MinTortureFFT"),(0,a.kt)("td",{parentName:"tr",align:null},"MinTortureFFT Size passed to Prime95. This is valid only for default FFTConfiguration (0)"),(0,a.kt)("td",{parentName:"tr",align:null},"1-8192"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MaxTortureFFT"),(0,a.kt)("td",{parentName:"tr",align:null},"MaxTortureFFT Size passed to Prime95. This is valid only for default FFTConfiguration (0)"),(0,a.kt)("td",{parentName:"tr",align:null},"1-8192"),(0,a.kt)("td",{parentName:"tr",align:null},"8192")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TortureHyperthreading"),(0,a.kt)("td",{parentName:"tr",align:null},"Switch to toggle Prime95 built-in hyperthreading option. If enabled (1), number of worker threads will be halved."),(0,a.kt)("td",{parentName:"tr",align:null},"0-1"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FFTConfiguration"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets FFT Size in certain range. 0: Custom/Default Value, 1: Smallest FFTs 4K-32K, 2: Small FFTs 32K-1024K, 3: Large FFTs 2048K-8192K"),(0,a.kt)("td",{parentName:"tr",align:null},"0-3"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NumberOfThreads"),(0,a.kt)("td",{parentName:"tr",align:null},"Limits the worker threads to specified value"),(0,a.kt)("td",{parentName:"tr",align:null},"1 - Number Of Logical Cores in system"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of logical cores in system"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Workload Runtimes"),"\nThe Prime95 Workload Runtime can be set as an input parameter in Profile and commandLine. The default value is 60 minutes for a single round of tests run.\nThese timings can be used to determine minimum required runtimes for the Virtual Client in order to get results.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Usage Examples"),"\nThe following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'VirtualClient.exe --profile=PERF-CPU-PRIME95.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\nVirtualClient.exe --profile=PERF-CPU-PRIME95.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters="TimeInMins=120,,,MinTortureFFT=1024,,,MaxTortureFFT=4096,,,TortureHyperthreading=0"\nVirtualClient.exe --profile=PERF-CPU-PRIME95.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters="TimeInMins=240,,,FFTConfiguration=1"\n\n./VirtualClient --profile=PERF-CPU-PRIME95.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n./VirtualClient --profile=PERF-CPU-PRIME95.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters="TimeInMins=120,,,MinTortureFFT=1024,,,MaxTortureFFT=4096,,,TortureHyperthreading=0"\n')))}u.isMDXComponent=!0}}]);