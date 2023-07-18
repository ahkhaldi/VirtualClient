"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),k=n,c=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return r?a.createElement(c,i(i({ref:t},m),{},{components:r})):a.createElement(c,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},i="Furmark",o={unversionedId:"workloads/furmark/furmark",id:"workloads/furmark/furmark",title:"Furmark",description:"FurMark is a lightweight but very intensive graphics card / GPU stress test on Windows platform. It's a quick OpenGL benchmark as well.",source:"@site/docs/workloads/furmark/furmark.md",sourceDirName:"workloads/furmark",slug:"/workloads/furmark/",permalink:"/VirtualClient/docs/workloads/furmark/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/furmark/furmark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flexible I/O Tester (FIO) Workload Profiles",permalink:"/VirtualClient/docs/workloads/fio/fio-profiles"},next:{title:"Furmark Workload Profiles",permalink:"/VirtualClient/docs/workloads/furmark/furmark-profiles"}},u={},s=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"furmark"},"Furmark"),(0,n.kt)("p",null,"FurMark is a lightweight but very intensive graphics card / GPU stress test on Windows platform. It's a quick OpenGL benchmark as well.\nFurMark is simple to use and is free. "),(0,n.kt)("p",null,"It is the popular GPU stress test utility for graphics cards (NVIDIA GeForce, AMD Radeon and Intel Arc GPUs).Currently VC supports\nrunning Furmark on AMD GPU."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://geeks3d.com/furmark/"},"Furmark website"))),(0,n.kt)("h2",{id:"what-is-being-measured"},"What is Being Measured?"),(0,n.kt)("p",null,"The Furmark workload measures FPS(Frames per second) which also gives scores by rendering a GUI which stresses out GPU to the maximum extend.\nOnly single GPU will be stressed out with Furmark. It also gives GPU power, temperature and more details about GPU."),(0,n.kt)("h2",{id:"workload-metrics"},"Workload Metrics"),(0,n.kt)("p",null,"The following metrics are examples of those captured by the Virtual Client when running the Furmark workload. This set of metrics\nwill be captured for each one of the distinct scenarios that are part of the profile (Parameters that are varied are time for\nwhich the tool is run for stressing out GPU, resolution(width and height) of the GUI that is to be rendered). "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Score"),(0,n.kt)("td",{parentName:"tr",align:null},"15863"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Furmark scores reflect GPU performance and stress levels effectively.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DurationInMs"),(0,n.kt)("td",{parentName:"tr",align:null},"60000"),(0,n.kt)("td",{parentName:"tr",align:null},"ms(milliseconds)"),(0,n.kt)("td",{parentName:"tr",align:null},"Time for which we are stressing the GPU using Furmark Tool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_AvgTemperatur"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"celsius"),(0,n.kt)("td",{parentName:"tr",align:null},"Avergae Furmark temperature output indicates GPU's heat level during stress.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_MaxTemperatur"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"celsius"),(0,n.kt)("td",{parentName:"tr",align:null},"Max Furmark temperature output indicates GPU's heat level during stress.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_AvgFPS"),(0,n.kt)("td",{parentName:"tr",align:null},"255.69696969697"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Average FPS (Frames Per Second) denotes the measure of how many frames (images) the GPU is capable of rendering and displaying per second during the benchmarking process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_MaxFPS"),(0,n.kt)("td",{parentName:"tr",align:null},"268"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Max FPS (Frames Per Second) denotes the measure of how many frames (images) the GPU is capable of rendering and displaying per second during the benchmarking process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_Vddc"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"VDDs in Furmark output represents GPU's core voltage during benchmarking.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_AvgCoreLoad"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Average Core load in Furmark output indicates GPU's utilization during benchmarking process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU1_MaxCoreLoad"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Max Core load in Furmark output indicates GPU's utilization during benchmarking process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_AvgTemperatur"),(0,n.kt)("td",{parentName:"tr",align:null},"43.6969696969697"),(0,n.kt)("td",{parentName:"tr",align:null},"celsius"),(0,n.kt)("td",{parentName:"tr",align:null},"Avergae Furmark temperature output indicates GPU's heat level during stress.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_MaxTemperatur"),(0,n.kt)("td",{parentName:"tr",align:null},"51"),(0,n.kt)("td",{parentName:"tr",align:null},"celsius"),(0,n.kt)("td",{parentName:"tr",align:null},"Max Furmark temperature output indicates GPU's heat level during stress.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_AvgFPS"),(0,n.kt)("td",{parentName:"tr",align:null},"255.69696969697"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Average FPS (Frames Per Second) denotes the measure of how many frames (images) the GPU is capable of rendering and displaying per second during the benchmarking process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_MaxFPS"),(0,n.kt)("td",{parentName:"tr",align:null},"268"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Max FPS (Frames Per Second) denotes the measure of how many frames (images) the GPU is capable of rendering and displaying per second during the benchmarking process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_Vddc"),(0,n.kt)("td",{parentName:"tr",align:null},"0.914424242424242"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"VDDs in Furmark output represents GPU's core voltage during benchmarking.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_AvgCoreLoad"),(0,n.kt)("td",{parentName:"tr",align:null},"96"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Average Core load in Furmark output indicates GPU's utilization during benchmarking process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPU2_MaxCoreLoad"),(0,n.kt)("td",{parentName:"tr",align:null},"99"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Max Core load in Furmark output indicates GPU's utilization during benchmarking process.")))))}d.isMDXComponent=!0}}]);