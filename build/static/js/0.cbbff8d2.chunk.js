/*! For license information please see 0.cbbff8d2.chunk.js.LICENSE.txt */
(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[0],{1098:function(e,a,t){"use strict";var c=t(9),r=t(48),i=t(550),s=t.n(i),n=t(10),o=t.n(n),l=t(1),d=t(2),b=["as","className","type","tooltip"],f={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},u=l.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,n=e.className,o=e.type,l=void 0===o?"valid":o,f=e.tooltip,u=void 0!==f&&f,j=Object(r.a)(e,b);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:s()(n,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f;var j=u,v=t(571),m=t(617),O=t(551),p=["bsPrefix","className","htmlFor"],x=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.htmlFor,o=Object(r.a)(e,p),b=Object(l.useContext)(m.a).controlId;return t=Object(O.c)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:n||b,className:s()(i,t)}))}));x.displayName="FormCheckLabel";var h=x,y=t(795),N=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=l.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,f=e.reverse,u=void 0!==f&&f,p=e.disabled,x=void 0!==p&&p,P=e.isValid,w=void 0!==P&&P,g=e.isInvalid,C=void 0!==g&&g,I=e.feedbackTooltip,k=void 0!==I&&I,F=e.feedback,R=e.feedbackType,S=e.className,V=e.style,z=e.title,T=void 0===z?"":z,L=e.type,E=void 0===L?"checkbox":L,A=e.label,H=e.children,B=e.as,G=void 0===B?"input":B,J=Object(r.a)(e,N);i=Object(O.c)(i,"form-check"),n=Object(O.c)(n,"form-switch");var M=Object(l.useContext)(m.a).controlId,U=Object(l.useMemo)((function(){return{controlId:t||M}}),[M,t]),_=!H&&null!=A&&!1!==A||Object(y.b)(H,h),q=Object(d.jsx)(v.a,Object(c.a)(Object(c.a)({},J),{},{type:"switch"===E?"checkbox":E,ref:a,isValid:w,isInvalid:C,disabled:x,as:G}));return Object(d.jsx)(m.a.Provider,{value:U,children:Object(d.jsx)("div",{style:V,className:s()(S,_&&i,b&&"".concat(i,"-inline"),u&&"".concat(i,"-reverse"),"switch"===E&&n),children:H||Object(d.jsxs)(d.Fragment,{children:[q,_&&Object(d.jsx)(h,{title:T,children:A}),F&&Object(d.jsx)(j,{type:R,tooltip:k,children:F})]})})})}));P.displayName="FormCheck";var w=Object.assign(P,{Input:v.a,Label:h}),g=t(7),C=(t(691),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=l.forwardRef((function(e,a){var t,i,n=e.bsPrefix,o=e.type,b=e.size,f=e.htmlSize,u=e.id,j=e.className,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,h=void 0!==x&&x,y=e.plaintext,N=e.readOnly,P=e.as,w=void 0===P?"input":P,I=Object(r.a)(e,C),k=Object(l.useContext)(m.a).controlId;(n=Object(O.c)(n,"form-control"),y)?t=Object(g.a)({},"".concat(n,"-plaintext"),!0):(i={},Object(g.a)(i,n,!0),Object(g.a)(i,"".concat(n,"-").concat(b),b),t=i);return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},I),{},{type:o,size:f,ref:a,readOnly:N,id:u||k,className:s()(j,t,p&&"is-valid",h&&"is-invalid","color"===o&&"".concat(n,"-color"))}))}));I.displayName="FormControl";var k=Object.assign(I,{Feedback:j}),F=t(561),R=Object(F.a)("form-floating"),S=["controlId","as"],V=l.forwardRef((function(e,a){var t=e.controlId,i=e.as,s=void 0===i?"div":i,n=Object(r.a)(e,S),o=Object(l.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(m.a.Provider,{value:o,children:Object(d.jsx)(s,Object(c.a)(Object(c.a)({},n),{},{ref:a}))})}));V.displayName="FormGroup";var z=V,T=t(740),L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],E=l.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,n=e.bsPrefix,o=e.column,b=e.visuallyHidden,f=e.className,u=e.htmlFor,j=Object(r.a)(e,L),v=Object(l.useContext)(m.a).controlId;n=Object(O.c)(n,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=s()(f,n,b&&"visually-hidden",o&&p);return u=u||v,o?Object(d.jsx)(T.a,Object(c.a)({ref:a,as:"label",className:x,htmlFor:u},j)):Object(d.jsx)(i,Object(c.a)({ref:a,className:x,htmlFor:u},j))}));E.displayName="FormLabel",E.defaultProps={column:!1,visuallyHidden:!1};var A=E,H=["bsPrefix","className","id"],B=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.id,o=Object(r.a)(e,H),b=Object(l.useContext)(m.a).controlId;return t=Object(O.c)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:s()(i,t),id:n||b}))}));B.displayName="FormRange";var G=B,J=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],M=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,n=e.htmlSize,o=e.className,b=e.isValid,f=void 0!==b&&b,u=e.isInvalid,j=void 0!==u&&u,v=e.id,p=Object(r.a)(e,J),x=Object(l.useContext)(m.a).controlId;return t=Object(O.c)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:n,ref:a,className:s()(o,t,i&&"".concat(t,"-").concat(i),f&&"is-valid",j&&"is-invalid"),id:v||x}))}));M.displayName="FormSelect";var U=M,_=["bsPrefix","className","as","muted"],q=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.as,o=void 0===n?"small":n,l=e.muted,b=Object(r.a)(e,_);return t=Object(O.c)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:s()(i,t,l&&"text-muted")}))}));q.displayName="FormText";var D=q,K=l.forwardRef((function(e,a){return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));K.displayName="Switch";var Q=Object.assign(K,{Input:w.Input,Label:w.Label}),W=["bsPrefix","className","children","controlId","label"],X=l.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.children,o=e.controlId,l=e.label,b=Object(r.a)(e,W);return t=Object(O.c)(t,"form-floating"),Object(d.jsxs)(z,Object(c.a)(Object(c.a)({ref:a,className:s()(i,t),controlId:o},b),{},{children:[n,Object(d.jsx)("label",{htmlFor:o,children:l})]}))}));X.displayName="FloatingLabel";var Y=X,Z=["className","validated","as"],$={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},ee=l.forwardRef((function(e,a){var t=e.className,i=e.validated,n=e.as,o=void 0===n?"form":n,l=Object(r.a)(e,Z);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:s()(t,i&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;a.a=Object.assign(ee,{Group:z,Control:k,Floating:R,Check:w,Switch:Q,Label:A,Text:D,Range:G,Select:U,FloatingLabel:Y})},550:function(e,a,t){var c;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var c=arguments[a];if(c){var i=typeof c;if("string"===i||"number"===i)e.push(c);else if(Array.isArray(c)){if(c.length){var s=r.apply(null,c);s&&e.push(s)}}else if("object"===i){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){e.push(c.toString());continue}for(var n in c)t.call(c,n)&&c[n]&&e.push(n)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(c=function(){return r}.apply(a,[]))||(e.exports=c)}()},551:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return l}));t(9);var c=t(1),r=(t(2),["xxl","xl","lg","md","sm","xs"]),i=c.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"});i.Consumer,i.Provider;function s(e,a){var t=Object(c.useContext)(i).prefixes;return e||t[a]||a}function n(){return Object(c.useContext)(i).breakpoints}function o(){return Object(c.useContext)(i).minBreakpoint}function l(){return"rtl"===Object(c.useContext)(i).dir}},561:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var c=t(9),r=t(48),i=t(550),s=t.n(i),n=/-(.)/g;var o=t(1),l=t(551),d=t(2),b=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(a=e,a.replace(n,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,i=void 0===t?f(e):t,n=a.Component,u=a.defaultProps,j=o.forwardRef((function(a,t){var i=a.className,o=a.bsPrefix,f=a.as,u=void 0===f?n||"div":f,j=Object(r.a)(a,b),v=Object(l.c)(o,e);return Object(d.jsx)(u,Object(c.a)({ref:t,className:s()(i,v)},j))}));return j.defaultProps=u,j.displayName=i,j}},571:function(e,a,t){"use strict";var c=t(9),r=t(48),i=t(550),s=t.n(i),n=t(1),o=t(617),l=t(551),d=t(2),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],f=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,f=e.className,u=e.type,j=void 0===u?"checkbox":u,v=e.isValid,m=void 0!==v&&v,O=e.isInvalid,p=void 0!==O&&O,x=e.as,h=void 0===x?"input":x,y=Object(r.a)(e,b),N=Object(n.useContext)(o.a).controlId;return i=Object(l.c)(i,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},y),{},{ref:a,type:j,id:t||N,className:s()(f,i,m&&"is-valid",p&&"is-invalid")}))}));f.displayName="FormCheckInput",a.a=f},617:function(e,a,t){"use strict";var c=t(1),r=c.createContext({});a.a=r},691:function(e,a,t){"use strict";var c=function(){};e.exports=c},740:function(e,a,t){"use strict";var c=t(14),r=t(9),i=t(48),s=t(550),n=t.n(s),o=t(1),l=t(551),d=t(2),b=["as","bsPrefix","className"],f=["className"];var u=o.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(i.a)(e,b);t=Object(l.c)(t,"col");var o=Object(l.a)(),d=Object(l.b)(),f=[],u=[];return o.forEach((function(e){var a,c,r,i=s[e];delete s[e],"object"===typeof i&&null!=i?(a=i.span,c=i.offset,r=i.order):a=i;var n=e!==d?"-".concat(e):"";a&&f.push(!0===a?"".concat(t).concat(n):"".concat(t).concat(n,"-").concat(a)),null!=r&&u.push("order".concat(n,"-").concat(r)),null!=c&&u.push("offset".concat(n,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:n.a.apply(void 0,[c].concat(f,u))}),{as:a,bsPrefix:t,spans:f}]}(e),s=Object(c.a)(t,2),o=s[0],u=o.className,j=Object(i.a)(o,f),v=s[1],m=v.as,O=void 0===m?"div":m,p=v.bsPrefix,x=v.spans;return Object(d.jsx)(O,Object(r.a)(Object(r.a)({},j),{},{ref:a,className:n()(u,!x.length&&p)}))}));u.displayName="Col",a.a=u},794:function(e,a,t){"use strict";var c=t(9),r=t(48),i=t(550),s=t.n(i),n=t(1),o=t(551),l=t(2),d=["bsPrefix","className","as"],b=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.as,b=void 0===n?"div":n,f=Object(r.a)(e,d),u=Object(o.c)(t,"row"),j=Object(o.a)(),v=Object(o.b)(),m="".concat(u,"-cols"),O=[];return j.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var c=e!==v?"-".concat(e):"";null!=a&&O.push("".concat(m).concat(c,"-").concat(a))})),Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:a},f),{},{className:s.a.apply(void 0,[i,u].concat(O))}))}));b.displayName="Row",a.a=b},795:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return s}));var c=t(1);function r(e,a){var t=0;return c.Children.map(e,(function(e){return c.isValidElement(e)?a(e,t++):e}))}function i(e,a){var t=0;c.Children.forEach(e,(function(e){c.isValidElement(e)&&a(e,t++)}))}function s(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}}}]);
//# sourceMappingURL=0.cbbff8d2.chunk.js.map