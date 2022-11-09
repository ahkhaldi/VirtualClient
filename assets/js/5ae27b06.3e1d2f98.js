"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"openssl",sidebar_position:1},l="OpenSSL Workload",s={unversionedId:"workloads/openssl/openssl",id:"workloads/openssl/openssl",title:"OpenSSL Workload",description:"OpenSSL 3.0 is an open-source industry standard transport layer security (TLS, SSL) toolset. The OpenSSL toolset includes a feature/command (openssl speed) that enables measuring",source:"@site/docs/workloads/openssl/OpenSSL.md",sourceDirName:"workloads/openssl",slug:"/workloads/openssl/",permalink:"/VirtualClient/docs/workloads/openssl/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/openssl/OpenSSL.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"openssl",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Memcached Workload Profiles",permalink:"/VirtualClient/docs/workloads/memcached/MemcachedProfiles"},next:{title:"OpenSSL Workload Metrics",permalink:"/VirtualClient/docs/workloads/openssl/OpenSSLMetrics"}},i={},p=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openssl-workload"},"OpenSSL Workload"),(0,a.kt)("p",null,"OpenSSL 3.0 is an open-source industry standard transport layer security (TLS, SSL) toolset. The OpenSSL toolset includes a feature/command (openssl speed) that enables measuring\nthe performance of the CPU in processing operations associated with various cryptography/encryption algorithms supported by the toolset (e.g. md5, sha1, sha256, aes-256-cbc)."),(0,a.kt)("p",null,"This toolset was compiled directly from the open source GitHub repo in order to take advantage of 3.0 beta features sets and expanded support for additional\ncryptography algorithms/operations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openssl/openssl"},"OpenSSL GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openssl.org/"},"OpenSSL Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openssl.org/docs/manmaster/"},"OpenSSL Manual Pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openssl.org/docs/manmaster/man1/openssl-speed.html"},"OpenSSL speed"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,a.kt)("p",null,"OpenSSL 3.0 is designed to be a very simple benchmarking tool. It produces a set of measurements each testing the performance of the CPU for handling a particular cryptography\nalgorithm across a set of buffer sizes (e.g. 16-byte, 64-byte, 256-byte, 1024-byte, 8192-byte and 16384-byte)."),(0,a.kt)("p",null,"The OpenSSL 3.0 build used by the VC Team can run the following CPU-intensive cryptography algorithm tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"md5"),(0,a.kt)("li",{parentName:"ul"},"sha1"),(0,a.kt)("li",{parentName:"ul"},"sha256"),(0,a.kt)("li",{parentName:"ul"},"sha512"),(0,a.kt)("li",{parentName:"ul"},"hmac(md5)"),(0,a.kt)("li",{parentName:"ul"},"des-ede3"),(0,a.kt)("li",{parentName:"ul"},"aes-128-cbc"),(0,a.kt)("li",{parentName:"ul"},"aes-192-cbc"),(0,a.kt)("li",{parentName:"ul"},"aes-256-cbc"),(0,a.kt)("li",{parentName:"ul"},"camellia-128-cbc"),(0,a.kt)("li",{parentName:"ul"},"camellia-192-cbc"),(0,a.kt)("li",{parentName:"ul"},"camellia-256-cbc"),(0,a.kt)("li",{parentName:"ul"},"ghash")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux x64"),(0,a.kt)("li",{parentName:"ul"},"Linux arm64"),(0,a.kt)("li",{parentName:"ul"},"Windows x64",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note that multi-threaded/parallel tests are not supported for Windows builds of OpenSSL 3.0. This means that the OpenSSL speed command\nwill not heavily exercise the CPU resources on the system. It will use a single core/vCPU to run each test. With Linux builds, the\ntoolset can be configured to use ALL cores/vCPUs available on the system in-parallel.")))))}u.isMDXComponent=!0}}]);