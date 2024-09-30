"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[60],{80975:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(86070),i=n(11100);const a={title:"\u7fa4\u673a\u5668\u4eba",slug:"/advance/bot",sidebar_position:6},r="\u7fa4\u673a\u5668\u4eba",s={id:"advance/bot/bot",title:"\u7fa4\u673a\u5668\u4eba",description:"\u642d\u5efa\u673a\u5668\u4eba\u80fd\u591f\u8ba9\u4f60\u5b9e\u73b0\u7fa4\u670d\u6d88\u606f\u4e92\u901a\u3001\u67e5\u8be2\u670d\u52a1\u5668\u72b6\u6001\u3001\u901a\u8fc7\u804a\u5929\u5373\u53ef\u7ba1\u7406\u670d\u52a1\u5668\u7b49\u529f\u80fd\uff0c\u8ba9\u4f60\u7684\u73a9\u5bb6\u4ea4\u6d41\u7fa4\u4e0e\u670d\u52a1\u5668\u8fde\u63a5\u8d77\u6765\u3002",source:"@site/docs/advance/bot/bot.md",sourceDirName:"advance/bot",slug:"/advance/bot",permalink:"/NitWikit/advance/bot",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/bot/bot.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:172769472e4,sidebarPosition:6,frontMatter:{title:"\u7fa4\u673a\u5668\u4eba",slug:"/advance/bot",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u57df\u540d\u7533\u8bf7\u4e0e\u89e3\u6790",permalink:"/NitWikit/advance/domain-application-and-dns-resolution"},next:{title:"\u673a\u5668\u4eba\u6846\u67b6",permalink:"/NitWikit/advance/bot/framework"}},c={},d=[{value:"OneBot \u6807\u51c6",id:"onebot-\u6807\u51c6",level:2}];function l(t){const e={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u7fa4\u673a\u5668\u4eba",children:"\u7fa4\u673a\u5668\u4eba"})}),"\n",(0,o.jsx)(e.p,{children:"\u642d\u5efa\u673a\u5668\u4eba\u80fd\u591f\u8ba9\u4f60\u5b9e\u73b0\u7fa4\u670d\u6d88\u606f\u4e92\u901a\u3001\u67e5\u8be2\u670d\u52a1\u5668\u72b6\u6001\u3001\u901a\u8fc7\u804a\u5929\u5373\u53ef\u7ba1\u7406\u670d\u52a1\u5668\u7b49\u529f\u80fd\uff0c\u8ba9\u4f60\u7684\u73a9\u5bb6\u4ea4\u6d41\u7fa4\u4e0e\u670d\u52a1\u5668\u8fde\u63a5\u8d77\u6765\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u673a\u5668\u4eba\u901a\u5e38\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c\u8fd9\u4e24\u4e2a\u90e8\u5206\u5206\u522b\u8d1f\u8d23\u63a7\u5236QQ\u53f7\u548c\u5bf9\u793e\u4ea4\u5e10\u53f7\u6267\u884c\u7a0b\u5e8f\u3002\u5176\u4e2d\u63a7\u5236QQ\u53f7\u7684\u90e8\u5206\u53eb ",(0,o.jsx)(e.a,{href:"/NitWikit/advance/bot/framework",children:"\u6846\u67b6"}),"\u3002\u673a\u5668\u4eba\u7a0b\u5e8f\u5fc5\u987b\u8981\u901a\u8fc7\u7f51\u7edc\u6216\u63d2\u4ef6\u7b49\u65b9\u5f0f\u4e0e\u673a\u5668\u4eba\u6846\u67b6\u8fde\u63a5\uff0c\u7136\u540e\u624d\u80fd\u5f00\u59cb\u63a7\u5236QQ\u53f7\u5b9e\u73b0\u5bf9\u5e94\u529f\u80fd\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u8fde\u63a5\u7684\u65b9\u5f0f\u76ee\u524d\u4e3b\u6d41\u7684\u6709 HTTP \u534f\u8bae\u548c Websocket(ws)\u534f\u8bae\u3002\u6bcf\u4e2a\u534f\u8bae\u53c8\u5206\u4e3a\u6b63\u5411\u548c\u53cd\u5411\uff0c\u5176\u4e2d\u6b63\u5411\u8981\u6c42\u673a\u5668\u4eba\u6846\u67b6\u672c\u8eab\u4f5c\u4e3a\u670d\u52a1\u5668\u5c06\u7aef\u53e3\u5f00\u653e\u7ed9\u673a\u5668\u4eba\u8f6f\u4ef6\u8fdb\u884c\u8fde\u63a5\uff0c\u800c\u53cd\u5411\u5219\u8981\u6c42\u673a\u5668\u4eba\u8f6f\u4ef6\u5f00\u653e\u7aef\u53e3\u7ed9\u6846\u67b6\u8fde\u63a5\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u7bc7\u4ec5\u5217\u51fa\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u4e0d\u5bf9\u5177\u4f53\u5b9e\u73b0\u8fc7\u7a0b\u63cf\u8ff0\uff0c\u8bf7\u81ea\u884c\u67e5\u9605\u76f8\u5173\u6587\u6863\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"onebot-\u6807\u51c6",children:"OneBot \u6807\u51c6"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://onebot.dev/",children:"OneBot"})," \u662f",(0,o.jsx)(e.strong,{children:"\u7edf\u4e00\u7684\u804a\u5929\u673a\u5668\u4eba\u5e94\u7528\u63a5\u53e3\u6807\u51c6"}),"\u3002\u5b83\u9002\u7528\u4e8e\u5404\u79cd\u5404\u6837\u7684\u5373\u65f6\u901a\u8baf\u8f6f\u4ef6\uff0cQQ \u662f\u5176\u5e94\u7528\u573a\u666f\u4e4b\u4e00\u3002\u5982\u679c\u673a\u5668\u4eba\u6846\u67b6\u548c\u673a\u5668\u4eba\u90fd\u652f\u6301 OneBot\uff0c\u90a3\u5b83\u4eec\u4fbf\u53ef\u4ee5\u914d\u5408\u4f7f\u7528\u3002"]})]})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11100:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>s});var o=n(30758);const i={},a=o.createContext(i);function r(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);