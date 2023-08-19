(this["webpackJsonpmentor-lead"]=this["webpackJsonpmentor-lead"]||[]).push([[70],{568:function(e,t,a){"use strict";var c=a(48),n=a(9),s=a(554),r=a.n(s),o=a(1),d=a(564),j=a(555),i=a(567),b=o.createContext(null);b.displayName="InputGroupContext";var l=b,u=a(2),O=["bsPrefix","size","hasValidation","className","as"],m=Object(d.a)("input-group-text",{Component:"span"}),h=o.forwardRef((function(e,t){var a=e.bsPrefix,s=e.size,d=e.hasValidation,i=e.className,b=e.as,m=void 0===b?"div":b,h=Object(c.a)(e,O);a=Object(j.c)(a,"input-group");var f=Object(o.useMemo)((function(){return{}}),[]);return Object(u.jsx)(l.Provider,{value:f,children:Object(u.jsx)(m,Object(n.a)(Object(n.a)({ref:t},h),{},{className:r()(i,a,s&&"".concat(a,"-").concat(s),d&&"has-validation")}))})}));h.displayName="InputGroup";t.a=Object.assign(h,{Text:m,Radio:function(e){return Object(u.jsx)(m,{children:Object(u.jsx)(i.a,Object(n.a)({type:"radio"},e))})},Checkbox:function(e){return Object(u.jsx)(m,{children:Object(u.jsx)(i.a,Object(n.a)({type:"checkbox"},e))})}})},589:function(e,t,a){"use strict";var c=a(9),n=a(48),s=a(554),r=a.n(s),o=a(1),d=a(555),j=a(2),i=["bsPrefix","className","as"],b=o.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,b=void 0===o?"div":o,l=Object(n.a)(e,i),u=Object(d.c)(a,"row"),O=Object(d.a)(),m=Object(d.b)(),h="".concat(u,"-cols"),f=[];return O.forEach((function(e){var t,a=l[e];delete l[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==m?"-".concat(e):"";null!=t&&f.push("".concat(h).concat(c,"-").concat(t))})),Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:t},l),{},{className:r.a.apply(void 0,[s,u].concat(f))}))}));b.displayName="Row",t.a=b},854:function(e,t,a){"use strict";a.r(t);var c=a(11),n=a(14),s=a(1),r=a(34),o=a.n(r),d=a(1213),j=a(589),i=a(705),b=a(568),l=a(294),u=a(81),O=a(2);t.default=function(e){var t=e.handleDialog,a=Object(s.useState)(""),r=Object(n.a)(a,2),m=r[0],h=r[1],f=Object(s.useState)(""),x=Object(n.a)(f,2),p=x[0],g=x[1],N=Object(s.useState)(""),v=Object(n.a)(N,2),S=v[0],C=(v[1],Object(s.useState)("")),y=Object(n.a)(C,2),I=y[0],k=(y[1],Object(s.useState)("")),M=Object(n.a)(k,2),D=M[0],E=M[1],R=Object(s.useState)(""),q=Object(n.a)(R,2),w=q[0],L=(q[1],Object(s.useState)("")),P=Object(n.a)(L,2),T=P[0],A=(P[1],Object(s.useState)("")),F=Object(n.a)(A,2),z=F[0],G=(F[1],Object(s.useState)("")),J=Object(n.a)(G,2),V=J[0],W=(J[1],Object(s.useState)("India")),B=Object(n.a)(W,2),H=B[0],K=(B[1],Object(s.useState)(1e4)),Q=Object(n.a)(K,2),U=Q[0],X=Q[1],Y=Object(s.useState)([]),Z=Object(n.a)(Y,2),$=(Z[0],Z[1]),_=Object(s.useState)([]),ee=Object(n.a)(_,2),te=(ee[0],ee[1]),ae=Object(s.useState)([]),ce=Object(n.a)(ae,2),ne=(ce[0],ce[1]),se=Object(s.useState)([]),re=Object(n.a)(se,2),oe=(re[0],re[1]),de=Object(s.useState)([]),je=Object(n.a)(de,2),ie=(je[0],je[1]),be=Object(s.useState)(null),le=Object(n.a)(be,2),ue=le[0],Oe=(le[1],Object(s.useState)(null)),me=Object(n.a)(Oe,2),he=me[0],fe=(me[1],Object(s.useState)(null)),xe=Object(n.a)(fe,2),pe=xe[0],ge=(xe[1],Object(s.useState)("Lead")),Ne=Object(n.a)(ge,2),ve=Ne[0],Se=(Ne[1],Object(s.useState)("Warm")),Ce=Object(n.a)(Se,2),ye=Ce[0],Ie=(Ce[1],Object(s.useState)([])),ke=Object(n.a)(Ie,2),Me=ke[0],De=ke[1],Ee=Object(s.useState)([]),Re=Object(n.a)(Ee,2),qe=Re[0],we=Re[1],Le=Object(s.useState)([]),Pe=Object(n.a)(Le,2),Te=Pe[0],Ae=Pe[1],Fe=Object(s.useState)([]),ze=Object(n.a)(Fe,2),Ge=ze[0],Je=ze[1],Ve={"x-access-token":localStorage.getItem("accessToken"),roleCode:localStorage.getItem("roleCode"),userId:localStorage.getItem("userId")};Object(s.useEffect)((function(){o.a.get(u.a+"/api/getMasterData?masterName=usermaster",{headers:Ve}).then((function(e){for(var t=0;t<e.data.data.length;t++)ie((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].firstName+" "+e.data.data[t].lastName])})),De((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].userId,e.data.data[t].firstName+" "+e.data.data[t].lastName])}))})),o.a.post(u.a+"/api/getCatalogue",{catId:0},{headers:Ve}).then((function(e){for(var t=0;t<e.data.data.length;t++)$((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].gsName])}))})),o.a.get(u.a+"/api/getMasterData?masterName=platformmaster",{headers:Ve}).then((function(e){for(var t=0;t<e.data.data.length;t++)te((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].platformName])})),Je((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].id,e.data.data[t].platformName])}))})),o.a.get(u.a+"/api/getMasterData?masterName=labelmaster",{headers:Ve}).then((function(e){for(var t=0;t<e.data.data.length;t++)ne((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].name])})),we((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].id,e.data.data[t].name])}))})),o.a.get(u.a+"/api/getMasterData?masterName=statusmaster",{headers:Ve}).then((function(e){for(var t=0;t<e.data.data.length;t++)oe((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].name])})),Ae((function(a){return[].concat(Object(c.a)(a),[e.data.data[t].id,e.data.data[t].name])}))}))}),[]);var We=localStorage.getItem("userId");return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.a,{onSubmit:function(e){e.preventDefault(),function(){for(var e,a,c,n=0;n<Me.length;n++)pe==Me[n]&&Me[n-1];for(n=0;n<Ge.length;n++)he==Ge[n]&&(e=Ge[n-1]);for(n=0;n<qe.length;n++)ye==qe[n]&&(a=qe[n-1]);for(n=0;n<Te.length;n++)ve==Te[n]&&(c=Te[n-1]);var s={name:m,mobileNo:p,emailId:D,streetName:w,cityName:z,stateName:T,zipCode:V,countryName:H,intrestedIn:ue,platformName:he,sourceId:e,assignId:We,status:c,label:a,createdBy:1,alternateMobile:S,clientName:I,expectedAmount:U};console.log({AddLead:s}),o.a.post(u.a+"/api/saveLeadGenerationData",[s],{headers:Ve}).then((function(e){alert(e.data.message),t()})).catch((function(e){alert(e.response.data.message)}))}()},children:[Object(O.jsxs)(j.a,{children:[Object(O.jsxs)(i.a,{children:[Object(O.jsx)("h6",{className:"mt-1",children:"Lead Name\xa0 "}),Object(O.jsxs)(b.a,{className:"mb-2",children:[Object(O.jsx)(b.a.Text,{id:"basic-addon1",children:Object(O.jsx)(l.a,{children:"person"})}),Object(O.jsx)(d.a.Control,{height:2,sx:{m:0,minWidth:110},onChange:function(e){return h(e.target.value)},value:m,required:!0,placeholder:"Enter the Lead Name"})," ",Object(O.jsx)(d.a.Control.Feedback,{type:"invalid",children:"Lead Name is Required"})]})]}),Object(O.jsxs)(i.a,{children:[Object(O.jsx)("h6",{className:"mt-1",children:"Mobile 1\xa0\xa0\xa0  \xa0"}),Object(O.jsxs)(b.a,{className:"mb-2",children:[Object(O.jsx)(b.a.Text,{id:"basic-addon1",children:Object(O.jsx)(l.a,{children:"phone"})}),Object(O.jsx)(d.a.Control,{required:!0,onChange:function(e){return g(e.target.value)},value:p,placeholder:"Customer Mobile Number"}),Object(O.jsx)(d.a.Control.Feedback,{type:"invalid",children:"Primary Mobile Number is Required"})]})]})]}),Object(O.jsxs)(j.a,{children:[Object(O.jsxs)(i.a,{children:[Object(O.jsx)("h6",{className:"mt-1",children:"Email\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  \xa0"}),Object(O.jsxs)(b.a,{className:"mb-2",children:[Object(O.jsx)(b.a.Text,{id:"basic-addon1",children:Object(O.jsx)(l.a,{children:"email"})}),Object(O.jsx)(d.a.Control,{required:!0,type:"email",onChange:function(e){return E(e.target.value)},value:D,placeholder:"Customer Email"}),Object(O.jsx)(d.a.Control.Feedback,{type:"invalid",children:"Email is Required"})]})]}),Object(O.jsxs)(i.a,{children:[Object(O.jsx)("h6",{className:"mt-1",children:"Amount\xa0\xa0\xa0  \xa0"}),Object(O.jsxs)(b.a,{className:"mb-2",children:[Object(O.jsx)(b.a.Text,{id:"basic-addon1",children:Object(O.jsx)(l.a,{children:"\u20b9"})}),Object(O.jsx)(d.a.Control,{disabled:!0,type:"number",onChange:function(e){return X(e.target.value)},value:U,placeholder:"Client Expected Amount"})]})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)(j.a,{children:Object(O.jsxs)(i.a,{className:"d-flex justify-content-end",children:[Object(O.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:function(){t()},children:"Cancel"}),"\xa0",Object(O.jsx)("button",{type:"submit",className:"btn btn-success",children:"Save"})]})})]})})}}}]);
//# sourceMappingURL=70.c2ff8996.chunk.js.map