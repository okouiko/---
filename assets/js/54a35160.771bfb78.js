"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["7913"],{98315:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>c});var n=JSON.parse('{"id":"bds-core/process/process","title":"\u5EFA\u8BBE\u9636\u6BB5","description":"\u5728\u8FD9\u4E2A\u9636\u6BB5\uFF0C\u4F60\u5DF2\u7ECF\u4E86\u89E3\u4E86\u57FA\u7840\u77E5\u8BC6\uFF0C\u662F\u65F6\u5019\u5B66\u4E60\u4E00\u4E9B\u8FDB\u9636\u77E5\u8BC6\u4E86\u3002","source":"@site/docs-bedrock/bds-core/process/process.md","sourceDirName":"bds-core/process","slug":"/bds-core/process/","permalink":"/Bedrock/bds-core/process/","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/process.md","tags":[],"version":"current","lastUpdatedBy":"\u9A7F\u7AD9","lastUpdatedAt":1727693356000,"sidebarPosition":3,"frontMatter":{"title":"\u5EFA\u8BBE\u9636\u6BB5","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u670D\u52A1\u7AEF\u7ED3\u6784","permalink":"/Bedrock/bds-core/start/basic/server-file-structure"},"next":{"title":"\u63D2\u4EF6","permalink":"/Bedrock/bds-core/process/plugins/"}}'),s=r("52676"),o=r("69532"),i=r("45229");let c={title:"\u5EFA\u8BBE\u9636\u6BB5",sidebar_position:3},l="\u5EFA\u8BBE\u9636\u6BB5",a={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u5EFA\u8BBE\u9636\u6BB5",children:"\u5EFA\u8BBE\u9636\u6BB5"})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8FD9\u4E2A\u9636\u6BB5\uFF0C\u4F60\u5DF2\u7ECF\u4E86\u89E3\u4E86\u57FA\u7840\u77E5\u8BC6\uFF0C\u662F\u65F6\u5019\u5B66\u4E60\u4E00\u4E9B\u8FDB\u9636\u77E5\u8BC6\u4E86\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8FD9\u4E00\u7AE0\u6211\u4EEC\u4E3B\u8981\u56F4\u7ED5\u4EE5\u4E0B\u51E0\u4E2A\u70B9:"}),"\n","\n",(0,s.jsx)(i.Z,{}),"\n",(0,s.jsx)(t.p,{children:"\u63D2\u4EF6 - \u63A8\u8350\u4E00\u4E9B\u5E38\u89C1\u7684\u63D2\u4EF6\uFF0C\u5E76\u4E14\u63D0\u53CA\u76F8\u5173\u7684\u6CE8\u610F\u4E8B\u9879\u548C\u57FA\u7840\u77E5\u8BC6\u3002"})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},45229:function(e,t,r){r.d(t,{Z:()=>b});var n=r("52676");r("75271");var s=r("54461"),o=r("5694"),i=r("35988"),c=r("58182"),l=r("24215"),a=r("75609"),u=r("21619");let d={cardContainer:"cardContainer_AV9g",cardTitle:"cardTitle_zzWZ",cardDescription:"cardDescription_X58B"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:i}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),i&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e,r=(0,o.LM)(t),s=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,o.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,o.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let i=(0,o.MN)(t);return(0,n.jsx)("section",{className:(0,s.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},58182:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(75271),s=r(80158);let o=["zero","one","two","few","many","other"];function i(e){return o.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=r.select(t);return n[Math.min(r.pluralForms.indexOf(s),n.length-1)]})(r,t,e)}}},69532:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(75271);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);