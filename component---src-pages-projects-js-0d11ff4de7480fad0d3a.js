(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"16l3":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r("Bl7J"),i=r("wTIg");var a=Object(i.a)("div",{target:"e1xaj3mt0"})({name:"16qqxhk",styles:"padding:2rem 0;max-width:1280px;margin:0.5rem auto;width:90%;display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;@media (max-width:700px){width:90%;grid-template-columns:3fr;}@media (min-width:701px) and (max-width:1000px){width:90%;grid-template-columns:2fr 2fr;}"}),c=Object(i.a)("a",{target:"e1xaj3mt1"})({name:"1dqi320",styles:"text-decoration:none;padding:0.5rem;margin:0.5rem;background:#fff;overflow:hidden;box-shadow:0 1px 6px 0 rgba(0,0,0,0.11);h4{color:#212121;}p{color:#707070;}:hover{box-shadow:0 1px 6px 0 rgba(0,0,0,0.31);transition-duration:0.2s;}"}),s=Object(i.a)("div",{target:"e1xaj3mt2"})({name:"19sy9rz",styles:"padding:0.5rem 0.5rem 0 0.5rem;height:75%;h4,p{margin-bottom:0.5rem;height:max-content;}"}),u=Object(i.a)("div",{target:"e1xaj3mt3"})({name:"1oysiwk",styles:"display:flex;align-items:center;padding:0.5rem;height:25%;div{display:flex;flex-direction:row;&:first-child{margin-right:0.5rem;}h4{margin:0;}.icon{margin:0;height:auto;}span{color:#000;margin-left:0.5rem;margin:0.9rem;}}"}),l=r("IP2g"),f=r("wHSu"),p=r("qKvR"),h=function(t){var e=t.reposList,r=t.isLoading;return Object(p.b)(a,null,r&&Object(p.b)("p",null,"Loading..."),e&&!r&&e.map((function(t){var e=t.name,r=t.description,n=t.language,o=t.html_url;return Object(p.b)(c,{"aria-current":!0,href:o},Object(p.b)(s,null,Object(p.b)("h4",null,e),Object(p.b)("p",null,r)),Object(p.b)(u,null,Object(p.b)("div",null,Object(p.b)(l.a,{className:"icon",icon:f.a,size:"1x"}),Object(p.b)("span",null,n))))})))},d=r("vrFN"),y=r("o0o1"),m=r.n(y);r("ls82");function b(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,c,"next",t)}function c(t){b(i,n,o,a,c,"throw",t)}a(void 0)}))}}var v=function(){var t=Object(n.useState)(),e=t[0],r=t[1],o=Object(n.useState)(),i=o[0],a=o[1],c=Object(n.useState)(!1),s=c[0],u=c[1];function l(){return(l=g(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,fetch("https://api.github.com/users/vibraniumdev/repos?sort=updated&direction=desc").then((function(t){return t.json()})).then((function(t){r(t)}));case 3:return t.next=5,fetch("https://api.github.com/orgs/guilherme-learning-center/repos?sort=updated&direction=desc").then((function(t){return t.json()})).then((function(t){a(t)}));case 5:u(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{fetchProjects:function(){return l.apply(this,arguments)},learningCenterReposList:i,reposList:e,isLoading:s}};e.default=function(){var t=v(),e=t.fetchProjects,r=t.reposList,i=t.isLoading,a=t.learningCenterReposList;Object(n.useEffect)((function(){e()}),[e]),console.clear();var c=Object.assign({},r,a);return console.dir(c),Object(p.b)(o.a,null,Object(p.b)(d.a,{title:"Projects",keywords:["gatsby","application","react"]}),Object(p.b)(h,{isLoading:i,reposList:a}))}},IP2g:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));r("E9XD");var n=r("7O5W"),o=r("17x9"),i=r.n(o),a=r("q1tI"),c=r.n(a);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function h(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function y(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=d(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var m=!1;try{m=!0}catch(O){}function b(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?u({},t,e):{}}function v(t){var e=t.forwardedRef,r=p(t,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,c=r.className,s=r.title,l=r.titleId,d=b(o),y=g("classes",[].concat(h(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,i=t.inverse,a=t.border,c=t.listItem,s=t.flip,l=t.size,f=t.rotation,p=t.pull,h=(u(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),null!=l),u(e,"fa-rotate-".concat(f),null!=f&&0!==f),u(e,"fa-pull-".concat(p),null!=p),u(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(h).map((function(t){return h[t]?t:null})).filter((function(t){return t}))}(r)),h(c.split(" ")))),O=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),x=g("mask",b(i)),j=Object(n.icon)(d,f({},y,{},O,{},x,{symbol:a,title:s,titleId:l}));if(!j)return function(){var t;!m&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",d),null;var L=j.abstract,E={ref:e};return Object.keys(r).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(E[t]=r[t])})),w(L[0],E)}v.displayName="FontAwesomeIcon",v.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([0,90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=y(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[d(e)]=n}return t}),{attrs:{}}),a=n.style,c=void 0===a?{}:a,s=p(n,["style"]);return i.attrs.style=f({},i.attrs.style,{},c),e.apply(void 0,[r.tag,f({},i.attrs,{},s)].concat(h(o)))}.bind(null,c.a.createElement)},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var l={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(L([])));m&&m!==e&&r.call(m,o)&&(d=m);var b=h.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function v(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=b.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(v.prototype),v.prototype[i]=function(){return this},t.AsyncIterator=v,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new v(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,a,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-projects-js-0d11ff4de7480fad0d3a.js.map