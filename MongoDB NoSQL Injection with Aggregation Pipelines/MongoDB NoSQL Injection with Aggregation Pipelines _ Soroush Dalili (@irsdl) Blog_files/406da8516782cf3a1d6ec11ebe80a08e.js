(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q=this||self;function aa(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=q,e=0;e<c.length;e++)if(d=d[c[e]],d==null){c=null;break a}c=d}a=c&&c[a];return a!=null?a:b};function ba(a){a=a.o;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));typeof a.wow64!=="undefined"&&(c+="&uaw="+Number(a.wow64));return c}
function ca(a,b){return a.g?a.m.slice(0,a.g.index)+b+a.m.slice(a.g.index):a.m+b}function da(a){let b="&act=1&ri=1";a.h&&a.o&&(b+=ba(a));return ca(a,b)}function ea(a,b){return a.h&&a.i||a.l?b==1?a.h?a.i:ca(a,"&dct=1"):b==2?ca(a,"&ri=2"):ca(a,"&ri=16"):a.m}
var fa=class{constructor({url:a,Z:b}){this.m=a;this.o=b;b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}}};function ha(a,b){a:{const c=a.length,d=typeof a==="string"?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]};function ia(a){let b=0;for(const c in a)b++};/*

 SPDX-License-Identifier: Apache-2.0
*/
var t=class{constructor(a){this.g=a}toString(){return this.g}},ka=new t("about:invalid#zClosurez");class la{constructor(a){this.ia=a}}function u(a){return new la(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const ma=new la(a=>/^[^:]*([/?#]|$)/.test(a));var na=u("http"),oa=u("https"),pa=u("ftp"),qa=u("mailto"),sa=u("intent"),ta=u("market"),ua=u("itms"),va=u("itms-appss");const wa=[u("data"),na,oa,qa,pa,ma];function xa(a,b=wa){if(a instanceof t)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof la&&d.ia(a))return new t(a)}}function ya(a,b=wa){return xa(a,b)||ka}var za=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Aa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};function Ba(a){q.setTimeout(()=>{throw a;},0)};var Ca=aa(610401301,!1),Da=aa(188588736,aa(1,!0));var Ea;const Fa=q.navigator;Ea=Fa?Fa.userAgentData||null:null;function Ga(a){return Ca?Ea?Ea.brands.some(({brand:b})=>b&&b.indexOf(a)!=-1):!1:!1}function v(a){var b;a:{if(b=q.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1};function w(){return Ca?!!Ea&&Ea.brands.length>0:!1}function Ha(){return w()?Ga("Chromium"):(v("Chrome")||v("CriOS"))&&!(w()?0:v("Edge"))||v("Silk")};function Ia(){return v("iPhone")&&!v("iPod")&&!v("iPad")};function Ka(a){Ka[" "](a);return a}Ka[" "]=function(){};var La=Ia(),Ma=v("iPad");var Na=Ia()||v("iPod"),Oa=v("iPad");!v("Android")||Ha();Ha();v("Safari")&&(Ha()||(w()?0:v("Coast"))||(w()?0:v("Opera"))||(w()?0:v("Edge"))||(w()?Ga("Microsoft Edge"):v("Edg/"))||w()&&Ga("Opera"));var Pa={},Qa=null;function x(a){return Array.prototype.slice.call(a)};var y=Symbol(),Ra=Symbol(),Sa=Symbol();function A(a,b,c){return c?a|b:a&~b}var B=(a,b)=>{a[y]=b;return a};function D(a){a[y]|=34;return a}function Ta(a,b){B(b,(a|0)&-14591)}function Ua(a,b){B(b,(a|34)&-14557)}function Va(a){a=a>>14&1023;return a===0?536870912:a};var Wa={},Xa={};function Ya(a){return!(!a||typeof a!=="object"||a.la!==Xa)}function Za(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}let $a;function ab(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=a[y]|0;if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;B(a,d|1);return!0}var bb;const cb=[];B(cb,55);bb=Object.freeze(cb);function db(a){if(a&2)throw Error();}
class eb{constructor(a,b,c){this.i=0;this.g=a;this.h=b;this.l=c}next(){if(this.i<this.g.length){const a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.l,a):a}}return{done:!0,value:void 0}}[Symbol.iterator](){return new eb(this.g,this.h,this.l)}}class fb{}class gb{}Object.freeze(new fb);Object.freeze(new gb);var ib=Object.freeze(new gb);let jb;function kb(a){a=Error(a);Aa(a,"warning");return a};function lb(a){if(!Number.isFinite(a))throw kb("enum");return a|0}function nb(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}function E(a){return a==null||typeof a==="string"?a:void 0}function ob(a,b,c,d){if(a!=null&&typeof a==="object"&&a.D===Wa)return a;if(!Array.isArray(a))return c?d&2?(a=b[Ra])?b=a:(a=new b,D(a.j),b=b[Ra]=a):b=new b:b=void 0,b;let e=c=a[y]|0;e===0&&(e|=d&32);e|=d&2;e!==c&&B(a,e);return new b(a)}
function pb(a,b,c){if(b){if(typeof a!=="string")throw Error();return a}let d;return(d=E(a))!=null?d:c?"":void 0};let qb;const rb={},sb=(()=>class extends Map{constructor(){super()}})();function tb(a){return a}function ub(a){if(a.s&2)throw Error("Cannot mutate an immutable Map");}
var F=class extends sb{constructor(a,b,c=tb,d=tb){super();let e=a[y]|0;e|=64;B(a,e);this.s=e;this.B=b;this.v=c;this.K=this.B?xb:d;for(let f=0;f<a.length;f++){const h=a[f],g=c(h[0],!1,!0);let k=h[1];b?k===void 0&&(k=null):k=d(h[1],!1,!0,void 0,void 0,e);super.set(g,k)}}Y(a=yb){if(this.size!==0)return this.H(a)}H(a=yb){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}clear(){ub(this);super.clear()}delete(a){ub(this);return super.delete(this.v(a,
!0,!1))}entries(){var a=this.W();return new eb(a,zb,this)}keys(){return this.ka()}values(){var a=this.W();return new eb(a,F.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){ub(this);a=this.v(a,!0,!1);return a==null?this:b==null?(super.delete(a),this):super.set(a,this.K(b,!0,!0,this.B,!1,this.s))}has(a){return super.has(this.v(a,!1,!1))}get(a){a=this.v(a,!1,!1);const b=super.get(a);if(b!==void 0){var c=this.B;return c?(c=this.K(b,!1,!0,c,this.ha,this.s),
c!==b&&super.set(a,c),c):b}}W(){return Array.from(super.keys())}ka(){return super.keys()}[Symbol.iterator](){return this.entries()}};F.prototype.toJSON=void 0;F.prototype.la=Xa;function xb(a,b,c,d,e,f){a=ob(a,d,c,f);e&&(a=Ab(a));return a}function yb(a){return a}function zb(a){return[a,this.get(a)]}let Bb;function Cb(){return Bb||(Bb=new F(D([]),void 0,void 0,void 0,rb))};function Db(a,b){return Eb(b)}function Eb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(ab(a,void 0,0))return}else{if(a!=null&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof F)return a.Y()}}return a};function Fb(a,b,c){a=x(a);var d=a.length;const e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(const f in e)b[f]=c(e[f])}return a}function Gb(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=ab(a,void 0,0)?void 0:e&&(a[y]|0)&2?a:Hb(a,b,c,d!==void 0,e);else if(Za(a)){const f={};for(let h in a)f[h]=Gb(a[h],b,c,d,e);a=f}else a=b(a,d);return a}}
function Hb(a,b,c,d,e){const f=d||c?a[y]|0:0;d=d?!!(f&32):void 0;a=x(a);for(let h=0;h<a.length;h++)a[h]=Gb(a[h],b,c,d,e);c&&c(f,a);return a}function Ib(a){return Gb(a,Jb,void 0,void 0,!1)}function Jb(a){return a.D===Wa?a.toJSON():a instanceof F?a.Y(Ib):Eb(a)};function Kb(a,b,c=Ua){if(a!=null){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[y]|0;d&2||(b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16))),a=b?B(a,(d|34)&-12293):Hb(a,Kb,d&4?Ua:c,!0,!0));return a}a.D===Wa?(c=a.j,d=c[y],a=d&2?a:Lb(a,c,d,!0)):a instanceof F&&!(a.s&2)&&(c=D(a.H(Kb)),a=new F(c,a.B,a.v,a.K));return a}}function Mb(a){const b=a.j;return Lb(a,b,b[y],!1)}function Lb(a,b,c,d){a=a.constructor;qb=b=Nb(b,c,d);b=new a(b);qb=void 0;return b}
function Nb(a,b,c){const d=c||b&2?Ua:Ta,e=!!(b&32);a=Fb(a,b,f=>Kb(f,e,d));a[y]=a[y]|32|(c?2:0);return a}function Ab(a){const b=a.j,c=b[y];return c&2?Lb(a,b,c,!1):a};function G(a,b){a=a.j;return H(a,a[y],b)}function Ob(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}function H(a,b,c,d){if(c===-1)return null;const e=Va(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Ob(a,b,e,c)&&Sa!=null){var h;a=(h=jb)!=null?h:jb={};h=a[Sa]||0;h>=4||(a[Sa]=h+1,h=Error(),Aa(h,"incident"),Ba(h))}return d}return Ob(a,b,e,c)}}function Pb(a,b,c){const d=a.j;let e=d[y];db(e);I(d,e,b,c);return a}
function I(a,b,c,d,e){const f=Va(b);if(c>=f||e){let h=b;if(b&256)e=a[a.length-1];else{if(d==null)return h;e=a[f+(+!!(b&512)-1)]={};h|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);h!==b&&B(a,h);return h}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function J(a,b,c){return Qb(a,b,c)!==void 0}function Rb(a,b,c){a=H(a,b,c);return Array.isArray(a)?a:bb}function Sb(a,b){a===0&&(a=K(a,b));return a=A(a,1,!0)}function Tb(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Ub(a,b,c,d,e,f){const h=b&2;a:{var g=c,k=b&2;c=!1;if(g==null){if(k){a=Cb();break a}g=[]}else if(g.constructor===F){if((g.s&2)==0||k){a=g;break a}g=g.H()}else Array.isArray(g)?c=!!((g[y]|0)&2):g=[];if(k){if(!g.length){a=Cb();break a}c||(c=!0,D(g))}else if(c){c=!1;k=x(g);for(g=0;g<k.length;g++){const l=k[g]=x(k[g]);Array.isArray(l[1])&&(l[1]=D(l[1]))}g=k}c||((g[y]|0)&64?g[y]&=-33:32&b&&(g[y]|=32));f=new F(g,e,pb,f);I(a,b,d,f,!1);a=f}!h&&e&&(a.ha=!0);return a}
function Vb(a,b){a=a.j;const c=a[y];return Ub(a,c,H(a,c,b),b,void 0,pb)}function Wb(a){var b=Xb;a=a.j;const c=a[y];return Ub(a,c,H(a,c,1),1,b)}function Qb(a,b,c){a=a.j;let d=a[y];const e=H(a,d,c,!1);b=ob(e,b,!1,d);b!==e&&b!=null&&I(a,d,c,b,!1);return b}function L(a,b,c){b=Qb(a,b,c);if(b==null)return b;a=a.j;let d=a[y];if(!(d&2)){const e=Ab(b);e!==b&&(b=e,I(a,d,c,b,!1))}return b}function K(a,b){a=A(a,2,!!(2&b));a=A(a,32,!0);return a=A(a,2048,!1)}
function Yb(a,b,c){32&b&&c||(a=A(a,32,!1));return a}function P(a,b){return a!=null?a:b}function Zb(a,b){a=G(a,b);return a==null?a:Number.isFinite(a)?a|0:void 0}function R(a,b,c=!1){a=G(a,b);return P(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,c)}function S(a,b){return P(E(G(a,b)),"")}function T(a,b,c=0){return P(Zb(a,b),c)}
function $b(a,b){a=a.j;let c=a[y];const d=2&c?1:2;let e=Rb(a,c,b);var f=e[y]|0;if(!(4&f)){if(4&f||Object.isFrozen(e))e=x(e),f=K(f,c),c=I(a,c,b,e);for(var h=0,g=0;h<e.length;h++){const k=E(e[h]);k!=null&&(e[g++]=k)}g<h&&(e.length=g);f=Sb(f,c);f=A(f,20,!0);f=A(f,4096,!1);f=A(f,8192,!1);B(e,f);2&f&&Object.freeze(e)}Tb(f)||(h=f,f=(g=d===1||d===4&&!!(32&f))?A(f,2,!0):Yb(f,c,!1),f!==h&&B(e,f),g&&Object.freeze(e));d===2&&Tb(f)&&(e=x(e),f=K(f,c),f=Yb(f,c,!1),B(e,f),I(a,c,b,e));return e}
function ac(a,b,c){if(c!=null&&typeof c!=="boolean")throw a=typeof c,Error(`Expected boolean but got ${a!="object"?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);return Pb(a,b,c)}function bc(a,b,c){if(c!=null){if(typeof c!=="number")throw kb("int32");if(!Number.isFinite(c))throw kb("int32");c|=0}Pb(a,b,c)}function U(a,b,c){if(c!=null&&typeof c!=="string")throw Error();return Pb(a,b,c)}function cc(a,b,c){Pb(a,b,c==null?c:lb(c))};function dc(a){$a=!0;try{return JSON.stringify(a.toJSON(),Db)}finally{$a=!1}}var V=class{constructor(a){a:{a==null&&(a=qb);qb=void 0;if(a==null){var b=96;a=[]}else{if(!Array.isArray(a))throw Error("narr");b=a[y]|0;if(b&2048)throw Error("farr");if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,Za(c[d]))){b|=256;c=d-(+!!(b&512)-1);if(c>=1024)throw Error("pvtlmt");b=b&-16760833|(c&1023)<<14}}B(a,b)}this.j=a}toJSON(){return $a?ec(this,this.j,!1):ec(this,Hb(this.j,Jb,void 0,void 0,!1),!0)}};
V.prototype.D=Wa;V.prototype.toString=function(){return ec(this,this.j,!1).toString()};
function ec(a,b,c){var d=Da?void 0:a.constructor.A;c=(c?a.j:b)[y];a=b.length;if(!a)return b;let e=b[a-1];var f=Za(e);f?a--:e=void 0;c=+!!(c&512)-1;const h=a-c,g=h!==h;let k=g?Array.prototype.slice.call(b,0,a):b;if(f||g){a:{var l=k;var m=e;f={};let N=!1;if(g)for(var n=Math.max(0,h+c);n<l.length;n++){var p=l[n],z=n-c;p==null||ab(p,d,z)||Ya(p)&&p.size===0||(l[n]=void 0,f[z]=p,N=!0)}if(m)for(var r in m)if(n=+r,isNaN(n))f[r]=m[r];else if(p=m[r],Array.isArray(p)&&(ab(p,d,+r)||Ya(p)&&p.size===0)&&(p=null),
p==null&&(N=!0),n<h&&g){N=!0;p=n+c;for(z=l.length;z<=p;z++)l.push(void 0);l[p]=m[n]}else p!=null&&(f[r]=p);if(N){for(var C in f){m=f;break a}m=null}}l=m==null?e!=null:m!==e}g&&(a=k.length);let Q;for(;a>0;a--){C=a-1;r=k[C];C-=c;if(!(r==null||ab(r,d,C)||Ya(r)&&r.size===0))break;Q=!0}if(k===b&&!l&&!Q)return k;g?Q&&(k.length=a):k=Array.prototype.slice.call(k,0,a);m&&k.push(m);return k};var fc=class extends V{};var gc=class extends V{constructor(){super()}};var hc=class extends V{};var ic=class extends V{};var jc=class extends V{u(){return S(this,3)}X(a){ac(this,5,a)}};var W=class extends V{u(){return S(this,1)}X(a){ac(this,2,a)}};var kc=class extends V{};function lc(a){a=a.j;var b=a[y],c=b,d=!(2&b),e=!!(2&c);b=e?1:2;d&&(d=!e);e=Rb(a,c,7);var f=e[y]|0;const h=!!(4&f);if(!h){f=Sb(f,c);var g=e,k=c,l=!!(2&f);l&&(k=A(k,2,!0));let m=!l,n=!0,p=0,z=0;for(;p<g.length;p++){const r=ob(g[p],jc,!1,k);if(r instanceof jc){if(!l){const C=!!((r.j[y]|0)&2);m&&(m=!C);n&&(n=C)}g[z++]=r}}z<p&&(g.length=z);f=A(f,4,!0);f=A(f,16,n);f=A(f,8,m);B(g,f);l&&Object.freeze(g)}if(d&&!(8&f||!e.length&&(b===1||b===4&&32&f))){Tb(f)&&(e=x(e),f=K(f,c),c=I(a,c,7,e));d=e;g=f;for(f=0;f<
d.length;f++)k=d[f],l=Ab(k),k!==l&&(d[f]=l);g=A(g,8,!0);g=A(g,16,!d.length);B(d,g);f=g}Tb(f)||(d=f,f=(g=b===1||b===4&&!!(32&f))?A(f,!e.length||16&f&&(!h||32&f)?2:2048,!0):Yb(f,c,!1),f!==d&&B(e,f),g&&Object.freeze(e));b===2&&Tb(f)&&(e=x(e),f=K(f,c),f=Yb(f,c,!1),B(e,f),I(a,c,7,e));return e}var Xb=class extends V{};Xb.A=[6,7];var mc=class extends V{};mc.A=[17];var nc=class extends V{};var oc=class extends V{constructor(){super()}};function pc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var qc={capture:!0},rc={passive:!0},sc=pc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});q.addEventListener("test",null,b)}catch(b){}return a});function tc(a){return a?a.passive&&sc()?a:a.capture||!1:!1}function uc(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,tc(d))};function vc(a,b){if(b instanceof t)if(b instanceof t)b=b.g;else throw Error("");else b=za.test(b)?b:void 0;a.href=b===void 0?ka.toString():b};var wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)xc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}function yc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}var zc=/#|$/;
function Ac(a,b){var c=a.search(zc),d=yc(a,0,b,c);if(d<0)return null;var e=a.indexOf("&",d);if(e<0||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,e!==-1?e:0).replace(/\+/g," "))}var Bc=/[?&]($|#)/;function Cc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var Dc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let Ec=[];const Fc=()=>{const a=Ec;Ec=[];for(const b of a)try{b()}catch(c){}};
var Gc=a=>{Ec.push(a);Ec.length==1&&(window.Promise?Promise.resolve().then(Fc):window.setImmediate?setImmediate(Fc):setTimeout(Fc,0))},Hc=a=>{var b=X;b.readyState==="complete"||b.readyState==="interactive"?Gc(a):b.addEventListener("DOMContentLoaded",a)},Ic=a=>{var b=window;b.document.readyState==="complete"?Gc(a):b.addEventListener("load",a)};function Nc(a=document){return a.createElement("img")};function Oc(a,b,c=null,d=!1){Pc(a,b,c,d)}function Pc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Nc(a.document);if(c||d){const f=h=>{c&&c(h);if(d){h=a.google_image_requests;const g=Array.prototype.indexOf.call(h,e,void 0);g>=0&&Array.prototype.splice.call(h,g,1)}e.removeEventListener&&e.removeEventListener("load",f,tc());e.removeEventListener&&e.removeEventListener("error",f,tc())};uc(e,"load",f);uc(e,"error",f)}e.src=b;a.google_image_requests.push(e)};let Qc=0;function Rc(a){return(a=Sc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Sc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function Tc(a){if(!(Math.random()>.01)){var b=Sc(a,document.currentScript);a=`https://${b&&b.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Rc(a)}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Oc(b,a,void 0,!1)}};var X=document,Uc=window;const Vc=[na,oa,qa,pa,ma,ta,ua,sa,va];function Wc(a,b){if(a instanceof t)return a;const c=ya(a,Vc);c===ka&&b(a);return c}
var Xc=a=>{var b=`${Uc.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)xc(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");c<0&&(c=b.length);d=b.indexOf("?");if(d<0||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var Yc=a=>{var b=X;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Zc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const $c=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var ad=class{constructor(a,b){this.g=a;this.h=b}},bd=class{constructor(a,b){this.url=a;this.V=!!b;this.depth=null}};let cd=null;function dd(){const a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function ed(){const a=q.performance;return a&&a.now?a.now():null};var fd=class{constructor(a,b){var c=ed()||dd();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const Y=q.performance,gd=!!(Y&&Y.mark&&Y.measure&&Y.clearMarks),hd=pc(()=>{var a;if(a=gd){var b;if(cd===null){cd="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(cd=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=cd;a=!!b.indexOf&&b.indexOf("1337")>=0}return a});function id(a){a&&Y&&hd()&&(Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class jd{constructor(){var a=window;this.h=[];this.i=a||q;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=hd()||(b!=null?b:Math.random()<1)}start(a,b){if(!this.g)return null;a=new fd(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;Y&&hd()&&Y.mark(b);return a}end(a){if(this.g&&typeof a.value==="number"){a.duration=(ed()||dd())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;Y&&hd()&&Y.mark(b);!this.g||
this.h.length>2048||this.h.push(a)}}};function kd(a,b){const c={};c[a]=b;return[c]}function ld(a,b,c,d,e){const f=[];Cc(a,function(h,g){(h=md(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)}
function md(a,b,c,d,e){if(a==null)return"";b=b||"&";c=c||",$";typeof c=="string"&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(md(a[h],b,c,d+1,e));return f.join(c[d])}}else if(typeof a=="object")return e=e||0,e<2?encodeURIComponent(ld(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function nd(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function od(a,b){let c="https://pagead2.googlesyndication.com"+b,d=nd(a)-b.length;if(d<0)return"";a.g.sort(function(f,h){return f-h});b=null;let e="";for(let f=0;f<a.g.length;f++){const h=a.g[f],g=a.h[h];for(let k=0;k<g.length;k++){if(!d){b=b==null?h:b;break}let l=ld(g[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=b==null?h:b}}}a="";b!=null&&(a=e+"trn="+b);return c+a}class pd{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function qd(a){let b=a.toString();a.name&&b.indexOf(a.name)==-1&&(b+=": "+a.name);a.message&&b.indexOf(a.message)==-1&&(b+=": "+a.message);if(a.stack)a:{a=a.stack;var c=b;try{a.indexOf(c)==-1&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n");break a}catch(d){b=c;break a}b=void 0}return b}
function rd(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{id(e),c=a.m(b,new Zc(f,{message:qd(f)}),void 0,void 0)}catch(h){a.l(217,h)}if(c){let h,g;(h=window.console)==null||(g=h.error)==null||g.call(h,f)}else throw f;}return d}function sd(a,b){var c=td;return(...d)=>rd(c,a,()=>b.apply(void 0,d))}
var wd=class{constructor(a=null){this.pinger=ud;this.g=a;this.h=null;this.i=!1;this.m=this.l}l(a,b,c,d,e){e=e||"jserror";let f;try{const O=new pd;var h=O;h.g.push(1);h.h[1]=kd("context",a);b.error&&b.meta&&b.id||(b=new Zc(b,{message:qd(b)}));if(b.msg){h=O;var g=b.msg.substring(0,512);h.g.push(2);h.h[2]=kd("msg",g)}var k=b.meta||{};b=k;if(this.h)try{this.h(b)}catch(M){}if(d)try{d(b)}catch(M){}d=O;k=[k];d.g.push(3);d.h[3]=k;d=q;k=[];let Ja;b=null;do{var l=d;try{var m;if(m=!!l&&l.location.href!=null)b:{try{Ka(l.foo);
m=!0;break b}catch(M){}m=!1}var n=m}catch(M){n=!1}n?(Ja=l.location.href,b=l.document&&l.document.referrer||null):(Ja=b,b=null);k.push(new bd(Ja||""));try{d=l.parent}catch(M){d=null}}while(d&&l!=d);for(let M=0,Jc=k.length-1;M<=Jc;++M)k[M].depth=Jc-M;l=q;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(n=1;n<k.length;++n){var p=k[n];p.url||(p.url=l.location.ancestorOrigins[n-1]||"",p.V=!0)}var z=k;let vb=new bd(q.location.href,!1);l=null;const wb=z.length-
1;for(p=wb;p>=0;--p){var r=z[p];!l&&$c.test(r.url)&&(l=r);if(r.url&&!r.V){vb=r;break}}r=null;const Vd=z.length&&z[wb].url;vb.depth!=0&&Vd&&(r=z[wb]);f=new ad(vb,r);if(f.h){z=O;var C=f.h.url||"";z.g.push(4);z.h[4]=kd("top",C)}var Q={url:f.g.url||""};if(f.g.url){var N=f.g.url.match(wc),ra=N[1],Kc=N[3],Lc=N[4];C="";ra&&(C+=ra+":");Kc&&(C+="//",C+=Kc,Lc&&(C+=":"+Lc));var Mc=C}else Mc="";ra=O;Q=[Q,{url:Mc}];ra.g.push(5);ra.h[5]=Q;vd(this.pinger,e,O,this.i,c)}catch(O){try{vd(this.pinger,e,{context:"ecmserr",
rctx:a,msg:qd(O),url:f&&f.g.url},this.i,c)}catch(Ja){}}return!0}};class xd{};function vd(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof pd?f=c:(f=new pd,Cc(c,(g,k)=>{var l=f;const m=l.l++;g=kd(k,g);l.g.push(m);l.h[m]=g}));const h=od(f,"/pagead/gen_204?id="+b+"&");h&&Oc(q,h)}catch(f){}}function yd(){var a=ud,b=window.google_srt;b>=0&&b<=1&&(a.g=b)}class zd{constructor(){this.g=Math.random()}};let ud,td;const Z=new jd;var Ad=()=>{window.google_measure_js_timing||(Z.g=!1,Z.h!=Z.i.google_js_reporting_queue&&(hd()&&Array.prototype.forEach.call(Z.h,id,void 0),Z.h.length=0))};(a=>{ud=a!=null?a:new zd;typeof window.google_srt!=="number"&&(window.google_srt=Math.random());yd();td=new wd(Z);td.h=b=>{const c=Qc;c!==0&&(b.jc=String(c),b.shv=Rc(c))};td.i=!0;window.document.readyState=="complete"?Ad():Z.g&&uc(window,"load",()=>{Ad()})})();
var Bd=(a,b)=>sd(a,b),Cd=(a,b)=>{var c=xd;var d="U";c.U&&c.hasOwnProperty(d)||(d=new c,c.U=d);c=[];!b.eid&&c.length&&(b.eid=c.toString());vd(ud,a,b,!0)};function Dd(a=window){return a};ia({wa:0,va:1,sa:2,na:3,ta:4,oa:5,ua:6,qa:7,ra:8,ma:9,pa:10,xa:11});ia({za:0,Aa:1,ya:2});function Ed(a){var b=new Fd,c=b.j;const d=c[y]|0;db(b.j[y]);var e=d&2;b=H(c,d,1,!1);Array.isArray(b)||(b=bb);const f=!!(d&32);let h=b[y]|0;h===0&&f&&!e?(h|=33,B(b,h)):h&1||(h|=1,B(b,h));if(e)h&2||D(b),Object.freeze(b);else if(2&h||2048&h)b=x(b),e=1,f&&(e|=32),B(b,e),I(c,d,1,b,!1);c=b;if(Array.isArray(a))for(var g=0;g<a.length;g++)c.push(lb(a[g]));else for(g of a)c.push(lb(g))}var Fd=class extends V{constructor(){super()}};Fd.A=[1];[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);Ed([1,8,9,10,11,12,2,3,4,5,15,16]);Ed([1,6,7,9,10,11,12,2,3,4,5,13,14,18]);Ed([1,6,7,9,10,11,12,2,3,4,5,13,14,17,18]);new Fd;var Gd=(a,b)=>{b=S(a,2)||b;if(!b)return"";if(R(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];Vb(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Hd=(a,b=[])=>{b=b.length>0?b:Yc("data-asoch-targets");a=Wb(a);const c=[];for(let g=0;g<b.length;++g){var d=b[g].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let k of e)if(!a.has(k)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var h=a.get(e[d]);f=Mb(f).toJSON();h=h.toJSON();const k=Math.max(f.length,h.length);for(let l=0;l<k;++l)f[l]==null&&(f[l]=h[l]);f=new Xb(f)}e=Vb(f,4);Zb(f,5)!=null&&e.set("nb",T(f,5,0).toString());c.push({element:b[g],data:f})}else Cd("gdn-asoch",{type:1,data:d})}return c},Kd=(a,b,c,d)=>{c=Gd(b,c);if(c.length!==0){var e=d===609;if(Ac(c,"ase")==="2"&&d!==1087){var f;const h=!((f=X.featurePolicy)==null||!f.allowedFeatures().includes("attribution-reporting"));f=e?4:h?6:5;let g=
"";e||h&&!Id(c)?(c=Jd(c,"nis",f.toString()),a.setAttribute("attributionsrc",g)):h&&Id(c)&&(g=Jd(da(new fa({url:c})),"nis",f.toString()),a.setAttribute("attributionsrc",g))}e&&J(b,fc,24)&&(e=L(b,fc,24),a.setAttribute("attributionDestination",S(e,2)),a.setAttribute("attributionSourceNonce",S(e,1)));vc(a,Wc(c,Xc(d)));a.target||(a.target=E(G(b,11))!=null?S(b,11):"_top")}},Ld=a=>{for(const b of a)if(a=b.data,b.element.tagName=="A"&&!R(a,1)){const c=b.element;Kd(c,a,c.href,609)}},Md=(a,b,c)=>{b=encodeURIComponent(b);
const d=encodeURIComponent(c);c=new RegExp("[?&]"+b+"=([^&]+)");const e=c.exec(a);b=b+"="+d;return e?a.replace(c,e[0].charAt(0)+b):a.replace("?","?"+b+"&")},Id=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),Nd=a=>{const b=q.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&J(a,kc,8)){const d=S(L(a,kc,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,S(L(a,kc,8),6));break}}},Od=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&J(a,W,12)&&(d.push(L(a,W,12)),c.push(L(a,W,12).u()));e=(f,h)=>
{if(h)for(const g of d)h[g.u()]&&g.X(!0)};a=q.oneAfmaInstance;for(const f of c){let h;(h=a)==null||h.canOpenAndroidApp(f,e,()=>{},b)}},Qd=(a,b,c,d)=>{if(!b||!J(b,kc,8))return!1;const e=L(b,kc,8);let f=S(e,2);Vb(b,10).forEach((g,k)=>{f=Md(f,k,g)});Pd(b)&&R(b,15)&&!/[?&]label=/.test(c)&&(c=Jd(c,"label","deep_link_fallback"));const h=g=>d.openStoreOverlay(g,void 0,S(e,6));return d.redirectForStoreU2({clickUrl:c,trackingUrl:S(e,3),finalUrl:f,pingFunc:R(b,13)?d.httpTrack:d.click,openFunc:(a==null?0:R(a,
1))?h:d.openIntentOrNativeApp,isExternalClickUrl:R(b,13)})},Rd=(a,b,c,d)=>{c&&c.startsWith("intent:")?d.openIntentOrNativeApp(c):a?b?d.openBrowser(c):d.openChromeCustomTab(c):d.openSystemBrowser(c,{useFirstPackage:!0,useRunningProcess:!0})},Td=(a,b,c,d,e,f,h,g=!1,k=!1,l=!1,m=!1)=>{const n=R(e,15);if(!m&&n&&E(G(e,22))!=null)Rd(c,d,S(e,22),h);else{var p=Id(f);if(a&&b&&(!n||!p&&!m)&&(f=g?Sd(f):Sd(f,h.click,l),k&&(e==null?0:R(e,21,!1))))return;Rd(c,d,f,h)}},Sd=(a,b=null,c=!1)=>{if(b!==null){const e=new fa({url:a});
if(e.h&&e.i||e.l){if(e.l&&c){a=da(e);var d=encodeURIComponent("ase");c=encodeURIComponent("3");d=new RegExp("[?&]"+d+"=([^&]+)","g");let f=0;const h=[];for(let g=d.exec(a);g!==null;){if(g[1]==c){let k=g[0].charAt(0)=="?"?1:0;h.push(a.slice(f,g.index+k));f=g.index+g[0].length+k}g=d.exec(a)}h.push(a.slice(f));b(h.join(""))}else b(da(e));return ea(e,1)}}else return{Z:b}={},b=new fa({url:a,Z:b}),b.h&&b.i||b.l?navigator.sendBeacon?navigator.sendBeacon(da(b),"")?ea(b,1):ea(b,2):ea(b,0):a;return a},Ud=(a,
b=!0)=>{b&&Uc.fetch?Uc.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Oc(Uc,a)}):Oc(Uc,a)},Jd=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Pd=a=>{for(const b of lc(a))if(T(b,1,0)===3&&S(b,2))return!0;return!1};var Wd=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&a.length==2?a[1]:"";var Xd=class extends V{constructor(){super()}};function Yd(a,b){return U(a,2,b)}function Zd(a,b){return U(a,3,b)}function $d(a,b){return U(a,4,b)}function ae(a,b){return U(a,5,b)}function be(a,b){return U(a,9,b)}
function ce(a,b){{const m=a.j;let n=m[y];db(n);if(b==null)I(m,n,10);else{var c=b[y]|0,d=c,e=!!(2&c)||!!(2048&c),f=e||Object.isFrozen(b),h;if(h=!f)h=void 0===ib||!1;var g=!0,k=!0;for(let p=0;p<b.length;p++){var l=b[p];e||(l=!!((l.j[y]|0)&2),g&&(g=!l),k&&(k=l))}e||(c=A(c,5,!0),c=A(c,8,g),c=A(c,16,k));if(h||f&&c!==d)b=x(b),d=0,c=K(c,n),c=Yb(c,n,!0);c!==d&&B(b,c);I(m,n,10,b)}}return a}function de(a,b){return ac(a,11,b)}function ee(a,b){return U(a,1,b)}function fe(a,b){return ac(a,7,b)}var ge=class extends V{constructor(){super()}};
ge.A=[10,6];const he="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function ie(a){let b;return(b=a.google_tag_data)!=null?b:a.google_tag_data={}}function je(a){let b,c;return typeof((b=a.navigator)==null?void 0:(c=b.userAgentData)==null?void 0:c.getHighEntropyValues)==="function"}
function ke(){var a=window;if(!je(a))return null;const b=ie(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(he).then(c=>{b.uach!=null||(b.uach=c);return c});return b.uach_promise=a}
function le(a){let b;return de(ce(ae(Yd(ee($d(fe(be(Zd(new ge,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),((b=a.fullVersionList)==null?void 0:b.map(c=>{var d=new Xd;d=U(d,1,c.brand);return U(d,2,c.version)}))||[]),a.wow64||!1)}function me(){let a,b;return(b=(a=ke())==null?void 0:a.then(c=>le(c)))!=null?b:null};function ne(a){for(const b of a)if(b.element.tagName=="A"){a=b.element;const c=b.data;E(G(c,2))==null&&U(c,2,a.href)}}function oe(a,b){return ha(a,c=>c.element===b)}function pe(a){Hc(Bd(556,()=>{new qe(a||{})}))}
function re(a,b){if(!b.defaultPrevented||a.I===b){for(var c,d,e=b.target;(!c||!d)&&e;){d||e.tagName!="A"||(d=e);var f=e.hasAttribute("data-asoch-targets"),h=e.hasAttribute("data-asoch-fixed-value");if(!c)if(h)c=new Xb(JSON.parse(e.getAttribute("data-asoch-fixed-value"))||[]);else if(e.tagName=="A"||f)if(f=f&&e.getAttribute("data-asoch-is-dynamic")==="true"?Hd(a.h,[e]):a.g,f=oe(f,e))c=f.data;e=e.parentElement}e=c&&!R(c,1);if(a.C&&a.l&&b.defaultPrevented)se(a,b,d,e?c:a.l);else{if(e){if(!a.C&&b.defaultPrevented){se(a,
b,d,c);return}f=c;for(var g of $b(f,6))Ud(g)}a.L&&e&&R(c,21,!1)&&(Dc(b),(g=c)&&S(g,2)&&(f=Md(S(g,2),"ae","1"),U(g,2,f)));if(d&&e){c=e?c:null;(g=oe(a.g,d))?g=g.data:(g=new Xb,U(g,2,d.href),U(g,11,d.target||"_top"),a.g.push({element:d,data:g}));Kd(d,c||g,S(g,2),557);te(a,b,d,c);for(var k of $b(a.h,17))g=X.body,e={},typeof window.CustomEvent==="function"?f=new CustomEvent(k,e):(f=document.createEvent("CustomEvent"),f.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail)),g.dispatchEvent(f);if(c==null?
0:E(G(c,19))!=null){k=new gc;Zb(c,5)!=null?(g=k,e=T(c,5,0),cc(g,1,e)):(g=Wd(d.href,"nb"),g!=""&&cc(k,1,+g));g=Wd(d.href,"nx");g!=""&&bc(k,2,+g);g=Wd(d.href,"ny");g!=""&&bc(k,3,+g);g=Wd(d.href,"bg");g!=""&&U(k,4,g);g=Wd(d.href,"nm");g!=""&&bc(k,5,+g);g=Wd(d.href,"mb");g!=""&&bc(k,6,+g);g=d.href;e=g.search(zc);f=0;for(var l=[];(h=yc(g,f,"bg",e))>=0;)l.push(g.substring(f,h)),f=Math.min(g.indexOf("&",h)+1||e,e);l.push(g.slice(f));g=l.join("").replace(Bc,"$1");vc(d,Wc(g,Xc(1211)));f=S(c,19);g=nb(G(c,20))!=
null?P(nb(G(c,20)),0):null;h=dc(k);k=a.o;e=Dd(q);l=new oc;f=U(l,1,f);f=U(f,4,h);f=U(f,10,Date.now().toString());g!==null&&bc(f,2,g);k!==null&&U(f,3,k);cc(f,9,7);var m;e==null||(m=e.fence)==null||m.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation_start",eventData:JSON.stringify(f),destination:["buyer"],once:!0});var n;e==null||(n=e.fence)==null||n.reportEvent({eventType:"click",destination:["component-seller"]})}R(a.h,16)||a.O?ue(a,b,d,c):(m="",(n=q.oneAfmaInstance)&&(m=n.appendClickSignals(d.href)),
ve(a,b,d,c,m))}}}}
function se(a,b,c,d){if(a.I===b&&a.J){const f=new ic(a.J),h=S(d,9);var e="";switch(T(f,4,1)){case 2:if(P(nb(G(f,2)),0))e="blocked_fast_click";else if(S(f,1)||S(f,7))e="blocked_border_click";break;case 3:e=X;e=e.getElementById?e.getElementById("common_15click_anchor"):null;const g=window;if(typeof g.copfcChm==="function"&&e){d=Mb(d);cc(d,5,12);Vb(d,4).set("nb",(12).toString());const k=oe(a.g,e);k?k.data=d:a.g.push({element:e,data:d});!a.T&&c&&(te(a,b,c,d),U(d,2,c.href));g.copfcChm(b,Gd(d,e.href),null,
J(f,hc,10)?dc(L(f,hc,10)):null);a.T&&te(a,b,e,d)}e="onepointfiveclick_first_click"}h&&e&&Ud(h+"&label="+e,!1);Tc(a.P)}}
function te(a,b,c,d){if(!R(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(vc(c,Wc(e[0],Xc(557)));!c.id;)if(f="asoch-id-"+(Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),!X.getElementById(f)){c.id=f;break}f=c.id;typeof window.xy==="function"&&window.xy(b,c,X.body);typeof window.mb==="function"&&window.mb(c);typeof window.bgz==="function"&&window.bgz(f);typeof window.ja===
"function"&&window.ja(f,d?T(d,5,0):0);typeof window.vti==="function"&&window.vti(c);a.i&&typeof window.ss==="function"&&(a.S?window.ss(f,1,a.i):window.ss(a.i,1));e.length>0&&(a=a.o.length>0&&(d==null||E(G(d,19))==null)?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1],vc(c,Wc(a,Xc(557))))}}
async function ue(a,b,c,d){let e="";var f=q.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.O)){if(a.ca)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=Jd(e,"nas",f.encodedNas)}}ve(a,b,c,d,e)}
function ve(a,b,c,d,e){a.N++;a.F<0&&(a.F=Date.now());const f=R(a.h,2),h=f&&Date.now()-a.R>300,g=q.oneAfmaInstance;g?(Dc(b),(()=>{var k=R(d,13)?e:g.logScionEventAndAddParam(e);if(!a.G&&d&&J(d,W,12)){var l=L(d,W,12).u();var m="";if(lc(d).length>0)for(const n of lc(d))m+=S(n,2)+" "+n.u()+" ";R(L(d,W,12),2)?(g.click(k),g.openAndroidApp(l),l=!0):l=!1}else l=!1;l||Qd(a.m,d,k,g)||Td(f,h,a.fa,a.G,d,k,g,a.da,a.L,a.aa,a.ea)})()):(b=window,a.ba&&b.pawsig&&typeof b.pawsig.clk==="function"?(Cd("paw_sigs",{msg:"click",
count:a.N.toString(),elapsed:(Date.now()-a.F).toString()}),b.pawsig.clk(c)):h&&(b=c.getAttribute("attributionsrc")!=null&&Ac(c.getAttribute("attributionsrc"),"nis")==="6"?Sd(c.href,()=>{}):Sd(c.href),b!==c.href&&vc(c,Wc(b,Xc(599)))));h&&(a.R=Date.now());Tc(a.P)}
var qe=class{constructor(a){this.G=Na||La||Oa||Ma;var b=Yc("data-asoch-meta");if(b.length!==1)Cd("gdn-asoch",{type:2,data:b.length});else{this.P=70;this.h=new mc(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.M=a["extra-meta"]?new mc(JSON.parse(a["extra-meta"])):null;this.O=a["is-fsn"]==="true";this.ca=a["is-tap-disabled-for-fsn"]==="true";this.m=a["ios-store-overlay-config"]?new nc(JSON.parse(a["ios-store-overlay-config"])):null;this.fa=a["use-cct-over-browser"]==="true";this.T=a["correct-redirect-url-for-och-15-click"]===
"true";this.ea=a["spitzer-use-click-url-for-fallback"]==="true";this.da=a["send-click-ping-by-js-in-och"]==="true";this.C=a["default-msg-in-och"]==="true";this.ba=a["enable-paw"]==="true";this.L=a["allow-redirection-muted-in-och"]==="true";this.aa=a["check-afma-in-sonic"]==="true";this.o="";b=me();b!=null&&b.then(d=>{var e=dc(d);d=[];for(var f=0,h=0;h<e.length;h++){var g=e.charCodeAt(h);g>255&&(d[f++]=g&255,g>>=8);d[f++]=g}e=3;e===void 0&&(e=0);if(!Qa)for(Qa={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
h=["+/=","+/","-_=","-_.","-_"],g=0;g<5;g++){var k=f.concat(h[g].split(""));Pa[g]=k;for(var l=0;l<k.length;l++){var m=k[l];Qa[m]===void 0&&(Qa[m]=l)}}e=Pa[e];f=Array(Math.floor(d.length/3));h=e[64]||"";for(g=k=0;k<d.length-2;k+=3){var n=d[k],p=d[k+1];m=d[k+2];l=e[n>>2];n=e[(n&3)<<4|p>>4];p=e[(p&15)<<2|m>>6];m=e[m&63];f[g++]=l+n+p+m}l=0;m=h;switch(d.length-k){case 2:l=d[k+1],m=e[(l&15)<<2]||h;case 1:d=d[k],f[g]=e[d>>2]+e[(d&3)<<4|l>>4]+m+h}this.o=f.join("")});this.g=Hd(this.h);this.C&&(this.l=null,
Wb(this.h).forEach(d=>{this.l!=null||E(G(d,2))==null||E(G(d,9))==null||R(d,13)||(this.l=d)}));this.ga=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.R=-Infinity;this.F=this.N=0;this.i=S(this.h,5)||"";this.S=R(this.h,11);this.M&&(this.S=R(this.M,11));this.J=this.I=null;R(this.h,3)||(Ld(this.g),ac(this.h,3,!0));ne(this.g);a=q.oneAfmaInstance;!this.G&&a&&Od(this.g,this.ga);var c;if(a&&((c=this.m)==null?0:R(c,2)))switch(c=()=>{const d=P(nb(G(this.m,4)),0);d>0?q.setTimeout(()=>{Nd(this.g)},
d):Nd(this.g)},T(this.m,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:Ic(c);break;default:Nd(this.g)}uc(X,"click",Bd(557,d=>{re(this,d)}),qc);uc(X,"auxclick",Bd(557,d=>{d.button===1&&re(this,d)}),qc);this.i&&typeof window.ss==="function"&&uc(X.body,"mouseover",Bd(626,()=>{window.ss(this.i,0)}),rc);typeof window.ivti==="function"&&window.ivti(X.body);c=window;c.googqscp&&typeof c.googqscp.registerCallback==="function"&&c.googqscp.registerCallback((d,e)=>{this.I=d;this.J=e})}}};var we=Bd(555,a=>pe(a));Qc=70;const xe=Sc(70,document.currentScript);if(xe==null)throw Error("JSC not found 70");const ye={},ze=xe.attributes;for(let a=ze.length-1;a>=0;a--){const b=ze[a].name;b.indexOf("data-jcp-")===0&&(ye[b.substring(9)]=ze[a].value)}we(ye);}).call(this);