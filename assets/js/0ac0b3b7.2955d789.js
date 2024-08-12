"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1179],{44423:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=i(74848),r=i(28453);const c={title:"\u81ea\u52a8\u5907\u4efd\u5b58\u6863",sidebar_position:8},t="\u7f16\u5199\u5907\u4efd\u811a\u672c",a={id:"advance/Linux/backup",title:"\u81ea\u52a8\u5907\u4efd\u5b58\u6863",description:"\u5728\u4f60\u7684\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u5907\u4efd\u811a\u672c\uff1a",source:"@site/docs/advance/Linux/backup.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/backup",permalink:"/NitWikit/advance/Linux/backup",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/backup.md",tags:[],version:"current",lastUpdatedBy:"lilingfeng",lastUpdatedAt:1723438841e3,sidebarPosition:8,frontMatter:{title:"\u81ea\u52a8\u5907\u4efd\u5b58\u6863",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",permalink:"/NitWikit/advance/Linux/frp"},next:{title:"\u6570\u636e\u5e93\u76f8\u5173",permalink:"/NitWikit/database"}},d={},l=[];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u7f16\u5199\u5907\u4efd\u811a\u672c",children:"\u7f16\u5199\u5907\u4efd\u811a\u672c"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4f60\u7684\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u5907\u4efd\u811a\u672c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo vim /root/backup.sh\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u540e\u5c06\u4ee5\u4e0b\u5185\u5bb9\u7c98\u8d34\u5230\u6587\u4ef6\u4e2d\uff0c\u6309\u5b9e\u9645\u60c5\u51b5\u4e0e\u9700\u8981\u4fee\u6539\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\nusage() {\n    echo "\u7528\u6cd5: $0 --server-dir <\u5b58\u6863\u8def\u5f84> --backup-dir <\u5907\u4efd\u6587\u4ef6\u4fdd\u5b58\u76ee\u5f55> [--max-backups <\u6700\u5927\u5907\u4efd\u6587\u4ef6\u6570>]"\n    echo "\u53c2\u6570:"\n    echo "  --server-dir, -s:  \u670d\u52a1\u5668\u76ee\u5f55(\u7edd\u5bf9\u8def\u5f84)"\n    echo "  --backup-dir, -b:  \u5907\u4efd\u6587\u4ef6\u4fdd\u5b58\u76ee\u5f55\uff08\u7edd\u5bf9\u8def\u5f84\uff09"\n    echo "  --max-backups, -m:  \u6700\u5927\u5907\u4efd\u6587\u4ef6\u6570\uff0c\u9009\u586b(\u9ed8\u8ba4: 5)"\n    exit 1\n}\n\nPARSED_ARGUMENTS=$(getopt -n "$0" -o s:b:m: --long server-dir:,backup-dir:,max-backups: -- "$@")\nif [ $? -ne 0 ]; then\n    usage\nfi\n\neval set -- "$PARSED_ARGUMENTS"\n\nwhile true; do\n    case "$1" in\n        -s|--server-dir)\n            SERVER_DIR=$2\n            shift 2\n            ;;\n        -b|--backup-dir)\n            BACKUP_DIR=$2\n            shift 2\n            ;;\n        -m|--max-backups)\n            MAX_BACKUPS=$2\n            shift 2\n            ;;\n        --)\n            shift\n            break\n            ;;\n        *)\n            usage\n            ;;\n    esac\ndone\n\n# \u68c0\u67e5\u5fc5\u9700\u7684\u53c2\u6570\u662f\u5426\u5df2\u63d0\u4f9b\nif [ -z "$SERVER_DIR" ] || [ -z "$BACKUP_DIR" ]; then\n    usage\nfi\n\n# \u68c0\u67e5\u5b58\u6863\u8def\u5f84 SERVER_DIR/server.properties \u662f\u5426\u5b58\u5728\nif [ ! -f "$SERVER_DIR/server.properties" ]; then\n    echo "\u5b58\u6863\u8def\u5f84 $SERVER_DIR/server.properties \u4e0d\u5b58\u5728"\n    exit 1\nfi\n\n# \u68c0\u67e5\u5907\u4efd\u6587\u4ef6\u4fdd\u5b58\u76ee\u5f55\u662f\u5426\u5b58\u5728\nif [ ! -d "$BACKUP_DIR" ]; then\n    echo "\u5907\u4efd\u6587\u4ef6\u4fdd\u5b58\u76ee\u5f55 $BACKUP_DIR \u4e0d\u5b58\u5728\uff0c\u81ea\u52a8\u521b\u5efa"\n    mkdir -p $BACKUP_DIR || exit 1\nfi\n\n# \u68c0\u67e5\u6700\u5927\u5907\u4efd\u6587\u4ef6\u6570\u662f\u5426\u4e3a\u6b63\u6574\u6570\nif [ -z "$MAX_BACKUPS" ]; then\n    MAX_BACKUPS=5\nelif ! [[ "$MAX_BACKUPS" =~ ^[1-9][0-9]*$ ]]; then\n    echo "\u6700\u5927\u5907\u4efd\u6587\u4ef6\u6570\u5fc5\u987b\u4e3a\u6b63\u6574\u6570"\n    exit 1\nfi\n\n# \u5907\u4efd\u5b58\u6863\nSERVER_PARENT_DIR=$(dirname $SERVER_DIR)\nSERVER_NAME=$(basename $SERVER_DIR)\ncd $SERVER_PARENT_DIR || exit\ntime=$(date "+%Y%m%d-%H%M%S")\ntar -czvf "${time}.tar.gz" --exclude="${SERVER_NAME}/session.lock" $SERVER_NAME\nmv "${time}.tar.gz" $BACKUP_DIR\n\n# \u5220\u9664\u591a\u4f59\u7684\u5907\u4efd\u6587\u4ef6\ncd $BACKUP_DIR || exit\ntar_gz_files=($(ls -t *.tar.gz))\nif [ ${#tar_gz_files[@]} -gt $MAX_BACKUPS ]; then\n    rm "${tar_gz_files[${#tar_gz_files[@]}-1]}"\nfi\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6309 ",(0,s.jsx)(e.code,{children:"Esc"})," \u952e\uff0c\u5207\u6362\u5230\u82f1\u6587\u8f93\u5165\u6cd5\u8f93\u5165 ",(0,s.jsx)(e.code,{children:":wq"})," \u4fdd\u5b58\u5e76\u9000\u51fa\u3002"]}),"\n",(0,s.jsx)(e.h1,{id:"\u5c06\u5907\u4efd\u811a\u672c\u6dfb\u52a0\u5230\u5b9a\u65f6\u4efb\u52a1",children:"\u5c06\u5907\u4efd\u811a\u672c\u6dfb\u52a0\u5230\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,s.jsx)(e.p,{children:"\u7f16\u8f91\u5b9a\u65f6\u4efb\u52a1\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"crontab -e\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"0 3 * * * /bin/bash /root/backup.sh -s /path/to/server -b /path/to/backup -m 5\n# \u5982\u679c\u4f60\u6709\u591a\u53f0\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u5907\u4efd\u4efb\u52a1\n# 0 3 * * * /bin/bash /root/backup.sh -s /path/to/server2 -b /path/to/backup2 -m 5\n# 0 3 * * * /bin/bash /root/backup.sh -s /path/to/server3 -b /path/to/backup3 -m 5\n# \u4ee5\u6b64\u7c7b\u63a8...\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"/path/to/server"}),"\uff1a \u66ff\u6362\u4e3a\u4f60\u7684\u670d\u52a1\u5668\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"/path/to/backup"}),"\uff1a \u66ff\u6362\u4e3a\u4f60\u7684\u5907\u4efd\u6587\u4ef6\u4fdd\u5b58\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"5"}),"\uff1a \u662f\u6700\u5927\u5907\u4efd\u6587\u4ef6\u6570\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5982\u4f55\u83b7\u5f97\u670d\u52a1\u5668\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\uff1f\u5bf9\u5e94\u76ee\u5f55\u4e0b\u6267\u884c ",(0,s.jsx)(e.code,{children:"pwd"})," \u547d\u4ee4\u5373\u53ef\u83b7\u5f97\u5f53\u524d\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u8868\u793a\u6bcf\u5929\u51cc\u6668 3 \u70b9\u6267\u884c\u5907\u4efd\u811a\u672c\uff0c\u8fd9\u91cc\u7684 ",(0,s.jsx)(e.code,{children:"0 3 * * *"})," \u662f cron \u8868\u8fbe\u5f0f\u3002\u6709\u5173 cron \u8868\u8fbe\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(e.a,{href:"https://www.runoob.com/linux/linux-comm-crontab.html",children:"Linux crontab \u547d\u4ee4"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5728\u8fd9\u91cc\u63d0\u4f9b\u51e0\u4e2a\u5e38\u7528\u7684 cron \u8868\u8fbe\u5f0f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 * * *"}),"\uff1a\u6bcf\u5929\u51cc\u6668 3 \u70b9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 * * 0"}),"\uff1a\u6bcf\u5468\u65e5\u51cc\u6668 3 \u70b9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 1 * *"}),"\uff1a\u6bcf\u6708 1 \u53f7\u51cc\u6668 3 \u70b9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 * * 1"}),"\uff1a\u6bcf\u5468\u4e00\u51cc\u6668 3 \u70b9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 * * 1,3,5"}),"\uff1a\u6bcf\u5468\u4e00\u3001\u4e09\u3001\u4e94\u51cc\u6668 3 \u70b9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 * * 1-5"}),"\uff1a\u6bcf\u5468\u4e00\u81f3\u5468\u4e94\u51cc\u6668 3 \u70b9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0 3 * * 1-5"}),"\uff1a\u6bcf\u5468\u4e00\u81f3\u5468\u4e94\u51cc\u6668 3 \u70b9"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u5907\u4efd\u6587\u4ef6\u6062\u590d",children:"\u5907\u4efd\u6587\u4ef6\u6062\u590d"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u9996\u5148\u786e\u5b9a\u8981\u6062\u590d\u7684\u5907\u4efd\u6587\u4ef6\uff1b"}),"\n",(0,s.jsxs)(e.li,{children:["\u5c06\u5907\u4efd\u6587\u4ef6\u89e3\u538b\uff1a",(0,s.jsx)(e.code,{children:"tar -zxvf \u5907\u4efd\u6587\u4ef6\u540d.tar.gz"}),"\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5c06\u89e3\u538b\u540e\u7684\u6587\u4ef6\u8986\u76d6\u5230\u670d\u52a1\u5668\u76ee\u5f55\uff1a",(0,s.jsx)(e.code,{children:"cp -r \u89e3\u538b\u540e\u7684\u6587\u4ef6\u8def\u5f84/* \u670d\u52a1\u5668\u76ee\u5f55"}),"\u3002"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>a});var s=i(96540);const r={},c=s.createContext(r);function t(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);