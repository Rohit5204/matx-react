(this["webpackJsonpmentor-lead"]=this["webpackJsonpmentor-lead"]||[]).push([[85],{1205:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(9),c=a(37),s=a(49),l=a(11),i=a(14),j=a(184),d=a(83),o=a(1222),b=a(586),u=a(709),O=a(570),h=a(596),m=a(502),x=a(1135),p=a(689),g=a.n(p),f=a(785),v=a.n(f),N=a(297),C=a(299),S=a(503),y=a(497),w=a(582),I=a(1240),E=a(524),L=a(556),k=a(1),q=a(34),M=a.n(q),F=a(23),T=a(82),B=a(2),R=Object(j.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(r.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(r.a)(t,"& .breadcrumb",Object(r.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));Object(j.a)("div")((function(){return{margin:"0px 0px 0px 441px"}}));t.default=function(){var e=Object(F.f)(),t=function(){e("/employees/manageEmployee")},a=Object(k.useState)(""),r=Object(i.a)(a,2),j=r[0],p=r[1],f=Object(k.useState)(""),q=Object(i.a)(f,2),A=q[0],D=q[1],U=Object(k.useState)(""),z=Object(i.a)(U,2),P=z[0],H=z[1],J=Object(k.useState)(""),V=Object(i.a)(J,2),G=V[0],K=V[1],Q=Object(k.useState)(""),W=Object(i.a)(Q,2),X=W[0],Y=W[1],Z=Object(k.useState)(""),$=Object(i.a)(Z,2),_=$[0],ee=$[1],te=Object(k.useState)(""),ae=Object(i.a)(te,2),re=ae[0],ne=ae[1],ce={"x-access-token":localStorage.getItem("accessToken"),roleCode:localStorage.getItem("roleCode"),userId:localStorage.getItem("userId")},se=Object(k.useState)(null),le=Object(i.a)(se,2),ie=le[0],je=le[1],de=Object(k.useState)([]),oe=Object(i.a)(de,2),be=(oe[0],oe[1]),ue=Object(k.useState)([]),Oe=Object(i.a)(ue,2),he=(Oe[0],Oe[1]),me=Object(k.useState)([]),xe=Object(i.a)(me,2),pe=xe[0],ge=xe[1],fe=Object(k.useState)([]),ve=Object(i.a)(fe,2),Ne=ve[0],Ce=ve[1],Se=Object(k.useState)(null),ye=Object(i.a)(Se,2),we=ye[0],Ie=ye[1];Object(k.useEffect)((function(){M.a.get(T.a+"/api/getMasterData?masterName=usermaster",{headers:ce}).then((function(e){for(var t=0;t<e.data.status.length;t++)2==e.data.status[t].roleId&&(be((function(a){return[].concat(Object(l.a)(a),[e.data.status[t].firstName+" "+e.data.status[t].lastName])})),he((function(a){return[].concat(Object(l.a)(a),[e.data.status[t].userId,e.data.status[t].firstName+" "+e.data.status[t].lastName])})))})),M.a.get(T.a+"/api/getMasterData?masterName=usermaster",{headers:ce}).then((function(e){for(var t=0;t<e.data.status.length;t++)3==e.data.status[t].roleId&&(ge((function(a){return[].concat(Object(l.a)(a),[e.data.status[t].firstName+" "+e.data.status[t].lastName])})),Ce((function(a){return[].concat(Object(l.a)(a),[e.data.status[t].userId,e.data.status[t].firstName+" "+e.data.status[t].lastName])})))}))}),[]);var Ee=window.localStorage.getItem("branchName"),Le=window.localStorage.getItem("branchId"),ke=window.localStorage.getItem("userName"),qe=window.localStorage.getItem("userId"),Me=function(){var e=Object(s.a)(Object(c.a)().mark((function e(){var a,r,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=0;r<Ne.length;r++)we==Ne[r]&&(a=Ne[r-1]);return n={id:0,firstName:j,lastName:A,email:P,createdBy:1,lastActive:"",userRoleId:ie,addedBy:1,password:G,mobileNo:X,alternateMobileNo:_,userName:re,recodStatus:1,branchId:Le,tlId:a,branchManagerId:qe},console.log({AddUser:n}),e.next=5,M.a.post(T.a+"/api/userMasterUpsert",n,{headers:ce}).then((function(e){alert(e.data.message)})).catch((function(e){alert(e.response.data.message)}));case 5:t();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=Object(k.useState)(!1),Te=Object(i.a)(Fe,2),Be=Te[0],Re=Te[1],Ae=Object(k.useState)(!1),De=Object(i.a)(Ae,2),Ue=De[0];De[1];return Object(B.jsxs)(R,{children:[Object(B.jsx)(N.a,{className:"breadcrumb",children:Object(B.jsx)(d.a,{routeSegments:[{name:"Manage Employee",path:"/employees/manageEmployee"},{name:"Add Employee Page"}]})}),Object(B.jsxs)(o.a,{noValidate:!0,validated:Ue,onSubmit:function(e){e.preventDefault(),Me()},children:[Object(B.jsx)(b.a,{children:Object(B.jsx)(u.a,{children:Object(B.jsxs)(d.j,{title:"Fill Employee Detail's",children:[Object(B.jsxs)(b.a,{children:[Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"First Name"}),Object(B.jsx)(o.a.Control,{required:!0,onChange:function(e){return p(e.target.value)},value:j,placeholder:"Enter the First Name"}),Object(B.jsx)(o.a.Control.Feedback,{type:"invalid",children:"First Name is Required"})]}),Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"Last Name"}),Object(B.jsx)(o.a.Control,{required:!0,onChange:function(e){return D(e.target.value)},value:A,placeholder:"Enter the Last Name"}),Object(B.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Last Name is Required"})]})]}),Object(B.jsxs)(b.a,{children:[Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"Mobile Number"}),Object(B.jsxs)(O.a,{children:[Object(B.jsx)(O.a.Text,{id:"basic-addon1",children:Object(B.jsx)(C.a,{children:"phone"})}),Object(B.jsx)(o.a.Control,{required:!0,onChange:function(e){return Y(e.target.value)},value:X,placeholder:"Enter the Mobile Number"}),Object(B.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Mobile Number is Required"})]})]}),Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"Alternate Mobile"}),Object(B.jsxs)(O.a,{children:[Object(B.jsx)(O.a.Text,{id:"basic-addon1",children:Object(B.jsx)(C.a,{children:"phone"})}),Object(B.jsx)(o.a.Control,{onChange:function(e){return ee(e.target.value)},value:_,placeholder:"Enter the Alternate Number"})]})]})]}),Object(B.jsxs)(b.a,{children:[Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"Email"}),Object(B.jsxs)(O.a,{children:[Object(B.jsx)(O.a.Text,{id:"basic-addon1",children:Object(B.jsx)(C.a,{children:"email"})}),Object(B.jsx)(o.a.Control,{required:!0,type:"email",onChange:function(e){return H(e.target.value)},value:P,placeholder:"Enter the personal Email Id"}),Object(B.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Email is Required"})]})]}),Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"Branch Name"}),Object(B.jsx)(o.a.Control,{disabled:!0,required:!0,value:Ee,placeholder:"Enter the Branch Name"})]}),Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(o.a.Label,{children:"Branch Manager"}),Object(B.jsx)(o.a.Control,{disabled:!0,required:!0,value:ke,placeholder:"Enter the Branch Manager"})]}),Object(B.jsx)(u.a,{xs:6,children:Object(B.jsxs)(S.a,{sx:{m:0,width:"100%"},size:"small",children:[Object(B.jsx)(O.a,{children:Object(B.jsx)(o.a.Label,{children:"Role"})}),Object(B.jsxs)(y.a,{required:!0,value:ie,label:"r",onChange:function(e){return je(e.target.value)},children:[Object(B.jsx)(w.a,{value:3,children:"Team Lead"}),Object(B.jsx)(w.a,{value:4,children:"Employee"})]})]})})]}),4==ie?Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(b.a,{children:Object(B.jsxs)(u.a,{md:"6",children:[Object(B.jsx)(O.a,{children:Object(B.jsx)(o.a.Label,{children:"Team Leader"})}),Object(B.jsx)(I.a,{freeSolo:!0,autoComplete:!0,autoHighlight:!0,options:pe,value:we,onChange:function(e){return Ie(e.currentTarget.innerHTML)},renderInput:function(e){return Object(B.jsx)(E.a,Object(n.a)(Object(n.a)({},e),{},{variant:"outlined",label:"Select the Team Leader",size:"small"}))}})]})})}):Object(B.jsx)(B.Fragment,{}),Object(B.jsx)("br",{}),Object(B.jsx)("h6",{style:{color:"red"},children:"User Credential's "}),Object(B.jsxs)(b.a,{children:[Object(B.jsxs)(u.a,{children:[Object(B.jsx)(o.a.Label,{children:"User Name "}),Object(B.jsxs)(O.a,{children:[Object(B.jsx)(O.a.Text,{id:"basic-addon1",children:Object(B.jsx)(C.a,{children:"person"})}),Object(B.jsx)(o.a.Control,{required:!0,onChange:function(e){return ne(e.target.value)},value:re,placeholder:"Enter the User Name"}),Object(B.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Username is Required"})]})]}),Object(B.jsx)(u.a,{children:Object(B.jsxs)(S.a,{sx:{width:"100%"},variant:"outlined",children:[Object(B.jsx)(o.a.Label,{children:"Password "}),Object(B.jsx)(m.a,{size:"small",id:"outlined-adornment-password",onChange:function(e){return K(e.target.value)},value:G,type:Be?"text":"password",endAdornment:Object(B.jsx)(x.a,{position:"end",children:Object(B.jsx)(L.a,{"aria-label":"toggle password visibility",onClick:function(){return Re((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:Be?Object(B.jsx)(v.a,{}):Object(B.jsx)(g.a,{})})}),label:"h"}),Object(B.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Password is Required"})]})})]})]})})}),Object(B.jsx)("br",{}),Object(B.jsx)(b.a,{children:Object(B.jsxs)(u.a,{className:"d-flex justify-content-center",children:[Object(B.jsx)(h.a,{variant:"secondary",onClick:t,children:"Cancel"}),"\xa0",Object(B.jsx)("button",{type:"submit",className:"btn btn-success",children:"Save"})]})})]})]})}}}]);
//# sourceMappingURL=85.79723c25.chunk.js.map