"use strict";(self.webpackChunkmy_parrot_os=self.webpackChunkmy_parrot_os||[]).push([[4557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"Bspwm and Sxhkd"},s="Installing Bspwm and Sxhkd",o={unversionedId:"cap-1/sect-1",id:"cap-1/sect-1",title:"Bspwm and Sxhkd",description:"Let's start by installing Bspwm and Sxhkd.",source:"@site/configure-parrot/cap-1/sect-1.md",sourceDirName:"cap-1",slug:"/cap-1/sect-1",permalink:"/my-parrot-os/es/configure-parrot/cap-1/sect-1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Bspwm and Sxhkd"},sidebar:"tutorialSidebar",previous:{title:"Configure the environment",permalink:"/my-parrot-os/es/configure-parrot/category/configure-the-environment"},next:{title:"Configure Sxhkd",permalink:"/my-parrot-os/es/configure-parrot/cap-1/sect-2"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-bspwm-and-sxhkd"},"Installing Bspwm and Sxhkd"),(0,a.kt)("p",null,"Let's start by installing Bspwm and Sxhkd."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'We open a terminal on our system and configure the following options: At the top, go to "',(0,a.kt)("strong",{parentName:"p"},"Edit"),'">>"',(0,a.kt)("strong",{parentName:"p"},"Profile Preferences"),'" and check the following settings in the ',(0,a.kt)("strong",{parentName:"p"},"General")," tab:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UNMARK"),": Terminal bell"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SET"),": Course shape >> Double T"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Each window represents a non-privileged user action, unless otherwise stated.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"sudo su  \napt install build-essential git vim xcb libxcb-util0-dev libxcb-ewmh-dev libxcb-randr0-dev libxcb-icccm4-dev libxcb-keysyms1-dev libxcb-xinerama0-dev libasound2-dev libxcb-xtest0-dev libxcb-shape0-dev  \napt update\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"cd Descargas/\ngit clone https://github.com/baskerville/bspwm.git\ngit clone https://github.com/baskerville/sxhkd.git\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"{4,5}","{4,5}":!0},"\u250c\u2500[ramiro@parrot]\u2500[~/Descargas]\n\u2514\u2500\u2500\u257c $ls -l\ntotal 0\ndrwxr-xr-x 1 ramiro ramiro 204 mar 30 06:17 bspwm\ndrwxr-xr-x 1 ramiro ramiro 152 mar 30 06:17 sxhkd\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"cd Descargas/\ncd bspwm/\nmake\nsudo make install\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"cd Descargas/\ncd sxhkd/\nmake\nsudo make install\n")),(0,a.kt)("p",null,"Y ahora vamos a instalar ",(0,a.kt)("strong",{parentName:"p"},"Bspwm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"sudo apt install bspwm\n")))}m.isMDXComponent=!0}}]);