var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function d(){return f("")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function $(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}function y(){const t=g();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function b(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const _=[],w=[],v=[],x=[],E=Promise.resolve();let k=!1;function j(){k||(k=!0,E.then(T))}function O(t){v.push(t)}const C=new Set;let S=0;function T(){const t=m;do{for(;S<_.length;){const t=_[S];S++,$(t),A(t.$$)}for($(null),_.length=0,S=0;w.length;)w.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];C.has(n)||(C.add(n),n())}v.length=0}while(_.length);for(;x.length;)x.pop()();k=!1,C.clear(),$(t)}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const D=new Set;let L;function M(){L={r:0,c:[],p:L}}function R(){L.r||r(L.c),L=L.p}function I(t,n){t&&t.i&&(D.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),L.c.push((()=>{D.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function q(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function z(t){return"object"==typeof t&&null!==t?t:{}}function P(t){t&&t.c()}function H(t,n,o,c){const{fragment:i,on_mount:u,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,o),c||O((()=>{const n=u.map(e).filter(s);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(O)}function F(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(n,e,s,c,i,u,a,f=[-1]){const p=m;$(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};a&&a(d.root);let h=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(_.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();e.intro&&I(n.$$.fragment),H(n,e.target,e.anchor,e.customElement),T()}$(p)}class Y{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(n){let e;return{c(){e=f("ComponentDisplay")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class U extends Y{constructor(t){super(),B(this,t,null,G,c,{})}}function W(n){let e;return{c(){e=f("PROFILER BITTTTCH")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class X extends Y{constructor(t){super(),B(this,t,null,W,c,{})}}function J(n){let e;return{c(){e=f("TIME MACHINE")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class K extends Y{constructor(t){super(),B(this,t,null,J,c,{})}}const Q=[];function V(t,n){return{subscribe:Z(t,n).subscribe}}function Z(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!Q.length;for(const t of r)t[1](),Q.push(t,n);if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}function tt(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,u=e.length<2;return V(o,(n=>{let o=!1;const l=[];let a=0,f=t;const p=()=>{if(a)return;f();const o=e(c?l[0]:l,n);u?n(o):f=s(o)?o:t},d=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{l[e]=t,a&=~(1<<e),o&&p()}),(()=>{a|=1<<e}))));return o=!0,p(),function(){r(d),f()}}))}function nt(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&P(e.$$.fragment),o=d()},m(t,n){e&&H(e,t,n),u(t,o,n),r=!0},p(t,n){const r=4&n?q(s,[z(t[2])]):{};if(c!==(c=t[0])){if(e){M();const t=e;N(t.$$.fragment,1,0,(()=>{F(t,1)})),R()}c?(e=new c(i()),e.$on("routeEvent",t[7]),P(e.$$.fragment),I(e.$$.fragment,1),H(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&I(e.$$.fragment,t),r=!0)},o(t){e&&N(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&F(e,t)}}}function et(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&P(e.$$.fragment),o=d()},m(t,n){e&&H(e,t,n),u(t,o,n),r=!0},p(t,n){const r=6&n?q(s,[2&n&&{params:t[1]},4&n&&z(t[2])]):{};if(c!==(c=t[0])){if(e){M();const t=e;N(t.$$.fragment,1,0,(()=>{F(t,1)})),R()}c?(e=new c(i()),e.$on("routeEvent",t[6]),P(e.$$.fragment),I(e.$$.fragment,1),H(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&I(e.$$.fragment,t),r=!0)},o(t){e&&N(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&F(e,t)}}}function ot(t){let n,e,o,r;const s=[et,nt],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=d()},m(t,e){c[n].m(t,e),u(t,o,e),r=!0},p(t,[r]){let u=n;n=i(t),n===u?c[n].p(t,r):(M(),N(c[u],1,1,(()=>{c[u]=null})),R(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),I(e,1),e.m(o.parentNode,o))},i(t){r||(I(e),r=!0)},o(t){N(e),r=!1},d(t){c[n].d(t),t&&l(o)}}}function rt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const st=V(null,(function(t){t(rt());const n=()=>{t(rt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));tt(st,(t=>t.location)),tt(st,(t=>t.querystring));const ct=Z(void 0);function it(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let u=null,l=null,a={};const f=y();async function p(t,n){await(j(),E),f(t,n)}let d=null,h=null;var m;s&&(h=t=>{d=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)},g().$$.after_update.push(m));let $=null,_=null;const w=st.subscribe((async t=>{$=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await i[n].checkConditions(r))return e(0,u=null),_=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=i[n].component;if(_!=s){s.loading?(e(0,u=s.loading),_=s,e(1,l=s.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l}))):(e(0,u=null),_=null);const n=await s();if(t!=$)return;e(0,u=n&&n.default||n),_=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=i[n].props),void p("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l})).then((()=>{ct.set(l)}))}e(0,u=null),_=null,ct.set(void 0)}));return function(t){g().$$.on_destroy.push(t)}((()=>{w(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){b.call(this,t,n)},function(n){b.call(this,t,n)}]}class ut extends Y{constructor(t){super(),B(this,t,it,ot,c,{routes:3,prefix:4,restoreScrollState:5})}}function lt(n){let e,o,r,s;return r=new ut({props:{routes:{"/componentDisplay":U,"/profiler":X,"/timeMachineDisplay":K}}}),{c(){e=a("nav"),e.innerHTML='<a href="/#/componentDisplay">Components</a> \n  <a href="/#/profiler">Profiler</a> \n  <a href="/#/timeMachineDisplay">TimeMachine</a>',o=p(),P(r.$$.fragment),h(e,"class","svelte-1veujr")},m(t,n){u(t,e,n),u(t,o,n),H(r,t,n),s=!0},p:t,i(t){s||(I(r.$$.fragment,t),s=!0)},o(t){N(r.$$.fragment,t),s=!1},d(t){t&&l(e),t&&l(o),F(r,t)}}}function at(t){return[]}class ft extends Y{constructor(t){super(),B(this,t,at,lt,c,{})}}function pt(t){let n,e,o,r,s,c,d,m;return d=new ft({}),{c(){n=a("main"),e=a("h1"),o=f("Hello "),r=f(t[0]),s=f("!"),c=p(),P(d.$$.fragment),h(e,"class","svelte-180s0zc"),h(n,"class","svelte-180s0zc")},m(t,l){u(t,n,l),i(n,e),i(e,o),i(e,r),i(e,s),i(n,c),H(d,n,null),m=!0},p(t,[n]){(!m||1&n)&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(r,t[0])},i(t){m||(I(d.$$.fragment,t),m=!0)},o(t){N(d.$$.fragment,t),m=!1},d(t){t&&l(n),F(d)}}}function dt(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends Y{constructor(t){super(),B(this,t,dt,pt,c,{name:0})}}({target:document.body,props:{name:"Gools"}})}();
//# sourceMappingURL=bundle.js.map