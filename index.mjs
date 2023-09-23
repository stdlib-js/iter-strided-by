// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function l(m,f,v,p,h){var a,j,u,g,c,x,b,w,y,P,E;if(!i(m))throw new TypeError(d("0Pv46,G5",m));if(!n(f))throw new TypeError(d("0Pv2H,G6",f));if(3===arguments.length)r(v)?c=v:(c=0,x=v),u=false;else if(4===arguments.length){if(!r(v))throw new TypeError(d("0Pv2m,L9",v));c=v,s(p)?u=p:(u=false,x=p)}else if(arguments.length>4){if(!r(v))throw new TypeError(d("0Pv2m,L9",v));if(c=v,!s(p))throw new TypeError(d("0Pv4J,Lr",p));u=p,x=h}else c=0,u=false;if(u){for(P=0;P<c;P++)if((y=m.next()).done){g=!0,b=y;break}P-=1}else P=-1;return E=-1,a=0,e(j={},"next",T),e(j,"return",L),o&&n(m[o])&&(w=c,e(j,o,k)),j;function T(){var e;if(g)return b?(e=b,b=null,e):{done:!0};for(P+=1;P<c;){if((e=m.next()).done)return g=!0,{done:!0};P+=1}if((e=m.next()).done)return g=!0,e;if(E+=1,a=f.call(x,e.value,P,E,a),!t(a))throw new TypeError(d("0Pv4K,M3",a));return c+=a,e}function L(e){return g=!0,arguments.length?{value:e,done:!0}:{done:!0}}function k(){return l(m[o](),f,w,u,x)}}export{l as default};
//# sourceMappingURL=index.mjs.map