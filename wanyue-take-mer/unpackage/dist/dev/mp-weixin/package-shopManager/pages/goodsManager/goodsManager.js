(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["package-shopManager/pages/goodsManager/goodsManager"],{295:function(t,e,i){"use strict";(function(t){i(5),i(6);n(i(4));var e=n(i(296));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i(1)["createPage"])},296:function(t,e,i){"use strict";i.r(e);var n=i(297),s=i(299);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i(301);var r,a=i(25),c=Object(a["default"])(s["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],r);c.options.__file="package-shopManager/pages/goodsManager/goodsManager.vue",e["default"]=c.exports},297:function(t,e,i){"use strict";i.r(e);var n=i(298);i.d(e,"render",(function(){return n["render"]})),i.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(e,"components",(function(){return n["components"]}))},298:function(t,e,i){"use strict";var n;i.r(e),i.d(e,"render",(function(){return s})),i.d(e,"staticRenderFns",(function(){return r})),i.d(e,"recyclableRender",(function(){return o})),i.d(e,"components",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c},o=!1,r=[];s._withStripped=!0},299:function(t,e,i){"use strict";i.r(e);var n=i(300),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},300:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={computed:{i18n:function(){return this.$t("index")}},data:function(){return{scrollHeight:0,secondViewHeight:50,bottomViewHeight:0,topHeight:0,marginTopHeight:0,refresherTriggered:!1,bottomArr:[],selectIndex:0,secondIndex:0,isXiajia:!0,toView:"",listArr:[],firstClassArr:[],secondClassArr:[],page:1,recommendDic:{},storeTypeID:"0",selectedFirstID:"-1",platformID:"0",showKucun:!1}},onShow:function(){var e=t.getStorageSync("shopinfo");console.log(e),this.platformID=e.top_type_id,5==parseInt(this.platformID)?this.showKucun=!0:this.showKucun=!1,this.getListData()},onLoad:function(){var e=t.getSystemInfoSync();this.marginTopHeight=getApp().globalData.menuButtonHeight+getApp().globalData.statusBarHeight,this.topHeight=this.marginTopHeight+60+44,this.bottomViewHeight=60,this.scrollHeight=e.windowHeight-this.bottomViewHeight-this.topHeight,this.bottomArr=[{name:this.i18n.shop.fenlei,image:"../../static/fenlei@2x.png"},{name:this.i18n.shop.addgoods,image:"../../static/addgoods@2x.png"}],this.recommendDic={id:"0",use_name:this.i18n.shop.tuijian},this.getFirstClassData(),this.getSecondClassData(),0==this.storeTypeID?this.secondViewHeight=0:this.secondViewHeight=50;var i=t.getStorageSync("shopinfo");this.platformID=i.top_type_id,5==parseInt(this.platformID)?this.showKucun=!0:this.showKucun=!1},methods:{getFirstClassData:function(){var t=this,e={level:"1",is_tree:"0",id:"0"};t.http.sendRequest("MerchantStoreType.Index",e).then((function(e){t.firstClassArr=e.info[0],t.firstClassArr.unshift(t.recommendDic)}))},getSecondClassData:function(){var t=this;if(console.log(t.selectedFirstID),t.selectedFirstID>0){var e={level:"2",is_tree:"0",id:t.selectedFirstID};t.http.sendRequest("MerchantStoreType.Index",e).then((function(e){if(t.secondClassArr=e.info[0],t.secondClassArr.length>0){t.secondViewHeight=50;var i=t.secondClassArr[0];t.storeTypeID=i.id,t.getListData()}else t.secondViewHeight=0,t.listArr=[]}))}else t.storeTypeID=0,t.getListData(),t.secondViewHeight=0},getListData:function(){var t=this,e={p:this.page,store_type_id:this.storeTypeID};this.http.sendRequest("MerchantStoreProduct.Index",e).then((function(e){1==t.page?t.listArr=e.info[0]:t.listArr=t.listArr.contact(e.info[0])}))},search:function(){t.navigateTo({url:"../searchgoods/searchgoods"})},back:function(){t.navigateBack()},itemClick:function(e){0==e?t.navigateTo({url:"../classifyManager/classifyManager"}):t.navigateTo({url:"addGoods"})},leftBtnClick:function(t,e){this.selectIndex=t;var i="header"+t;this.toView=i,this.selectedFirstID=e.id,3==this.platformID?(this.storeTypeID=e.id,this.getListData()):this.getSecondClassData()},secondsubClick:function(t,e){this.secondIndex=t,this.storeTypeID=e.id,this.getListData()},edit:function(e){t.navigateTo({url:"addGoods?productID="+e.id})},xiajia:function(t){console.log(111,t.id);var e=this,i={is_show:"0",id:t.id};this.http.sendRequest("MerchantStoreProduct.Status",i).then((function(t){0==t.code&&e.getListData()}))},shangjia:function(t){console.log(222,t.id);var e=this,i={is_show:"1",id:t.id};this.http.sendRequest("MerchantStoreProduct.Status",i).then((function(t){0==t.code&&e.getListData()}))},refresherrefresh:function(){var t=this;this.refresherTriggered=!0,this.page=1,this.getListData(),setTimeout((function(){t.refresherTriggered=!1}),1e3)},reloadmoreData:function(){this.page++,this.getListData()}}};e.default=i}).call(this,i(1)["default"])},301:function(t,e,i){"use strict";i.r(e);var n=i(302),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},302:function(t,e,i){}},[[295,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/package-shopManager/pages/goodsManager/goodsManager.js.map