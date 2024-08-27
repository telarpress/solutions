"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{35046:function(t,e,r){r.d(e,{Q:function(){return p}});var o=r(97582),n=r(67294),i=r(36803),s=r(82709),l=r(39830),a=r(70161),u=r(96233),c=r(87975),d=r(72311),f=r(13204),h=(0,u.NF)(function(t,e,r,n){var i,s,l,u,h,p,m,g,b,y,v,_,k,I=(0,c.W)(t),q=(0,d.W)(t),C=t.palette,O=t.semanticColors,B={root:[(0,a.GL)(t,{inset:2,highContrastStyle:{left:4,top:4,bottom:4,right:4,border:"none"},borderColor:"transparent"}),t.fonts.medium,((i={minWidth:"40px",backgroundColor:C.white,color:C.neutralPrimary,padding:"0 4px",border:"none",borderRadius:0})[a.qJ]={border:"none"},i)],rootHovered:((s={backgroundColor:C.neutralLighter,color:C.neutralDark})[a.qJ]={color:"Highlight"},s[".".concat(f.n.msButtonIcon)]={color:C.themeDarkAlt},s[".".concat(f.n.msButtonMenuIcon)]={color:C.neutralPrimary},s),rootPressed:((l={backgroundColor:C.neutralLight,color:C.neutralDark})[".".concat(f.n.msButtonIcon)]={color:C.themeDark},l[".".concat(f.n.msButtonMenuIcon)]={color:C.neutralPrimary},l),rootChecked:((u={backgroundColor:C.neutralLight,color:C.neutralDark})[".".concat(f.n.msButtonIcon)]={color:C.themeDark},u[".".concat(f.n.msButtonMenuIcon)]={color:C.neutralPrimary},u),rootCheckedHovered:((h={backgroundColor:C.neutralQuaternaryAlt})[".".concat(f.n.msButtonIcon)]={color:C.themeDark},h[".".concat(f.n.msButtonMenuIcon)]={color:C.neutralPrimary},h),rootExpanded:((p={backgroundColor:C.neutralLight,color:C.neutralDark})[".".concat(f.n.msButtonIcon)]={color:C.themeDark},p[".".concat(f.n.msButtonMenuIcon)]={color:C.neutralPrimary},p),rootExpandedHovered:{backgroundColor:C.neutralQuaternaryAlt},rootDisabled:((m={backgroundColor:C.white})[".".concat(f.n.msButtonIcon)]=((g={color:O.disabledBodySubtext})[a.qJ]=(0,o.pi)({color:"GrayText"},(0,a.xM)()),g),m[a.qJ]=(0,o.pi)({color:"GrayText",backgroundColor:"Window"},(0,a.xM)()),m),splitButtonContainer:((b={height:"100%"})[a.qJ]={border:"none"},b),splitButtonDividerDisabled:((y={})[a.qJ]={backgroundColor:"Window"},y),splitButtonDivider:{backgroundColor:C.neutralTertiaryAlt},splitButtonMenuButton:{backgroundColor:C.white,border:"none",borderTopRightRadius:"0",borderBottomRightRadius:"0",color:C.neutralSecondary,":hover":((v={backgroundColor:C.neutralLighter,color:C.neutralDark})[a.qJ]={color:"Highlight"},v[".".concat(f.n.msButtonIcon)]={color:C.neutralPrimary},v),":active":((_={backgroundColor:C.neutralLight})[".".concat(f.n.msButtonIcon)]={color:C.neutralPrimary},_)},splitButtonMenuButtonDisabled:((k={backgroundColor:C.white})[a.qJ]=(0,o.pi)({color:"GrayText",border:"none",backgroundColor:"Window"},(0,a.xM)()),k),splitButtonMenuButtonChecked:{backgroundColor:C.neutralLight,color:C.neutralDark,":hover":{backgroundColor:C.neutralQuaternaryAlt}},splitButtonMenuButtonExpanded:{backgroundColor:C.neutralLight,color:C.black,":hover":{backgroundColor:C.neutralQuaternaryAlt}},splitButtonMenuIcon:{color:C.neutralPrimary},splitButtonMenuIconDisabled:{color:C.neutralTertiary},label:{fontWeight:"normal"},icon:{color:C.themePrimary},menuIcon:{color:C.neutralSecondary}};return(0,a.E$)(I,q,B,e)}),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.render=function(){var t,e=(t=this.props).styles,r=t.theme;return n.createElement(i.Y,(0,o.pi)({},this.props,{variantClassName:"ms-Button--commandBar",styles:h(r,e),onRenderDescription:s.S}))},e=(0,o.gn)([(0,l.a)("CommandBarButton",["theme","styles"],!0)],e)}(n.Component)},94495:function(t,e,r){r.d(e,{Pz:function(){return k}});var o=r(79681),n=r(21876).Buffer;class i extends Error{constructor(t,e,...r){for(let o of(Array.isArray(e)&&(e=e.join(" ")),super(e),void 0!==Error.captureStackTrace&&Error.captureStackTrace(this,i),this.code=t,r))for(let t in o){let e=o[t];this[t]=n.isBuffer(e)?e.toString():null==e?e:JSON.parse(JSON.stringify(e))}}}let s=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)},l=/\\(\\)?/g,a=RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))","g"),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,d=function(t){let e=typeof t;return"symbol"===e||"object"===e&&t&&"[object Symbol]"===Object.prototype.toString.call(t)},f=function(t,e){if(Array.isArray(t))return!1;let r=typeof t;return!!("number"===r||"symbol"===r||"boolean"===r||!t||d(t))||c.test(t)||!u.test(t)||null!=e&&t in Object(e)},h=function(t){let e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,function(t,r,o,n){let i=t;o?i=n.replace(l,"$1"):r&&(i=r.trim()),e.push(i)}),e},p=function(t){if("string"==typeof t||d(t))return t;let e=`${t}`;return"0"==e&&1/t==-INFINITY?"-0":e},m=function(t,e){var r,o;r=e,o=t;let n=0,i=(e=Array.isArray(r)?r:f(r,o)?[r]:h(r)).length;for(;null!=t&&n<i;)t=t[p(e[n++])];return n&&n===i?t:void 0},g=function(t){if(null==t)return[void 0,void 0];if("object"!=typeof t)return[Error('Invalid option "columns": expect an array or an object')];if(Array.isArray(t)){let e=[];for(let r of t)if("string"==typeof r)e.push({key:r,header:r});else{if("object"!=typeof r||null===r||Array.isArray(r))return[Error("Invalid column definition: expect a string or an object")];if(!r.key)return[Error('Invalid column definition: property "key" is required')];void 0===r.header&&(r.header=r.key),e.push(r)}t=e}else{let e=[];for(let r in t)e.push({key:r,header:t[r]});t=e}return[void 0,t]};var b=r(21876).Buffer;let y=function(t){let e={};for(let r in t)e[r.replace(/([A-Z])/g,function(t,e){return"_"+e.toLowerCase()})]=t[r];if(void 0===e.bom||null===e.bom||!1===e.bom)e.bom=!1;else if(!0!==e.bom)return[new i("CSV_OPTION_BOOLEAN_INVALID_TYPE",["option `bom` is optional and must be a boolean value,",`got ${JSON.stringify(e.bom)}`])];if(void 0===e.delimiter||null===e.delimiter)e.delimiter=",";else if(b.isBuffer(e.delimiter))e.delimiter=e.delimiter.toString();else if("string"!=typeof e.delimiter)return[new i("CSV_OPTION_DELIMITER_INVALID_TYPE",["option `delimiter` must be a buffer or a string,",`got ${JSON.stringify(e.delimiter)}`])];if(void 0===e.quote||null===e.quote)e.quote='"';else if(!0===e.quote)e.quote='"';else if(!1===e.quote)e.quote="";else if(b.isBuffer(e.quote))e.quote=e.quote.toString();else if("string"!=typeof e.quote)return[new i("CSV_OPTION_QUOTE_INVALID_TYPE",["option `quote` must be a boolean, a buffer or a string,",`got ${JSON.stringify(e.quote)}`])];if((void 0===e.quoted||null===e.quoted)&&(e.quoted=!1),void 0===e.escape_formulas||null===e.escape_formulas)e.escape_formulas=!1;else if("boolean"!=typeof e.escape_formulas)return[new i("CSV_OPTION_ESCAPE_FORMULAS_INVALID_TYPE",["option `escape_formulas` must be a boolean,",`got ${JSON.stringify(e.escape_formulas)}`])];if((void 0===e.quoted_empty||null===e.quoted_empty)&&(e.quoted_empty=void 0),void 0===e.quoted_match||null===e.quoted_match||!1===e.quoted_match?e.quoted_match=null:Array.isArray(e.quoted_match)||(e.quoted_match=[e.quoted_match]),e.quoted_match)for(let t of e.quoted_match){let e="string"==typeof t,r=t instanceof RegExp;if(!e&&!r)return[Error(`Invalid Option: quoted_match must be a string or a regex, got ${JSON.stringify(t)}`)]}if((void 0===e.quoted_string||null===e.quoted_string)&&(e.quoted_string=!1),(void 0===e.eof||null===e.eof)&&(e.eof=!0),void 0===e.escape||null===e.escape)e.escape='"';else if(b.isBuffer(e.escape))e.escape=e.escape.toString();else if("string"!=typeof e.escape)return[Error(`Invalid Option: escape must be a buffer or a string, got ${JSON.stringify(e.escape)}`)];if(e.escape.length>1)return[Error(`Invalid Option: escape must be one character, got ${e.escape.length} characters`)];(void 0===e.header||null===e.header)&&(e.header=!1);let[r,o]=g(e.columns);if(void 0!==r)return[r];if(e.columns=o,(void 0===e.quoted||null===e.quoted)&&(e.quoted=!1),(void 0===e.cast||null===e.cast)&&(e.cast={}),(void 0===e.cast.bigint||null===e.cast.bigint)&&(e.cast.bigint=t=>""+t),(void 0===e.cast.boolean||null===e.cast.boolean)&&(e.cast.boolean=t=>t?"1":""),(void 0===e.cast.date||null===e.cast.date)&&(e.cast.date=t=>""+t.getTime()),(void 0===e.cast.number||null===e.cast.number)&&(e.cast.number=t=>""+t),(void 0===e.cast.object||null===e.cast.object)&&(e.cast.object=t=>JSON.stringify(t)),(void 0===e.cast.string||null===e.cast.string)&&(e.cast.string=function(t){return t}),void 0!==e.on_record&&"function"!=typeof e.on_record)return[Error('Invalid Option: "on_record" must be a function.')];if(void 0===e.record_delimiter||null===e.record_delimiter)e.record_delimiter="\n";else if(b.isBuffer(e.record_delimiter))e.record_delimiter=e.record_delimiter.toString();else if("string"!=typeof e.record_delimiter)return[Error(`Invalid Option: record_delimiter must be a buffer or a string, got ${JSON.stringify(e.record_delimiter)}`)];switch(e.record_delimiter){case"unix":e.record_delimiter="\n";break;case"mac":e.record_delimiter="\r";break;case"windows":e.record_delimiter="\r\n";break;case"ascii":e.record_delimiter="\x1e";break;case"unicode":e.record_delimiter="\u2028"}return[void 0,e]},v=r(21876).Buffer.from([239,187,191]);class _ extends o.Transform{constructor(t={}){super({writableObjectMode:!0,...t});let[e,r]=y(t);if(void 0!==e)throw e;this.options=r,this.state={stop:!1},this.info={records:0},this.api={options:this.options,state:this.state,info:this.info,__transform:function(t,e){let r,o;if(!Array.isArray(t)&&"object"!=typeof t)return Error(`Invalid Record: expect an array or an object, got ${JSON.stringify(t)}`);if(0===this.info.records){if(Array.isArray(t)){if(!0===this.options.header&&void 0===this.options.columns)return Error("Undiscoverable Columns: header option requires column option or object records")}else if(void 0===this.options.columns){let[e,r]=g(Object.keys(t));if(e)return;this.options.columns=r}}if(0===this.info.records){this.bom(e);let t=this.headers(e);if(t)return t}try{this.options.on_record&&this.options.on_record(t,this.info.records)}catch(t){return t}if(this.options.eof){if([r,o]=this.stringify(t),r)return r;if(void 0===o)return;o+=this.options.record_delimiter}else{if([r,o]=this.stringify(t),r)return r;if(void 0===o)return;(this.options.header||this.info.records)&&(o=this.options.record_delimiter+o)}this.info.records++,e(o)},stringify:function(t,e=!1){if("object"!=typeof t)return[void 0,t];let{columns:r}=this.options,o=[];if(Array.isArray(t)){r&&t.splice(r.length);for(let r=0;r<t.length;r++){let n=t[r],[i,s]=this.__cast(n,{index:r,column:r,records:this.info.records,header:e});if(i)return[i];o[r]=[s,n]}}else for(let n=0;n<r.length;n++){let i=m(t,r[n].key),[s,l]=this.__cast(i,{index:n,column:r[n].key,records:this.info.records,header:e});if(s)return[s];o[n]=[l,i]}let n="";for(let t=0;t<o.length;t++){let e,r;let[i,l]=o[t];if("string"==typeof i)e=this.options;else if(s(i)){if(i=(e=i).value,delete e.value,"string"!=typeof i&&null!=i&&r)return[Error(`Invalid Casting Value: returned value must return a string, null or undefined, got ${JSON.stringify(i)}`)];if(e={...this.options,...e},[r,e]=y(e),void 0!==r)return[r]}else{if(null!=i)return[Error(`Invalid Casting Value: returned value must return a string, an object, null or undefined, got ${JSON.stringify(i)}`)];e=this.options}let{delimiter:a,escape:u,quote:c,quoted:d,quoted_empty:f,quoted_string:h,quoted_match:p,record_delimiter:m,escape_formulas:g}=e;if(""===i&&""===l){let t=p&&p.filter(t=>"string"==typeof t?-1!==i.indexOf(t):t.test(i));!0===((t=t&&t.length>0)||!0===f||!0===h&&!1!==f)&&(i=c+i+c),n+=i}else if(i){if("string"!=typeof i)return[Error(`Formatter must return a string, null or undefined, got ${JSON.stringify(i)}`)];let t=a.length&&i.indexOf(a)>=0,e=""!==c&&i.indexOf(c)>=0,r=i.indexOf(u)>=0&&u!==c,o=i.indexOf(m)>=0,s=h&&"string"==typeof l,f=p&&p.filter(t=>"string"==typeof t?-1!==i.indexOf(t):t.test(i));if(f=f&&f.length>0,g)switch(i[0]){case"=":case"+":case"-":case"@":case"	":case"\r":case"＝":case"＋":case"－":case"＠":i=`'${i}`}let b=!0===e||t||o||d||s||f;if(!0===b&&!0===r){let t="\\"===u?RegExp(u+u,"g"):RegExp(u,"g");i=i.replace(t,u+u)}if(!0===e){let t=RegExp(c,"g");i=i.replace(t,u+c)}!0===b&&(i=c+i+c),n+=i}else(!0===f||""===l&&!0===h&&!1!==f)&&(n+=c+c);t!==o.length-1&&(n+=a)}return[void 0,n]},bom:function(t){!0===this.options.bom&&t(v)},headers:function(t){let e;if(!1===this.options.header||void 0===this.options.columns)return;let r=this.options.columns.map(t=>t.header);if(this.options.eof?([e,r]=this.stringify(r,!0),r+=this.options.record_delimiter):[e,r]=this.stringify(r),e)return e;t(r)},__cast:function(t,e){let r=typeof t;try{if("string"===r)return[void 0,this.options.cast.string(t,e)];if("bigint"===r)return[void 0,this.options.cast.bigint(t,e)];if("number"===r)return[void 0,this.options.cast.number(t,e)];if("boolean"===r)return[void 0,this.options.cast.boolean(t,e)];else if(t instanceof Date)return[void 0,this.options.cast.date(t,e)];else if("object"===r&&null!==t)return[void 0,this.options.cast.object(t,e)];else return[void 0,t,t]}catch(t){return[t]}}},this.api.options.on_record=(...t)=>{this.emit("record",...t)}}_transform(t,e,r){if(!0===this.state.stop)return;let o=this.api.__transform(t,this.push.bind(this));void 0!==o&&(this.state.stop=!0),r(o)}_flush(t){if(!0!==this.state.stop){if(0===this.info.records){this.api.bom(this.push.bind(this));let e=this.api.headers(this.push.bind(this));e&&t(e)}t()}}}let k=function(){let t,e,r;for(let o in arguments){let n=arguments[o],l=typeof n;if(void 0===t&&Array.isArray(n))t=n;else if(void 0===e&&s(n))e=n;else if(void 0===r&&"function"===l)r=n;else throw new i("CSV_INVALID_ARGUMENT",["Invalid argument:",`got ${JSON.stringify(n)} at index ${o}`])}let o=new _(e);if(r){let t=[];o.on("readable",function(){let e;for(;null!==(e=this.read());)t.push(e)}),o.on("error",function(t){r(t)}),o.on("end",function(){try{r(void 0,t.join(""))}catch(t){r(t);return}})}if(void 0!==t){let e=function(){for(let e of t)o.write(e);o.end()};"function"==typeof setImmediate?setImmediate(e):setTimeout(e,0)}return o}},39473:function(t,e,r){function o(t,e={}){let r=(e.align||[]).concat(),o=e.stringLength||n,s=[],l=[],a=[],u=[],c=0,d=-1;for(;++d<t.length;){let r=[],n=[],i=-1;for(t[d].length>c&&(c=t[d].length);++i<t[d].length;){var f;let s=null==(f=t[d][i])?"":String(f);if(!1!==e.alignDelimiters){let t=o(s);n[i]=t,(void 0===u[i]||t>u[i])&&(u[i]=t)}r.push(s)}l[d]=r,a[d]=n}let h=-1;if("object"==typeof r&&"length"in r)for(;++h<c;)s[h]=i(r[h]);else{let t=i(r);for(;++h<c;)s[h]=t}h=-1;let p=[],m=[];for(;++h<c;){let t=s[h],r="",o="";99===t?(r=":",o=":"):108===t?r=":":114===t&&(o=":");let n=!1===e.alignDelimiters?1:Math.max(1,u[h]-r.length-o.length),i=r+"-".repeat(n)+o;!1!==e.alignDelimiters&&((n=r.length+n+o.length)>u[h]&&(u[h]=n),m[h]=n),p[h]=i}l.splice(1,0,p),a.splice(1,0,m),d=-1;let g=[];for(;++d<l.length;){let t=l[d],r=a[d];h=-1;let o=[];for(;++h<c;){let n=t[h]||"",i="",l="";if(!1!==e.alignDelimiters){let t=u[h]-(r[h]||0),e=s[h];114===e?i=" ".repeat(t):99===e?t%2?(i=" ".repeat(t/2+.5),l=" ".repeat(t/2-.5)):l=i=" ".repeat(t/2):l=" ".repeat(t)}!1===e.delimiterStart||h||o.push("|"),!1!==e.padding&&!(!1===e.alignDelimiters&&""===n)&&(!1!==e.delimiterStart||h)&&o.push(" "),!1!==e.alignDelimiters&&o.push(i),o.push(n),!1!==e.alignDelimiters&&o.push(l),!1!==e.padding&&o.push(" "),(!1!==e.delimiterEnd||h!==c-1)&&o.push("|")}g.push(!1===e.delimiterEnd?o.join("").replace(/ +$/,""):o.join(""))}return g.join("\n")}function n(t){return t.length}function i(t){let e="string"==typeof t?t.codePointAt(0):0;return 67===e||99===e?99:76===e||108===e?108:82===e||114===e?114:0}r.d(e,{x:function(){return o}})}}]);