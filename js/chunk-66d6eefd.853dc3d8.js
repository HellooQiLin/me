(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d6eefd"],{"06c7":function(t,a,i){t.exports=i.p+"img/helloQiLin.ab5821e5.jpg"},"2e72":function(t,a,i){"use strict";i("8ad9")},"32a4":function(t,a,i){},"32ec":function(t,a,i){t.exports=i.p+"img/woman.9b53c9c9.png"},"53d0":function(t,a,i){"use strict";var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"round-avatars"},[a("video",{staticClass:"video11",staticStyle:{position:"fixed","z-index":"-999",width:"100%"},attrs:{playsinline:"",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[a("source",{attrs:{src:t.imgData,type:"video/mp4"}})]),a("div",{ref:"masthead",class:["overlay","blog-ani","from-bottom",{"animation-on":t.animationOn}],attrs:{id:"masthead",itemprop:"brand"}},[a("div",{staticClass:"site-branding text-center"},[a("router-link",{attrs:{to:"/author"}},[a("figure",[a("img",{staticClass:"custom-logo avatar",attrs:{src:t.logoPath}})])]),a("h3",{staticClass:"blog-description"},[a("p",[t._v(t._s(t.description))])])],1),a("div",{staticClass:"animation-header"},[a("div",{staticClass:"decor-wrapper"},[a("svg",{staticClass:"decor",attrs:{id:"header-decor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[a("path",{staticClass:"large left",attrs:{d:"M0 50   L50 50 L0 62.5",fill:"rgba(255,255,255, .2)"}}),a("path",{staticClass:"large left",attrs:{d:"M0 62.5 L50 50 L0 75",fill:"rgba(255,255,255, .4)"}}),a("path",{staticClass:"large left",attrs:{d:"M0 75   L50 50 L0 87.5",fill:"rgba(255,255,255, .6)"}}),a("path",{attrs:{d:"M0 87.5 L50 50 L0 100",fill:"rgba(255,255,255, .7)"}}),a("path",{staticClass:"large left",attrs:{d:"M100 50   L50 50 L100 62.5",fill:"rgba(255,255,255, .2)"}}),a("path",{staticClass:"large left",attrs:{d:"M100 62.5 L50 50 L100 75",fill:"rgba(255,255,255, .4)"}}),a("path",{staticClass:"large left",attrs:{d:"M100 75   L50 50 L100 87.5",fill:"rgba(255,255,255, .6)"}}),a("path",{attrs:{d:"M100 87.5 L50 50 L100 100",fill:"rgba(255,255,255, .7)"}}),a("path",{staticClass:"large left",attrs:{d:"M 33 67\n                                 L 17 83 \n                                 A 34 34 0 0 0 83 83\n                                 L 67 67\n                                 A 18 18 0 0 1 33 67",fill:"rgba(255,255,255, 0.4)"}}),a("path",{attrs:{d:"M 17 83\n                                 L 0 100\n                                 A 50 50 0 0 0 100 100\n                                 L 83 83\n                                 A 34 34 0 0 1 17 83",fill:"rgba(255,255,255, .8)"}})])])])])])},n=[],o=i("7a1a"),s=i("06c7"),r=i.n(s),l=(i("5b06"),i("f154")),c=i.n(l),u=(i("b973"),i("d6f3"),i("7c89"),i("6bea"),{name:"blogTop",props:{routerPath:{type:String,default:"/"},logoPath:{type:String,default:r.a},description:{type:String,default:"心存感激💓， 所遇皆温暖"}},data:function(){return{animationOn:!1,imgData:c.a,routerPathx:this.routerPath}},created:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.animationOn=!0}),500)})),"hirofumi"==this.routerPathx&&(this.imgData="/me/img/wallpaper/yinhua.mp4"),"bell"==this.routerPathx&&(this.imgData="/me/img/wallpaper/jinluo.mp4"),"bell2"==this.routerPathx&&(this.imgData="/me/img/wallpaper/xinkong.mp4"),"chengguo"==this.routerPathx&&(this.imgData="/me/img/wallpaper/bainv.mp4"),"heart"==this.routerPathx&&(this.imgData="/me/img/wallpaper/hua.mp4"),"message"==this.routerPathx&&(this.imgData="/me/img/wallpaper/huatian.mp4"),"/"==this.routerPathx&&(this.imgData="/me/img/wallpaper/xiaomao.mp4")},mounted:function(){this.throttledScrollHandler=Object(o["throttle"])(300,this.onScroll),window.addEventListener("scroll",this.throttledScrollHandler)},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>=this.$refs.masthead.offsetHeight?this.animationOn=!1:this.animationOn=!0}},beforeDestroy:function(){window.removeEventListener("scroll",this.throttledScrollHandler)}}),p=u,m=(i("dc43"),i("2877")),d=Object(m["a"])(p,e,n,!1,null,"0544d5f2",null);a["a"]=d.exports},"5e2f":function(t,a,i){"use strict";var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"myemoji"},[a("div",{staticClass:"icon clearfix"},[a("i",{staticClass:"icon iconfont icon-face",on:{click:function(a){t.showEmoji=!t.showEmoji}}}),a("transition",{attrs:{name:"fade",mode:""}},[t.showEmoji?a("div",{staticClass:"emoji-box"},[a("el-button",{staticClass:"pop-close",attrs:{circle:"",size:"mini",icon:"el-icon-close"},on:{click:function(a){t.showEmoji=!1}}}),a("div",{staticClass:"emoji"},[a("ul",{staticClass:"emoji-controller"},t._l(t.pannels,(function(i,e){return a("li",{key:e,class:{active:e===t.activeIndex},on:{click:function(a){return t.changeActive(e)}}},[t._v(t._s(i))])})),0),a("ul",{staticClass:"emoji-container"},[t._l(t.emojis,(function(i,e){return[e===t.activeIndex?a("li",{key:e,staticStyle:{padding:"0"}},t._l(i,(function(i,e){return a("a",{key:e,attrs:{href:"javascript:;"},on:{click:function(a){return t.selectItem(i)}}},[a("span",{staticClass:"emoji-item",class:"sprite-"+t.getPureName(i),attrs:{title:i}})])})),0):t._e()]}))],2)]),a("span",{staticClass:"pop-arrow arrow"})],1):t._e()])],1)])},n=[],o=(i("ac6a"),i("456d"),i("a481"),i("edb2")),s={name:"emoji",data:function(){return{emojiData:o["a"],pannels:["表情","自然","物品","地点","符号"],activeIndex:0,showEmoji:!1}},props:{},methods:{changeActive:function(t){this.activeIndex=t},getPureName:function(t){return t.replace(/:/g,"")},selectItem:function(t){this.showEmoji=!1,this.$emit("select",t)}},computed:{emojis:function(){var t=this;return this.pannels.map((function(a){return Object.keys(t.emojiData[a])}))}}},r=s,l=(i("2e72"),i("2877")),c=Object(l["a"])(r,e,n,!1,null,"3476100c",null);a["a"]=c.exports},"6bea":function(t,a,i){t.exports=i.p+"img/bozhu.8c9c9cd8.jpg"},"7a1a":function(t,a,i){(function(t,i){i(a)})(0,(function(t){"use strict";function a(t,a,i,e){var n,o=!1,s=0;function r(){n&&clearTimeout(n)}function l(){r(),o=!0}function c(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];var p=this,m=Date.now()-s;function d(){s=Date.now(),i.apply(p,c)}function f(){n=void 0}o||(e&&!n&&d(),r(),void 0===e&&m>t?d():!0!==a&&(n=setTimeout(e?f:d,void 0===e?t-m:t)))}return"boolean"!==typeof a&&(e=i,i=a,a=void 0),c.cancel=l,c}function i(t,i,e){return void 0===e?a(t,i,!1):a(t,e,!1!==i)}t.debounce=i,t.throttle=a,Object.defineProperty(t,"__esModule",{value:!0})}))},"7c89":function(t,a,i){t.exports=i.p+"img/message.b3e15a73.jpg"},"8ad9":function(t,a,i){},b973:function(t,a,i){t.exports=i.p+"img/wenzhang.e5794c21.jpg"},d6f3:function(t,a,i){t.exports=i.p+"img/heart.50bd5d63.jpg"},dc43:function(t,a,i){"use strict";i("32a4")},f154:function(t,a,i){t.exports=i.p+"img/bell.2f9f735d.jpg"}}]);