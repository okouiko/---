"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[9930],{30591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(74848),s=r(28453),i=r(3514);const o={title:"\u5f00\u59cb\u9636\u6bb5",sidebar_position:2},c="\u5f00\u59cb\u9636\u6bb5",a={id:"bds-core/start/start",title:"\u5f00\u59cb\u9636\u6bb5",description:"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u6211\u4eec\u4e3b\u8981\u4e3a\u4f60\u4ecb\u7ecd\u670d\u52a1\u5668\u57fa\u7840\u77e5\u8bc6\uff0c\u5982\u4f55\u533a\u522b\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3001\u5982\u4f55\u9009\u62e9\u670d\u52a1\u7aef\u3001\u5982\u4f55\u642d\u5efa\u5e76\u8fde\u63a5\u7b49\u3002",source:"@site/docs-bedrock/bds-core/start/start.md",sourceDirName:"bds-core/start",slug:"/bds-core/start/",permalink:"/NitWikit/Bedrock/bds-core/start/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/start/start.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1723005904e3,sidebarPosition:2,frontMatter:{title:"\u5f00\u59cb\u9636\u6bb5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u7f16\u8f91\u5668",permalink:"/NitWikit/Bedrock/bds-core/preparation/text-editor"},next:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/NitWikit/Bedrock/bds-core/start/basic/"}},l={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5f00\u59cb\u9636\u6bb5",children:"\u5f00\u59cb\u9636\u6bb5"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u6211\u4eec\u4e3b\u8981\u4e3a\u4f60\u4ecb\u7ecd\u670d\u52a1\u5668\u57fa\u7840\u77e5\u8bc6\uff0c\u5982\u4f55\u533a\u522b\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3001\u5982\u4f55\u9009\u62e9\u670d\u52a1\u7aef\u3001\u5982\u4f55\u642d\u5efa\u5e76\u8fde\u63a5\u7b49\u3002"}),"\n","\n",(0,n.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>b});r(96540);var n=r(34164),s=r(84142),i=r(28774),o=r(53465),c=r(16654),a=r(21312),l=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:i}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),i&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(g,{...e});const i=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),s=r(44586);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);