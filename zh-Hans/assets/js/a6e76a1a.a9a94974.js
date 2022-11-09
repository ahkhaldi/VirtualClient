"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="NAS Parallel Workload Profiles",s={unversionedId:"workloads/nasparallel/NASParallelBenchProfiles",id:"workloads/nasparallel/NASParallelBenchProfiles",title:"NAS Parallel Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the NAS Parallel toolset.",source:"@site/docs/workloads/nasparallel/NASParallelBenchProfiles.md",sourceDirName:"workloads/nasparallel",slug:"/workloads/nasparallel/NASParallelBenchProfiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/nasparallel/NASParallelBenchProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/workloads/nasparallel/NASParallelBenchProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NAS Parallel Workload Metrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/nasparallel/NASParallelBenchMetrics"},next:{title:"Network Workload Suite",permalink:"/VirtualClient/zh-Hans/docs/workloads/network/NetworkSuite"}},i={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"Topology Requirements",id:"topology-requirements",level:3},{value:"PERF-HPC-NASPARALLELBENCH.json",id:"perf-hpc-nasparallelbenchjson",level:3},{value:"SSH Requirements",id:"ssh-requirements",level:4},{value:"Client/Server Topologies",id:"clientserver-topologies",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nas-parallel-workload-profiles"},"NAS Parallel Workload Profiles"),(0,r.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the NAS Parallel toolset."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/workloads/nasparallel/NASParallelBench"},"Workload Details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./NASParallelBenchs.md"},"Workload Metrics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Workload Packages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Scenarios/Examples"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,r.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information must be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"topology-requirements"},"Topology Requirements"),(0,r.kt)("p",null,"The NAS Parallel workload profiles can run both on single and multiple nodes within same subnet to run the workload. One system operates in the 'Client' role making calls to zero or more servers. zero or more systems operate in the 'Server' role. (1-N relation where N can be ","[0,1,2...]",")"),(0,r.kt)("p",null,"The Virtual Client running on the client and server systems will synchronize with each other before running each individual workload. An environment layout\nfile MUST be supplied to each instance of the Virtual Client on the command line to describe the IP address/location of other Virtual Client instances. See\nthe section below on 'Client/Server Topologies'."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./EnvironmentLayouts.md"},"Environment Layouts")),(0,r.kt)("p",null,'In the environment layout file provided to the Virtual Client, define the role of the client system/VM as "Client" and the role of the server system(s)/VM(s) as "Server".\nThe spelling of the roles must be exact. The IP addresses of the systems/VMs must be correct as well. The following example illustrates the\nidea. The name of the client must match the name of the system or the value of the agent ID passed in on the command line.'),(0,r.kt)("p",null,"For different benchmarks with NAS Parallel we have various recommendation on number of nodes as mentioned below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BT, SP         - a square number of processes (1, 4, 9, ...)"),(0,r.kt)("li",{parentName:"ul"},"LU             - 2D (n1 * n2) process grid where n1/2 <= n2 <= n1"),(0,r.kt)("li",{parentName:"ul"},"CG, FT, IS, MG - a power-of-two number of processes (1, 2, 4, ...)"),(0,r.kt)("li",{parentName:"ul"},"EP         - no special requirement"),(0,r.kt)("li",{parentName:"ul"},"DC,UA          - Run only on single machine."),(0,r.kt)("li",{parentName:"ul"},"DT             - Minimum 5 machines required.")),(0,r.kt)("p",null,"So for the whole profile 1,4,16... are the recommended numbers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// Client role system (the controller)\n./VirtualClient --profile=PERF-HPC-NASPARALLELBENCH.json --system=Juno --timeout=1440 --agentId=AnyVM01 --layoutPath=/any/path/to/layout.json\n\n// Server role system #1\n./VirtualClient --profile=PERF-HPC-NASPARALLELBENCH.json --system=Juno --timeout=1440 --agentId=AnyVM02 --layoutPath=/any/path/to/layout.json\n\n// Server role system #2\n./VirtualClient --profile=PERF-HPC-NASPARALLELBENCH.json --system=Juno --timeout=1440 --agentId=AnyVM03 --layoutPath=/any/path/to/layout.json\n\n// Example contents of the 'layout.json' file below:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "clients": [\n        {\n            "name": "AnyVM01",\n            "role": "Client",\n            "privateIPAddress": "10.1.0.1"\n        },\n        {\n            "name": "AnyVM02",\n            "role": "Server",\n            "privateIPAddress": "10.1.0.2"\n        },\n        {\n            "name": "AnyVM03",\n            "role": "Server",\n            "privateIPAddress": "10.1.0.3"\n        }\n    ]\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"perf-hpc-nasparallelbenchjson"},"PERF-HPC-NASPARALLELBENCH.json"),(0,r.kt)("p",null,"Runs a set of HPC workloads using NAS Parallel Benchmarks to the parallel computing performance.\nThis profile is designed to test both single and multiple nodes performance."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."),(0,r.kt)("li",{parentName:"ul"},"The IP addresses defined in the environment layout (see above) for the Client and Server systems must be correct."),(0,r.kt)("li",{parentName:"ul"},"The name of the Client and Server instances defined in the environment layout must match the agent/client IDs supplied on the command line (e.g. --agentId)\nor must match the name of the system as defined by the operating system itself."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,r.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. See ",(0,r.kt)("a",{parentName:"td",href:"#SSH-Requirements"},"SSH Requirements")),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended Configurations"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage Examples"),(0,r.kt)("br",{parentName:"li"}),"The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'./VirtualClient --profile=PERF-HPC-NASPARALLELBENCH.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters="Username=virtualcli..." --layoutPath="/any/path/to/layout.json"\n./VirtualClient --profile=PPERF-HPC-NASPARALLELBENCH.json --system=Juno --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters="Username=virtualcli..."\n')),(0,r.kt)("h4",{id:"ssh-requirements"},"SSH Requirements"),(0,r.kt)("p",null,"OpenMPI sends messages over port 22 - as well as expects to send messages without having to supply a key or passsword. A secure and safe way is to register an SSH identity with the\nclient machine. Here is an example ",(0,r.kt)("a",{parentName:"p",href:"https://linuxize.com/post/how-to-setup-passwordless-ssh-login/"},"blog post")," on how to do this. Although the basic steps are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On client, store a private-public key pair under ~/.ssh/id_rsa and ~/.ssh/id_rsa.pub"),(0,r.kt)("li",{parentName:"ul"},"On server, append the id_rsa.pub generated under ~/.ssh/authorized_keys"),(0,r.kt)("li",{parentName:"ul"},"On client, store server fingprints in ~/.ssh/known_hosts "),(0,r.kt)("li",{parentName:"ul"},"Last when running the profile, supply the username whos .ssh directory contains all of the files just created/edited. ")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clientserver-topologies"},"Client/Server Topologies"),(0,r.kt)("p",null,"The NAS Parallel workload can be a client/server(It supports single machine scenario too) scenario whereby a controller/host makes SSH requests to target clients to distribute work. As such this workload\nis only valid when ran in some form of client/server topology. The requirement is that there must be at least 2 systems in order to create a proper\nclient/server interaction. In Azure Cloud environments, these 2 systems may be 2 virtual machines that run on the same physical node/blade. This scenario\nwill test performance that includes network performance aspects through a Hyper-V virtual switch. These 2 systems may also be 2 virtual machines that\nrun on different physical nodes/blades. This scenario will test performance through the physical network of a data center rack or cluster. Data center\nracks have a top-of-rack network/T1 switch (TOR). Data center racks are connected by T2 network switches. The default production scenario targets the\nphysical network systems and typically SameCluster/T2 network switches."),(0,r.kt)("p",null,"The Virtual Client itself does not create these topologies or the virtual machines etc... within them. This is a feature expected of the user or\nthe automation running the Virtual Client application. For example, the CRC flighting system is capable of creating advanced topologies into which the\nVirtual Client is deployed. Once the environment is setup, it is easy to provide topology/layout information to the Virtual Client so that each\ninstance running on a given system knows about all of the other instances and additionally knows what its role to play in the client/server workload\nexecution process is."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./EnvironmentLayouts.md"},"Environment Layouts")," for more information."))}m.isMDXComponent=!0}}]);