---
id: overview
sidebar_position: 1
keywords: [benchmark, automation, workload, monitoring, microsoft,
    coremark,hpcg, lapack, openfoam,redis, memcached, specjvm] 
---

# Overview
The Virtual Client is a unified workload and system monitoring platform for running customer-representative scenarios on virtual machines or physical hosts/blades in the Azure Cloud. 
The platform supports a wide range of different industry standard/benchmark workloads used to measuring various aspects of the system under test (e.g. CPU, I/O, network performance, power consumption). 
The platform additionally provides the ability to capture important performance and reliability measurements from the underlying system. The platform supports all business-critical 
Azure environments including guest/VM systems, host/blade systems and data center/DC lab systems. The platform additionally supports both x64 and ARM64 compute architectures.

* [Platform Features](../overview/features.md)
* [Platform Design](../overview/design.md)
* [Developer Guide](../developing/develop-guide.md)
* [Additional Usage Examples](../category/usage-scenarios)  

## Team Contacts
* [virtualclient@microsoft.com](mailto:virtualclient@microsoft.com)


## Supported Benchmark Workloads
The following list of workloads are used by Virtual Client profiles to exercise the system components in a consistent way required to measure performance baselines and differences. 

:::caution Comply to licenses you are using
VirtualClient handles the installation and execution of various tools. Individual license files are not prompted for each workload. By using VirtualClient, users accept the license of each of the benchmarks individually, comply to the terms for the tool you are using, and take responsibility for using them.
:::

| **Benchmark** | **Specialization** | **Supported Platforms/Architectures** | **License(s)**  |
|---|---|---|---|
| [7zip](../workloads/compression/7zip.md) | 7zip compression | linux-x64, linux-arm64 | [GNU LGPL](https://www.7-zip.org/faq.html)  |
| [AspNetBench](../workloads/aspnetbench/AspNetBench.md) | ASP.NET server | linux-x64, linux-arm64, win-x64, win-arm64 | [**ASP.NET**:MIT](https://github.com/dotnet/aspnetcore/blob/main/LICENSE.txt)<br/>[**Bombardier**:MIT](https://github.com/codesenberg/bombardier/blob/master/LICENSE)  |
| [CoreMark](../workloads/coremark/CoreMark.md) | Generic CPU | linux-x64,linux-arm64 | [Apache+Custom](https://github.com/eembc/coremark/blob/main/LICENSE.md)  |
| [CPS](../workloads/network/NetworkSuite.md) | Network RoundTripTime | linux-x64, linux-arm64, win-x64, win-arm64 | MSFT developed  |
| [DeathStarBench](../workloads/deathstarbench/DeathStarBench.md) | Swarm container microservices | linux-x64, linux-arm64, win-x64, win-arm64 | [Apache-2.0](https://github.com/delimitrou/DeathStarBench/blob/master/LICENSE)  |
| [DiskSpd](../workloads/diskspd/DiskSpd.md) | Disk Stress | win-x64, win-arm64 | [MIT](https://github.com/microsoft/diskspd/blob/master/LICENSE)  |
| [Flexible IO Tester (FIO)](../workloads/fio/FIO.md) | Disk IO Performance | linux-x64, linux-arm64, win-x64 | [GPL-2.0](https://github.com/axboe/fio/blob/master/COPYING)  |
| [Graph500](../workloads/graph500/Graph500.md) | 3D Simulation | linux-x64, linux-arm64 | [Custom](https://github.com/graph500/graph500/blob/newreference/license.txt)  |
| [gzip](../workloads/compression/gzip.md) | pbzip2 compression | linux-x64, linux-arm64 | [GPL](https://www.gnu.org/software/gzip/)  |
| [HPCG](../workloads/hpcg/HPCG.md) | High Performance Compute (HPC) | linux-x64, linux-arm64 | [Custom](https://github.com/hpcg-benchmark/hpcg/blob/master/COPYING)  |
| [LAPACK](../workloads/lapack/LAPACK.md) | Linear Equations | linux-x64, linux-arm64, win-x64, win-arm64 | [Custom](https://github.com/Reference-LAPACK/lapack/blob/master/LICENSE)  |
| [Latte](../workloads/network/NetworkSuite.md) | Network latency | win-x64, win-arm64 | [MIT](https://github.com/microsoft/latte/blob/main/LICENSE)  |
| [LMbench](../workloads/lmbench/LMbench.md) | Generic Memory | linux-x64, linux-arm64 | [GPL-2.0](https://github.com/intel/lmbench/blob/master/COPYING)  |
| [LZBench](https://github.com/inikep/lzbench ) | Compression/Streaming | linux-x64, linux-arm64, win-x64, win-arm64 | [None](https://github.com/inikep/lzbench)  |
| [Memcached](../workloads/memcached/memcached.md) | Memcached Performance | linux-x64, linux-arm64 | [**memcached**:BSD-3](https://github.com/memcached/memcached/blob/master/LICENSE)<br/>[**Memtier**:GPL-2.0](https://github.com/RedisLabs/memtier_benchmark/blob/master/COPYING)  |
| [MLPerf](../workloads/mlperf/MLPerf.md) | Machine learning | linux-x64 | [Custom](https://github.com/mlcommons/training/blob/master/LICENSE.md)  |
| [NAS Parallel](../workloads/nasparallel/NASParallelBench.md) | High Performance Compute (HPC) | linux-x64, linux-arm64 | [NASA-1.3](https://opensource.org/licenses/nasa1.3.php)  |
| [Network ICMP Ping](../workloads/network-ping/NetworkPing.md) | Simple Network Ping | linux-x64, linux-arm64, win-x64, win-arm64 | [MIT](https://github.com/microsoft/VirtualClient/blob/main/LICENSE)  |
| [NTttcp](../workloads/network/NetworkSuite.md) | Network bandwidth | linux-x64, linux-arm64, win-x64, win-arm64 | [MIT](https://github.com/microsoft/ntttcp/blob/main/LICENSE)  |
| [OpenFOAM](../workloads/openfoam/OpenFOAM.md) | Fluidmechanics | linux-x64, linux-arm64 | [Custom](https://github.com/OpenFOAM/OpenFOAM-10/blob/master/COPYING)  |
| [OpenSSL](../workloads/openssl/OpenSSL.md) | Cryptography | linux-x64, linux-arm64, win-x64 | [Apache-2.0](https://github.com/openssl/openssl/blob/master/LICENSE.txt)  |
| [pbzip2](../workloads/compression/pbzip2.md) | pbzip2 compression | linux-x64, linux-arm64 | [BSD](http://compression.great-site.net/pbzip2/)  |
| [Prime95](../workloads/prime95/prime95.md) | Prime number search | linux-x64 | [Custom](https://www.mersenne.org/legal/)  |
| [Redis](../workloads/redis/Redis.md) | Redis Performance | linux-x64, linux-arm64 | [**Redis**:BSD-3](https://github.com/redis/redis/blob/unstable/COPYING)<br/>[**Memtier**:GPL-2.0](https://github.com/RedisLabs/memtier_benchmark/blob/master/COPYING)  |
| [SockPerf](../workloads/network/NetworkSuite.md) | Network latency | linux-x64, linux-arm64 | [Custom](https://github.com/Mellanox/sockperf/blob/sockperf_v2/copying)  |
| [SPECjvm](../workloads/specjvm/SPECjvm.md) | Java Runtime | linux-x64, linux-arm64, win-x64, win-arm64 | [SPEC](https://www.spec.org/spec/docs/SPEC_General_License.pdf)  |
| [stress-ng](../workloads/stress-ng/StressNg.md) | Fault Tolerance | linux-x64, linux-arm64 | [GPL-2.0](https://github.com/ColinIanKing/stress-ng/blob/master/COPYING)  |
| [SuperBench](../workloads/superbenchmark/superbenchmark.md) | Machine learning | linux-x64 | [MIT](https://github.com/microsoft/superbenchmark/blob/main/LICENSE)  |




## System Monitoring Facilities
The platform supports capturing information from the system in the background while workloads are running. The following list of monitoring facilities are available in the Virtual Client. 

:::info
Certain monitoring facilities are only available on specific hardware because they expect specific tools/hardware on the system (e.g. ipmiutil, nvidia monitors).
:::

| Monitoring Category          | Monitor                 | Dependency                    | Supported Platforms/Architectures          | Notes |
|------------------------------|-------------------------|--------------------------------------------|--------------------------------------------|-------|
| Performance/Reliability      | Performance Counters    | None     | linux-x64, linux-arm64, win-x64, win-arm64 | A standard set of performance counters is captured for all executions of the application: [Counters Captured](../workloads/PerformanceCounterMetrics.md) |

:::tip More workloads and monitors are coming
VirtualClient is just migrated from MSFT inner-source to GitHub. We are still reviewing the feasibility of some internal workloads and monitors. We are also implementing a way to safely release automation for paid/commercial workloads (SPECcpu, SPECjbb, GeekBench5, 3DMark). They will come to VC in the future.
:::

## Current Stable Version(s)
The following section designates the latest stable versions of the Virtual Client. If the version of the Virtual Client is not in this list, then it is NOT recommended for use anymore.

### Version 0.0.2
Released 

* NuGet Release



## Telemetry Notice
Data Collection. 

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft’s privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.