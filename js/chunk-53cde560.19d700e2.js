(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cde560"],{"06c7":function(t,e,a){t.exports=a.p+"img/helloQiLin.ab5821e5.jpg"},"32a4":function(t,e,a){},"4f5a":function(t,e,a){"use strict";a("6da8")},"53d0":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"round-avatars"},[e("video",{staticClass:"video11",staticStyle:{position:"fixed","z-index":"-999",width:"100%"},attrs:{playsinline:"",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[e("source",{attrs:{src:t.imgData,type:"video/mp4"}})]),e("div",{ref:"masthead",class:["overlay","blog-ani","from-bottom",{"animation-on":t.animationOn}],attrs:{id:"masthead",itemprop:"brand"}},[e("div",{staticClass:"site-branding text-center"},[e("router-link",{attrs:{to:"/author"}},[e("figure",[e("img",{staticClass:"custom-logo avatar",attrs:{src:t.logoPath}})])]),e("h3",{staticClass:"blog-description"},[e("p",[t._v(t._s(t.description))])])],1),e("div",{staticClass:"animation-header"},[e("div",{staticClass:"decor-wrapper"},[e("svg",{staticClass:"decor",attrs:{id:"header-decor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[e("path",{staticClass:"large left",attrs:{d:"M0 50   L50 50 L0 62.5",fill:"rgba(255,255,255, .2)"}}),e("path",{staticClass:"large left",attrs:{d:"M0 62.5 L50 50 L0 75",fill:"rgba(255,255,255, .4)"}}),e("path",{staticClass:"large left",attrs:{d:"M0 75   L50 50 L0 87.5",fill:"rgba(255,255,255, .6)"}}),e("path",{attrs:{d:"M0 87.5 L50 50 L0 100",fill:"rgba(255,255,255, .7)"}}),e("path",{staticClass:"large left",attrs:{d:"M100 50   L50 50 L100 62.5",fill:"rgba(255,255,255, .2)"}}),e("path",{staticClass:"large left",attrs:{d:"M100 62.5 L50 50 L100 75",fill:"rgba(255,255,255, .4)"}}),e("path",{staticClass:"large left",attrs:{d:"M100 75   L50 50 L100 87.5",fill:"rgba(255,255,255, .6)"}}),e("path",{attrs:{d:"M100 87.5 L50 50 L100 100",fill:"rgba(255,255,255, .7)"}}),e("path",{staticClass:"large left",attrs:{d:"M 33 67\n                                 L 17 83 \n                                 A 34 34 0 0 0 83 83\n                                 L 67 67\n                                 A 18 18 0 0 1 33 67",fill:"rgba(255,255,255, 0.4)"}}),e("path",{attrs:{d:"M 17 83\n                                 L 0 100\n                                 A 50 50 0 0 0 100 100\n                                 L 83 83\n                                 A 34 34 0 0 1 17 83",fill:"rgba(255,255,255, .8)"}})])])])])])},n=[],s=a("7a1a"),r=a("06c7"),o=a.n(r),c=(a("5b06"),a("f154")),l=a.n(c),d=(a("b973"),a("d6f3"),a("7c89"),a("6bea"),{name:"blogTop",props:{routerPath:{type:String,default:"/"},logoPath:{type:String,default:o.a},description:{type:String,default:"心存感激💓， 所遇皆温暖"}},data:function(){return{animationOn:!1,imgData:l.a,routerPathx:this.routerPath}},created:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.animationOn=!0}),500)})),"hirofumi"==this.routerPathx&&(this.imgData="/me/img/wallpaper/yinhua.mp4"),"bell"==this.routerPathx&&(this.imgData="/me/img/wallpaper/jinluo.mp4"),"bell2"==this.routerPathx&&(this.imgData="/me/img/wallpaper/xinkong.mp4"),"chengguo"==this.routerPathx&&(this.imgData="/me/img/wallpaper/bainv.mp4"),"heart"==this.routerPathx&&(this.imgData="/me/img/wallpaper/hua.mp4"),"message"==this.routerPathx&&(this.imgData="/me/img/wallpaper/huatian.mp4"),"/"==this.routerPathx&&(this.imgData="/me/img/wallpaper/xiaomao.mp4")},mounted:function(){this.throttledScrollHandler=Object(s["throttle"])(300,this.onScroll),window.addEventListener("scroll",this.throttledScrollHandler)},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>=this.$refs.masthead.offsetHeight?this.animationOn=!1:this.animationOn=!0}},beforeDestroy:function(){window.removeEventListener("scroll",this.throttledScrollHandler)}}),u=d,p=(a("dc43"),a("2877")),f=Object(p["a"])(u,i,n,!1,null,"0544d5f2",null);e["a"]=f.exports},"5b06":function(t,e,a){t.exports=a.p+"img/xinkong.0d54d524.jpg"},"6bea":function(t,e,a){t.exports=a.p+"img/bozhu.8c9c9cd8.jpg"},"6da8":function(t,e,a){},"7a1a":function(t,e,a){(function(t,a){a(e)})(0,(function(t){"use strict";function e(t,e,a,i){var n,s=!1,r=0;function o(){n&&clearTimeout(n)}function c(){o(),s=!0}function l(){for(var c=arguments.length,l=new Array(c),d=0;d<c;d++)l[d]=arguments[d];var u=this,p=Date.now()-r;function f(){r=Date.now(),a.apply(u,l)}function h(){n=void 0}s||(i&&!n&&f(),o(),void 0===i&&p>t?f():!0!==e&&(n=setTimeout(i?h:f,void 0===i?t-p:t)))}return"boolean"!==typeof e&&(i=a,a=e,e=void 0),l.cancel=c,l}function a(t,a,i){return void 0===i?e(t,a,!1):e(t,i,!1!==a)}t.debounce=a,t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})}))},"7c89":function(t,e,a){t.exports=a.p+"img/message.b3e15a73.jpg"},"93a2":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("b54a");var i=function(){var t=this,e=t._self._c;return e("div",[e("blog-top"),e("side-bar",{attrs:{data:t.website.sideBar}}),e("div",{staticClass:"page-container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"page"},[e("div",{staticClass:"explain",attrs:{"data-aos":"zoom-in"}},[e("div",{staticClass:"title"},[e("el-divider",{attrs:{"content-position":"center"}},[e("span",{staticClass:"message-divider"},[t._v("友链申请")])])],1),e("div",{staticClass:"explain-field-box"},[e("p",[t._v("本站欢迎交换友链，如需交换链接请在\n                            "),e("router-link",{attrs:{to:{name:"message"}}},[t._v("\n                                留言板\n                            ")]),t._v("\n                            留言，博主不定期对友链进行互动访问。")],1),e("h1",[t._v("申请格式")]),e("div",{staticClass:"format"},[e("p",[e("span",[t._v("名称：")]),t._v(t._s(t.website.title))]),e("p",[e("span",[t._v("网址：")]),t._v(t._s(t.website.link))]),e("p",[e("span",[t._v("图标：")]),t._v(t._s(t.website.favicon))]),e("p",[e("span",[t._v("描述：")]),t._v(t._s(t.website.introduction))])]),e("h1",[t._v("申请要求")]),t._m(0),e("p",[t._v("希望您在申请本站友链之前请先做好本站链接，申请提交后若无其它额外因素将于72小时内审核，如超过时间还未通过，请私信我。")]),e("p",[t._v("注意本站会不定期清理违规友链，如果检测到该链接已无法正常访问，本站依然会为您保留30天恢复期，逾期则剔除该链接。")]),e("p"),e("h1",{staticClass:"text-center"},[t._v("The End")])])]),e("div",{staticClass:"link-big-box",attrs:{"data-aos":"fade-up"}},[e("el-divider"),e("el-row",{attrs:{gutter:10}},t._l(t.data,(function(a,i){return e("el-col",{key:i,attrs:{md:6,sm:12,xs:24}},[e("a",{attrs:{target:"_blank",href:a.link}},[e("div",{staticClass:"link-box"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("img",{attrs:{alt:"",src:a.favicon}})])],1),e("div",{staticClass:"text-center"},[e("h3",[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.introduction))])])],1)])])})),1)],1)])])])],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"demand text-bold"},[e("i",{staticClass:"el-icon-check"}),e("span",[t._v("原创优先")]),e("i",{staticClass:"el-icon-check"}),e("span",[t._v("技术优先")]),e("i",{staticClass:"el-icon-close"}),e("span",[t._v("经常宕机")]),e("i",{staticClass:"el-icon-close"}),e("span",[t._v("不合法规")]),e("i",{staticClass:"el-icon-close"}),e("span",[t._v("插边球站")]),e("i",{staticClass:"el-icon-close"}),e("span",[t._v("红标报毒")])])}],s=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),r=a("2f62"),o=a("53d0"),c=a("89d1"),l=a("9623");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"friendsLink",components:{BlogTop:o["a"],SideBar:l["a"]},data:function(){return{data:[]}},computed:u({},Object(r["b"])(["website"])),mounted:function(){this.init()},methods:{init:function(){var t=this;Object(c["g"])().then((function(e){t.data=e.data.data}))}}},f=p,h=(a("4f5a"),a("2877")),m=Object(h["a"])(f,i,n,!1,null,"0fb0ccc8",null);e["default"]=m.exports},9623:function(t,e,a){"use strict";a("7f7f");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-bar"},t._l(t.data,(function(a,i){return e("div",{key:i,staticClass:"box"},[e("router-link",{attrs:{to:{path:a.path}}},[e("div",{ref:"side",refInFor:!0,class:["side","bg-0"+i]},[e("span",{staticClass:"side-content"},[t._v(t._s(a.name))])])])],1)})),0)},n=[],s=a("e3c4"),r={name:"sideBar",props:{data:{type:Array,default:function(){return[]}}},data:function(){return{time:null}},created:function(){var t=this,e=this;this.$nextTick((function(){t.time=setTimeout((function(){e.showSide()}),800)}))},methods:{showSide:function(){var t=Object(s["a"])({name:"showSide"});if("undefined"==typeof t&&!t&&this.data&&this.data.length>0){var e=500;this.$refs.side.filter((function(t){setTimeout((function(){t.style.cssText="position: relative;left: 100%;margin-left: -32px;box-shadow: 0 -8px 8px -8px rgba(0,0,0,.5),0 8px 8px -8px rgba(0,0,0,.5);transition: all .3s ease-in-out;"}),e),e+=500,setTimeout((function(){t.style.cssText=""}),e)})),Object(s["b"])({name:"showSide",content:!0,type:"session"})}}},beforeDestroy:function(){null!=this.time&&clearTimeout(this.time),this.time=null}},o=r,c=(a("f0e7"),a("2877")),l=Object(c["a"])(o,i,n,!1,null,"4e2afa1c",null);e["a"]=l.exports},ade3:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("53ca");function n(t,e){if("object"!=Object(i["a"])(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!=Object(i["a"])(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=n(t,"string");return"symbol"==Object(i["a"])(e)?e:String(e)}function r(t,e,a){return e=s(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},b973:function(t,e,a){t.exports=a.p+"img/wenzhang.e5794c21.jpg"},bd3d:function(t,e,a){},d6f3:function(t,e,a){t.exports=a.p+"img/heart.50bd5d63.jpg"},dc43:function(t,e,a){"use strict";a("32a4")},f0e7:function(t,e,a){"use strict";a("bd3d")},f154:function(t,e,a){t.exports=a.p+"img/bell.2f9f735d.jpg"}}]);