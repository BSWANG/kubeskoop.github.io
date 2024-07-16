"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[9174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,k=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:0},a="Web\u63a7\u5236\u53f0",l={unversionedId:"guide/web-console",id:"guide/web-console",title:"Web\u63a7\u5236\u53f0",description:"KubeSkoop provides a user-friendly web console that can be deployed directly into the cluster.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/web-console.md",sourceDirName:"guide",slug:"/guide/web-console",permalink:"/zh/docs/guide/web-console",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e",permalink:"/zh/docs/guide/configuration"},next:{title:"Connectivity Diagnosis",permalink:"/zh/docs/category/connectivity-diagnosis"}},p={},u=[{value:"\u76d1\u63a7\u96c6\u7fa4\u7f51\u7edc",id:"\u76d1\u63a7\u96c6\u7fa4\u7f51\u7edc",level:2},{value:"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u548c\u6027\u80fd\u5927\u76d8",id:"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u548c\u6027\u80fd\u5927\u76d8",level:3},{value:"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u4e8b\u4ef6",id:"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u4e8b\u4ef6",level:3},{value:"\u7f51\u7edc\u94fe\u8def\u56fe",id:"\u7f51\u7edc\u94fe\u8def\u56fe",level:3},{value:"\u8bca\u65ad\u7f51\u7edc\u95ee\u9898",id:"\u8bca\u65ad\u7f51\u7edc\u95ee\u9898",level:2},{value:"\u7f51\u7edc\u8fde\u901a\u6027\u8bca\u65ad",id:"\u7f51\u7edc\u8fde\u901a\u6027\u8bca\u65ad",level:3},{value:"\u6293\u5305",id:"\u6293\u5305",level:3},{value:"\u5ef6\u8fdf\u63a2\u6d4b",id:"\u5ef6\u8fdf\u63a2\u6d4b",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8282\u70b9\u914d\u7f6e",id:"\u8282\u70b9\u914d\u7f6e",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web\u63a7\u5236\u53f0"},"Web\u63a7\u5236\u53f0"),(0,i.kt)("p",null,"KubeSkoop provides a user-friendly web console that can be deployed directly into the cluster.\nIt provides the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u95ee\u9898\u8bca\u65ad",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8fde\u901a\u6027\u8bca\u65ad"),(0,i.kt)("li",{parentName:"ul"},"\u6293\u5305"),(0,i.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u63a2\u6d4b"))),(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7f51\u7edc\u76d1\u63a7",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6296\u52a8\u548c\u6027\u80fd\u5927\u76d8"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6296\u52a8\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u94fe\u8def\u56fe")))),(0,i.kt)("h2",{id:"\u76d1\u63a7\u96c6\u7fa4\u7f51\u7edc"},"\u76d1\u63a7\u96c6\u7fa4\u7f51\u7edc"),(0,i.kt)("h3",{id:"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u548c\u6027\u80fd\u5927\u76d8"},"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u548c\u6027\u80fd\u5927\u76d8"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Monitoring - Dashboard"),"\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u5185\u7f51\u7edc\u5927\u76d8\uff0c\u4ece\u5927\u76d8\u4e2d\u53ef\u67e5\u8be2\u5bf9\u5e94\u6027\u80fd\u95ee\u9898\u65f6\u95f4\u70b9\u7684\u5404\u6df1\u5ea6\u6307\u6807\u7684\u6c34\u4f4d\u60c5\u51b5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grafana_performance",src:n(8401).Z,width:"3152",height:"2612"})),(0,i.kt)("h3",{id:"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u4e8b\u4ef6"},"\u67e5\u770b\u7f51\u7edc\u6296\u52a8\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Monitoring - Event"),"\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u65f6\u95f4\u70b9\u96c6\u7fa4\u5185\u4ea7\u751f\u7684\u5f02\u5e38\u4e8b\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u9009\u62e9\u9700\u8981\u7684\u65f6\u95f4\u8303\u56f4\uff0c\u6216\u8005\u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u3001\u8282\u70b9\u3001\u4e8b\u4ef6\u4ea7\u751f\u7684Pod\u547d\u540d\u7a7a\u95f4/\u540d\u79f0\u7b49\u4fe1\u606f\u8fdb\u884c\u7b5b\u9009\u3002"),(0,i.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Live"),"\uff0c\u53ef\u4ee5\u5b9e\u65f6\u6839\u636e\u5f53\u524d\u7b5b\u9009\u6761\u4ef6\uff0c\u5b9e\u65f6\u76d1\u63a7\u96c6\u7fa4\u5185\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Events",src:n(8452).Z,width:"3352",height:"2360"})),(0,i.kt)("h3",{id:"\u7f51\u7edc\u94fe\u8def\u56fe"},"\u7f51\u7edc\u94fe\u8def\u56fe"),(0,i.kt)("p",null,"\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/guide/network-graph"},"\u7f51\u7edc\u94fe\u8def\u56fe"),"\u3002"),(0,i.kt)("h2",{id:"\u8bca\u65ad\u7f51\u7edc\u95ee\u9898"},"\u8bca\u65ad\u7f51\u7edc\u95ee\u9898"),(0,i.kt)("h3",{id:"\u7f51\u7edc\u8fde\u901a\u6027\u8bca\u65ad"},"\u7f51\u7edc\u8fde\u901a\u6027\u8bca\u65ad"),(0,i.kt)("p",null,"\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/guide/connectivity-diagnosis/intro#%E9%80%9A%E8%BF%87web%E6%8E%A7%E5%88%B6%E5%8F%B0"},"\u8fde\u901a\u6027\u8bca\u65ad"),"\u3002"),(0,i.kt)("h3",{id:"\u6293\u5305"},"\u6293\u5305"),(0,i.kt)("p",null,"\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/guide/packet-capturing"},"\u6293\u5305"),"\u3002"),(0,i.kt)("h3",{id:"\u5ef6\u8fdf\u63a2\u6d4b"},"\u5ef6\u8fdf\u63a2\u6d4b"),(0,i.kt)("p",null,"\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/guide/latency-detection"},"\u5ef6\u8fdf\u63a2\u6d4b"),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u8282\u70b9\u914d\u7f6e"},"\u8282\u70b9\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Network - Configuration - Node Configuration"),"\u4e2d\uff0c\u53ef\u4ee5\u5bf9\u96c6\u7fa4KubeSkoop Agent\u5b9e\u4f8b\u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node Configuration",src:n(5946).Z,width:"3288",height:"2158"})),(0,i.kt)("p",null,"By clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete"),", you can turn on or off the node's metrics/event probes, as well as configure the event collector from this page."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u5bf9\u8282\u70b9\u914d\u7f6e\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u9700\u8981\u70b9\u51fb\u9875\u9762\u53f3\u4e0b\u89d2\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Save Configuration"),"\u6309\u94ae\uff0c\u4f7f\u4fee\u6539\u751f\u6548\u3002")))}s.isMDXComponent=!0},8452:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/events-039a4eda4ef9e34f9b204dd41a161480.jpg"},8401:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-27c927becf4fecca6aa4811eafb28650.jpg"},5946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-configuration-5a988bec8b1dd068535a530b09aa1abf.jpg"}}]);