(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1759924c"],{"0fc8":function(t,e,a){"use strict";a.r(e);a("a15b"),a("d81d"),a("b0c0");var n=a("2909"),o=a("5530"),i=a("1346"),s=a("c40e"),r=a("c24f"),c=a("3f9b"),u=a("83ad"),l=[{title:"序号",dataIndex:"key",key:"key",scopedSlots:{customRender:"key"},align:"center"},{title:"商品信息",key:"goods_number",scopedSlots:{customRender:"goods_number"},width:520},{title:"状态",key:"status",scopedSlots:{customRender:"status"},align:"center"},{title:"售价",dataIndex:"discount_price",key:"discount_price",align:"center"},{title:"创建时间",dataIndex:"create_time",key:"create_time",align:"center"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],d={name:"goodsList",components:{DivCard:i.a,MaskMove:u.a},data:function(){return{columns:l,data:[],loading:!1,isType:c.d,pagination:{page:1,page_size:10,total:0,defaultPageSize:10,title:"",item_no:"",status:1},filterForm:{title:"",item_no:"",status:1},moveTo:[],options:[],moveForm:{target_id:"",cids:[]},rules:{target_id:{required:!0,message:"请选择需要目标店铺",trigger:"change"}},indexGoodsId:""}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(s.e)(this.pagination).then((function(e){var a=Object(o.a)({},t.pagination);a.total=e.data.data.all_pages*a.page_size,t.pagination=a,t.data=e.data.data.list,t.loading=!1})).catch((function(e){t.loading=!1})),Object(r.a)().then((function(e){t.moveTo=e.data.data.external_account})),Object(s.d)({pid:0}).then((function(e){e.data.data&&(t.options=e.data.data.data.map((function(t){return{value:t.id,label:t.name,isLeaf:t.is_leaf}})),t.loading=!1)})).catch((function(e){t.loading=!1}))},handleTableChange:function(t,e,a){this.pagination.page=t.current,this.getList()},cvId:function(t){Object(c.c)(t),this.$message.success("复制商品ID成功")},oneClickMove:function(t){this.indexGoodsId=t,this.$refs.oneMove.show()},cloneGoods:function(){this.$refs.clone.show()},upGoods:function(){var t=this;this.loading=!0,Object(s.j)().then((function(e){0===e.data.code?(t.loading=!1,t.$message.success("店铺同步成功!"),t.getList()):(t.loading=!1,t.$message.error("店铺同步失败!"))}))},goto:function(t){window.open(t)},search:function(){this.pagination.title=this.filterForm.title,this.pagination.item_no=this.filterForm.item_no,this.pagination.status=this.filterForm.status,this.getList()},loadData:function(t){var e=this,a=t[t.length-1];a.loading=!0,Object(s.d)({pid:a.value}).then((function(t){t.data.data?(a.loading=!1,a.children=t.data.data.data.map((function(t){return{value:t.id,label:t.name,isLeaf:t.is_leaf}}))):(a.loading=!1,a.isLeaf=!0),e.options=Object(n.a)(e.options)}))},oneMove:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(e){t.loading=!0;var a={target_id:t.moveForm.target_id,product_id:t.indexGoodsId,cids:t.moveForm.cids.length>0?t.moveForm.cids.join(","):""};Object(s.a)(t.$qs.stringify(a)).then((function(e){t.loading=!1,t.$refs.oneMove.hide(),t.$message.success("搬家成功!"),t.getList()})).catch((function(e){t.loading=!1}))}}))}}},m=(a("bc18"),a("0c7c")),f=Object(m.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goodsList"},[a("a-breadcrumb",[a("a-breadcrumb-item",[t._v("首页")]),a("a-breadcrumb-item",[t._v("商品列表")])],1),a("div-card",{staticClass:"g-content"},[a("a-form-model",{staticClass:"g-c-screen",attrs:{model:t.filterForm,layout:"inline"}},[a("a-form-model-item",{attrs:{label:"商品名称"}},[a("a-input",{staticClass:"g-c-s-input",model:{value:t.filterForm.title,callback:function(e){t.$set(t.filterForm,"title",e)},expression:"filterForm.title"}})],1),a("a-form-model-item",{attrs:{label:"商品编号"}},[a("a-input",{staticClass:"g-c-s-input",model:{value:t.filterForm.item_no,callback:function(e){t.$set(t.filterForm,"item_no",e)},expression:"filterForm.item_no"}})],1),a("a-form-model-item",{attrs:{label:"状态"}},[a("a-select",{staticClass:"g-c-s-select",model:{value:t.filterForm.status,callback:function(e){t.$set(t.filterForm,"status",e)},expression:"filterForm.status"}},[a("a-select-option",{attrs:{value:0}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:1}},[t._v(" 售卖中 ")]),a("a-select-option",{attrs:{value:2}},[t._v(" 已下架 ")])],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":{offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v(" 查询 ")])],1)],1)],1),a("div-card",{staticClass:"g-data"},[a("div",{staticClass:"g-data-h"},[a("div",{staticClass:"g-d-h-left"},[t._v(" 温馨提示：手动同步仅同步上架状态的商品，请点击同步以获取最新的数据 "),a("a-button",{attrs:{type:"link"},on:{click:t.upGoods}},[a("a-icon",{attrs:{type:"undo"}}),t._v(" 一键同步 ")],1)],1)]),a("a-table",{attrs:{columns:t.columns,"data-source":t.data,loading:t.loading,pagination:t.pagination,bordered:"",rowKey:function(t,e){return t.goods_number}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"key",fn:function(e,n,o){return a("div",{},[t._v(" "+t._s(o+1)+" ")])}},{key:"goods_number",fn:function(e){return a("div",{staticClass:"g-data-info"},[a("img",{attrs:{width:"63",height:"63",src:e.pic_url,alt:""}}),a("div",[a("div",[t._v(t._s(e.title))]),a("div",[a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[a("span",[t._v("点击复制编号")])]),a("a",{on:{click:function(a){return t.cvId(e.goods_number)}}},[t._v("商品编号: "+t._s(e.goods_number))])],2)],1)])])}},{key:"status",fn:function(e){return a("div",{},[t._v(" "+t._s(t.isType(e.status))+" ")])}},{key:"action",fn:function(e){return a("div",{},[a("div",{staticClass:"mg-b-10"},[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.goto(e.url)}}},[t._v(" 商品查看 ")])],1),a("div",{staticClass:"mg-b-10"},[a("a-button",{attrs:{size:"small"},on:{click:function(a){return t.oneClickMove(e.goods_number)}}},[t._v(" 一键搬家 ")])],1)])}}])})],1),a("mask-move",{ref:"oneMove",attrs:{title:"一键搬家",button:!1}},[a("a-form-model",{ref:"ruleForm",attrs:{model:t.moveForm,rules:t.rules,"label-col":{span:6},"wrapper-col":{span:14}}},[a("a-form-model-item",{attrs:{label:"搬家至",prop:"target_id"}},[a("a-select",{model:{value:t.moveForm.target_id,callback:function(e){t.$set(t.moveForm,"target_id",e)},expression:"moveForm.target_id"}},t._l(t.moveTo,(function(e){return a("a-select-option",{key:e.external_id,attrs:{value:e.external_id}},[t._v(" "+t._s(e.external_name)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"类目"}},[a("a-cascader",{staticClass:"p-c-select",attrs:{options:t.options,"load-data":t.loadData,placeholder:"抖店分类"},model:{value:t.moveForm.cids,callback:function(e){t.$set(t.moveForm,"cids",e)},expression:"moveForm.cids"}})],1)],1),a("div",{staticClass:"flexCenter"},[a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.oneMove}},[t._v(" 确认搬家 ")])],1)],1)],1)}),[],!1,null,"6dc73666",null);e.default=f.exports},1346:function(t,e,a){"use strict";var n={name:"DivCard"},o=(a("5bac"),a("0c7c")),i=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"DivCard"},[this._t("default")],2)}),[],!1,null,"4e6fdf04",null);e.a=i.exports},"3f9b":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return u}));a("a15b"),a("d81d"),a("ac1f"),a("1276");var n=a("4360");function o(t){var e=document.createElement("input");e.setAttribute("id","cp_hgz_input"),e.value=t,document.getElementsByTagName("body")[0].appendChild(e),document.getElementById("cp_hgz_input").select(),document.execCommand("copy"),document.getElementById("cp_hgz_input").remove()}function i(t){return n.a.state.account.prop_ids[t]}function s(t){if(t){var e=n.a.state.account.prop_ids;return t.split(",").map((function(t){return e[t]})).join(" ")}}function r(t){switch(t){case 1:return"在售中";case 2:return"已下架";case 3:return"已删除"}}function c(t){switch(t){case 1:return"抖音";case 2:return"拼多多";case 3:return"快手"}}function u(t){switch(t){case"taobao":return"淘宝";case"tmall":return"天猫";case"alibaba":return"1688";case"vvic":return"搜款网";case"zwd17":return"一起做网店";case"xz571":return"四季星座";case"wsy":return"网商园"}}},"487a":function(t,e,a){},"5bac":function(t,e,a){"use strict";var n=a("aa82");a.n(n).a},"83ad":function(t,e,a){"use strict";a("a9e3");var n={name:"MaskMove",data:function(){return{visible:!1}},props:{title:{type:String},width:{type:[Number,String]},maskClosable:{type:Boolean,default:!0},button:{type:Boolean,default:!0}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1}}},o=(a("cdaf"),a("0c7c")),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"mask",staticClass:"mask"},[a("a-modal",{attrs:{title:t.title,footer:null,width:t.width,maskClosable:t.maskClosable,getContainer:function(){return t.$refs.mask}},on:{ok:t.hide},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._t("default"),t.button?a("div",{staticClass:"flexCenter"},[a("a-button",{attrs:{type:"primary"},on:{click:t.hide}},[t._v(" 确认 ")])],1):t._e()],2)],1)}),[],!1,null,"491172a8",null);e.a=i.exports},aa82:function(t,e,a){},bc18:function(t,e,a){"use strict";var n=a("d9b8");a.n(n).a},c40e:function(t,e,a){"use strict";a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"i",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"e",(function(){return l})),a.d(e,"j",(function(){return d})),a.d(e,"b",(function(){return m})),a.d(e,"a",(function(){return f}));var n=a("b775");function o(){return Object(n.c)({url:"/move/catch-queue",method:"get"})}function i(t){return Object(n.c)({url:"/move/uploaded",method:"get",params:t})}function s(t){return Object(n.c)({url:"/move/cat",method:"get",params:t})}function r(t){return Object(n.c)({url:"/move/cat-new",method:"get",params:t})}function c(t){return Object(n.c)({url:"/move/ups",method:"post",data:t})}function u(t){return Object(n.c)({url:"/move/catch",method:"post",data:t})}function l(t){return Object(n.c)({url:"/move/bj-dd-goods",method:"get",params:t})}function d(t){return Object(n.c)({url:"/move/sync-all-goods",method:"get",params:t})}function m(t){return Object(n.c)({url:"/move/delete-catch-goods",method:"post",data:t})}function f(t){return Object(n.c)({url:"/move/clone-goods",method:"post",data:t})}},cdaf:function(t,e,a){"use strict";var n=a("487a");a.n(n).a},d9b8:function(t,e,a){}}]);