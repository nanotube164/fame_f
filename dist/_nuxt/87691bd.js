(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{254:function(t,e,n){},264:function(t,e,n){"use strict";n(254)},284:function(t,e,n){"use strict";n.r(e);var c={fetch:function(t){return t.store.dispatch("getArchive")},head:function(){return{title:"归档"}},computed:{archives:function(){return this.$store.state.archive.data}}},l=(n(264),n(11)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline"},t._l(t.archives,(function(e){return n("div",{key:e.year,staticClass:"timeline-item"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"timeline-content"},[n("div",{staticClass:"tile"},[n("div",{staticClass:"tile-content"},[n("p",{staticClass:"tile-subtitle"},[t._v(t._s(e.year))]),t._v(" "),t._l(e.articleInfos,(function(article){return n("p",{key:article.id,staticClass:"tile-title"},[n("label",{staticClass:"text-italic"},[t._v(t._s(t._f("time")(article.publishTime,"MM-dd")))]),t._v(" "),n("nuxt-link",{attrs:{to:{path:"/article/"+article.id}}},[t._v(t._s(article.title)+"\n            ")])],1)}))],2)])])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeline-left"},[e("div",{staticClass:"timeline-left icon-lg"},[e("a",{staticClass:"timeline-icon"})])])}],!1,null,"cabfd1cc",null);e.default=component.exports}}]);