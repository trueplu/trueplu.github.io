import{q,h as E,L as U,i as Y,c as j,d as B,n as H,g as Q,a as R,b as W,e as F,u as X,f as Z,j as J,p as ee,l as te,t as G,k as P,m as re,o as x,r as se,s as ae,v as ie,w as ne,x as K,y as S,z as I,A as oe,B as le,C as m,D as fe,E as C}from"./render.BPFmuxPH.js";const ue="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(ue);function ce(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function de(e,t){if(t){const r=document.body;e.autofocus=!0,q(()=>{document.activeElement===r&&e.focus()})}}function T(e){var t,r,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=T(e[t]))&&(s&&(s+=" "),s+=r)}else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function ve(){for(var e,t,r=0,s="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=T(e))&&(s&&(s+=" "),s+=t);return s}function pe(e){return typeof e=="object"?ve(e):e??""}function _e(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function N(e,t,r,s){var a=e.__attributes??={};E&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||a[t]!==(a[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[U]=r),r==null?e.removeAttribute(t):typeof r!="string"&&z(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function he(e,t,r,s,a=!1,o=!1,d=!1){var i=t||{},n=e.tagName==="OPTION";for(var f in t)f in r||(r[f]=null);r.class&&(r.class=pe(r.class));var v=z(e),_=e.__attributes??={};for(const u in r){let c=r[u];if(n&&u==="value"&&c==null){e.value=e.__value="",i[u]=c;continue}var w=i[u];if(c!==w){i[u]=c;var b=u[0]+u[1];if(b!=="$$"){if(b==="on"){const p={},y="$$"+u;let h=u.slice(2);var g=R(h);if(Y(h)&&(h=h.slice(0,-7),p.capture=!0),!g&&w){if(c!=null)continue;e.removeEventListener(h,i[y],p),i[y]=null}if(c!=null)if(g)e[`__${h}`]=c,B([h]);else{let V=function(O){i[u].call(this,O)};i[y]=j(h,e,V,p)}else g&&(e[`__${h}`]=void 0)}else if(u==="style"&&c!=null)e.style.cssText=c+"";else if(u==="autofocus")de(e,!!c);else if(u==="__value"||u==="value"&&c!=null)e.value=e[u]=e.__value=c;else if(u==="selected"&&n)_e(e,c);else{var l=u;a||(l=H(l));var k=l==="defaultValue"||l==="defaultChecked";if(c==null&&!o&&!k)if(_[u]=null,l==="value"||l==="checked"){let p=e;if(l==="value"){let y=p.defaultValue;p.removeAttribute(l),p.defaultValue=y}else{let y=p.defaultChecked;p.removeAttribute(l),p.defaultChecked=y}}else e.removeAttribute(u);else k||v.includes(l)&&(o||typeof c!="string")?e[l]=c:typeof c!="function"&&(E&&(l==="src"||l==="href"||l==="srcset")||N(e,l,c))}u==="style"&&"__styles"in e&&(e.__styles={})}}}return i}var D=new Map;function z(e){var t=D.get(e.nodeName);if(t)return t;D.set(e.nodeName,t=[]);for(var r,s=e,a=Element.prototype;a!==s;){r=W(s);for(var o in r)r[o].set&&t.push(o);s=Q(s)}return t}function $(e,t,r){var s=e.__className,a=ye(t);E&&e.className===a?e.__className=a:(s!==a||E&&e.className!==a)&&(t==null&&!r?e.removeAttribute("class"):e.className=a,e.__className=a)}function ye(e,t){return(e??"")+""}function be(e){F===null&&ce(),X(()=>{const t=Z(e);if(typeof t=="function")return t})}const we={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ge(e,t,r){return new Proxy({props:e,exclude:t},we)}function A(e,t,r,s){var a=!te,o;o=e[t];var d=J(e,t)?.set??void 0,i=s,n=!0,f=()=>(n&&(n=!1,i=s),i);o===void 0&&s!==void 0&&(d&&a&&ee(),o=f(),d&&d(o));var v;return v=()=>{var _=e[t];return _===void 0?f():(n=!0,_)},v}var L={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},xe={parse:function(t,r){return Ae(t,L,r)},stringify:function(t,r){return Ee(t,L,r)}};function Ae(e,t,r){var s;if(r===void 0&&(r={}),!t.codes){t.codes={};for(var a=0;a<t.chars.length;++a)t.codes[t.chars[a]]=a}if(!r.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var o=e.length;e[o-1]==="=";)if(--o,!r.loose&&!((e.length-o)*t.bits&7))throw new SyntaxError("Invalid padding");for(var d=new((s=r.out)!=null?s:Uint8Array)(o*t.bits/8|0),i=0,n=0,f=0,v=0;v<o;++v){var _=t.codes[e[v]];if(_===void 0)throw new SyntaxError("Invalid character "+e[v]);n=n<<t.bits|_,i+=t.bits,i>=8&&(i-=8,d[f++]=255&n>>i)}if(i>=t.bits||255&n<<8-i)throw new SyntaxError("Unexpected end of data");return d}function Ee(e,t,r){r===void 0&&(r={});for(var s=r,a=s.pad,o=a===void 0?!0:a,d=(1<<t.bits)-1,i="",n=0,f=0,v=0;v<e.length;++v)for(f=f<<8|255&e[v],n+=8;n>t.bits;)n-=t.bits,i+=t.chars[d&f>>n];if(n&&(i+=t.chars[d&f<<t.bits-n]),o)for(;i.length*t.bits&7;)i+="=";return i}var Ne=re('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>');function ke(e,t){const r=ge(t,["$$slots","$$events","$$legacy"]);var s=Ne();let a;G(()=>a=he(s,a,{class:"size-6",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...r},void 0,!0)),P(e,s)}function M(e){return function(t){e&&e.call(this,t),e=null}}const Ke="d4Y0XMQZCqAfSmnMuY9razzZlicIbo5U6TdX2behDEYyAIhwzfrGKk6BYQ/GHs+CV1Iug3vxsqKhWWS8A0eJH5NSooGD7eErdGrwELPW3EQiqG6L",Se="pamphlet-dugout7-pogo42-acrobat";async function Ie(e,t){const r=new TextEncoder,s=await crypto.subtle.importKey("raw",r.encode(t),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:2e5,hash:"SHA-256"},s,{name:"AES-GCM",length:256},!1,["decrypt"])}async function me(e,t){const r=new TextDecoder,s=xe.parse(e),a=s.slice(0,32),o=s.slice(32,48),d=s.slice(48),i=await Ie(a,t),n=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:o},i,d));if(!n)throw"Malformed data";return r.decode(n)}async function Ce(e,t){return me(e,t)}var De=ie("<a><!> <span> </span></a>");function Le(e,t){ne(t,!0);const r=A(t,"class",3,""),s=A(t,"style",3,""),a=A(t,"compact",3,!1),o=A(t,"label",3,"Kontakta mig");let d=C("#"),i=C("");function n(l){l.preventDefault(),l.stopPropagation(),l.isTrusted&&I(d,"mailto:"+x(i))}be(async()=>{I(i,oe(await Ce(Ke,Se)))});var f=De(),v=K(()=>M(n)),_=K(()=>M(n));f.__focusin=function(...l){x(_)?.apply(this,l)};var w=S(f);ke(w,{class:"size-6",get"aria-label"(){return o()}});var b=le(w,2),g=S(b,!0);m(b),m(f),G(()=>{N(f,"href",x(d)),$(f,`inline-flex items-center gap-2 rounded-full bg-brand text-black transition-colors duration-200 hover:bg-opacity-75 ${(r()||"")??""} ${(a()?"p-2 xs:px-4":"px-6 py-3")??""}`),N(f,"style",s()),$(b,`whitespace-nowrap ${(a()?"hidden xs:block":"")??""}`),fe(g,o())}),se("pointerenter",f,function(...l){x(v)?.apply(this,l)}),P(e,f),ae()}B(["focusin"]);export{Le as default};