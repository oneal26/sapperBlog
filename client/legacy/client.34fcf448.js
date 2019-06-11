import{s as e,n as t,_ as n,a as r,b as s,c as a,i as o,d as i,S as c,e as u,t as l,f,g as p,h,j as m,k as v,l as d,m as g,o as $,p as b,q as x,r as y,u as w,v as E,w as S,x as k,y as _,z as N,A as R,B as P,C as A}from"./chunk.c4303b9f.js";import{_ as L,a as C}from"./chunk.4637f1ec.js";function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){s=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function U(n){var r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=[];function o(t){if(e(n,t)){if(n=t,!r)return;a.forEach(function(e){return e[1]()}),a.forEach(function(e){return e[0](n)})}}return{set:o,update:function(e){o(e(n))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t];return a.push(i),1===a.length&&(r=s(o)||t),e(n),function(){var e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&r()}}}}var q={},O=function(){return{}};function I(e){var n,r,s,a,o,i,c,$,b,x,y,w,E,S,k,_;return{c:function(){n=u("nav"),r=u("ul"),s=u("li"),a=u("a"),o=l("home"),c=f(),$=u("li"),b=u("a"),x=l("about"),w=f(),E=u("li"),S=u("a"),k=l("blog"),this.h()},l:function(e){n=p(e,"NAV",{class:!0},!1);var t=h(n);r=p(t,"UL",{class:!0},!1);var i=h(r);s=p(i,"LI",{class:!0},!1);var u=h(s);a=p(u,"A",{class:!0,href:!0},!1);var l=h(a);o=m(l,"home"),l.forEach(v),u.forEach(v),c=m(i,"\n\t\t"),$=p(i,"LI",{class:!0},!1);var f=h($);b=p(f,"A",{class:!0,href:!0},!1);var d=h(b);x=m(d,"about"),d.forEach(v),f.forEach(v),w=m(i,"\n\n\t\t\n\t\t"),E=p(i,"LI",{class:!0},!1);var g=h(E);S=p(g,"A",{rel:!0,class:!0,href:!0},!1);var y=h(S);k=m(y,"blog"),y.forEach(v),g.forEach(v),i.forEach(v),t.forEach(v),this.h()},h:function(){a.className=i=(void 0===e.segment?"selected":"")+" svelte-11kwxiv",a.href="catsap",s.className="svelte-11kwxiv",b.className=y=("about"===e.segment?"selected":"")+" svelte-11kwxiv",b.href="catsap/about",$.className="svelte-11kwxiv",S.rel="prefetch",S.className=_=("blog"===e.segment?"selected":"")+" svelte-11kwxiv",S.href="catsap/blog",E.className="svelte-11kwxiv",r.className="svelte-11kwxiv",n.className="svelte-11kwxiv"},m:function(e,t){d(e,n,t),g(n,r),g(r,s),g(s,a),g(a,o),g(r,c),g(r,$),g($,b),g(b,x),g(r,w),g(r,E),g(E,S),g(S,k)},p:function(e,t){e.segment&&i!==(i=(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&(a.className=i),e.segment&&y!==(y=("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&(b.className=y),e.segment&&_!==(_=("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&(S.className=_)},i:t,o:t,d:function(e){e&&v(n)}}}function D(e,t,n){var r=t.segment;return e.$set=function(e){"segment"in e&&n("segment",r=e.segment)},{segment:r}}var H=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,D,I,e,["segment"]),n}return n(u,c),u}();function B(e){var t,n,r,s=new H({props:{segment:e.segment}}),a=e.$$slots.default,o=$(a,e,null);return{c:function(){s.$$.fragment.c(),t=f(),n=u("main"),o&&o.c(),this.h()},l:function(e){s.$$.fragment.l(e),t=m(e,"\n\n"),n=p(e,"MAIN",{class:!0},!1);var r=h(n);o&&o.l(r),r.forEach(v),this.h()},h:function(){n.className="svelte-1uhnsl8"},m:function(e,a){b(s,e,a),d(e,t,a),d(e,n,a),o&&o.m(n,null),r=!0},p:function(e,t){var n={};e.segment&&(n.segment=t.segment),s.$set(n),o&&o.p&&e.$$scope&&o.p(x(a,t,e,null),y(a,t,null))},i:function(e){r||(s.$$.fragment.i(e),o&&o.i&&o.i(e),r=!0)},o:function(e){s.$$.fragment.o(e),o&&o.o&&o.o(e),r=!1},d:function(e){s.$destroy(e),e&&(v(t),v(n)),o&&o.d(e)}}}function J(e,t,n){var r=t.segment,s=t.$$slots,a=void 0===s?{}:s,o=t.$$scope;return e.$set=function(e){"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:a,$$scope:o}}var T=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,J,B,e,["segment"]),n}return n(u,c),u}();function V(e){var t,n,r=e.error.stack;return{c:function(){t=u("pre"),n=l(r)},l:function(e){t=p(e,"PRE",{},!1);var s=h(t);n=m(s,r),s.forEach(v)},m:function(e,r){d(e,t,r),g(t,n)},p:function(e,t){e.error&&r!==(r=t.error.stack)&&w(n,r)},d:function(e){e&&v(t)}}}function K(e){var n,r,s,a,o,i,c,$,b,x=e.error.message;document.title=n=e.status;var y=e.dev&&e.error.stack&&V(e);return{c:function(){r=f(),s=u("h1"),a=l(e.status),o=f(),i=u("p"),c=l(x),$=f(),y&&y.c(),b=E(),this.h()},l:function(t){r=m(t,"\n\n"),s=p(t,"H1",{class:!0},!1);var n=h(s);a=m(n,e.status),n.forEach(v),o=m(t,"\n\n"),i=p(t,"P",{class:!0},!1);var u=h(i);c=m(u,x),u.forEach(v),$=m(t,"\n\n"),y&&y.l(t),b=E(),this.h()},h:function(){s.className="svelte-8od9u6",i.className="svelte-8od9u6"},m:function(e,t){d(e,r,t),d(e,s,t),g(s,a),d(e,o,t),d(e,i,t),g(i,c),d(e,$,t),y&&y.m(e,t),d(e,b,t)},p:function(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&w(a,t.status),e.error&&x!==(x=t.error.message)&&w(c,x),t.dev&&t.error.stack?y?y.p(e,t):((y=V(t)).c(),y.m(b.parentNode,b)):y&&(y.d(1),y=null)},i:t,o:t,d:function(e){e&&(v(r),v(s),v(o),v(i),v($)),y&&y.d(e),e&&v(b)}}}function z(e,t,n){var r=t.status,s=t.error;return e.$set=function(e){"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:!1}}var G=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,z,K,e,["status","error"]),n}return n(u,c),u}();function M(e){var t,n,r=[e.level1.props],s=e.level1.component;function a(e){for(var t={},n=0;n<r.length;n+=1)t=S(t,r[n]);return{props:t}}if(s)var o=new s(a());return{c:function(){o&&o.$$.fragment.c(),t=E()},l:function(e){o&&o.$$.fragment.l(e),t=E()},m:function(e,r){o&&b(o,e,r),d(e,t,r),n=!0},p:function(e,n){var i=e.level1?k(r,[n.level1.props]):{};if(s!==(s=n.level1.component)){if(o){P();var c=o;N(function(){c.$destroy()}),c.$$.fragment.o(1),R()}s?((o=new s(a())).$$.fragment.c(),o.$$.fragment.i(1),b(o,t.parentNode,t)):o=null}else s&&o.$set(i)},i:function(e){n||(o&&o.$$.fragment.i(e),n=!0)},o:function(e){o&&o.$$.fragment.o(e),n=!1},d:function(e){e&&v(t),o&&o.$destroy(e)}}}function W(e){var t,n=new G({props:{error:e.error,status:e.status}});return{c:function(){n.$$.fragment.c()},l:function(e){n.$$.fragment.l(e)},m:function(e,r){b(n,e,r),t=!0},p:function(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i:function(e){t||(n.$$.fragment.i(e),t=!0)},o:function(e){n.$$.fragment.o(e),t=!1},d:function(e){n.$destroy(e)}}}function X(e){var t,n,r,s,a=[W,M],o=[];function i(e){return e.error?0:1}return t=i(e),n=o[t]=a[t](e),{c:function(){n.c(),r=E()},l:function(e){n.l(e),r=E()},m:function(e,n){o[t].m(e,n),d(e,r,n),s=!0},p:function(e,s){var c=t;(t=i(s))===c?o[t].p(e,s):(P(),N(function(){o[c].d(1),o[c]=null}),n.o(1),R(),(n=o[t])||(n=o[t]=a[t](s)).c(),n.i(1),n.m(r.parentNode,r))},i:function(e){s||(n&&n.i(),s=!0)},o:function(e){n&&n.o(),s=!1},d:function(e){o[t].d(e),e&&v(r)}}}function Y(e){for(var t,n=[{segment:e.segments[0]},e.level0.props],r={$$slots:{default:[X]},$$scope:{ctx:e}},s=0;s<n.length;s+=1)r=S(r,n[s]);var a=new T({props:r});return{c:function(){a.$$.fragment.c()},l:function(e){a.$$.fragment.l(e)},m:function(e,n){b(a,e,n),t=!0},p:function(e,t){var r=e.segments||e.level0?k(n,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i:function(e){t||(a.$$.fragment.i(e),t=!0)},o:function(e){a.$$.fragment.o(e),t=!1},d:function(e){a.$destroy(e)}}}function F(e,t,n){var r=t.stores,s=t.error,a=t.status,o=t.segments,i=t.level0,c=t.level1,u=void 0===c?null:c;return _(q,r),e.$set=function(e){"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",a=e.status),"segments"in e&&n("segments",o=e.segments),"level0"in e&&n("level0",i=e.level0),"level1"in e&&n("level1",u=e.level1)},{stores:r,error:s,status:a,segments:o,level0:i,level1:u}}var Q,Z=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,F,Y,e,["stores","error","status","segments","level0","level1"]),n}return n(u,c),u}(),ee=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],te=[{js:function(){return import("./index.d207ba2f.js")},css:["index.d207ba2f.css"]},{js:function(){return import("./about.a59591f8.js")},css:[]},{js:function(){return import("./index.b5c2a4cd.js")},css:["index.b5c2a4cd.css"]},{js:function(){return import("./[slug].556b44fc.js")},css:["[slug].556b44fc.css"]}],ne=(Q=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(e){return{slug:Q(e[1])}}}]}]);function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=we(new URL(e,document.baseURI));return n?(be[t.replaceState?"replaceState":"pushState"]({id:de},"",e),Se(n,null).then(function(){})):(location.href=e,new Promise(function(e){}))}var se,ae,oe,ie,ce,ue="undefined"!=typeof __SAPPER__&&__SAPPER__,le=!1,fe=[],pe="{}",he={page:U({}),preloading:U(null),session:U(ue&&ue.session)};he.session.subscribe(function(){var e=L(C.mark(function e(t){var n,r,s,a,o,i;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ie=t,le){e.next=3;break}return e.abrupt("return");case 3:return ce=!0,n=we(new URL(location.href)),r=ae={},e.next=8,Pe(n);case 8:if(s=e.sent,a=s.redirect,o=s.props,i=s.branch,r===ae){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,_e(a,i,o,n.page);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var me,ve=null;var de,ge=1;var $e,be="undefined"!=typeof history?history:{pushState:function(e,t,n){},replaceState:function(e,t,n){},scrollRestoration:""},xe={};function ye(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=j(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),r=n[1],s=n[2],a=void 0===s?"":s;"string"==typeof t[r]&&(t[r]=[t[r]]),"object"===A(t[r])?t[r].push(a):t[r]=a}),t}function we(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ue.baseUrl))return null;var t=e.pathname.slice(ue.baseUrl.length);if(""===t&&(t="/"),!ee.some(function(e){return e.test(t)}))for(var n=0;n<ne.length;n+=1){var r=ne[n],s=r.pattern.exec(t);if(s){var a=ye(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},c={path:t,query:a,params:i};return{href:e.href,route:r,match:s,page:c}}}}function Ee(){return{x:pageXOffset,y:pageYOffset}}function Se(e,t,n,r){return ke.apply(this,arguments)}function ke(){return(ke=L(C.mark(function e(t,n,r,s){var a,o,i,c,u,l,f,p,h;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n?de=n:(a=Ee(),xe[de]=a,n=de=++ge,xe[de]=r?a:{x:0,y:0}),de=n,se&&he.preloading.set(!0),o=ve&&ve.href===t.href?ve.promise:Pe(t),ve=null,i=ae={},e.next=8,o;case 8:if(c=e.sent,u=c.redirect,l=c.props,f=c.branch,i===ae){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,_e(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=xe[n],s&&(h=document.getElementById(s.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),xe[de]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _e(e,t,n,r){return Ne.apply(this,arguments)}function Ne(){return(Ne=L(C.mark(function e(t,n,r,s){var a,o;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",re(t.location,{replaceState:!0}));case 2:if(he.page.set(s),he.preloading.set(!1),!se){e.next=8;break}se.$set(r),e.next=17;break;case 8:return r.stores={page:{subscribe:he.page.subscribe},preloading:{subscribe:he.preloading.subscribe},session:he.session},e.next=11,oe;case 11:if(e.t0=e.sent,r.level0={props:e.t0},a=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),a&&o){for(;a.nextSibling!==o;)je(a.nextSibling);je(a),je(o)}se=new Z({target:me,props:r,hydrate:!0});case 17:fe=n,pe=JSON.stringify(s.query),le=!0,ce=!1;case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Re(e,t,n,r){if(r!==pe)return!0;var s=fe[e];return!!s&&(t!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}function Pe(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=L(C.mark(function e(t){var n,r,s,a,o,i,c,u,l,f,p;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,s=r.path.split("/").filter(Boolean),a=null,o={error:null,status:200,segments:[s[0]]},i={fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(a&&(a.statusCode!==e||a.location!==t))throw new Error("Conflicting redirects");a={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},oe||(oe=ue.preloaded[0]||O.call(i,{path:r.path,query:r.query,params:{}},ie)),u=1,e.prev=7,l=JSON.stringify(r.query),f=n.pattern.exec(r.path),p=!1,e.next=13,Promise.all(n.parts.map(function(){var e=L(C.mark(function e(n,a){var c,h,m,v,d,g;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=s[a],Re(a,c,f,l)&&(p=!0),o.segments[u]=s[a+1],n){e.next=5;break}return e.abrupt("return",{segment:c});case 5:if(h=u++,ce||p||!fe[a]||fe[a].part!==n.i){e.next=8;break}return e.abrupt("return",fe[a]);case 8:return p=!1,e.next=11,Ce(te[n.i]);case 11:if(m=e.sent,v=m.default,d=m.preload,!le&&ue.preloaded[a+1]){e.next=25;break}if(!d){e.next=21;break}return e.next=18,d.call(i,{path:r.path,query:r.query,params:n.params?n.params(t.match):{}},ie);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:g=e.t0,e.next=26;break;case 25:g=ue.preloaded[a+1];case 26:return e.abrupt("return",o["level".concat(h)]={component:v,props:g,segment:c,match:f,part:n.i});case 27:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()));case 13:c=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,c=[];case 21:return e.abrupt("return",{redirect:a,props:o,branch:c});case 22:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}function Le(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){return e()},r.onerror=n,document.head.appendChild(r)})}function Ce(e){var t="string"==typeof e.css?[]:e.css.map(Le);return t.unshift(e.js()),Promise.all(t).then(function(e){return e[0]})}function je(e){e.parentNode.removeChild(e)}function Ue(e){var t=we(new URL(e,document.baseURI));if(t)return ve&&e===ve.href||function(e,t){ve={href:e,promise:t}}(e,Pe(t)),ve.promise}function qe(e){clearTimeout($e),$e=setTimeout(function(){Oe(e)},20)}function Oe(e){var t=De(e.target);t&&"prefetch"===t.rel&&Ue(t.href)}function Ie(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=De(e.target);if(t&&t.href){var n="object"===A(t.href)&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(n?!t.target.baseVal:!t.target)){var s=new URL(r);if(s.pathname!==location.pathname||s.search!==location.search){var a=we(s);if(a)Se(a,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),be.pushState({id:de},"",s.href)}}}else location.hash||e.preventDefault()}}}function De(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function He(e){if(xe[de]=Ee(),e.state){var t=we(new URL(location.href));t?Se(t,e.state.id):location.href=location.href}else(function(e){de=e})(ge=ge+1),be.replaceState({id:de},"",location.href)}!function(e){var t;"scrollRestoration"in be&&(be.scrollRestoration="manual"),t=e.target,me=t,addEventListener("click",Ie),addEventListener("popstate",He),addEventListener("touchstart",Oe),addEventListener("mousemove",qe),Promise.resolve().then(function(){var e=location,t=e.hash,n=e.href;be.replaceState({id:ge},"",n);var r,s,a,o,i,c,u,l=new URL(location.href);if(ue.error)return r=location,s=r.pathname,a=r.search,o=ue.session,i=ue.preloaded,c=ue.status,u=ue.error,oe||(oe=i&&i[0]),void _e(null,[],{error:u,status:c,session:o,level0:{props:oe},level1:{props:{status:c,error:u},component:G},segments:i},{path:s,query:ye(a),params:{}});var f=we(l);return f?Se(f,ge,!0,t):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.34fcf448.js.map
