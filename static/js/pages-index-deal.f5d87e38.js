(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-deal"],{"07a9":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bf0f"),a("2797"),a("3efd"),a("aa9c");var r=n(a("442c")),u=n(a("0ad7")),o=n(a("c268")),i=n(a("44bd"));function d(e){this.defaults=e,this.intercepters={request:new r.default,response:new r.default}}d.prototype.request=function(e){e=i.default.merge(o.default,{method:"get"},this.defaults,e),e.method=e.method.toUpperCase();var t=[u.default,void 0],a=Promise.resolve(e);this.intercepters.request.handlers.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.intercepters.response.handlers.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)a=a.then(t.shift(),t.shift());return a};var f=d;t.default=f},"0ad7":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("438c")),u=n(a("681e")),o=n(a("44bd")),i=n(a("c268"));var d=function(e){e.url?e.url=e.baseUrl+e.url:e.url=e.baseUrl,e.header=function(e){var t={};return t="upload"===e.adapter?i.default.headers.upload:i.default.headers.common,e.headers?o.default.merge(t,e.headers):t}(e)||{};var t=null;return t="upload"===e.adapter?u.default:r.default,t(e).then((function(e){return e}),(function(e){throw e}))};t.default=d},"24fb":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("cd43"),r={data:function(){return{content:""}},onLoad:function(){this.getList()},methods:{getList:function(){var e=this;(0,n.postCommon)("/api/publish/page",{page:1,pageSize:1,isShow:!0,categoryAlias:"999",title:"服务协议"}).then((function(t){e.content=t.result.items[0].content}))}}};t.default=r},3212:function(e,t,a){"use strict";var n=a("63d6"),r=a.n(n);r.a},"325c":function(e,t,a){"use strict";a.r(t);var n=a("d42e"),r=a("359a");for(var u in r)["default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(u);a("3212");var o=a("828b"),i=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"8920b854",null,!1,n["a"],void 0);t["default"]=i.exports},"359a":function(e,t,a){"use strict";a.r(t);var n=a("24fb"),r=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=r.a},"3ac7":function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.detail-box[data-v-8920b854]{padding:%?30?% %?30?% %?120?%}.bottom-box[data-v-8920b854]{display:flex;justify-content:space-around;align-items:center;background-color:#fff;position:fixed;width:100%;height:%?120?%;left:0;right:0;bottom:0}.bottom-box .btn-item[data-v-8920b854]{width:38%}',""]),e.exports=t},"438c":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bf0f");var n=function(e){return new Promise((function(t,a){uni.request({method:e.method,timeout:e.timeout,dataType:e.dataType,url:e.url,data:e.data,header:e.header,success:function(e){t(e)},fail:function(e){a(e)}})}))};t.default=n},"442c":function(e,t,a){"use strict";function n(){this.handlers=[]}a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("aa9c"),n.prototype.use=function(e,t){this.handlers.push({fulfilled:e,rejected:t})};var r=n;t.default=r},"44bd":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("fcf3"));function u(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==(0,r.default)(e)&&(e=[e]),function(e){return"[object Array]"===toString.call(e)}(e))for(var a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&t.call(null,e[u],u,e)}var o={merge:function e(){var t={};function a(a,n){"object"===(0,r.default)(t[n])&&"object"===(0,r.default)(a)?t[n]=e(t[n],a):t[n]=a}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],a);return t},extend:function(e,t,a){return u(t,(function(t,n){e[n]=a&&"function"===typeof t?bind(t,a):t})),e}};t.default=o},"63d6":function(e,t,a){var n=a("3ac7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("967d").default;r("c00b1d7c",n,!0,{sourceMap:!1,shadowMode:!1})},"681e":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bf0f");var n=function(e){return new Promise((function(t,a){e.data.filePath?uni.uploadFile({timeout:e.timeout,url:e.url,header:e.header,filePath:e.data.filePath,name:e.data.name?e.data.name:"files",formData:e.data.formData?e.data.formData:{},success:function(e){t(e)},fail:function(e){a(e)}}):uni.uploadFile({method:"POST",timeout:e.timeout,url:e.url,header:e.header,files:e.data.files,formData:e.data.formData?e.data.formData:{},success:function(e){t(e)},fail:function(e){a(e)}})}))};t.default=n},"698f":function(e,t,a){"use strict";var n=a("f5bd").default;a("bf0f"),a("2797"),a("dc8a"),a("18f7"),a("de6c");var r=n(a("07a9")),u=n(a("c268")),o=n(a("44bd"));function i(e){var t=new r.default(e),a=r.default.prototype.request.bind(t);return Object.keys(r.default.prototype).forEach((function(e){a[e]=r.default.prototype[e].bind(t)})),Object.keys(t).forEach((function(e){a[e]=t[e]})),a}var d=i(u.default);d.Axios=r.default,d.create=function(e){return i(o.default.merge(u.default,e))},d.all=function(e){return Promise.all(e)},e.exports=d,e.exports.default=d},a185:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.baseUrl=void 0,a("7a76"),a("c9b5"),a("4626"),a("5ac7");var r=n(a("698f")),u="http://8.152.5.166:6005";t.baseUrl=u;var o=r.default.create({baseUrl:u});function i(e){var t=e||"请求错误";throw uni.showToast({icon:"none",title:t}),new Error(t)}o.intercepters.request.use((function(e){return e}),(function(e){return e})),o.intercepters.response.use((function(e){if(e.statusCode>=200&&e.statusCode<300){var t=e.data;if(!t||"error"!==t.type)return t;t.message.includes("账号已存在")||i(t.message)}else 401===e.statusCode?i("登录过期，请重新登录"):e.statusCode>=500?i("服务错误"):i(String(e))}),(function(e){console.log("err",e),i(String(e))}));var d=o;t.default=d},c268:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a("44bd"));var r={timeout:6e4,method:"GET",dataType:"json",url:"",data:{},headers:{common:{"content-type":"application/json"},upload:{}}},u=r;t.default=u},cd43:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getCommon=function(e,t){return(0,r.default)({url:e,method:"get",data:t})},t.postCommon=function(e,t){return(0,r.default)({url:e,method:"post",data:t})};var r=n(a("a185"))},d42e:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"agree-container"},[t("v-uni-view",{staticClass:"detail-box"},[t("v-uni-rich-text",{attrs:{nodes:this.content}})],1)],1)},r=[]}}]);