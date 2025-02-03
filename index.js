// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterStridedBy=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,E=Array.isArray;function _(e){return e!=e}function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,u,f,l,s,p,g,d,y;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,C=A.__defineSetter__,$=A.__lookupGetter__,N=A.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var B=P;function R(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&U.call(e,r)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=Z()?function(e){var r,t,n;if(null==e)return M.call(e);t=e[Y],r=W(e,Y);try{e[Y]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return M.call(e)},H=Number,J=H.prototype.toString;var K=Z();function q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function D(e){return G(e)||q(e)}R(D,"isPrimitive",G),R(D,"isObject",q);var Q=Number.POSITIVE_INFINITY,ee=H.NEGATIVE_INFINITY,re=Math.floor;function te(e){return e<Q&&e>ee&&re(r=e)===r;var r}function ne(e){return G(e)&&te(e)}function ie(e){return q(e)&&te(e.valueOf())}function oe(e){return ne(e)||ie(e)}function ae(e){return ne(e)&&e>=0}function ce(e){return ie(e)&&e.valueOf()>=0}function ue(e){return ae(e)||ce(e)}function fe(e){return ne(e)&&e>0}function le(e){return ie(e)&&e.valueOf()>0}function se(e){return fe(e)||le(e)}function pe(e){return"boolean"==typeof e}R(oe,"isPrimitive",ne),R(oe,"isObject",ie),R(ue,"isPrimitive",ae),R(ue,"isObject",ce),R(se,"isPrimitive",fe),R(se,"isObject",le);var ge=Boolean,de=Boolean.prototype.toString;var ye=Z();function be(e){return"object"==typeof e&&(e instanceof ge||(ye?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function he(e){return pe(e)||be(e)}R(he,"isPrimitive",pe),R(he,"isObject",be);var ve=/./;var we="object"==typeof self?self:null,me="object"==typeof window?window:null,je="object"==typeof global?global:null,Ee="object"==typeof globalThis?globalThis:null;var _e=function(e){if(arguments.length){if(!pe(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ee)return Ee;if(we)return we;if(me)return me;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=_e.document&&_e.document.childNodes,xe=Int8Array;function Te(){return/^\s*function\s*([^(]*)/i}var ke=/^\s*function\s*([^(]*)/i;R(Te,"REGEXP",ke);var Ie=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function Oe(e){return null!==e&&"object"==typeof e}function Pe(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ke.exec(n.toString()))return r[1]}return Oe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(Oe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ie(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Oe));var Ae="function"==typeof ve||"object"==typeof xe||"function"==typeof Se?function(e){return Pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Pe(e).toLowerCase():r};function Ve(e){return"function"===Ae(e)}var Fe="function"==typeof X&&"symbol"==typeof X("foo")&&W(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;function Ce(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var $e=!1;return function e(r,t,n,i,o){var a,c,u,f,l,s,p,g,d,y,b,h,v;if(v=typeof(h=r),null===h||"object"!==v&&"function"!==v||!Ve(h.next))throw new TypeError(Ce("0Pv46",r));if(!Ve(t))throw new TypeError(Ce("0Pv2H",t));if(3===arguments.length)ae(n)?l=n:(l=0,s=n),u=$e;else if(4===arguments.length){if(!ae(n))throw new TypeError(Ce("0Pv2m",n));l=n,pe(i)?u=i:(u=$e,s=i)}else if(arguments.length>4){if(!ae(n))throw new TypeError(Ce("0Pv2m",n));if(l=n,!pe(i))throw new TypeError(Ce("0Pv4J",i));u=i,s=o}else l=0,u=$e;if(u){for(y=0;y<l;y++)if((d=r.next()).done){f=!0,p=d;break}y-=1}else y=-1;return b=-1,a=0,R(c={},"next",(function(){var e;if(f)return p?(e=p,p=null,e):{done:!0};y+=1;for(;y<l;){if((e=r.next()).done)return f=!0,{done:!0};y+=1}if(e=r.next(),e.done)return f=!0,e;if(b+=1,a=t.call(s,e.value,y,b,a),!fe(a))throw new TypeError(Ce("0Pv4K",a));return l+=a,e})),R(c,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Fe&&Ve(r[Fe])&&(g=l,R(c,Fe,(function(){return e(r[Fe](),t,g,u,s)}))),c}}));
//# sourceMappingURL=index.js.map
