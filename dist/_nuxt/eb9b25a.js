(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{262:function(t,e,r){},263:function(t,e,r){},281:function(t,e,r){"use strict";r(262)},282:function(t,e,r){"use strict";r(263)},287:function(t,e,r){"use strict";r.r(e);var n={key:function(t){return t.fullPath},transition:function(t,e){return"move"},fetch:function(t){var e=t.store,r={page:t.query.page||1,limit:5,sort:["priority","id"]};return e.dispatch("getArticles",r)},head:function(){return{title:"Blog"}},computed:{articles:function(){return this.$store.state.article.list.data},totalPage:function(){return this.$store.state.article.list.totalPage},currentPage:function(){return this.$store.state.article.list.currentPage}},watchQuery:["page"]},c=(r(281),r(282),r(11)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.articles,(function(article){return r("div",{key:article.id,staticClass:"article-item"},[r("h2",{staticClass:"article-head text-bold"},[r("nuxt-link",{attrs:{to:{path:"/article/"+article.id}}},[t._v(t._s(article.title)+"\n      ")])],1),t._v(" "),article.category?r("p",{staticClass:"article-date"},[r("span",{staticClass:"icon-folder"}),t._v("\n      "+t._s(article.category.name)+"\n    ")]):t._e(),t._v(" "),r("p",{staticClass:"article-date text-italic"},[r("span",{staticClass:"icon-calendar"}),t._v("\n      "+t._s(t._f("time")(article.publishTime,"yyyy-MM-dd"))+"\n    ")]),t._v(" "),r("p",{staticClass:"article-date"},[r("span",{staticClass:"icon-eye"}),t._v(" "+t._s(article.hits)+"\n    ")]),t._v(" "),r("p",{staticClass:"article-date"},[r("span",{staticClass:"icon-bubble2"},[t._v(" "+t._s(article.commentCount)+" ")])]),t._v(" "),r("div",{staticClass:"article-tags"},t._l(article.tags,(function(e){return r("label",{key:e.id,staticClass:"article-tag"},[r("nuxt-link",{attrs:{to:{path:"/tag/"+e.name}}},[t._v("#"+t._s(e.name))])],1)})),0),t._v(" "),r("div",{directives:[{name:"prism",rawName:"v-prism"}],staticClass:"article-summary markdown-body",domProps:{innerHTML:t._s(article.contentHtml)}}),t._v(" "),r("nuxt-link",{staticClass:"article-more text-primary",attrs:{to:{path:"/article/"+article.id}}},[t._v("Read more\n    ")])],1)})),t._v(" "),r("div",{staticClass:"front-page"},[t.currentPage>1?r("div",{staticClass:"pre text-primary"},[r("nuxt-link",{attrs:{to:{path:"",query:{page:t.currentPage-1}}}},[t._v("← Pre\n      ")])],1):t._e(),t._v(" "),t.currentPage+1<=t.totalPage?r("div",{staticClass:"next text-primary"},[r("nuxt-link",{attrs:{to:{path:"",query:{page:t.currentPage+1}}}},[t._v("Next →\n      ")])],1):t._e()])],2)}),[],!1,null,"bd4c0866",null);e.default=component.exports}}]);