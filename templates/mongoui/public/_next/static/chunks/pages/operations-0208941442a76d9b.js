(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3355:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/operations",function(){return t(5502)}])},2510:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=t(663),i=t(3396),a=t(7294),l=t(1557);function s(e){var n=(0,a.useState)(),t=n[0],s=n[1],u=(0,a.useState)(""),c=u[0],d=u[1];(0,a.useEffect)((function(){d((0,l.Pz)(e.value))}),[e.value]);var f=(0,a.useCallback)((function(){try{e.onChange(c?(0,l.Qc)(c):void 0)}catch(n){console.error(n),s(" ")}}),[c,e.value,e.onChange]);return(0,r.jsxs)("div",{style:{flex:1,display:"flex"},children:[(0,r.jsx)(o.n,{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",autoSave:"off",spellCheck:!1,styles:{root:{flex:1},prefix:{cursor:"default"}},prefix:e.prefix,errorMessage:t,value:c,onBlur:f,onKeyDown:function(e){"Enter"===e.key&&f()},onChange:function(e,n){d(n||""),s(void 0)}}),e.iconProps&&e.menuProps?(0,r.jsx)(i.h,{iconProps:e.iconProps,menuProps:e.menuProps,menuIconProps:{hidden:!0}}):null]})}},2406:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),o=t(7294),i=t(6921),a=t(1397);function l(e){var n=(0,a.Hj)().data,t=(0,o.useMemo)((function(){return(null===n||void 0===n?void 0:n.hosts)||[]}),[n]);(0,o.useEffect)((function(){e.host&&t.includes(e.host)||e.setHost(t[0])}),[t,e]);var l=(0,o.useMemo)((function(){return t.map((function(t){return{key:t,text:t,secondaryText:t===(null===n||void 0===n?void 0:n.primary)?"Primary":"Secondary",checked:t===e.host,canCheck:!0,onClick:function(){e.setHost(t)}}}))}),[t,null===n||void 0===n?void 0:n.primary,e]);return(0,r.jsx)(i.a,{disabled:0===t.length,styles:{root:e.style},menuProps:{items:l},menuIconProps:{hidden:!0},children:e.host||"No Host"})}},6950:function(e,n,t){"use strict";var r=t(5893),o=t(7294),i=t(9235),a=t(8521),l=t(6605),s=t(2887);function u(e){var n=(0,i.gh)();return(0,r.jsxs)("div",{style:{padding:10,maxWidth:500,maxHeight:500,overflowY:"scroll",backgroundColor:n.palette.neutralLighterAlt},children:[e.header,(0,r.jsx)(s.Z,{value:e.value})]})}n.Z=(0,o.memo)((function(e){var n=(0,i.gh)(),t=(0,o.useCallback)((function(){return(0,r.jsx)(u,{value:e.value,header:e.header})}),[e.value,e.header]);return(0,r.jsx)(a.z,{type:l.C.plain,plainCardProps:{onRenderPlainCard:t},styles:{host:{cursor:"pointer",color:n.palette.neutralSecondary,textOverflow:"ellipsis",overflow:"hidden"}},instantOpenOnClick:!0,children:e.children})}),(function(e,n){return e.value===n.value&&e.children===n.children&&e.header===n.header}))},3054:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),o=t(9277),i=t(6921),a=t(7294),l=t(6486),s=t(2887),u=t(9599);function c(e){var n,t=(0,a.useState)(),c=t[0],d=t[1];return(0,r.jsxs)(u.Z,{title:e.title,isOpen:e.isOpen,onDismiss:e.onDismiss,footer:e.footer,children:[(0,r.jsxs)(o.K,{horizontal:!0,tokens:{childrenGap:10},styles:{root:{marginLeft:20,marginRight:20}},children:[(0,r.jsx)(i.a,{text:"other",primary:void 0===c,onClick:function(){d(void 0)}}),e.tabs.map((function(n){return(0,r.jsx)(i.a,{text:n,disabled:!e.value[n],primary:c===n,onClick:function(){d(n)}},n)}))]}),(0,r.jsx)("div",{style:{flex:1,margin:20,overflow:"scroll"},children:c&&(null===(n=e.onRenderTab)||void 0===n?void 0:n.call(e,c))||(0,r.jsx)(s.Z,{value:void 0===c?(0,l.omit)(e.value,e.tabs):e.value[c],style:{marginBottom:20}})})]})}},6146:function(e,n,t){"use strict";var r=t(5893),o=t(7294),i=t(1557),a=t(1244),l=t(6950);n.Z=(0,o.memo)((function(e){var n=(0,o.useMemo)((function(){return(0,i.Pz)(e.value)}),[e.value]),t=(0,a.Z)(n);return n.length>36?(0,r.jsx)(l.Z,{value:e.value,children:(0,r.jsx)("span",{style:{verticalAlign:"middle"},dangerouslySetInnerHTML:{__html:t}})}):(0,r.jsx)("span",{style:{verticalAlign:"middle"},dangerouslySetInnerHTML:{__html:t}})}),(function(e,n){return e.value===n.value}))},5502:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return te}});var r=t(5893),o=t(7294),i=t(1844),a=t(655),l=t(2719),s=t(229),u=t(9785),c=t(5395),d=t(7966),f=t(5037),p=(0,u.y)(),m="Toggle",g=o.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,i=e.ariaLabel,u=e.checked,g=e.className,v=e.defaultChecked,b=void 0!==v&&v,y=e.disabled,x=e.inlineLabel,k=e.label,C=e.offAriaLabel,j=e.offText,w=e.onAriaLabel,I=e.onChange,N=e.onChanged,O=e.onClick,S=e.onText,T=e.role,E=e.styles,H=e.theme,P=(0,l.G)(u,b,o.useCallback((function(e,n){null===I||void 0===I||I(e,n),null===N||void 0===N||N(n)}),[I,N])),Z=P[0],_=P[1],M=p(E,{theme:H,className:g,disabled:y,checked:Z,inlineLabel:x,onOffMissing:!S&&!j}),A=Z?w:C,L=(0,s.M)(m,e.id),B=L+"-label",R=L+"-stateText",z=Z?S:j,D=(0,c.pq)(e,c.Gg,["defaultChecked"]),$=void 0;i||A||(k&&($=B),z&&!$&&($=R));var q=o.useRef(null);(0,d.P)(q),h(e,Z,q);var F={root:{className:M.root,hidden:D.hidden},label:{children:k,className:M.label,htmlFor:L,id:B},container:{className:M.container},pill:(0,a.pi)((0,a.pi)({},D),{"aria-disabled":y,"aria-checked":Z,"aria-label":i||A,"aria-labelledby":$,className:M.pill,"data-is-focusable":!0,"data-ktp-target":!0,disabled:y,id:L,onClick:function(e){y||(_(!Z,e),O&&O(e))},ref:q,role:T||"switch",type:"button"}),thumb:{className:M.thumb},stateText:{children:z,className:M.text,htmlFor:L,id:R}};return o.createElement(r,(0,a.pi)({ref:n},F.root),k&&o.createElement(f._,(0,a.pi)({},F.label)),o.createElement("div",(0,a.pi)({},F.container),o.createElement("button",(0,a.pi)({},F.pill),o.createElement("span",(0,a.pi)({},F.thumb))),(Z&&S||j)&&o.createElement(f._,(0,a.pi)({},F.stateText))))}));g.displayName="ToggleBase";var h=function(e,n,t){o.useImperativeHandle(e.componentRef,(function(){return{get checked(){return!!n},focus:function(){t.current&&t.current.focus()}}}),[n,t])},v=t(9235),b=(0,i.z)(g,(function(e){var n,t,r,o,i,l,s,u=e.theme,c=e.className,d=e.disabled,f=e.checked,p=e.inlineLabel,m=e.onOffMissing,g=u.semanticColors,h=u.palette,b=g.bodyBackground,y=g.inputBackgroundChecked,x=g.inputBackgroundCheckedHovered,k=h.neutralDark,C=g.disabledBodySubtext,j=g.smallInputBorder,w=g.inputForegroundChecked,I=g.disabledBodySubtext,N=g.disabledBackground,O=g.smallInputBorder,S=g.inputBorderHovered,T=g.disabledBodySubtext,E=g.disabledText;return{root:["ms-Toggle",f&&"is-checked",!d&&"is-enabled",d&&"is-disabled",u.fonts.medium,{marginBottom:"8px"},p&&{display:"flex",alignItems:"center"},c],label:["ms-Toggle-label",{display:"inline-block"},d&&{color:E,selectors:(n={},n[v.qJ]={color:"GrayText"},n)},p&&!m&&{marginRight:16},m&&p&&{order:1,marginLeft:16},p&&{wordBreak:"break-word"}],container:["ms-Toggle-innerContainer",{display:"flex",position:"relative"}],pill:["ms-Toggle-background",(0,v.GL)(u,{inset:-3}),{fontSize:"20px",boxSizing:"border-box",width:40,height:20,borderRadius:10,transition:"all 0.1s ease",border:"1px solid "+O,background:b,cursor:"pointer",display:"flex",alignItems:"center",padding:"0 3px"},!d&&[!f&&{selectors:{":hover":[{borderColor:S}],":hover .ms-Toggle-thumb":[{backgroundColor:k,selectors:(t={},t[v.qJ]={borderColor:"Highlight"},t)}]}},f&&[{background:y,borderColor:"transparent",justifyContent:"flex-end"},{selectors:(r={":hover":[{backgroundColor:x,borderColor:"transparent",selectors:(o={},o[v.qJ]={backgroundColor:"Highlight"},o)}]},r[v.qJ]=(0,a.pi)({backgroundColor:"Highlight"},(0,v.xM)()),r)}]],d&&[{cursor:"default"},!f&&[{borderColor:T}],f&&[{backgroundColor:C,borderColor:"transparent",justifyContent:"flex-end"}]],!d&&{selectors:{"&:hover":{selectors:(i={},i[v.qJ]={borderColor:"Highlight"},i)}}}],thumb:["ms-Toggle-thumb",{display:"block",width:12,height:12,borderRadius:"50%",transition:"all 0.1s ease",backgroundColor:j,borderColor:"transparent",borderWidth:6,borderStyle:"solid",boxSizing:"border-box"},!d&&f&&[{backgroundColor:w,selectors:(l={},l[v.qJ]={backgroundColor:"Window",borderColor:"Window"},l)}],d&&[!f&&[{backgroundColor:I}],f&&[{backgroundColor:N}]]],text:["ms-Toggle-stateText",{selectors:{"&&":{padding:"0",margin:"0 8px",userSelect:"none",fontWeight:v.lq.regular}}},d&&{selectors:{"&&":{color:E,selectors:(s={},s[v.qJ]={color:"GrayText"},s)}}}]}}),void 0,{scope:"Toggle"}),y=t(9277),x=t(6921),k=t(6486),C=t(1043),j=t(2510),w=t(1397),I=t(4051),N=t.n(I),O=t(6009),S=t(1557),T=t(850),E=t(7860),H=t(9152),P=t(5332),Z=t(4323),_=t(3314),M=t(3203),A=t(6700),L=t(3234);function B(e){var n=(0,C.I0)(),t=(0,v.gh)(),i=(0,C.v9)((function(e){return e.operations.isMenuHidden}));return(0,o.useEffect)((function(){n(O.N.operations.setIsMenuHidden(!e.target))}),[n,e.target]),(0,r.jsx)(A.r,{target:e.target,directionalHint:L.b.rightTopEdge,hidden:i,onDismiss:function(){n(O.N.operations.setIsMenuHidden(!0))},items:[{key:"0",text:"View",iconProps:{iconName:"View"},onClick:function(){n(O.N.operations.setIsMenuHidden(!0)),n(O.N.operations.setIsEditorOpen(!0))}},{key:"1",text:"Kill",iconProps:{iconName:"StatusCircleBlock",styles:{root:{color:t.palette.red}}},onClick:function(){n(O.N.operations.setIsDialogHidden(!1))}}]})}var R=t(3054),z=t(6992),D=t(4061),$=t(6146),q=t(6361);function F(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function G(e,n,t,r,o,i,a){try{var l=e[i](a),s=l.value}catch(u){return void t(u)}l.done?n(s):Promise.resolve(s).then(r,o)}function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return F(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=(0,H.G)((0,k.compact)([["ns",100],["opid",100],["op",100],["ms",100],["planSummary",100],["msg",200],["client",100],["clientMetadata",200]]));function J(){var e,n=(0,w.Wb)(),t=n.data,i=n.error,a=n.mutate,l=K((0,Z.Z)(),2),s=l[0],u=s.conn,c=s.collection,d=l[1],f=(0,_.R)(u),p=(0,o.useState)(),m=p[0],g=p[1],h=(0,C.v9)((function(e){return e.operations.invokedOperation})),v=(0,C.v9)((function(e){return e.operations.host})),b=v?(0,P.U)(v,f):f,y=(0,C.v9)((function(e){return e.operations.isEditorOpen})),k=(0,C.v9)((function(e){return e.operations.isDialogHidden})),j=(0,C.I0)(),I=(0,o.useCallback)((e=N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h&&b?(0,E.f)(b,"admin",{killOp:1,op:h.opid}):null);case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){G(i,r,o,a,l,"next",e)}function l(e){G(i,r,o,a,l,"throw",e)}a(void 0)}))}),[b,h]),H=(0,T.Z)(I);(0,o.useEffect)((function(){H.resolved&&(j(O.N.operations.setIsEditorOpen(!1)),j(O.N.operations.setIsDialogHidden(!0)),a())}),[H.resolved,j,a]);var A=(0,o.useCallback)((function(e,n,t){var o,i=null===e||void 0===e?void 0:e[null===t||void 0===t?void 0:t.key];return(0,r.jsx)($.Z,{value:"ms"===(null===t||void 0===t?void 0:t.key)?Math.ceil(parseInt((null===(o=null===e||void 0===e?void 0:e.microsecs_running)||void 0===o?void 0:o.$numberLong)||"0",10)/1e3):i})}),[]),L=(0,o.useCallback)((function(e,n){var t;return(null===(t=e.opid)||void 0===t?void 0:t.$numberInt)||(0,S.Pz)(e)+n}),[]);return i?(0,r.jsx)(M.Z,{iconName:"Error",title:"Error",content:i.message}):t?0===t.inprog.length?(0,r.jsx)(M.Z,{iconName:"AnalyticsReport",title:"No Operation",button:c?(0,r.jsx)(x.a,{text:"View all operations",onClick:function(){d({conn:u})}}):null}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B,{target:m}),h?(0,r.jsx)(R.Z,{tabs:["cursor","command","originatingCommand","lockStats"],title:"View Operation: ".concat(h?(0,S.Pz)(h.opid):""),value:h,isOpen:y,onDismiss:function(){j(O.N.operations.setIsEditorOpen(!1))},footer:(0,r.jsx)(x.a,{text:"Kill",onClick:function(){j(O.N.operations.setIsDialogHidden(!1))}})}):null,(0,r.jsx)(q.Z,{hidden:k,title:"Kill Operation",subText:(0,S.Pz)(null===h||void 0===h?void 0:h.opid),onDismiss:function(){j(O.N.operations.setIsDialogHidden(!0))},footer:(0,r.jsx)(z.Z,{text:"Kill",promise:H})}),(0,r.jsx)(D.Z,{items:t.inprog,getKey:L,columns:W,onRenderItemColumn:A,onItemInvoked:function(e){e&&j(O.N.operations.setInvokedOperation(e)),j(O.N.operations.setIsEditorOpen(!0))},onItemContextMenu:function(e,n){null===e||void 0===e||e.preventDefault(),g(e),n&&j(O.N.operations.setInvokedOperation(n))}})]}):(0,r.jsx)(M.Z,{iconName:"HourGlass",title:"Loading"})}var V=t(6404),U=t(2406),Y=t(7534);function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ne={"Slow operations":{active:!0,microsecs_running:{$gte:1e5}},"Queries not using any index":{op:"query",planSummary:"COLLSCAN"},"Write operations":{$or:[{op:{$in:["insert","update","remove"]}},{"command.findandmodify":{$exists:!0}}]},"Waiting for a Lock":{waitingForLock:!0},"Operations with no yields":{numYields:0,waitingForLock:!1},"Operations with high yields num":{numYields:{$gte:100}},"Indexing operations":{$or:[{op:"command","command.createIndexes":{$exists:!0}},{op:"none",msg:{$regularExpression:{pattern:"^Index Build",options:""}}}]}};function te(){var e=ee((0,Z.Z)(),1)[0].database,n=(0,C.v9)((function(e){return e.operations.filter})),t=(0,C.v9)((function(e){return e.operations.refreshInterval})),i=(0,o.useState)(),a=i[0],l=i[1],s=(0,C.I0)(),u=(0,o.useMemo)((function(){if(e)return{$regex:{$regularExpression:{pattern:"".concat(e,".*"),options:""}}}}),[e]);(0,o.useEffect)((function(){s(O.N.operations.setNs(u))}),[u,s]);var c=(0,w.Wb)(),d=c.mutate,p=c.isValidating,m=(0,o.useMemo)((function(){return u?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){X(e,n,t[n])}))}return e}({},n,{ns:u}):(0,k.omit)(n,"ns")}),[u,n]),g=(0,C.v9)((function(e){return e.operations.host})),h=(0,o.useCallback)((function(e){s(O.N.operations.setHost(e))}),[s]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y.K,{wrap:!0,horizontal:!0,tokens:{childrenGap:10,padding:10},styles:{root:{marginBottom:-10},inner:{alignItems:"center"}},children:[(0,r.jsx)(f._,{style:{margin:5},children:"Suggested filters:"}),(0,k.map)(ne,(function(e,n){return(0,r.jsx)(x.a,{text:n,primary:a===n,onClick:function(){l(a===n?void 0:n),s(O.N.operations.setFilter(a!==n&&n?ne[n]:{}))}},n)}))]}),(0,r.jsxs)(y.K,{horizontal:!0,tokens:{childrenGap:10,padding:10},styles:{root:{height:52,alignItems:"center"}},children:[(0,r.jsx)(f._,{children:"Host:"}),(0,r.jsx)(U.Z,{style:{marginRight:10},host:g,setHost:h}),(0,r.jsx)(f._,{children:"Filter:"}),(0,r.jsx)(y.K.Item,{styles:{root:{marginRight:10}},grow:!0,children:(0,r.jsx)(j.Z,{value:m,onChange:function(e){l(void 0),s(O.N.operations.setFilter(e))}})}),(0,r.jsx)(b,{inlineLabel:!0,label:"Auto refresh:",onText:" ",offText:" ",styles:{label:{marginRight:10},root:{margin:0,display:"flex",alignItems:"center"}},checked:0!==t,onChange:function(e,n){s(O.N.operations.setRefreshInterval(n?1e3:0))}}),(0,r.jsx)(Y.Z,{isRefreshing:p,onRefresh:d})]}),(0,r.jsx)(V.Z,{}),(0,r.jsx)(J,{})]})}}},function(e){e.O(0,[300,583,833,738,774,888,179],(function(){return n=3355,e(e.s=n);var n}));var n=e.O();_N_E=n}]);