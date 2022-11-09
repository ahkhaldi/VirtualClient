"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6693],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(n),k=a,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(c,i(i({ref:e},u),{},{components:n})):r.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5823:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={},i="OpenFOAM Workload Metrics",o={unversionedId:"workloads/openfoam/OpenFOAMMetrics",id:"workloads/openfoam/OpenFOAMMetrics",title:"OpenFOAM Workload Metrics",description:"The following document illustrates the type of results that are emitted by the OpenFOAM workload and captured by the",source:"@site/docs/workloads/openfoam/OpenFOAMMetrics.md",sourceDirName:"workloads/openfoam",slug:"/workloads/openfoam/OpenFOAMMetrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/openfoam/OpenFOAMMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/openfoam/OpenFOAMMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenFOAM",permalink:"/VirtualClient/zh-Hans/docs/workloads/openfoam/"},next:{title:"OpenFOAM Workload Profiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/openfoam/OpenFOAMProfiles"}},p={},m=[{value:"System Metrics",id:"system-metrics",level:3},{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],u={toc:m};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openfoam-workload-metrics"},"OpenFOAM Workload Metrics"),(0,a.kt)("p",null,"The following document illustrates the type of results that are emitted by the OpenFOAM workload and captured by the\nVirtual Client for net impact analysis."),(0,a.kt)("h3",{id:"system-metrics"},"System Metrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./PerformanceCounterMetrics.md"},"Performance Counters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./PowerMetrics.md"},"Power/Temperature Measurements"))),(0,a.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,a.kt)("p",null,"The following metrics are emitted by the OpenFOAM workload itself."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,a.kt)("th",{parentName:"tr",align:null},"Test Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-x64)"),(0,a.kt)("td",{parentName:"tr",align:null},"pitzDaily"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"1575.48"),(0,a.kt)("td",{parentName:"tr",align:null},"1600.37"),(0,a.kt)("td",{parentName:"tr",align:null},"1690.7"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-x64)"),(0,a.kt)("td",{parentName:"tr",align:null},"airFoil2D"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"2413.6"),(0,a.kt)("td",{parentName:"tr",align:null},"2435.79"),(0,a.kt)("td",{parentName:"tr",align:null},"2420.9"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-x64)"),(0,a.kt)("td",{parentName:"tr",align:null},"elbow"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"17518.9"),(0,a.kt)("td",{parentName:"tr",align:null},"17605.5"),(0,a.kt)("td",{parentName:"tr",align:null},"16556.7"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-x64)"),(0,a.kt)("td",{parentName:"tr",align:null},"motorbike"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"17.70"),(0,a.kt)("td",{parentName:"tr",align:null},"17.71"),(0,a.kt)("td",{parentName:"tr",align:null},"17.72"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-x64)"),(0,a.kt)("td",{parentName:"tr",align:null},"lockExchange"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"32.25"),(0,a.kt)("td",{parentName:"tr",align:null},"32.27"),(0,a.kt)("td",{parentName:"tr",align:null},"32.30"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-arm64)"),(0,a.kt)("td",{parentName:"tr",align:null},"pitzDaily"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"1111.28"),(0,a.kt)("td",{parentName:"tr",align:null},"1132.17"),(0,a.kt)("td",{parentName:"tr",align:null},"1120.7"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-arm64)"),(0,a.kt)("td",{parentName:"tr",align:null},"airFoil2D"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"2000.6"),(0,a.kt)("td",{parentName:"tr",align:null},"1936.79"),(0,a.kt)("td",{parentName:"tr",align:null},"1972.9"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-arm64)"),(0,a.kt)("td",{parentName:"tr",align:null},"elbow"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"16216.9"),(0,a.kt)("td",{parentName:"tr",align:null},"16238.5"),(0,a.kt)("td",{parentName:"tr",align:null},"16280.7"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-OPENFOAM.json (linux-arm64)"),(0,a.kt)("td",{parentName:"tr",align:null},"lockExchange"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,a.kt)("td",{parentName:"tr",align:null},"38.6"),(0,a.kt)("td",{parentName:"tr",align:null},"38.8"),(0,a.kt)("td",{parentName:"tr",align:null},"38.7"),(0,a.kt)("td",{parentName:"tr",align:null},"itrs/min")))))}d.isMDXComponent=!0}}]);