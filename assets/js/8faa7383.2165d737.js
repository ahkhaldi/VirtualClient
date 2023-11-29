"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5613],{5857:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var r=t(5893),s=t(3905);const i={},c="Memcached",n={id:"workloads/memcached/memcached",title:"Memcached",description:"Memcached is an open source (BSD licensed), high-performance, distributed memory object caching system. Memcached is an in-memory key-value store for small",source:"@site/docs/workloads/memcached/memcached.md",sourceDirName:"workloads/memcached",slug:"/workloads/memcached/",permalink:"/VirtualClient/docs/workloads/memcached/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/memcached/memcached.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LMbench Workload Profiles",permalink:"/VirtualClient/docs/workloads/lmbench/lmbench-profiles"},next:{title:"Memcached Workload Profiles",permalink:"/VirtualClient/docs/workloads/memcached/memcached-profiles"}},l={},h=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}];function _(e){const d={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h1,{id:"memcached",children:"Memcached"}),"\n",(0,r.jsx)(d.p,{children:"Memcached is an open source (BSD licensed), high-performance, distributed memory object caching system. Memcached is an in-memory key-value store for small\narbitrary data (strings, objects) from results of database calls, API calls, or page rendering. Memcached works with an in-memory dataset. It is a client-server\nmodel workload in which Memcached acts as server. There are different tools that acts are clients."}),"\n",(0,r.jsx)(d.p,{children:"One of the widely used is the memtier_benchmark produced by Redis Labs."}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/memcached/memcached/wiki/Performance",children:"Memcached Performance"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://redis.com/blog/memtier_benchmark-a-high-throughput-benchmarking-tool-for-redis-memcached/",children:"Memtier Benchmarking Tool"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://memcached.org/about",children:"Official Memcached Documentation"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/memcached/memcached",children:"Memcached Github Repo"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/RedisLabs/memtier_benchmark",children:"Memtier Benchmark Toolset"})}),"\n"]}),"\n",(0,r.jsx)(d.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,r.jsx)(d.p,{children:"The Memtier toolset is used to generate various traffic patterns against Memcached instances. It provides a robust set of customization and reporting\ncapabilities all wrapped into a convenient and easy-to-use command-line interface. It performs GET and SET operations against a Memcached server\nand gives percentile latency distributions and throughput."}),"\n",(0,r.jsx)(d.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,r.jsx)(d.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the Memtier workload against a\nMemcached server."}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"ScenarioName"}),(0,r.jsx)(d.th,{children:"Metric Name"}),(0,r.jsx)(d.th,{children:"Example Value"}),(0,r.jsx)(d.th,{children:"Unit"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Throughput_Avg"}),(0,r.jsx)(d.td,{children:"96143.676666666681"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Throughput_Max"}),(0,r.jsx)(d.td,{children:"99310.66"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Throughput_Min"}),(0,r.jsx)(d.td,{children:"93126.7"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Throughput_Stdev"}),(0,r.jsx)(d.td,{children:"1756.3137622699699"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Throughput_P80"}),(0,r.jsx)(d.td,{children:"98123.77"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Throughput_Sum"}),(0,r.jsx)(d.td,{children:"1153724.12"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Hits/sec_Avg"}),(0,r.jsx)(d.td,{children:"48070.774999999994"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Hits/sec_Max"}),(0,r.jsx)(d.td,{children:"49654.27"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Hits/sec_Min"}),(0,r.jsx)(d.td,{children:"46562.29"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Hits/sec_Stdev"}),(0,r.jsx)(d.td,{children:"878.156472669686"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Hits/sec_P80"}),(0,r.jsx)(d.td,{children:"49060.82"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Hits/sec_Sum"}),(0,r.jsx)(d.td,{children:"576849.29999999993"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Misses/sec_Avg"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Misses/sec_Min"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Misses/sec_Max"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Misses/sec_Stdev"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Misses/sec_P80"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Misses/sec_Sum"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-Avg_Avg"}),(0,r.jsx)(d.td,{children:"265.929245"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-Avg_Min"}),(0,r.jsx)(d.td,{children:"257.37339"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-Avg_Max"}),(0,r.jsx)(d.td,{children:"274.49494"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-Avg_Stdev"}),(0,r.jsx)(d.td,{children:"4.8649509314371953"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-Avg_P80"}),(0,r.jsx)(d.td,{children:"268.37573"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P50_Avg"}),(0,r.jsx)(d.td,{children:"258.4736666666667"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P50_Min"}),(0,r.jsx)(d.td,{children:"252.927"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P50_Max"}),(0,r.jsx)(d.td,{children:"266.239"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P50_Stdev"}),(0,r.jsx)(d.td,{children:"3.9095334191634046"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P50_P80"}),(0,r.jsx)(d.td,{children:"260.095"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P90_Min"}),(0,r.jsx)(d.td,{children:"331.775"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P90_Avg"}),(0,r.jsx)(d.td,{children:"337.74833333333333"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P90_P80"}),(0,r.jsx)(d.td,{children:"339.967"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P90_Max"}),(0,r.jsx)(d.td,{children:"348.159"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P90_Stdev"}),(0,r.jsx)(d.td,{children:"4.6894529413236388"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P95_Min"}),(0,r.jsx)(d.td,{children:"346.111"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P95_Avg"}),(0,r.jsx)(d.td,{children:"354.4736666666667"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P95_Max"}),(0,r.jsx)(d.td,{children:"364.543"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P95_Stdev"}),(0,r.jsx)(d.td,{children:"4.6894529413236388"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P95_P80"}),(0,r.jsx)(d.td,{children:"356.351"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99_Avg"}),(0,r.jsx)(d.td,{children:"385.36433333333338"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99_Min"}),(0,r.jsx)(d.td,{children:"376.831"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99_Max"}),(0,r.jsx)(d.td,{children:"397.311"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99_Stdev"}),(0,r.jsx)(d.td,{children:"5.3427117542394855"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99_P80"}),(0,r.jsx)(d.td,{children:"389.119"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99.9_Avg"}),(0,r.jsx)(d.td,{children:"442.02566666666667"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99.9_Min"}),(0,r.jsx)(d.td,{children:"411.647"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99.9_Max"}),(0,r.jsx)(d.td,{children:"532.479"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99.9_Stdev"}),(0,r.jsx)(d.td,{children:"32.01080706400402"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Latency-P99.9_P80"}),(0,r.jsx)(d.td,{children:"452.607"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Bandwidth_Avg"}),(0,r.jsx)(d.td,{children:"99831.145833333328"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Bandwidth_Min"}),(0,r.jsx)(d.td,{children:"96698.49"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Bandwidth_Stdev"}),(0,r.jsx)(d.td,{children:"1823.6575402628735"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Bandwidth_Max"}),(0,r.jsx)(d.td,{children:"103119.55"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Bandwidth_P80"}),(0,r.jsx)(d.td,{children:"101887.18"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Throughput_Avg"}),(0,r.jsx)(d.td,{children:"48070.774999999994"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"Bandwidth_Sum"}),(0,r.jsx)(d.td,{children:"1197973.75"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Throughput_Min"}),(0,r.jsx)(d.td,{children:"46562.29"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Throughput_Max"}),(0,r.jsx)(d.td,{children:"49654.27"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Throughput_P80"}),(0,r.jsx)(d.td,{children:"49060.82"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Throughput_Stdev"}),(0,r.jsx)(d.td,{children:"878.156472669686"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Throughput_Sum"}),(0,r.jsx)(d.td,{children:"576849.29999999993"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-Avg_Avg"}),(0,r.jsx)(d.td,{children:"265.9334425"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-Avg_Min"}),(0,r.jsx)(d.td,{children:"257.37776"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-Avg_P80"}),(0,r.jsx)(d.td,{children:"268.38027"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-Avg_Max"}),(0,r.jsx)(d.td,{children:"274.49896"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-Avg_Stdev"}),(0,r.jsx)(d.td,{children:"4.8649389483855519"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P50_Avg"}),(0,r.jsx)(d.td,{children:"258.4736666666667"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P50_Min"}),(0,r.jsx)(d.td,{children:"252.927"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P50_Max"}),(0,r.jsx)(d.td,{children:"266.239"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P90_Avg"}),(0,r.jsx)(d.td,{children:"337.74833333333333"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P90_Stdev"}),(0,r.jsx)(d.td,{children:"4.6894529413236388"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P90_Min"}),(0,r.jsx)(d.td,{children:"331.775"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P90_Max"}),(0,r.jsx)(d.td,{children:"348.159"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P50_Stdev"}),(0,r.jsx)(d.td,{children:"3.9095334191634046"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P50_P80"}),(0,r.jsx)(d.td,{children:"260.095"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P90_P80"}),(0,r.jsx)(d.td,{children:"339.967"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P95_Avg"}),(0,r.jsx)(d.td,{children:"354.81500000000005"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P95_Min"}),(0,r.jsx)(d.td,{children:"346.111"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P95_Max"}),(0,r.jsx)(d.td,{children:"364.543"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P95_Stdev"}),(0,r.jsx)(d.td,{children:"5.0252567430265076"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P95_P80"}),(0,r.jsx)(d.td,{children:"356.351"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99_Avg"}),(0,r.jsx)(d.td,{children:"386.047"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99_Min"}),(0,r.jsx)(d.td,{children:"376.831"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99_Max"}),(0,r.jsx)(d.td,{children:"397.311"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99_Stdev"}),(0,r.jsx)(d.td,{children:"5.3208600808515767"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99_P80"}),(0,r.jsx)(d.td,{children:"391.167"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99.9_Avg"}),(0,r.jsx)(d.td,{children:"442.87900000000008"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99.9_Min"}),(0,r.jsx)(d.td,{children:"411.647"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99.9_Max"}),(0,r.jsx)(d.td,{children:"532.479"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99.9_Stdev"}),(0,r.jsx)(d.td,{children:"31.706816932640848"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Latency-P99.9_P80"}),(0,r.jsx)(d.td,{children:"454.655"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Bandwidth_Avg"}),(0,r.jsx)(d.td,{children:"49797.129166666673"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Bandwidth_Stdev"}),(0,r.jsx)(d.td,{children:"909.68510072129129"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Bandwidth_Min"}),(0,r.jsx)(d.td,{children:"48234.48"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Bandwidth_Max"}),(0,r.jsx)(d.td,{children:"51437.47"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Bandwidth_P80"}),(0,r.jsx)(d.td,{children:"50822.73"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Throughput_Avg"}),(0,r.jsx)(d.td,{children:"48072.902499999989"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"GET_Bandwidth_Sum"}),(0,r.jsx)(d.td,{children:"597565.55"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Throughput_Min"}),(0,r.jsx)(d.td,{children:"46564.42"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Throughput_Max"}),(0,r.jsx)(d.td,{children:"49656.39"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Throughput_P80"}),(0,r.jsx)(d.td,{children:"49062.95"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Throughput_Stdev"}),(0,r.jsx)(d.td,{children:"878.15536932182385"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Throughput_Sum"}),(0,r.jsx)(d.td,{children:"576874.82999999984"}),(0,r.jsx)(d.td,{children:"requests/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-Avg_Avg"}),(0,r.jsx)(d.td,{children:"265.92504749999995"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-Avg_Min"}),(0,r.jsx)(d.td,{children:"257.36902"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-Avg_Max"}),(0,r.jsx)(d.td,{children:"274.49091"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-Avg_P80"}),(0,r.jsx)(d.td,{children:"268.37118"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P50_Avg"}),(0,r.jsx)(d.td,{children:"258.4736666666667"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-Avg_Stdev"}),(0,r.jsx)(d.td,{children:"4.8649615272924267"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P50_Min"}),(0,r.jsx)(d.td,{children:"252.927"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P50_Max"}),(0,r.jsx)(d.td,{children:"266.239"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P50_P80"}),(0,r.jsx)(d.td,{children:"260.095"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P90_Avg"}),(0,r.jsx)(d.td,{children:"337.74833333333333"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P50_Stdev"}),(0,r.jsx)(d.td,{children:"3.9095334191634046"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P90_Min"}),(0,r.jsx)(d.td,{children:"331.775"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P90_Max"}),(0,r.jsx)(d.td,{children:"348.159"}),(0,r.jsx)(d.td,{children:"milli0seconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P90_Stdev"}),(0,r.jsx)(d.td,{children:"4.6894529413236388"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P90_P80"}),(0,r.jsx)(d.td,{children:"339.967"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P95_Avg"}),(0,r.jsx)(d.td,{children:"354.30299999999994"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P95_Min"}),(0,r.jsx)(d.td,{children:"346.111"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P95_Max"}),(0,r.jsx)(d.td,{children:"364.543"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P95_Stdev"}),(0,r.jsx)(d.td,{children:"4.8029857380591956"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P95_P80"}),(0,r.jsx)(d.td,{children:"356.351"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99_Stdev"}),(0,r.jsx)(d.td,{children:"5.1850095039021333"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99_Min"}),(0,r.jsx)(d.td,{children:"374.783"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99_Avg"}),(0,r.jsx)(d.td,{children:"384.85233333333332"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99_P80"}),(0,r.jsx)(d.td,{children:"389.119"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99_Max"}),(0,r.jsx)(d.td,{children:"395.263"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99.9_Avg"}),(0,r.jsx)(d.td,{children:"441.17233333333337"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99.9_Min"}),(0,r.jsx)(d.td,{children:"409.599"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99.9_Max"}),(0,r.jsx)(d.td,{children:"536.575"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99.9_Stdev"}),(0,r.jsx)(d.td,{children:"33.438038432632723"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Bandwidth_Avg"}),(0,r.jsx)(d.td,{children:"50034.015833333331"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Latency-P99.9_P80"}),(0,r.jsx)(d.td,{children:"450.559"}),(0,r.jsx)(d.td,{children:"milliseconds"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Bandwidth_Min"}),(0,r.jsx)(d.td,{children:"48464.01"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Bandwidth_P80"}),(0,r.jsx)(d.td,{children:"51064.45"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Bandwidth_Stdev"}),(0,r.jsx)(d.td,{children:"913.97098802841549"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Bandwidth_Sum"}),(0,r.jsx)(d.td,{children:"600408.19"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"memtier_16t_16c_1kb_r1:1"}),(0,r.jsx)(d.td,{children:"SET_Bandwidth_Max"}),(0,r.jsx)(d.td,{children:"51682.07"}),(0,r.jsx)(d.td,{children:"kilobytes/sec"})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,s.ah)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},3905:(e,d,t)=>{t.d(d,{ah:()=>h});var r=t(7294);function s(e,d,t){return d in e?Object.defineProperty(e,d,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[d]=t,e}function i(e,d){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);d&&(r=r.filter((function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var d=1;d<arguments.length;d++){var t=null!=arguments[d]?arguments[d]:{};d%2?i(Object(t),!0).forEach((function(d){s(e,d,t[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(t,d))}))}return e}function n(e,d){if(null==e)return{};var t,r,s=function(e,d){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],d.indexOf(t)>=0||(s[t]=e[t]);return s}(e,d);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],d.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),h=function(e){var d=r.useContext(l),t=d;return e&&(t="function"==typeof e?e(d):c(c({},d),e)),t},_={inlineCode:"code",wrapper:function(e){var d=e.children;return r.createElement(r.Fragment,{},d)}},x=r.forwardRef((function(e,d){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,x=n(e,["components","mdxType","originalType","parentName"]),j=h(t),m=s,a=j["".concat(l,".").concat(m)]||j[m]||_[m]||i;return t?r.createElement(a,c(c({ref:d},x),{},{components:t})):r.createElement(a,c({ref:d},x))}));x.displayName="MDXCreateElement"}}]);