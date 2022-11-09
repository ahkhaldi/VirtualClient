"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="Compression Workloads",o={unversionedId:"workloads/compression/Compression",id:"workloads/compression/Compression",title:"Compression Workloads",description:"Virtual Client host different types of compression and decompression workloads which are:",source:"@site/docs/workloads/compression/Compression.md",sourceDirName:"workloads/compression",slug:"/workloads/compression/",permalink:"/VirtualClient/docs/workloads/compression/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/compression/Compression.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AspNetBench Workload Profiles",permalink:"/VirtualClient/docs/workloads/aspnetbench/AspNetBenchProfiles"},next:{title:"Compression/Decompression Workloads Metrics",permalink:"/VirtualClient/docs/workloads/compression/CompressionMetrics"}},p={},s=[{value:"Documentation",id:"documentation",level:3},{value:"Package Details",id:"package-details",level:3},{value:"Supported Platforms and Architectures",id:"supported-platforms-and-architectures",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3},{value:"Workload Usage",id:"workload-usage",level:3},{value:"What is Being Tested?",id:"what-is-being-tested",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compression-workloads"},"Compression Workloads"),(0,r.kt)("p",null,"Virtual Client host different types of compression and decompression workloads which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"7zip"),(0,r.kt)("li",{parentName:"ul"},"Gzip"),(0,r.kt)("li",{parentName:"ul"},"Lzbench"),(0,r.kt)("li",{parentName:"ul"},"Pbzip2")),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Lzbench.md"},"Lzbench")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/7zip.md"},"7zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Gzip.md"},"Gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Pbzip2.md"},"Pbzip2"))),(0,r.kt)("h3",{id:"package-details"},"Package Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/DependencyPackages.md"},"Workload Package Details"))),(0,r.kt)("h3",{id:"supported-platforms-and-architectures"},"Supported Platforms and Architectures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"),(0,r.kt)("li",{parentName:"ul"},"win-x64"),(0,r.kt)("li",{parentName:"ul"},"win-arm64")),(0,r.kt)("h3",{id:"package-dependencies"},"Package Dependencies"),(0,r.kt)("p",null,"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the Lzbench workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gcc"),(0,r.kt)("li",{parentName:"ul"},"make"),(0,r.kt)("li",{parentName:"ul"},"g++"),(0,r.kt)("li",{parentName:"ul"},"unzip"),(0,r.kt)("li",{parentName:"ul"},"pbzip2"),(0,r.kt)("li",{parentName:"ul"},"gzip")),(0,r.kt)("h3",{id:"workload-usage"},"Workload Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Lzbench.md"},"Lzbench")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/7zip.md"},"7zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Gzip.md"},"Gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Pbzip2.md"},"Pbzip2"))),(0,r.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lzbench",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lzbench is used to measure performance in terms of compression speed, decompression speed and ratio of compressed size and original size. Below are the metrics measured by Lzbench Workload.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compression Speed"),(0,r.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decompression Speed"),(0,r.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gzip",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gzip is used to measure performance in terms of ReductionRatio. Below are the metrics measured by Gzip Workload.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReductionRatio"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"7zip ",(0,r.kt)("br",null),(0,r.kt)("br",null),"7zip is used to measure performance in terms of compressionTime, and ratio of compressed size and original size. Below are the metrics measured by 7zip Workload.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pbzip2 ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Pbzip2 is used to measure performance in terms of compressionTime, and ratio of compressed size and original size in case of compression and ratio of decompressed size and original size in case of compression. Below are the metrics measured by Pbzip2 Workload.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decompressed size and Original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/inikep/lzbench"},"Lzbench github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://compression.ca/pbzip2/"},"Pbzip2 github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gzip.org/"},"Gzip github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.7-zip.org/"},"7zip"))))}u.isMDXComponent=!0}}]);