(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)o=c[u],s[o]&&f.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("c21b"),s=a.n(i);s.a},"0471":function(t,e,a){"use strict";var i=a("33a1"),s=a.n(i);s.a},"0e01":function(t,e,a){"use strict";var i=a("729a"),s=a.n(i);s.a},"10a7":function(t,e,a){"use strict";var i=a("402e"),s=a.n(i);s.a},1449:function(t,e,a){"use strict";var i=a("3e8f"),s=a.n(i);s.a},"15b1":function(t,e,a){"use strict";var i=a("9fc2"),s=a.n(i);s.a},1942:function(t,e,a){},"19bb":function(t,e,a){},"2a6a":function(t,e,a){"use strict";var i=a("19bb"),s=a.n(i);s.a},"2a86":function(t,e,a){"use strict";var i=a("4dd1"),s=a.n(i);s.a},"2ed6":function(t,e,a){},"33a1":function(t,e,a){},"36a9":function(t,e,a){"use strict";var i=a("b888"),s=a.n(i);s.a},"39ce":function(t,e,a){"use strict";var i=a("1942"),s=a.n(i);s.a},"3cf0":function(t,e,a){"use strict";var i=a("9cec"),s=a.n(i);s.a},"3e8f":function(t,e,a){},"402e":function(t,e,a){},"44cc":function(t,e,a){},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){var e=i[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="4678"},"4dd1":function(t,e,a){},"4f21":function(t,e,a){"use strict";var i=a("2ed6"),s=a.n(i);s.a},"517c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("transition",{key:t.$route.params.id,attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar",class:{sidebar_active:this.active}},[a("div",{staticClass:"toggle-btn",on:{click:function(e){t.toggleComplete()}}},["home"==this.$route.name?a("div",[0==this.open?a("i",{staticClass:"fas fa-bars fa-2x open-btn",staticStyle:{color:"white"}}):a("i",{staticClass:"fas fa-times fa-2x close-btn",staticStyle:{color:"white"}})]):a("div",[0==this.open?a("i",{staticClass:"fas fa-bars fa-2x open-btn",staticStyle:{color:"#FF3820"}}):a("i",{staticClass:"fas fa-times fa-2x close-btn",staticStyle:{color:"#FF3820"}})])]),a("ul",{staticClass:"category-section"},[a("li",{staticClass:"logo"},[a("b-img",{attrs:{src:"https://i.postimg.cc/tTPQh83J/Chew-Eat-logo-spoon.png",fluid:""}})],1),a("router-link",{staticClass:"routes",attrs:{to:{name:t.home,path:"/home"}}},[a("li",{staticClass:"category"},[a("b-img",{attrs:{src:"https://i.postimg.cc/zGWCYjFW/Chew-Eat-home-icon.png",fluid:"",alt:"Responsive image"}})],1)]),t._l(this.$store.state.categories,function(e){return a("li",{key:e.id,staticClass:"category",on:{click:function(e){t.PageRefresh()}}},[a("router-link",{staticClass:"routes",attrs:{to:{name:"commodity",params:{id:e.id}}}},[a("b-img",{attrs:{src:e.url,fluid:"",alt:"Responsive image"}})],1)],1)})],2)])},c=[],r=a("c93e"),l=a("2f62"),d={data:function(){return{active:!0,open:!0}},methods:Object(r["a"])({toggleComplete:function(){this.active=!this.active,this.open=!this.open}},Object(l["b"])({PageRefresh:"remove_data"}))},u=d,f=(a("0e01"),a("2877")),m=Object(f["a"])(u,o,c,!1,null,"2bc68420",null);m.options.__file="navigation.vue";var p=m.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-section"},[a("div",{staticClass:"footer-header"},[a("p",[t._v("이용약관 | 개인정보 처리방침 | 법적고지 및 주의사항 | 고객센터 |")])]),a("div",{staticClass:"footer-main"},[a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem similique dignissimos. "),a("br"),t._v(" Alias blanditiis labore inventore quisquam, magni molestiae quidem unde nam aliquid, "),a("br"),t._v(" \n        error dicta facilis sunt est animi ratione!")])]),a("div",{staticClass:"footer-footer"},[a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])])}],h={},g=h,_=(a("2a86"),Object(f["a"])(g,v,b,!1,null,"43e3f24a",null));_.options.__file="footer.vue";var j=_.exports,C={name:"app",components:{Navigation:p,Footer:j}},y=C,x=(a("034f"),Object(f["a"])(y,s,n,!1,null,null,null));x.options.__file="App.vue";var k=x.exports,w={fetch:function(){var t=[];if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!==localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}},O={selected:[],snack:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Sweet",value:"item1"},{id:2,text:"Chocolate",value:"item2"},{id:3,text:"Cheese&Butter",value:"item3"},{id:4,text:"Potato",value:"item4"}],noodle:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Ramyun",value:"item1"},{id:2,text:"Cold Noodle",value:"item2"},{id:3,text:"Soba & Udon",value:"item3"},{id:4,text:"Traditional",value:"item4"}],drink:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Fruits",value:"item1"},{id:2,text:"Sparkling",value:"item2"},{id:3,text:"Ion",value:"item3"},{id:4,text:"Traditional",value:"item4"}],dairy:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Milk",value:"item1"},{id:2,text:"Yogurt",value:"item2"},{id:3,text:"Cheese",value:"item3"}],instant:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Curry",value:"item1"},{id:2,text:"Frozen Food",value:"item2"},{id:3,text:"Canned",value:"item3"},{id:4,text:"Soup",value:"item4"}],categories:[{id:"snack",index:1,value:"Snack",url:"https://i.postimg.cc/gcCHJjk3/Chew-Eat-snack-icon.png"},{id:"noodle",index:2,value:"Noodle",url:"https://i.postimg.cc/mkHD1dDy/Chew-Eat-noodle-icon.png"},{id:"drink",index:3,value:"Drink",url:"https://i.postimg.cc/ZqtLWg5V/Chew-Eat-drink-icon.png"},{id:"dairy",index:4,value:"Dairy ",url:" https://i.postimg.cc/Z59fBpFK/Chew-Eat-dairy-icon.png"},{id:"instant",index:5,value:"Instant",url:"https://i.postimg.cc/pX58KZ77/Chew-Eat-instant-icon.png"}],products:[{id:0,productName:"title",likeCount:10,review:10,productTaste:"good",productMatrials:"material",allergenic:"allergenic",createdTime:"comment"}],charts:[10,20,10,20,19,29],information:[],reviews:w.fetch(),reviewtest:[]},$={storedTodoItems:function(t){return t.reviews}},S={push_data:function(t,e){t.selected=e},remove_data:function(t){t.selected=[]},Send_data:function(t,e){t.information=e},addOneItem:function(t,e){var a={completed:!1,item:e,count:0};localStorage.setItem(e,JSON.stringify(a)),t.reviews.push(a)},ClickOneItem:function(t,e){t.reviews[e.index].completed=!t.reviews[e.index].completed,t.reviews[e.index].count+=1},ReturnOneItem:function(t,e){t.reviews[e.index].completed=!t.reviews[e.index].completed,t.reviews[e.index].count-=1}},E={};i["a"].use(l["a"]);var L=new l["a"].Store({state:O,getters:$,mutations:S,actions:E}),P=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("div",{staticClass:"header-container"},[a("page-description")],1),a("div",{staticClass:"main-container"},[a("famous-commodity",{staticClass:"famouse-commodity"}),a("Recommend")],1)])},I=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-descriptione"},[a("div",{staticClass:"img-section"},[a("div",{staticClass:"logo-container"},[a("router-link",{attrs:{to:{name:t.home,path:"/home"}}},[a("b-img",{staticClass:"logo",attrs:{src:"https://i.postimg.cc/mrz0sK6j/Chew-Eat-logo-white.png",fluid:"",alt:"Responsive image"}})],1)],1),a("b-carousel",{attrs:{id:"carousel1",interval:3e3},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/qBn1jHgX/pageslide.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/qBn1jHgX/pageslide.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/qBn1jHgX/pageslide.jpg"}})],1)],1)])},N=[],M={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},D=M,T=(a("fc4a"),Object(f["a"])(D,R,N,!1,null,"a9d57026",null));T.options.__file="page-description.vue";var F=T.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"famous-commodity"},[t._m(0),a("div",{staticClass:"section-image"},[a("b-carousel",{attrs:{id:"carousel",controls:"",interval:!1},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png"}})],1)],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-name"},[a("p",[t._v("FAMOUS COMMODITY")])])}],H={data:function(){return{slide:0}},methods:{}},B=H,K=(a("aac7"),Object(f["a"])(B,A,q,!1,null,"713ed74e",null));K.options.__file="famous-commodity.vue";var J=K.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend-section"},[a("b-carousel",{attrs:{id:"carouse2",interval:3e3},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide2,callback:function(e){t.slide2=e},expression:"slide2"}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/t4wq0KzR/Chew-Eat-image-2.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/t4wq0KzR/Chew-Eat-image-2.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/t4wq0KzR/Chew-Eat-image-2.jpg"}})],1)],1)},V=[],U={data:function(){return{slide2:0,sliding2:null}},methods:{onSlideStart:function(){this.sliding2=!0},onSlideEnd:function(){this.sliding2=!1}}},X=U,G=(a("c30c"),Object(f["a"])(X,W,V,!1,null,"4dad452f",null));G.options.__file="recommend.vue";var Y=G.exports,Z={components:{PageDescription:F,FamousCommodity:J,Recommend:Y}},Q=Z,tt=(a("0471"),Object(f["a"])(Q,z,I,!1,null,null,null));tt.options.__file="HomeView.vue";var et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{key:t.$route.params.id},[a("Logo"),a("div",{attrs:{id:"commodity"}},[a("Commodity")],1),a("transition",{attrs:{name:"component-fade",mode:"out-in"}},[a("product-section")],1)],1)])},it=[],st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity-container"},[a("Header"),a("CategoryBar")],1)},nt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity-name"},[a("p",{staticClass:"commodity-header"},[t._v(t._s(t._f("capitalize")(t.$route.params.id)))])])},ct=[],rt=(a("6b54"),{data:function(){return{header:[]}},filters:{capitalize:function(t){return t?(t=t.toString(),t.toUpperCase()):""}}}),lt=rt,dt=(a("7373"),Object(f["a"])(lt,ot,ct,!1,null,"aaeff636",null));dt.options.__file="header.vue";var ut=dt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-container"},[a("div",{staticClass:"category-main"},["snack"==this.$route.params.id?a("Snack"):"drink"==this.$route.params.id?a("Drink"):"noodle"==this.$route.params.id?a("Noodle"):"dairy"==this.$route.params.id?a("Dairy"):"instant"==this.$route.params.id?a("Instant"):t._e()],1)])},mt=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"snack-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.snack,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},vt=[],bt={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},ht=bt,gt=(a("58c6"),Object(f["a"])(ht,pt,vt,!1,null,"14c409e3",null));gt.options.__file="Snack.vue";var _t=gt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drink-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.drink,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},Ct=[],yt={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},xt=yt,kt=(a("5a6a"),Object(f["a"])(xt,jt,Ct,!1,null,"9c2076e8",null));kt.options.__file="Drink.vue";var wt=kt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noodle-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.noodle,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},$t=[],St={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},Et=St,Lt=(a("36a9"),Object(f["a"])(Et,Ot,$t,!1,null,"57db58d0",null));Lt.options.__file="Noodle.vue";var Pt=Lt.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dairy-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.dairy,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},It=[],Rt={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},Nt=Rt,Mt=(a("c13c"),Object(f["a"])(Nt,zt,It,!1,null,"3421dc14",null));Mt.options.__file="Dairy.vue";var Dt=Mt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"instant-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.instant,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},Ft=[],At={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},qt=At,Ht=(a("2a6a"),Object(f["a"])(qt,Tt,Ft,!1,null,"6027c6da",null));Ht.options.__file="Instant.vue";var Bt=Ht.exports,Kt={components:{Snack:_t,Drink:wt,Noodle:Pt,Dairy:Dt,Instant:Bt}},Jt=Kt,Wt=(a("9ad9"),Object(f["a"])(Jt,ft,mt,!1,null,"7daa7de2",null));Wt.options.__file="categorybar.vue";var Vt=Wt.exports,Ut={components:{Header:ut,CategoryBar:Vt}},Xt=Ut,Gt=(a("39ce"),Object(f["a"])(Xt,st,nt,!1,null,"420cca28",null));Gt.options.__file="Commodity.vue";var Yt=Gt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-container"},[a("div",{staticClass:"category-main"},[a("transition",{attrs:{name:"component-fade",mode:"out-in"}},["ALL"==this.$store.state.selected?a("All"):"item1"==this.$store.state.selected?a("Item1"):"item2"==this.$store.state.selected?a("Item2"):"item3"==this.$store.state.selected?a("Item3"):"item4"==this.$store.state.selected?a("Item4"):t._e()],1)],1)])},Qt=[],te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},ee=[],ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-container"},[a("div",{staticClass:"product-item"},t._l(this.$store.state.products,function(e){return a("div",{key:e.id,staticClass:"product-align"},[a("div",{staticClass:"product"},[a("div",{staticClass:"product-left-section"},[a("img",{staticClass:"product-img",attrs:{src:e.url,fluid:"",alt:"image"}})]),a("div",{staticClass:"product-right-section"},[a("span",{staticClass:"product-text"},[a("div",{staticClass:"text-header"},[a("router-link",{attrs:{to:{name:"item",params:{item:e.productName}}}},[a("p",{on:{click:function(a){t.send_data(e)}}},[t._v(t._s(e.productName))])])],1),a("div",{staticClass:"text-main"},[a("p",[t._v(" DESCRIPT")]),a("p",[t._v(t._s(e.productTaste))]),a("p",[a("i",{staticClass:"far fa-heart fa-bold fa-lg",staticStyle:{"margin-right":"10px"}}),t._v(" \n                                    LIKE   "),a("span",{staticClass:"text-item"},[t._v(t._s(e.likeCount))])]),a("p",[a("i",{staticClass:"far fa-user fa-bold fa-lg",staticStyle:{"margin-right":"10px"}}),t._v(" REVIEW   \n                            "),a("span",{staticClass:"text-item"},[t._v(t._s(e.review))])])])])])])])}))])},ie=[],se=a("bc3a"),ne=a.n(se),oe={methods:Object(r["a"])({},Object(l["b"])({send_data:"Send_data"})),data:function(){return{param:[],item:[]}},created:function(){this.param=this.$route.params.id,this.item=this.$store.state.selected},mounted:function(){var t=this,e="product/information";ne.a.get("".concat(e,"/").concat(this.param,"/").concat(this.item)).then(function(e){return t.$store.state.products=e.data}).catch()}},ce=oe,re=(a("cb26"),Object(f["a"])(ce,ae,ie,!1,null,"430e284a",null));re.options.__file="ProductCard.vue";var le=re.exports,de={components:{ProductCard:le}},ue=de,fe=(a("6ae7"),Object(f["a"])(ue,te,ee,!1,null,"02aab991",null));fe.options.__file="commodity_all.vue";var me=fe.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},ve=[],be={components:{ProductCard:le}},he=be,ge=(a("a5b5"),Object(f["a"])(he,pe,ve,!1,null,"7a8d0c7c",null));ge.options.__file="commodity_item1.vue";var _e=ge.exports,je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},Ce=[],ye={components:{ProductCard:le}},xe=ye,ke=(a("d794"),Object(f["a"])(xe,je,Ce,!1,null,"551b5eb3",null));ke.options.__file="commodity_item2.vue";var we=ke.exports,Oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},$e=[],Se={components:{ProductCard:le}},Ee=Se,Le=(a("a562"),Object(f["a"])(Ee,Oe,$e,!1,null,"168f3952",null));Le.options.__file="commodity_item3.vue";var Pe=Le.exports,ze=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},Ie=[],Re={components:{ProductCard:le}},Ne=Re,Me=(a("c20e"),Object(f["a"])(Ne,ze,Ie,!1,null,"bb07b98e",null));Me.options.__file="commodity_item4.vue";var De=Me.exports,Te={data:function(){return{}},components:{All:me,Item1:_e,Item2:we,Item3:Pe,Item4:De},methods:{computed:function(){}}},Fe=Te,Ae=(a("15b1"),Object(f["a"])(Fe,Zt,Qt,!1,null,"0f66f0e6",null));Ae.options.__file="productsection.vue";var qe=Ae.exports,He=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-container"},[a("router-link",{attrs:{to:{name:t.home,path:"/home"}}},[a("b-img",{staticClass:"logo",attrs:{src:"https://i.postimg.cc/MGLq0ygP/Chew-Eat-logo-red.png",fluid:"",alt:"Responsive image"}})],1)],1)},Be=[],Ke={},Je=Ke,We=(a("eb8f"),Object(f["a"])(Je,He,Be,!1,null,"241b0aa1",null));We.options.__file="logo.vue";var Ve=We.exports,Ue={components:{Commodity:Yt,ProductSection:qe,Logo:Ve}},Xe=Ue,Ge=(a("1449"),Object(f["a"])(Xe,at,it,!1,null,"f975c476",null));Ge.options.__file="CommodityView.vue";var Ye=Ge.exports,Ze=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-container"},[a("product-header"),this.$store.state.information!=[]?a("product-main",{attrs:{id:"product-main"}}):t._e(),this.$store.state.information!=[]?a("product-review"):t._e()],1)},Qe=[],ta=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Logo")],1)},ea=[],aa={components:{Logo:Ve}},ia=aa,sa=(a("bd49"),Object(f["a"])(ia,ta,ea,!1,null,"4fcccafb",null));sa.options.__file="product_header.vue";var na=sa.exports,oa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-main"},[a("div",{staticClass:"item-align"},[a("div",{staticClass:"item-image-section"},[a("b-img",{staticClass:"item-img",attrs:{src:"https://i.postimg.cc/mrgQqF8W/Chew-Eat-favor1.jpg",alt:"image"}})],1),a("div",{staticClass:"item-text-section"},[a("div",{staticClass:"item-text-header"},[t._v("\n                        "+t._s(t.information.productName)+"\n                    ")]),a("div",{staticClass:"item-text-main"},[a("div",{staticClass:"item-text-main-left"},[a("div",{staticClass:"left-main-nutrient"},[a("i",{staticClass:"fas fa-apple-alt fa-lg",staticStyle:{"margin-right":"10px"}}),t._v("Nutrient Section\n                                "),a("p",{staticClass:"information-p"},[t._v(t._s(t.information.productMatrials))])]),a("div",{staticClass:"left-main-allerginic"},[a("i",{staticClass:"fas fa-exclamation-circle fa-bold fa-lg",staticStyle:{"margin-right":"10px"}}),t._v("Allergenic Section\n                                "),a("p",{staticClass:"information-p"},[t._v(t._s(t.information.allergenic))])])]),a("div",{staticClass:"item-text-main-right"},[a("div",{staticClass:"right-main-information"},[a("span",{staticClass:"information-like"},[a("p",{staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.Count(t.information.like++)}}},[a("i",{staticClass:"far fa-heart fa-bold fa-lg",staticStyle:{"margin-right":"10px"}}),t._v("\n                                        Like  \n                                        "),a("span",{staticClass:"information-item"},[t._v(t._s(t.information.likeCount))])])]),a("span",{staticClass:"information-review"},[a("p",{staticStyle:{"margin-left":"2px","margin-bottom":"20px"}},[a("i",{staticClass:"far fa-user fa-bold fa-lg",staticStyle:{"margin-right":"10px"}}),t._v("\n                                        Review  \n                                        "),a("span",{staticClass:"information-item"},[t._v(t._s(t.information.review))])])])]),a("div",{staticClass:"right-main-comment"},[a("i",{staticClass:"far fa-comment-dots fa-bold fa-lg",staticStyle:{"margin-right":"10px"}}),t._v("Comment \n                                "),a("p",{staticClass:"information-p"},[t._v(t._s(t.information.createdTime))])])])])])])]),a("div",{staticClass:"item-chart"},[a("div",{staticClass:"chart-header"},[t._v("\n                Nutrient Percent\n            ")]),a("div",{staticClass:"chart-main"},[a("chart-module",{staticClass:"item-chart"})],1)])])},ca=[],ra=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{ref:"myChart"})},la=[],da={data:function(){return{chartdata:[],ProductID:[]}},mounted:function(){new this.ChartJS(this.$refs.myChart,{type:"pie",data:{datasets:[{label:"Nutrient",backgroundColor:["rgba(255, 56, 32, 1)","rgba(255, 56, 32, 0.7)","rgba(255, 56, 32, 0.4)","rgba(32, 24, 21, 0.2)","rgba(32, 24, 21, 0.4)","rgba(32, 24, 21, 0.7)"],data:this.$store.state.charts}],labels:["Natrium","Carbohydrate","Sugars","Fat","Cholesterol","Protein"]},options:{legend:{position:"bottom",labels:{fontSize:10,padding:15},fullWidth:!0},animation:{animateRotate:!0,animateScale:!0},tooltips:{titleFontSize:30,bodyFontSize:14,caretPadding:10,caretSize:13,xPadding:50,yPadding:10,bodySpacing:30}}})}},ua=da,fa=Object(f["a"])(ua,ra,la,!1,null,null,null);fa.options.__file="Chartmodule.vue";var ma=fa.exports,pa={data:function(){return{value:{data1:30,data2:35,data3:40,data4:38,data5:45,data6:32},information:[]}},created:function(){this.information=this.$store.state.information},components:{ChartModule:ma}},va=pa,ba=(a("b368"),Object(f["a"])(va,oa,ca,!1,null,"22a321f6",null));ba.options.__file="product_main.vue";var ha=ba.exports,ga=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-review-container"},[a("review-header"),a("review-input"),a("review-list")],1)},_a=[],ja=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inputBox shadow"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.review,expression:"review"}],attrs:{type:"text"},domProps:{value:t.review},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.review=e.target.value)}}}),a("span",{staticClass:"addContainer",on:{click:t.addTodo}},[a("i",{staticClass:"fas fa-paper-plane fa-lg addBtn",staticStyle:{color:"#FF3820"}})]),t.showModal?a("Modal",{on:{close:function(e){t.showModal=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("\n            WARNING  \n        ")]),a("i",{staticClass:"closeModalBtn fas fa-times fa-2x",attrs:{slot:"icon"},on:{click:function(e){t.showModal=!1}},slot:"icon"}),a("div",{attrs:{slot:"body"},slot:"body"},[t._v("\n            No Text entered here!! "),a("br"),t._v("\n            Please enter any Text\n        ")])]):t._e()],1)},Ca=[],ya=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header"),t._t("icon")],2),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},xa=[],ka={},wa=ka,Oa=(a("10a7"),Object(f["a"])(wa,ya,xa,!1,null,null,null));Oa.options.__file="modal.vue";var $a=Oa.exports,Sa={data:function(){return{review:"",showModal:!1}},components:{Modal:$a},methods:{addTodo:function(){""!==this.review?(this.$store.commit("addOneItem",this.review),this.review=""):this.showModal=!this.showModal}}},Ea=Sa,La=(a("4f21"),Object(f["a"])(Ea,ja,Ca,!1,null,"7ebcf90e",null));La.options.__file="review_input.vue";var Pa=La.exports,za=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.$store.state.reviews,function(e,i){return a("li",{key:e.item,staticClass:"shadow"},[t._v("\n            "+t._s(e.item)+"\n            "),a("span",{staticClass:"like-button"},[a("span",{staticClass:"like-count"},[t._v(t._s(e.likeCount))]),0==e.completed?a("i",{staticClass:"far fa-heart fa-bold fa-lg",on:{click:function(a){t.Count({review:e,index:i})}}}):a("i",{staticClass:"fas fa-heart fa-bold fa-lg",on:{click:function(a){t.Count2({review:e,index:i})}}})])])}))],1)},Ia=[],Ra={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({Count:"ClickOneItem",Count2:"ReturnOneItem"}))},Na=Ra,Ma=(a("df8a"),Object(f["a"])(Na,za,Ia,!1,null,"93ea1f78",null));Ma.options.__file="review_list.vue";var Da=Ma.exports,Ta=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"review-header"},[t._v("\n    REVIEW\n")])},Fa=[],Aa={},qa=Aa,Ha=(a("7c9c"),Object(f["a"])(qa,Ta,Fa,!1,null,"13424976",null));Ha.options.__file="review_header.vue";var Ba=Ha.exports,Ka={data:function(){return{reviews:[],root:[]}},components:{ReviewList:Da,ReviewInput:Pa,ReviewHeader:Ba},created:function(){this.root=this.$store.state.information.productName,ne.a.get("./information/review/".concat(this.root)).then(function(t){return console.log(t.data.review)}).catch()}},Ja=Ka,Wa=(a("3cf0"),Object(f["a"])(Ja,ga,_a,!1,null,"2790bca0",null));Wa.options.__file="product_review.vue";var Va=Wa.exports,Ua={components:{ProductHeader:na,ProductMain:ha,ProductReview:Va}},Xa=Ua,Ga=(a("b52e"),Object(f["a"])(Xa,Ze,Qe,!1,null,"2fe4378d",null));Ga.options.__file="ProductView.vue";var Ya=Ga.exports;i["a"].use(P["a"]);var Za=new P["a"]({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:et},{path:"/commodity/:id",name:"commodity",props:!0,component:Ye},{path:"/commodity/product/:item",name:"item",props:!0,component:Ya},{path:"/community",name:"community"}]}),Qa=a("9f7b"),ti=(a("f9e3"),a("2dd8"),a("5b20")),ei=a.n(ti),ai={install:function(t){t.prototype.ChartJS=ei.a}};i["a"].config.productionTip=!1,i["a"].use(Qa["a"]),i["a"].use(ai),new i["a"]({render:function(t){return t(k)},store:L,router:Za}).$mount("#app")},"58c6":function(t,e,a){"use strict";var i=a("5d9e"),s=a.n(i);s.a},"5a6a":function(t,e,a){"use strict";var i=a("add2"),s=a.n(i);s.a},"5d9e":function(t,e,a){},"6ae7":function(t,e,a){"use strict";var i=a("8b2e"),s=a.n(i);s.a},"6bdb":function(t,e,a){},"6f44":function(t,e,a){},7031:function(t,e,a){},"729a":function(t,e,a){},7373:function(t,e,a){"use strict";var i=a("aff7"),s=a.n(i);s.a},"7c9c":function(t,e,a){"use strict";var i=a("ec5c"),s=a.n(i);s.a},8363:function(t,e,a){},"8b2e":function(t,e,a){},"934c":function(t,e,a){},"96a2":function(t,e,a){},"999a":function(t,e,a){},"9ad9":function(t,e,a){"use strict";var i=a("e188"),s=a.n(i);s.a},"9cec":function(t,e,a){},"9fc2":function(t,e,a){},a562:function(t,e,a){"use strict";var i=a("f23a"),s=a.n(i);s.a},a5b5:function(t,e,a){"use strict";var i=a("44cc"),s=a.n(i);s.a},aac7:function(t,e,a){"use strict";var i=a("8363"),s=a.n(i);s.a},add2:function(t,e,a){},aff7:function(t,e,a){},b037:function(t,e,a){},b368:function(t,e,a){"use strict";var i=a("999a"),s=a.n(i);s.a},b52e:function(t,e,a){"use strict";var i=a("dca6"),s=a.n(i);s.a},b888:function(t,e,a){},bd49:function(t,e,a){"use strict";var i=a("6f44"),s=a.n(i);s.a},c13c:function(t,e,a){"use strict";var i=a("d212"),s=a.n(i);s.a},c20e:function(t,e,a){"use strict";var i=a("b037"),s=a.n(i);s.a},c21b:function(t,e,a){},c30c:function(t,e,a){"use strict";var i=a("fe27"),s=a.n(i);s.a},cb26:function(t,e,a){"use strict";var i=a("517c"),s=a.n(i);s.a},d212:function(t,e,a){},d794:function(t,e,a){"use strict";var i=a("96a2"),s=a.n(i);s.a},dca6:function(t,e,a){},df8a:function(t,e,a){"use strict";var i=a("934c"),s=a.n(i);s.a},e188:function(t,e,a){},eb8f:function(t,e,a){"use strict";var i=a("7031"),s=a.n(i);s.a},ec5c:function(t,e,a){},f23a:function(t,e,a){},fc4a:function(t,e,a){"use strict";var i=a("6bdb"),s=a.n(i);s.a},fe27:function(t,e,a){}});
//# sourceMappingURL=app.03d4e3e9.js.map