(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["package-index/pages/indexOrderDetail"],{147:function(e,t,n){"use strict";(function(e){n(5),n(6);r(n(4));var t=r(n(148));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},148:function(e,t,n){"use strict";n.r(t);var r=n(149),i=n(151);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(153);var s,a=n(25),d=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);d.options.__file="package-index/pages/indexOrderDetail.vue",t["default"]=d.exports},149:function(e,t,n){"use strict";n.r(t);var r=n(150);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},150:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=!1,s=[];i._withStripped=!0},151:function(e,t,n){"use strict";n.r(t);var r=n(152),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},152:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={computed:{i18n:function(){return this.$t("index")}},data:function(){return{height:0,orderInfo:{},orderID:"",refresherTriggered:!1,price:0,showpay:0,selectedItem:{},showTip:0,addTipMoney:0,type:0,index:1,userInfo:{},rider:{},goodsData:[],isShowBottom:!1,address:{},orderArr:[],bottomHeight:0,showChat:!0}},onLoad:function(t){e.setNavigationBarTitle({title:this.i18n.titles.orderdetail});var n=this,r=e.getSystemInfoSync();n.height=r.windowHeight,n.orderID=t.id,"1"==t.from?this.showChat=!1:this.showChat=!0,n.requestData()},methods:{call:function(t){e.makePhoneCall({phoneNumber:t})},chat:function(t){console.log(t);var n=t.users_im.user_id;console.log(n),e.navigateTo({url:"/pages/TUI-Chat/chat?conversationID=C2C".concat(n)})},evalue:function(){e.navigateTo({url:"/package-shopManager/pages/commentManager/commentDetail?id="+this.orderInfo.order_evaluate.id})},cancelOrder:function(){var t=this;e.showModal({title:"",content:t.i18n.postorder.cancelsuretip,success:function(e){e.confirm?t.cancelSure():e.cancel}})},cancelSure:function(){var t={id:this.orderInfo.id};this.http.sendRequest("MerchantOrder.CancelOrder",t).then((function(t){0==t.code&&(console.log(112121),e.navigateBack(),e.$emit("refreshList"))}))},receiveOrder:function(){var t={id:this.orderInfo.id};this.http.sendRequest("MerchantOrder.TakeOrders",t).then((function(t){0==t.code&&(e.navigateBack(),e.$emit("refreshList"))}))},refund:function(){var t=this;e.showModal({title:"",content:t.i18n.postorder.refundsuretip,success:function(e){e.confirm?t.refundSure():e.cancel}})},refundSure:function(t){var n={id:this.orderInfo.id};this.http.sendRequest("MerchantOrder.RefundOrder",n).then((function(t){0==t.code&&(e.$emit("refreshList"),e.navigateBack())}))},requestData:function(){var e=this;e.http.sendRequest("MerchantOrder.Detail",{id:e.orderID}).then((function(t){if(0==t.code){var n=t.info[0];console.log(n),e.orderInfo=n,e.goodsData=n.product,e.address=n.address,e.userInfo=n.users,e.rider=n.rider;1==n.shipping_type?e.i18n.index.peisong:e.i18n.index.ziti1;e.orderArr=[{title:e.i18n.index.orderNum,value:n.order_id},{title:e.i18n.index.ordertime,value:n.add_time},{title:e.i18n.index.orderserve,value:n.serve.name},{title:e.i18n.index.orderpeisong,value:n.shipping_type_txt},{title:e.i18n.index.orderstatus,value:n.status_txt},{title:e.i18n.index.ordercui,value:n.reminder_content},{title:e.i18n.index.orderpay,value:n.pay_type_txt}],1==n.show_receie||1==n.show_refund||1==n.show_cancel||1==n.show_evaluate?(e.bottomHeight=60,e.isShowBottom=!0):(e.isShowBottom=!1,e.bottomHeight=0)}}))},refresherrefresh:function(){var e=this;e.refresherTriggered=!0,e.requestData(),console.log("自定义下拉刷新被触发"),setTimeout((function(){e.refresherTriggered=!1}),1e3)},closePayView:function(t){console.log(t);var n=this;if(n.showpay=0,0==t);else{var r="",i={orderid:n.selectedItem.id,openid:e.getStorageSync("openid"),payid:2==t.id?"3":t.id};console.log(n.addTipMoney),n.addTipMoney>0?(r="Orders.Fee",i.fee=n.addTipMoney):r="Orders.Repay",n.http.sendRequest(r,i).then((function(r){0==r.code&&(1==t.id?e.requestPayment({provider:"alipay",orderInfo:r.info[0].ali.orderinfo,success:function(t){e.showToast({title:"支付成功",duration:2e3}),console.log("success:"+JSON.stringify(t)),n.refresherrefresh()},fail:function(e){console.log("fail:"+JSON.stringify(e))}}):2==t.id?e.requestPayment({provider:"wxpay",timeStamp:r.info[0].small.timeStamp,nonceStr:r.info[0].small.nonceStr,package:r.info[0].small.package,signType:r.info[0].small.signType,paySign:r.info[0].small.sign,success:function(t){e.showToast({title:"支付成功",duration:2e3}),console.log(t),n.refresherrefresh()},fail:function(e){console.log(e)}}):(e.showToast({title:"支付成功",duration:2e3}),n.refresherrefresh()))}))}},dopayOrder:function(e){this.addTipMoney=0,this.selectedItem=e,this.showpay=1},doAgainOrder:function(t){e.switchTab({url:"../../pages/index/index"})},doJiaxiaofei:function(e){console.log(2121211),this.selectedItem=e,this.showTip=1},tipMoneyAdd:function(e){this.showTip=0,e>0&&(this.addTipMoney=e,this.showpay=1)}}};t.default=n}).call(this,n(1)["default"])},153:function(e,t,n){"use strict";n.r(t);var r=n(154),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},154:function(e,t,n){}},[[147,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/package-index/pages/indexOrderDetail.js.map