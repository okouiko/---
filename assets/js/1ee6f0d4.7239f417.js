"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5398],{64551:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=e(74848),s=e(28453);const l={title:"Linux \u5f00\u670d",slug:"/Sundry/Advance/Linux",sidebar_position:1},r="Linux \u5f00\u670d",d={id:"advance/Linux/Linux",title:"Linux \u5f00\u670d",description:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Linux \u5f00\u670d",source:"@site/docs/advance/Linux/Linux.md",sourceDirName:"advance/Linux",slug:"/Sundry/Advance/Linux",permalink:"/NitWikit/Sundry/Advance/Linux",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/Linux.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1722084307e3,sidebarPosition:1,frontMatter:{title:"Linux \u5f00\u670d",slug:"/Sundry/Advance/Linux",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u9636\u6559\u7a0b",permalink:"/NitWikit/advance"},next:{title:"\u8fde\u63a5\u670d\u52a1\u5668",permalink:"/NitWikit/advance/Linux/Connect-to-server"}},c={},u=[{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Linux \u5f00\u670d",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-linux-\u5f00\u670d",level:2},{value:"\u57fa\u7840\u6307\u4ee4",id:"\u57fa\u7840\u6307\u4ee4",level:2},{value:"\u9e23\u8c22",id:"\u9e23\u8c22",level:2},{value:"\u53e6\u5916",id:"\u53e6\u5916",level:2}];function o(n){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"linux-\u5f00\u670d",children:"Linux \u5f00\u670d"}),"\n",(0,t.jsx)(i.h2,{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-linux-\u5f00\u670d",children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Linux \u5f00\u670d"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"\u66f4\u5feb\u7684\u53d1\u5305\u901f\u5ea6\u548c\u63a5\u6536\u901f\u5ea6\uff0c\u63a5\u5165\u670d\u52a1\u5668\u901f\u5ea6\u5c06\u63d0\u5347\u6570\u5341\u6beb\u79d2\u8d77\uff0c\u5f53\u9762\u5bf9\u5047\u4eba\u653b\u51fb/ DDOS \u653b\u51fb\u65f6\u4f1a\u66f4\u52a0\u7a33\u5b9a\uff1b"}),"\n",(0,t.jsx)(i.li,{children:"\u66f4\u597d\u7684\u6027\u80fd\uff0c\u6839\u636e\u6d4b\u8bd5 TPS \u80fd\u63d0\u5347 8-15 %\uff1b"}),"\n",(0,t.jsx)(i.li,{children:"\u66f4\u4f4e\u7684\u5185\u5b58\u5360\u7528\uff0c\u5bf9\u4e8e Windows \u670d\u52a1\u5668\u4e00\u822c\u5f00\u673a\u4f1a\u5360\u7528 1-2 GB \u5185\u5b58\uff0c\u800c\u4e00\u822c\u7684 Linux \u7cfb\u7edf\u5f00\u673a\u540e\u5360\u7528\u5f80\u5f80\u4e0d\u5230 0.5 GB\uff1b"}),"\n",(0,t.jsx)(i.li,{children:"Linux \u7684\u7a33\u5b9a\u6027\u662f Windows \u65e0\u8bba\u5982\u4f55\u4e5f\u65e0\u6cd5\u6bd4\u62df\u7684\uff1b"}),"\n",(0,t.jsx)(i.li,{children:"Linux \u5b89\u5168\u6027\u66f4\u9ad8\uff0c\u5f00\u6e90\u7cfb\u7edf\uff0c\u6709\u793e\u533a\u7684\u652f\u6301\uff1b"}),"\n",(0,t.jsx)(i.li,{children:"Linux \u652f\u6301\u6587\u4ef6\u5360\u7528\u76f4\u63a5\u5220\u9664\uff08\u4e5f\u5c31\u662f\u8bf4\u53ef\u4ee5\u81ea\u52a8\u66f4\u65b0\u63d2\u4ef6\uff0c\u4e0d\u50cf Windows \u90a3\u6837\u63d0\u793a\u6587\u4ef6\u88ab\u5360\u7528\uff09"}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.p,{children:'\u53ef\u80fd\u4f1a\u6709\u5c0f\u4f19\u4f34\u8bf4:" Linux \u592a\u96be\u64cd\u4f5c\u4e86\uff0c\u6839\u672c\u4e0d\u4f1a\u7528\u3002" \u5176\u5b9e\u5927\u591a\u6570\u5f00 Linux \u670d\u52a1\u5668\u7684\u670d\u4e3b\u4e5f\u4e0d\u662f\u7eaf\u7eaf\u4f7f\u7528 Linux \u7f16\u8f91\u63d2\u4ef6\u914d\u7f6e\uff0c\u90a3\u4e48\u597d\uff0c\u6211\u4eec\u4e3a\u5c0f\u767d\u63a8\u8350\u4e09\u4e2a\u9762\u677f\u8f85\u52a9\u6211\u4eec\u5f00\u670d\u3002'}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://docs.mcsmanager.com/zh_cn/",children:"MCSM"})," \u5168\u540d MCSManager \u662f\u4e00\u6b3e\u5f00\u6e90\uff0c\u5206\u5e03\u5f0f\uff0c\u4e00\u952e\u90e8\u7f72\uff0c\u652f\u6301 Minecraft \u548c Steam \u6e38\u620f\u670d\u52a1\u5668 \u7684\u63a7\u5236\u9762\u677f\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://1panel.cn/",children:"1Panel"})," \u662f\u65b0\u4e00\u4ee3\u7684 Linux \u670d\u52a1\u5668\u8fd0\u7ef4\u7ba1\u7406\u9762\u677f\uff0c\u652f\u6301 Web \u56fe\u5f62\u754c\u9762\u7ba1\u7406\u3001\u5feb\u901f\u5efa\u7ad9\u3001\u5e94\u7528\u5546\u5e97\u3001\u5b89\u5168\u53ef\u9760\u3001\u4e00\u952e\u5907\u4efd\u7b49\u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://www.bt.cn/",children:"\u5b9d\u5854\u9762\u677f"})," \u662f\u4e00\u6b3e\u652f\u6301 Linux \u548c Windows \u7cfb\u7edf\u7684\u670d\u52a1\u5668\u8fd0\u7ef4\u7ba1\u7406\u5de5\u5177\uff0c\u63d0\u4f9b\u8d44\u6e90\u76d1\u63a7\u3001\u6587\u4ef6\u7ba1\u7406\u3001\u8f6f\u4ef6\u5b89\u88c5\u7b49\u529f\u80fd\u3002"]}),"\n"]})]}),"\n",(0,t.jsx)(i.h2,{id:"\u57fa\u7840\u6307\u4ee4",children:"\u57fa\u7840\u6307\u4ee4"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u5f00\u59cb\u5f00\u670d\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u638c\u63e1\u7684 Linux \u5e38\u7528\u6307\u4ee4"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://www.runoob.com/w3cnote/linux-useful-command.html",alt:"\u83dc\u9e1f\u6559\u7a0b | Linux \u9700\u8981\u638c\u63e1\u7684\u4e00\u4e9b\u547d\u4ee4"})}),"\n",(0,t.jsx)(i.h2,{id:"\u9e23\u8c22",children:"\u9e23\u8c22"}),"\n",(0,t.jsxs)(i.p,{children:["\u7279\u522b\u611f\u8c22 ",(0,t.jsx)(i.a,{href:"https://github.com/IceBingQI",children:"\u51b0\u5947"})," \u63d0\u4f9b\u7684\u672c\u677f\u5757\u7684\u6587\u6848\u53ca\u56fe\u7247"]}),"\n",(0,t.jsx)(i.h2,{id:"\u53e6\u5916",children:"\u53e6\u5916"}),"\n",(0,t.jsx)(i.p,{children:"\u201c\u7b28\u86cb\u811a\u672c\u201d\u4ec5\u652f\u6301 Windows \u7cfb\u7edf\uff0c\u6211\u4eec\u6682\u65f6\u6ca1\u6709\u79fb\u690d\u5230 Linux \u7684\u8ba1\u5212\u3002"})]})}function a(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>d});var t=e(96540);const s={},l=t.createContext(s);function r(n){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(l.Provider,{value:i},n.children)}}}]);