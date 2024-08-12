"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1381],{76624:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var t=s(74848),i=s(28453);const d={title:"\u6269\u5c55",sidebar_position:3},a="\u6269\u5c55",l={id:"advance/YAML/extention",title:"\u6269\u5c55",description:"\u951a\u70b9",source:"@site/docs-java/advance/YAML/extention.md",sourceDirName:"advance/YAML",slug:"/advance/YAML/extention",permalink:"/NitWikit/Java/advance/YAML/extention",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/YAML/extention.md",tags:[],version:"current",lastUpdatedBy:"lilingfeng",lastUpdatedAt:1723438841e3,sidebarPosition:3,frontMatter:{title:"\u6269\u5c55",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/NitWikit/Java/advance/YAML/foundation"},next:{title:"\u6570\u636e\u5e93\u76f8\u5173",permalink:"/NitWikit/Java/advance/database"}},c={},r=[{value:"\u951a\u70b9",id:"\u951a\u70b9",level:2},{value:"\u7b26\u53f7",id:"\u7b26\u53f7",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u6362\u884c",id:"\u6362\u884c",level:2},{value:"\u4fdd\u7559\u6362\u884c",id:"\u4fdd\u7559\u6362\u884c",level:3},{value:"\u6298\u53e0\u6362\u884c",id:"\u6298\u53e0\u6362\u884c",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6269\u5c55",children:"\u6269\u5c55"})}),"\n",(0,t.jsx)(n.h2,{id:"\u951a\u70b9",children:"\u951a\u70b9"}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"\u951a\u70b9\u4e00\u5b9a\u8981\u5148\u58f0\u660e\u518d\u4f7f\u7528\u3002"}),(0,t.jsxs)(n.p,{children:["\u5373\u6574\u4e2a .yml \u6587\u4ef6\u4ece\u4e0a\u5f80\u4e0b\u8bbe\u7f6e\u951a\u70b9",(0,t.jsx)(n.strong,{children:"\u4e00\u5b9a\u8981"}),"\u5728\u5f15\u7528\u951a\u70b9\u4e4b\u524d\u3002"]}),(0,t.jsx)(n.p,{children:"\u5426\u5219\u4f1a\u8bed\u6cd5\u62a5\u9519\u3002"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u7b26\u53f7",children:"\u7b26\u53f7"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"&"})," \u8bbe\u7f6e\u951a\u70b9\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"*"})," \u5f15\u7528\u951a\u70b9\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<<"})," \u5408\u5e76\u5230\u5f53\u524d\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5199\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"defaults: &defaults\n  adapter: postgres\n  host: localhost\n\ndevelopment:\n  database: myapp_development\n  <<: *defaults\n\ntest:\n  database: myapp_test\n  common: *defaults\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u76f8\u5f53\u4e8e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"defaults:\n  adapter: postgres\n  host: localhost\n\ndevelopment:\n  database: myapp_development\n  adapter: postgres\n  host: localhost\n\ntest:\n  common:\n    adapter: postgres\n    host: localhost\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6362\u884c",children:"\u6362\u884c"}),"\n",(0,t.jsx)(n.h3,{id:"\u4fdd\u7559\u6362\u884c",children:"\u4fdd\u7559\u6362\u884c"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"|"})," \u6765\u8868\u793a\u8be5\u8bed\u6cd5\uff0c\u6bcf\u884c\u7684\u7f29\u8fdb\u548c\u884c\u5c3e\u7a7a\u767d\u90fd\u4f1a\u88ab\u53bb\u6389\uff0c\u800c\u989d\u5916\u7684\u7f29\u8fdb\u4f1a\u88ab\u4fdd\u7559\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:"lines: |\n  \u6211\u662f\u7b2c\u4e00\u884c\n  \u6211\u662f\u7b2c\u4e8c\u884c\n    \u6211\u662f\u5e05\u6c14\u8ff7\u4eba\u7684\u9a7f\u7ad9\n      \u6211\u662f\u7b2c\u56db\u884c\n  \u6211\u662f\u7b2c\u4e94\u884c\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"|+"})," \u6765\u8868\u793a\u8be5\u8bed\u6cd5\uff0c\u4fdd\u7559\u884c\u5c3e\u53ca\u5b57\u7b26\u672b\u5c3e\u7684\u6362\u884c\u7b26\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:"lines: |+\n  \u6211\u662f\u7b2c\u4e00\u884c\n  \u6211\u662f\u7b2c\u4e8c\u884c\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"|-"})," \u6765\u8868\u793a\u8be5\u8bed\u6cd5\uff0c\u4fdd\u7559\u884c\u5c3e\u6362\u884c\u7b26\uff0c\u4f46\u4e0d\u4fdd\u7559\u5b57\u7b26\u672b\u5c3e\u7684\u6362\u884c\u7b26\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:"lines: |-\n  \u6211\u662f\u7b2c\u4e00\u884c\n  \u6211\u662f\u7b2c\u4e8c\u884c\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6298\u53e0\u6362\u884c",children:"\u6298\u53e0\u6362\u884c"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:">"})," \u6765\u8868\u793a\u8be5\u8bed\u6cd5\uff0c\u53ea\u6709\u7a7a\u767d\u884c\u624d\u4f1a\u88ab\u8bc6\u522b\u4e3a\u6362\u884c\uff0c\u539f\u6765\u7684\u6362\u884c\u7b26\u90fd\u4f1a\u88ab\u8f6c\u6362\u6210\u7a7a\u683c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:"lines: >\n  \u6211\u662f\u7b2c\u4e00\u884c\n  \u6211\u4e5f\u662f\u7b2c\u4e00\u884c\n  \u6211\u4ecd\u662f\u7b2c\u4e00\u884c\n  \u6211\u4f9d\u65e7\u662f\u7b2c\u4e00\u884c\n  \u6211\u662f\u7b2c\u4e8c\u884c\n  \u8fd9\u4e48\u5de7\u6211\u4e5f\u662f\u7b2c\u4e8c\u884c\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:">+"})," \u6765\u8868\u793a\u8be5\u8bed\u6cd5\uff0c\u5c06\u884c\u5c3e\u6362\u884c\u7b26\u66ff\u6362\u6210\u7a7a\u683c\uff0c\u4fdd\u7559\u5b57\u7b26\u672b\u5c3e\u7684\u6362\u884c\u7b26\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:"lines: >+\n  \u6211\u662f\u7b2c\u4e00\u884c\n  \u6211\u4e5f\u662f\u7b2c\u4e00\u884c\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:">-"})," \u6765\u8868\u793a\u8be5\u8bed\u6cd5\uff0c\u5c06\u884c\u5c3e\u6362\u884c\u7b26\u66ff\u6362\u6210\u7a7a\u683c\uff0c\u4e0d\u4fdd\u7559\u5b57\u7b26\u672b\u5c3e\u7684\u6362\u884c\u7b26\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:"lines: >-\n  \u6211\u662f\u7b2c\u4e00\u884c\n  \u6211\u4e5f\u662f\u7b2c\u4e00\u884c\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},d=t.createContext(i);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);