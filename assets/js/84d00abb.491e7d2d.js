"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3117],{8705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(5893),i=n(3905);const a={},o="Workload Onboarding Process",s={id:"developing/0030-workload-onboarding",title:"Workload Onboarding Process",description:"The following documentation provides guidance on the steps that the Virtual Client requires to onboard workloads to platform. The steps",source:"@site/docs/developing/0030-workload-onboarding.md",sourceDirName:"developing",slug:"/developing/0030-workload-onboarding",permalink:"/VirtualClient/docs/developing/0030-workload-onboarding",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/0030-workload-onboarding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run Custom Scripts with Virtual Client",permalink:"/VirtualClient/docs/developing/0021-run-custom-scripts"},next:{title:"VC Packages",permalink:"/VirtualClient/docs/developing/0040-vc-packages"}},l={},d=[{value:"Step 1: Research and Understand the Workload Software",id:"step-1-research-and-understand-the-workload-software",level:2},{value:"Step 2: Create VC Packages and Uploading to Storage",id:"step-2-create-vc-packages-and-uploading-to-storage",level:2},{value:"Step 3: Create Parsers and Unit Tests",id:"step-3-create-parsers-and-unit-tests",level:2},{value:"Step 4: Update Package Manager and Unit Tests",id:"step-4-update-package-manager-and-unit-tests",level:2},{value:"Step 5: Profile Creation",id:"step-5-profile-creation",level:2},{value:"Step 6: Create Executor and Unit Tests",id:"step-6-create-executor-and-unit-tests",level:2},{value:"Step 7: Dependencies Creation",id:"step-7-dependencies-creation",level:2},{value:"Step 8: Running the Workload on Azure VMs and Verify data in Telemetry",id:"step-8-running-the-workload-on-azure-vms-and-verify-data-in-telemetry",level:2},{value:"Step 9: Documentation Updation",id:"step-9-documentation-updation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"workload-onboarding-process",children:"Workload Onboarding Process"}),"\n",(0,r.jsx)(t.p,{children:"The following documentation provides guidance on the steps that the Virtual Client requires to onboard workloads to platform. The steps\ndefined are not exactly the same every time; however, this gives a developer the general idea of what to expect."}),"\n",(0,r.jsx)(t.h2,{id:"step-1-research-and-understand-the-workload-software",children:"Step 1: Research and Understand the Workload Software"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Research the proper use of the workload software to fully understand how to run it correctly on the system. If a subject matter expert is available,\nconnect with them to get perspective on the workload software."}),"\n",(0,r.jsx)(t.li,{children:"Collect and keep track of documentation, download locations, licenses etc... related to the workload software. This is particularly important if the\nworkload software is not already pre-built but instead must be built/compiled from a repo by the developer."}),"\n",(0,r.jsx)(t.li,{children:"Run the workload software yourself (on a range of systems if possible) and gather examples of the results/output."}),"\n",(0,r.jsx)(t.li,{children:"Inspect the results/output to determine the list of important metrics that should be captured from them. Sometimes the results are not emitted by the workload\nbut are instead read from the system on which it is running (e.g. performance counters)."}),"\n",(0,r.jsx)(t.li,{children:"Try to get all questions that you have answered such that you have a sense of truly understanding what the workload software does and how to operate\nit for trustworthy results on the system."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-create-vc-packages-and-uploading-to-storage",children:"Step 2: Create VC Packages and Uploading to Storage"}),"\n",(0,r.jsx)(t.p,{children:"It is recommended that any workload software that can be packaged in a Virtual Client package (*.vcpkg) is packaged this way. There are a host of benefits\nto packaging workloads and dependencies in easy-to-consume Virtual Client packages."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/developing/0040-vc-packages",children:"VC Packages"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/guides/0600-integration-blob-storage",children:"Storage Account Support"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-3-create-parsers-and-unit-tests",children:"Step 3: Create Parsers and Unit Tests"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a parser class file with name <Workload_name>ResultsParser.cs(e.g. WebFundamentalsResultsParser.cs) in project VirtualClient.Parser."}),"\n",(0,r.jsx)(t.li,{children:"Write unit tests for the parser created in project VirtualClient.Parser.UnitTests with the name <Workload_name>ResultsParserTests.cs(e.g. WebFundamentalsResultsParserTests.cs)"}),"\n",(0,r.jsx)(t.li,{children:"To store all the required input files for the tests, create a folder with the name of workload in the examples folder in VirtualClient.Parser.UnitTests project."}),"\n",(0,r.jsx)(t.li,{children:"Update VirtualClient.Parser.UnitTests.csproj file with the details of example files."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'    <None Update="Examples\\WebFundamentals\\WebFundamentalsInvalidExample.xml">\n        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </None>\n    <None Update="Examples\\WebFundamentals\\WebFundamentalsInvalidMetricCountExample.xml">\n        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </None>\n    <None Update="Examples\\WebFundamentals\\WebFundamentalsExample.xml">\n        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </None>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"step-4-update-package-manager-and-unit-tests",children:"Step 4: Update Package Manager and Unit Tests"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Update PackageManager.cs of project VirtualClient.Core to incluide the details of all the packages required to be downloaded."}),"\n",(0,r.jsx)(t.li,{children:"Update PackageManagerTests.cs of project VirtualClient.Core.UnitTests to include the unit tests of the changes."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-5-profile-creation",children:"Step 5: Profile Creation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create json file with name PERF-<PERF_CRITERION>-<Workload_Name>.json (eg. PERF-WEB-WEBFUNDAMENTALS.json) in profiles folder of VirtualClient.Main project."}),"\n",(0,r.jsx)(t.li,{children:"This file contains all the dependencies that are required by the workload."}),"\n",(0,r.jsx)(t.li,{children:"Dependencies are included in the project VortualClient.Dependencies."}),"\n",(0,r.jsx)(t.li,{children:"Update VirtualClient.Main.csproj file and VirtualClient.Actions.FunctionalTests.csproj file with the json file created."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-6-create-executor-and-unit-tests",children:"Step 6: Create Executor and Unit Tests"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Create a folder with the name of workload in VirtualClient.Actions project which will contain all the files related to executor.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Single-system Workloads"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions/Examples",children:"Example Workload Executor"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions/OpenSSL",children:"OpenSSL Workload Executor"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Actions/OpenFOAM/OpenFOAMExecutor.cs",children:"OpenFOAM Workload Executor"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Multi-system, Client/Server Workloads"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions/Examples/ClientServer",children:"Example Workload Executor"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions/Redis",children:"Redis Workload Executor"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions/Memcached",children:"Memcached Workload Executor"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-7-dependencies-creation",children:"Step 7: Dependencies Creation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"In case, Workload requires one time set-up on VM then that can be added as a dependency in the VC."}),"\n",(0,r.jsx)(t.li,{children:"Add <Depency_Name>.cs(IISInstallation.cs) file in VirtualClient.Dependencies project."}),"\n",(0,r.jsx)(t.li,{children:"Add its unit tests in project VirtualClient.Dependencies.UnitTests project."}),"\n",(0,r.jsx)(t.li,{children:"This dependency can be added in profile file created for workload in VirtualClient.Main."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-8-running-the-workload-on-azure-vms-and-verify-data-in-telemetry",children:"Step 8: Running the Workload on Azure VMs and Verify data in Telemetry"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open command prompt and follow these commands to create NuGet package"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd /src/VirtualClient\nbuild-vc.cmd\nbuild-packages-vc.cmd 1.0.0  // 1.0.0 is version and it could be any based on choice\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Package will be found in location VirtualClient\\out\\packages with the name VirtualClient.[version].nupkg. Eg. VirtualClient.1.0.0.nupkg"}),"\n",(0,r.jsx)(t.li,{children:"Copy the NuGet package to the VM on which, workload needs to be run."}),"\n",(0,r.jsxs)(t.li,{children:["Please refer ",(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient",children:"Virtual Client Documentation"})," for details on how to run workload on Azure VM using Virtual Client package."]}),"\n",(0,r.jsx)(t.li,{children:"Verify the results in telemetry"}),"\n",(0,r.jsx)(t.li,{children:"PR can be created now for review and checkin."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-9-documentation-updation",children:"Step 9: Documentation Updation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Workload Binaries and Scripts Locations"}),"\nThis documentation should exist in the VirtualClient.Packaging folder and should follow the naming convention + format for the example below.\nThis includes information on exactly where to get the binaries/scripts etc. required to create a workload package (including custom build/compile instructions).\nThis should also and especially include information on pieces of the workload package that are NOT in source control (e.g. where is it at if not in source control).\nAn example of this is the SPEC CPU workload requirements for an *.iso file. This file is over 2 GB in size and we do not keep it in source control. It exists ONLY in the package store."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Workload Details, Profiles and Metrics"}),"\nA standard pattern is in place for describing the details of the workload (what it is and what it does) as well as the different profiles that are offered to run that workload as well as what type of metrics to we capture when the workload is run.\nThis is very important for users of the Virtual Client to understand fine-grained details about these workloads and profile scenarios. This information is divided into 3 parts/documents. Use the examples below for reference."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/workloads/openssl/",children:"Example - OpenSSL Overview/Details"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/workloads/openssl/openssl-profiles",children:"Example - OpenSSL Workload Profiles"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=i,f=h["".concat(l,".").concat(p)]||h[p]||c[p]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));u.displayName="MDXCreateElement"}}]);