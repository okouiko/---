"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3538],{19927:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var l=r(74848),i=r(28453);const s={title:"\u5185\u7f51\u7a7f\u900f",sidebar_position:5},t="\u5185\u7f51\u7a7f\u900f",d={id:"advance/deploy/intranet-penetration",title:"\u5185\u7f51\u7a7f\u900f",description:"\u9002\u7528\u4e8e\uff1f",source:"@site/docs/advance/deploy/intranet-penetration.md",sourceDirName:"advance/deploy",slug:"/advance/deploy/intranet-penetration",permalink:"/NitWikit/advance/deploy/intranet-penetration",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/deploy/intranet-penetration.md",tags:[],version:"current",lastUpdatedBy:"\u68a6\u6db5LOVE",lastUpdatedAt:1720420388e3,sidebarPosition:5,frontMatter:{title:"\u5185\u7f51\u7a7f\u900f",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u5230\u4e91",permalink:"/NitWikit/advance/deploy/connect-to-the-cloud"},next:{title:"\u6587\u6863\u8d21\u732e",permalink:"/NitWikit/contribution"}},a={},c=[{value:"\u81ea\u5efaFrp",id:"\u81ea\u5efafrp",level:2},{value:"\u914d\u7f6e\u670d\u52a1\u7aef",id:"\u914d\u7f6e\u670d\u52a1\u7aef",level:3},{value:"\u914d\u7f6e\u5ba2\u6237\u7aef\uff1a",id:"\u914d\u7f6e\u5ba2\u6237\u7aef",level:3},{value:"\u53ef\u80fd\u7684\u95ee\u9898?",id:"\u53ef\u80fd\u7684\u95ee\u9898",level:2},{value:"\u767b\u5f55\u63d2\u4ef6",id:"\u767b\u5f55\u63d2\u4ef6",level:3},{value:"\u73a9\u5bb6\u6ce8\u518c",id:"\u73a9\u5bb6\u6ce8\u518c",level:4},{value:"\u81ea\u52a8\u767b\u5f55",id:"\u81ea\u52a8\u767b\u5f55",level:4},{value:"\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730",id:"\u663e\u793a\u73a9\u5bb6-ip-\u5f52\u5c5e\u5730",level:3},{value:"ban-ip ban\u6389\u6240\u6709\u4eba",id:"ban-ip-ban\u6389\u6240\u6709\u4eba",level:3},{value:"\u53cd\u5047\u4eba\u63d2\u4ef6",id:"\u53cd\u5047\u4eba\u63d2\u4ef6",level:3}];function p(n){const e={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u5185\u7f51\u7a7f\u900f",children:"\u5185\u7f51\u7a7f\u900f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u9002\u7528\u4e8e\uff1f"})}),"\n",(0,l.jsx)(e.p,{children:"\u6ca1\u6709\u516c\u7f51\u7684\u5bb6\u91cc\u4e91"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6765\u51e0\u4e2a\uff1f"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5185\u7f51\u7a7f\u900f\u4e00\u6293\u4e00\u5927\u628a\uff0c\u6bd4\u5982",(0,l.jsx)(e.a,{href:"https%EF%BC%9A//www.natfrp.com/",children:"\u6a31\u82b1\u5185\u7f51\u7a7f\u900f"}),"\u548c",(0,l.jsx)(e.a,{href:"https%EF%BC%9A//www.openfrp.net/",children:"OpenFrp"})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.del,{children:"\u56e0\u4e3arz\u7528\u6237\u6bd4\u8f83\u591a\uff0c\u4f60\u751a\u81f3\u80fd\u7528\u67d0\u4eba\u7528\u4e0d\u7528\u6a31\u82b1\u6765\u5b9a\u6027\u5224\u65ad\u8fd9\u4eba\u6709\u6ca1\u6709\u6280\u672f"})}),"\n",(0,l.jsx)(e.h2,{id:"\u81ea\u5efafrp",children:"\u81ea\u5efaFrp"}),"\n",(0,l.jsxs)(e.p,{children:["\u9996\u5148\u4f60\u5f97\u786e\u4fdd\u4f60\u6709\u4e00\u53f0\u6709\u516c\u7f51IP\u7684\u673a\u5668\uff0c\u6700\u597d\u662f",(0,l.jsx)(e.strong,{children:"Linux"}),"\u7684\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u91cc\u5047\u5b9a\u4f60\u6709\u4e00\u53f0\u7b26\u5408\u6761\u4ef6\u7684Linux\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u4f60\u5df2\u7ecf\u53ef\u4ee5\u8fde\u4e0a\u4f60\u670d\u52a1\u5668\u7684",(0,l.jsx)(e.strong,{children:"SSH"}),"\u3002"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u9996\u5148\u786e\u4fdd\u670d\u52a1\u5668\u6240\u6709\u8f6f\u4ef6\u5305\u662f\u6700\u65b0\u7684\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsxs)(e.li,{children:["\u5b89\u88c5",(0,l.jsx)(e.code,{children:"screen"}),"\u8f6f\u4ef6\u5305\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"apt-get install screen -y\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsxs)(e.li,{children:["\u4e0b\u8f7d",(0,l.jsx)(e.code,{children:"frp.go"}),"\u8f6f\u4ef6\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd ~\nwget https\uff1a//github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"4",children:["\n",(0,l.jsx)(e.li,{children:"\u89e3\u538b"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"tar -xzvf frp_0.58.1_linux_amd64.tar.gz\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u914d\u7f6e\u670d\u52a1\u7aef",children:"\u914d\u7f6e\u670d\u52a1\u7aef"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"vim ~/frp_0.58.1_linux_amd64/frps.toml\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5199\u5165\u5982\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-toml",children:'bindPort = 7000 # frps\u76d1\u542c\u7684\u7aef\u53e3\n\nauth.token = "example" # \u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\uff0cfrpc\u8981\u4e0efrps\u4e00\u81f4\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u5f00\u542ffrps\u670d\u52a1\u7aef\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64\nscreen -dR frps ./frps\n# \u952e\u76d8\u4e0a\u6309Ctrl+A+D\u9000\u51fa\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u914d\u7f6e\u5ba2\u6237\u7aef",children:"\u914d\u7f6e\u5ba2\u6237\u7aef\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"vim ~/frp_0.58.1_linux_amd64/frpc.toml\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-toml",children:'serverAddr = "x.x.x.x" # \u4f60frps\u670d\u52a1\u5668\u7684ip\u5730\u5740\nserverPort = 7000 # \u4f60frps\u670d\u52a1\u5f00\u5728\u7684\u7aef\u53e3\n\nauth.token = "example" # \u4ee4\u724c\uff0c\u4e0e\u516c\u7f51\u670d\u52a1\u7aef\u4fdd\u6301\u4e00\u81f4\n\n[[proxies]]\nname = "mc je"\ntype = "tcp" # java\u7248\u4f7f\u7528tcp\u534f\u8bae\u901a\u4fe1\uff0c\u4e0d\u53ef\u66f4\u6539\nlocalIP = "127.0.0.1" # \u9ed8\u8ba4\u4e0d\u7528\u6539\nlocalPort = 25565 # mc\u670d\u52a1\u7aef\u5f00\u5728\u54ea\u4e2a\u7aef\u53e3\uff1f\nremotePort = 25565 # \u66b4\u9732\u670d\u52a1\u7684\u516c\u7f51\u5165\u53e3\n\n# \u5982\u679c\u4f60\u5f00\u4e86\u4e92\u901a\uff0c\u8981\u57fa\u5ca9\u652f\u6301\n[[proxies]]\nname = "mc be"\ntype = "udp" # \u57fa\u5ca9\u7248\u4f7f\u7528udp\u534f\u8bae\u901a\u4fe1\uff0c\u4e0d\u53ef\u66f4\u6539\nlocalIP = "127.0.0.1"\nlocalPort = 19132\nremotePort = 19132\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u5f00\u542ffrps\u670d\u52a1\u7aef\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64\nscreen -dR frpc ./frpc\n# \u952e\u76d8\u4e0a\u6309Ctrl+A+D\u9000\u51fa\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53ef\u80fd\u7684\u95ee\u9898",children:"\u53ef\u80fd\u7684\u95ee\u9898?"}),"\n",(0,l.jsx)(e.p,{children:"\u5185\u7f51\u7a7f\u900f\u540e\u76f8\u5f53\u4e8e\u73a9\u5bb6\u7684\u8fde\u63a5\u4f20\u9012\u5230\u4e86\u4f60\u673a\u5668\u4e0a\u7684\u8f6f\u4ef6\u4e0a\uff0c\u7528\u8fd9\u4e2a\u8f6f\u4ef6\u8bbf\u95ee\u672c\u5730\u7684\u670d\u52a1\u7aef\uff08\u7c7b\u4f3c\u4ee3\u7406\uff09\uff0c\u670d\u52a1\u7aef\u5c31\u4f1a\u8bef\u8ba4\u4e3a\u662f\u672c\u5730\u8fde\u63a5\u8bbf\u95ee\u4e86\u670d\u52a1\u5668\uff0c\u5c31\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,l.jsx)(e.h3,{id:"\u767b\u5f55\u63d2\u4ef6",children:"\u767b\u5f55\u63d2\u4ef6"}),"\n",(0,l.jsx)(e.h4,{id:"\u73a9\u5bb6\u6ce8\u518c",children:"\u73a9\u5bb6\u6ce8\u518c"}),"\n",(0,l.jsx)(e.p,{children:"\u652f\u6301 IP \u9650\u5236\u6ce8\u518c\u8d26\u53f7\u7684\u767b\u5f55\u63d2\u4ef6\uff08\u5982 Authme \u3001CMI \uff09\u4f1a\u51fa\u95ee\u9898"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5185\u7f51\u7a7f\u900f\u7684\u8bdd\uff0c\u4ed6\u4eec\u7684 IP \u5730\u5740\u90fd\u662f\u56de\u73af\u5730\u5740\uff0c\u6240\u4ee5\u4ed6\u4eec\u4e0d\u80fd\u6ce8\u518c\u8d26\u53f7\u4e86"}),"\n",(0,l.jsx)(e.h4,{id:"\u81ea\u52a8\u767b\u5f55",children:"\u81ea\u52a8\u767b\u5f55"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u529f\u80fd\u4f9d\u9760 IP \u8fdb\u884c\u8bc6\u522b\uff0c\u5982\u679c\u5185\u7f51\u7a7f\u900f\u7684\u8bdd\uff0c\u666e\u901a\u73a9\u5bb6\u548c OP \u73a9\u5bb6\u7684 IP \u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u5c31\u51fa\u73b0\u4e86\u73a9\u5bb6\u767b\u5f55 OP \u8d26\u53f7\u7b49 \u201c\u7ed5\u8fc7\u767b\u5f55\u6f0f\u6d1e\u201d"}),"\n",(0,l.jsx)(e.h3,{id:"\u663e\u793a\u73a9\u5bb6-ip-\u5f52\u5c5e\u5730",children:"\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730"}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u4e9b\u53ef\u4ee5\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730\u7684\u63d2\u4ef6\u4f1a\u5931\u6548"}),"\n",(0,l.jsx)(e.p,{children:"\u56e0\u4e3a\u4ed6\u4eec\u7684 IP \u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,l.jsx)(e.h3,{id:"ban-ip-ban\u6389\u6240\u6709\u4eba",children:"ban-ip ban\u6389\u6240\u6709\u4eba"}),"\n",(0,l.jsx)(e.p,{children:"\u56e0\u4e3a\u4f60\u4eec\u7684\u5730\u5740\u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u4ee5\u4f60 ban-ip \u4f1a ban \u6389\u6240\u6709\u4eba\uff0c\u5305\u62ec\u4f60\u81ea\u5df1......"}),"\n",(0,l.jsx)(e.h3,{id:"\u53cd\u5047\u4eba\u63d2\u4ef6",children:"\u53cd\u5047\u4eba\u63d2\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4f1a\u5bfc\u81f4\u53cd\u5047\u4eba\u63d2\u4ef6\u51e0\u4e4e\u4e0d\u80fd\u4f7f\u7528\uff0c\u56e0\u4e3a\u65e0\u8bba\u662f\u5c01\u7981 IP \u8fd8\u662f IP \u767d\u540d\u5355\u90fd\u4f1a\u56e0\u4e3a\u6240\u6709\u73a9\u5bb6 IP \u76f8\u540c\u800c\u5931\u6548\u3002"})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(p,{...n})}):p(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>d});var l=r(96540);const i={},s=l.createContext(i);function t(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);