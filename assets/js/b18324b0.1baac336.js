"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={id:"features",sidebar_position:2},i="Features",l={unversionedId:"overview/features",id:"overview/features",title:"Features",description:"The Virtual Client is a unified workload and system monitoring platform for running customer-representative or validation scenarios on virtual machines or physical hosts/blades/servers.",source:"@site/docs/overview/features.md",sourceDirName:"overview",slug:"/overview/features",permalink:"/VirtualClient/docs/overview/features",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/overview/features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"features",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Virtual Client Platform Design",permalink:"/VirtualClient/docs/overview/design"},next:{title:"FAQ",permalink:"/VirtualClient/docs/overview/faq"}},s={},u=[{value:"Platform Features",id:"platform-features",level:2},{value:"Workload Facilities",id:"workload-facilities",level:4},{value:"Monitoring Facilities",id:"monitoring-facilities",level:4},{value:"Workload/Dependency Package Facilities",id:"workloaddependency-package-facilities",level:4},{value:"Data Capture Facilities",id:"data-capture-facilities",level:4}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features"},"Features"),(0,n.kt)("p",null,"The Virtual Client is a unified workload and system monitoring platform for running customer-representative or validation scenarios on virtual machines or physical hosts/blades/servers.\nThe platform supports a wide range of different industry standard/benchmark workloads used to measuring various aspects of the system under test (e.g. CPU, I/O, network performance, power consumption).\nThe platform additionally provides the ability to capture important performance and reliability measurements from the underlying system. In Azure, the platform supports all business-critical\nenvironments including guest/VM systems, host/blade systems and on-site lab systems."),(0,n.kt)("p",null,"The platform runtime application itself is a .NET 6.0 command line application written in C# that has both cross-platform and multi-architecture support. As such, the application can run on both\nWindows and Linux operating system platforms as well as x64 and arm64 architectures. The Virtual Client is the defacto standard workload provider for cloud-scale\nexperiments on VMs (guest scenario) and physical blades across the Azure fleet for firmware/hardware net impact analysis."),(0,n.kt)("h2",{id:"platform-features"},"Platform Features"),(0,n.kt)("p",null,"The primary goal of the Virtual Client platform is to provide an end-to-end solution for measuring the experience of a customer using cloud-based or targeted systems. The customer perspective\nis particularly important for evaluating the net impact of a change to the system on a customer using it such as a firmware update but is equally important for qualifying the readiness of new generations of\nhardware systems (e.g. Gen8, Gen9 blades). To accomplish the goal, the platform supports a number of features required to provide for the complexities of cloud systems.\nGoals of the platform include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide a unified workload provider platform that covers all environments important to the business used either by customers or by company engineers.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Validations of existing hardware systems."),(0,n.kt)("li",{parentName:"ul"},"Qualification of new hardware systems (i.e. new generations of hardware)."),(0,n.kt)("li",{parentName:"ul"},"Offer a range of workloads that run on guest/virtual machine systems."),(0,n.kt)("li",{parentName:"ul"},"Offer a range of workloads that run on host/blade systems."),(0,n.kt)("li",{parentName:"ul"},"Offer a range of workloads that run on design lab systems."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide support for a range of different system performance and reliability monitors.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Performance counter capture on guest/VM systems."),(0,n.kt)("li",{parentName:"ul"},"Performance counter capture on host/blade systems."),(0,n.kt)("li",{parentName:"ul"},"Power usage and temperature measurements on host/blade systems."),(0,n.kt)("li",{parentName:"ul"},"System profilers (e.g. Azure Profiler)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide a common data contract for capturing workload and monitoring metrics to ease reporting needs.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Common schema for emitting workload metrics/measurements."),(0,n.kt)("li",{parentName:"ul"},"Common schema for emitting system performance counters."),(0,n.kt)("li",{parentName:"ul"},"Common schema for capturing interesting system events."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide facilities for capturing/uploading workload and monitoring metrics to a central data store.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Azure Event Hub."),(0,n.kt)("li",{parentName:"ul"},"Azure Data Explorer/Kusto."),(0,n.kt)("li",{parentName:"ul"},"Structured Log Files for out-of-band capture."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide facilities for capturing/uploading files associated with workload executions or background monitors (e.g. profilers).")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Azure Blob storage accounts."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide extensibility for integrating new workloads and scenarios with a minimal amount of work.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Good documentation."),(0,n.kt)("li",{parentName:"ul"},"Well-vetted and simplified design patterns."),(0,n.kt)("li",{parentName:"ul"},'Inner "open source" ready code repository.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cover core operating systems used by the majority of cloud system customers.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Windows"),(0,n.kt)("li",{parentName:"ul"},"Windows Server"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu"),(0,n.kt)("li",{parentName:"ul"},"RHEL"),(0,n.kt)("li",{parentName:"ul"},"CENTOS"),(0,n.kt)("li",{parentName:"ul"},"SUSE"),(0,n.kt)("li",{parentName:"ul"},"Mariner"),(0,n.kt)("li",{parentName:"ul"},"more"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cover core processor architectures in hardware systems used by cloud system customers.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Intel 64-bit(x64) architecture."),(0,n.kt)("li",{parentName:"ul"},"AMD 64-bit(x64) architecture."),(0,n.kt)("li",{parentName:"ul"},"ARM 64-bit (ARM64) architecture."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Support advanced scenarios requiring multi-system, client/server topologies (i.e. multi-VM, distributed workloads).")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Network scenarios."),(0,n.kt)("li",{parentName:"ul"},"High-performance compute (HPC) scenarios."),(0,n.kt)("li",{parentName:"ul"},"Web server scenarios."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Able to be used in any automation/orchestration system for running customer-representative scenarios.")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Entirely self-contained with no dependency on external systems (with exception of reboot-required scenarios)."),(0,n.kt)("li",{parentName:"ul"},"Generic data nomenclature."),(0,n.kt)("li",{parentName:"ul"},"Easy command line options.")))),(0,n.kt)("h4",{id:"workload-facilities"},"Workload Facilities"),(0,n.kt)("p",null,"A fundamental aspect of the Virtual Client platform is that it provides a wide range of different workloads that can be executed on a system. A workload represents\na set of one more operations designed to utilize system resources in a specific way. Some workloads are designed to target singular primitive resources on the system\nsuch as the CPU, memory/RAM, disks. Some workloads are designed to utilize the system holistically (CPU, memory and disk I/O together). Some workloads are designed to\ninduce faults/problems on the system. All of these targeted scenarios match scenarios common to customers of the Azure cloud using the same systems."),(0,n.kt)("p",null,"Examples of workload requirements supported by the platform include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Measure the performance of the CPU."),(0,n.kt)("li",{parentName:"ul"},"Measure the performance of system memory/RAM."),(0,n.kt)("li",{parentName:"ul"},"Measure the performance of system disk I/O."),(0,n.kt)("li",{parentName:"ul"},"Measure the performance of the GPU (e.g. nVidia). "),(0,n.kt)("li",{parentName:"ul"},"Measure the performance of the network/network stack."),(0,n.kt)("li",{parentName:"ul"},"Measure the performance of high-performance compute (HPC) systems."),(0,n.kt)("li",{parentName:"ul"},"Measure the performance of the system as a whole (e.g. SQL Server)."),(0,n.kt)("li",{parentName:"ul"},"Measure the tolerance of the system to kernel stress (i.e. mean-time-to-failure).")),(0,n.kt)("h4",{id:"monitoring-facilities"},"Monitoring Facilities"),(0,n.kt)("p",null,"A second fundamental aspect of the Virtual Client platform is the ability to capture a range of different metrics from the system itself while workloads are running. Aligning the\ntiming for capturing system monitoring information with the running of a workload produces high fidelity, highly correlated results around the performance of the system. The correlation\nof workload measurements with system/OS measurements can provide deep insights into the performance and reliability of the system from a customer perspective."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../monitors"},"Monitors Available"),"  ")),(0,n.kt)("p",null,"Examples of monitoring requirements supported by the platform include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Performance Counters on the system."),(0,n.kt)("li",{parentName:"ul"},"Important system events."),(0,n.kt)("li",{parentName:"ul"},"Power and temperature measurements on the cloud host/blade."),(0,n.kt)("li",{parentName:"ul"},"System profiling/callstack information (e.g. Azure Profiler).")),(0,n.kt)("h4",{id:"workloaddependency-package-facilities"},"Workload/Dependency Package Facilities"),(0,n.kt)("p",null,'A final important fundamental of the Virtual Client platform is that is defines a common model/standard for defining workload and dependency packages. Every workload had a different\nset of files and dependencies associated. This helps simplify the deployment of the Virtual client into most environments where an internet connection is available. Virtual Client can\nsimply download the dependencies it needs at runtime. However, this also enables Virtual Client to support "disconnected" scenarios where the systems under test do not have an internet\nconnection.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Dependency Packages"))),(0,n.kt)("p",null,"Examples of package/dependency requirements supported by the platform include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A common model for how to define a workload or dependency package."),(0,n.kt)("li",{parentName:"ul"},"A common model for how to download/install workload or dependency packages.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Support for Azure Blob stores."),(0,n.kt)("li",{parentName:"ul"},"Support for NuGet feeds."))),(0,n.kt)("li",{parentName:"ul"},'Support for "drop-in" packages where the workload or dependency package is deployed with the Virtual Client instead of downloaded.')),(0,n.kt)("h4",{id:"data-capture-facilities"},"Data Capture Facilities"),(0,n.kt)("p",null,"Another core ability of the Virtual Client platform is that it provides a consolidated model for defining a data contract/schema for metrics emitted by workloads or by\nmonitors. This is an important aspect of the platform end-to-end solution in that it makes it possible to integrate many different types of workloads while ensuring a\ncommon methodology for reading the results to determine outcomes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./DiskSpdMetrics.md"},"Example Workload Metrics"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./PerformanceCounterMetrics.md"},"Example Monitoring Metrics"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./EventHubIntegrationNext.md"},"Azure Event Hub + Azure Data Explorer/Kusto Integration"))),(0,n.kt)("p",null,"Examples of data capture requirements supported by the platform include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Standardized data contract for representing metrics.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workload-emitted metrics."),(0,n.kt)("li",{parentName:"ul"},"Performance counters."),(0,n.kt)("li",{parentName:"ul"},"Power usage and temperature metrics."),(0,n.kt)("li",{parentName:"ul"},"Interesting system events (e.g. registry changes, .exe executions)."))),(0,n.kt)("li",{parentName:"ul"},"Trace logging for runtime insights and debugging."),(0,n.kt)("li",{parentName:"ul"},"Azure storage account/blob store support for file uploads (e.g. SEL logs, profiler .bin files)."),(0,n.kt)("li",{parentName:"ul"},'Azure Event Hub support for ease-of-integration with other Azure "big-data" resources (e.g. ADX/Kusto).'),(0,n.kt)("li",{parentName:"ul"},"A common table and function schema for Azure ADX/Kusto data ingestion.")))}p.isMDXComponent=!0}}]);