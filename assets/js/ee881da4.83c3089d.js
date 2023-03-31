"use strict";(self.webpackChunkmy_parrot_os=self.webpackChunkmy_parrot_os||[]).push([[1784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const s={sidebar_position:2,title:"Configure Sxhkd"},i="Configuring the Sxhkd",a={unversionedId:"1/Configure Sxhkd",id:"1/Configure Sxhkd",title:"Configure Sxhkd",description:"Let's start by configuring Sxhkd.",source:"@site/docs/1/Configure Sxhkd.md",sourceDirName:"1",slug:"/1/Configure Sxhkd",permalink:"/my-parrot-os/docs/1/Configure Sxhkd",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configure Sxhkd"},sidebar:"tutorialSidebar",previous:{title:"Bspwm and Sxhkd",permalink:"/my-parrot-os/docs/1/Bspwm and Sxhkd"},next:{title:"Install Polybar",permalink:"/my-parrot-os/docs/1/Install Polybar"}},p={},c=[],l={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-the-sxhkd"},"Configuring the Sxhkd"),(0,o.kt)("p",null,"Let's start by configuring Sxhkd."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"mkdir ~/.config/bspwm\nmkdir ~/.config/sxhkd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"cd Descargas/\ncd bspwm/\ncp examples/bspwmrc ~/.config/bspwm/bspwmrc\nchmod +x !$\ncp examples/sxhkdrc ~/.config/sxhkd/sxhkdrc\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Check that the "',(0,o.kt)("strong",{parentName:"p"},"bspwmrc"),'" file we copied has executable permissions.'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"{3}","{3}":!0},"\u250c\u2500[ramiro@parrot]\u2500[~/Descargas/bspwm]\n\u2514\u2500\u2500\u257c $ls -l ~/.config/bspwm/bspwmrc \n-rwxr-xr-x 1 ramiro ramiro 479 mar 30 07:28 /home/ramiro/.config/bspwm/bspwmrc\n"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'In this part, the contents of "',(0,o.kt)("strong",{parentName:"p"},"bspwmrc"),'" file are:'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Contents of: ~/.config/bspwm/bspwmrc" showLineNumbers',title:'"Contents',"of:":!0,'~/.config/bspwm/bspwmrc"':!0,showLineNumbers:!0},"#! /bin/sh\n\npgrep -x sxhkd > /dev/null || sxhkd &\n\nbspc monitor -d I II III IV V VI VII VIII IX X\n\nbspc config border_width 2\nbspc config window_gap 12\nbspc config split_ratio 0.52\n\nbspc config borderless_monocle true\nbspc config gapless_monocle true\n\nbspc rule -a Gimp desktop='^8' state=floating follow=on\nbspc rule -a Chromium desktop='^2'\nbspc rule -a mplayer2 state=floating\nbspc rule -a Kupfer.py focus=on\nbspc rule -a Screenkey manage=off\n"))),(0,o.kt)("p",null,'The "',(0,o.kt)("inlineCode",{parentName:"p"},"sxhkdrc"),'" file is the one that defines what we want to happen when we execute our keyboard shortcuts.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'In this part, the contents of "',(0,o.kt)("strong",{parentName:"p"},"sxhkdrc"),'" file are. ',(0,o.kt)("strong",{parentName:"p"},"We need to pay attention to the highlighted lines of the file code.")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Contents of: ~/.config/sxhkd/sxhkdrc" {125} showLineNumbers',title:'"Contents',"of:":!0,'~/.config/sxhkd/sxhkdrc"':!0,"{125}":!0,showLineNumbers:!0},"#\n# wm independent hotkeys\n#\n\n# terminal emulator\nsuper + Return\n    kitty\n\n# program launcher\nsuper + @space\n    dmenu_run\n\n# make sxhkd reload its configuration files:\nsuper + Escape\n    pkill -USR1 -x sxhkd\n\n#\n# bspwm hotkeys\n#\n\n# quit/restart bspwm\nsuper + alt + {q,r}\n    bspc {quit,wm -r}\n\n# close and kill\nsuper + {_,shift + }w\n    bspc node -{c,k}\n\n# alternate between the tiled and monocle layout\nsuper + m\n    bspc desktop -l next\n\n# send the newest marked node to the newest preselected node\nsuper + y\n    bspc node newest.marked.local -n newest.!automatic.local\n\n# swap the current node and the biggest window\nsuper + g\n    bspc node -s biggest.window\n\n#\n# state/flags\n#\n\n# set the window state\nsuper + {t,shift + t,s,f}\n    bspc node -t {tiled,pseudo_tiled,floating,fullscreen}\n\n# set the node flags\nsuper + ctrl + {m,x,y,z}\n    bspc node -g {marked,locked,sticky,private}\n\n#\n# focus/swap\n#\n\n# focus the node in the given direction\nsuper + {_,shift + }{Left,Down,Up,Right}\n    bspc node -{f,s} {west,south,north,east}\n\n# focus the node for the given path jump\nsuper + {p,b,comma,period}\n    bspc node -f @{parent,brother,first,second}\n\n# focus the next/previous window in the current desktop\nsuper + {_,shift + }c\n    bspc node -f {next,prev}.local.!hidden.window\n\n# focus the next/previous desktop in the current monitor\nsuper + bracket{left,right}\n    bspc desktop -f {prev,next}.local\n\n# focus the last node/desktop\nsuper + {grave,Tab}\n    bspc {node,desktop} -f last\n\n# focus the older or newer node in the focus history\nsuper + {o,i}\n    bspc wm -h off; \\\n    bspc node {older,newer} -f; \\\n    bspc wm -h on\n\n# focus or send to the given desktop\nsuper + {_,shift + }{1-9,0}\n    bspc {desktop -f,node -d} '^{1-9,10}'\n\n#\n# preselect\n#\n\n# preselect the direction\nsuper + ctrl + alt + {Left,Down,Up,Right}\n    bspc node -p {west,south,north,east}\n\n# preselect the ratio\nsuper + ctrl + {1-9}\n    bspc node -o 0.{1-9}\n\n# cancel the preselection for the focused node\nsuper + ctrl + alt + space\n    bspc node -p cancel\n\n# cancel the preselection for the focused desktop\nsuper + ctrl + shift + space\n    bspc query -N -d | xargs -I id -n 1 bspc node id -p cancel\n\n#\n# move/resize\n#\n\n# expand a window by moving one of its side outward\n#super + alt + {h,j,k,l}\n#   bspc node -z {left -20 0,bottom 0 20,top 0 -20,right 20 0}\n\n# contract a window by moving one of its side inward\n#super + alt + shift + {h,j,k,l}\n#   bspc node -z {right -20 0,top 0 20,bottom 0 -20,left 20 0}\n\n# move a floating window\nsuper + shift + {Left,Down,Up,Right}\n    bspc node -v {-20 0,0 20,0 -20,20 0}\n\n# Custom move/resize\nalt + super + {Left,Down,Up,Right}\n    /home/ramiro/.config/bspwm/scripts/bspwm_resize {west,south,north,east}\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run as a non-privileged user" showLineNumbers',title:'"Run',as:!0,a:!0,"non-privileged":!0,'user"':!0,showLineNumbers:!0},"mkdir ~/.config/bspwm/scripts/\ntouch ~/.config/bspwm/scripts/bspwm_resize\nchmod +x ~/.config/bspwm/scripts/bspwm_resize\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'The file "',(0,o.kt)("inlineCode",{parentName:"p"},"bspwm_resize"),'" must have execute permissions.'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"{3}","{3}":!0},"\u250c\u2500[ramiro@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ls -l ~/.config/bspwm/scripts/bspwm_resize \n-rwxr-xr-x 1 ramiro ramiro 390 mar 30 07:59 /home/ramiro/.config/bspwm/scripts/bspwm_resize\n"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'In this part, the contents of "',(0,o.kt)("inlineCode",{parentName:"p"},"**sxhkdrc**"),'" file are. ',(0,o.kt)("strong",{parentName:"p"},"We need to pay attention to the highlighted lines of the file code.")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Contents of:  ~/.config/bspwm/scripts/bspwm_resize" showLineNumbers',title:'"Contents',"of:":!0,"":!0,'~/.config/bspwm/scripts/bspwm_resize"':!0,showLineNumbers:!0},'#!/usr/bin/env dash\n\nif bspc query -N -n focused.floating > /dev/null; then\n    step=20\nelse\n    step=100\nfi\n\ncase "$1" in\n    west) dir=right; falldir=left; x="-$step"; y=0;;\n    east) dir=right; falldir=left; x="$step"; y=0;;\n    north) dir=top; falldir=bottom; x=0; y="-$step";;\n    south) dir=top; falldir=bottom; x=0; y="$step";;\nesac\n\nbspc node -z "$dir" "$x" "$y" || bspc node -z "$falldir" "$x" "$y"\n'))))}m.isMDXComponent=!0}}]);