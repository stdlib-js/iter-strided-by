// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var l=e,m=t.isPrimitive,d=r.isPrimitive,u=n.isPrimitive,f=i,g=s,h=o,p=a;var v=function e(t,r,n,i,s){var o,a,v,j,c,b,x,w,y,T,E;if(!g(t))throw new TypeError(p("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",t));if(!f(r))throw new TypeError(p("invalid argument. Second argument must be a function. Value: `%s`.",r));if(3===arguments.length)m(n)?c=n:(c=0,b=n),v=false;else if(4===arguments.length){if(!m(n))throw new TypeError(p("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));c=n,u(i)?v=i:(v=false,b=i)}else if(arguments.length>4){if(!m(n))throw new TypeError(p("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(c=n,!u(i))throw new TypeError(p("invalid argument. Fourth argument must be a boolean. Value: `%s`.",i));v=i,b=s}else c=0,v=false;if(v){for(T=0;T<c;T++)if((y=t.next()).done){j=!0,x=y;break}T-=1}else T=-1;return E=-1,o=0,l(a={},"next",V),l(a,"return",k),h&&f(t[h])&&(w=c,l(a,h,P)),a;function V(){var e;if(j)return x?(e=x,x=null,e):{done:!0};for(T+=1;T<c;){if((e=t.next()).done)return j=!0,{done:!0};T+=1}if((e=t.next()).done)return j=!0,e;if(E+=1,o=r.call(b,e.value,T,E,o),!d(o))throw new TypeError(p("invalid return value. Callback function must return a positive integer. Value: `%s`.",o));return c+=o,e}function k(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function P(){return e(t[h](),r,w,v,b)}},j=v;export{j as default};
//# sourceMappingURL=index.mjs.map
