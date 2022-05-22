"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4997],{69661:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(90948),l=r(71657),d=r(88169),u=r(85893),p=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=r(34867);function m(e){return(0,f.Z)("MuiAvatar",e)}(0,r(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),h=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var y=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiAvatar"}),{alt:c,children:d,className:p,component:f="div",imgProps:y,sizes:b,src:x,srcSet:w,variant:C="circular"}=r,M=(0,n.Z)(r,g);let k=null;const R=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[o,i]=a.useState(!1);return a.useEffect((()=>{if(!r&&!n)return;i(!1);let o=!0;const a=new Image;return a.onload=()=>{o&&i("loaded")},a.onerror=()=>{o&&i("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=r,n&&(a.srcset=n),()=>{o=!1}}),[e,t,r,n]),o}((0,o.Z)({},y,{src:x,srcSet:w})),S=x||w,$=S&&"error"!==R,T=(0,o.Z)({},r,{colorDefault:!$,component:f,variant:C}),z=(e=>{const{classes:t,variant:r,colorDefault:n}=e,o={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(o,m,t)})(T);return k=$?(0,u.jsx)(h,(0,o.Z)({alt:c,src:x,srcSet:w,sizes:b,ownerState:T,className:z.img},y)):null!=d?d:S&&c?c[0]:(0,u.jsx)(Z,{className:z.fallback}),(0,u.jsx)(v,(0,o.Z)({as:f,ownerState:T,className:(0,i.Z)(z.root,p),ref:t},M,{children:k}))}))},35097:function(e,t,r){r.d(t,{V:function(){return o}});var n=r(34867);function o(e){return(0,n.Z)("MuiDivider",e)}const a=(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},23599:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(41796),l=r(90948),d=r(71657),u=r(59773),p=r(47739),f=r(58974),m=r(51705),g=r(35097),v=r(1588);var h=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var Z=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),y=r(34867);function b(e){return(0,y.Z)("MuiMenuItem",e)}var x=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=r(85893);const C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],M=(0,l.ZP)(p.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${Z.root}`]:{marginTop:0,marginBottom:0},[`& .${Z.inset}`]:{paddingLeft:36},[`& .${h.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${h.root} svg`]:{fontSize:"1.25rem"}}))));var k=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:p=!1,divider:g=!1,disableGutters:v=!1,focusVisibleClassName:h,role:Z="menuitem",tabIndex:y}=r,x=(0,n.Z)(r,C),k=a.useContext(u.Z),R={dense:p||k.dense||!1,disableGutters:v},S=a.useRef(null);(0,f.Z)((()=>{c&&S.current&&S.current.focus()}),[c]);const $=(0,o.Z)({},r,{dense:R.dense,divider:g,disableGutters:v}),T=(e=>{const{disabled:t,dense:r,divider:n,disableGutters:a,selected:i,classes:c}=e,l={root:["root",r&&"dense",t&&"disabled",!a&&"gutters",n&&"divider",i&&"selected"]},d=(0,s.Z)(l,b,c);return(0,o.Z)({},c,d)})(r),z=(0,m.Z)(S,t);let H;return r.disabled||(H=void 0!==y?y:-1),(0,w.jsx)(u.Z.Provider,{value:R,children:(0,w.jsx)(M,(0,o.Z)({ref:z,role:Z,tabIndex:H,component:l,focusVisibleClassName:(0,i.Z)(T.focusVisible,h)},x,{ownerState:$,classes:T}))})}))},7906:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(31618),l=r(71657),d=r(90948),u=r(34867);function p(e){return(0,u.Z)("MuiTable",e)}(0,r(1588).Z)("MuiTable",["root","stickyHeader"]);var f=r(85893);const m=["className","component","padding","size","stickyHeader"],g=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),v="table";var h=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTable"}),{className:d,component:u=v,padding:h="normal",size:Z="medium",stickyHeader:y=!1}=r,b=(0,n.Z)(r,m),x=(0,o.Z)({},r,{component:u,padding:h,size:Z,stickyHeader:y}),w=(e=>{const{classes:t,stickyHeader:r}=e,n={root:["root",r&&"stickyHeader"]};return(0,s.Z)(n,p,t)})(x),C=a.useMemo((()=>({padding:h,size:Z,stickyHeader:y})),[h,Z,y]);return(0,f.jsx)(c.Z.Provider,{value:C,children:(0,f.jsx)(g,(0,o.Z)({as:u,role:u===v?null:"table",ref:t,className:(0,i.Z)(w.root,d),ownerState:x},b))})}))},31618:function(e,t,r){const n=r(67294).createContext();t.Z=n},44063:function(e,t,r){const n=r(67294).createContext();t.Z=n},295:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(87462),o=r(63366),a=r(67294),i=r(86010),s=r(94780),c=r(44063),l=r(71657),d=r(90948),u=r(34867);function p(e){return(0,u.Z)("MuiTableBody",e)}(0,r(1588).Z)("MuiTableBody",["root"]);var f=r(85893);const m=["className","component"],g=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),v={variant:"body"},h="tbody";var Z=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTableBody"}),{className:a,component:d=h}=r,u=(0,o.Z)(r,m),Z=(0,n.Z)({},r,{component:d}),y=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(Z);return(0,f.jsx)(c.Z.Provider,{value:v,children:(0,f.jsx)(g,(0,n.Z)({className:(0,i.Z)(y.root,a),as:d,ref:t,role:d===h?null:"rowgroup",ownerState:Z},u))})}))},53252:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(41796),l=r(98216),d=r(31618),u=r(44063),p=r(71657),f=r(90948),m=r(34867);function g(e){return(0,m.Z)("MuiTableCell",e)}var v=(0,r(1588).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),h=r(85893);const Z=["align","className","component","padding","scope","size","sortDirection","variant"],y=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,l.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,l.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,l.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,c.$n)((0,c.Fq)(e.palette.divider,1),.88):(0,c._j)((0,c.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:e.palette.text.primary},"footer"===t.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${v.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var b=a.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:c="inherit",className:f,component:m,padding:v,scope:b,size:x,sortDirection:w,variant:C}=r,M=(0,n.Z)(r,Z),k=a.useContext(d.Z),R=a.useContext(u.Z),S=R&&"head"===R.variant;let $;$=m||(S?"th":"td");let T=b;!T&&S&&(T="col");const z=C||R&&R.variant,H=(0,o.Z)({},r,{align:c,component:$,padding:v||(k&&k.padding?k.padding:"normal"),size:x||(k&&k.size?k.size:"medium"),sortDirection:w,stickyHeader:"head"===z&&k&&k.stickyHeader,variant:z}),P=(e=>{const{classes:t,variant:r,align:n,padding:o,size:a,stickyHeader:i}=e,c={root:["root",r,i&&"stickyHeader","inherit"!==n&&`align${(0,l.Z)(n)}`,"normal"!==o&&`padding${(0,l.Z)(o)}`,`size${(0,l.Z)(a)}`]};return(0,s.Z)(c,g,t)})(H);let N=null;return w&&(N="asc"===w?"ascending":"descending"),(0,h.jsx)(y,(0,o.Z)({as:$,ref:t,className:(0,i.Z)(P.root,f),"aria-sort":N,scope:T,ownerState:H},M))}))},72882:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),o=r(63366),a=r(67294),i=r(86010),s=r(94780),c=r(71657),l=r(90948),d=r(34867);function u(e){return(0,d.Z)("MuiTableContainer",e)}(0,r(1588).Z)("MuiTableContainer",["root"]);var p=r(85893);const f=["className","component"],m=(0,l.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var g=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableContainer"}),{className:a,component:l="div"}=r,d=(0,o.Z)(r,f),g=(0,n.Z)({},r,{component:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(g);return(0,p.jsx)(m,(0,n.Z)({ref:t,as:l,className:(0,i.Z)(v.root,a),ownerState:g},d))}))},53184:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(87462),o=r(63366),a=r(67294),i=r(86010),s=r(94780),c=r(44063),l=r(71657),d=r(90948),u=r(34867);function p(e){return(0,u.Z)("MuiTableHead",e)}(0,r(1588).Z)("MuiTableHead",["root"]);var f=r(85893);const m=["className","component"],g=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),v={variant:"head"},h="thead";var Z=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTableHead"}),{className:a,component:d=h}=r,u=(0,o.Z)(r,m),Z=(0,n.Z)({},r,{component:d}),y=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(Z);return(0,f.jsx)(c.Z.Provider,{value:v,children:(0,f.jsx)(g,(0,n.Z)({as:d,className:(0,i.Z)(y.root,a),ref:t,role:d===h?null:"rowgroup",ownerState:Z},u))})}))},53816:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(87462),o=r(63366),a=r(67294),i=r(86010),s=r(94780),c=r(41796),l=r(44063),d=r(71657),u=r(90948),p=r(34867);function f(e){return(0,p.Z)("MuiTableRow",e)}var m=(0,r(1588).Z)("MuiTableRow",["root","selected","hover","head","footer"]),g=r(85893);const v=["className","component","hover","selected"],h=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${m.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${m.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),Z="tr";var y=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:c,component:u=Z,hover:p=!1,selected:m=!1}=r,y=(0,o.Z)(r,v),b=a.useContext(l.Z),x=(0,n.Z)({},r,{component:u,hover:p,selected:m,head:b&&"head"===b.variant,footer:b&&"footer"===b.variant}),w=(e=>{const{classes:t,selected:r,hover:n,head:o,footer:a}=e,i={root:["root",r&&"selected",n&&"hover",o&&"head",a&&"footer"]};return(0,s.Z)(i,f,t)})(x);return(0,g.jsx)(h,(0,n.Z)({as:u,ref:t,className:(0,i.Z)(w.root,c),role:u===Z?null:"row",ownerState:x},y))}))},29359:function(e,t,r){r.r(t),r.d(t,{Axis:function(){return n.RD},ChartView:function(){return n.TA},ComponentModel:function(){return n.tF},ComponentView:function(){return n.Ir},List:function(){return n.aV},Model:function(){return n.Hn},PRIORITY:function(){return n.Hr},SeriesModel:function(){return n.wJ},color:function(){return n.$_},connect:function(){return n.$j},dataTool:function(){return n.Ok},dependencies:function(){return n.HO},disConnect:function(){return n.eU},disconnect:function(){return n.zP},dispose:function(){return n.B9},env:function(){return n.OB},extendChartView:function(){return n.Zy},extendComponentModel:function(){return n.tv},extendComponentView:function(){return n.Sp},extendSeriesModel:function(){return n.Zr},format:function(){return n.WU},getCoordinateSystemDimensions:function(){return n.wL},getInstanceByDom:function(){return n.JE},getInstanceById:function(){return n.rp},getMap:function(){return n.FU},graphic:function(){return n.Q},helper:function(){return n._y},init:function(){return n.S1},innerDrawElementOnCanvas:function(){return n.z$},matrix:function(){return n.pI},number:function(){return n.Rx},parseGeoJSON:function(){return n.Nu},parseGeoJson:function(){return n.pQ},registerAction:function(){return n.zl},registerCoordinateSystem:function(){return n.RS},registerLayout:function(){return n.qR},registerLoading:function(){return n.yn},registerLocale:function(){return n.I2},registerMap:function(){return n.je},registerPostInit:function(){return n.sq},registerPostUpdate:function(){return n.Br},registerPreprocessor:function(){return n.ds},registerProcessor:function(){return n.Pu},registerTheme:function(){return n.aW},registerTransform:function(){return n.rV},registerUpdateLifecycle:function(){return n.YK},registerVisual:function(){return n.Og},setCanvasCreator:function(){return n.jQ},setPlatformAPI:function(){return n.g2},throttle:function(){return n.P2},time:function(){return n.XV},use:function(){return n.D$},util:function(){return n.D5},vector:function(){return n.xr},version:function(){return n.i8},zrUtil:function(){return n.gf},zrender:function(){return n.x_}});var n=r(15333)}}]);