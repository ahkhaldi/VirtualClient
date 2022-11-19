"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3639],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"chocolatey-package"},o="Chocolatey Package Installation",i={unversionedId:"dependencies/chocolatey-package",id:"dependencies/chocolatey-package",title:"Chocolatey Package Installation",description:"Install packages available in Chocolatey Package in Windows.",source:"@site/docs/dependencies/chocolatey-package.md",sourceDirName:"dependencies",slug:"/dependencies/chocolatey-package",permalink:"/VirtualClient/docs/dependencies/chocolatey-package",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/chocolatey-package.md",tags:[],version:"current",frontMatter:{id:"chocolatey-package"},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/VirtualClient/docs/category/dependencies"},next:{title:"Chocolatey Installation",permalink:"/VirtualClient/docs/dependencies/chocolatey"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Supported runtimes",id:"supported-runtimes",level:3}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chocolatey-package-installation"},"Chocolatey Package Installation"),(0,r.kt)("p",null,"Install packages available in Chocolatey Package in Windows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chocolatey.org/"},"Chocolatey Official Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://community.chocolatey.org/packages"},"Chocolatey Packages"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This step depends on ",(0,r.kt)("a",{parentName:"p",href:"/VirtualClient/docs/dependencies/chocolatey"},"Chocolatey Installation"),".")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PackageName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to the Chotolatey package manager installed by ",(0,r.kt)("inlineCode",{parentName:"td"},"Chocolatey Installation")," step, typically just ",(0,r.kt)("inlineCode",{parentName:"td"},"choco"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Packages"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma delimitered list of packages to be installed via Chocolatey.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Name for telemetry purpose. Does not change functionality.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"In this example, VC install cygwin and wget package via Chocolatey."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "ChocolateyPackageInstallation",\n    "Parameters": {\n    "Scenario": "InstallCygwinOnWindows",\n    "PackageName": "choco",\n    "Packages": "cygwin,wget"\n    }\n}\n')),(0,r.kt)("h3",{id:"supported-runtimes"},"Supported runtimes"),(0,r.kt)("p",null,"win-x64, win-arm64"))}d.isMDXComponent=!0}}]);