"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6458],{62280:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>p});var i=s(86070),n=s(25710);const t={title:"\u6027\u80fd\u5206\u6790",sidebar_position:5,author:{commit:"129c8f6",username:"imgbot[bot]"}},o="\u6027\u80fd\u5206\u6790",a={id:"process/maintenance/optimize/performance-analysis",title:"\u6027\u80fd\u5206\u6790",description:'\u6027\u80fd\u5206\u6790\u662f\u4e00\u5207"\u4f18\u5316"\u7684\u4f9d\u636e\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u670d\u52a1\u5668\u5bfc\u81f4\u5361\u987f\u7684\u5143\u51f6\uff0c\u90a3\u4e48\u5c06\u6beb\u65e0\u610f\u4e49\u3002',source:"@site/docs-java/process/maintenance/optimize/performance-analysis.md",sourceDirName:"process/maintenance/optimize",slug:"/process/maintenance/optimize/performance-analysis",permalink:"/NitWikit/Java/process/maintenance/optimize/performance-analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/performance-analysis.md",tags:[],version:"current",lastUpdatedBy:"imgbot[bot]",lastUpdatedAt:1724123778e3,sidebarPosition:5,frontMatter:{title:"\u6027\u80fd\u5206\u6790",sidebar_position:5,author:{commit:"129c8f6",username:"ghost"}},sidebar:"tutorialSidebar",previous:{title:"\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316",permalink:"/NitWikit/Java/process/maintenance/optimize/storage-space-optimization"},next:{title:"\u4f18\u5316\u8bef\u533a",permalink:"/NitWikit/Java/process/maintenance/optimize/optimized-plugin"}},c={},p=[{value:"Spark",id:"spark",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"/spark profiler",id:"spark-profiler",level:4},{value:"/spark health",id:"spark-health",level:4},{value:"/spark tps",id:"spark-tps",level:4},{value:"Timings",id:"timings",level:2},{value:"\u5176\u4ed6\u8f6f\u4ef6\u5206\u6790",id:"\u5176\u4ed6\u8f6f\u4ef6\u5206\u6790",level:2},{value:"arthas",id:"arthas",level:3},{value:"jprofiler",id:"jprofiler",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"\u6027\u80fd\u5206\u6790",children:"\u6027\u80fd\u5206\u6790"})}),"\n",(0,i.jsx)(r.p,{children:'\u6027\u80fd\u5206\u6790\u662f\u4e00\u5207"\u4f18\u5316"\u7684\u4f9d\u636e\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u670d\u52a1\u5668\u5bfc\u81f4\u5361\u987f\u7684\u5143\u51f6\uff0c\u90a3\u4e48\u5c06\u6beb\u65e0\u610f\u4e49\u3002'}),"\n",(0,i.jsx)(r.h2,{id:"spark",children:"Spark"}),"\n",(0,i.jsx)(r.p,{children:"Spark\u662f\u4e00\u4e2aMinecraft\u7684\u6027\u80fd\u5206\u6790\u5668\uff0c\u652f\u6301\u5e7f\u6cdb\uff08\u5982 Bukkit\uff0cBungeeCord\uff0cVelocity\uff0cForge\uff0cFabric \u7b49\uff09\u3002"}),"\n",(0,i.jsxs)(r.admonition,{type:"info",children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"\u5b98\u7f51"})," :",(0,i.jsx)(r.a,{href:"https://spark.lucko.me",children:"https://spark.lucko.me"})]}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"\u5b98\u7f51\u4e0b\u8f7d"})," :",(0,i.jsx)(r.a,{href:"https://spark.lucko.me/download",children:"https://spark.lucko.me/download"})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"\u5176\u4ed6\u76f8\u5173\u94fe\u63a5"}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"\u6587\u6863(\u82f1\u6587)"})," :",(0,i.jsx)(r.a,{href:"https://spark.lucko.me/docs",children:"https://spark.lucko.me/docs"})]}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"\u6587\u6863(\u4e2d\u6587)"})," :",(0,i.jsx)(r.a,{href:"https://snowcutieowo.github.io/spark",children:"https://snowcutieowo.github.io/spark"})]}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"SpigotMC"})," :",(0,i.jsx)(r.a,{href:"https://www.spigotmc.org/resources/spark.57242/",children:"https://www.spigotmc.org/resources/spark.57242/"})]}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Modrinth"})," :",(0,i.jsx)(r.a,{href:"https://modrinth.com/mod/spark",children:"https://modrinth.com/mod/spark"})]}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"GitHub"})," :",(0,i.jsx)(r.a,{href:"https://github.com/lucko/spark",children:"https://github.com/lucko/spark"})]}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"MC\u767e\u79d1"})," :",(0,i.jsx)(r.a,{href:"https://www.mcmod.cn/class/4073.html",children:"https://www.mcmod.cn/class/4073.html"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,i.jsx)(r.p,{children:"\u63d2\u4ef6\u670d\u548c 1.13 \u4ee5\u4e0a\u7684 mod \u670d\u8bf7\u4e0b\u8f7d\u63d2\u4ef6\u7248\u672c\u5e76\u5c06 Spark.jar \u6587\u4ef6\u63d2\u4ef6\u653e\u5230\u670d\u52a1\u7aef\u7684 plugins \u6587\u4ef6\u5939\u4e2d\u3002"}),"\n",(0,i.jsx)(r.p,{children:"1.12.2 \u548c\u4ee5\u4e0b\u6df7\u5408\u670d\u4f18\u5148\u4f7f\u7528 mod \u7248\u672c\uff0c\u653e\u5165 mods \u6587\u4ef6\u5939\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5bf9\u4e8e Purpur Fork \u670d\u52a1\u5668\uff0c\u9ed8\u8ba4\u81ea\u5e26 Spark\uff0c\u65e0\u9700\u5355\u72ec\u4e0b\u8f7d\u3002"}),"\n",(0,i.jsx)(r.h4,{id:"spark-profiler",children:"/spark profiler"}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u5206\u6790\u5668\u5df2\u7ecf\u542f\u52a8\uff0c\u4f60\u53ef\u4ee5\u8f93\u5165\u4e0b\u9762\u8fd9\u4e9b\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(r.p,{children:"/spark profiler open \u6253\u5f00\u5206\u6790\u62a5\u544a\u9875\u800c\u65e0\u9700\u505c\u6b62\uff1b"}),"\n",(0,i.jsx)(r.p,{children:"/spark profiler stop \u505c\u6b62\u5206\u6790\u5e76\u6d4f\u89c8\u5206\u6790\u7ed3\u679c\uff1b"}),"\n",(0,i.jsx)(r.p,{children:"/spark profiler cancel \u53d6\u6d88\u5206\u6790\u64cd\u4f5c\uff0c\u5e76\u53d6\u6d88\u4e0a\u4f20\u62a5\u544a\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u57fa\u672c\u7684\u64cd\u4f5c\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(r.p,{children:"/spark profiler start \u5728\u9ed8\u8ba4\u64cd\u4f5c\u6a21\u5f0f\u4e0b\u5f00\u59cb\u5206\u6790\uff1b"}),"\n",(0,i.jsx)(r.p,{children:"/spark profiler info \u68c0\u67e5\u5f53\u524d\u5206\u6790\u7684\u72b6\u6001\u3002"}),"\n",(0,i.jsxs)(r.p,{children:["\u8fd9\u662f\u4e3b\u8981\u7684\u6307\u4ee4\uff0c\u4e3a\u4e86\u66f4\u591a\u7684\u529f\u80fd\uff0c\u66f4\u7cbe\u51c6\u7684\u5206\u6790\u7b49\u53ef\u4ee5\u5728\u540e\u9762\u52a0\u4e0a\u53c2\u6570.\u5177\u4f53\u8bf7\u67e5\u770b ",(0,i.jsx)(r.a,{href:"https://snowcutieowo.github.io/spark/#/spark.command-usage",children:"profiler \u6307\u4ee4\u4f7f\u7528\u65b9\u6cd5"})]}),"\n",(0,i.jsx)(r.h4,{id:"spark-health",children:"/spark health"}),"\n",(0,i.jsx)(r.p,{children:"\u5b50\u547d\u4ee4 health \u4f1a\u4ea7\u751f\u4e00\u4efd\u670d\u52a1\u5668\u7684\u5065\u5eb7\u62a5\u544a\uff0c\u5176\u4e2d\u5305\u542b TPS\u3001CPU\u3001\u5185\u5b58\u548c\u786c\u76d8\u7684\u4f7f\u7528\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(r.h4,{id:"spark-tps",children:"/spark tps"}),"\n",(0,i.jsxs)(r.p,{children:["Spark \u9ed8\u8ba4\u4f1a\u66ff\u4ee3\u670d\u52a1\u5668\u7684 TPS \u8f93\u51fa(\u4f46\u53ef\u80fd\u88ab CMI \u7b49\u63d2\u4ef6\u8986\u76d6\uff0c\u8bf7\u5173\u95edCMI\u7684/tps\u6307\u4ee4\u6216\u8005\u8f93\u5165\u5b8c\u6574 ",(0,i.jsx)(r.code,{children:"/spark tps"})," \u83b7\u53d6)\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"timings",children:"Timings"}),"\n",(0,i.jsx)(r.p,{children:"Timings\u662f\u4e00\u4e2a Paper \u81ea\u5e26\u7684\u6027\u80fd\u5206\u6790\u5668\uff0c\u7531\u4e8e\u5176\u76d1\u542c\u6bcf\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u6027\u80fd\u5f00\u9500\u6bd4\u8f83\u5927\uff0c"}),"\n",(0,i.jsxs)(r.p,{children:["\u5728\u5f88\u591a\u670d\u52a1\u5668\u6838\u5fc3(\u5982 Purpur \u7b49)\u672c\u8eab\u4e5f\u662f\u88ab\u79fb\u9664\u7684\uff0c",(0,i.jsx)(r.strong,{children:"\u4e0d\u63a8\u8350"}),"\u3002"]}),"\n",(0,i.jsxs)(r.admonition,{type:"warning",children:[(0,i.jsx)(r.p,{children:"\u5728\u53ef\u9884\u89c1\u7684\u672a\u6765Timings\u5c06\u4f1a\u88ab\u79fb\u9664\uff0c\u4f5c\u4e3a\u65b0\u624b\u53ef\u4ee5\u76f4\u63a5\u8df3\u8fc7\u3002\u5982\u679c\u4f60\u4f7f\u7528Paper\u670d\u52a1\u5668\uff0c\u8bf7\u7981\u7528Timings\uff01\u867d\u7136\u5b83\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8bca\u65ad\u5de5\u5177\uff0c"}),(0,i.jsxs)(r.p,{children:["\u4f46\u7531\u4e8e\u5176\u4e0d\u65ad\u4e0d\u65ad\u542f\u52a8\u548c\u505c\u6b62\u865a\u62df\u201c\u79d2\u8868\u201d\uff0c\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u975e\u5e38\u5927\u7684\u5f71\u54cd\u3002\u56e0\u6b64\u65e0\u8bba\u670d\u52a1\u5668\u89c4\u6a21\u5927\u5c0f\u53ea\u9700\u7981\u7528\u8ba1\u65f6\u5373\u53ef\u5b9e\u73b0 ",(0,i.jsx)(r.em,{children:"10-30%"})," \u7684\u6027\u80fd\u63d0\u5347\u3002"]}),(0,i.jsxs)(r.p,{children:["\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.jsx)(r.code,{children:"/config/paper-global.yml"})," \u4e2d ",(0,i.jsx)(r.code,{children:"timings.enabled"})," \u8bbe\u4e3a ",(0,i.jsx)(r.code,{children:"false"})," \u7981\u7528\u3002"]})]}),"\n",(0,i.jsx)(r.h2,{id:"\u5176\u4ed6\u8f6f\u4ef6\u5206\u6790",children:"\u5176\u4ed6\u8f6f\u4ef6\u5206\u6790"}),"\n",(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsxs)(r.p,{children:["\u8fd9\u90e8\u5206\u9700\u8981\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6\uff0c\u4e00\u822c Spark \u5206\u6790\u4e0d\u51fa\u6765\u624d\u4f1a\u5c1d\u8bd5\u5176\u4ed6\u8f6f\u4ef6\u3002",(0,i.jsx)(r.em,{children:"\u4e00\u822c\u670d\u4e3b\u4e0d\u5fc5\u8981\u5b66\u4e60\u8fd9\u90e8\u5206\u5185\u5bb9"}),"\u3002"]})}),"\n",(0,i.jsx)(r.h3,{id:"arthas",children:"arthas"}),"\n",(0,i.jsx)(r.p,{children:"Arthas \u662f\u4e00\u6b3e\u963f\u91cc\u5df4\u5df4\u5f00\u53d1\u7684\u5728\u7ebf\u6027\u80fd\u5206\u6790\u8f6f\u4ef6\uff0c\u53ef\u5b9e\u65f6\u67e5\u770b\u5e94\u7528 JVM /\u5185\u5b58/ GC /\u7ebf\u7a0b \u7684\u72b6\u6001\u4fe1\u606f\uff0c\u751a\u81f3\u5305\u62ec\u67e5\u770b\u65b9\u6cd5\u8c03\u7528\u7684\u51fa\u5165\u53c2\u3001\u5f02\u5e38\uff0c\u76d1\u6d4b\u65b9\u6cd5\u6267\u884c\u8017\u65f6\u7b49\uff0c\u4e00\u822c\u7528\u4e8e\u6392\u67e5\u67d0\u4e9b\u63d2\u4ef6\u7684CPU\u5360\u7528\u60c5\u51b5\u548c\u63d2\u4ef6\u7ebf\u7a0b\u5360\u7528\u5206\u6790\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://arthas.aliyun.com/doc/",children:"\u5b98\u65b9\u6587\u6863\u94fe\u63a5"})}),"\n",(0,i.jsx)(r.h3,{id:"jprofiler",children:"jprofiler"}),"\n",(0,i.jsx)(r.p,{children:"jprofiler \u662f\u4e00\u6b3e\u4ed8\u8d39\u7684\u6613\u7528\u7684\u6027\u80fd\u5206\u6790\u8f6f\u4ef6\uff0c\u751a\u81f3\u53ef\u4ee5\u5bf9 MySQL \uff0c\u5185\u5b58\u6cc4\u6f0f\u8fdb\u884c\u5206\u6790\uff0c\u53ef\u89c6\u5316\u5c55\u793a\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://www.ej-technologies.com/products/jprofiler/overview.html",children:"\u5b98\u65b9\u94fe\u63a5"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},25710:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>a});var i=s(30758);const n={},t=i.createContext(n);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);