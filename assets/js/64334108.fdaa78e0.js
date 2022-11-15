"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8872],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>k});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),k=n,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return t?a.createElement(d,l(l({ref:r},m),{},{components:t})):a.createElement(d,l({ref:r},m))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2311:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={},l="CoreMark Workload Profiles",i={unversionedId:"workloads/coremark/coremark-profiles",id:"workloads/coremark/coremark-profiles",title:"CoreMark Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the CoreMark workload.",source:"@site/docs/workloads/coremark/coremark-profiles.md",sourceDirName:"workloads/coremark",slug:"/workloads/coremark/coremark-profiles",permalink:"/VirtualClient/docs/workloads/coremark/coremark-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/coremark/coremark-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CoreMark Workload Metrics",permalink:"/VirtualClient/docs/workloads/coremark/coremark-metrics"},next:{title:"DeathStarBench",permalink:"/VirtualClient/docs/workloads/deathstarbench/"}},s={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-CPU-COREMARK.json",id:"perf-cpu-coremarkjson",level:3},{value:"Resources",id:"resources",level:3}],m={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coremark-workload-profiles"},"CoreMark Workload Profiles"),(0,n.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the CoreMark workload.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/coremark/"},"Workload Details"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/coremark/coremark-metrics"},"Workload Profile Metrics"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,n.kt)("p",null,"CoreMark workload profiles have no dependencies on a package store and so this information is not required on the command line for the profiles\nin the sections below."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"perf-cpu-coremarkjson"},"PERF-CPU-COREMARK.json"),(0,n.kt)("p",null,"Runs a CPU-intensive workload using the CoreMark toolset to test the performance of the CPU. This profile is designed to identify general/broad regressions when\ncompared against a baseline. CoreMark is an industry standard benchmarking toolset."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linux-x64"),(0,n.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 22"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Compilers"),(0,n.kt)("br",{parentName:"p"}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GCC Compiler Versions = 8, 9, 10"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,n.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CompilerName"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. The name of the compiler to use for compiling CoreMark on the system."),(0,n.kt)("td",{parentName:"tr",align:null},"gcc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CompilerVersion"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. The version of the compiler to use."),(0,n.kt)("td",{parentName:"tr",align:null},"10")))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,n.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs.\nIt is practical to allow for 1 to 2 hours extra runtime to ensure the tests can complete full test runs."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expected Runtime on Linux systems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(2-core/vCPU VM) = 1 - 2 minutes"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Usage Examples"),(0,n.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./VirtualClient --profile=PERF-CPU-COREMARK.json --system=Azure --timeout=1440\n\n # Use a different GCC compiler version\n./VirtualClient --profile=PERF-CPU-COREMARK.json --system=Azure --timeout=1440 --parameters=CompilerVersion=9\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}u.isMDXComponent=!0}}]);