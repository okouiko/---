"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[4505],{72356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(86070),i=n(51582),o=n(90353);const s={title:"Nukkit \u6838\u5fc3",slug:"/nukkit-core",sidebar_position:4},c="Nukkit \u6838\u5fc3",l={id:"nukkit-core/nukkit-core",title:"Nukkit \u6838\u5fc3",description:"",source:"@site/docs-bedrock/nukkit-core/nukkit-core.md",sourceDirName:"nukkit-core",slug:"/nukkit-core",permalink:"/Bedrock/nukkit-core",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/nukkit-core/nukkit-core.md",tags:[],version:"current",lastUpdatedBy:"\u662f\u5c0f\u80d6\u544026",lastUpdatedAt:1722228188e3,sidebarPosition:4,frontMatter:{title:"Nukkit \u6838\u5fc3",slug:"/nukkit-core",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",permalink:"/Bedrock/bds-core/process/LiteLoaderBDS/plugins"},next:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/Bedrock/nukkit-core/preparation/"}},a={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"nukkit-\u6838\u5fc3",children:"Nukkit \u6838\u5fc3"})}),"\n","\n",(0,r.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},90353:(e,t,n)=>{n.d(t,{A:()=>x});n(30758);var r=n(13526),i=n(54456),o=n(95582),s=n(82101),c=n(6294),l=n(65315),a=n(66136);const u={cardContainer:"cardContainer_hUet",cardTitle:"cardTitle_oNhC",cardDescription:"cardDescription_KnG3"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function k(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(k,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},82101:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(30758),i=n(43938);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},51582:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(30758);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);