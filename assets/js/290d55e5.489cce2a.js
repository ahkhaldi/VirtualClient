"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4057],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4449:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Sysbench OLTP",i={unversionedId:"workloads/sysbench-oltp/sysbench-oltp",id:"workloads/sysbench-oltp/sysbench-oltp",title:"Sysbench OLTP",description:"Sysbench is an open-source multi-threaded database benchmark tool for database online transacation processing (OLTP) operations against a",source:"@site/docs/workloads/sysbench-oltp/sysbench-oltp.md",sourceDirName:"workloads/sysbench-oltp",slug:"/workloads/sysbench-oltp/",permalink:"/VirtualClient/docs/workloads/sysbench-oltp/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/sysbench-oltp/sysbench-oltp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperBenchmark Workload Profiles",permalink:"/VirtualClient/docs/workloads/superbenchmark/superbenchmark-profiles"},next:{title:"Sysbench OLTP Workload Profiles",permalink:"/VirtualClient/docs/workloads/sysbench-oltp/sysbench-oltp-profiles"}},s={},p=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysbench-oltp"},"Sysbench OLTP"),(0,r.kt)("p",null,"Sysbench is an open-source multi-threaded database benchmark tool for database online transacation processing (OLTP) operations against a\nMySQL database."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/akopytov/sysbench"},"Sysbench GitHub"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.flamingbytes.com/posts/sysbench/"},"Example Sysbench Uses"))),(0,r.kt)("h2",{id:"what-is-being-measured"},"What is Being Measured?"),(0,r.kt)("p",null,"The Sysbench test suite executes varied transactions on the database system including reads, writes, and other queries. The list of OLTP benchmarks\nsupported by Sysbench are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Benchmark Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_read_write"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of read and write queries on MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_read_only"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of only read queries on MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_write_only"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of only write queries on MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of only delete queries on the MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_insert"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of only insert queries on MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_update_index"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of index updates on the MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oltp_update_non_index"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of non-index updates on the MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"select_random_points"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of random point select on the MySQL database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"select_random_ranges"),(0,r.kt)("td",{parentName:"tr",align:null},"Measures performance of random range select on the MySQL database")))),(0,r.kt)("h2",{id:"workload-metrics"},"Workload Metrics"),(0,r.kt)("p",null,"The following metrics are examples of those captured by the Virtual Client when running the Sysbench OLTP workload"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# read queries"),(0,r.kt)("td",{parentName:"tr",align:null},"5503894")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# write queries"),(0,r.kt)("td",{parentName:"tr",align:null},"259534")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# other queries"),(0,r.kt)("td",{parentName:"tr",align:null},"1284332")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"257421")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"transactions/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"153.01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# queries"),(0,r.kt)("td",{parentName:"tr",align:null},"5948220")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"queries/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"2850.17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# ignored errors"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"ignored errors/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"# reconnects"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"reconnects/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"elapsed time"),(0,r.kt)("td",{parentName:"tr",align:null},"1800.0012")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"latency min"),(0,r.kt)("td",{parentName:"tr",align:null},"7.19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"latency avg"),(0,r.kt)("td",{parentName:"tr",align:null},"26.97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"latency max"),(0,r.kt)("td",{parentName:"tr",align:null},"682.33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"latency 95p"),(0,r.kt)("td",{parentName:"tr",align:null},"67.58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-MYSQL-SYSBENCH-OLTP.json"),(0,r.kt)("td",{parentName:"tr",align:null},"Sysbench OLTP"),(0,r.kt)("td",{parentName:"tr",align:null},"latency sum"),(0,r.kt)("td",{parentName:"tr",align:null},"7458935.25")))))}u.isMDXComponent=!0}}]);