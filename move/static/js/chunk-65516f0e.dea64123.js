(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-65516f0e"],{"0444":function(t,s,e){"use strict";e.r(s);e("ac1f"),e("5319");var a=e("1346"),n=e("83ad"),i=e("c24f"),c=e("ee7d"),o=e("3f9b"),r={components:{DivCard:a.a,MaskMove:n.a},data:function(){return{ptList:[{name:"抖店",img:"https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/jifengou/20201125142154CMJ7r5RSNj2K5YMp6HaH.png",index:2}],shopList:[],imgList:["https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/jifengou/2020112719574EEQxB325xy4dNyhH2pwA.png","https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/jifengou/20201125142154CMJ7r5RSNj2K5YMp6HaH.png","https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/jifengou/20201127194634fwRPYHeMdRHMN4fMty53.png","https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/jifengou/20201127194637AwhZAaN3EH5iRNMKbdzc.png"],shop_type:o.f,isshow:!1}},mounted:function(){this.getList()},methods:{selectShop:function(){this.$refs.select.show()},goto:function(t){var s=this;Object(c.b)({type:t}).then((function(t){t.data.data.url&&(window.open(t.data.data.url),s.isshow=!0)}))},getList:function(){var t=this;Object(i.a)().then((function(s){t.shopList=s.data.data.external_account}))},tagShow:function(){this.$router.go(0)},tagRe:function(){this.isshow=!1}},beforeRouteEnter:function(t,s,e){t.query.type&&e((function(s){location.replace("#".concat(t.path)),s.$message.success("店铺绑定成功!")})),e()}},u=(e("7ed4"),e("0c7c")),l=Object(u.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"s-shop"},[e("div-card",{staticClass:"shop-bind"},[e("div",{staticClass:"s-b-title"},[t._v("已关联的第三方店铺")]),e("div",{staticClass:"s-b-content"},[t._l(t.shopList,(function(s,a){return e("div",{key:a,staticClass:"s-b-item1"},[e("img",{attrs:{src:t.imgList[s.shop_type],alt:"logo"}}),e("div",{staticClass:"s-b-item1-info"},[e("div",[t._v("店铺ID："+t._s(s.external_id))]),e("div",[t._v("店铺类型："+t._s(t.shop_type(s.shop_type)))]),e("div",[t._v("店铺名称："+t._s(s.external_name))])])])})),e("div",{staticClass:"s-b-item",on:{click:t.selectShop}},[e("img",{attrs:{src:t.imgList[0],alt:"icon"}}),e("div",[t._v("关联第三方店铺")])])],2)]),e("div",{staticClass:"course"},[e("a-collapse",{staticClass:"course-collapse",attrs:{"expand-icon-position":"right"}},[e("a-collapse-panel",{attrs:{header:"一、绑定第三方店铺教程之---抖店"}},[t._v(" 123 ")])],1),e("a-collapse",{staticClass:"course-collapse",attrs:{"expand-icon-position":"right"}},[e("a-collapse-panel",{attrs:{header:"二、绑定第三方店铺教程之---快手"}},[t._v(" 123 ")])],1),e("a-collapse",{staticClass:"course-collapse",attrs:{"expand-icon-position":"right"}},[e("a-collapse-panel",{attrs:{header:"三、绑定第三方店铺教程之---拼多多"}},[t._v(" 123 ")])],1)],1),e("mask-move",{ref:"select",attrs:{title:"请选择第三方平台",button:!1}},[e("div",{staticClass:"shop-mask"},t._l(t.ptList,(function(s){return e("div",{key:s.index,staticClass:"s-m-item",on:{click:function(e){return t.goto(s.index)}}},[e("img",{attrs:{src:s.img,alt:"logo"}}),e("div",[t._v(t._s(s.name))])])})),0),t.isshow?e("div",{staticClass:"tags"},[e("div",{staticClass:"tags-text"},[t._v("您是否已经绑定成功了呢! 成功点击绑定成功 失败点击重新绑定")]),e("div",{staticClass:"tags-bt"},[e("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:t.tagShow}},[t._v(" 绑定成功 ")]),e("a-button",{on:{click:t.tagRe}},[t._v("重新绑定")])],1)]):t._e()])],1)}),[],!1,null,"0c73f501",null);s.default=l.exports},1346:function(t,s,e){"use strict";var a={name:"DivCard"},n=(e("5bac"),e("0c7c")),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"DivCard"},[this._t("default")],2)}),[],!1,null,"4e6fdf04",null);s.a=i.exports},"3f9b":function(t,s,e){"use strict";e.d(s,"c",(function(){return n})),e.d(s,"b",(function(){return i})),e.d(s,"a",(function(){return c})),e.d(s,"d",(function(){return o})),e.d(s,"f",(function(){return r})),e.d(s,"e",(function(){return u}));e("a15b"),e("d81d"),e("ac1f"),e("1276");var a=e("4360");function n(t){var s=document.createElement("input");s.setAttribute("id","cp_hgz_input"),s.value=t,document.getElementsByTagName("body")[0].appendChild(s),document.getElementById("cp_hgz_input").select(),document.execCommand("copy"),document.getElementById("cp_hgz_input").remove()}function i(t){return a.a.state.account.prop_ids[t]}function c(t){if(t){var s=a.a.state.account.prop_ids;return t.split(",").map((function(t){return s[t]})).join(" ")}}function o(t){switch(t){case 1:return"在售中";case 2:return"已下架";case 3:return"已删除"}}function r(t){switch(t){case 1:return"抖音";case 2:return"拼多多";case 3:return"快手"}}function u(t){switch(t){case"taobao":return"淘宝";case"tmall":return"天猫";case"alibaba":return"1688";case"vvic":return"搜款网";case"zwd17":return"一起做网店";case"xz571":return"四季星座";case"wsy":return"网商园"}}},"487a":function(t,s,e){},"5bac":function(t,s,e){"use strict";var a=e("aa82");e.n(a).a},"7ed4":function(t,s,e){"use strict";var a=e("ba7b");e.n(a).a},"83ad":function(t,s,e){"use strict";e("a9e3");var a={name:"MaskMove",data:function(){return{visible:!1}},props:{title:{type:String},width:{type:[Number,String]},maskClosable:{type:Boolean,default:!0},button:{type:Boolean,default:!0}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1}}},n=(e("cdaf"),e("0c7c")),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"mask",staticClass:"mask"},[e("a-modal",{attrs:{title:t.title,footer:null,width:t.width,maskClosable:t.maskClosable,getContainer:function(){return t.$refs.mask}},on:{ok:t.hide},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[t._t("default"),t.button?e("div",{staticClass:"flexCenter"},[e("a-button",{attrs:{type:"primary"},on:{click:t.hide}},[t._v(" 确认 ")])],1):t._e()],2)],1)}),[],!1,null,"491172a8",null);s.a=i.exports},aa82:function(t,s,e){},ba7b:function(t,s,e){},cdaf:function(t,s,e){"use strict";var a=e("487a");e.n(a).a}}]);