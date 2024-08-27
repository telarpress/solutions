(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{78304:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profiling",function(){return n(97741)}])},56410:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return j}});var s,o,a=n(85893),l=n(19277),r=n(55037),c=n(57318),u=n(67294),d=n(45007),m=n(70813),h=n(79989),f=n(26162),g=n(54927),p=n(56529),x=n(6558),v=n(64262),y=e([m,f,x]);function j(){let[{conn:e,database:t}]=(0,p.Z)(),n=(0,x.R)(e),i=(0,d.v9)(e=>e.profiling.host),s=i?(0,g.U)(i,n):n,[o,y]=(0,u.useState)(),{data:j,error:k,mutate:w,isValidating:Z}=(0,m.jJ)(),C=(0,u.useCallback)(async()=>t&&void 0!==o?(0,f.f)(s,t,{profile:o}):void 0,[s,t,o]),I=(0,h.Z)(C);return(0,u.useEffect)(()=>{I.resolved&&w()},[I.resolved,w]),(0,u.useEffect)(()=>{j&&y(j.was)},[j]),(0,a.jsxs)(l.K,{horizontal:!0,tokens:{childrenGap:10,padding:10},styles:{root:{height:52,alignItems:"center"}},children:[k?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r._,{children:"Profiling Level:"}),(0,a.jsx)(c.L,{selectedKey:o,onChange:(e,t)=>{y(null==t?void 0:t.key)},styles:{root:{width:80}},options:[{key:0,text:"Off"},{key:1,text:"Slow"},{key:2,text:"All"}]})]}),(0,a.jsx)(l.K.Item,{grow:!0,children:(0,a.jsx)("div",{})}),(0,a.jsx)(v.Z,{disabled:(null==j?void 0:j.was)===o||Z||!!k,icon:"CheckMark",promise:I})]})}[m,f,x]=y.then?(await y)():y,(s=o||(o={}))[s.OFF=0]="OFF",s[s.SLOW=1]="SLOW",s[s.ALL=2]="ALL",i()}catch(e){i(e)}})},43990:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return h}});var s=n(85893),o=n(19277),a=n(55037),l=n(67294),r=n(45007),c=n(41762),u=n(53163),d=n(19845),m=e([u,d]);function h(){let e=(0,r.v9)(e=>e.profiling.host),t=(0,r.I0)();(0,l.useEffect)(()=>{t(c.N.profiling.resetPage())},[e,t]);let n=(0,l.useCallback)(e=>{t(c.N.profiling.setHost(e))},[t]);return(0,s.jsxs)(o.K,{horizontal:!0,tokens:{childrenGap:10,padding:10},styles:{root:{height:52,alignItems:"center"}},children:[(0,s.jsx)(a._,{children:"Host:"}),(0,s.jsx)(d.Z,{host:e,setHost:n}),(0,s.jsx)(o.K.Item,{grow:!0,children:(0,s.jsx)("div",{})}),(0,s.jsx)(u.Z,{})]})}[u,d]=m.then?(await m)():m,i()}catch(e){i(e)}})},81250:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return y}});var s=n(85893),o=n(56700),a=n(53234),l=n(67294),r=n(45007),c=n(70813),u=n(41762),d=n(12142),m=n(56529),h=n(77752),f=n(87929),g=n(34152),p=n(24576),x=n(16109),v=e([c,x]);[c,x]=v.then?(await v)():v;let j=["op","millis","ts","keysExamined","docsExamined","nreturned","planSummary"];function y(){let{data:e,error:t}=(0,c.wh)(),[{collection:n}]=(0,m.Z)(),i=(0,r.v9)(e=>e.profiling.invokedProfiling),v=(0,r.v9)(e=>e.profiling.isEditorOpen),y=(0,r.v9)(e=>e.profiling.isMenuHidden),k=(0,r.I0)(),[w,Z]=(0,l.useState)(),C=(0,l.useCallback)((e,t)=>{null==e||e.preventDefault(),Z(e),t&&k(u.N.profiling.setInvokedProfiling(t)),k(u.N.profiling.setIsMenuHidden(!1))},[k]),I=(0,l.useCallback)(e=>{e&&k(u.N.profiling.setInvokedProfiling(e)),k(u.N.profiling.setIsEditorOpen(!0))},[k]),N=(0,l.useCallback)((e,t,n)=>(0,s.jsx)(g.Z,{value:null==e?void 0:e[null==n?void 0:n.key]}),[]),b=(0,l.useMemo)(()=>"system.profile"===n?["ns",...j]:j,[n]),S=(0,l.useMemo)(()=>e&&0!==e.cursor.firstBatch.length?(0,d.G)((0,d.Q)(e.cursor.firstBatch,b,!0)):[],[e,b]);return t?(0,s.jsx)(h.Z,{iconName:"Error",title:"Error",content:t.message}):e?0===e.cursor.firstBatch.length?(0,s.jsx)(h.Z,{iconName:"SpeedHigh",title:"No Profiling"}):(0,s.jsxs)(s.Fragment,{children:[i?(0,s.jsx)(p.Z,{tabs:["execStats","command","originatingCommand","locks"],title:"View Profile",value:i,isOpen:v,onRenderTab:e=>"execStats"===e?(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",alignItems:"center"},children:(0,s.jsx)(x.Z,{value:i.execStats})}):null,onDismiss:()=>{k(u.N.profiling.setIsEditorOpen(!1))}}):null,(0,s.jsx)(o.r,{target:w,hidden:y,directionalHint:a.b.rightTopEdge,onDismiss:()=>{k(u.N.profiling.setIsMenuHidden(!0))},items:[{key:"0",text:"View",iconProps:{iconName:"View"},onClick(){k(u.N.profiling.setIsMenuHidden(!0)),k(u.N.profiling.setIsEditorOpen(!0))}}]}),(0,s.jsx)(f.Z,{items:e.cursor.firstBatch,columns:S,onItemContextMenu:C,onItemInvoked:I,onRenderItemColumn:N})]}):(0,s.jsx)(h.Z,{iconName:"HourGlass",title:"Loading"})}i()}catch(e){i(e)}})},53163:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return d}});var s=n(85893),o=n(67294),a=n(45007),l=n(41762),r=n(70813),c=n(70472),u=e([r]);function d(){let e=(0,a.v9)(e=>e.profiling.skip),t=(0,a.v9)(e=>e.profiling.limit),{data:n,isValidating:i,mutate:u}=(0,r.UN)(),{isValidating:d,mutate:m}=(0,r.wh)(),h=(0,a.I0)(),f=(null==n?void 0:n.n)||0,g=(0,o.useCallback)(e=>{h(l.N.profiling.setLimit(e))},[h]),p=(0,o.useCallback)(()=>{h(l.N.profiling.prevPage())},[h]),x=(0,o.useCallback)(()=>{h(l.N.profiling.nextPage(f))},[h,f]),v=(0,o.useCallback)(()=>{u(),m()},[m,u]);return(0,s.jsx)(c.Z,{skip:e,limit:t,count:f,onLimit:g,onPrev:p,onNext:x,isValidating:d||i,mutate:v})}r=(u.then?(await u)():u)[0],i()}catch(e){i(e)}})},49492:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return k}});var s=n(85893),o=n(19277),a=n(55037),l=n(84620),r=n(92013),c=n(67294),u=n(45007),d=n(70813),m=n(79989),h=n(26162),f=n(54927),g=n(41762),p=n(56529),x=n(6558),v=n(64262),y=n(19845),j=e([d,h,x,y]);function k(){let[{conn:e}]=(0,p.Z)(),t=(0,x.R)(e),n=(0,u.v9)(e=>e.profiling.host),i=n?(0,f.U)(n,t):t,[j,k]=(0,c.useState)(0),[w,Z]=(0,c.useState)(0),{data:C,error:I,mutate:N,isValidating:b}=(0,d.jJ)(),S=(0,c.useCallback)(async()=>(0,h.f)(i,"admin",{profile:null==C?void 0:C.was,slowms:j,sampleRate:{$numberDouble:w.toString()}}),[i,C,j,w]),E=(0,m.Z)(S);(0,c.useEffect)(()=>{E.resolved&&N()},[E.resolved,N]),(0,c.useEffect)(()=>{C&&(k(C.slowms),Z(C.sampleRate))},[C]);let P=(0,u.I0)(),M=(0,c.useCallback)(e=>{P(g.N.profiling.setHost(e))},[P]);return(0,s.jsxs)(o.K,{horizontal:!0,tokens:{padding:10},styles:{root:{height:52,alignItems:"center"}},children:[(0,s.jsx)(a._,{styles:{root:{marginRight:10}},children:"Host:"}),(0,s.jsx)(y.Z,{style:{marginRight:20},host:n,setHost:M}),(0,s.jsx)(l.k,{label:"Slow ms:",styles:{spinButtonWrapper:{width:80},root:{width:"fit-content",marginRight:20}},value:j.toString(),onValidate:e=>{k(Math.max(parseInt(e,10),0))},onIncrement:e=>{k(Math.max(parseInt(e,10)+10,0))},onDecrement:e=>{k(Math.max(parseInt(e,10)-10,0))}}),(0,s.jsx)(a._,{children:"Sample rate:"}),(0,s.jsx)(r.i,{styles:{slideBox:{width:80}},min:0,max:1,step:.01,valueFormat:e=>"".concat(Math.round(100*e),"%"),value:w,onChange:Z,onChanged:(e,t)=>{Z(t)}}),(0,s.jsx)(o.K.Item,{grow:!0,children:(0,s.jsx)("div",{})}),(0,s.jsx)(v.Z,{disabled:(null==C?void 0:C.slowms)===j&&(null==C?void 0:C.sampleRate)===w||b||!!I,icon:"CheckMark",promise:E})]})}[d,h,x,y]=j.then?(await j)():j,i()}catch(e){i(e)}})},93985:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return I}});var s=n(85893),o=n(76607),a=n(67294),l=n(70161),r=n(19277),c=n(45007),u=n(26162),d=n(70813),m=n(12142),h=n(54927),f=n(49813),g=n(41762),p=n(56529),x=n(6558),v=n(87929),y=n(77752),j=n(34152),k=n(49492),w=n(8817),Z=n(49876),C=e([u,d,x,k]);[u,d,x,k]=C.then?(await C)():C;let N="database";function I(){let[{conn:e},t]=(0,p.Z)(),n=(0,x.R)(e),{data:i}=(0,d.IK)(),{data:C}=(0,d.Hj)(),I=(0,a.useCallback)(e=>{var t;let s=null==i?void 0:null===(t=i.databases[e])||void 0===t?void 0:t.name;return n&&s&&C?[n,s,...C.hosts||(0,h.s)(n)]:null},[n,i,C]),b=(0,a.useCallback)(async function(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];let o={[N]:t};for(let n of i){let{n:i}=await (0,u.f)((0,h.U)(n,e),t,{count:"system.profile",query:{}});o[n]=i}return o},[]),{data:S,isValidating:E,mutate:P}=(0,o.ZP)(I,b,{initialSize:null==i?void 0:i.databases.length,revalidateAll:!0}),M=(0,a.useMemo)(()=>{let e=((null==C?void 0:C.hosts)||(0,h.s)(n)).map(e=>[e,160]);return(0,m.G)([[N,0],...e])},[C,n]),H=(0,c.I0)(),F=(0,l.gh)(),L=(0,a.useCallback)((n,i)=>{H(g.N.root.setExpandedDatabases(n[N]?[n[N]]:[])),t({conn:e,database:n[N],collection:"system.profile"}),i&&H(g.N.profiling.setHost(i))},[e,H,t]),R=(0,a.useCallback)((e,t,n)=>e&&(null==n?void 0:n.key)?n.key===N?(0,s.jsx)(j.Z,{value:e[n.key]}):(0,s.jsx)("span",{style:{cursor:"pointer",color:F.palette.themePrimary},onClick:()=>{L(e,n.key)},children:(0,f.u)(e[n.key])}):null,[L,F.palette.themePrimary]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.K,{horizontal:!0,tokens:{padding:10},styles:{root:{height:52,alignItems:"center"}},children:[(0,s.jsx)(r.K.Item,{grow:!0,children:(0,s.jsx)("div",{})}),(0,s.jsx)(Z.Z,{isRefreshing:E,onRefresh:P})]}),(0,s.jsx)(w.Z,{}),S?(0,s.jsx)(v.Z,{items:S,columns:M,onRenderItemColumn:R,onItemInvoked:L}):(0,s.jsx)(y.Z,{iconName:"HourGlass",title:"Loading"}),(0,s.jsx)(w.Z,{}),(0,s.jsx)(k.Z,{})]})}i()}catch(e){i(e)}})},16109:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.d(t,{Z:function(){return k}});var s=n(85893),o=n(67294),a=n(70161),l=n(8521),r=n(46605),c=n(17638),u=n(52672),d=n(57557),m=n.n(d),h=n(39693),f=n.n(h),g=n(79830),p=n.n(g),x=n(29608),v=n(49813),y=n(30552),j=e([x]);function k(e){var t,n,i;let d=(0,a.gh)(),h=(0,o.useMemo)(()=>e.value?x.dF.parse(JSON.stringify(e.value)):void 0,[e.value]),g=(0,o.useCallback)(()=>(0,s.jsx)("div",{style:{padding:10,maxWidth:500,maxHeight:500,overflowY:"scroll",backgroundColor:d.palette.neutralLighter},children:(0,s.jsx)(y.Z,{value:m()(e.value,["inputStage","inputStages"])})}),[e.value,d.palette.neutralLighter]),j=(0,o.useMemo)(()=>({root:{color:d.palette.neutralPrimary,margin:8}}),[d]);return h&&e.value?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.z,{type:r.C.plain,plainCardProps:{onRenderPlainCard:g},styles:{host:{display:"inherit",cursor:"pointer"}},instantOpenOnClick:!0,children:(0,s.jsx)(c.W,{styles:{description:{whiteSpace:"pre",lineHeight:"1.2em"},label:{whiteSpace:"pre",lineHeight:"1.2em"},root:{paddingTop:10,paddingBottom:10,minHeight:"unset",height:"fit-content"}},secondaryText:f()(["".concat((0,v.u)(h.executionTimeMillisEstimate-((null===(t=h.inputStage)||void 0===t?void 0:t.executionTimeMillisEstimate)||Math.max((null===(n=h.inputStages)||void 0===n?void 0:n[0].executionTimeMillisEstimate)||0,(null===(i=h.inputStages)||void 0===i?void 0:i[1].executionTimeMillisEstimate)||0)||0))," ms"),void 0===h.keysExamined?void 0:"".concat((0,v.u)(h.keysExamined)," keys examined"),void 0===h.docsExamined?void 0:"".concat((0,v.u)(h.docsExamined)," docs examined"),void 0===h.nMatched?void 0:"".concat((0,v.u)(h.nMatched)," matched"),void 0===h.memUsage?void 0:"".concat(p()(h.memUsage,{unitSeparator:" "}).toLocaleLowerCase()," mem used"),"".concat((0,v.u)(h.nReturned)," returned")]).join("\n"),children:h.stage})}),e.value.inputStage?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.J,{iconName:"Forward",styles:j}),(0,s.jsx)(k,{value:e.value.inputStage})]}):null,e.value.inputStages?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.J,{iconName:"Forward",styles:j}),(0,s.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:e.value.inputStages.map((e,t)=>(0,s.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"row-reverse",marginTop:0===t?0:34},children:(0,s.jsx)(k,{value:e})},t.toString()))})]}):null]}):null}x=(j.then?(await j)():j)[0],i()}catch(e){i(e)}})},70472:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(85893),s=n(70161),o=n(19277),a=n(35046),l=n(78612),r=n(13396),c=n(49813),u=n(49876);function d(e){let t=(0,s.gh)();return(0,i.jsxs)(o.K,{horizontal:!0,styles:{root:{alignItems:"center"}},children:[(0,i.jsx)(a.Q,{text:e.count?"".concat(e.skip+1," ~ ").concat(Math.min(e.skip+e.limit,e.count)," of ").concat((0,c.u)(e.count)):"No Data",style:{height:32,color:t.palette.neutralPrimary},menuProps:{items:[{key:"0",itemType:l.n.Section,sectionProps:{title:"Page Size",items:[25,50,100].map((t,n)=>({key:n.toString(),text:t.toString(),checked:t===e.limit,canCheck:!0,onClick(){e.onLimit(t)}}))}}]},menuIconProps:{hidden:!0}}),(0,i.jsx)(r.h,{iconProps:{iconName:"Back"},disabled:e.skip<=0,onClick:e.onPrev}),(0,i.jsx)(r.h,{iconProps:{iconName:"Forward"},disabled:e.skip+e.limit>=e.count,onClick:e.onNext}),(0,i.jsx)(u.Z,{isRefreshing:e.isValidating,onRefresh:e.mutate})]})}},97741:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.r(t),n.d(t,{default:function(){return g}});var s=n(85893),o=n(67294),a=n(45007),l=n(41762),r=n(43990),c=n(81250),u=n(93985),d=n(56410),m=n(8817),h=n(56529),f=e([r,c,u,d]);function g(){let[{database:e,collection:t}]=(0,h.Z)(),n=(0,a.I0)();return((0,o.useEffect)(()=>{n(l.N.profiling.setFilter(t&&"system.profile"!==t?{ns:"".concat(e,".").concat(t)}:{}))},[e,t,n]),(0,o.useEffect)(()=>{n(l.N.profiling.resetPage())},[e,t,n]),e&&t)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(m.Z,{}),(0,s.jsx)(c.Z,{}),(0,s.jsx)(m.Z,{}),(0,s.jsx)(d.Z,{})]}):(0,s.jsx)(u.Z,{})}[r,c,u,d]=f.then?(await f)():f,i()}catch(e){i(e)}})}},function(e){e.O(0,[300,295,345,557,318,620,802,712,888,774,179],function(){return e(e.s=78304)}),_N_E=e.O()}]);