// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,E=isNaN,_=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,u,f,l,s,p,g,d,y;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var R=P;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&U.call(e,r)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=Z()?function(e){var r,t,n;if(null==e)return M.call(e);t=e[Y],r=W(e,Y);try{e[Y]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return M.call(e)},H=Number,J=H.prototype.toString;var K=Z();function q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function D(e){return G(e)||q(e)}B(D,"isPrimitive",G),B(D,"isObject",q);var Q=Number.POSITIVE_INFINITY,ee=H.NEGATIVE_INFINITY,re=Math.floor;function te(e){return e<Q&&e>ee&&re(r=e)===r;var r}function ne(e){return G(e)&&te(e)}function ie(e){return q(e)&&te(e.valueOf())}function oe(e){return ne(e)||ie(e)}function ae(e){return ne(e)&&e>=0}function ce(e){return ie(e)&&e.valueOf()>=0}function ue(e){return ae(e)||ce(e)}function fe(e){return ne(e)&&e>0}function le(e){return ie(e)&&e.valueOf()>0}function se(e){return fe(e)||le(e)}function pe(e){return"boolean"==typeof e}B(oe,"isPrimitive",ne),B(oe,"isObject",ie),B(ue,"isPrimitive",ae),B(ue,"isObject",ce),B(se,"isPrimitive",fe),B(se,"isObject",le);var ge=Boolean,de=Boolean.prototype.toString;var ye=Z();function be(e){return"object"==typeof e&&(e instanceof ge||(ye?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function he(e){return pe(e)||be(e)}B(he,"isPrimitive",pe),B(he,"isObject",be);var ve=/./;var we="object"==typeof self?self:null,me="object"==typeof window?window:null,je="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ee="object"==typeof je?je:null,_e="object"==typeof globalThis?globalThis:null;var xe=function(e){if(arguments.length){if(!pe(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(_e)return _e;if(we)return we;if(me)return me;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=xe.document&&xe.document.childNodes,Te=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Ie=/^\s*function\s*([^(]*)/i;B(ke,"REGEXP",Ie);var Oe=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function Pe(e){return null!==e&&"object"==typeof e}function Ae(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ie.exec(n.toString()))return r[1]}return Pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(Pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Oe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Pe));var Ve="function"==typeof ve||"object"==typeof Te||"function"==typeof Se?function(e){return Ae(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ae(e).toLowerCase():r};function Fe(e){return"function"===Ve(e)}var Ne="function"==typeof X&&"symbol"==typeof X("foo")&&W(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;function Ce(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var $e=!1;function Re(e,r,t,n,i){var o,a,c,u,f,l,s,p,g,d,y,b,h;if(h=typeof(b=e),null===b||"object"!==h&&"function"!==h||!Fe(b.next))throw new TypeError(Ce("0Pv46",e));if(!Fe(r))throw new TypeError(Ce("0Pv2H",r));if(3===arguments.length)ae(t)?f=t:(f=0,l=t),c=$e;else if(4===arguments.length){if(!ae(t))throw new TypeError(Ce("0Pv2m",t));f=t,pe(n)?c=n:(c=$e,l=n)}else if(arguments.length>4){if(!ae(t))throw new TypeError(Ce("0Pv2m",t));if(f=t,!pe(n))throw new TypeError(Ce("0Pv4J",n));c=n,l=i}else f=0,c=$e;if(c){for(d=0;d<f;d++)if((g=e.next()).done){u=!0,s=g;break}d-=1}else d=-1;return y=-1,o=0,B(a={},"next",(function(){var t;if(u)return s?(t=s,s=null,t):{done:!0};d+=1;for(;d<f;){if((t=e.next()).done)return u=!0,{done:!0};d+=1}if(t=e.next(),t.done)return u=!0,t;if(y+=1,o=r.call(l,t.value,d,y,o),!fe(o))throw new TypeError(Ce("0Pv4K",o));return f+=o,t})),B(a,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Ne&&Fe(e[Ne])&&(p=f,B(a,Ne,(function(){return Re(e[Ne](),r,p,c,l)}))),a}export{Re as default};
//# sourceMappingURL=mod.js.map