"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4864],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i="Install Linux Packages",s={unversionedId:"dependencies/0010-install-linux-packages",id:"dependencies/0010-install-linux-packages",title:"Install Linux Packages",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install dependency packages from a package store. The following section illustrates the",source:"@site/docs/dependencies/0010-install-linux-packages.md",sourceDirName:"dependencies",slug:"/dependencies/0010-install-linux-packages",permalink:"/VirtualClient/docs/dependencies/0010-install-linux-packages",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0010-install-linux-packages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wait Executor Dependency",permalink:"/VirtualClient/docs/dependencies/0002-wait-executor"},next:{title:"Install Snap Packages",permalink:"/VirtualClient/docs/dependencies/0011-install-snap-packages"}},p={},o=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:".NET Supported Linux Distributions",id:"net-supported-linux-distributions",level:2},{value:"Supported Package Managers and Distros",id:"supported-package-managers-and-distros",level:2},{value:"Define LinuxPackageInstallation dependency",id:"define-linuxpackageinstallation-dependency",level:2},{value:"Example: Packages that have the same name across distros",id:"example-packages-that-have-the-same-name-across-distros",level:2},{value:"Example: Packages that have different names across package managers",id:"example-packages-that-have-different-names-across-package-managers",level:2},{value:"Example: Packages that have different names across different Linux distros",id:"example-packages-that-have-different-names-across-different-linux-distros",level:2},{value:"Example: Packages that require specific repositories",id:"example-packages-that-require-specific-repositories",level:2},{value:"Example: Packages that require repositories specific to a given Linux distro",id:"example-packages-that-require-repositories-specific-to-a-given-linux-distro",level:2},{value:"Mapping: Common Packages Used in Virtual Client Profiles",id:"mapping-common-packages-used-in-virtual-client-profiles",level:2}],c={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-linux-packages"},"Install Linux Packages"),(0,r.kt)("p",null,"Virtual Client has a dependency component that can be added to a workload or monitor profile to install dependency packages from a package store. The following section illustrates the\ndetails for integrating this into the profile. The platform has a goal to supporting all platforms and specifics with relative ease (i.e. it should work out-of-the-box).\nInstalling a package is easy. Installing packages on different platforms and package managers is not. "),(0,r.kt)("p",null,"The platform encapsulates the complex logic of handling package installation on different distros into a single component that users can easily\nuse in profiles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.debian.org/AptCLI"},"Package Manager Apt"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rpm-software-management/dnf"},"Package Manager Dnf"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://yum.baseurl.org/"},"Package Manager Yum"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.opensuse.org/Portal:Zypper"},"Package Manager Zypper"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linode.com/docs/guides/linux-package-management-overview/"},"A Good Third-Party Intro"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkgs.org/"},"Search for Packages"),"  ")),(0,r.kt)("h2",{id:"supported-platformarchitectures"},"Supported Platform/Architectures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64")),(0,r.kt)("h2",{id:"net-supported-linux-distributions"},".NET Supported Linux Distributions"),(0,r.kt)("p",null,"VirtualClient runs on .NET 6. It should run on any distribution supported by .NET 6."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md"},"Supported Distros"))),(0,r.kt)("h2",{id:"supported-package-managers-and-distros"},"Supported Package Managers and Distros"),(0,r.kt)("p",null,"The following table shows the list of package managers and the Linux distros on which they are typically supported by default. Note that this list does not infer that\nall Virtual Client workloads and profiles have been properly tested and confirmed working across all of these package managers and distros but is intended only\nto help users of the application make basic determinations on the likelihood that a particular profile will operate correctly on a given distro. It is entirely possible that\nsome workloads, monitors or dependencies simply will not work on specific distros.To make this easier for users to determine whether a given profile was tested and confirmed\nto work on a particular distro, the profile may contain a ",(0,r.kt)("strong",{parentName:"p"},"SupportedDistributions")," parameter indicating this."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package Manager"),(0,r.kt)("th",{parentName:"tr",align:null},"Distributions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apt"),(0,r.kt)("td",{parentName:"tr",align:null},"Debian, Ubuntu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dnf"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS/RHEL8, Mariner, Fedora")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yum"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS/RHEL7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zypper"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSUSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Flatcar")))),(0,r.kt)("h2",{id:"define-linuxpackageinstallation-dependency"},"Define LinuxPackageInstallation dependency"),(0,r.kt)("p",null,"LinuxPackageInstallation is a dependency class that handles the complexity of installing different packages on different Linux distributions. The package installation scenarios given\ndifferent Linux distros are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Packages with the same name across all distros."),(0,r.kt)("li",{parentName:"ul"},"Packages with specific names depending upon the distro."),(0,r.kt)("li",{parentName:"ul"},"Packages with specific names dependending upon the package manager.")),(0,r.kt)("h2",{id:"example-packages-that-have-the-same-name-across-distros"},"Example: Packages that have the same name across distros"),(0,r.kt)("p",null,"This is the simplest case. The package is well-known and all package managers use the same name for the package."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-GRAPH500.json"},"Profile Example")),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "LinuxPackageInstallation",\n    "Parameters": {\n        "Scenario": "InstallRequiredLinuxPackages",\n        "Packages": "make,mpich"\n    }\n}\n'))))),(0,r.kt)("h2",{id:"example-packages-that-have-different-names-across-package-managers"},"Example: Packages that have different names across package managers"),(0,r.kt)("p",null,"If the packages are directly available in the default repositories, users only need to fill in the corresponding package names, in the different package manager.\nYou need to repeat it for other package management because the name could be different in different package manager.\nThe following is example for libaio, which is used in FIO tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-GPU-SUPERBENCH.json"},"Profile Example")),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "LinuxPackageInstallation",\n    "Parameters": {\n        "Packages-Apt": "libaio1,libaio-dev",\n        "Packages-Dnf": "libaio,libaio-devel",\n        "Packages-Yum": "libaio,libaio-devel",\n        "Packages-Zypper": "libaio1,libaio-dev"\n    }\n}\n'))))),(0,r.kt)("h2",{id:"example-packages-that-have-different-names-across-different-linux-distros"},"Example: Packages that have different names across different Linux distros"),(0,r.kt)("p",null,"There are packages that has different names/paths in different distributions. It follows the convention of ",(0,r.kt)("em",{parentName:"p"},"Packages-Distro"),".\nThe following example is for Atop. Apt and Zypper have them in default repository, however Redhat decided to put them in EPEL repo and not as default.",(0,r.kt)("br",{parentName:"p"}),"\n","However, please note that in actual installation, epel-release and atop can't be installed in the same command.\nEpel-release needs to be installed first, so this is separated into two LinuxPackageInstallation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/MONITORS-DEFAULT.json"},"Profile Example")),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "LinuxPackageInstallation",\n    "Parameters": {\n        "Packages-RHEL8": "https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm",\n        "Packages-RHEL7": "https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm",\n        "Packages-CentOS7": "epel-release",\n        "Packages-Apt": "atop",\n        "Packages-Dnf": "atop",\n        "Packages-Yum": "atop",\n        "Packages-Zypper": "atop"\n    }\n}\n'))))),(0,r.kt)("h2",{id:"example-packages-that-require-specific-repositories"},"Example: Packages that require specific repositories"),(0,r.kt)("p",null,"There are packages that are not available in the default repositories. Thus VC needs to add them to the system. Due to how package manager works, they are intrinsicly packageManager specific.\nIt follows the convention of ",(0,r.kt)("em",{parentName:"p"},"Repositories-PackageManager"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-NETWORK-DEATHSTARBENCH.json"},"Profile Example")),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "LinuxPackageInstallation",\n    "Parameters": {\n        "Repositories-Apt": "ppa:ubuntu-toolchain-r/test",\n        "Packages-Apt": "gcc-10",\n        "Packages-Dnf": "gcc-toolset-10",\n        "Packages-Yum": "gcc-toolset-10",\n        "Packages-Zypper": "gcc10"\n    }\n}\n'))))),(0,r.kt)("h2",{id:"example-packages-that-require-repositories-specific-to-a-given-linux-distro"},"Example: Packages that require repositories specific to a given Linux distro"),(0,r.kt)("p",null,"There are packages that are not available in the default repositories. Thus VC needs to add them to the system. What makes it worse is that those repository could be distro-version specific.\nFor these scenarios, LinuxPackageInstallation class supports definition of distro-specific extra repository. It follows the convention of ",(0,r.kt)("em",{parentName:"p"},"Repositories-Distro"),".\nLuckily so far VC does not use those packages in current workloads. However, those things do exist."),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "LinuxPackageInstallation",\n    "Parameters": {\n        "Repositories-RHEL8": "RHEL8.repo, IWillUpdateWhenIHaveARealExample",\n        "Repositories-RHEL7": "RHEL7.repo, IWillUpdateWhenIHaveARealExample",\n        "Packages-Apt": "somePackage",\n        "Packages-Dnf": "somePackage",\n        "Packages-Yum": "somePackage",\n        "Packages-Zypper": "somePackage"\n    }\n}\n'))),(0,r.kt)("h2",{id:"mapping-common-packages-used-in-virtual-client-profiles"},"Mapping: Common Packages Used in Virtual Client Profiles"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package"),(0,r.kt)("th",{parentName:"tr",align:null},"apt"),(0,r.kt)("th",{parentName:"tr",align:null},"dnf"),(0,r.kt)("th",{parentName:"tr",align:null},"yum"),(0,r.kt)("th",{parentName:"tr",align:null},"zypper"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atop"),(0,r.kt)("td",{parentName:"tr",align:null},"atop"),(0,r.kt)("td",{parentName:"tr",align:null},"atop(extra package)"),(0,r.kt)("td",{parentName:"tr",align:null},"atop(extra package)"),(0,r.kt)("td",{parentName:"tr",align:null},"atop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"automake"),(0,r.kt)("td",{parentName:"tr",align:null},"automake"),(0,r.kt)("td",{parentName:"tr",align:null},"automake"),(0,r.kt)("td",{parentName:"tr",align:null},"automake"),(0,r.kt)("td",{parentName:"tr",align:null},"automake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bison"),(0,r.kt)("td",{parentName:"tr",align:null},"bison"),(0,r.kt)("td",{parentName:"tr",align:null},"bison"),(0,r.kt)("td",{parentName:"tr",align:null},"bison"),(0,r.kt)("td",{parentName:"tr",align:null},"bison")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"byacc"),(0,r.kt)("td",{parentName:"tr",align:null},"byacc"),(0,r.kt)("td",{parentName:"tr",align:null},"byacc"),(0,r.kt)("td",{parentName:"tr",align:null},"byacc"),(0,r.kt)("td",{parentName:"tr",align:null},"byacc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmake"),(0,r.kt)("td",{parentName:"tr",align:null},"cmake"),(0,r.kt)("td",{parentName:"tr",align:null},"cmake"),(0,r.kt)("td",{parentName:"tr",align:null},"cmake"),(0,r.kt)("td",{parentName:"tr",align:null},"cmake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcc"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcc-11"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc-11"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc-toolset-11"),(0,r.kt)("td",{parentName:"tr",align:null},"centos-release-scl-rh,devtoolset-11-gcc"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"libaio"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio1"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"libaio-dev"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio-dev"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio-devel"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio-devel"),(0,r.kt)("td",{parentName:"tr",align:null},"libaio-dev")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"make"),(0,r.kt)("td",{parentName:"tr",align:null},"make"),(0,r.kt)("td",{parentName:"tr",align:null},"make"),(0,r.kt)("td",{parentName:"tr",align:null},"make"),(0,r.kt)("td",{parentName:"tr",align:null},"make")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nvidia-driver"),(0,r.kt)("td",{parentName:"tr",align:null},"nvidia-common"),(0,r.kt)("td",{parentName:"tr",align:null},"nvidia-driver"),(0,r.kt)("td",{parentName:"tr",align:null},"nvidia-driver"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://software.opensuse.org/package/nvidia-driver"},"N/A"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mpich"),(0,r.kt)("td",{parentName:"tr",align:null},"mpich"),(0,r.kt)("td",{parentName:"tr",align:null},"mpich"),(0,r.kt)("td",{parentName:"tr",align:null},"mpich"),(0,r.kt)("td",{parentName:"tr",align:null},"mpich")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python3-pip"),(0,r.kt)("td",{parentName:"tr",align:null},"python3-pip"),(0,r.kt)("td",{parentName:"tr",align:null},"python3-pip"),(0,r.kt)("td",{parentName:"tr",align:null},"python3-pip"),(0,r.kt)("td",{parentName:"tr",align:null},"python3-pip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sshpass"),(0,r.kt)("td",{parentName:"tr",align:null},"sshpass"),(0,r.kt)("td",{parentName:"tr",align:null},"sshpass"),(0,r.kt)("td",{parentName:"tr",align:null},"sshpass"),(0,r.kt)("td",{parentName:"tr",align:null},"sshpass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stress-ng"),(0,r.kt)("td",{parentName:"tr",align:null},"stress-ng"),(0,r.kt)("td",{parentName:"tr",align:null},"stress-ng"),(0,r.kt)("td",{parentName:"tr",align:null},"stress-ng"),(0,r.kt)("td",{parentName:"tr",align:null},"stress-ng")))))}d.isMDXComponent=!0}}]);