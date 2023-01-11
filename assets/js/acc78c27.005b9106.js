"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Monitor Profiles",l={unversionedId:"monitors/0200-monitor-profiles",id:"monitors/0200-monitor-profiles",title:"Monitor Profiles",description:"The following sections describe the various monitor profiles that are available with the Virtual Client application. Monitor profiles are used to",source:"@site/docs/monitors/0200-monitor-profiles.md",sourceDirName:"monitors",slug:"/monitors/0200-monitor-profiles",permalink:"/VirtualClient/docs/monitors/0200-monitor-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/monitors/0200-monitor-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance Counter Metrics",permalink:"/VirtualClient/docs/monitors/0100-perf-counter-metrics"},next:{title:"nvidia-smi",permalink:"/VirtualClient/docs/monitors/0300-nvidia-smi"}},s={},p=[{value:"MONITORS-NONE.json",id:"monitors-nonejson",level:2},{value:"MONITORS-DEFAULT.json",id:"monitors-defaultjson",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitor-profiles"},"Monitor Profiles"),(0,o.kt)("p",null,"The following sections describe the various monitor profiles that are available with the Virtual Client application. Monitor profiles are used to\ndefine the background monitors that will run on the system. Monitors are often ran in conjunction with workloads (defined in workload profiles) in\norder to capture performance and reliability information from the system while workloads are running."),(0,o.kt)("h2",{id:"monitors-nonejson"},"MONITORS-NONE.json"),(0,o.kt)("p",null,"Instructs the Virtual Client to not run any monitors at all."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'// Do not run any background monitors.\nVirtualClient.exe --profile=PERF-CPU-OPENSSL.json --profile=MONITORS-NONE.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')),(0,o.kt)("h2",{id:"monitors-defaultjson"},"MONITORS-DEFAULT.json"),(0,o.kt)("p",null,"The default monitor profile for the Virtual Client. This profile captures performance counters on the system using one or more different specialized\ntoolsets. This monitor profile will be used when no other monitor profiles are specified on the command line."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supported Platform/Architectures"),(0,o.kt)("br",{parentName:"p"}),"\n","Counters captured on Linux systems using Atop application. Counters captured on Windows systems using the .NET SDK."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"linux-x64"),(0,o.kt)("li",{parentName:"ul"},"linux-arm64"),(0,o.kt)("li",{parentName:"ul"},"win-x64"),(0,o.kt)("li",{parentName:"ul"},"win-arm64"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 22"),(0,o.kt)("li",{parentName:"ul"},"Windows 10"),(0,o.kt)("li",{parentName:"ul"},"Windows 11"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,o.kt)("li",{parentName:"ul"},"Windows Server 2019"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dependencies"),"  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Linux systems must have an internet connection in order to install the Atop application if not already installed on the system."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scenarios"),"  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/monitors/0100-perf-counter-metrics"},"Performance Counters")),(0,o.kt)("li",{parentName:"ul"},"Captures performance counters on Linux systems using the ",(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/monitors/0001-atop"},"Atop")," application."),(0,o.kt)("li",{parentName:"ul"},"Captures performance counters on Windows systems using the .NET SDK."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,o.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to change this default behavior."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A description of the purpose of the monitor within the overall profile workflow."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MonitorFrequency"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Defines the frequency (timespan) at which performance counters will be captured/emitted (e.g. 00:01:00)."),(0,o.kt)("td",{parentName:"tr",align:null},"00:05:00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MonitorWarmupPeriod"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Defines a period of time (timespan) to wait before starting to track/capture performance counters (e.g. 00:03:00). This allows the system to get to a more typical operational state and generally results better representation for the counters captured."),(0,o.kt)("td",{parentName:"tr",align:null},"00:05:00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MetricFilter"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. A comma-delimited list of performance counter names to capture. The default behavior is to capture/emit all performance counters (e.g. \\Processor Information(_Total)\\% System Time,\\Processor Information(_Total)\\% User Time). This allows the profile author to focus on a smaller/specific subset of the counters. This is typically used when a lower monitor frequency is required for higher sample precision to keep the size of the data sets emitted by the Virtual Client to a minimum."),(0,o.kt)("td",{parentName:"tr",align:null}))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,o.kt)("br",{parentName:"p"}),"\n","1 iteration of the profile = ~5 mins. The profile will begin capturing and emitting information within 5 minutes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Usage Examples"),(0,o.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Run the monitoring facilities only.\nVirtualClient.exe --profile=MONITORS-DEFAULT.json\n\n# Runs the default monitor profile.\nVirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# Monitor profile explicitly defined.\nVirtualClient.exe --profile=PERF-CPU-OPENSSL.json --profile=MONITORS-DEFAULT.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\n')))))}u.isMDXComponent=!0}}]);