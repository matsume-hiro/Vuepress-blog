(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{278:function(t,n,e){},282:function(t,n,e){"use strict";e(27);var a=e(17),s={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:function(t,n){var e=n.props,s=e.name,i=e.icon,r=e.size;return t("span",{class:"post-tag",attrs:{title:s}},[t(a.a,{class:"post-tag-icon",attrs:{name:i,size:r}}),t("span",{class:"post-tag-name"},[s])])}},i=(e(283),e(0)),r=Object(i.a)(s,void 0,void 0,!1,null,null,null);n.a=r.exports},283:function(t,n,e){"use strict";var a=e(278);e.n(a).a},317:function(t,n,e){"use strict";e.r(n);var a={name:"Categories",components:{IconTag:e(282).a}},s=e(0),i=Object(s.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"categories"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.categories))]),this._v(" "),this._l(this.$categories.list,function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"category",name:t.name}})],1)})],2)])},[],!1,null,null,null);n.default=i.exports}}]);