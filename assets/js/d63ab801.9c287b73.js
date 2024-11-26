"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["5503"],{63383:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>u,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"advance/Linux/start","title":"\u542F\u52A8\u670D\u52A1\u5668","description":"\u5F00\u670D\u4E4B\u524D\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u662F\u5426\u5B89\u88C5\u4E86 Java\uFF0C\u5728\u7EC8\u7AEF\u8F93\u5165","source":"@site/docs/advance/Linux/start.md","sourceDirName":"advance/Linux","slug":"/advance/Linux/start","permalink":"/advance/Linux/start","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/start.md","tags":[],"version":"current","lastUpdatedBy":"tuanzisama","lastUpdatedAt":1730979182000,"sidebarPosition":3,"frontMatter":{"title":"\u542F\u52A8\u670D\u52A1\u5668","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u5982\u4F55\u4FDD\u6301\u670D\u52A1\u5668\u5728 Linux \u670D\u52A1\u5668\u4E2D\u540E\u53F0\u8FD0\u884C","permalink":"/advance/Linux/keep-running"},"next":{"title":"\u642D\u5EFA\u5185\u7F51\u7A7F\u900F(Frp)","permalink":"/advance/Linux/frp"}}'),t=a("52676"),i=a("79938"),l=a("6206"),s=a("34076");let c={title:"\u542F\u52A8\u670D\u52A1\u5668",sidebar_position:3},d="\u542F\u52A8\u670D\u52A1\u5668",u={},o=[{value:"Java \u5B89\u88C5",id:"java-\u5B89\u88C5",level:2},{value:"\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u5B89\u88C5",id:"\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u5B89\u88C5",level:3},{value:"\u624B\u52A8\u2642",id:"\u624B\u52A8",level:3},{value:"\u4E0B\u8F7D",id:"\u4E0B\u8F7D",level:3},{value:"SFTP \u6587\u4EF6\u4F20\u8F93",id:"sftp-\u6587\u4EF6\u4F20\u8F93",level:4},{value:"wegt \u4E0B\u8F7D",id:"wegt-\u4E0B\u8F7D",level:4},{value:"\u538B\u7F29\u5305\u89E3\u538B",id:"\u538B\u7F29\u5305\u89E3\u538B",level:3},{value:"\u591A\u7248\u672C Java \u5171\u5B58",id:"\u591A\u7248\u672C-java-\u5171\u5B58",level:2},{value:"\u65B9\u6CD5\u4E00",id:"\u65B9\u6CD5\u4E00",level:2},{value:"\u65B9\u6CD5\u4E8C",id:"\u65B9\u6CD5\u4E8C",level:2},{value:"\u5F00\u670D",id:"\u5F00\u670D",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Details:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u542F\u52A8\u670D\u52A1\u5668",children:"\u542F\u52A8\u670D\u52A1\u5668"})}),"\n",(0,t.jsx)(n.p,{children:"\u5F00\u670D\u4E4B\u524D\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u662F\u5426\u5B89\u88C5\u4E86 Java\uFF0C\u5728\u7EC8\u7AEF\u8F93\u5165"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java -ver"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u4F60\u770B\u5230\u7C7B\u4F3C\u4EE5\u4E0B\u7684\u8F93\u51FA\uFF0C\u90A3\u4E48\u670D\u52A1\u5668\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86 Java"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'openjdk version "21.0.2" 2024-01-16 LTS\nOpenJDK Runtime Environment Zulu21.32+17-CA (build 21.0.2+13-LTS)\nOpenJDK 64-Bit Server VM Zulu21.32+17-CA (build 21.0.2+13-LTS\uFF0C mixed mode\uFF0C sharing)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"java-\u5B89\u88C5",children:"Java \u5B89\u88C5"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5\u4E86 Java\uFF0C\u53EF\u4EE5\u5FFD\u7565\u6389\u8FD9\u4E00\u90E8\u5206\u3002\u5982\u679C\u73AF\u5883\u672A\u5B89\u88C5 Java \u53EF\u4EE5\u53C2\u8003\uFF1A"}),"\n",(0,t.jsx)(n.h3,{id:"\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u5B89\u88C5",children:"\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u5B89\u88C5"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E0B\u65B9\u4EE5\u5B89\u88C5 ",(0,t.jsx)(n.code,{children:"openjdk-17"})," \u4E3A\u4F8B"]}),"\n",(0,t.jsxs)(l.Z,{defaultValue:"Debian/Ubuntu",children:[(0,t.jsx)(s.Z,{value:"Debian/Ubuntu",children:"sudo apt install openjdk-17-jdk"}),(0,t.jsx)(s.Z,{value:"RedHat/CentOS",children:"sudo yum install java-11-openjdk"}),(0,t.jsx)(s.Z,{value:"ArchLinux",children:"sudo pacman -S jdk11-openjdk"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ED6\u53D1\u884C\u7248\u5B89\u88C5\u65B9\u5F0F\u81EA\u884C\u767E\u5EA6"}),"\n",(0,t.jsx)(n.h3,{id:"\u624B\u52A8",children:"\u624B\u52A8\u2642"}),"\n",(0,t.jsx)(n.p,{children:"\u63A8\u8350\u4F7F\u7528\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u5B89\u88C5\u800C\u4E0D\u662F\u81EA\u5DF1\u624B\u52A8\u88C5"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u70B9\u51FB\u67E5\u770B"}),(0,t.jsxs)(n.p,{children:["\u4E00\u822C\u6765\u8BF4\uFF0C\u5728 Linux \u4E2D\u8FDB\u884C\u8F6F\u4EF6\u5B89\u88C5\u90E8\u7F72\u4F1A\u653E\u5728 ",(0,t.jsx)(n.code,{children:"/opt"})," \u76EE\u5F55\u4E0B\uFF0C\u6211\u4EEC\u4E5F\u9075\u5FAA\u8FD9\u4E2A\u89C4\u5219\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u9075\u5FAA"]}),(0,t.jsx)(n.p,{children:"\u4F7F\u7528cd\u5207\u6362\u5230/opt\u76EE\u5F55"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cd /opt"})}),(0,t.jsx)(n.h3,{id:"\u4E0B\u8F7D",children:"\u4E0B\u8F7D"}),(0,t.jsx)(n.h4,{id:"sftp-\u6587\u4EF6\u4F20\u8F93",children:"SFTP \u6587\u4EF6\u4F20\u8F93"}),(0,t.jsxs)(n.p,{children:["\u4E0D\u719F\u6089 wget \u65F6\uFF0C\u5148\u4F7F\u7528 Windows \u524D\u5F80",(0,t.jsx)(n.a,{href:"https://www.azul.com/downloads/?package=jdk#zulu",children:"zulu\u4E0B\u8F7D"}),"\uFF0C\u4E0B\u8F7D\u518D\u4F7F\u7528 SFTP \u8F6F\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668 ",(0,t.jsx)(n.code,{children:"/opt"})," \u76EE\u5F55\u4E0B\u3002"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(46374).Z+"",width:"1651",height:"884"})}),(0,t.jsx)(n.h4,{id:"wegt-\u4E0B\u8F7D",children:"wegt \u4E0B\u8F7D"}),(0,t.jsx)(n.p,{children:"\u4F7F\u7528 wget \u6307\u4EE4\u4E0B\u8F7D"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wget https://cdn.azul.com/zulu/bin/zulu21.34.19-ca-jdk21.0.3-linux_x64.tar.gz"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(8971).Z+"",width:"840",height:"205"})}),(0,t.jsx)(n.h3,{id:"\u538B\u7F29\u5305\u89E3\u538B",children:"\u538B\u7F29\u5305\u89E3\u538B"}),(0,t.jsx)(n.p,{children:"\u89E3\u538B\u538B\u7F29\u5305\uFF1A"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(99410).Z+"",width:"602",height:"97"})}),(0,t.jsx)(n.p,{children:"\u5C06\u76EE\u5F55\u91CD\u547D\u540D\u4E3A jdk21 \uFF1A"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(28413).Z+"",width:"470",height:"70"})}),(0,t.jsx)(n.p,{children:"\u8FD9\u6837\u5C31\u7B97\u662F\u5B89\u88C5\u597D\u4E86(PS\uFF1A\u8FD9\u91CC\u7684\u64CD\u4F5C\u4EC5\u9002\u7528\u4E8E\u5F00\u670D\u4F7F\u7528\uFF0C\u82E5\u9700\u8981\u5176\u4ED6\u9700\u8981jdk\u7684\u64CD\u4F5C\u8BF7\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u5B89\u88C5openjdk)"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u591A\u7248\u672C-java-\u5171\u5B58",children:"\u591A\u7248\u672C Java \u5171\u5B58"}),"\n",(0,t.jsx)(n.p,{children:"\u65B9\u6CD5\u5F88\u591A\uFF0C\u8FD9\u91CC\u4E3E\u51FA\u4E24\u79CD"}),"\n",(0,t.jsx)(n.h2,{id:"\u65B9\u6CD5\u4E00",children:"\u65B9\u6CD5\u4E00"}),"\n",(0,t.jsxs)(l.Z,{defaultValue:"Debian/Ubuntu",children:[(0,t.jsx)(s.Z,{value:"Debian/Ubuntu",children:"update-alternatives --config java"}),(0,t.jsx)(s.Z,{value:"RedHat/CentOS",children:"update-alternatives --config java"}),(0,t.jsx)(s.Z,{value:"ArchLinux",children:"archlinux-java set jdk-vesion"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E\u9009\u62E9\u4F60\u60F3\u4F7F\u7528\u7684 Java \uFF0C\u63A5\u7740 ",(0,t.jsx)(n.code,{children:"java -version"})," \u9A8C\u8BC1\u7248\u672C"]}),"\n",(0,t.jsx)(n.h2,{id:"\u65B9\u6CD5\u4E8C",children:"\u65B9\u6CD5\u4E8C"}),"\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u522B\u540D"}),"\n",(0,t.jsxs)(n.p,{children:["\u786E\u5B9A\u4F60\u6240\u4F7F\u7528\u7684\u7EC8\u7AEF\uFF0C\u6B64\u5904\u4EE5 ",(0,t.jsx)(n.code,{children:"bash"}),"  \u548C ",(0,t.jsx)(n.code,{children:"zulu Java"})," \u4E3A\u4F8B"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vim ~/.bashrc"})," \u5728\u8FD9\u4E2A\u6587\u4EF6\u672B\u5C3E\u8FFD\u52A0"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# java\nalias java8='/usr/lib/jvm/zulu-8/bin/java'\nalias java17='/usr/lib/jvm/zulu-17/bin/java'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E\u5237\u65B0\uFF1A",(0,t.jsx)(n.code,{children:"source ~/.bashrc"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4F7F\u7528 Java8 \u5F00\u670D\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java8 -jar example.jar\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4F7F\u7528 Java17 \u5F00\u670D\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java17 -jar example.jar\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5F00\u670D",children:"\u5F00\u670D"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"TODO - \u5B8C\u5584\u548C\u6392\u7248"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728/opt\u76EE\u5F55\u4E2D\u4F7F\u7528mkdir\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\u7528\u4E8E\u5F00\u670D"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(49895).Z+"",width:"221",height:"53"})}),"\n",(0,t.jsx)(n.p,{children:"\u5C06\u6838\u5FC3\u653E\u5165\u670D\u52A1\u5668\u5185\uFF0C\u5E76\u7F16\u5199\u7B80\u5355\u7684\u5F00\u670D\u811A\u672C"}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 chmod \u547D\u4EE4\u7ED9\u811A\u672C\u589E\u52A0\u8FD0\u884C\u6743\u9650"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"chmod +x example.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(67268).Z+"",width:"906",height:"513"})}),"\n",(0,t.jsx)(n.p,{children:"\u8F93\u5165./start.sh\u6216\u8005\u8F93\u5165bash start.sh\u5373\u53EF\u542F\u52A8"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(58821).Z+"",width:"752",height:"184"})}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528vim\u4FEE\u6539eula\u4E3Atrue\u5C31\u53EF\u4EE5\u5F00\u670D\u4E86"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(45613).Z+"",width:"761",height:"132"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},46374:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},8971:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},99410:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},28413:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},49895:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},67268:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},58821:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},45613:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},34076:function(e,n,a){a.d(n,{Z:()=>l});var r=a("52676");a("75271");var t=a("54461");let i="tabItem_TBo_";function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i,l),hidden:a,children:n})}},6206:function(e,n,a){a.d(n,{Z:()=>g});var r=a("52676"),t=a("75271"),i=a("54461"),l=a("13351"),s=a("3225"),c=a("30213"),d=a("68912"),u=a("4601"),o=a("90550");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var j=a("59157");let x="tabList_Catn",v="tabItem_mfQ4";function f(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:c}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),o=e=>{let n=e.currentTarget,a=c[d.indexOf(n)].value;a!==t&&(u(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{let a=d.indexOf(e.currentTarget)+1;n=d[a]??d[0];break}case"ArrowLeft":{let a=d.indexOf(e.currentTarget)-1;n=d[a]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n),children:c.map(e=>{let{value:n,label:a,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...l,className:(0,i.Z)("tabs__item",v,l?.className,{"tabs__item--active":t===n}),children:a??n},n)})})}function m(e){let{lazy:n,children:a,selectedValue:l}=e,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:r}=e,i=function(e){let{values:n,children:a}=e;return(0,t.useMemo)(()=>{let e=n??h(a).map(e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[l,j]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=a.find(e=>e.default)??a[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[x,v]=function(e){let{queryString:n=!1,groupId:a}=e,r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),l=(0,d._X)(i);return[l,(0,t.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:a,groupId:r}),[f,m]=function(e){var n;let{groupId:a}=e;let r=(n=a)?`docusaurus.tab.${n}`:null,[i,l]=(0,o.Nk)(r);return[i,(0,t.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),b=(()=>{let e=x??f;return p({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{b&&j(b)},[b]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);j(e),v(e),m(e)},[v,m,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",x),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(m,{...n,...e})]})}function g(e){let n=(0,j.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(n))}},79938:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return l}});var r=a(75271);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);