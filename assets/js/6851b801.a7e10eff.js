"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="OpenSSL Workload Profiles",i={unversionedId:"workloads/openssl/OpenSSLProfiles",id:"workloads/openssl/OpenSSLProfiles",title:"OpenSSL Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the OpenSSL speed workload.",source:"@site/docs/workloads/openssl/OpenSSLProfiles.md",sourceDirName:"workloads/openssl",slug:"/workloads/openssl/OpenSSLProfiles",permalink:"/VirtualClient/docs/workloads/openssl/OpenSSLProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/openssl/OpenSSLProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenSSL Workload Metrics",permalink:"/VirtualClient/docs/workloads/openssl/OpenSSLMetrics"},next:{title:"REDIS Workload",permalink:"/VirtualClient/docs/workloads/redis/"}},s={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-CPU-OPENSSL.json",id:"perf-cpu-openssljson",level:3},{value:"Resources",id:"resources",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openssl-workload-profiles"},"OpenSSL Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the OpenSSL speed workload.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/openssl/"},"Workload Details"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/openssl/OpenSSLMetrics"},"Workload Profile Metrics"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Workload Packages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Scenarios/Examples"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,a.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information\nmust be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"perf-cpu-openssljson"},"PERF-CPU-OPENSSL.json"),(0,a.kt)("p",null,"Runs a CPU-intensive workload using the OpenSSL speed toolset to test the performance of the CPU in processing cryptography/encryption algorithms.\nThis profile is designed to identify general/broad regressions when compared against a baseline. OpenSSL is an open source industry standard\ntransport layer security (TLS/SSL) toolset."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 22"),(0,a.kt)("li",{parentName:"ul"},"Windows 10"),(0,a.kt)("li",{parentName:"ul"},"Windows 11"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2019")))),(0,a.kt)("p",null,"Note on Multi-Threaded Execution\nAlthough the toolset can be used on Windows, the OpenSSL speed workload was designed with Unix as a foundation. Multi-threaded/parallel testing\nis not supported for Windows builds of OpenSSL 3.0.  This means that the OpenSSL speed command will not heavily exercise the CPU resources on the\nsystem. It will use a single core/vCPU to run each test. With Linux builds, the toolset can be configured to use ALL cores/vCPUs available on the\nsystem in-parallel."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),(0,a.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scenarios"),(0,a.kt)("br",{parentName:"p"}),"\n","The following scenarios are covered by this workload profile."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MD5 algorithm"),(0,a.kt)("li",{parentName:"ul"},"SHA1 algorithm"),(0,a.kt)("li",{parentName:"ul"},"SHA256 algorithm"),(0,a.kt)("li",{parentName:"ul"},"SHA512 algorithm"),(0,a.kt)("li",{parentName:"ul"},"DES-EDE3 algorithm"),(0,a.kt)("li",{parentName:"ul"},"AES-128-CBC algorithm"),(0,a.kt)("li",{parentName:"ul"},"AES-192-CBC algorithm"),(0,a.kt)("li",{parentName:"ul"},"AES-256-CBC algorithm"),(0,a.kt)("li",{parentName:"ul"},"CAMELLIA-128-CBC algorithm"),(0,a.kt)("li",{parentName:"ul"},"CAMELLIA-192-CBC algorithm"),(0,a.kt)("li",{parentName:"ul"},"CAMELLIA-256-CBC algorithm")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,a.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs.\nIt is practical to allow for 1 to 2 hours extra runtime to ensure the tests can complete full test runs."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Expected Runtime (2-core/vCPU VM) = 2 hours"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Usage Examples"),(0,a.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'./VirtualClient --profile=PERF-CPU-OPENSSL.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\n// Certain scenarios only\n./VirtualClient --profile=PERF-CPU-OPENSSL.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --scenarios=SHA1,SHA192,SHA256\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}m.isMDXComponent=!0}}]);