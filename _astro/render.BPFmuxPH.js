const nt="[",lt="]",W={},g=Symbol();function ir(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ut=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ar(e){return ut.includes(e)}const it={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function sr(e){return e=e.toLowerCase(),it[e]??e}const at=["touchstart","touchmove"];function st(e){return at.includes(e)}const De=!1;var Ie=Array.isArray,ot=Array.from,ft=Object.defineProperty,K=Object.getOwnPropertyDescriptor,or=Object.getOwnPropertyDescriptors,ct=Object.prototype,_t=Array.prototype,vt=Object.getPrototypeOf;function dt(e){for(var t=0;t<e.length;t++)e[t]()}const x=2,Fe=4,fe=8,Te=16,R=32,ce=64,pe=128,j=256,ue=512,E=1024,A=2048,Z=4096,ie=8192,H=16384,ht=32768,pt=65536,wt=1<<19,Le=1<<20,he=Symbol("$state"),fr=Symbol("");function Pe(e){return e===this.v}function yt(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Et(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function mt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function bt(){throw new Error("https://svelte.dev/e/hydration_failed")}function cr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Tt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function kt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Nt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Ot=!1,Dt=!1;function D(e,t){var r={f:0,v:e,reactions:null,equals:Pe,version:0};return r}function _r(e){return At(D(e))}function At(e){return h!==null&&h.f&x&&(N===null?$t([e]):N.push(e)),e}function C(e,t){return h!==null&&Wt()&&h.f&(x|Te)&&(N===null||!N.includes(e))&&Nt(),Rt(e,t)}function Rt(e,t){return e.equals(t)||(e.v,e.v=t,e.version=Ze(),Me(e,A),v!==null&&v.f&E&&!(v.f&R)&&(w!==null&&w.includes(e)?(O(v,A),de(v)):I===null?Ut([e]):I.push(e))),t}function Me(e,t){var r=e.reactions;if(r!==null)for(var n=r.length,l=0;l<n;l++){var u=r[l],i=u.f;i&A||(O(u,t),i&(E|j)&&(i&x?Me(u,Z):de(u)))}}function xe(e){console.warn("https://svelte.dev/e/hydration_mismatch")}let k=!1;function re(e){k=e}let p;function M(e){if(e===null)throw xe(),W;return p=e}function qe(){return M(Q(p))}function vr(e){if(k){if(Q(p)!==null)throw xe(),W;p=e}}function $(e,t=null,r){if(typeof e!="object"||e===null||he in e)return e;const n=vt(e);if(n!==ct&&n!==_t)return e;var l=new Map,u=Ie(e),i=D(0);u&&l.set("length",D(e.length));var _;return new Proxy(e,{defineProperty(f,a,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&Tt();var o=l.get(a);return o===void 0?(o=D(s.value),l.set(a,o)):C(o,$(s.value,_)),!0},deleteProperty(f,a){var s=l.get(a);if(s===void 0)a in f&&l.set(a,D(g));else{if(u&&typeof a=="string"){var o=l.get("length"),c=Number(a);Number.isInteger(c)&&c<o.v&&C(o,c)}C(s,g),Ae(i)}return!0},get(f,a,s){if(a===he)return e;var o=l.get(a),c=a in f;if(o===void 0&&(!c||K(f,a)?.writable)&&(o=D($(c?f[a]:g,_)),l.set(a,o)),o!==void 0){var d=ne(o);return d===g?void 0:d}return Reflect.get(f,a,s)},getOwnPropertyDescriptor(f,a){var s=Reflect.getOwnPropertyDescriptor(f,a);if(s&&"value"in s){var o=l.get(a);o&&(s.value=ne(o))}else if(s===void 0){var c=l.get(a),d=c?.v;if(c!==void 0&&d!==g)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(f,a){if(a===he)return!0;var s=l.get(a),o=s!==void 0&&s.v!==g||Reflect.has(f,a);if(s!==void 0||v!==null&&(!o||K(f,a)?.writable)){s===void 0&&(s=D(o?$(f[a],_):g),l.set(a,s));var c=ne(s);if(c===g)return!1}return o},set(f,a,s,o){var c=l.get(a),d=a in f;if(u&&a==="length")for(var b=s;b<c.v;b+=1){var T=l.get(b+"");T!==void 0?C(T,g):b in f&&(T=D(g),l.set(b+"",T))}c===void 0?(!d||K(f,a)?.writable)&&(c=D(void 0),C(c,$(s,_)),l.set(a,c)):(d=c.v!==g,C(c,$(s,_)));var ee=Reflect.getOwnPropertyDescriptor(f,a);if(ee?.set&&ee.set.call(o,s),!d){if(u&&typeof a=="string"){var te=l.get("length"),S=Number(a);Number.isInteger(S)&&S>=te.v&&C(te,S+1)}Ae(i)}return!0},ownKeys(f){ne(i);var a=Reflect.ownKeys(f).filter(c=>{var d=l.get(c);return d===void 0||d.v!==g});for(var[s,o]of l)o.v!==g&&!(s in f)&&a.push(s);return a},setPrototypeOf(){xt()}})}function Ae(e,t=1){C(e,e.v+t)}var Re,je,Be;function we(){if(Re===void 0){Re=window;var e=Element.prototype,t=Node.prototype;je=K(t,"firstChild").get,Be=K(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function ae(e=""){return document.createTextNode(e)}function Y(e){return je.call(e)}function Q(e){return Be.call(e)}function dr(e,t){if(!k)return Y(e);var r=Y(p);if(r===null)r=p.appendChild(ae());else if(t&&r.nodeType!==3){var n=ae();return r?.before(n),M(n),n}return M(r),r}function hr(e,t=1,r=!1){let n=k?p:e;for(var l;t--;)l=n,n=Q(n);if(!k)return n;var u=n?.nodeType;if(r&&u!==3){var i=ae();return n===null?l?.after(i):n.before(i),M(i),i}return M(n),n}function St(e){e.textContent=""}function pr(e){var t=x|A;v===null?t|=j:v.f|=Le;var r=h!==null&&h.f&x?h:null;const n={children:null,ctx:y,deps:null,equals:Pe,f:t,fn:e,reactions:null,v:null,version:0,parent:r??v};return r!==null&&(r.children??=[]).push(n),n}function Ve(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&x?ke(n):q(n)}}}function Ct(e){for(var t=e.parent;t!==null;){if(!(t.f&x))return t;t=t.parent}return null}function Ye(e){var t,r=v;L(Ct(e));try{Ve(e),t=Qe(e)}finally{L(r)}return t}function He(e){var t=Ye(e),r=(P||e.f&j)&&e.deps!==null?Z:E;O(e,r),e.equals(t)||(e.v=t,e.version=Ze())}function ke(e){Ve(e),z(e,0),O(e,H),e.v=e.children=e.deps=e.ctx=e.reactions=null}function It(e){v===null&&h===null&&gt(),h!==null&&h.f&j&&Et(),Ne&&yt()}function Ft(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function X(e,t,r,n=!0){var l=(e&ce)!==0,u=v,i={ctx:y,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|A,first:null,fn:t,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var _=V;try{Se(!0),Oe(i),i.f|=ht}catch(s){throw q(i),s}finally{Se(_)}}else t!==null&&de(i);var f=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&Le)===0;if(!f&&!l&&n&&(u!==null&&Ft(i,u),h!==null&&h.f&x)){var a=h;(a.children??=[]).push(i)}return i}function Lt(e){const t=X(fe,null,!1);return O(t,E),t.teardown=e,t}function wr(e){It();var t=v!==null&&(v.f&R)!==0&&y!==null&&!y.m;if(t){var r=y;(r.e??=[]).push({fn:e,effect:v,reaction:h})}else{var n=$e(e);return n}}function Pt(e){const t=X(ce,e,!0);return(r={})=>new Promise(n=>{r.outro?Bt(t,()=>{q(t),n(void 0)}):(q(t),n(void 0))})}function $e(e){return X(Fe,e,!1)}function yr(e){return Mt(e)}function Mt(e,t=0){return X(fe|Te|t,e,!0)}function qt(e,t=!0){return X(fe|R,e,!0,t)}function Ue(e){var t=e.teardown;if(t!==null){const r=Ne,n=h;Ce(!0),F(null);try{t.call(null)}finally{Ce(r),F(n)}}}function We(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)ke(t[r])}}function Ke(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;q(r,t),r=n}}function jt(e){for(var t=e.first;t!==null;){var r=t.next;t.f&R||q(t),t=r}}function q(e,t=!0){var r=!1;if((t||e.f&wt)&&e.nodes_start!==null){for(var n=e.nodes_start,l=e.nodes_end;n!==null;){var u=n===l?null:Q(n);n.remove(),n=u}r=!0}Ke(e,t&&!r),We(e),z(e,0),O(e,H);var i=e.transitions;if(i!==null)for(const f of i)f.stop();Ue(e);var _=e.parent;_!==null&&_.first!==null&&Ge(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ge(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Bt(e,t){var r=[];ze(e,r,!0),Vt(r,()=>{q(e),t()})}function Vt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var l of e)l.out(n)}else t()}function ze(e,t,r){if(!(e.f&ie)){if(e.f^=ie,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var l=n.next,u=(n.f&pt)!==0||(n.f&R)!==0;ze(n,t,u?r:!1),n=l}}}let ye=!1,Ee=[];function Yt(){ye=!1;const e=Ee.slice();Ee=[],dt(e)}function Ht(e){ye||(ye=!0,queueMicrotask(Yt)),Ee.push(e)}let le=!1,se=!1,oe=null,V=!1,Ne=!1;function Se(e){V=e}function Ce(e){Ne=e}let ge=[],G=0;let h=null;function F(e){h=e}let v=null;function L(e){v=e}let N=null;function $t(e){N=e}let w=null,m=0,I=null;function Ut(e){I=e}let Je=1,P=!1,y=null;function Ze(){return++Je}function Wt(){return!Ot}function _e(e){var t=e.f;if(t&A)return!0;if(t&Z){var r=e.deps,n=(t&j)!==0;if(r!==null){var l,u,i=(t&ue)!==0,_=n&&v!==null&&!P,f=r.length;if(i||_){for(l=0;l<f;l++)u=r[l],(i||!u?.reactions?.includes(e))&&(u.reactions??=[]).push(e);i&&(e.f^=ue)}for(l=0;l<f;l++)if(u=r[l],_e(u)&&He(u),u.version>e.version)return!0}(!n||v!==null&&!P)&&O(e,E)}return!1}function Kt(e,t){for(var r=t;r!==null;){if(r.f&pe)try{r.fn(e);return}catch{r.f^=pe}r=r.parent}throw le=!1,e}function Gt(e){return(e.f&H)===0&&(e.parent===null||(e.parent.f&pe)===0)}function ve(e,t,r,n){if(le){if(r===null&&(le=!1),Gt(t))throw e;return}r!==null&&(le=!0);{Kt(e,t);return}}function Qe(e){var t=w,r=m,n=I,l=h,u=P,i=N,_=y,f=e.f;w=null,m=0,I=null,h=f&(R|ce)?null:e,P=!V&&(f&j)!==0,N=null,y=e.ctx;try{var a=(0,e.fn)(),s=e.deps;if(w!==null){var o;if(z(e,m),s!==null&&m>0)for(s.length=m+w.length,o=0;o<w.length;o++)s[m+o]=w[o];else e.deps=s=w;if(!P)for(o=m;o<s.length;o++)(s[o].reactions??=[]).push(e)}else s!==null&&m<s.length&&(z(e,m),s.length=m);return a}finally{w=t,m=r,I=n,h=l,P=u,N=i,y=_}}function zt(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[n]=r[l],r.pop())}}r===null&&t.f&x&&(w===null||!w.includes(t))&&(O(t,Z),t.f&(j|ue)||(t.f^=ue),z(t,0))}function z(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)zt(e,r[n])}function Oe(e){var t=e.f;if(!(t&H)){O(e,E);var r=v,n=y;v=e;try{t&Te?jt(e):Ke(e),We(e),Ue(e);var l=Qe(e);e.teardown=typeof l=="function"?l:null,e.version=Je;var u=e.deps,i;De&&Dt&&e.f&A}catch(_){ve(_,e,r,n||e.ctx)}finally{v=r}}}function Jt(){if(G>1e3){G=0;try{mt()}catch(e){if(oe!==null)ve(e,oe,null);else throw e}}G++}function Zt(e){var t=e.length;if(t!==0){Jt();var r=V;V=!0;try{for(var n=0;n<t;n++){var l=e[n];l.f&E||(l.f^=E);var u=[];Xe(l,u),Qt(u)}}finally{V=r}}}function Qt(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(H|ie)))try{_e(n)&&(Oe(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Ge(n):n.fn=null))}catch(l){ve(l,n,null,n.ctx)}}}function Xt(){if(se=!1,G>1001)return;const e=ge;ge=[],Zt(e),se||(G=0,oe=null)}function de(e){se||(se=!0,queueMicrotask(Xt)),oe=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(ce|R)){if(!(r&E))return;t.f^=E}}ge.push(t)}function Xe(e,t){var r=e.first,n=[];e:for(;r!==null;){var l=r.f,u=(l&R)!==0,i=u&&(l&E)!==0,_=r.next;if(!i&&!(l&ie))if(l&fe){if(u)r.f^=E;else try{_e(r)&&Oe(r)}catch(o){ve(o,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else l&Fe&&n.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(e===o)break e;var a=o.next;if(a!==null){r=a;continue e}o=o.parent}}r=_}for(var s=0;s<n.length;s++)f=n[s],t.push(f),Xe(f,t)}function ne(e){var t=e.f,r=(t&x)!==0;if(r&&t&H){var n=Ye(e);return ke(e),n}if(h!==null){N!==null&&N.includes(e)&&kt();var l=h.deps;w===null&&l!==null&&l[m]===e?m++:w===null?w=[e]:w.push(e),I!==null&&v!==null&&v.f&E&&!(v.f&R)&&I.includes(e)&&(O(v,A),de(v))}else if(r&&e.deps===null)for(var u=e,i=u.parent,_=u;i!==null;)if(i.f&x){var f=i;_=f,i=f.parent}else{var a=i;a.deriveds?.includes(_)||(a.deriveds??=[]).push(_);break}return r&&(u=e,_e(u)&&He(u)),e.v}function Er(e){const t=h;try{return h=null,e()}finally{h=t}}const er=~(A|Z|E);function O(e,t){e.f=e.f&er|t}function tr(e,t=!1,r){y={p:y,c:null,e:null,m:!1,s:e,x:null,l:null}}function rr(e){const t=y;if(t!==null){const i=t.e;if(i!==null){var r=v,n=h;t.e=null;try{for(var l=0;l<i.length;l++){var u=i[l];L(u.effect),F(u.reaction),$e(u.fn)}}finally{L(r),F(n)}}y=t.p,t.m=!0}return{}}function nr(e){var t=h,r=v;F(null),L(null);try{return e()}finally{F(t),L(r)}}const et=new Set,me=new Set;function lr(e,t,r,n){function l(u){if(n.capture||U.call(t,u),!u.cancelBubble)return nr(()=>r.call(this,u))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ht(()=>{t.addEventListener(e,l,n)}):t.addEventListener(e,l,n),l}function gr(e,t,r,n,l){var u={capture:n,passive:l},i=lr(e,t,r,u);(t===document.body||t===window||t===document)&&Lt(()=>{t.removeEventListener(e,i,u)})}function mr(e){for(var t=0;t<e.length;t++)et.add(e[t]);for(var r of me)r(e)}function U(e){var t=this,r=t.ownerDocument,n=e.type,l=e.composedPath?.()||[],u=l[0]||e.target,i=0,_=e.__root;if(_){var f=l.indexOf(_);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var a=l.indexOf(t);if(a===-1)return;f<=a&&(i=f)}if(u=l[i]||e.target,u!==t){ft(e,"currentTarget",{configurable:!0,get(){return u||r}});var s=h,o=v;F(null),L(null);try{for(var c,d=[];u!==null;){var b=u.assignedSlot||u.parentNode||u.host||null;try{var T=u["__"+n];if(T!==void 0&&!u.disabled)if(Ie(T)){var[ee,...te]=T;ee.apply(u,[e,...te])}else T.call(u,e)}catch(S){c?d.push(S):c=S}if(e.cancelBubble||b===t||b===null)break;u=b}if(c){for(let S of d)queueMicrotask(()=>{throw S});throw c}}finally{e.__root=t,delete e.currentTarget,F(s),L(o)}}}function tt(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function J(e,t){var r=v;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function br(e,t){var r=(t&2)!==0,n,l=!e.startsWith("<!>");return()=>{if(k)return J(p,null),p;n===void 0&&(n=tt(l?e:"<!>"+e),n=Y(n));var u=r?document.importNode(n,!0):n.cloneNode(!0);return J(u,u),u}}function Tr(e,t,r="svg"){var n=!e.startsWith("<!>"),l=`<${r}>${n?e:"<!>"+e}</${r}>`,u;return()=>{if(k)return J(p,null),p;if(!u){var i=tt(l),_=Y(i);u=Y(_)}var f=u.cloneNode(!0);return J(f,f),f}}function xr(e,t){if(k){v.nodes_end=p,qe();return}e!==null&&e.before(t)}function kr(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ur(e,t){return rt(e,t)}function Nr(e,t){we(),t.intro=t.intro??!1;const r=t.target,n=k,l=p;try{for(var u=Y(r);u&&(u.nodeType!==8||u.data!==nt);)u=Q(u);if(!u)throw W;re(!0),M(u),qe();const i=rt(e,{...t,anchor:u});if(p===null||p.nodeType!==8||p.data!==lt)throw xe(),W;return re(!1),i}catch(i){if(i===W)return t.recover===!1&&bt(),we(),St(r),re(!1),ur(e,t);throw i}finally{re(n),M(l)}}const B=new Map;function rt(e,{target:t,anchor:r,props:n={},events:l,context:u,intro:i=!0}){we();var _=new Set,f=o=>{for(var c=0;c<o.length;c++){var d=o[c];if(!_.has(d)){_.add(d);var b=st(d);t.addEventListener(d,U,{passive:b});var T=B.get(d);T===void 0?(document.addEventListener(d,U,{passive:b}),B.set(d,1)):B.set(d,T+1)}}};f(ot(et)),me.add(f);var a=void 0,s=Pt(()=>{var o=r??t.appendChild(ae());return qt(()=>{if(u){tr({});var c=y;c.c=u}l&&(n.$$events=l),k&&J(o,null),a=e(o,n)||{},k&&(v.nodes_end=p),u&&rr()}),()=>{for(var c of _){t.removeEventListener(c,U);var d=B.get(c);--d===0?(document.removeEventListener(c,U),B.delete(c)):B.set(c,d)}me.delete(f),o!==r&&o.parentNode?.removeChild(o)}});return be.set(a,s),a}let be=new WeakMap;function Or(e,t){const r=be.get(e);return r?(be.delete(e),r(t)):Promise.resolve()}export{$ as A,hr as B,vr as C,kr as D,_r as E,tt as F,J as G,Lt as H,Y as I,p as J,qe as K,fr as L,Or as M,Nr as N,ur as O,ar as a,or as b,lr as c,mr as d,y as e,Er as f,vt as g,k as h,ir as i,K as j,xr as k,Ot as l,Tr as m,sr as n,ne as o,cr as p,Ht as q,gr as r,rr as s,yr as t,wr as u,br as v,tr as w,pr as x,dr as y,C as z};