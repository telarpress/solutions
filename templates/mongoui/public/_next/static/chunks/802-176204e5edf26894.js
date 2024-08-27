"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{35046:function(e,t,r){r.d(t,{Q:function(){return h}});var a=r(97582),o=r(67294),n=r(36803),i=r(82709),l=r(39830),u=r(70161),c=r(96233),s=r(87975),d=r(72311),m=r(13204),b=(0,c.NF)(function(e,t,r,o){var n,i,l,c,b,h,g,v,p,f,w,k,C,x=(0,s.W)(e),y=(0,d.W)(e),L=e.palette,V=e.semanticColors,T={root:[(0,u.GL)(e,{inset:2,highContrastStyle:{left:4,top:4,bottom:4,right:4,border:"none"},borderColor:"transparent"}),e.fonts.medium,((n={minWidth:"40px",backgroundColor:L.white,color:L.neutralPrimary,padding:"0 4px",border:"none",borderRadius:0})[u.qJ]={border:"none"},n)],rootHovered:((i={backgroundColor:L.neutralLighter,color:L.neutralDark})[u.qJ]={color:"Highlight"},i[".".concat(m.n.msButtonIcon)]={color:L.themeDarkAlt},i[".".concat(m.n.msButtonMenuIcon)]={color:L.neutralPrimary},i),rootPressed:((l={backgroundColor:L.neutralLight,color:L.neutralDark})[".".concat(m.n.msButtonIcon)]={color:L.themeDark},l[".".concat(m.n.msButtonMenuIcon)]={color:L.neutralPrimary},l),rootChecked:((c={backgroundColor:L.neutralLight,color:L.neutralDark})[".".concat(m.n.msButtonIcon)]={color:L.themeDark},c[".".concat(m.n.msButtonMenuIcon)]={color:L.neutralPrimary},c),rootCheckedHovered:((b={backgroundColor:L.neutralQuaternaryAlt})[".".concat(m.n.msButtonIcon)]={color:L.themeDark},b[".".concat(m.n.msButtonMenuIcon)]={color:L.neutralPrimary},b),rootExpanded:((h={backgroundColor:L.neutralLight,color:L.neutralDark})[".".concat(m.n.msButtonIcon)]={color:L.themeDark},h[".".concat(m.n.msButtonMenuIcon)]={color:L.neutralPrimary},h),rootExpandedHovered:{backgroundColor:L.neutralQuaternaryAlt},rootDisabled:((g={backgroundColor:L.white})[".".concat(m.n.msButtonIcon)]=((v={color:V.disabledBodySubtext})[u.qJ]=(0,a.pi)({color:"GrayText"},(0,u.xM)()),v),g[u.qJ]=(0,a.pi)({color:"GrayText",backgroundColor:"Window"},(0,u.xM)()),g),splitButtonContainer:((p={height:"100%"})[u.qJ]={border:"none"},p),splitButtonDividerDisabled:((f={})[u.qJ]={backgroundColor:"Window"},f),splitButtonDivider:{backgroundColor:L.neutralTertiaryAlt},splitButtonMenuButton:{backgroundColor:L.white,border:"none",borderTopRightRadius:"0",borderBottomRightRadius:"0",color:L.neutralSecondary,":hover":((w={backgroundColor:L.neutralLighter,color:L.neutralDark})[u.qJ]={color:"Highlight"},w[".".concat(m.n.msButtonIcon)]={color:L.neutralPrimary},w),":active":((k={backgroundColor:L.neutralLight})[".".concat(m.n.msButtonIcon)]={color:L.neutralPrimary},k)},splitButtonMenuButtonDisabled:((C={backgroundColor:L.white})[u.qJ]=(0,a.pi)({color:"GrayText",border:"none",backgroundColor:"Window"},(0,u.xM)()),C),splitButtonMenuButtonChecked:{backgroundColor:L.neutralLight,color:L.neutralDark,":hover":{backgroundColor:L.neutralQuaternaryAlt}},splitButtonMenuButtonExpanded:{backgroundColor:L.neutralLight,color:L.black,":hover":{backgroundColor:L.neutralQuaternaryAlt}},splitButtonMenuIcon:{color:L.neutralPrimary},splitButtonMenuIconDisabled:{color:L.neutralTertiary},label:{fontWeight:"normal"},icon:{color:L.themePrimary},menuIcon:{color:L.neutralSecondary}};return(0,u.E$)(x,y,T,t)}),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.ZT)(t,e),t.prototype.render=function(){var e,t=(e=this.props).styles,r=e.theme;return o.createElement(n.Y,(0,a.pi)({},this.props,{variantClassName:"ms-Button--commandBar",styles:b(r,t),onRenderDescription:i.S}))},t=(0,a.gn)([(0,l.a)("CommandBarButton",["theme","styles"],!0)],t)}(o.Component)},92013:function(e,t,r){r.d(t,{i:function(){return B}});var a=r(61844),o=r(97582),n=r(67294),i=r(17966),l=r(55037),u=r(33765),c=r(42719),s=r(76856),d=r(40229),m=r(79785),b=r(59154),h=r(16986),g=r(82396),v=r(55236),p=r(55395),f=r(64318),w=(0,m.y)(),k=function(e){return function(t){var r;return(r={})[e]="".concat(t,"%"),r}},C=function(e,t,r){return r===t?0:(e-t)/(r-t)*100},x=function(e,t,r,a){n.useImperativeHandle(e.componentRef,function(){return{get value(){return r},get range(){return a},focus:function(){var e;null===(e=t.current)||void 0===e||e.focus()}}},[a,t,r])},y=function(e,t){var r=e.step,a=void 0===r?1:r,i=e.className,l=e.disabled,m=void 0!==l&&l,y=e.label,L=e.max,V=void 0===L?10:L,T=e.min,B=void 0===T?0:T,S=e.showValue,E=void 0===S||S,D=e.buttonProps,N=void 0===D?{}:D,R=e.vertical,_=void 0!==R&&R,M=e.snapToStep,I=e.valueFormat,P=e.styles,J=e.theme,q=e.originFromZero,A=e["aria-labelledby"],F=e.ariaLabel,z=void 0===F?e["aria-label"]:F,G=e.ranged,j=e.onChange,H=e.onChanged,W=n.useRef([]),O=(0,u.L)(),Y=O.setTimeout,K=O.clearTimeout,X=n.useRef(null),$=(0,f.xw)(),Q=(0,c.G)(e.value,e.defaultValue,function(e,t){return null==j?void 0:j(t,G?[en.latestLowerValue,t]:void 0,e)}),U=Q[0],Z=Q[1],ee=(0,c.G)(e.lowerValue,e.defaultLowerValue,function(e,t){return null==j?void 0:j(en.latestValue,[t,en.latestValue],e)}),et=ee[0],er=ee[1],ea=Math.max(B,Math.min(V,U||0)),eo=Math.max(B,Math.min(ea,et||0)),en=(0,s.B)({onKeyDownTimer:-1,isAdjustingLowerValue:!1,latestValue:ea,latestLowerValue:eo});en.latestValue=ea,en.latestLowerValue=eo;var ei=(0,d.M)("Slider",e.id||(null==N?void 0:N.id)),el=w(P,{className:i,disabled:m,vertical:_,showTransitions:!M&&!en.isBetweenSteps,showValue:E,ranged:G,theme:J}),eu=(V-B)/a,ec=function(){K(en.onKeyDownTimer),en.onKeyDownTimer=-1},es=function(e){ec(),H&&(en.onKeyDownTimer=Y(function(){H(e,en.latestValue,G?[en.latestLowerValue,en.latestValue]:void 0)},1e3))},ed=function(t){var r=e.ariaValueText;if(void 0!==t)return r?r(t):t.toString()},em=function(e,t,r){t=Math.min(V,Math.max(B,t)),r=void 0!==r?Math.min(V,Math.max(B,r)):void 0;var o=0;if(isFinite(a))for(;Math.round(a*Math.pow(10,o))/Math.pow(10,o)!==a;)o++;var n=parseFloat(t.toFixed(o));en.isBetweenSteps=void 0!==r&&r!==n,G?en.isAdjustingLowerValue&&(q?n<=0:n<=en.latestValue)?er(n,e):!en.isAdjustingLowerValue&&(q?n>=0:n>=en.latestLowerValue)&&Z(n,e):Z(n,e)},eb=function(e,t){var r=0;switch(e.type){case"mousedown":case"mousemove":r=t?e.clientY:e.clientX;break;case"touchstart":case"touchmove":r=t?e.touches[0].clientY:e.touches[0].clientX}return r},eh=function(t){var r,a=X.current.getBoundingClientRect(),o=(e.vertical?a.height:a.width)/eu;if(e.vertical){var n=eb(t,e.vertical);r=(a.bottom-n)/o}else{var i=eb(t,e.vertical);r=((0,b.zg)(e.theme)?a.right-i:i-a.left)/o}return r},eg=function(e,t){var r=eh(e),o=B+a*r;em(e,B+a*Math.round(r),o),t||(e.preventDefault(),e.stopPropagation())},ev=function(e){if(G){var t=B+a*eh(e);en.isAdjustingLowerValue=t<=en.latestLowerValue||t-en.latestLowerValue<=en.latestValue-t}"mousedown"===e.type?W.current.push((0,g.on)($,"mousemove",eg,!0),(0,g.on)($,"mouseup",ep,!0)):"touchstart"===e.type&&W.current.push((0,g.on)($,"touchmove",eg,!0),(0,g.on)($,"touchend",ep,!0)),eg(e,!0)},ep=function(e){en.isBetweenSteps=void 0,null==H||H(e,en.latestValue,G?[en.latestLowerValue,en.latestValue]:void 0),ef()},ef=n.useCallback(function(){W.current.forEach(function(e){return e()}),W.current=[]},[]);n.useEffect(function(){return ef},[ef]);var ew=n.useRef(null),ek=n.useRef(null),eC=n.useRef(null);x(e,eC,ea,G?[eo,ea]:void 0);var ex=k(_?"bottom":(0,b.zg)(e.theme)?"right":"left"),ey=k(_?"height":"width"),eL=q?0:B,eV=C(ea,B,V),eT=C(eo,B,V),eB=C(eL,B,V),eS=G?eV-eT:Math.abs(eB-eV),eE=G?eT:Math.min(eV,eB),eD={className:el.root,ref:t},eN={className:el.titleLabel,children:y,disabled:m,htmlFor:z?void 0:ei},eR=E?{className:el.valueLabel,children:I?I(ea):ea,disabled:m,htmlFor:m?ei:void 0}:void 0,e_=G&&E?{className:el.valueLabel,children:I?I(eo):eo,disabled:m}:void 0,eM=q?{className:el.zeroTick,style:ex(eB)}:void 0,eI={className:(0,v.i)(el.lineContainer,el.activeSection),style:ey(eS)},eP={className:(0,v.i)(el.lineContainer,el.inactiveSection),style:ey(Math.min(100-eV,100-eB))},eJ={className:(0,v.i)(el.lineContainer,el.inactiveSection),style:ey(eE)},eq=(0,o.pi)({"aria-disabled":m,role:"slider",tabIndex:m?void 0:0},{"data-is-focusable":!m}),eA=(0,o.pi)((0,o.pi)((0,o.pi)({id:ei,className:(0,v.i)(el.slideBox,N.className),ref:eC},!m&&{onMouseDown:ev,onTouchStart:ev,onKeyDown:function(t){var r=en.isAdjustingLowerValue?en.latestLowerValue:en.latestValue,o=0;switch(t.which){case(0,b.dP)(h.m.left,e.theme):case h.m.down:o=-a,ec(),es(t);break;case(0,b.dP)(h.m.right,e.theme):case h.m.up:o=a,ec(),es(t);break;case h.m.home:r=B,ec(),es(t);break;case h.m.end:r=V,ec(),es(t);break;default:return}em(t,r+o),t.preventDefault(),t.stopPropagation()}}),N&&(0,p.pq)(N,p.n7,["id","className"])),!G&&(0,o.pi)((0,o.pi)({},eq),{"aria-valuemin":B,"aria-valuemax":V,"aria-valuenow":ea,"aria-valuetext":ed(ea),"aria-label":z||y,"aria-labelledby":A})),eF=m?{}:{onFocus:function(e){en.isAdjustingLowerValue=e.target===ew.current}},ez=(0,o.pi)({ref:ek,className:el.thumb,style:ex(eV)},G&&(0,o.pi)((0,o.pi)((0,o.pi)({},eq),eF),{id:"max-".concat(ei),"aria-valuemin":eo,"aria-valuemax":V,"aria-valuenow":ea,"aria-valuetext":ed(ea),"aria-label":"max ".concat(z||y)})),eG=G?(0,o.pi)((0,o.pi)((0,o.pi)({ref:ew,className:el.thumb,style:ex(eT)},eq),eF),{id:"min-".concat(ei),"aria-valuemin":B,"aria-valuemax":ea,"aria-valuenow":eo,"aria-valuetext":ed(eo),"aria-label":"min ".concat(z||y)}):void 0;return{root:eD,label:eN,sliderBox:eA,container:{className:el.container},valueLabel:eR,lowerValueLabel:e_,thumb:ez,lowerValueThumb:eG,zeroTick:eM,activeTrack:eI,topInactiveTrack:eP,bottomInactiveTrack:eJ,sliderLine:{ref:X,className:el.line}}},L=n.forwardRef(function(e,t){var r=y(e,t);return n.createElement("div",(0,o.pi)({},r.root),r&&n.createElement(l._,(0,o.pi)({},r.label)),n.createElement("div",(0,o.pi)({},r.container),e.ranged&&(e.vertical?r.valueLabel&&n.createElement(l._,(0,o.pi)({},r.valueLabel)):r.lowerValueLabel&&n.createElement(l._,(0,o.pi)({},r.lowerValueLabel))),n.createElement("div",(0,o.pi)({},r.sliderBox),n.createElement("div",(0,o.pi)({},r.sliderLine),e.ranged&&n.createElement("span",(0,o.pi)({},r.lowerValueThumb)),n.createElement("span",(0,o.pi)({},r.thumb)),r.zeroTick&&n.createElement("span",(0,o.pi)({},r.zeroTick)),n.createElement("span",(0,o.pi)({},r.bottomInactiveTrack)),n.createElement("span",(0,o.pi)({},r.activeTrack)),n.createElement("span",(0,o.pi)({},r.topInactiveTrack)))),e.ranged&&e.vertical?r.lowerValueLabel&&n.createElement(l._,(0,o.pi)({},r.lowerValueLabel)):r.valueLabel&&n.createElement(l._,(0,o.pi)({},r.valueLabel))),n.createElement(i.u,null))});L.displayName="SliderBase";var V=r(70161),T={root:"ms-Slider",enabled:"ms-Slider-enabled",disabled:"ms-Slider-disabled",row:"ms-Slider-row",column:"ms-Slider-column",container:"ms-Slider-container",slideBox:"ms-Slider-slideBox",line:"ms-Slider-line",thumb:"ms-Slider-thumb",activeSection:"ms-Slider-active",inactiveSection:"ms-Slider-inactive",valueLabel:"ms-Slider-value",showValue:"ms-Slider-showValue",showTransitions:"ms-Slider-showTransitions",zeroTick:"ms-Slider-zeroTick"},B=(0,a.z)(L,function(e){var t,r,a,n,i,l,u,c,s,d,m,h,g,v=e.className,p=e.titleLabelClassName,f=e.theme,w=e.vertical,k=e.disabled,C=e.showTransitions,x=e.showValue,y=e.ranged,L=f.semanticColors,B=f.palette,S=(0,V.Cn)(T,f),E=L.inputBackgroundCheckedHovered,D=L.inputBackgroundChecked,N=B.neutralSecondaryAlt,R=B.neutralPrimary,_=B.neutralSecondaryAlt,M=L.disabledText,I=L.disabledBackground,P=L.inputBackground,J=L.smallInputBorder,q=L.disabledBorder,A=!k&&{backgroundColor:E,selectors:((t={})[V.qJ]={backgroundColor:"Highlight"},t)},F=!k&&{backgroundColor:N,selectors:((r={})[V.qJ]={borderColor:"Highlight"},r)},z=!k&&{backgroundColor:D,selectors:((a={})[V.qJ]={backgroundColor:"Highlight"},a)},G=!k&&{border:"2px solid ".concat(E),selectors:((n={})[V.qJ]={borderColor:"Highlight"},n)},j=!e.disabled&&{backgroundColor:L.inputPlaceholderBackgroundChecked,selectors:((i={})[V.qJ]={backgroundColor:"Highlight"},i)};return{root:(0,o.ev)((0,o.ev)((0,o.ev)((0,o.ev)((0,o.ev)([S.root,f.fonts.medium,{userSelect:"none"},w&&{marginRight:8}],[k?void 0:S.enabled],!1),[k?S.disabled:void 0],!1),[w?void 0:S.row],!1),[w?S.column:void 0],!1),[v],!1),titleLabel:[{padding:0},p],container:[S.container,{display:"flex",flexWrap:"nowrap",alignItems:"center"},w&&{flexDirection:"column",height:"100%",textAlign:"center",margin:"8px 0"}],slideBox:(0,o.ev)((0,o.ev)([S.slideBox,!y&&(0,V.GL)(f),{background:"transparent",border:"none",flexGrow:1,lineHeight:28,display:"flex",alignItems:"center",selectors:((l={})[":active .".concat(S.activeSection)]=A,l[":hover .".concat(S.activeSection)]=z,l[":active .".concat(S.inactiveSection)]=F,l[":hover .".concat(S.inactiveSection)]=F,l[":active .".concat(S.thumb)]=G,l[":hover .".concat(S.thumb)]=G,l[":active .".concat(S.zeroTick)]=j,l[":hover .".concat(S.zeroTick)]=j,l[V.qJ]={forcedColorAdjust:"none"},l)},w?{height:"100%",width:28,padding:"8px 0"}:{height:28,width:"auto",padding:"0 8px"}],[x?S.showValue:void 0],!1),[C?S.showTransitions:void 0],!1),thumb:[S.thumb,y&&(0,V.GL)(f,{inset:-4}),{borderWidth:2,borderStyle:"solid",borderColor:J,borderRadius:10,boxSizing:"border-box",background:P,display:"block",width:16,height:16,position:"absolute"},w?{left:-6,margin:"0 auto",transform:"translateY(8px)"}:{top:-6,transform:(0,b.zg)(f)?"translateX(50%)":"translateX(-50%)"},C&&{transition:"left ".concat(V.D1.durationValue3," ").concat(V.D1.easeFunction1)},k&&{borderColor:q,selectors:((u={})[V.qJ]={borderColor:"GrayText"},u)}],line:[S.line,{display:"flex",position:"relative"},w?{height:"100%",width:4,margin:"0 auto",flexDirection:"column-reverse"}:{width:"100%"}],lineContainer:[{borderRadius:4,boxSizing:"border-box"},w?{width:4,height:"100%"}:{height:4,width:"100%"}],activeSection:[S.activeSection,{background:R,selectors:((c={})[V.qJ]={backgroundColor:"WindowText"},c)},C&&{transition:"width ".concat(V.D1.durationValue3," ").concat(V.D1.easeFunction1)},k&&{background:M,selectors:((s={})[V.qJ]={backgroundColor:"GrayText",borderColor:"GrayText"},s)}],inactiveSection:[S.inactiveSection,{background:_,selectors:((d={})[V.qJ]={border:"1px solid WindowText"},d)},C&&{transition:"width ".concat(V.D1.durationValue3," ").concat(V.D1.easeFunction1)},k&&{background:I,selectors:((m={})[V.qJ]={borderColor:"GrayText"},m)}],zeroTick:[S.zeroTick,{position:"absolute",background:L.disabledBorder,selectors:((h={})[V.qJ]={backgroundColor:"WindowText"},h)},e.disabled&&{background:L.disabledBackground,selectors:((g={})[V.qJ]={backgroundColor:"GrayText"},g)},e.vertical?{width:"16px",height:"1px",transform:(0,b.zg)(f)?"translateX(6px)":"translateX(-6px)"}:{width:"1px",height:"16px",transform:"translateY(-6px)"}],valueLabel:[S.valueLabel,{flexShrink:1,width:30,lineHeight:"1"},w?{margin:"0 auto",whiteSpace:"nowrap",width:40}:{margin:"0 8px",whiteSpace:"nowrap",width:40}]}},void 0,{scope:"Slider"})},79830:function(e){/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */e.exports=function(e,t){return"string"==typeof e?i(e):"number"==typeof e?n(e,t):null},e.exports.format=n,e.exports.parse=i;var t=/\B(?=(\d{3})+(?!\d))/g,r=/(?:\.0*|(\.[^0]+)0+)$/,a={b:1,kb:1024,mb:1048576,gb:1073741824,tb:1099511627776,pb:0x4000000000000},o=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;function n(e,o){if(!Number.isFinite(e))return null;var n=Math.abs(e),i=o&&o.thousandsSeparator||"",l=o&&o.unitSeparator||"",u=o&&void 0!==o.decimalPlaces?o.decimalPlaces:2,c=!!(o&&o.fixedDecimals),s=o&&o.unit||"";s&&a[s.toLowerCase()]||(s=n>=a.pb?"PB":n>=a.tb?"TB":n>=a.gb?"GB":n>=a.mb?"MB":n>=a.kb?"KB":"B");var d=(e/a[s.toLowerCase()]).toFixed(u);return c||(d=d.replace(r,"$1")),i&&(d=d.split(".").map(function(e,r){return 0===r?e.replace(t,i):e}).join(".")),d+l+s}function i(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,r=o.exec(e),n="b";return(r?(t=parseFloat(r[1]),n=r[4].toLowerCase()):(t=parseInt(e,10),n="b"),isNaN(t))?null:Math.floor(a[n]*t)}},76607:function(e,t,r){r.d(t,{ZP:function(){return d}});var a=r(67294),o=r(61688),n=r(10046);let i=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),l={dedupe:!0};n.$l.defineProperty(n.J$,"defaultValue",{value:n.u_});let u=(0,n.s6)((e,t,r)=>{let{cache:u,compare:c,suspense:s,fallbackData:d,revalidateOnMount:m,revalidateIfStale:b,refreshInterval:h,refreshWhenHidden:g,refreshWhenOffline:v,keepPreviousData:p}=r,[f,w,k,C]=n.DY.get(u),[x,y]=(0,n.qC)(e),L=(0,a.useRef)(!1),V=(0,a.useRef)(!1),T=(0,a.useRef)(x),B=(0,a.useRef)(t),S=(0,a.useRef)(r),E=()=>S.current,D=()=>E().isVisible()&&E().isOnline(),[N,R,_,M]=(0,n.JN)(u,x),I=(0,a.useRef)({}).current,P=(0,n.o8)(d)?r.fallback[x]:d,J=(e,t)=>{for(let r in I)if("data"===r){if(!c(e[r],t[r])&&(!(0,n.o8)(e[r])||!c(O,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},q=(0,a.useMemo)(()=>{let e=!!x&&!!t&&((0,n.o8)(m)?!E().isPaused()&&!s&&(!!(0,n.o8)(b)||b):m),r=t=>{let r=(0,n.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},a=N(),o=M(),i=r(a),l=a===o?i:r(o),u=i;return[()=>{let e=r(N());return J(e,u)?(u.data=e.data,u.isLoading=e.isLoading,u.isValidating=e.isValidating,u.error=e.error,u):(u=e,e)},()=>l]},[u,x]),A=(0,o.useSyncExternalStore)((0,a.useCallback)(e=>_(x,(t,r)=>{J(r,t)||e()}),[u,x]),q[0],q[1]),F=!L.current,z=f[x]&&f[x].length>0,G=A.data,j=(0,n.o8)(G)?P:G,H=A.error,W=(0,a.useRef)(j),O=p?(0,n.o8)(G)?W.current:G:j,Y=(!z||!!(0,n.o8)(H))&&(F&&!(0,n.o8)(m)?m:!E().isPaused()&&(s?!(0,n.o8)(j)&&b:(0,n.o8)(j)||b)),K=!!(x&&t&&F&&Y),X=(0,n.o8)(A.isValidating)?K:A.isValidating,$=(0,n.o8)(A.isLoading)?K:A.isLoading,Q=(0,a.useCallback)(async e=>{let t,a;let o=B.current;if(!x||!o||V.current||E().isPaused())return!1;let i=!0,l=e||{},u=!k[x]||!l.dedupe,s=()=>n.w6?!V.current&&x===T.current&&L.current:x===T.current,d={isValidating:!1,isLoading:!1},m=()=>{R(d)},b=()=>{let e=k[x];e&&e[1]===a&&delete k[x]},h={isValidating:!0};(0,n.o8)(N().data)&&(h.isLoading=!0);try{if(u&&(R(h),r.loadingTimeout&&(0,n.o8)(N().data)&&setTimeout(()=>{i&&s()&&E().onLoadingSlow(x,r)},r.loadingTimeout),k[x]=[o(y),(0,n.u3)()]),[t,a]=k[x],t=await t,u&&setTimeout(b,r.dedupingInterval),!k[x]||k[x][1]!==a)return u&&s()&&E().onDiscarded(x),!1;d.error=n.i_;let e=w[x];if(!(0,n.o8)(e)&&(a<=e[0]||a<=e[1]||0===e[1]))return m(),u&&s()&&E().onDiscarded(x),!1;let l=N().data;d.data=c(l,t)?l:t,u&&s()&&E().onSuccess(t,x,r)}catch(r){b();let e=E(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,u&&s()&&(e.onError(r,x,e),(!0===t||(0,n.mf)(t)&&t(r))&&(!E().revalidateOnFocus||!E().revalidateOnReconnect||D())&&e.onErrorRetry(r,x,e,e=>{let t=f[x];t&&t[0]&&t[0](n.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return i=!1,m(),!0},[x,u]),U=(0,a.useCallback)((...e)=>(0,n.BN)(u,T.current,...e),[]);if((0,n.LI)(()=>{B.current=t,S.current=r,(0,n.o8)(G)||(W.current=G)}),(0,n.LI)(()=>{if(!x)return;let e=Q.bind(n.i_,l),t=0,r=(0,n.ko)(x,f,(r,a={})=>{if(r==n.sj.FOCUS_EVENT){let r=Date.now();E().revalidateOnFocus&&r>t&&D()&&(t=r+E().focusThrottleInterval,e())}else if(r==n.sj.RECONNECT_EVENT)E().revalidateOnReconnect&&D()&&e();else if(r==n.sj.MUTATE_EVENT)return Q();else if(r==n.sj.ERROR_REVALIDATE_EVENT)return Q(a)});return V.current=!1,T.current=x,L.current=!0,R({_k:y}),Y&&((0,n.o8)(j)||n.W6?e():(0,n.kw)(e)),()=>{V.current=!0,r()}},[x]),(0,n.LI)(()=>{let e;function t(){let t=(0,n.mf)(h)?h(N().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(g||E().isVisible())&&(v||E().isOnline())?Q(l).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,g,v,x]),(0,a.useDebugValue)(O),s&&(0,n.o8)(j)&&x){if(!n.w6&&n.W6)throw Error("Fallback data is required when using suspense in SSR.");B.current=t,S.current=r,V.current=!1;let e=C[x];if((0,n.o8)(e)||i(U(e)),(0,n.o8)(H)){let e=Q(l);(0,n.o8)(O)||(e.status="fulfilled",e.value=!0),i(e)}else throw H}return{mutate:U,get data(){return I.data=!0,O},get error(){return I.error=!0,H},get isValidating(){return I.isValidating=!0,X},get isLoading(){return I.isLoading=!0,$}}}),c=e=>(0,n.qC)(e?e(0,null):null)[0],s=Promise.resolve(),d=(0,n.xD)(u,e=>(t,r,i)=>{let l;let u=(0,a.useRef)(!1),{cache:d,initialSize:m=1,revalidateAll:b=!1,persistSize:h=!1,revalidateFirstPage:g=!0,revalidateOnMount:v=!1,parallel:p=!1}=i,[,,,f]=n.DY.get(n.Fs);try{(l=c(t))&&(l=n.UG+l)}catch(e){}let[w,k,C]=(0,n.JN)(d,l),x=(0,a.useCallback)(()=>(0,n.o8)(w()._l)?m:w()._l,[d,l,m]);(0,o.useSyncExternalStore)((0,a.useCallback)(e=>l?C(l,()=>{e()}):()=>{},[d,l]),x,x);let y=(0,a.useCallback)(()=>{let e=w()._l;return(0,n.o8)(e)?m:e},[l,m]),L=(0,a.useRef)(y());(0,n.LI)(()=>{if(!u.current){u.current=!0;return}l&&k({_l:h?L.current:y()})},[l,d]);let V=v&&!u.current,T=e(l,async e=>{let a=w()._i,o=w()._r;k({_r:n.i_});let l=[],u=y(),[c]=(0,n.JN)(d,e),s=c().data,m=[],h=null;for(let e=0;e<u;++e){let[u,c]=(0,n.qC)(t(e,p?null:h));if(!u)break;let[v,w]=(0,n.JN)(d,u),k=v().data,C=b||a||(0,n.o8)(k)||g&&!e&&!(0,n.o8)(s)||V||s&&!(0,n.o8)(s[e])&&!i.compare(s[e],k);if(r&&("function"==typeof o?o(k,c):C)){let t=async()=>{if(u in f){let e=f[u];delete f[u],k=await e}else k=await r(c);w({data:k,_k:c}),l[e]=k};p?m.push(t):await t()}else l[e]=k;p||(h=k)}return p&&await Promise.all(m.map(e=>e())),k({_i:n.i_}),l},i),B=(0,a.useCallback)(function(e,t){let r="boolean"==typeof t?{revalidate:t}:t||{},a=!1!==r.revalidate;return l?(a&&((0,n.o8)(e)?k({_i:!0,_r:r.revalidate}):k({_i:!1,_r:r.revalidate})),arguments.length?T.mutate(e,{...r,revalidate:a}):T.mutate()):s},[l,d]),S=(0,a.useCallback)(e=>{let r;if(!l)return s;let[,a]=(0,n.JN)(d,l);if((0,n.mf)(e)?r=e(y()):"number"==typeof e&&(r=e),"number"!=typeof r)return s;a({_l:r}),L.current=r;let o=[],[i]=(0,n.JN)(d,l),u=null;for(let e=0;e<r;++e){let[r]=(0,n.qC)(t(e,u)),[a]=(0,n.JN)(d,r),l=r?a().data:n.i_;if((0,n.o8)(l))return B(i().data);o.push(l),u=l}return B(o)},[l,d,B,y]);return{size:y(),setSize:S,mutate:B,get data(){return T.data},get error(){return T.error},get isValidating(){return T.isValidating},get isLoading(){return T.isLoading}}})}}]);