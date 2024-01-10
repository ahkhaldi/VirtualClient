"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[857],{624:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(5893),t=r(3905);const s={},l="SPECviewperf Workload Profiles",o={id:"workloads/specview/specview-profiles",title:"SPECviewperf Workload Profiles",description:"The following profile runs the SPECviewperf Workloads.",source:"@site/docs/workloads/specview/specview-profiles.md",sourceDirName:"workloads/specview",slug:"/workloads/specview/specview-profiles",permalink:"/VirtualClient/docs/workloads/specview/specview-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/specview/specview-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPECviewperf Benchmark",permalink:"/VirtualClient/docs/workloads/specview/"},next:{title:"Stress-ng",permalink:"/VirtualClient/docs/workloads/stress-ng/"}},c={},a=[{value:"PERF-GPU-SPECVIEW-AMD.json",id:"perf-gpu-specview-amdjson",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"specviewperf-workload-profiles",children:"SPECviewperf Workload Profiles"}),"\n",(0,i.jsx)(n.p,{children:"The following profile runs the SPECviewperf Workloads."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/VirtualClient/docs/workloads/specview/",children:"Workload Details"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"perf-gpu-specview-amdjson",children:"PERF-GPU-SPECVIEW-AMD.json"}),"\n",(0,i.jsx)(n.p,{children:"Runs the stock SPECviewperf Workloads."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-GPU-SPECVIEW-AMD.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"win-x64"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dependencies"}),(0,i.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Profile Parameters"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Purpose"}),(0,i.jsx)(n.th,{children:"Default Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GpuModel"}),(0,i.jsx)(n.td,{children:"Required. Specify which GPU driver should be installed. Currently supports [AMD v620, AMD mi25]"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Viewsets"}),(0,i.jsxs)(n.td,{children:["Optional. Specify which particular benchmarks should be run. See the list of viewsets in the ",(0,i.jsx)(n.a,{href:"https://gwpg.spec.org/benchmarks/benchmark/specviewperf-2020-v3-1/",children:"Workload Details"})," section."]}),(0,i.jsx)(n.td,{children:'"3dsmax,catia"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PsExecSession"}),(0,i.jsx)(n.td,{children:"Optional. If specified, specviewperf will be started by PsExec in the specified session."}),(0,i.jsx)(n.td,{children:"-1, specviewperf runs in the current session without psExec."})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Profile Runtimes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The SPECviewperf package zip file is around 30GB. Downloading and extracting this file take about 30 minutes to complete."}),"\n",(0,i.jsx)(n.li,{children:"Each SPECviewperf viewset takes about 5 min to complete on a machine with a single AMD v620 GPU. Running all eight viewsets takes about 40 minutes to complete."}),"\n",(0,i.jsx)(n.li,{children:"The exact numbers may vary depending on the system and the internet performance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage Examples"}),(0,i.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\nVirtualClient.exe --profile=PERF-GPU-SPECVIEW-AMD.json --pm="GpuModel=v620" --system=Demo --packageStore="{BlobConnectionString|SAS Uri}"\n\n# Override the profile default parameters to include all viewsets\nVirtualClient.exe --profile=PERF-GPU-SPECVIEW-AMD.json --pm="GpuModel=v620,,,Viewset=3dsmax,catia,creo,energy,maya,medical,snx,sw" --system=Demo --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>a});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=i.createContext({}),a=function(e){var n=i.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=a(r),u=t,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||s;return r?i.createElement(f,l(l({ref:n},p),{},{components:r})):i.createElement(f,l({ref:n},p))}));p.displayName="MDXCreateElement"}}]);