(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["package-shopManager/pages/shopSet/foodsAdPics"],{511:function(n,t,e){"use strict";(function(n){e(5),e(6);i(e(4));var t=i(e(512));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e(1)["createPage"])},512:function(n,t,e){"use strict";e.r(t);var i=e(513),r=e(515);for(var o in r)"default"!==o&&function(n){e.d(t,n,(function(){return r[n]}))}(o);e(517);var a,u=e(25),s=Object(u["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],a);s.options.__file="package-shopManager/pages/shopSet/foodsAdPics.vue",t["default"]=s.exports},513:function(n,t,e){"use strict";e.r(t);var i=e(514);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},514:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return a})),e.d(t,"recyclableRender",(function(){return o})),e.d(t,"components",(function(){return i}));var r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.imgList,(function(t,e){var i=n.__get_orig(t),r=t.includes("https");return{$orig:i,g0:r}})));n.$mp.data=Object.assign({},{$root:{l0:e}})},o=!1,a=[];r._withStripped=!0},515:function(n,t,e){"use strict";e.r(t);var i=e(516),r=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=r.a},516:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){e.e("components/wybar/wyBar").then(function(){return resolve(e(542))}.bind(null,e)).catch(e.oe)},r={components:{wybar:i},computed:{i18n:function(){return this.$t("index")}},data:function(){return{imgList:[],imgUrls:[],maxCount:1}},onLoad:function(){},methods:{getData:function(){var n=this;n.http.sendRequest("MerchantStore.Read").then((function(t){console.log(t);var e=t.info[0];n.imgList=e.environment,n.imgUrls=e.environment,console.log(n.imgList)}))},back:function(){n.navigateBack()},save:function(){n.showLoading({title:this.i18n.mine.shangchuanzhong,mask:!1});var t=this,e=n.getStorageSync("userinfo"),i={};e&&(i.uid=e.uid,i.token=e.token);for(var r=0;r<t.imgList.length;r++)n.uploadFile({url:getApp().globalData.weburl+"api/?s=Merchant.Upload.Upload",filePath:t.imgList[r],name:"file",formData:i,success:function(e){n.hideLoading();var i=JSON.parse(e.data),r=i.data.info[0].url_all;t.imgUrls.push(r),t.imgUrls.length==t.imgList.length&&t.submit()},fail:function(t){n.hideLoading()}})},submit:function(){var t=this,e={banner:JSON.stringify(t.imgUrls)};this.http.sendRequest("Users.Update",e).then((function(t){0==t.code&&n.navigateBack()}))},delateImage:function(n){this.imgList.splice(n,1)},doAddImage:function(){var t=this;n.chooseImage({count:t.maxCount-t.imgList.length,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){for(var e=n.tempFilePaths,i=0;i<e.length;i++){var r=e[i];t.imgList.length<5&&t.imgList.push(r)}}})}}};t.default=r}).call(this,e(1)["default"])},517:function(n,t,e){"use strict";e.r(t);var i=e(518),r=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=r.a},518:function(n,t,e){}},[[511,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/package-shopManager/pages/shopSet/foodsAdPics.js.map