(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{6312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notebook",function(){return n(2079)}])},2887:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5893),o=n(7294),i=n(9235),a=n(1557),u=n(1244);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}function s(t){var e=(0,o.useMemo)((function(){return(0,a.Pz)(t.value,!0)}),[t.value]),n=(0,u.Z)(e),c=(0,i.gh)();return(0,r.jsx)("pre",{style:l({fontSize:12,margin:0,whiteSpace:"pre-wrap",wordBreak:"break-all",color:c.palette.neutralPrimary},t.style),dangerouslySetInnerHTML:{__html:n}})}},1244:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7294),o=n(2881),i=n(9604),a=n(6424),u=n(8100);function c(t){var e=(0,o.Z)(),n=(0,i.Ik)();return(0,r.useEffect)((function(){n&&n.editor.setTheme(e?"vs-dark":"vs")}),[e,n]),(0,u.ZP)(n?["colorize",n,t,a.t.tabSize.get]:null,(function(){return n.editor.colorize(t,"javascript",{tabSize:a.t.tabSize.get})})).data||t}},2079:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Dt}});var r=n(5893),o=n(7294),i=n(1043),a=n(9235),u=n(3583),c=n(7516),l=n(4051),s=n.n(l),f=n(9604),p=n(2110),d=n(7746),v=n(215),y=n(3234),m=n(3396),h=n(1898),b=n(5058),g=n.n(b),w=n(7121),x=n(6486),S=n(1557),O=n(7860),k=n(3834),j=n(9166),C=n(4847);function E(t,e){null!==t.id&&void 0!==t.id&&_(t.id,e,"function")}function I(t,e){_(t.id,e,"class")}function P(t,e){var n=t.kind,r=!0,o=!1,i=void 0;try{for(var a,u=t.declarations[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){N(a.value,e,n)}}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}}function N(t,e,n){var r=t.id;"Identifier"===r.type&&_(r,e,n),"ObjectPattern"===r.type&&A(r,e,n),"ArrayPattern"===r.type&&M(r,e,n)}function _(t,e,n){e[t.name]=n}function A(t,e,n){var r=!0,o=!1,i=void 0;try{for(var a,u=t.properties[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var c=a.value;"RestElement"===c.type&&T(c,e,n),"ObjectProperty"===c.type&&$(c,e,n)}}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}}function $(t,e,n){"Identifier"===t.value.type&&_(t.value,e,n),"ObjectPattern"===t.value.type&&A(t.value,e,n),"ArrayPattern"===t.value.type&&M(t.value,e,n),"AssignmentPattern"===t.value.type&&D(t.value,e,n)}function D(t,e,n){"Identifier"===t.left.type&&_(t.left,e,n),"ObjectPattern"===t.left.type&&A(t.left,e,n)}function T(t,e,n){"Identifier"===t.argument.type&&_(t.argument,e,n)}function M(t,e,n){var r=!0,o=!1,i=void 0;try{for(var a,u=t.elements[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var c=a.value;c&&("RestElement"===c.type&&T(c,e,n),"Identifier"===c.type&&_(c,e,n),"ObjectPattern"===c.type&&A(c,e,n),"AssignmentPattern"===c.type&&D(c,e,n))}}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){z(t,e,n[e])}))}return t}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return L(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){return"".concat(e.lexicalContextStoreVariableName,"['").concat(t,"'] = ").concat(t,";")}function R(t,e,n){var r="".concat(t," = ").concat(n.lexicalContextStoreVariableName,"['").concat(t,"'];");return"class"===e?"const ".concat(r):"function"===e?"".concat(r):"".concat(e," ").concat(r)}function K(t,e){var n=function(t){var e={},n=!0,r=!1,o=void 0;try{for(var i,a=t.program.body[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;"FunctionDeclaration"===u.type&&E(u,e),"ClassDeclaration"===u.type&&I(u,e),"VariableDeclaration"===u.type&&P(u,e)}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return e}(t);!function(t,e){var n=!0,r=!1,o=void 0;try{for(var i,a=Object.entries(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=B(i.value,2),c=u[0];if("function"!==u[1]&&"function"===t[c])throw new SyntaxError("Identifier '".concat(c,"' has already been declared"))}}catch(l){r=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}(e.lexicalContext,n);var r=(0,j.ZP)(t).code,o="",i=!0,a=!1,u=void 0;try{for(var c,l=Object.entries(e.lexicalContext)[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var s=B(c.value,2);o+=R(s[0],s[1],e)}}catch(m){a=!0,u=m}finally{try{i||null==l.return||l.return()}finally{if(a)throw u}}o+=r;var f=!0,p=!1,d=void 0;try{for(var v,y=Object.entries(n)[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){o+=F(B(v.value,1)[0],e)}}catch(m){p=!0,d=m}finally{try{f||null==y.return||y.return()}finally{if(p)throw d}}return{ast:(0,k.parse)(o,{allowAwaitOutsideFunction:!0}),lexicalContext:W({},e.lexicalContext,n)}}var Z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lexicalContext={},this.lastExpressionCallbackFunctionName=e.lastExpressionCallbackFunctionName,this.lexicalContextStoreVariableName=e.lexicalContextStoreVariableName}return t.prototype.preprocess=function(t){var e;t=function(t){return/^\s*\{/.test(t)&&/\}\s*$/.test(t)?"(".concat(t,")"):t}(t),t=";".concat(t),e=(0,k.parse)(t,{allowAwaitOutsideFunction:!0});var n=K(e=function(t,e){var n=C.ZP.statement("".concat(t,"(%%expression%%)")),r=e.program.body[e.program.body.length-1];switch(r&&r.type){case"ClassDeclaration":case"FunctionDeclaration":e.program.body.push(n({expression:r.id}));break;case"ExpressionStatement":e.program.body[e.program.body.length-1]=n({expression:r.expression});break;default:e.program.body.push(n({expression:null}))}return e}(this.lastExpressionCallbackFunctionName,e),{lexicalContext:this.lexicalContext,lexicalContextStoreVariableName:this.lexicalContextStoreVariableName}),r=n.ast,o=n.lexicalContext,i=function(t){return C.ZP.statement("(async () => { %%body%% })()")({body:t.program.body})}(e=r),a=(0,j.ZP)(i).code;return this.lexicalContext=o,a},t}();function U(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,o)}function V(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){U(i,r,o,a,u,"next",t)}function u(t){U(i,r,o,a,u,"throw",t)}a(void 0)}))}}function X(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function q(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,H(t,e,"get"))}function J(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function G(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,H(t,e,"set"),n),n}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Q(t,e,n[e])}))}return t}function tt(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var et=new WeakMap,nt=new WeakMap,rt=new WeakMap,ot=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};X(this,t),J(this,et,{writable:!0,value:void 0}),J(this,nt,{writable:!0,value:void 0}),J(this,rt,{writable:!0,value:void 0}),G(this,et,e),G(this,nt,n),G(this,rt,r)}var e=t.prototype;return e.explain=function(){var t=this;return V(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.f)(q(t,et),q(t,nt),{explain:q(t,rt)},{canonical:!0}));case 1:case"end":return e.stop()}}),e)})))()},e.toArray=function(){var t=this;return V(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.f)(q(t,et),q(t,nt),q(t,rt),{canonical:!0});case 2:return n=e.sent,r=n.cursor.firstBatch,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},t}(),it=new WeakMap,at=new WeakMap,ut=new WeakMap,ct=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};X(this,t),J(this,it,{writable:!0,value:void 0}),J(this,at,{writable:!0,value:void 0}),J(this,ut,{writable:!0,value:void 0}),G(this,it,e),G(this,at,n),G(this,ut,r)}var e=t.prototype;return e.skip=function(t){return q(this,ut).skip=t,this},e.limit=function(t){return q(this,ut).limit=t,this},e.sort=function(t){return q(this,ut).sort=t,this},e.hint=function(t){return q(this,ut).hint=t,this},e.project=function(t){return q(this,ut).projection=t,this},e.explain=function(){var t=this;return V(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.f)(q(t,it),q(t,at),{explain:q(t,ut)},{canonical:!0}));case 1:case"end":return e.stop()}}),e)})))()},e.toArray=function(){var t=this;return V(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.f)(q(t,it),q(t,at),q(t,ut),{canonical:!0});case 2:return n=e.sent,r=n.cursor.firstBatch,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},t}(),lt=new WeakMap,st=new WeakMap,ft=new WeakMap,pt=function(){function t(e,n,r){X(this,t),J(this,lt,{writable:!0,value:void 0}),J(this,st,{writable:!0,value:void 0}),J(this,ft,{writable:!0,value:void 0}),G(this,lt,e),G(this,st,n),G(this,ft,r)}var e=t.prototype;return e.aggregate=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new ot(q(this,lt),q(this,st),{aggregate:q(this,ft),pipeline:t,cursor:e.batchSize?{batchSize:e.batchSize}:{},allowDiskUse:e.allowDiskUse,maxTimeMS:e.maxTimeMS,hint:e.hint})},e.find=function(t){return new ct(q(this,lt),q(this,st),{find:q(this,ft),filter:t})},e.findOne=function(t){var e=this;return V(s().mark((function n(){var r,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,lt),q(e,st),{find:q(e,ft),filter:t,limit:1},{canonical:!0});case 2:return r=n.sent,o=r.cursor.firstBatch,n.abrupt("return",(null===o||void 0===o?void 0:o[0])||null);case 5:case"end":return n.stop()}}),n)})))()},e.insertOne=function(t){var e=this;return V(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,lt),q(e,st),{insert:q(e,ft),documents:[t]});case 2:return r=n.sent.n,n.abrupt("return",{insertedCount:r});case 4:case"end":return n.stop()}}),n)})))()},e.insertMany=function(t){var e=this;return V(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,lt),q(e,st),{insert:q(e,ft),documents:t});case 2:return r=n.sent.n,n.abrupt("return",{insertedCount:r});case 4:case"end":return n.stop()}}),n)})))()},e.updateOne=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this;return V(s().mark((function o(){var i,a,u,c,l,f;return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,O.f)(q(r,lt),q(r,st),{update:q(r,ft),updates:[{q:t,u:e,upsert:n.upsert,multi:!1}]},{canonical:!0});case 2:return i=o.sent,a=i.upserted,u=tt(i,["upserted"]),c=w.dF.parse(JSON.stringify(u)),l=c.n,f=c.nModified,o.abrupt("return",(0,x.omitBy)({matchedCount:l,modifiedCount:f,upsertedCount:(null===a||void 0===a?void 0:a.length)||0,upsertedId:null===a||void 0===a?void 0:a[0]._id},x.isNil));case 7:case"end":return o.stop()}}),o)})))()},e.updateMany=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this;return V(s().mark((function o(){var i,a,u,c,l,f,p;return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=3,(0,O.f)(q(r,lt),q(r,st),{update:q(r,ft),updates:[{q:t,u:e,upsert:n.upsert,multi:!0}]},{canonical:!0});case 3:return a=o.sent,u=a.upserted,c=tt(a,["upserted"]),l=w.dF.parse(JSON.stringify(c)),f=l.n,p=l.nModified,o.abrupt("return",(0,x.omitBy)({matchedCount:f,modifiedCount:p,upsertedCount:(null===u||void 0===u?void 0:u.length)||0,upsertedId:null===u||void 0===u||null===(i=u[0])||void 0===i?void 0:i._id},x.isNil));case 8:case"end":return o.stop()}}),o)})))()},e.deleteOne=function(t){var e=this;return V(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,lt),q(e,st),{delete:q(e,ft),deletes:[{q:t,limit:1}]});case 2:return r=n.sent.n,n.abrupt("return",{deletedCount:r});case 4:case"end":return n.stop()}}),n)})))()},e.deleteMany=function(t){var e=this;return V(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,lt),q(e,st),{delete:q(e,ft),deletes:[{q:t,limit:0}]});case 2:return r=n.sent.n,n.abrupt("return",{deletedCount:r});case 4:case"end":return n.stop()}}),n)})))()},e.estimatedDocumentCount=function(){var t=this;return V(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.f)(q(t,lt),q(t,st),{count:q(t,ft)});case 2:return n=e.sent.n,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},e.countDocuments=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;return V(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,lt),q(e,st),{count:q(e,ft),query:t});case 2:return r=n.sent.n,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()},e.listIndexes=function(){var t=this;return V(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.f)(q(t,lt),q(t,st),{listIndexes:q(t,ft)});case 2:return n=e.sent,r=n.cursor.firstBatch,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},t}(),dt=new WeakMap,vt=new WeakMap,yt=function(){function t(e,n){X(this,t),J(this,dt,{writable:!0,value:void 0}),J(this,vt,{writable:!0,value:void 0}),G(this,dt,e),G(this,vt,n)}var e=t.prototype;return e.createCollection=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this;return V(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,O.f)(q(n,dt),q(n,vt),Y({create:t},e));case 2:return r.abrupt("return",new pt(q(n,dt),q(n,vt),t));case 3:case"end":return r.stop()}}),r)})))()},e.dropDatabase=function(){var t=this;return V(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.f)(q(t,dt),q(t,vt),{dropDatabase:1});case 2:case"end":return e.stop()}}),e)})))()},e.dropCollection=function(t){var e=this;return V(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,O.f)(q(e,dt),q(e,vt),{drop:t});case 2:case"end":return n.stop()}}),n)})))()},e.renameCollection=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this;return V(s().mark((function o(){return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,O.f)(q(r,dt),q(r,vt),{renameCollection:t,to:e,dropTarget:n.dropTarget});case 2:case"end":return o.stop()}}),o)})))()},t}();function mt(t,e){return ht.apply(this,arguments)}function ht(){return(ht=V(s().mark((function t(e,n){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new Z({lastExpressionCallbackFunctionName:"__LAST_EXPRESSION_CALLBACK_FUNCTION_NAME__",lexicalContextStoreVariableName:"__LEXICAL_CONTEXT_STORE_VARIABLE_NAME__"}),t.abrupt("return",new Promise((function(t){var o=Y({},S.vH,{__LEXICAL_CONTEXT_STORE_VARIABLE_NAME__:{},__LAST_EXPRESSION_CALLBACK_FUNCTION_NAME__:t,db:new Proxy({},{get:function(t,n){return new Proxy(new yt(e,n),{get:function(t,r){return r in t?t[r]:new pt(e,n,r)}})}})});g()(r.preprocess(n),o)})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var bt=n(2881),gt=n(6009),wt=n(6424),xt=n(4323),St=n(3314),Ot=n(2887);function kt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jt(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,o)}function Ct(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){jt(i,r,o,a,u,"next",t)}function u(t){jt(i,r,o,a,u,"throw",t)}a(void 0)}))}}function Et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return kt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function It(t){var e=(0,bt.Z)(),n=(0,o.useRef)(),u=(0,o.useState)(),c=u[0],l=u[1],b=(0,o.useState)(),g=b[0],w=b[1],x=(0,a.gh)(),S=Et((0,xt.Z)(),1)[0].conn,O=(0,St.R)(S),k=(0,o.useState)(!1),j=k[0],C=k[1],E=(0,i.I0)(),I=(0,o.useCallback)((function(e){var r=e._result,o=e._error;n.current&&(r||o)&&(void 0!==t.index?E(gt.N.notebook.updateNotebook({index:t.index,value:n.current,result:r,error:o,ts:Date.now()})):(E(gt.N.notebook.appendNotebook({value:n.current,result:r,error:o,ts:Date.now()})),l(void 0),w(void 0),n.current=void 0))}),[E,t.index,n]),P=(0,o.useCallback)(function(){var t=Ct(s().mark((function t(e){var n,r,o,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O&&e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,C(!0),t.next=6,mt(O,e);case 6:n=t.sent,r="function"===typeof n?"Function ".concat(n.name):n,l(r),w(void 0),I({_result:r}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),a=t.t0,(null!=(u=Error)&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](a):a instanceof u)&&(l(void 0),i=(null===t.t0||void 0===t.t0||null===(o=t.t0.message)||void 0===o?void 0:o.startsWith("(CommandNotFound)"))?"Command Error: ".concat(e):t.t0.message,w(i),I({_error:i}));case 16:return t.prev=16,C(!1),t.finish(16);case 19:case"end":return t.stop()}var a,u}),t,null,[[2,13,16,19]])})));return function(e){return t.apply(this,arguments)}}(),[O,I]);(0,o.useEffect)((function(){n.current=t.value}),[t.value]),(0,o.useEffect)((function(){l(t.result)}),[t.result]),(0,o.useEffect)((function(){w(t.error)}),[t.error]);var N=(0,o.useCallback)((function(t){t.onKeyDown(function(){var e=Ct(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(3!==n.keyCode||!n.metaKey&&!n.ctrlKey){e.next=4;break}return n.stopPropagation(),e.next=4,P(t.getValue());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[P]),_=(0,o.useCallback)((function(t){n.current=t}),[]),A=(0,o.useMemo)((function(){return{tabSize:wt.t.tabSize.get,readOnly:j,lineDecorationsWidth:0,glyphMargin:!1,folding:!1,lineNumbers:"off",minimap:{enabled:!1},wordWrap:"on",contextmenu:!1,scrollbar:{verticalScrollbarSize:0,horizontalSliderSize:0}}}),[j]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.z,{styles:{root:{backgroundColor:e?"#1e1e1e":"#fffffe",margin:20,padding:10,childrenGap:0,maxWidth:"unset",minHeight:"unset"}},children:[(0,r.jsx)("div",{children:(0,r.jsx)(f.ZP,{height:90,language:"typescript",value:n.current,onChange:_,theme:e?"vs-dark":"vs",onMount:N,options:A})}),(0,r.jsxs)(d.k,{styles:{root:{display:"flex",justifyContent:"space-between"}},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(v.G,{content:"Run (\u2318+\u21b5)",directionalHint:y.b.bottomCenter,styles:{root:{display:"inline-block"}},children:(0,r.jsx)(m.h,{disabled:j,iconProps:{iconName:"Play"},onClick:function(){P(n.current)}})}),t.ts?(0,r.jsx)(h.x,{styles:{root:{color:x.palette.neutralSecondary}},children:new Date(t.ts).toLocaleString([],{hour12:!1})}):null]}),void 0!==t.index?(0,r.jsx)(m.h,{disabled:j,iconProps:{iconName:"Delete",styles:{root:{color:x.palette.red}}},onClick:function(){void 0!==t.index&&E(gt.N.notebook.removeNotebook(t.index))}}):null]})]}),g?(0,r.jsx)("pre",{style:{margin:20,marginTop:0,fontSize:12,whiteSpace:"pre-wrap",wordBreak:"break-all",overflow:"scroll",color:x.palette.red},children:g}):void 0!==c?(0,r.jsx)(Ot.Z,{value:c,style:{margin:20,marginTop:0}}):null]})}var Pt=n(1590);function Nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function At(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){_t(t,e,n[e])}))}return t}function $t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return Nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dt(){var t=$t((0,xt.Z)(),1)[0].conn,e=(0,i.v9)((function(t){return t.notebook.notebooks})),n=(0,i.v9)((function(t){return t.root.collectionsMap}));(0,Pt.l)(n);var l=(0,a.gh)(),s=(0,o.useCallback)((function(t,e){return(null===e||void 0===e?void 0:e(At({},t,{styles:At({},null===t||void 0===t?void 0:t.styles,{cell:{paddingTop:0,paddingBottom:0,backgroundColor:l.palette.neutralLighter,borderBottom:"1px solid ".concat(l.palette.neutralLight)}})})))||null}),[l]),f=(0,i.I0)();return(0,o.useEffect)((function(){f(gt.N.notebook.clearNotebook())}),[t,f]),(0,r.jsx)("div",{style:{overflowY:"scroll",backgroundColor:l.palette.neutralLighter},children:(0,r.jsx)(u.W,{styles:{contentWrapper:e.length?void 0:{height:0}},items:e,selectionMode:c.oW.none,compact:!0,isHeaderVisible:!1,columns:[{key:"",name:"Notebooks",minWidth:0}],cellStyleProps:{cellLeftPadding:0,cellRightPadding:0,cellExtraRightPadding:0},onRenderRow:s,onRenderItemColumn:It,onRenderDetailsFooter:function(){return(0,r.jsx)("div",{style:{marginBottom:"calc(100vh - 130px - 32px - 44px)"},children:(0,r.jsx)(It,{})})}})})}},1557:function(t,e,n){"use strict";n.d(e,{Pz:function(){return f},vH:function(){return p},Qc:function(){return d}});var r=n(5058),o=n.n(r),i=n(4736),a=n(6424);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t){var e=t.toString();return e.includes("-")||e.includes(" ")||e.includes(".")||/^\d/.test(e)?'"'.concat(t,'"'):t}var s=Array.from({length:a.t.tabSize.get}).map((function(){return" "})).join("");function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("string"===typeof t)return JSON.stringify(t);if("number"===typeof t)return t.toString();if("boolean"===typeof t)return"".concat(t);if(void 0===t)return"";if(null===t)return"null";if("$oid"in t)return'ObjectId("'.concat(t.$oid,'")');if("$date"in t&&"$numberLong"in t.$date)return a.t.timezoneOffset?'Date("'.concat((0,i.p)(parseInt(t.$date.$numberLong,10)),'")'):'ISODate("'.concat(new Date(parseInt(t.$date.$numberLong,10)).toISOString(),'")');if("$numberDecimal"in t)return'NumberDecimal("'.concat(t.$numberDecimal,'")');if("$numberDouble"in t)return t.$numberDouble;if("$numberInt"in t)return t.$numberInt;if("$numberLong"in t)return'NumberLong("'.concat(t.$numberLong,'")');if("$regularExpression"in t)return"/".concat(t.$regularExpression.pattern,"/").concat(t.$regularExpression.options||"");if("$timestamp"in t)return"Timestamp(".concat(t.$timestamp.t,", ").concat(t.$timestamp.i,")");if("$binary"in t)return"BinData(".concat(parseInt(t.$binary.subType,16),', "').concat(t.$binary.base64,'")');if("$minKey"in t&&1===t.$minKey)return"MinKey()";if("$maxKey"in t&&1===t.$maxKey)return"MaxKey()";if(Array.isArray(t)){if(!e)return"[".concat(t.map((function(t){return"".concat(f(t,e,n+a.t.tabSize.get))})).join(", "),"]");var r=Array.from({length:n}).map((function(){return" "})).join("");return t.length?"[\n".concat(t.map((function(t){return"".concat(s).concat(r).concat(f(t,e,n+a.t.tabSize.get))})).join(",\n"),"\n").concat(r,"]"):"[]"}var o=Object.entries(t);if(0===o.length)return"{}";if(!e)return"{ ".concat(o.map((function(t){var r=c(t,2),o=r[0],i=r[1];return"".concat(l(o),": ").concat(f(i,e,n+a.t.tabSize.get))})).join(", ")," }");var u=Array.from({length:n}).map((function(){return" "})).join("");return"{\n".concat(o.map((function(t){var r=c(t,2),o=r[0],i=r[1];return"".concat(s).concat(u).concat(l(o),": ").concat(f(i,e,n+a.t.tabSize.get))})).join(",\n"),"\n").concat(u,"}")}var p={SubType:{Generic:0,Function:1,Binary_old:2,UUID_old:3,UUID:4,MD5:5,Encrypted:6,UserDefined:128},ObjectId:function(t){return{$oid:t}},Date:function(t){return{$date:{$numberLong:void 0!==t?new Date(t).getTime().toString():(new Date).getTime().toString()}}},ISODate:function(t){return{$date:{$numberLong:void 0!==t?new Date(t).getTime().toString():(new Date).getTime().toString()}}},NumberDecimal:function(t){return{$numberDecimal:t.toString()}},NumberInt:function(t){return{$numberInt:t.toString()}},NumberLong:function(t){return{$numberLong:t.toString()}},Timestamp:function(t,e){return{$timestamp:{t:t,i:e}}},BinData:function(t,e){return{$binary:{base64:e,subType:t.toString(16)}}},MinKey:function(){return{$minKey:1}},MaxKey:function(){return{$maxKey:1}}};function d(t){return JSON.parse(JSON.stringify(o()(t,p),(function(t,e){return n=e,(null!=(r=RegExp)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r)?{$regularExpression:{pattern:e.source,options:e.flags}}:e;var n,r})))}},4736:function(t,e,n){"use strict";n.d(e,{u:function(){return l},p:function(){return s}});var r=n(7484),o=n.n(r),i=n(178),a=n.n(i),u=n(6424);o().extend(a());var c=Intl.NumberFormat();function l(t){return c.format(t)}function s(t){return 0===u.t.timezoneOffset.get?new Date(t).toISOString():o()(t).utcOffset(u.t.timezoneOffset.get).format()}}},function(t){t.O(0,[774,797,300,583,594,304,888,179],(function(){return e=6312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);