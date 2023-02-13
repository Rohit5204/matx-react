(this["webpackJsonpmentor-lead"]=this["webpackJsonpmentor-lead"]||[]).push([[58],{1184:function(e,t,a){"use strict";a.r(t);var r=a(14),o=a(7),n=a(179),c=a(80),i=a(1),l=a(34),s=a.n(l),d=a(1193),b=a(23),p=a(570),u=a(288),j=a(571),m=a(572),g=a(573),O=a(574),v=a(2),h=Object(n.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(o.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(o.a)(t,"& .breadcrumb",Object(o.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t})),f=Object(n.a)(p.a)((function(){return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0}}}}}));t.default=function(){Object(b.f)();var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],n={"x-access-token":localStorage.getItem("accessToken"),roleCode:localStorage.getItem("roleCode"),userId:localStorage.getItem("userId")};return Object(i.useEffect)((function(){s.a.post("http://43.204.38.243:3001/api/getRenewalInstalments",{userId:1},{headers:n}).then((function(e){o(e.data.data)}))}),[a]),Object(v.jsx)(h,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(u.a,{className:"breadcrumb",children:Object(v.jsx)(c.a,{routeSegments:[{name:"Renewal List",path:"/myDeal/renewal"},{name:"Product Renewal"}]})}),Object(v.jsx)(d.a.Label,{style:{color:"red"},children:"Note :- List of Invoice Renewal in Upcoming 30 Days"}),Object(v.jsxs)(u.a,{className:"text-center",width:"100%",overflow:"auto",children:[Object(v.jsx)("h4",{children:"Upcoming Renewal"}),Object(v.jsxs)(f,{className:"table table-striped table-bordered",style:{borderRadius:"1px"},children:[Object(v.jsx)(j.a,{style:{borderLeft:"1px solid red",borderRight:"1px solid red"},className:"text-center",children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(g.a,{align:"center",children:"Invoice No"}),Object(v.jsx)(g.a,{align:"center",children:"Product Name"}),Object(v.jsx)(g.a,{align:"center",children:"Client Name"}),Object(v.jsx)(g.a,{align:"center",children:"Client Email"})]})}),Object(v.jsx)(O.a,{children:a.map((function(e,t){return Object(v.jsxs)(m.a,{children:[Object(v.jsx)(g.a,{align:"center",children:e.invoiceNumber}),Object(v.jsx)(g.a,{align:"center",children:e.productName}),Object(v.jsx)(g.a,{align:"center",children:e.clientName}),Object(v.jsx)(g.a,{align:"center",children:e.clientEmail})]},t)}))})]})]})]})})}},553:function(e,t,a){"use strict";var r=a(1),o=r.createContext();t.a=o},559:function(e,t,a){"use strict";var r=a(1),o=r.createContext();t.a=o},570:function(e,t,a){"use strict";var r=a(6),o=a(4),n=a(1),c=a(8),i=a(98),l=a(559),s=a(15),d=a(5),b=a(60),p=a(70);function u(e){return Object(b.a)("MuiTable",e)}Object(p.a)("MuiTable",["root","stickyHeader"]);var j=a(2),m=["className","component","padding","size","stickyHeader"],g=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),O="table",v=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,p=void 0===b?O:b,v=a.padding,h=void 0===v?"normal":v,f=a.size,y=void 0===f?"medium":f,x=a.stickyHeader,w=void 0!==x&&x,k=Object(r.a)(a,m),R=Object(o.a)({},a,{component:p,padding:h,size:y,stickyHeader:w}),N=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(i.a)(a,u,t)}(R),C=n.useMemo((function(){return{padding:h,size:y,stickyHeader:w}}),[h,y,w]);return Object(j.jsx)(l.a.Provider,{value:C,children:Object(j.jsx)(g,Object(o.a)({as:p,role:p===O?null:"table",ref:t,className:Object(c.a)(N.root,d),ownerState:R},k))})}));t.a=v},571:function(e,t,a){"use strict";var r=a(4),o=a(6),n=a(1),c=a(8),i=a(98),l=a(553),s=a(15),d=a(5),b=a(60),p=a(70);function u(e){return Object(b.a)("MuiTableHead",e)}Object(p.a)("MuiTableHead",["root"]);var j=a(2),m=["className","component"],g=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),O={variant:"head"},v="thead",h=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,b=void 0===d?v:d,p=Object(o.a)(a,m),h=Object(r.a)({},a,{component:b}),f=function(e){var t=e.classes;return Object(i.a)({root:["root"]},u,t)}(h);return Object(j.jsx)(l.a.Provider,{value:O,children:Object(j.jsx)(g,Object(r.a)({as:b,className:Object(c.a)(f.root,n),ref:t,role:b===v?null:"rowgroup",ownerState:h},p))})}));t.a=h},572:function(e,t,a){"use strict";var r=a(7),o=a(4),n=a(6),c=a(1),i=a(8),l=a(98),s=a(470),d=a(553),b=a(15),p=a(5),u=a(60),j=a(70);function m(e){return Object(u.a)("MuiTableRow",e)}var g=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),O=a(2),v=["className","component","hover","selected"],h=Object(p.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(g.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),Object(r.a)(t,"&.".concat(g.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),f=c.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),r=a.className,s=a.component,p=void 0===s?"tr":s,u=a.hover,j=void 0!==u&&u,g=a.selected,f=void 0!==g&&g,y=Object(n.a)(a,v),x=c.useContext(d.a),w=Object(o.a)({},a,{component:p,hover:j,selected:f,head:x&&"head"===x.variant,footer:x&&"footer"===x.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(l.a)(a,m,t)}(w);return Object(O.jsx)(h,Object(o.a)({as:p,ref:t,className:Object(i.a)(k.root,r),role:"tr"===p?null:"row",ownerState:w},y))}));t.a=f},573:function(e,t,a){"use strict";var r=a(7),o=a(6),n=a(4),c=a(1),i=a(8),l=a(98),s=a(470),d=a(13),b=a(559),p=a(553),u=a(15),j=a(5),m=a(60),g=a(70);function O(e){return Object(m.a)("MuiTableCell",e)}var v=Object(g.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),h=a(2),f=["align","className","component","padding","scope","size","sortDirection","variant"],y=Object(j.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(s.e)(Object(s.a)(t.palette.divider,1),.88):Object(s.b)(Object(s.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(r.a)({padding:"6px 16px"},"&.".concat(v.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),x=c.forwardRef((function(e,t){var a,r=Object(u.a)({props:e,name:"MuiTableCell"}),s=r.align,j=void 0===s?"inherit":s,m=r.className,g=r.component,v=r.padding,x=r.scope,w=r.size,k=r.sortDirection,R=r.variant,N=Object(o.a)(r,f),C=c.useContext(b.a),H=c.useContext(p.a),T=H&&"head"===H.variant;a=g||(T?"th":"td");var M=x;!M&&T&&(M="col");var S=R||H&&H.variant,z=Object(n.a)({},r,{align:j,component:a,padding:v||(C&&C.padding?C.padding:"normal"),size:w||(C&&C.size?C.size:"medium"),sortDirection:k,stickyHeader:"head"===S&&C&&C.stickyHeader,variant:S}),I=function(e){var t=e.classes,a=e.variant,r=e.align,o=e.padding,n=e.size,c={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat(Object(d.a)(r)),"normal"!==o&&"padding".concat(Object(d.a)(o)),"size".concat(Object(d.a)(n))]};return Object(l.a)(c,O,t)}(z),A=null;return k&&(A="asc"===k?"ascending":"descending"),Object(h.jsx)(y,Object(n.a)({as:a,ref:t,className:Object(i.a)(I.root,m),"aria-sort":A,scope:M,ownerState:z},N))}));t.a=x},574:function(e,t,a){"use strict";var r=a(4),o=a(6),n=a(1),c=a(8),i=a(98),l=a(553),s=a(15),d=a(5),b=a(60),p=a(70);function u(e){return Object(b.a)("MuiTableBody",e)}Object(p.a)("MuiTableBody",["root"]);var j=a(2),m=["className","component"],g=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),O={variant:"body"},v="tbody",h=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,b=void 0===d?v:d,p=Object(o.a)(a,m),h=Object(r.a)({},a,{component:b}),f=function(e){var t=e.classes;return Object(i.a)({root:["root"]},u,t)}(h);return Object(j.jsx)(l.a.Provider,{value:O,children:Object(j.jsx)(g,Object(r.a)({className:Object(c.a)(f.root,n),as:b,ref:t,role:b===v?null:"rowgroup",ownerState:h},p))})}));t.a=h}}]);
//# sourceMappingURL=58.3469aa85.chunk.js.map