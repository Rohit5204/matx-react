(this["webpackJsonpmentor-lead"]=this["webpackJsonpmentor-lead"]||[]).push([[60],{1169:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a(7),s=a(177),r=a(81),i=a(1),l=a(34),j=a.n(l),b=a(745),o=a(693),d=a(569),u=a(1105),h=a(1188),O=a(836),x=a(23),g=a(630),m=a(287),p=a(631),f=a(632),v=a(633),y=a(634),C=a(628),S=a(546),T=a(290),N=(a(108),a(2)),k=Object(s.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(n.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(t,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t})),w=Object(s.a)(g.a)((function(){return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0}}}}}));t.default=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)([]),l=Object(c.a)(s,2),g=l[0],D=l[1],I=Object(i.useState)(!1),E=Object(c.a)(I,2),P=E[0],B=E[1],L=function(){return B(!1)},A=Object(x.f)(),F=localStorage.getItem("accessToken");return Object(i.useEffect)((function(){j.a.post("http://213.136.72.177/cms/api/getCatalogue",{catId:0},{headers:{"x-access-token":F}}).then((function(e){D(e.data.data)}))}),[g]),Object(N.jsx)(k,{children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(m.a,{className:"breadcrumb",children:Object(N.jsx)(r.a,{routeSegments:[{name:"Manage Catalogue",path:"/catalogues/manageCatalogue"},{name:"Catalogue Detail Page"}]})}),Object(N.jsx)(m.a,{children:Object(N.jsx)(b.a,{children:Object(N.jsx)(o.a,{children:Object(N.jsxs)(d.a,{className:"mb-3",children:[Object(N.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(){A("/catalogues/addCatalogue")},children:"ADD"}),"\xa0",Object(N.jsx)(u.a.Control,{placeholder:"Search Box","aria-label":"Recipient's username","aria-describedby":"basic-addon2"})]})})})}),Object(N.jsxs)(m.a,{className:"text-center",width:"100%",overflow:"auto",children:[Object(N.jsx)("h4",{children:"Catalogue Table"}),Object(N.jsxs)(w,{children:[Object(N.jsx)(p.a,{children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(v.a,{align:"justify",children:"Catalogue Id"}),Object(N.jsx)(v.a,{align:"justify",children:"Catalogue Type"}),Object(N.jsx)(v.a,{align:"justify",children:"Name"}),Object(N.jsx)(v.a,{align:"justify",children:"Price"}),Object(N.jsx)(v.a,{align:"justify",children:"Status"}),Object(N.jsx)(v.a,{align:"center",children:"Action"})]})}),Object(N.jsx)(y.a,{children:g.map((function(e,t){return Object(N.jsxs)(f.a,{children:[Object(N.jsx)(v.a,{align:"justify",children:e.id}),Object(N.jsx)(v.a,{align:"justify",children:e.gsType}),Object(N.jsx)(v.a,{align:"justify",children:e.gsName}),Object(N.jsx)(v.a,{align:"justify",children:e.gsPrice}),Object(N.jsx)(v.a,{align:"justify",children:0==e.status?Object(N.jsxs)(N.Fragment,{children:[" ",Object(N.jsx)(C.a,{label:"Inactive",color:"warning"})]}):Object(N.jsxs)(N.Fragment,{children:[" ",Object(N.jsx)(C.a,{label:"Active",color:"success"})]})}),Object(N.jsx)(v.a,{align:"center",children:Object(N.jsx)(S.a,{onClick:function(){return function(e){n(e),B(!0)}(e)},children:Object(N.jsx)(T.a,{color:"success",children:"edit"})})})]},t)}))})]})]}),Object(N.jsxs)(h.a,{show:P,onHide:L,backdrop:"static",keyboard:!1,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(N.jsx)(h.a.Header,{children:Object(N.jsx)(h.a.Title,{children:"Update Catalogue"})}),Object(N.jsx)(h.a.Body,{children:Object(N.jsx)(O.default,{theEditCatalogue:a,handleDialog:L})}),Object(N.jsx)(h.a.Footer,{children:Object(N.jsx)("button",{type:"submit",className:"btn btn-error",style:{marginTop:"5px"},onClick:L,children:"Cancel"})})]})]})})}},836:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a(7),s=a(1),r=a(177),i=(a(81),a(490)),l=a(484),j=a(584),b=a(1105),o=a(745),d=a(693),u=a(34),h=a.n(u),O=a(2),x=Object(r.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(n.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(t,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));Object(r.a)("div")((function(){return{margin:"410px"}}));t.default=function(e){var t=e.theEditCatalogue,a=e.handleDialog,n=Object(s.useState)(t.id),r=Object(c.a)(n,2),u=r[0],g=(r[1],Object(s.useState)(t.gsType)),m=Object(c.a)(g,2),p=m[0],f=m[1],v=Object(s.useState)(t.gsName),y=Object(c.a)(v,2),C=y[0],S=y[1],T=Object(s.useState)(t.gsPrice),N=Object(c.a)(T,2),k=N[0],w=N[1],D=Object(s.useState)(t.status),I=Object(c.a)(D,2),E=I[0],P=I[1],B=Object(s.useState)(t.gsDescription),L=Object(c.a)(B,2),A=L[0],F=L[1],z={catId:u,catType:p,gsName:C,price:k,description:A,catStatus:E,actionBy:1};return Object(O.jsx)(x,{children:Object(O.jsxs)(b.a,{onSubmit:function(e){e.preventDefault()},children:[Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(d.a,{md:"6",className:"ml-8",children:[Object(O.jsx)(b.a.Label,{children:"Name"}),Object(O.jsx)(b.a.Control,{onChange:function(e){return S(e.target.value||"")},value:null==C?"":C,placeholder:"Enter the Name"})]}),Object(O.jsx)(d.a,{md:"6",children:Object(O.jsxs)(i.a,{sx:{m:0,minWidth:330},size:"small",children:[Object(O.jsx)(b.a.Label,{children:"Type"}),Object(O.jsxs)(l.a,{value:p,label:"Type",onChange:function(e){return f(e.target.value)},children:[Object(O.jsx)(j.a,{value:"",children:"Select the Type"}),Object(O.jsx)(j.a,{value:"Service",children:"Service"}),Object(O.jsx)(j.a,{value:"Product",children:"Product"})]})]})})]}),Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(d.a,{className:"mt-1",children:[Object(O.jsx)(b.a.Label,{children:"Price"}),Object(O.jsx)(b.a.Control,{onChange:function(e){return w(e.target.value)},value:k,placeholder:"Enter the Price"})]}),Object(O.jsx)(d.a,{md:"6",children:Object(O.jsxs)(i.a,{sx:{m:0,minWidth:330},size:"small",children:[Object(O.jsx)(b.a.Label,{children:"Status"}),Object(O.jsxs)(l.a,{value:E,label:"Type",onChange:function(e){return P(e.target.value)},children:[Object(O.jsx)(j.a,{value:"",children:"Select the Type"}),Object(O.jsx)(j.a,{value:0,children:"INACTIVE"}),Object(O.jsx)(j.a,{value:1,children:"ACTIVE"})]})]})})]}),Object(O.jsx)(o.a,{className:"mt-1",children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(O.jsx)(b.a.Label,{children:"Description"}),Object(O.jsx)(b.a.Control,{as:"textarea",rows:3,onChange:function(e){return F(e.target.value)},value:A,placeholder:"Write Description"})]})})}),Object(O.jsx)(o.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)("button",{type:"submit",className:"btn btn-success",style:{marginTop:"5px"},onClick:function(e){var t=localStorage.getItem("accessToken");console.log({UpdateCatalogue:z}),e.preventDefault(),h.a.post("http://213.136.72.177/cms/api/upsertCatalogue",z,{headers:{"x-access-token":t}}).then((function(){return s.useEffect})),a()},children:"Update"})})})]})})}}}]);
//# sourceMappingURL=60.9830c296.chunk.js.map