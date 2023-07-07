"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i="Install .NET SDK",o={unversionedId:"dependencies/0051-install-dotnet-sdk",id:"dependencies/0051-install-dotnet-sdk",title:"Install .NET SDK",description:"The .NET SDK is a set of libraries and tools that allow developers to create .NET applications and libraries. The dependency implementation in the",source:"@site/docs/dependencies/0051-install-dotnet-sdk.md",sourceDirName:"dependencies",slug:"/dependencies/0051-install-dotnet-sdk",permalink:"/VirtualClient/docs/dependencies/0051-install-dotnet-sdk",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0051-install-dotnet-sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install Java JDK",permalink:"/VirtualClient/docs/dependencies/0050-install-java-jdk"},next:{title:"Docker Installation",permalink:"/VirtualClient/docs/dependencies/0052-install-docker"}},s={},p=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-net-sdk"},"Install .NET SDK"),(0,a.kt)("p",null,"The .NET SDK is a set of libraries and tools that allow developers to create .NET applications and libraries. The dependency implementation in the\nVirtual Client allows the user to define the version of the .NET SDK. In practice this is typically a .NET 6.0+ version of the SDK by default."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/core/sdk"},"SDK Documentation"))),(0,a.kt)("h2",{id:"supported-platformarchitectures"},"Supported Platform/Architectures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64")),(0,a.kt)("h2",{id:"profile-component-parameters"},"Profile Component Parameters"),(0,a.kt)("p",null,"The following section describes the parameters used by the individual component in the profile."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DotNetVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The version of the .NET SDK to download and install.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PackageName"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"The name/identifier used to reference the .NET SDK package download location by other Virtual Client components (e.g. 'dotnetsdk'...see example below).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line).")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following section describes the parameters used by the individual component in the profile."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-ASPNETBENCH.json"},"Profile Example")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "DotNetInstallation",\n    "Parameters": {\n        "Scenario": "InstallDotNetSdk",\n        "DotNetVersion": "$.Parameters.DotNetVersion",\n        "PackageName": "dotnetsdk"\n    }\n}\n')))))}d.isMDXComponent=!0}}]);