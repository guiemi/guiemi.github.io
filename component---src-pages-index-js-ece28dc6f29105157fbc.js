(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[678],{7606:function(t,e,r){"use strict";r.d(e,{G:function(){return v}});var n=r(4694),o=r(5697),i=r.n(o),a=r(7294);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function b(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=y(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var m=!1;try{m=!0}catch(O){}function d(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===l(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function v(t){var e=t.forwardedRef,r=f(t,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,l=r.className,c=r.title,y=r.titleId,b=d(o),O=g("classes",[].concat(p(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,i=t.inverse,a=t.border,l=t.listItem,c=t.flip,u=t.size,f=t.rotation,p=t.pull,y=(s(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(e,"fa-rotate-".concat(f),null!=f&&0!==f),s(e,"fa-pull-".concat(p),null!=p),s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map((function(t){return y[t]?t:null})).filter((function(t){return t}))}(r)),p(l.split(" ")))),w=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),j=g("mask",d(i)),x=(0,n.icon)(b,u({},O,{},w,{},j,{symbol:a,title:c,titleId:y}));if(!x)return function(){var t;!m&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",b),null;var Z=x.abstract,k={ref:e};return Object.keys(r).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(k[t]=r[t])})),h(Z[0],k)}v.displayName="FontAwesomeIcon",v.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=b(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[y(e)]=n}return t}),{attrs:{}}),a=n.style,l=void 0===a?{}:a,s=f(n,["style"]);return i.attrs.style=u({},i.attrs.style,{},l),e.apply(void 0,[r.tag,u({},i.attrs,{},s)].concat(p(o)))}.bind(null,a.createElement)},1250:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});r(7294);var n=r(5444),o=r(6771);var i=(0,o.Z)("div",{target:"e1ky1pz84"})({name:"1azakc",styles:"text-align:center"}),a=(0,o.Z)("div",{target:"e1ky1pz83"})({name:"n8ur87",styles:"display:flex;align-items:center;justify-content:center;flex-direction:row"}),l=(0,o.Z)("p",{target:"e1ky1pz82"})({name:"132d2uz",styles:"padding:0;margin-bottom:1rem;font-size:1.4rem"}),s=(0,o.Z)("h1",{target:"e1ky1pz81"})({name:"1mwyjpy",styles:"font-size:3.5rem;margin-bottom:1.5rem"}),c=((0,o.Z)("p",{target:"e1ky1pz80"})({name:"1jwcxx3",styles:"font-style:italic"}),r(3431)),u=function(){return(0,c.tZ)(n.StaticQuery,{query:"3139552914",render:function(t){return(0,c.tZ)(a,null,(0,c.tZ)(i,null,(0,c.tZ)(s,null,t.site.siteMetadata.title),(0,c.tZ)(l,null,t.site.siteMetadata.subtitle)))}})},f=r(2684),p=r(6179),y=r(7606),b=r(7190);var m=(0,o.Z)("div",{target:"e2puxoz1"})({name:"smqnnt",styles:"text-align:center;padding:1rem 0;svg{margin:0 1.5rem;padding:0;font-size:1.5rem;:hover{color:#6c757d;transition-duration:0.2s;}}"}),d=(0,o.Z)("div",{target:"e2puxoz0"})({name:"1wnowod",styles:"display:flex;align-items:center;justify-content:center"}),g=function(){return(0,c.tZ)(d,null,(0,c.tZ)(m,null,(0,c.tZ)("a",{href:"https://github.com/vibraniumdev/",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.zhw})),(0,c.tZ)("a",{href:"https://twitter.com/vibraniumdev",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.mdU})),(0,c.tZ)("a",{href:"https://medium.com/@guiemi",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.$tD})),(0,c.tZ)("a",{href:"https://www.instagram.com/violaodeinverno/",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.Zzi})),(0,c.tZ)("a",{href:"https://www.linkedin.com/in/guiemi/",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.D9H}))))},v=function(){return(0,c.tZ)(f.Z,null,(0,c.tZ)(p.Z,{title:"Home",keywords:["gatsby","application","react"]}),(0,c.tZ)(u,null),(0,c.tZ)(g,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ece28dc6f29105157fbc.js.map