"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[4200],{8642:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>X,toc:()=>l});var a=n(4848),s=n(8453);const r={sidebar_position:7},t="JVM \u4f18\u5316",X={id:"\u4f18\u5316/JVM\u53c2\u6570\u4f18\u5316",title:"JVM \u4f18\u5316",description:"\u53c2\u6570",source:"@site/docs/\u4f18\u5316/JVM\u53c2\u6570\u4f18\u5316.md",sourceDirName:"\u4f18\u5316",slug:"/\u4f18\u5316/JVM\u53c2\u6570\u4f18\u5316",permalink:"/\u4f18\u5316/JVM\u53c2\u6570\u4f18\u5316",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/\u4f18\u5316/JVM\u53c2\u6570\u4f18\u5316.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316\u8bef\u533a",permalink:"/\u4f18\u5316/\u4f18\u5316\u63d2\u4ef6"},next:{title:"\u600e\u4e48\u8ba9\u5927\u4f6c\u5e2e\u6211",permalink:"/\u4f18\u5316/\u600e\u4e48\u8ba9\u5927\u4f6c\u5e2e\u6211"}},o={},l=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u901a\u7528",id:"\u901a\u7528",level:2},{value:"\u5927\u9875\u652f\u6301",id:"\u5927\u9875\u652f\u6301",level:3},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",level:2},{value:"JDK",id:"jdk",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"jvm-\u4f18\u5316",children:"JVM \u4f18\u5316"}),"\n",(0,a.jsx)(i.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,a.jsx)(i.p,{children:"\u4ee5\u4e0b\u662f\u7f16\u5199\u5b8c\u6210\u7684JVM\u4f18\u5316\u53c2\u6570(\u81f3\u5c11Java 17 \u4ee5\u4e0a)"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"\u4ee5\u4e0b\u542f\u52a8\u53c2\u6570\u9700\u8981\u81ea\u5df1\u8865\u5168\u5185\u5b58\u5206\u914d(-Xms\u548c-Xmx) \u548c \u670d\u52a1\u7aef\u6838\u5fc3\u540d(-jar \u670d\u52a1\u7aef\u540d\u5b57.jar)"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Mukul1127 Flag Plus(\u63a8\u8350)"}),(0,a.jsxs)(i.p,{children:["Mukul1127 Flag Plus\u662f\u73b0\u4ee3\u7684\u542f\u52a8\u53c2\u6570,\u4f7f\u7528ZGC\u4f5c\u4e3a\u5783\u573e\u56de\u6536\uff0c",(0,a.jsxs)(i.strong,{children:["\u6ce8\u610f",":Mukul1127"," Flag Plus\u81f3\u5c11\u9700\u89814c8g\u4ee5\u4e0a\u73af\u5883\u624d\u53ef\u4ee5\u53d1\u6325\u51fa\u4f18\u52bf,4c8g\u4e00\u4e0b\u8bf7\u4f7f\u7528aikar flag plus"]}),",Mukul1127 Flag Plus\u9700\u8981Java17\u4ee5\u4e0a!"]}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive\n"})}),(0,a.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528Java 21 \u4ee5\u4e0a,\u4f60\u53ef\u4ee5\u5c06",(0,a.jsx)(i.code,{children:"-XX:-ZProactive"}),"\u6362",(0,a.jsx)(i.code,{children:"-XX:+ZGenerational"}),",\u4f46\u662f Generational ZGC\u8fd8\u6ca1\u6709\u7ecf\u8fc7\u5f88\u597d\u7684\u6d4b\u8bd5\uff0c\u5207\u6362\u65f6\u8bf7\u51b7\u9759"]})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Aikar's Flag Plus"}),(0,a.jsx)(i.p,{children:"Aikar's Flag \u662f\u6700\u901a\u7528\u7684\u4f18\u5316\u542f\u52a8\u53c2\u6570,Aikar's Flag Plus\u662f\u5728Aikar's Flag\u4e0a\u8fdb\u884c\u4e86\u66f4\u597d\u7684\u4f18\u5316"}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:GCTimeRatio=99 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16 \n"})})]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Aikar's Flag "}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1\n"})})]}),"\n",(0,a.jsx)(i.h2,{id:"\u901a\u7528",children:"\u901a\u7528"}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u670d\u52a1\u5668\u5185\u5b58\u8db3\u591f,\u53ef\u4ee5\u52a0\u4e0a\u6b64\u53c2\u6570",(0,a.jsx)(i.code,{children:"-XX:-ZUncommit"}),",\u8981\u6c42Jvm\u603b\u662f\u63d0\u524d\u628a\u8981\u7528\u7684\u5185\u5b58\u7533\u8bf7\u597d\uff0c\u5e76\u4e14\u963b\u6b62Jvm\u628a\u4e34\u65f6\u7a7a\u51fa\u6765\u7684\u5185\u5b58\u8fd8\u7ed9\u7cfb\u7edf"]}),"\n",(0,a.jsx)(i.h3,{id:"\u5927\u9875\u652f\u6301",children:"\u5927\u9875\u652f\u6301"}),"\n",(0,a.jsx)(i.p,{children:"\u5f53\u7136\uff0c\u5728\u52a8\u624b\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u8bd5\u4e00\u8bd5\u662f\u4e0d\u662f\u7cfb\u7edf\u5df2\u7ecf\u652f\u6301\u4e86\u8fd9\u9879\u529f\u80fd ,\u5728\u63a7\u5236\u53f0\u6267\u884c\u6b64\u547d\u4ee4"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -Xlog:gc+init -XX:+UseLargePages -Xmx1g -version\n"})}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u50cf\u6211\u4e00\u6837\uff0c \u6709\u4e00\u884c ",(0,a.jsx)(i.code,{children:"UseLargePages disabled, no large pages configured and available on the system. "}),"\u90a3\u4e48\u5c31\u8bf4\u660e\u5f53\u524d\u7cfb\u7edf\u5e76\u4e0d\u652f\u6301\u5927\u9875\uff0c\u4e0d\u8fc7\u4e0d\u8981\u6025\uff0c\u53ef\u4ee5\u8bd5\u4e00\u4e0b\u8fd9\u4e00\u884c\u547d\u4ee4 ",(0,a.jsx)(i.code,{children:"java -Xlog:gc+init -XX:+UseTransparentHugePages -Xmx1g -version"})," ,\u5982\u679c\u770b\u5230",(0,a.jsx)(i.code,{children:"Large Page Support: Enabled (Transparent)"}),",\u8868\u793a\u4f60\u7684\u7cfb\u7edf\u652f\u6301\u900f\u660e\u5927\u9875"]}),"\n",(0,a.jsx)(i.p,{children:"\u4f46\u662f\u5982\u679c\u4f60\u4f9d\u7136\u4e0d\u652f\u6301\u6216\u8005\u60f3\u8981\u8ffd\u6c42\u6781\u81f4\u6027\u80fd\uff0c\u53ef\u4ee5\u53bb\u767e\u5ea6\u641c\u7d22\u5f53\u524d\u7684\u7cfb\u7edf\u5982\u4f55\u5f00\u542f\u5927\u9875\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u8fc7\u591a\u7684\u8d58\u8ff0\u4e86\u3002(LargePages\u5bf9\u670d\u52a1\u5668\u63d0\u5347\u76f8\u5f53\u5de8\u5927)"}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u652f\u6301LargePages,\u52a0\u4e0a\u6b64\u53c2\u6570",(0,a.jsx)(i.code,{children:"-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS"})]}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u652f\u6301TransparentHugePages(\u4e0d\u8981\u628a\u4e24\u4e2a\u90fd\u52a0\u4e0a,\u4f18\u5148LargePages),\u52a0\u4e0a\u6b64\u53c2\u6570",(0,a.jsx)(i.code,{children:"-XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS"})]}),"\n",(0,a.jsx)(i.h2,{id:"\u53c2\u6570\u89e3\u91ca",children:"\u53c2\u6570\u89e3\u91ca"}),"\n",(0,a.jsx)(i.p,{children:"TODO"}),"\n",(0,a.jsx)(i.h2,{id:"jdk",children:"JDK"}),"\n",(0,a.jsx)(i.p,{children:"TODO"})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>X});var a=n(6540);const s={},r=a.createContext(s);function t(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function X(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);