(this.webpackJsonpSIGUAM=this.webpackJsonpSIGUAM||[]).push([[43],{1688:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var r=n(55),a=n.n(r),o=n(15),i=n(95),l=n(11),c=n(689),s=n.n(c),u=n(0),d=n.n(u),b=n(627),p=n(304),f=n(620),h=n(315),j=n(499),m=(n(652),n(185),n(83)),v=(n(655),n(600),n(674)),x=n.n(v),O=n(675),g=n.n(O),C=n(1),w=[{name:"errorCode",label:"Error Code"},{name:"errorMessage",label:"Error Message"}],y={responsive:"standard",selectableRows:"none",download:!1,filter:!1,print:!1,search:!1,viewColumns:!1},k=[];function M(){var e=Object(u.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1]),r=d.a.useState(!1),c=Object(l.a)(r,2),v=(c[0],c[1]),O=Object(u.useState)(!0),M=Object(l.a)(O,2),S=(M[0],M[1]),R=Object(u.useState)(!1),T=Object(l.a)(R,2),z=T[0],L=T[1],E=Object(u.useState)(!0),I=Object(l.a)(E,2),D=I[0],P=I[1];function H(){return(H=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,Promise.resolve(Object(m.a)().buscarCurriculos("?campos=id,ano,curso.id,curso.nome"));case 3:t=e.sent,k=t.data.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{curso:e.curso.nome})})),L(!z);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(u.useEffect)((function(){!function(){H.apply(this,arguments)}(),setTimeout((function(){P(!1)}),2e3)}),[]);var U=function(){v(!0)},_={responsive:"standard",elevation:10,print:!0,selectToolbarPlacement:"true",selectableRowsOnClick:!0,expandableRows:!1,expandableRowsHeader:!1,isRowExpandable:function(e,t){var n=k[e].errors;return null!==n&&void 0!==n},onRowExpansionChange:function(e,t,n){return console.log(e,t,n)},renderExpandableRow:function(e,t){return Object(C.jsx)("div",{style:{marginLeft:"90%",width:"100%",marginTop:"3%",marginBottom:"3%"},children:Object(C.jsx)(s.a,{columns:w,tableData:k[5],options:y})})},customToolbarSelect:function(e,t,n){return console.log(e,t),Object(C.jsx)("div",{children:" am youre toolbar header "})},nextPath:function(e){this.props.history.push(e)},customToolbar:function(){return Object(C.jsx)(b.a,{onClick:U,variant:"extended",size:"medium",style:{position:"fixed",bottom:"60px",zIndex:500,right:"15px"},color:"primary",children:"Adicionar"})},onRowSelectionChange:function(e,t,r){null!==t&&void 0!==t&&t.length>0?n(!0):n(!1),console.log(e,t,r),r.map((function(e){return console.log(k[e])}))}};h.b().shape({nome:h.d().min(3,"Deve ter no minio 3 caratere").required("Campo Obrigatorio")});return Object(C.jsx)("div",{children:D?Object(C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"20%"},children:Object(C.jsx)(j.a,{color:"#36d7b7"})}):Object(C.jsx)(f.a,{theme:Object(p.a)({overrides:{MUIDataTableHeadCell:{fixedHeader:{backgroundColor:"darkblue",color:"white"}},MUIDataTableSelectCell:{headerCell:{backgroundColor:"darkblue"},checkboxRoot:{color:"white",filter:"brightness(0.5)"},expandDisabled:{visibility:"hidden"}}}}),children:Object(C.jsx)(s.a,{title:"Listagem dos Curr\xedculos",columns:[{name:"ano",label:"Curriculo",options:{filter:!0,sort:!0}},{name:"curso",label:"Curso",options:{filter:!1,sort:!0}},{name:"botaoacao",label:"Op\xe7\xf5es",options:{filter:!1,sort:!1,customBodyRenderLite:function(e,t){return Object(C.jsxs)("div",{children:[Object(C.jsx)(x.a,{onClick:function(){return alert("clicaste em editar")}}),Object(C.jsx)(g.a,{onClick:function(){return alert("clicaste em apagar")}})]})}}}],data:k,options:_})})})}},655:function(e,t,n){"use strict";n(0);var r=n(590),a=n(600),o=n(652),i=n(1),l=Object(r.a)({inputLabel:{fontSize:"1.2rem"}});t.a=function(e){var t=l();return Object(i.jsx)(o.b,{as:a.a,name:e.name,id:"outlined-full-width",label:e.label,size:"small",type:e.type,placeholder:e.placeholder,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0,className:t.inputLabel},variant:"outlined",helperText:e.helperText,error:e.error})}},674:function(e,t,n){"use strict";var r=n(112),a=n(111);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(0));var o=r(n(134)),i=n(1),l=(0,o.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=l},675:function(e,t,n){"use strict";var r=n(112),a=n(111);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(0));var o=r(n(134)),i=n(1),l=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=l}}]);
//# sourceMappingURL=43.b8c2e703.chunk.js.map