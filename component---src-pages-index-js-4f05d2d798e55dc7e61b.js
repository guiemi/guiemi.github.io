(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[678],{7606:function(t,e,r){"use strict";r.d(e,{G:function(){return h}});var n=r(4694),o=r(5697),i=r.n(o),a=r(7294);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function y(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=b(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var m=!1;try{m=!0}catch(O){}function d(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===l(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function h(t){var e=t.forwardedRef,r=f(t,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,l=r.className,c=r.title,b=r.titleId,y=d(o),O=g("classes",[].concat(p(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,i=t.inverse,a=t.border,l=t.listItem,c=t.flip,u=t.size,f=t.rotation,p=t.pull,b=(s(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(e,"fa-rotate-".concat(f),null!=f&&0!==f),s(e,"fa-pull-".concat(p),null!=p),s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map((function(t){return b[t]?t:null})).filter((function(t){return t}))}(r)),p(l.split(" ")))),w=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),Z=g("mask",d(i)),j=(0,n.icon)(y,u({},O,{},w,{},Z,{symbol:a,title:c,titleId:b}));if(!j)return function(){var t;!m&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var x=j.abstract,k={ref:e};return Object.keys(r).forEach((function(t){h.defaultProps.hasOwnProperty(t)||(k[t]=r[t])})),v(x[0],k)}h.displayName="FontAwesomeIcon",h.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=y(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[b(e)]=n}return t}),{attrs:{}}),a=n.style,l=void 0===a?{}:a,s=f(n,["style"]);return i.attrs.style=u({},i.attrs.style,{},l),e.apply(void 0,[r.tag,u({},i.attrs,{},s)].concat(p(o)))}.bind(null,a.createElement)},1250:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return A}});r(7294);var n,o,i,a,l,s,c,u=r(5444),f=r(5761),p=r(3561),b=r.n(p),y=b().div(n||(n=(0,f.Z)(["\n  text-align: center;\n"]))),m=b().div(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),d=b().p(i||(i=(0,f.Z)(["\n  padding: 0;\n  margin-bottom: 1rem;\n  font-size: 1.4rem;\n"]))),g=b().h1(a||(a=(0,f.Z)(["\n  font-size: 3.5rem;\n  margin-bottom: 1.5rem;\n"]))),h=(b().p(l||(l=(0,f.Z)(["\n  font-style: italic;\n"]))),r(8084)),v=function(){return(0,h.tZ)(u.StaticQuery,{query:"3139552914",render:function(t){return(0,h.tZ)(m,null,(0,h.tZ)(y,null,(0,h.tZ)(g,null,t.site.siteMetadata.title),(0,h.tZ)(d,null,t.site.siteMetadata.subtitle)))}})},O=r(2684),w=r(6179),Z=r(7606),j=r(7190),x=b().div(s||(s=(0,f.Z)(["\n  text-align: center;\n  padding: 1rem 0;\n\n  svg {\n    margin: 0 1.5rem;\n    padding: 0;\n    font-size: 1.5rem;\n\n    :hover {\n      color: #6c757d;\n      transition-duration: 0.2s;\n    }\n  }\n"]))),k=b().div(c||(c=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),P=function(){return(0,h.tZ)(k,null,(0,h.tZ)(x,null,(0,h.tZ)("a",{href:"https://github.com/vibraniumdev/",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)(Z.G,{icon:j.zhw})),(0,h.tZ)("a",{href:"https://twitter.com/vibraniumdev",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)(Z.G,{icon:j.mdU})),(0,h.tZ)("a",{href:"https://medium.com/@guiemi",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)(Z.G,{icon:j.$tD})),(0,h.tZ)("a",{href:"https://www.instagram.com/violaodeinverno/",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)(Z.G,{icon:j.Zzi})),(0,h.tZ)("a",{href:"https://www.linkedin.com/in/guiemi/",target:"_blank",rel:"noopener noreferrer"},(0,h.tZ)(Z.G,{icon:j.D9H}))))},A=function(){return(0,h.tZ)(O.Z,null,(0,h.tZ)(w.Z,{title:"Home",keywords:["gatsby","application","react"]}),(0,h.tZ)(v,null),(0,h.tZ)(P,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4f05d2d798e55dc7e61b.js.map