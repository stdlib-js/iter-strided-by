// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var m=!1;function l(f,v,p,h,j){var a,u,g,c,x,b,w,y,P,E,T;if(!i(f))throw new TypeError(d("0Pv46",f));if(!n(v))throw new TypeError(d("0Pv2H",v));if(3===arguments.length)r(p)?x=p:(x=0,b=p),g=m;else if(4===arguments.length){if(!r(p))throw new TypeError(d("0Pv2m",p));x=p,s(h)?g=h:(g=m,b=h)}else if(arguments.length>4){if(!r(p))throw new TypeError(d("0Pv2m",p));if(x=p,!s(h))throw new TypeError(d("0Pv4J",h));g=h,b=j}else x=0,g=m;if(g){for(E=0;E<x;E++)if((P=f.next()).done){c=!0,w=P;break}E-=1}else E=-1;return T=-1,a=0,e(u={},"next",(function(){var e;if(c)return w?(e=w,w=null,e):{done:!0};E+=1;for(;E<x;){if((e=f.next()).done)return c=!0,{done:!0};E+=1}if(e=f.next(),e.done)return c=!0,e;if(T+=1,a=v.call(b,e.value,E,T,a),!t(a))throw new TypeError(d("0Pv4K",a));return x+=a,e})),e(u,"return",(function(e){if(c=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),o&&n(f[o])&&(y=x,e(u,o,(function(){return l(f[o](),v,y,g,b)}))),u}export{l as default};
//# sourceMappingURL=index.mjs.map
