"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[40],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=p(r),c=a,d=k["".concat(s,".").concat(c)]||k[c]||m[c]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Network Ping/ICMP Workload Profiles",l={unversionedId:"workloads/network-ping/NetworkPingProfiles",id:"workloads/network-ping/NetworkPingProfiles",title:"Network Ping/ICMP Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using basic network pings/ICMP protocol.",source:"@site/docs/workloads/network-ping/NetworkPingProfiles.md",sourceDirName:"workloads/network-ping",slug:"/workloads/network-ping/NetworkPingProfiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/network-ping/NetworkPingProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/network-ping/NetworkPingProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Ping/ICMP Workload Metrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/network-ping/NetworkPingMetrics"},next:{title:"OpenFOAM",permalink:"/VirtualClient/zh-Hans/docs/workloads/openfoam/"}},s={},p=[{value:"PERF-NETWORK-PING.json",id:"perf-network-pingjson",level:3},{value:"Resources",id:"resources",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-pingicmp-workload-profiles"},"Network Ping/ICMP Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using basic network pings/ICMP protocol.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./NetworkPing.md"},"Workload Details"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/workloads/network-ping/NetworkPingMetrics"},"Workload Profile Metrics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Scenarios/Examples"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"perf-network-pingjson"},"PERF-NETWORK-PING.json"),(0,a.kt)("p",null,"Runs a basis network ping test given an IP address target. Note that the target must have the ICMP protocol enabled in order to\nrespond to network ping requests."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 22"),(0,a.kt)("li",{parentName:"ul"},"Windows 10"),(0,a.kt)("li",{parentName:"ul"},"Windows 11"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2019"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),(0,a.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The IP address specified on the command line (see 'Parameters' below) must be related to a valid system/node/VM that is online with firewall open\nto receive ICMP ping requests."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,a.kt)("br",{parentName:"p"}),"\n","The following parameters can be supplied on the command line. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IPAddress"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. The IP address of the target endpoint to which to send network pings and measure round trip response times. This is a required parameter for this profile execution."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,a.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Expected Runtime (2-core/vCPU VM) = 5 - 10 minutes"),(0,a.kt)("li",{parentName:"ul"},"Expected Runtime (4-core/vCPU VM) = 5 - 10 minutes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Usage Examples"),(0,a.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"VirtualClient.exe --profile=PERF-NETWORK-PING.json --system=Azure --timeout=1440 --parameters=IPAddress=1.2.3.4\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}m.isMDXComponent=!0}}]);