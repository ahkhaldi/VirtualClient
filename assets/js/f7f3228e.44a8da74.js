"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Profiles",s={unversionedId:"guides/0011-profiles",id:"guides/0011-profiles",title:"Profiles",description:'The Virtual Client defines the work/operations that will happen on a system in structured JSON documents called "profiles". Profiles can be thought',source:"@site/docs/guides/0011-profiles.md",sourceDirName:"guides",slug:"/guides/0011-profiles",permalink:"/VirtualClient/docs/guides/0011-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0011-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Line Options",permalink:"/VirtualClient/docs/guides/0010-command-line"},next:{title:"Client/Server Support",permalink:"/VirtualClient/docs/guides/0020-client-server"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Well-Known Parameters",id:"well-known-parameters",level:2},{value:"Inline Parameter References",id:"inline-parameter-references",level:2},{value:"Inline Parameter References -&gt; Time Spans",id:"inline-parameter-references---time-spans",level:2},{value:"Inline Parameter References -&gt; Calculations",id:"inline-parameter-references---calculations",level:2},{value:"Actions",id:"actions",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Monitors",id:"monitors",level:2},{value:"Using Multiple Profiles",id:"using-multiple-profiles",level:2},{value:"Order of Execution",id:"order-of-execution",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profiles"},"Profiles"),(0,r.kt)("p",null,'The Virtual Client defines the work/operations that will happen on a system in structured JSON documents called "profiles". Profiles can be thought\nof as recipes for how to utilize resources and to work the system. Profiles are divided into different sections within a profile including Metadata, Parameters,\nActions, Monitors and Dependencies.'),(0,r.kt)("p",null,"Although a profile may contain any number of these sections, none of the sections are absolutely required. This allows users flexibility when creating profiles for\nreusability. For example, it is common for the Virtual Client team to have profiles specific to running workloads on the system separat from profiles specific to running\nmonitors on the system. This allows a user to run a set of monitors with any number of different sets of workloads. In the examples below, the profiles that start with the\nterm 'PERF' are ones that are designed to run workloads on the system. Profiles that start with the term 'MONITORS' are designed to run different sets of monitors on the\nsystem in the background while the workloads are running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"VirtualClient.exe --profile=PERF-CPU-COREMARK.json --profile=MONITORS-DEFAULT.json ...\nVirtualClient.exe --profile=PERF-CPU-OPENSSL.json --profile=MONITORS-DEFAULT.json ...\nVirtualClient.exe --profile=PERF-IO-FIO.json --profile=MONITORS-DEFAULT.json ...\n")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"The section 'Metadata' within the profile defines supplemental or context information on the purpose of the profile, general recommendations and designations for\nsupported OS platforms and CPU architectures. Metadata is generally meant to serve as informational only and do not affect the operations of the Virtual Client with\nregards to the profile. There are a few metadata instructions however that do affect the operations at runtime. The following table describes some of the common metadata\nproperties that one might find in a profile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metadata Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SupportsIterations"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. True/False. This metadata property DOES affect the operations of the Virtual Client. When set to false, it indicates that the profile does not support profile iterations (i.e. --iterations on the command line)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RecommendedMinimumExecutionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Provides a recommendation for the minimum length of time for running the profile. This time is typically based on the amount of time expected to execute all actions in the profile 1 full round. Actions are generally executed in sequential order. Note that this is an estimate based on empirical evidence, but it is always a good idea to leave a little extra time buffer."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SupportedPlatforms"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Defines a set of OS platforms and CPU architectures on which the profile (and all components within) is confirmed to run correctly (e.g. win-x64 -> Windows OS, X64 architecture)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SupportedOperatingSystems"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Defines a set of operating systems on which the profile is confirmed to run correctly (e.g. Ubuntu, CentOS, Windows). This list does not indicate that the Virtual Client will run on every version of these operating systems. Focus on latest versions of the operating systems for support."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The section 'Parameters' within the profile defines a set of 1 or more parameters (typically with default values) that can be used to override the default values in the components that\nare part of the 'Actions', 'Monitors' or 'Dependencies' sections. In general, Virtual Client profiles are not meant to be overly general purpose. They represent tested and vetted recipes\nfor how to utilize resources and work a given system. Whereas any number of parameters can be defined in the 'Parameters' section, it is common practice to allow overrides to a minimum\nset. This helps to ensure the purpose and consistency of the profile operations on the system cannnot diverge too far from the original intentions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"Parameters": {\n    "CompilerName": "gcc",\n    "CompilerVersion": "10",\n    "ThreadCount": null\n},\n "Actions": [\n    {\n        "Type": "CoreMarkProExecutor",\n        "Parameters": {\n            "Scenario": "CoreMarkProBenchmark",\n            "PackageName": "coremarkpro"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"well-known-parameters"},"Well-Known Parameters"),(0,r.kt)("p",null,"There are certain parameters that can be used in a profile that represent aspects of the system that differ from one to another. These parameters are used to allow\ndesigners of profiles to be as expressive as possible with intentions. One of the express goals of the Virtual Client team with regards to profile design is\nto have profiles be as clear and self-describing as possible. It helps users to establish context into the purpose of the profile and what it will do when running on\nthe system. The following table describes the set of well-known parameters that can be used in profiles."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogicalCoreCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the number of logical cores/vCPUs on the system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PhysicalCoreCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the number of physical cores on the system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PackagePath:","{","package_name","}"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the path to a package that is installed on the system by one of the dependency components (e.g. ","{","PackagePath\\:openssl} ...resolving to /home/users/virtualclient/packages/openssl).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PackagePath/Platform:","{","package_name","}"),(0,r.kt)("td",{parentName:"tr",align:null},'Represents the "platform-specific" path to a package that is installed on the system by one of the dependency components. Platform-specific paths are a Virtual Client concept. They represent paths within a given package that contain toolsets and scripts for different OS platforms and CPU architectures  (e.g. ',"{","PackagePath/Platform:openssl","}"," ...resolving to /home/users/virtualclient/packages/openssl/linux-x64, /home/users/virtualclient/packages/openssl/win-arm64).")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Actions": [\n    {\n        "Type": "RedisServerExecutor",\n        "Parameters": {\n            "Scenario": "Server",\n            "PackageName": "redis",\n            "CommandLine": "--protected-mode no --io-threads {ServerThreadCount} --maxmemory-policy noeviction --ignore-warnings ARM64-COW-BUG --save",\n            "BindToCores": true,\n            "Port": "$.Parameters.ServerPort",\n            "ServerInstances": "{LogicalCoreCount}",\n            "ServerThreadCount": "$.Parameters.ServerThreadCount",\n            "Role": "Server"\n        }\n    }\n]\n\n"Dependencies": [\n    {\n        "Type": "WgetPackageInstallation",\n        "Parameters": {\n            "Scenario": "InstallMemcached",\n            "PackageName": "memcached",\n            "PackageUri": "https://memcached.org/files/memcached-1.6.17.tar.gz",\n            "SubPath": "memcached-1.6.17",\n            "Notes": "Example path to package -> /packages/memcached/memcached-1.6.17"\n        }\n    },\n    {\n        "Type": "ExecuteCommand",\n        "Parameters": {\n            "Scenario": "CompileMemcached",\n            "Platforms": "linux-x64,linux-arm64",\n            "Command": "bash -c \'./configure\'&&make",\n            "WorkingDirectory": "{PackagePath:memcached}"\n        }\n    }\n]\n\n"Dependencies": [\n    {\n        "Type": "DependencyPackageInstallation",\n        "Parameters": {\n            "Scenario": "InstallCoreMark",\n            "BlobContainer": "packages",\n            "BlobName": "coremark.1.0.0.zip",\n            "PackageName": "coremark",\n            "Extract": true\n        }\n    },\n    {\n        "Type": "ExecuteCommand",\n        "Parameters": {\n            "Scenario": "CompileCoremark",\n            "Platforms": "linux-x64,linux-arm64",\n            "Command": "bash -c \'./configure\'&&make",\n            "WorkingDirectory": "{PackagePath/Platform:memcached}"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"inline-parameter-references"},"Inline Parameter References"),(0,r.kt)("p",null,'There are scenarios where the author of a profile would like to reference parameters defined in the set associated with the action, monitor or dependency within the value\nfor another parameter. This is typically used to allow global parameters to be defined at the profile level and then referenced parameters defined at the action level.\nThis technique is also used to help make profiles as "self-describing" as possible by avoiding the need to define values within the code itself (and thus out of site for a user\nof the application + profile). The following example illustrates how this works with a few variations on the concept.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Global Parameter References"),(0,r.kt)("br",{parentName:"p"}),"\n",'The parameters at the top of a profile are "global" parameters meaning that they can be applied to any of the action, monitor or dependency components within the profile.\nGlobal profile parameters can be overridden on the command line by a user of the Virtual Client. This is helpful for allowing a user to have a bit more flexibility into the\nbehavior of Virtual Client when running the profile. For example, a common use case it to allow the user to explicitly define the number of threads that should be used when\nrunning a workload thus enabling he/she to tailor the workload to systems with different amounts of CPU resources.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// The \'ThreadCount\' parameter defined in the profile global parameters is\n// referenced in an individual action.\n{\n  "Description": "CoreMark Performance Workload",\n  "Metadata": {\n  },\n  "Parameters": {\n      "ThreadCount": 8\n  },\n  "Actions": [\n      {\n          "Type": "CoreMarkExecutor",\n          "Parameters": {\n              "Scenario": "ScoreSystem",\n              "PackageName": "coremark",\n              "ThreadCount": "$.Parameters.ThreadCount"\n          }\n      }\n  ]\n}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# A user of the Virtual Client could then define different values for the \'ThreadCount\' parameter on the \n# command line if desired.\nVirtualClient.exe --profile=EXAMPLE-PROFILE.json --parameters="ThreadCount=4"\nVirtualClient.exe --profile=EXAMPLE-PROFILE.json --parameters="ThreadCount=16"\nVirtualClient.exe --profile=EXAMPLE-PROFILE.json --parameters="ThreadCount=32"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Component Inline Parameter References"),"\nThe parameters within a given component can themselves reference the values of other parameters within the same component. This is often used to make\nusage patterns clear and self-describing within the profile. Note that this is not supported for all profiles. There is an implementation requirement in\nVirtual Client required. However, the user can typical determine if a profile supports it because it will be using it already."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Below the parameters FileSize, QueueDepth and ThreadCount are used in the value of the CommandLine parameter.\n// Additionally, the FileSize parameter is a global parameter. This illustrates combining the 2 techniques together \n// in a single profile.\n{\n  "Description": "FIO I/O Stress Performance Workload",\n  "Metadata": {\n  },\n  "Parameters": {\n      "FileSize": "496G"\n  },\n  "Actions": [\n      {\n          "Type": "FioExecutor",\n          "Parameters": {\n              "Scenario": "RandomWrite_4k_BlockSize",\n              "PackageName": "fio",\n              "CommandLine": "--name=fio_randwrite_{FileSize}_4k_d{QueueDepth}_th{ThreadCount} --size={FileSize} --numjobs={ThreadCount} --rw=randwrite --bs=4k --iodepth={QueueDepth} ...",\n              "FileSize": "$.Parameters.FileSize",\n              "QueueDepth": 32,\n              "ThreadCount": 16\n          }\n      }\n  ]\n}\n')))),(0,r.kt)("h2",{id:"inline-parameter-references---time-spans"},"Inline Parameter References -> Time Spans"),(0,r.kt)("p",null,"Time span parameters are very common in profiles (e.g. Duration: 00:30:00) and are often used to describe a time ranges or timeouts for executing operations.\nIt is sometimes beneficial to be able to reference a duration as different units of time. The table below describes the different units of time that are supported for\ntime span parameter references in Virtual Client profiles."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{","ParameterName","}",".TotalDays"),(0,r.kt)("td",{parentName:"tr",align:null},"Given a parameter with a value formatted as a time span (e.g. 11.00:00:00) in a set of profile parameters, this represents the total number of days for the range of time defined by the time span value (e.g. 11.00:00:00 -> 11 days).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{","ParameterName","}",".TotalHours"),(0,r.kt)("td",{parentName:"tr",align:null},"Given a parameter with a value formatted as a time span (e.g. 05:00:00) in a set of profile parameters, this represents the total number of hours for the range of time defined by the time span value (e.g. 05:00:00 -> 5 hours).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{","ParameterName","}",".TotalMilliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Given a parameter with a value formatted as a time span (e.g. 00:02:00) in a set of profile parameters, this represents the total number of milliseconds for the range of time defined by the time span value (e.g. 00:02:00 -> 120000 milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{","ParameterName","}",".TotalMinutes"),(0,r.kt)("td",{parentName:"tr",align:null},"Given a parameter with a value formatted as a time span (e.g. 00:30:00) in a set of profile parameters, this represents the total number of minutes for the range of time defined by the time span value (e.g. 00:30:00 -> 30 minutes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{","ParameterName","}",".TotalSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Given a parameter with a value formatted as a time span (e.g. 00:30:00) in a set of profile parameters, this represents the total number of seconds for the range of time defined by the time span value (e.g. 00:01:00 -> 60 seconds).")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Actions": [\n    {\n        "Type": "DiskSpdExecutor",\n        "Parameters": {\n            "Scenario": "RandomWrite_8k_BlockSize",\n            "PackageName": "diskspd",\n            "DiskFilter": "$.Parameters.DiskFilter",\n            "CommandLine": "-c496G -b8K -r4K -t32 -o128 -w100 -d{Duration.TotalSeconds} -Suw -W15 -D -L -Rtext",\n            "TestName": "diskspd_randwrite_496g_8k_d128_th32",\n            "FileName": "diskspd-test.dat",\n            "Duration": "00:05:00",\n            "Configuration": "Stress",\n            "ProcessModel": "$.Parameters.ProcessModel",\n            "DeleteTestFilesOnFinish": false,\n            "Tags": "IO,DiskSpd,randwrite"\n        }\n    }\n]\n\n"Actions": [\n    {\n        "Type": "DiskSpdExecutor",\n        "Parameters": {\n            "Scenario": "RandomWrite_8k_BlockSize",\n            "PackageName": "diskspd",\n            "DiskFilter": "$.Parameters.DiskFilter",\n            "CommandLine": "-c496G -b8K -r4K -t32 -o128 -w100 -d{Timeout.TotalSeconds} -Suw -W15 -D -L -Rtext",\n            "TestName": "diskspd_randwrite_496g_8k_d128_th32",\n            "FileName": "diskspd-test.dat",\n            "Timeout": "00:05:00",\n            "Configuration": "Stress",\n            "ProcessModel": "$.Parameters.ProcessModel",\n            "DeleteTestFilesOnFinish": false,\n            "Tags": "IO,DiskSpd,randwrite"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"inline-parameter-references---calculations"},"Inline Parameter References -> Calculations"),(0,r.kt)("p",null,'In addition to the different types of parameter references above, Virtual Client also has limited support for using calculations in parameter values. One of the fundamental\ngoals when defining profiles is to make the "recipe" as self-describing as possible. Inline calculations helps to make this possible with certain types of scenarios. For example,\nthe author may want to adjust the number of concurrent threads that are used to run a given workload depending upon the size of the system on which Virtual Client is running.\nWhereas this could certainly be done in the code itself, it hides the calculations from the user/reader of the profile. Calculations are often used in conjunction with the well-known\nparameters described above. The following examples illustrate how to use calculations in profiles.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn/blob/main/docs/wiki/Scripting-API-Samples.md"},"CSharp Scripting Support"),(0,r.kt)("br",{parentName:"p"}),"\n","Support for performing calculations against string literals is possible using the Roslyn compiler and scripting foundation in .NET. More specifically, the 'Microsoft.CodeAnalysis.CSharp.Scripting' library is used\nto translate string literals into mathematical calculations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Calculations in parameter values should use the following format:  \n{calculate(<expression>)}\n\ne.g.\n{calculate(100 / {TotalThreads})}\n{calculate({LogicalCoreCount} - 2)}\n{calculate(({LogicalCoreCount} - 2) / 512)}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Actions": [\n  {\n      "Type": "DiskSpdExecutor",\n      "Parameters": {\n          "Scenario": "RandomWrite_4k_BlockSize",\n          "PackageName": "diskspd",\n          "DiskFilter": "$.Parameters.DiskFilter",\n          "CommandLine": "-c496G -b4K -r4K -t{calculate({LogicalCoreCount}/2)} -o{calculate(512/{ThreadCount})} -w100 -d300 -Suw -W15 -D -L -Rtext",\n          "FileName": "diskspd-test.dat",\n          "ProcessModel": "SingleProcess",\n          "DeleteTestFilesOnFinish": false,\n          "Tags": "IO,DiskSpd,randwrite"\n      }\n  }\n]\n\n// Calculations can be used to define the value of parameters which are then themselves\n// referenced in the values of other parameters (e.g. ThreadCount and QueueDepth below).\n"Actions": [\n  {\n      "Type": "DiskSpdExecutor",\n      "Parameters": {\n          "Scenario": "RandomWrite_4k_BlockSize",\n          "PackageName": "diskspd",\n          "DiskFilter": "$.Parameters.DiskFilter",\n          "CommandLine": "-c{FileSize} -b4K -r4K -t{ThreadCount} -o{QueueDepth} -w100 -d{Duration} -Suw -W15 -D -L -Rtext",\n          "TestName": "diskspd_randwrite_{FileSize}_4k_d{ThreadCount}_th{ThreadCount}",\n          "Duration": "$.Parameters.Duration",\n          "ThreadCount": "{calculate({LogicalCoreCount}/2)}",\n          "QueueDepth": "{calculate(512/{ThreadCount})}",\n          "FileSize": "$.Parameters.FileSize",\n          "FileName": "diskspd-test.dat",\n          "ProcessModel": "SingleProcess",\n          "DeleteTestFilesOnFinish": false,\n          "Tags": "IO,DiskSpd,randwrite"\n      }\n  }\n]\n')),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,"The section 'Actions' within the profile defines a set of 1 or more toolsets to execute on the system. The term 'workload' is often used synonymously with 'Actions' to\ndescribe the software that is the focus of the work Virtual Client will perform on the system. For example, the section might include an action responsible for executing\nthe GeekBench5 toolset/workload on the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Actions": [\n    {\n        "Type": "GeekbenchExecutor",\n        "Parameters": {\n            "Scenario": "ScoreSystem",\n            "CommandLine": "--no-upload",\n            "PackageName": "geekbench5"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The section 'Dependencies' within the profile defines a set of 1 or more dependencies that must be installed/provisioned on the system in order to run the\ntoolsets associated with the 'Actions' and 'Monitors'. For example, there may be packages that contain the toolsets that must be downloaded or Git repos to clone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Dependencies": [\n    {\n        "Type": "CompilerInstallation",\n        "Parameters": {\n            "Scenario": "InstallCompiler",\n            "CompilerName": "$.Parameters.CompilerName",\n            "CompilerVersion": "$.Parameters.CompilerVersion"\n        }\n    },\n    {\n        "Type": "GitRepoClone",\n        "Parameters": {\n            "Scenario": "InstallCoreMarkPro",\n            "RepoUri": "https://github.com/eembc/coremark-pro.git",\n            "PackageName": "coremarkpro"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"monitors"},"Monitors"),(0,r.kt)("p",null,"The section 'Monitors' with the profile defines a set of 1 or more toolsets to run in the background capturing information from the system while 'Actions' are running.\nFor example, it is common practice to capture performance counters from the system while workloads are running. This enables users to get a good idea of the resources\nrequired to support the workloads and how the operating system + hardware is operating while under duress. Monitors always run in-parallel with the actions/workloads."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Monitors": [\n    {\n        "Type": "PerfCounterMonitor",\n        "Parameters": {\n            "Scenario": "CaptureCounters",\n            "MonitorFrequency": "$.Parameters.MonitorFrequency",\n            "MonitorWarmupPeriod": "$.Parameters.MonitorWarmupPeriod"\n        }\n    },\n    {\n        "Type": "LspciMonitor",\n        "Parameters": {\n        "Scenario": "CaptureDeviceInformation",\n        "MonitorFrequency": "12:00:00",\n        "MonitorWarmupPeriod": "$.Parameters.MonitorWarmupPeriod"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"using-multiple-profiles"},"Using Multiple Profiles"),(0,r.kt)("p",null,"Virtual Client allows the user to define any number of profiles on the command line. When multiple profiles are defined on the command line, they are merged into a\nsingle profile by the Virtual Client and then executed. The components are merged in the exact order as the profiles they exist within as supplied on the command line.\nFor the sake of telemetry, the very first profile defined will be the one used in the information output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# For Example, given the following command line:\nVirtualClient.exe --profile=PROFILE1.json --profile=PROFILE2.json --profile=MONITORS1.json\n\n# ...And given the profiles have components as follows:\n[PROFILE1.json]\n  - Actions:\n       - Action 1\n       - Action 2\n\n  - Dependencies:\n       - Dependency 1\n       - Dependency 2\n\n[PROFILE2.json]\n  - Actions:\n       - Action 3\n       - Action 4\n\n  - Dependencies:\n       - Dependency 3\n       - Dependency 4\n\n[MONITORS1.json]\n  - Monitors:\n       - Monitor 1\n       - Monitor 2\n\n  - Dependencies:\n       - Dependency 3\n       - Dependency 4\n\n# ...Virtual Client will merge the 3 profiles into 1 before execution with components merged in the order supplied\n#    on the commandline. The very first profile defined on the command line will be used for telemetry purposes.\n[PROFILE1.json]\n  - Actions:\n       - Action 1\n       - Action 2\n       - Action 3\n       - Action 4\n\n  - Dependencies:\n       - Dependency 1\n       - Dependency 2\n       - Dependency 3\n       - Dependency 4\n\n  - Monitors:\n       - Monitor 1\n       - Monitor 2\n")),(0,r.kt)("h2",{id:"order-of-execution"},"Order of Execution"),(0,r.kt)("p",null," Additionally, there is an order to the execution of components within a profile by the Virtual Client. Components in the 'Dependencies'\nsection are all executed first and in sequential order as they are defined within the profile. After the dependencies are executed, the components within the 'Monitors' section are executed.\nMonitors differ from other types of components in that they are executed in-parallel. Finally, the components within the 'Actions' section are execute. Actions are executed in\nsequential order as they are defined within the profile. These components begin execution almost as soon as the monitor components have started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Profile Execution\n----\x3e 1) Dependencies\n\n----\x3e 2) Monitors  (all in-parallel)\n-----------\x3e Monitor 1, Monitor 2, Monitor 3\n\n----\x3e 3) Actions (in sequential order just as soon as the monitors are running)\n-----------\x3e Action 1 \n-----------\x3e Action 2\n-----------\x3e Action 3\n-----------\x3e Action 4\n")))}c.isMDXComponent=!0}}]);