(self.webpackChunklite=self.webpackChunklite||[]).push([[5459],{21177:(e,t,n)=>{"use strict";n.d(t,{n:()=>c});var a=n(87329),r=n(68216),l=n(27048),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserInListDialog_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat((0,a.Z)(r.$m.definitions),(0,a.Z)(l.W.definitions))}},6342:(e,t,n)=>{"use strict";n.d(t,{F:()=>d});var a=n(67294),r=n(17193),l=n(77355),c=n(93310),o=n(20113),i=n(87691),s=n(43487),u=n(50458),d=function(e){var t=e.user,n=e.followButton,d=e.badge,m=(0,s.v9)((function(e){return e.config.authDomain})),p=t.username,f=t.name,v=t.bio,h=void 0===v?"":v;return f&&p?a.createElement(l.x,{padding:"12px 0"},a.createElement(l.x,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},a.createElement(l.x,{display:"flex",alignItems:"flex-start"},a.createElement(l.x,{marginRight:"20px"},a.createElement(r.Yt,{user:t,scale:"S"}),d),a.createElement(l.x,{display:"flex",flexDirection:"column",alignItems:"flex-start"},a.createElement(c.r,{href:(0,u.AW)(t,m)},a.createElement(o.X6,{scale:"XS"},f," ")),a.createElement(i.F,{scale:"S"},h))),a.createElement(l.x,{marginLeft:"48px"},n))):null}},54933:(e,t,n)=>{"use strict";n.d(t,{P:()=>g});var a=n(96156),r=n(67294),l=n(28074),c=n(14646),o=n(78142),i=n(37734),s=5,u=360/s,d={position:"absolute",pointerEvents:"none",top:"-2px",left:"0",width:"25px",height:"36px"},m={"0%":{opacity:"0",transform:"scale(1)"},"32%":{opacity:"1"},"100%":{opacity:"0",transform:"scale(1.5)"}},p={"0%":{opacity:"0",transform:"scale(1)"},"32%":{opacity:"1",transform:"scale(1.3)"},"100%":{opacity:"0",transform:"scale(1.6)"}},f=function(e){return(0,a.Z)({animation:"370ms ease-out 1 ".concat(e),opacity:"0"},(0,i.nk)("reduce"),{animationDuration:"0.1ms"})},v=function(){return{position:"absolute",top:"".concat(48,"%"),left:"".concat(-5,"px"),transformOrigin:"".concat(18,"px"),width:"".concat(2,"px"),height:"".concat(2,"px"),borderRadius:"50%",backgroundColor:o.u$}},h=function(){return{position:"absolute",top:"".concat(44,"%"),left:"".concat(-9,"px"),transformOrigin:"".concat(22,"px"),width:"0",height:"0",borderTop:"2px solid transparent",borderBottom:"2px solid transparent",borderLeft:"".concat(6,"px solid ").concat(o.w9)}};function g(e){var t=e.offset,n=e.onBurstEnd,a=(0,c.I)(),o=a(d);return r.createElement(l.w,{keyframes:{dotKeyframesName:m,triangleKeyframesName:p}},(function(e){for(var l=e.dotKeyframesName,c=e.triangleKeyframesName,i=[],d=[],m=0;m<s;m++){var p=u*m+t;i.push(r.createElement("div",{key:p,className:a(v()),style:{transform:"rotate(".concat(p,"deg)")}})),d.push(r.createElement("div",{key:p,className:a(h()),style:{transform:"rotate(".concat(p+13,"deg)")}}))}return r.createElement("div",{className:o},r.createElement("div",{className:"".concat(o," ").concat(a(f(l))),onAnimationEnd:function(){return n(t)}},i),r.createElement("div",{className:"".concat(o," ").concat(a(f(c)))},d))}))}},1249:(e,t,n)=>{"use strict";n.d(t,{d:()=>O});var a=n(67294),r=n(30020),l=n(14646);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var o=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"});const i=function(e){return a.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24"},e),o)};function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var u=a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M13.74 1l.76 2.97.76-2.97zM16.82 4.78l1.84-2.56-1.43-.47zM10.38 2.22l1.84 2.56-.41-3.03zM22.38 22.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M9.1 22.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L6.1 15.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L6.4 11.26l-1.18-1.18a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L11.96 14a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L8.43 9.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L20.63 15c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM13 6.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 23 23.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"}));const d=function(e){return a.createElement("svg",s({width:29,height:29},e),u)};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}var p=a.createElement("path",{d:"M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z",fillRule:"evenodd"});const f=function(e){return a.createElement("svg",m({width:33,height:33,viewBox:"0 0 33 33"},e),p)};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}var h=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"}),g=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"});const b=function(e){return a.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24"},e),h,g)};function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}var x=a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M13.74 1l.76 2.97.76-2.97zM18.63 2.22l-1.43-.47-.4 3.03zM11.79 1.75l-1.43.47 1.84 2.56zM24.47 14.3L21.45 9c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M14.58 10.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"}),a.createElement("path",{d:"M17.81 10.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.71.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L9.2 7.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L5.8 8.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L4.58 15.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"}));const y=function(e){return a.createElement("svg",E({width:29,height:29},e),x)};function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}var k=a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M29.58 17.1l-3.85-6.78c-.37-.54-.88-.9-1.44-.99a1.5 1.5 0 0 0-1.16.28c-.42.33-.65.74-.7 1.2v.01l3.63 6.37c2.46 4.5 1.67 8.8-2.33 12.8-.27.27-.54.5-.81.73a7.55 7.55 0 0 0 4.45-2.26c4.16-4.17 3.87-8.6 2.21-11.36zm-4.83.82l-3.58-6.3c-.3-.44-.73-.74-1.19-.81a1.1 1.1 0 0 0-.89.2c-.64.51-.75 1.2-.33 2.1l1.83 3.86a.6.6 0 0 1-.2.75.6.6 0 0 1-.77-.07l-9.44-9.44c-.51-.5-1.4-.5-1.9 0a1.33 1.33 0 0 0-.4.95c0 .36.14.7.4.95l5.6 5.61a.6.6 0 1 1-.84.85l-5.6-5.6-.01-.01-1.58-1.59a1.35 1.35 0 0 0-1.9 0 1.35 1.35 0 0 0 0 1.9l1.58 1.59 5.6 5.6a.6.6 0 0 1-.84.86L4.68 13.7c-.51-.51-1.4-.51-1.9 0a1.33 1.33 0 0 0-.4.95c0 .36.14.7.4.95l2.36 2.36 3.52 3.52a.6.6 0 0 1-.84.85l-3.53-3.52a1.34 1.34 0 0 0-.95-.4 1.34 1.34 0 0 0-.95 2.3l6.78 6.78c3.72 3.71 9.33 5.6 13.5 1.43 3.52-3.52 4.2-7.13 2.08-11.01zM11.82 7.72c.06-.32.21-.63.46-.89a1.74 1.74 0 0 1 2.4 0l3.23 3.24a2.87 2.87 0 0 0-.76 2.99l-5.33-5.33zM13.29.48l-1.92.88 2.37 2.84zM21.72 1.36L19.79.5l-.44 3.7zM16.5 3.3L15.48 0h2.04z"}));const M=function(e){return a.createElement("svg",L({width:33,height:33},e),k)};var w={S:a.createElement(i,{"aria-label":"clap"}),M:a.createElement(d,{"aria-label":"clap"}),L:a.createElement(f,{"aria-label":"clap"})},C={S:a.createElement(b,{"aria-label":"clap"}),M:a.createElement(y,{"aria-label":"clap"}),L:a.createElement(M,{"aria-label":"clap"})},S=n(34699),z=n(88903),R=n(35010),T=n(62896),N=!1,A=function(e){var t=e.isFilled,n=void 0!==t&&t,r=e.isDisabled,c=void 0!==r&&r,o=e.isLoading,i=void 0!==o&&o,s=e.scale,u=void 0===s?"L":s,d=e.onClickAndHold,m=e.buttonColor,p=void 0===m?"DARKER":m,f=e.testId,v=(0,l.I)(),h=function(e){var t=e.scale;return e.filled?C[t]:w[t]}({filled:n||c||i,scale:u}),g=(0,a.useMemo)((function(){return function(e){var t=e.buttonColor,n=e.isDisabled,a=e.isLoading;return function(e){var r=e.baseColor.fill,l="LIGHTER"===t?r.darker:r.lighter,c="LIGHTER"===t?r.lighter:r.normal;return{border:0,cursor:a?"progress":n?"not-allowed":"pointer",fill:c,":focus":{fill:n||a?c:l},":hover":{fill:n||a?c:l},opacity:n||a?.25:void 0,outline:0,padding:0,userSelect:"none","> svg":{pointerEvents:"none"},":active":{borderStyle:"none"},WebkitUserSelect:"none"}}}({buttonColor:p,isDisabled:c,isLoading:i})}),[p,c,i]),b=function(e){var t=e.callback,n=e.ms,r=void 0===n?300:n,l=e.callImmediately,c=void 0===l||l,o=(0,a.useState)(!1),i=(0,S.Z)(o,2),s=i[0],u=i[1];(0,z.Y)(t,s?r:null);var d=(0,a.useCallback)((function(e){"touchstart"===e.type&&(N=!0),("mousedown"!==e.type||!N&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.userAgent;return 0===e.button&&!((0,T.V5)(t)&&e.ctrlKey)}(e))&&(c&&t(),u(!0))}),[t,c]),m=(0,a.useCallback)((function(){u(!1)}),[]);return(0,R.L)((function(){if(s)return document.addEventListener("mouseup",m),function(){return document.removeEventListener("mouseup",m)}}),[s]),{onMouseDown:d,onTouchStart:d,onTouchEnd:m}}({callback:null!=d?d:function(){},ms:200}),E=b.onMouseDown,x=b.onTouchStart,y=b.onTouchEnd;return!d||c||i?a.createElement("div",{className:v(g)},h):a.createElement("button",{className:v(g),onMouseDown:E,onTouchStart:x,onTouchEnd:y,"data-testid":f},h)},O=function(e){var t=e.buttonColor,n=e.disableReason,l=e.isFilled,c=e.isLoading,o=void 0!==c&&c,i=e.onClickAndHold,s=e.scale,u=e.shouldHideClapsText,d=e.testId,m=!!n;return o||!m&&!u?a.createElement(A,{buttonColor:t,isFilled:l,isLoading:o,onClickAndHold:i,scale:s,testId:d}):a.createElement(r._,{tooltipText:n||"Clap",targetDistance:15},a.createElement(A,{buttonColor:t,isDisabled:m,isFilled:l,isLoading:o,onClickAndHold:i,scale:s,testId:d}))}},29074:(e,t,n)=>{"use strict";n.d(t,{l:()=>l});var a=n(67294),r=n(77355),l=function(e){var t=e.verticalClapsText,n=e.children;return a.createElement(r.x,{display:"flex",alignItems:"center",flexDirection:t?"column":"row"},n)}},47628:(e,t,n)=>{"use strict";n.d(t,{$:()=>p});var a=n(23450),r=n.n(a),l=n(67294),c=n(17878),o=n(93310),i=n(87691),s=n(14646),u=n(21372),d={cursor:"progress"},m=function(e){return function(t){return{textAlign:"left",":hover":{color:"LIGHTER"===e?t.colorTokens.foreground.neutral.primary.hover:t.colorTokens.foreground.neutral.secondary.base}}}},p=function(e){var t=e.showVoters,n=e.shouldShowResponsiveLabelText,a=e.shouldHideClapsText,p=e.hasLabel,f=e.clapCount,v=e.showFullNumber,h=e.countColor,g=e.countScale,b=void 0===g?"M":g,E=e.isLoading,x=void 0!==E&&E,y=(0,s.I)(),L=v?(0,u.rR)(f):(0,u.pY)(f),k=p&&!a?" ".concat(r()("clap",f)):"";return h||(h=n||p||a?"DARKER":"LIGHTER"),l.createElement(i.F,{color:h,scale:b},x?l.createElement("span",{className:y(d)},"--"):t?l.createElement(o.r,{onClick:t,rules:m(h)},L,n?l.createElement(c.s,null,k):k):L)}},24291:(e,t,n)=>{"use strict";n.d(t,{q:()=>v});var a=n(96156),r=n(67294),l=n(28074),c=n(14646),o=n(37734),i={"0%":{transform:"matrix(0.97, 0, 0, 1, 0, 12)",opacity:"0"},"20%":{transform:"matrix(0.99, 0, 0, 1, 0, 2)",opacity:".7"},"40%":{transform:"matrix(1, 0, 0, 1, 0, -1)",opacity:"1"},"70%":{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:"1"},"100%":{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:"1"}},s={"0%":{opacity:"1",transform:"translateY(0px)"},"10%":{opacity:"1",transform:"translateY(-3px)"},"100%":{opacity:"0",transform:"translateY(-50px)"}},u="400ms ease-out 500ms",d={"0%":{transform:"scale(1)"},"15%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},m="500ms",p=function(e){return function(t){return(0,a.Z)({backgroundColor:t.colorTokens.background.neutral.quaternary.base,bottom:"39px",color:t.backgroundColor,borderRadius:"50%",fontSize:"15px",height:"35px",left:"-4px",lineHeight:"35px",position:"absolute",textAlign:"center",width:"35px",animation:"".concat(e," 400ms ease-out")},(0,o.nk)("reduce"),{animationDuration:"0.1ms !important"})}},f=function(e,t){e&&(e.style.animation=t,e.scrollTop)};function v(e){var t=e.clappedAt,n=e.count,a=e.onFloatEnd,o=(0,c.I)(),v=(0,r.useRef)(t),h=(0,r.useRef)({enter:"",exit:"",pop:""}),g=(0,r.useRef)(null),b=(0,r.useCallback)((function(e){var t=h.current;e.animationName===t.enter||e.animationName===t.pop?f(g.current,"".concat(t.exit," ").concat(u)):e.animationName===t.exit&&(g.current&&(g.current.style.opacity="0"),a())}),[a]);return(0,r.useEffect)((function(){v.current!==t&&(f(g.current,""),f(g.current,"".concat(h.current.pop," ").concat(m)),v.current=t)}),[t]),r.createElement(l.w,{keyframes:{enter:i,exit:s,pop:d}},(function(e){return h.current=e,r.createElement("div",{ref:g,className:o([p(e.enter)]),onAnimationEnd:b},"+".concat(n))}))}},78457:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var a=n(67294),r=n(14646),l=function(e){var t=e.children,n=e.buttonStyle,l=e.hasClaps,c=(0,r.I)(),o=function(e){return"SUBTLE_MARGIN"===e?"0px":"8px"}(n);return a.createElement("div",{className:"pw-multi-vote-icon ".concat(c((function(){return{position:"relative",marginRight:l?"4px":"0px",marginLeft:{xs:o,sm:o,md:void 0,lg:void 0,xl:void 0},WebkitUserSelect:"none"}})))},t)}},11098:(e,t,n)=>{"use strict";n.d(t,{W:()=>c});var a=n(67294),r=n(95983),l=n(77355),c=function(e){var t=e.children,n=e.buttonStyle,c={marginTop:r.E0[n]},o={marginRight:"SUBTLE_MARGIN"===n?"0px":"16px",marginTop:"0px"};return a.createElement(l.x,{xs:o,sm:o,md:c,lg:c,xl:c,playwrightClassName:"pw-multi-vote-count"},t)}},20998:(e,t,n)=>{"use strict";n.d(t,{v:()=>u});var a=n(96156),r=n(67294),l=n(28074),c=n(14646),o=n(37734),i={"0%":{transform:"scale(1)"},"50%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},s=function(e){return(0,a.Z)({animation:"".concat(e," 500ms 1")},(0,o.nk)("reduce"),{animationDuration:"0.1ms"})};function u(e){var t=e.isPopping,n=void 0!==t&&t,a=e.onPopEnd,o=e.children,u=(0,c.I)();return r.createElement(l.w,{keyframes:{popAnimation:i}},(function(e){var t=e.popAnimation;return r.createElement("div",{className:n?u(s(t)):"",onAnimationEnd:a},o)}))}},93818:(e,t,n)=>{"use strict";n.d(t,{x:()=>d});var a=n(23450),r=n.n(a),l=n(67294),c=n(91583),o=n(77355),i=n(47230),s=n(20113),u=function(e){var t=e.isVisible,n=e.hide,a=e.users,r=e.fetchMore,u=e.title,d=e.showMoreLabel,m=e.loading;return l.createElement(c.V,{isVisible:t,hide:n,withAnimation:!0},l.createElement(o.x,{maxWidth:"550px",sm:{paddingTop:"0"},paddingTop:"88px"},l.createElement(o.x,{display:"flex",flexDirection:"column",marginBottom:"24px",textAlign:"center"},l.createElement(s.X6,{scale:"S"},u)),a,r&&l.createElement(o.x,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},l.createElement(i.zx,{buttonStyle:"SOCIAL",size:"SMALL",onClick:r,disabled:m},d))))},d=function(e){var t=e.isVisible,n=e.hide,a=e.voters,c=e.fetchMore,o=e.voterCount,i=e.title,s=e.clapCount,d=e.loading;return l.createElement(u,{isVisible:t,hide:n,fetchMore:c,users:a,title:"".concat(s," ").concat(r()("clap",s)," from ").concat(o," ").concat(1===o?"person":"people",' for "\n  ').concat(i,'"'),showMoreLabel:"Show more claps",loading:d})}},72431:(e,t,n)=>{"use strict";n.d(t,{g:()=>m});var a=n(67294),r=n(70194),l=n(92780);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var o=a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M7.94 1h-.89L7.5 2.9zM10.09 1.33l-.84-.3-.23 1.95zM5.73 1.04l-.84.3L5.97 3zM5.63 11.57a3043.52 3043.52 0 0 0-1.6-1.6C2.32 8.26 1.25 7.5 1.75 7c.25-.25.62-.3.93 0 .45.46 1.54 1.65 1.54 1.65a.69.69 0 0 0 .34.2c.17.04.36-.06.5-.2.14-.13.06-.47-.06-.6L2.94 5.98c-.29-.29-.39-.78-.08-1.09.3-.29.64-.14.9.12l2.1 2.15a.33.33 0 0 0 .24.1.42.42 0 0 0 .26-.12c.13-.12.2-.36.07-.49L5 5.2c-.56-.56-.6-.95-.36-1.2.35-.35.82-.24 1.45.48l2.8 2.95-.59-1.46s-.37-.97 0-1.17c.37-.2.74.33 1 .72l1.37 2.62a3.29 3.29 0 0 1-.57 4.05c-1.22 1.22-3.18.69-4.48-.6z"}),a.createElement("path",{d:"M11.37 4.73c-.26-.4-.7-.4-.98-.19-.19.15-.16.48-.15.7l1.18 2.07c.91 1.49 1.23 2.7.19 4.1.31-.14.4-.27.58-.49.65-.8 1.05-2.47.39-3.88a3.35 3.35 0 0 0-.03-.05l-1.18-2.26z"}));const i=function(e){return a.createElement("svg",c({width:15,height:15},e),o)};var s=function(e){return{position:"relative",bottom:"12px",borderRadius:"10px",color:e.backgroundColor,fill:e.backgroundColor,background:e.colorTokens.background.accent.primary.base,textAlign:"center"}},u={left:"20px",padding:"0 6px"},d={left:"24px",padding:"0 2px"},m=function(e){var t=e.clapCount,n=(0,l.n)({name:"detail",color:"DARKER",scale:"S"}),c=t?[n,s,u]:[s,d];return a.createElement(r.h,null,(function(e){return a.createElement("span",{className:e(c)},t?"+".concat(t):a.createElement(i,null))}))}},95983:(e,t,n)=>{"use strict";n.d(t,{b:()=>a,S2:()=>r,E0:()=>c,wH:()=>o});var a=500,r=50,l={SUBTLE:"S",SUBTLE_MARGIN:"S",SUBTLE_PADDED:"M"},c={SUBTLE:"5px",SUBTLE_MARGIN:"0px",SUBTLE_PADDED:"0px"},o=function(e,t){return{alwaysShowClapsLabel:t,hasClapsLabel:t,buttonScale:l[e]}}},75857:(e,t,n)=>{"use strict";n.d(t,{m:()=>o});var a=n(87329),r=n(34699),l=n(67294),c=n(95983),o=function(e){var t=e.onIncrementClaps,n=e.onSubmitClapsAccumulated,o=(0,l.useRef)(),i=(0,l.useState)(0),s=(0,r.Z)(i,2),u=s[0],d=s[1],m=(0,l.useState)([]),p=(0,r.Z)(m,2),f=p[0],v=p[1],h=(0,l.useState)(!1),g=(0,r.Z)(h,2),b=g[0],E=g[1],x=(0,l.useState)(!1),y=(0,r.Z)(x,2),L=y[0],k=y[1],M=(0,l.useState)(0),w=(0,r.Z)(M,2),C=w[0],S=w[1],z=(0,l.useCallback)((function(){t()||d((function(e){return e+1}))}),[t]),R=(0,l.useCallback)((function(){v((function(e){for(var t=360*Math.random();-1!==e.indexOf(t);)t+=360;return[].concat((0,a.Z)(e),[t])})),S(Date.now()),E(!0),k(!0),z()}),[z]),T=(0,l.useCallback)((function(){E(!1)}),[]),N=(0,l.useCallback)((function(){k(!1)}),[]),A=(0,l.useCallback)((function(e){v((function(t){return t.filter((function(t){return t!==e}))}))}),[]),O=(0,l.useCallback)((function(){var e=o.current;e&&clearTimeout(e)}),[]),D=(0,l.useCallback)((function(e){O(),o.current=0!==e?setTimeout((function(){n(e),d(0)}),c.b):void 0}),[n]);return(0,l.useEffect)((function(){D(u)}),[u]),(0,l.useEffect)((function(){return function(){O()}}),[]),{isShowingViewerClapCount:b,isPopping:L,clappedAt:C,burstOffsets:f,clap:R,onFloatEnd:T,onPopEnd:N,removeBurst:A}}},17878:(e,t,n)=>{"use strict";n.d(t,{s:()=>s,e:()=>u});var a=n(22122),r=n(81253),l=n(67294),c=n(77355),o=["xs","sm","children"],i=["xs","sm","children"],s=function(e){var t=e.xs,n=e.sm,i=e.children,s=(0,r.Z)(e,o);return l.createElement(c.x,(0,a.Z)({xs:{display:"none"},sm:{display:t?"inline-block":"none"},md:{display:t||n?"inline-block":"none"},lg:{display:"inline-block"},xl:{display:"inline-block"},tag:"span"},s),i)},u=function(e){var t=e.xs,n=e.sm,o=e.children,s=(0,r.Z)(e,i);return l.createElement(c.x,(0,a.Z)({xs:{display:"inline-block"},sm:{display:t?"none":"inline-block"},md:{display:t||n?"none":"inline-block"},lg:{display:"none"},xl:{display:"none"},tag:"span"},s),o)}},88903:(e,t,n)=>{"use strict";n.d(t,{Y:()=>r});var a=n(67294);function r(e,t){var n=a.useRef(e);function r(){n.current&&n.current()}a.useEffect((function(){n.current=e}),[e]),a.useEffect((function(){if(null!==t){var e=setInterval(r,t);return function(){clearInterval(e)}}}),[t])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5459.80a6ee18.chunk.js.map