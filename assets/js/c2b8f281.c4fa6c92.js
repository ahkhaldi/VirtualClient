"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7430],{3569:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=r(5893),i=r(3905);const o={},s="LMbench Workload Profiles",l={id:"workloads/lmbench/lmbench-profiles",title:"LMbench Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the LMbench workload.",source:"@site/docs/workloads/lmbench/lmbench-profiles.md",sourceDirName:"workloads/lmbench",slug:"/workloads/lmbench/lmbench-profiles",permalink:"/VirtualClient/docs/workloads/lmbench/lmbench-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/lmbench/lmbench-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LMbench",permalink:"/VirtualClient/docs/workloads/lmbench/"},next:{title:"Memcached",permalink:"/VirtualClient/docs/workloads/memcached/"}},c={},a=[{value:"PERF-MEM-LMBENCH.json",id:"perf-mem-lmbenchjson",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lmbench-workload-profiles",children:"LMbench Workload Profiles"}),"\n",(0,t.jsx)(n.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the LMbench workload."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/VirtualClient/docs/workloads/lmbench/",children:"Workload Details"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"perf-mem-lmbenchjson",children:"PERF-MEM-LMBENCH.json"}),"\n",(0,t.jsx)(n.p,{children:"Runs a memory-intensive workload using the LMbench toolset to test the performance of the system RAM/memory. This profile is designed to identify general/broad\nregressions when compared against a baseline."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-MEM-LMBENCH.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"linux-x64"}),"\n",(0,t.jsx)(n.li,{children:"linux-arm64"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dependencies"}),(0,t.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Profile Parameters"}),(0,t.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Purpose"}),(0,t.jsx)(n.th,{children:"Default value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CompilerName"}),(0,t.jsx)(n.td,{children:"Optional. The name of the compiler to use for compiling CoreMark on the system."}),(0,t.jsx)(n.td,{children:"gcc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CompilerVersion"}),(0,t.jsx)(n.td,{children:"Optional. The version of the compiler to use."}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CompilerParameters"}),(0,t.jsx)(n.td,{children:"Optional. The parameters that will be passed to the compiler."}),(0,t.jsx)(n.td,{children:"-O3 $ARRAY_FLAG -fopenmp -march=native -DNTIMES=5000"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Profile Runtimes"}),(0,t.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Usage Examples"}),(0,t.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\nVirtualClient.exe --profile=PERF-MEM-LMBENCH.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>a});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),a=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=a(r),m=i,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?t.createElement(u,s(s({ref:n},h),{},{components:r})):t.createElement(u,s({ref:n},h))}));h.displayName="MDXCreateElement"}}]);