(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c063646"],{"3d33":function(t,e,i){"use strict";var s=i("7d51");i.n(s).a},5827:function(t,e,i){"use strict";i.r(e);var s=i("5530"),c=i("7832"),n=i("5880"),a={name:"Exp500",components:{ExceptionPage:c.a},computed:Object(s.a)(Object(s.a)({},Object(n.mapState)("setting",["pageMinHeight"])),{},{minHeight:function(){return this.pageMinHeight?this.pageMinHeight+"px":"100vh"}})},o=i("0c7c"),p=Object(o.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("exception-page",{style:"min-height: "+this.minHeight,attrs:{"home-route":"/",type:"500"}})}),[],!1,null,"6f24ed1a",null);e.default=p.exports},7832:function(t,e,i){"use strict";var s={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},c={name:"ExceptionPage",props:["type","homeRoute"],data:function(){return{config:s}},methods:{backHome:function(){this.homeRoute&&this.$router.push(this.homeRoute),this.$emit("backHome",this.type)}}},n=(i("3d33"),i("0c7c")),a=Object(n.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exception-page"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.config[t.type].img}})]),i("div",{staticClass:"content"},[i("h1",[t._v(t._s(t.config[t.type].title))]),i("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),i("div",{staticClass:"action"},[i("a-button",{attrs:{type:"primary"},on:{click:t.backHome}},[t._v("返回首页")])],1)])])}),[],!1,null,"4bd28837",null);e.a=a.exports},"7d51":function(t,e,i){}}]);