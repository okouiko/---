"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8072],{19293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(86070),s=n(51582),o=n(90353);const c={title:"\u8de8\u670d\u7aef\u547d\u4ee4",slug:"/command",sidebar_position:4},a="\u53cd\u4ee3\u6838\u5fc3\u5e38\u7528\u6307\u4ee4",i={id:"advance/cross-server/command/command",title:"\u8de8\u670d\u7aef\u547d\u4ee4",description:"",source:"@site/docs-java/advance/cross-server/command/command.md",sourceDirName:"advance/cross-server/command",slug:"/command",permalink:"/Java/command",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/command/command.md",tags:[],version:"current",lastUpdatedBy:"\u68a6\u6db5LOVE",lastUpdatedAt:1720361885e3,sidebarPosition:4,frontMatter:{title:"\u8de8\u670d\u7aef\u547d\u4ee4",slug:"/command",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u5165\u670d\u52a1\u5668",permalink:"/Java/advance/cross-server/join-server"},next:{title:"BungeeCord \u7aef",permalink:"/Java/advance/cross-server/command/BungeeCord"}},l={},d=[];function u(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u53cd\u4ee3\u6838\u5fc3\u5e38\u7528\u6307\u4ee4",children:"\u53cd\u4ee3\u6838\u5fc3\u5e38\u7528\u6307\u4ee4"})}),"\n","\n",(0,r.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},90353:(e,t,n)=>{n.d(t,{A:()=>v});n(30758);var r=n(13526),s=n(54456),o=n(95582),c=n(82101),a=n(6294),i=n(65315),l=n(66136);const d={cardContainer:"cardContainer_hUet",cardTitle:"cardTitle_oNhC",cardDescription:"cardDescription_KnG3"};var u=n(86070);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},82101:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(43938);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},51582:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(30758);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);