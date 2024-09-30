"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7960],{56712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(86070),i=n(11100),s=n(6767);const a={sidebar_position:2,slug:"/maintenance/Java"},o="\u7ef4\u62a4",c={id:"process/maintenance/maintenance",title:"\u7ef4\u62a4",description:"\u8ba9\u4f60\u7684\u670d\u52a1\u5668\u53d8\u5f97\u66f4\u597d",source:"@site/docs-java/process/maintenance/maintenance.md",sourceDirName:"process/maintenance",slug:"/maintenance/Java",permalink:"/NitWikit/Java/maintenance/Java",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/maintenance.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:172769472e4,sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/maintenance/Java"},sidebar:"tutorialSidebar",previous:{title:"ZNPCsPlus",permalink:"/NitWikit/Java/process/plugin/other/npc/ZNPCsPlus"},next:{title:"\u4f18\u5316",permalink:"/NitWikit/Java/optimize"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u7ef4\u62a4",children:"\u7ef4\u62a4"})}),"\n",(0,r.jsx)(t.p,{children:"\u8ba9\u4f60\u7684\u670d\u52a1\u5668\u53d8\u5f97\u66f4\u597d"}),"\n","\n",(0,r.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6767:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),i=n(40236),s=n(66484),a=n(70013),o=n(8508),c=n(25857),l=n(19808);const u={cardContainer:"cardContainer_sUhM",cardTitle:"cardTitle_pe4y",cardDescription:"cardDescription_aYht"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},70013:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),i=n(54924);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},11100:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(30758);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);