(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{279:function(t,e,r){"use strict";r.r(e);r(229),r(232),r(233),r(63),r(68),r(238);var n,i=r(239),s={name:"OGPCard",props:{url:String},data:function(){return{title:"",description:"",image:"",set_url:""}},computed:{},watch:{set_url:(n=Object(i.a)(regeneratorRuntime.mark((function t(e){var r,n,i,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("watch:",e),t.next=3,fetch(this.url);case 3:return t.next=5,t.sent.text();case 5:r=t.sent,n=(new DOMParser).parseFromString(r,"text/html"),i=n.head.children,Array.from(i).forEach((function(t){var e=t.getAttribute("property");if(e&&e.split("og:").length>1){var r=t.getAttribute("content");switch(console.log(r),e.split("og:")[1]){case"site_name":case"title":s.title=r;break;case"description":s.description=r;break;case"image":s.image=r}}}));case 9:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},mounted:function(){this.set_url=this.url},methods:{}},a=r(0),c=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:t.image}}),t._v(" "),r("p",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.description))])])}),[],!1,null,"6ee05c18",null);e.default=c.exports}}]);