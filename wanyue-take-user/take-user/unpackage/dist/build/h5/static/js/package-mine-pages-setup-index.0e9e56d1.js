(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-mine-pages-setup-index"],{"040c":function(t,e,n){"use strict";n.r(e);var i=n("a1c0"),o=n("ba3c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9f57");var c,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"c0780052",null,!1,i["a"],c);e["default"]=u.exports},"25a0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-c0780052]{width:100%;height:100%;overflow:hidden;background-color:#f5f6f7}.wrap[data-v-c0780052]{width:100%;height:150px;background-color:#f5f6f7;margin-top:20px}.section[data-v-c0780052]{height:50px;width:calc(100% - 30px);margin-left:15px;border-radius:8px;\r\n\t/* border-bottom: 1px solid #F5F5F5; */align-items:center;position:relative;background-color:#fff;margin-bottom:8px}.des[data-v-c0780052]{position:absolute;right:0;color:#949494;font-size:14px;height:50px;line-height:50px}.section uni-image[data-v-c0780052]{position:absolute;right:0;width:17px;height:17px}.title[data-v-c0780052]{margin-left:15px;height:50px;line-height:50px;color:#1e1e1e;font-size:16px\r\n\t/* font-weight: bolder; */}.quit[data-v-c0780052]{width:calc(100% - 30px);height:54px;line-height:54px;text-align:center;background-color:#ff5725;font-size:19px;font-weight:700;border-radius:8px;color:#fff;\r\n\t/* border:1px solid #FF5725; */margin-left:15px;position:absolute;bottom:30px}body.?%PAGE?%[data-v-c0780052]{background-color:#f5f6f7}",""]),t.exports=e},"2b57":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJFBMVEUAAAD/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyX/VyU4/FvcAAAAC3RSTlMAgNcYU+hHKAveqXO+3OEAAABNSURBVEjHYxgFo2BQA44MAgqMNuGXZ9beSsCA3VsIGLDbYYgbwB69e6EgAiRgKODcjQK2E1RAkhUIR5LkzSFsxFayEy0i2Y+CUTDYAQAvXjQTv6NPnAAAAABJRU5ErkJggg=="},"301d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{width:"100%"},style:"height:"+t.system_top+"px;"}),i("v-uni-view",{staticClass:"row",staticStyle:{width:"100%",height:"40px","align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"32px",height:"32px","margin-left":"12px"},attrs:{src:n("2b57"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}}),i("v-uni-view",{staticStyle:{"margin-left":"5px",color:"#FF5725","font-size":"16px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t._v(t._s(t.leftText))]),i("v-uni-view",{staticStyle:{flex:"1"}}),t.rightText.length>0?i("v-uni-view",{staticStyle:{"font-size":"14px","font-weight":"bold"},style:"color:"+t.rightcolor+";margin-right: "+t.wxWidth+"px;",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t._v(t._s(t.rightText))]):t._e(),t.rightIcon.length>0?i("v-uni-image",{staticStyle:{width:"32px",height:"32px"},style:"color:"+t.rightcolor+";margin-right: "+t.wxWidth+"px;",attrs:{mode:"aspectFit",src:t.rightIcon},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}}):t._e()],1)],1)},a=[]},5295:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("6d19")),a={components:{wybar:o.default},computed:{i18n:function(){return this.$t("index")}},data:function(){return{version:"",cacheSize:0,array:[]}},onLoad:function(){this.version=getApp().globalData.version,this.getcache(),this.array=[this.i18n.yilou.zhanghaobangding,this.i18n.mine.zhuxiaozhanghao]},methods:{back:function(){uni.navigateBack({})},click:function(t){var e=this;0==t?uni.navigateTo({url:"bindV"}):1==t&&uni.showModal({title:"",content:e.i18n.mine.zhuxiaoTip,showCancel:!0,cancelText:e.i18n.mine.zhuxiaoBtn2,confirmText:e.i18n.mine.zhuxiaoBtn1,confirmColor:"#007AFF",cancelColor:"#FC494A",success:function(t){t.confirm&&e.requestDelate()},fail:function(){},complete:function(){}})},getcache:function(){},clearCache:function(){var t=this;0!=this.cacheSize&&uni.showModal({title:"",content:"确定清理缓存吗？",showCancel:!0,cancelText:"取消",confirmText:"确认",confirmColor:"#FF5725",cancelColor:"#000",success:function(e){if(e.confirm){var n=t;uni.showLoading({title:"清理中...",mask:!1}),setTimeout((function(){uni.hideLoading(),n.cacheSize=0,uni.clearStorage(),uni.showToast({title:"已清理缓存",icon:"none"})}),1e3)}},fail:function(){},complete:function(){}})},requestDelate:function(){var t=this;t.http.sendRequest("User.WriteOff",{}).then((function(e){0==e.code&&(uni.clearStorageSync(),getApp().globalData.userinfo="",uni.$TUIKit.logout(),uni.$TUIKit.destroy(),uni.showModal({title:t.i18n.mine.zhuxiaoSucess,content:"",showCancel:!0,cancelText:t.i18n.mine.zhidaole,success:function(t){uni.reLaunch({url:"../../../pages/index/index"})},fail:function(){},complete:function(){}}))}))},logout:function(){var t=this;uni.showModal({title:t.i18n.mine.logoutTip,content:"",showCancel:!0,cancelText:t.i18n.cancel,confirmText:t.i18n.sure,success:function(t){t.confirm&&(uni.clearStorageSync(),uni.$TUIKit.logout(),getApp().globalData.userinfo="",setTimeout((function(){uni.reLaunch({url:"../../../pages/index/index"})}),500))},fail:function(){},complete:function(){}})}}};e.default=a},"6d19":function(t,e,n){"use strict";n.r(e);var i=n("301d"),o=n("9f34");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var c,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2d81e44f",null,!1,i["a"],c);e["default"]=u.exports},"902a":function(t,e,n){var i=n("25a0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3eeb5965",i,!0,{sourceMap:!1,shadowMode:!1})},"9f34":function(t,e,n){"use strict";n.r(e);var i=n("ca75"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"9f57":function(t,e,n){"use strict";var i=n("902a"),o=n.n(i);o.a},a1c0:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("wybar",{attrs:{leftText:t.i18n.set},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"wrap"},t._l(t.array,(function(e,o){return i("v-uni-view",{key:o,staticClass:"section row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(o)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e))]),i("v-uni-image",{attrs:{src:n("abdd"),mode:""}})],1)})),1),i("v-uni-view",{staticClass:"quit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.mine.loginOut))])],1)},a=[]},abdd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHJQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////XlhBxAAAACZ0Uk5TAEpbv/+JKNCWIcmjGsOwCxK8vRe1IwSuzK20yLsWGcIKoZSIWWpqz3FrAAAAYUlEQVR4nJXPRRKAMBQD0EKDFdfizv2vCOuGBWT5ZvJFiJ+x7BeUcBhdDz5roBCyRjGSlDTLUZSkaQVVkzYaLWMHSfUeg1nPRoyTYfMCvRr2HL+Z8543d1oscZCJ82L7khuboAOw+5x6bgAAAABJRU5ErkJggg=="},ba3c:function(t,e,n){"use strict";n.r(e);var i=n("5295"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},ca75:function(t,e,n){"use strict";n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"wyBar",data:function(){return{system_top:44,wxWidth:15}},created:function(){var t=uni.getSystemInfoSync();parseInt(t.safeArea.top)>this.system_top&&(this.system_top=parseInt(t.safeArea.top)),console.log(this.system_top)},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},color:{type:String,default:"#FFFFFF"},rightcolor:{type:String,default:"#FF5725"},backgroundColor:{type:String,default:"#FFFFFF"}},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=i}}]);