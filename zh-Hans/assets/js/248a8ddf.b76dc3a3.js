"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3070],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),s=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=s(r),m=n,c=u["".concat(o,".").concat(m)]||u[m]||k[m]||i;return r?a.createElement(c,l(l({ref:e},p),{},{components:r})):a.createElement(c,l({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:n,l[1]=d;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2987:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},l="DiskSpd",d={unversionedId:"workloads/diskspd/DiskSpd",id:"workloads/diskspd/DiskSpd",title:"DiskSpd",description:"DiskSpd a Microsoft toolset designed to simulate different I/O workload patterns. It allows us to quickly define and run workloads, and reports a variety",source:"@site/docs/workloads/diskspd/DiskSpd.md",sourceDirName:"workloads/diskspd",slug:"/workloads/diskspd/",permalink:"/VirtualClient/zh-Hans/docs/workloads/diskspd/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/diskspd/DiskSpd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeathStarBench Workload Profiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/deathstarbench/DeathStarBenchProfiles"},next:{title:"DiskSpd Workload Metrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/diskspd/DiskSpdMetrics"}},o={},s=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Command Line Examples",id:"command-line-examples",level:3},{value:"Resources",id:"resources",level:3}],p={toc:s};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"diskspd"},"DiskSpd"),(0,n.kt)("p",null,"DiskSpd a Microsoft toolset designed to simulate different I/O workload patterns. It allows us to quickly define and run workloads, and reports a variety\nof metrics about each run. This allows us to compare results under different conditions, such as different hardware and firmware configurations, with\nworkloads that reflect production workloads. "),(0,n.kt)("p",null,"The workload enables the ability to test various I/O scenarios that represent real-life usage patterns on computer systems. For example, it\nenables testing sequential read and write operations as well as random read and write operations. It also enables the ability to test single-threaded\nvs. multi-threaded I/O operations as well as the ability to control I/O queue depths and whether hardware caches should be used."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/diskspd/blob/master/README.md"},"DiskSpd Documentation"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,n.kt)("p",null,"The following metrics are captured from the results of the DiskSpd workload."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disk Operation Bandwidth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disk I/O Operations/sec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disk Operation Latencies"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Total number of bytes processed for all operations (read and write) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total IO operations"),(0,n.kt)("td",{parentName:"tr",align:null},"Total number of disk I/O operations processed for all operations (read and write) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total throughput"),(0,n.kt)("td",{parentName:"tr",align:null},"The total throughput (in Mebibytes per second) for all operations (read and write) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total iops"),(0,n.kt)("td",{parentName:"tr",align:null},"The disk I/O operations per second (IOPS) during the DiskSpd test (read and write).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"avg. latency"),(0,n.kt)("td",{parentName:"tr",align:null},"The average latency for all disk operations (read and write) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"iops stdev"),(0,n.kt)("td",{parentName:"tr",align:null},"The standard deviation for I/O operations per second measurements during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"latency stdev"),(0,n.kt)("td",{parentName:"tr",align:null},"The standard deviation for disk operation latency during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read total bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of bytes read during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read IO operations"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of disk read I/O operations process during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read throughput"),(0,n.kt)("td",{parentName:"tr",align:null},"The total read throughput (in Mebibytes per second) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read iops"),(0,n.kt)("td",{parentName:"tr",align:null},"The disk read I/O operations per second (IOPS) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read avg. latency"),(0,n.kt)("td",{parentName:"tr",align:null},"The average disk read latency during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read iops stdev"),(0,n.kt)("td",{parentName:"tr",align:null},"The standard deviation for disk read I/O operations per second measurements during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read latency stdev"),(0,n.kt)("td",{parentName:"tr",align:null},"The standard deviation for disk read operation latency during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write total bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of bytes written during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write IO operations"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of disk write I/O operations process during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write throughput"),(0,n.kt)("td",{parentName:"tr",align:null},"The total write throughput (in Mebibytes per second) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write iops"),(0,n.kt)("td",{parentName:"tr",align:null},"The disk write I/O operations per second (IOPS) during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write avg. latency"),(0,n.kt)("td",{parentName:"tr",align:null},"The average disk write latency during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write iops stdev"),(0,n.kt)("td",{parentName:"tr",align:null},"The standard deviation for disk write I/O operations per second measurements during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write latency stdev"),(0,n.kt)("td",{parentName:"tr",align:null},"The standard deviation for disk write operation latency during the DiskSpd test.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read latency/operation(P50)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 50th percentile latency for disk read operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write latency/operation(P50)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 50th percentile latency for disk write operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total latency/operation(P50)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 50th percentile latency for all disk operations (read and write) during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read latency/operation(P75)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 75th percentile latency for disk read operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write latency/operation(P75)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 75th percentile latency for disk write operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total latency/operation(P75)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 75th percentile latency for all disk operations (read and write) during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read latency/operation(P90)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 90th percentile latency for disk read operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write latency/operation(P90)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 90th percentile latency for disk write operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total latency/operation(P90)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 90th percentile latency for all disk operations (read and write) during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read latency/operation(P95)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 95th percentile latency for disk read operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write latency/operation(P95)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 95th percentile latency for disk write operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total latency/operation(P95)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 95th percentile latency for all disk operations (read and write) during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read latency/operation(P99)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 99th percentile latency for disk read operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"write latency/operation(P99)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 99th percentile latency for disk write operations during the DiskSpd test")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total latency/operation(P99)"),(0,n.kt)("td",{parentName:"tr",align:null},"The 99th percentile latency for all disk operations (read and write) during the DiskSpd test")))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows x64"),(0,n.kt)("li",{parentName:"ul"},"Windows arm64")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"command-line-examples"},"Command Line Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// Random Write\n// 4GB test file, 4K block size, 1 thread, I/O depth = 1, 100% write, test runtime = 480 seconds, 15 second warmup\nDiskSpd.exe -c4G -b4K -r4K -t1 -o1 -w100 -d480 -Suw -W15 -D -L -Rtext testfile.dat\n\n// Random Write\n// 250MB test file, 64K block size, 32 threads, I/O depth = 16, 100% write, test runtime = 480 seconds, 15 second warmup\nDiskSpd.exe -c250M -b64K -r64K -t32 -o16 -w100 -d480 -Suw -W15 -D -L -Rtext testfile.dat\n\n// Random Read\n// 4GB test file, 4K block size, 1 thread, I/O depth = 1, 100% read, test runtime = 480 seconds, 15 second warmup\nDiskSpd.exe -c4G -b4K -r4K -t1 -o1 -w0 -d480 -Suw -W15 -D -L -Rtext\n\n// Random Read/Write: 4GB test file, 4K block size, 1 thread, I/O depth = 1, 30% write/70% read, test runtime = 480 seconds, 15 second warmup\nDiskSpd.exe -c4G -b4K -r4K -t1 -o1 -w30 -d480 -Suw -W15 -D -L -Rtext testfile.dat\n\n// Sequential Read/Write: 4GB test file, 4K block size, 1 thread, I/O depth = 1, 30% write/70% read, test runtime = 480 seconds, 15 second warmup\nDiskSpd.exe -c4G -b4K -si4K -t1 -o1 -w30 -d480 -Suw -W15 -D -L -Rtext testfile.dat\n\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure-stack/hci/manage/diskspd-overview"},"Azure Stack: DiskSpd Overview"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/diskspd/wiki/Command-line-and-parameters"},"DiskSpd Command Line Parameters"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://storageioblog.com/server-storage-io-benchmarking-tools-microsoft-diskspd-part/"},"Server Storage I/O Benchmark Tools: Microsoft Diskspd (Part I)"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://storageioblog.com/microsoft-diskspd-part-ii-server-storage-io-benchmark-tools/"},"Server Storage I/O Benchmark Tools: Microsoft Diskspd (Part II)"))))}k.isMDXComponent=!0}}]);