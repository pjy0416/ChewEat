(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)o=c[u],s[o]&&f.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"009b":function(t,e,a){},"034f":function(t,e,a){"use strict";var i=a("c21b"),s=a.n(i);s.a},"0471":function(t,e,a){"use strict";var i=a("33a1"),s=a.n(i);s.a},"07f5":function(t,e,a){},"10a7":function(t,e,a){"use strict";var i=a("402e"),s=a.n(i);s.a},"15b1":function(t,e,a){"use strict";var i=a("9fc2"),s=a.n(i);s.a},1942:function(t,e,a){},"1b3a":function(t,e,a){"use strict";var i=a("dc0b"),s=a.n(i);s.a},"1d96":function(t,e,a){"use strict";var i=a("b46c"),s=a.n(i);s.a},"1e1e":function(t,e,a){"use strict";var i=a("c486"),s=a.n(i);s.a},"2eaf":function(t,e,a){"use strict";var i=a("55c9"),s=a.n(i);s.a},3066:function(t,e,a){"use strict";var i=a("67c7"),s=a.n(i);s.a},"33a1":function(t,e,a){},3693:function(t,e,a){},"378d":function(t,e,a){"use strict";var i=a("90dd"),s=a.n(i);s.a},3824:function(t,e,a){"use strict";var i=a("8863"),s=a.n(i);s.a},"39ce":function(t,e,a){"use strict";var i=a("1942"),s=a.n(i);s.a},"402e":function(t,e,a){},4063:function(t,e,a){"use strict";var i=a("b7ca"),s=a.n(i);s.a},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c96","./es-us.js":"55c96","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){var e=i[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="4678"},"46bf":function(t,e,a){},5292:function(t,e,a){},"55c9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("transition",{key:t.$route.params.id,attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar",class:{sidebar_active:this.active}},[a("div",{staticClass:"toggle-btn",on:{click:function(e){t.toggleComplete()}}},["home"==this.$route.name?a("div",[0==this.open?a("i",{staticClass:"fas fa-bars fa-3x open-btn",staticStyle:{color:"white"}}):a("i",{staticClass:"fas fa-times fa-3x close-btn",staticStyle:{color:"white"}})]):a("div",[0==this.open?a("i",{staticClass:"fas fa-bars fa-2x open-btn",staticStyle:{color:"#FF3820"}}):a("i",{staticClass:"fas fa-times fa-2x close-btn",staticStyle:{color:"#FF3820"}})])]),a("ul",{staticClass:"category-section"},[a("li",{staticClass:"logo"},[a("b-img",{attrs:{src:"http://drive.google.com/uc?export=view&id=1Me_8LWw7gHN_8dgTSqWeFZ1_9lYSIYtV",fluid:""}})],1),a("router-link",{staticClass:"routes",attrs:{to:{name:t.home,path:"/home"}}},[a("li",{staticClass:"category"},[a("b-img",{attrs:{src:"http://drive.google.com/uc?export=view&id=1Ne9-4im_z9krgVYwrXS1cMVqyjzDuuvU",fluid:"",alt:"Responsive image"}})],1)]),t._l(this.$store.state.categories,function(e){return a("li",{key:e.id,staticClass:"category",on:{click:function(e){t.PageRefresh()}}},[a("router-link",{staticClass:"routes",attrs:{to:{name:"commodity",params:{id:e.id}}}},[a("b-img",{attrs:{src:e.url,fluid:"",alt:"Responsive image"}})],1)],1)})],2)])},c=[],r=a("c93e"),l=a("2f62"),d={data:function(){return{active:!0,open:!0}},methods:Object(r["a"])({toggleComplete:function(){this.active=!this.active,this.open=!this.open}},Object(l["b"])({PageRefresh:"remove_data"}))},u=d,f=(a("dd3b"),a("2877")),m=Object(f["a"])(u,o,c,!1,null,"221878a6",null);m.options.__file="navigation.vue";var v=m.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-section"},[a("div",{staticClass:"footer-header"},[a("p",[t._v("이용약관 | 개인정보 처리방침 | 법적고지 및 주의사항 | 고객센터 |")])]),a("div",{staticClass:"footer-main"},[a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem similique dignissimos. "),a("br"),t._v(" Alias blanditiis labore inventore quisquam, magni molestiae quidem unde nam aliquid, "),a("br"),t._v(" \n        error dicta facilis sunt est animi ratione!")])]),a("div",{staticClass:"footer-footer"},[a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])])}],h={},g=h,_=(a("79fa"),Object(f["a"])(g,p,b,!1,null,"6b4a9508",null));_.options.__file="footer.vue";var j=_.exports,C={name:"app",components:{Navigation:v,Footer:j}},y=C,x=(a("034f"),Object(f["a"])(y,s,n,!1,null,null,null));x.options.__file="App.vue";var k=x.exports,w={fetch:function(){var t=[];if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!==localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}},O={selected:[],snack:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Sweet",value:"item1"},{id:2,text:"Chocolate",value:"item2"},{id:3,text:"Cheese&Butter",value:"item3"},{id:4,text:"Potato",value:"item4"}],noodle:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Ramyun",value:"item1"},{id:2,text:"Cold Noodle",value:"item2"},{id:3,text:"Soba & Udon",value:"item3"},{id:4,text:"Traditional",value:"item4"}],drink:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Fruits",value:"item1"},{id:2,text:"Spackling",value:"item2"},{id:3,text:"ion",value:"item3"},{id:4,text:"Traditional",value:"item4"}],dairy:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Milk",value:"item1"},{id:2,text:"Yogurt",value:"item2"},{id:3,text:"Cheese",value:"item3"}],instant:[{id:0,text:"ALL",value:"ALL"},{id:1,text:"Curry",value:"item1"},{id:2,text:"Frozen Food",value:"item2"},{id:3,text:"Canned",value:"item3"},{id:4,text:"Soup",value:"item4"}],categories:[{id:"snack",index:1,value:"Snack",url:"http://drive.google.com/uc?export=view&id=1qHj2-a0JhvAgeuz537U5TDTRHhvZdqPd"},{id:"noodle",index:2,value:"Noodle",url:"http://drive.google.com/uc?export=view&id=11Hwpn1maS4RnaqupM3CHs1qBCnWScjQw"},{id:"drink",index:3,value:"Drink",url:"http://drive.google.com/uc?export=view&id=1LU-BKYcDUge246A05hKDwXWpNuexeEtC"},{id:"dairy",index:4,value:"Dairy ",url:"http://drive.google.com/uc?export=view&id=1pUxben8VZKfGWYfpC-8x96Y8ELQBlFZ4"},{id:"instant",index:5,value:"Instant",url:"http://drive.google.com/uc?export=view&id=1KNGq-aD5etDdl4OgJhST0nz1DIWVrmjM"}],products:[{id:0,src:"http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6",title:"title0",dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit",like:"123",item:"item1",nutrient:"Nutrient section",allerginic:"allerginic section",review:10,comment:"Comment Section"},{id:1,src:"http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6",title:"title1",dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit",like:"500",item:"item2",nutrient:"Nutrient section",allerginic:"allerginic section",review:10,comment:"Comment Section"},{id:2,src:"http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6",title:"title2",dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit",like:"451",item:"item3",nutrient:"Nutrient section",allerginic:"allerginic section",review:10,comment:"Comment Section"},{id:3,src:"http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6",title:"title3",dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit",like:"200",item:"item4",nutrient:"Nutrient section",allerginic:"allerginic section",review:10,comment:"Comment Section"},{id:4,src:"http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6",title:"title4",dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit",like:"300",item:"item5",nutrient:"Nutrient section",allerginic:"allerginic section",review:10,comment:"Comment Section"},{id:5,src:"http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6",title:"title5",dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit",like:"400",item:"item6",nutrient:"Nutrient section",allerginic:"allerginic section",review:10,comment:"Comment Section"}],product_fetch:[],value:{data1:30,data2:35,data3:40,data4:38,data5:45,data6:45},information:[],reviews:w.fetch()},S={storedTodoItems:function(t){return t.reviews}},$={push_data:function(t,e){t.selected=e},remove_data:function(t){t.selected=[]},Send_data:function(t,e){t.information=e},addOneItem:function(t,e){var a={completed:!1,item:e,count:0};localStorage.setItem(e,JSON.stringify(a)),t.reviews.push(a)},ClickOneItem:function(t,e){t.reviews[e.index].completed=!t.reviews[e.index].completed,t.reviews[e.index].count+=1},ReturnOneItem:function(t,e){t.reviews[e.index].completed=!t.reviews[e.index].completed,t.reviews[e.index].count-=1},SET_PRODUCT:function(t,e){t.product_fetch=e,console.log(e)}},L=a("bc3a"),E=a.n(L),z={product:"/api/test/query2"};function P(){return E.a.get(z.product)}var T={FETCH_PRODUCT:function(){return P().then(function(t){return t}).catch()}};i["a"].use(l["a"]);var D=new l["a"].Store({state:O,getters:S,mutations:$,actions:T}),I=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("div",{staticClass:"header-container"},[a("page-description")],1),a("div",{staticClass:"main-container"},[a("famous-commodity",{staticClass:"famouse-commodity"}),a("Recommend")],1)])},R=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-descriptione"},[a("div",{staticClass:"img-section"},[a("div",{staticClass:"logo-container"},[a("b-img",{staticClass:"logo",attrs:{src:"http://drive.google.com/uc?export=view&id=18bQhp3wslCjsCawTKnS4sXxSc4iFhO1C",fluid:""}})],1),a("b-carousel",{attrs:{id:"carousel1",interval:1500},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/JzLz2c6G/Kakao-Talk-20181118-231403896.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/JzLz2c6G/Kakao-Talk-20181118-231403896.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/JzLz2c6G/Kakao-Talk-20181118-231403896.jpg"}})],1)],1)])},M=[],F={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},q=F,K=(a("f465"),Object(f["a"])(q,N,M,!1,null,"bbe1989a",null));K.options.__file="page-description.vue";var Y=K.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"famous-commodity"},[t._m(0),a("div",{staticClass:"section-image"},[a("b-carousel",{attrs:{id:"carousel",controls:"",interval:!1},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/HL3D3bRD/Kakao-Talk-20181118-231344455.png"}})],1)],1)])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-name"},[a("p",[t._v("FAMOUS COMMODITY")])])}],U={data:function(){return{slide:0}},methods:{}},J=U,W=(a("378d"),Object(f["a"])(J,H,V,!1,null,"726688aa",null));W.options.__file="famous-commodity.vue";var B=W.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend-section"},[a("b-carousel",{attrs:{id:"carouse2",interval:1500},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide2,callback:function(e){t.slide2=e},expression:"slide2"}},[a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/k5RYRKCv/Kakao-Talk-20181118-231404910.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/k5RYRKCv/Kakao-Talk-20181118-231404910.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.postimg.cc/k5RYRKCv/Kakao-Talk-20181118-231404910.jpg"}})],1)],1)},G=[],Z={data:function(){return{slide2:0,sliding2:null}},methods:{onSlideStart:function(){this.sliding2=!0},onSlideEnd:function(){this.sliding2=!1}}},Q=Z,tt=(a("ce29"),Object(f["a"])(Q,X,G,!1,null,"3c049771",null));tt.options.__file="recommend.vue";var et=tt.exports,at={components:{PageDescription:Y,FamousCommodity:B,Recommend:et}},it=at,st=(a("0471"),Object(f["a"])(it,A,R,!1,null,null,null));st.options.__file="HomeView.vue";var nt=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{key:t.$route.params.id},[a("Logo"),a("div",{attrs:{id:"commodity"}},[a("Commodity")],1),a("transition",{attrs:{name:"component-fade",mode:"out-in"}},[a("product-section")],1)],1)])},ct=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity-container"},[a("Header"),a("CategoryBar")],1)},lt=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commodity-name"},[a("p",{staticClass:"commodity-header"},[t._v(t._s(t._f("capitalize")(t.$route.params.id)))])])},ut=[],ft=(a("6b54"),{data:function(){return{header:[]}},filters:{capitalize:function(t){return t?(t=t.toString(),t.toUpperCase()):""}}}),mt=ft,vt=(a("2eaf"),Object(f["a"])(mt,dt,ut,!1,null,"4cfac3a8",null));vt.options.__file="header.vue";var pt=vt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-container"},[a("div",{staticClass:"category-main"},["snack"==this.$route.params.id?a("Snack"):"drink"==this.$route.params.id?a("Drink"):"noodle"==this.$route.params.id?a("Noodle"):"dairy"==this.$route.params.id?a("Dairy"):"instant"==this.$route.params.id?a("Instant"):t._e()],1)])},ht=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"snack-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.snack,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},_t=[],jt={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},Ct=jt,yt=(a("f4f8"),Object(f["a"])(Ct,gt,_t,!1,null,"8984bb0e",null));yt.options.__file="Snack.vue";var xt=yt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drink-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.drink,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},wt=[],Ot={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},St=Ot,$t=(a("d96b"),Object(f["a"])(St,kt,wt,!1,null,"0a2791b6",null));$t.options.__file="Drink.vue";var Lt=$t.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noodle-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.noodle,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},zt=[],Pt={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},Tt=Pt,Dt=(a("4063"),Object(f["a"])(Tt,Et,zt,!1,null,"ed59dd9e",null));Dt.options.__file="Noodle.vue";var It=Dt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dairy-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.dairy,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},Rt=[],Nt={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},Mt=Nt,Ft=(a("8d0e"),Object(f["a"])(Mt,At,Rt,!1,null,"a1f247e2",null));Ft.options.__file="Dairy.vue";var qt=Ft.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"instant-category"},[a("div",{staticClass:"category-section"},[a("b-row",t._l(this.$store.state.instant,function(e){return a("b-col",{key:e.text,staticClass:"category-column"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit"},domProps:{value:e.text},on:{click:function(a){t.send_data(e.value,a)}}})])}))],1)])},Yt=[],Ht={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({send_data:"push_data"}))},Vt=Ht,Ut=(a("1b3a"),Object(f["a"])(Vt,Kt,Yt,!1,null,"86d97e1a",null));Ut.options.__file="Instant.vue";var Jt=Ut.exports,Wt={components:{Snack:xt,Drink:Lt,Noodle:It,Dairy:qt,Instant:Jt}},Bt=Wt,Xt=(a("9ad9"),Object(f["a"])(Bt,bt,ht,!1,null,"7daa7de2",null));Xt.options.__file="categorybar.vue";var Gt=Xt.exports,Zt={components:{Header:pt,CategoryBar:Gt}},Qt=Zt,te=(a("39ce"),Object(f["a"])(Qt,rt,lt,!1,null,"420cca28",null));te.options.__file="Commodity.vue";var ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-container"},[a("div",{staticClass:"category-main"},[a("transition",{attrs:{name:"component-fade",mode:"out-in"}},["ALL"==this.$store.state.selected?a("All"):"item1"==this.$store.state.selected?a("Item1"):"item2"==this.$store.state.selected?a("Item2"):"item3"==this.$store.state.selected?a("Item3"):"item4"==this.$store.state.selected?a("Item4"):t._e()],1)],1)])},ie=[],se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},ne=[],oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-container"},[a("div",{staticClass:"product-item"},t._l(this.$store.state.product_fetch,function(e){return a("div",{key:e,staticClass:"product-align"},[t._v("\n            console.log('heollo');\n            console.log(item);\n            "),a("div",{staticClass:"product"},[a("div",{staticClass:"product-left-section"},[a("img",{staticClass:"product-img",attrs:{src:e.src,fluid:"",alt:"image"}})]),a("div",{staticClass:"product-right-section"},[a("span",{staticClass:"product-text"},[a("div",{staticClass:"text-header"},[a("router-link",{attrs:{to:{name:"item",params:{item:e[0].productName}}}},[a("p",{on:{click:function(a){t.send_data(e)}}},[t._v(t._s(e.productName))])])],1),a("div",{staticClass:"text-main"},[a("p",[a("i",{staticClass:"far fa-heart fa-bold fa-lg"}),t._v(" LIKE   "+t._s(e.likeCount))]),a("p",[a("i",{staticClass:"far fa-user fa-bold fa-lg"}),t._v(" REVIEW   "+t._s(e.review))]),a("p",[t._v(" DESCRIPT")]),a("p",[t._v(t._s(e.productTaste))])])])])])])}))])},ce=[],re={methods:Object(r["a"])({},Object(l["b"])({send_data:"Send_data"}),{fetchProduct:function(){this.$store.dispatch("FETCH_PRODUCT")}}),created:function(){this.fetchProduct()}},le=re,de=(a("8b3e"),Object(f["a"])(le,oe,ce,!1,null,"aa73746a",null));de.options.__file="ProductCard.vue";var ue=de.exports,fe={components:{ProductCard:ue}},me=fe,ve=(a("6ae7"),Object(f["a"])(me,se,ne,!1,null,"02aab991",null));ve.options.__file="commodity_all.vue";var pe=ve.exports,be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},he=[],ge={components:{ProductCard:ue},methods:{fetchItem1:function(){this.$store.dispatch("FETCH_ItEM1")}},created:function(){this.fetchItem1()}},_e=ge,je=(a("1d96"),Object(f["a"])(_e,be,he,!1,null,"50920918",null));je.options.__file="commodity_item1.vue";var Ce=je.exports,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},xe=[],ke={components:{ProductCard:ue}},we=ke,Oe=(a("d794"),Object(f["a"])(we,ye,xe,!1,null,"551b5eb3",null));Oe.options.__file="commodity_item2.vue";var Se=Oe.exports,$e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},Le=[],Ee={components:{ProductCard:ue}},ze=Ee,Pe=(a("a562"),Object(f["a"])(ze,$e,Le,!1,null,"168f3952",null));Pe.options.__file="commodity_item3.vue";var Te=Pe.exports,De=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("product-card")],1)},Ie=[],Ae={components:{ProductCard:ue}},Re=Ae,Ne=(a("c20e"),Object(f["a"])(Re,De,Ie,!1,null,"bb07b98e",null));Ne.options.__file="commodity_item4.vue";var Me=Ne.exports,Fe={data:function(){return{}},components:{All:pe,Item1:Ce,Item2:Se,Item3:Te,Item4:Me},methods:{computed:function(){}}},qe=Fe,Ke=(a("15b1"),Object(f["a"])(qe,ae,ie,!1,null,"0f66f0e6",null));Ke.options.__file="productsection.vue";var Ye=Ke.exports,He=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-container"},[a("b-img",{staticClass:"logo",attrs:{src:"http://drive.google.com/uc?export=view&id=1PmtzaDFsYZHZVh-zVACw9txbyj42k7jL",fluid:""}})],1)},Ve=[],Ue={},Je=Ue,We=(a("1e1e"),Object(f["a"])(Je,He,Ve,!1,null,"78efc944",null));We.options.__file="logo.vue";var Be=We.exports,Xe={components:{Commodity:ee,ProductSection:Ye,Logo:Be}},Ge=Xe,Ze=(a("3066"),Object(f["a"])(Ge,ot,ct,!1,null,"09c0d430",null));Ze.options.__file="CommodityView.vue";var Qe=Ze.exports,ta=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-container"},[a("product-header"),this.$store.state.information!=[]?a("product-main",{attrs:{id:"product-main"}}):t._e(),a("product-review")],1)},ea=[],aa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Logo")],1)},ia=[],sa={components:{Logo:Be}},na=sa,oa=(a("bd49"),Object(f["a"])(na,aa,ia,!1,null,"4fcccafb",null));oa.options.__file="product_header.vue";var ca=oa.exports,ra=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-main"},[a("div",{staticClass:"item-align"},[a("div",{staticClass:"item-image-section"},[a("b-img",{staticClass:"item-img",attrs:{src:this.information.src,fluid:"",alt:"image"}})],1),a("div",{staticClass:"item-text-section"},[a("div",{staticClass:"item-text-header"},[t._v("\n                        "+t._s(t.information.productName)+"\n                    ")]),a("div",{staticClass:"item-text-main"},[a("div",{staticClass:"item-text-main-left"},[a("div",{staticClass:"left-main-nutrient"},[a("i",{staticClass:"fas fa-apple-alt fa-lg"}),t._v("Nutrient Section\n                                "),a("p",[t._v(t._s(t.information.productMatrials))])]),a("div",{staticClass:"left-main-allerginic"},[a("i",{staticClass:"fas fa-exclamation-circle fa-bold fa-lg"}),t._v("Allerginic Section\n                                "),a("p",[t._v(t._s(t.information.allergenic))])])]),a("div",{staticClass:"item-text-main-right"},[a("div",{staticClass:"right-main-information"},[a("span",{staticClass:"information-like"},[a("p",{on:{click:function(e){t.Count(t.information.like++)}}},[a("i",{staticClass:"far fa-heart fa-bold fa-lg"}),t._v("LIKE  \n                                        "+t._s(t.information.likeCount))])]),a("span",{staticClass:"information-review"},[a("p",{staticStyle:{"margin-left":"2px"}},[a("i",{staticClass:"far fa-user fa-bold fa-lg"}),t._v("\n                                        REVIEW  \n                                        "+t._s(t.information.review))])])]),a("div",{staticClass:"right-main-comment"},[a("i",{staticClass:"far fa-comment-dots fa-bold fa-lg"}),t._v("Comment\n                                "),a("p",[t._v(t._s(t.information.createdTime))])])])])])])]),a("div",{staticClass:"item-chart"},[a("div",{staticClass:"chart-header"},[t._v("\n                Nutrient Percent\n            ")]),a("div",{staticClass:"chart-main"},[a("chart-vue",{staticClass:"item-chart",attrs:{chartdata:t.value}})],1)])])},la=[],da=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{ref:"myChart"})},ua=[],fa={data:function(){return{data:[]}},props:["chartdata"],mounted:function(){this.data=this.chartdata,new this.ChartJS(this.$refs.myChart,{type:"pie",data:{datasets:[{label:"Nutrient",backgroundColor:["rgba(255, 56, 32, 1)","rgba(255, 56, 32, 0.7)","rgba(255, 56, 32, 0.4)","rgba(32, 24, 21, 0.2)","rgba(32, 24, 21, 0.4)","rgba(32, 24, 21, 0.7)"],data:[this.data.data1,this.data.data2,this.data.data3,this.data.data4,this.data.data5,this.data.data6]}],labels:["Natrium","Carbohydrate","Sugars","Fat","Cholesterol","Protein"]},options:{legend:{position:"bottom",labels:{fontSize:10,padding:15},fullWidth:!0},animation:{animateRotate:!0,animateScale:!0},tooltips:{titleFontSize:30,bodyFontSize:14,caretPadding:10,caretSize:13,xPadding:50,yPadding:10,bodySpacing:30}}})}},ma=fa,va=Object(f["a"])(ma,da,ua,!1,null,null,null);va.options.__file="chart.vue";var pa=va.exports,ba={data:function(){return{value:{data1:30,data2:35,data3:40,data4:38,data5:45,data6:32},information:[]}},created:function(){this.information=this.$store.state.information},components:{ChartVue:pa}},ha=ba,ga=(a("b014"),Object(f["a"])(ha,ra,la,!1,null,"78343ffa",null));ga.options.__file="product_main.vue";var _a=ga.exports,ja=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-review-container"},[a("review-header"),a("review-input"),a("review-list")],1)},Ca=[],ya=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inputBox shadow"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.review,expression:"review"}],attrs:{type:"text"},domProps:{value:t.review},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.review=e.target.value)}}}),a("span",{staticClass:"addContainer",on:{click:t.addTodo}},[a("i",{staticClass:"fas fa-paper-plane fa-lg addBtn",staticStyle:{color:"#FF3820"}})]),t.showModal?a("Modal",{on:{close:function(e){t.showModal=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("\r\n                WARNING  \r\n            ")]),a("i",{staticClass:"closeModalBtn fas fa-times fa-2x",attrs:{slot:"icon"},on:{click:function(e){t.showModal=!1}},slot:"icon"}),a("div",{attrs:{slot:"body"},slot:"body"},[t._v("\r\n                No Text entered here!! "),a("br"),t._v("\r\n                Please enter any Text\r\n            ")])]):t._e()],1)},xa=[],ka=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header"),t._t("icon")],2),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},wa=[],Oa={},Sa=Oa,$a=(a("10a7"),Object(f["a"])(Sa,ka,wa,!1,null,null,null));$a.options.__file="modal.vue";var La=$a.exports,Ea={data:function(){return{review:"",showModal:!1}},components:{Modal:La},methods:{addTodo:function(){""!==this.review?(this.$store.commit("addOneItem",this.review),this.review=""):this.showModal=!this.showModal}}},za=Ea,Pa=(a("3824"),Object(f["a"])(za,ya,xa,!1,null,"cebabb9e",null));Pa.options.__file="review_input.vue";var Ta=Pa.exports,Da=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.$store.state.reviews,function(e,i){return a("li",{key:e.item,staticClass:"shadow"},[t._v("\n            "+t._s(e.item)+"\n            "),a("span",{staticClass:"like-button"},[a("span",{staticClass:"like-count"},[t._v(t._s(e.count))]),0==e.completed?a("i",{staticClass:"far fa-heart fa-bold fa-lg",on:{click:function(a){t.Count({review:e,index:i})}}}):a("i",{staticClass:"fas fa-heart fa-bold fa-lg",on:{click:function(a){t.Count2({review:e,index:i})}}})])])}))],1)},Ia=[],Aa={data:function(){return{}},methods:Object(r["a"])({},Object(l["b"])({Count:"ClickOneItem",Count2:"ReturnOneItem"}))},Ra=Aa,Na=(a("a5ec"),Object(f["a"])(Ra,Da,Ia,!1,null,"2bcb72fa",null));Na.options.__file="review_list.vue";var Ma=Na.exports,Fa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"review-header"},[t._v("\n    REVIEW\n")])},qa=[],Ka={},Ya=Ka,Ha=(a("7c9c"),Object(f["a"])(Ya,Fa,qa,!1,null,"13424976",null));Ha.options.__file="review_header.vue";var Va=Ha.exports,Ua={data:function(){return{reviews:[]}},methods:{},components:{ReviewList:Ma,ReviewInput:Ta,ReviewHeader:Va}},Ja=Ua,Wa=(a("a099"),Object(f["a"])(Ja,ja,Ca,!1,null,"14d1067c",null));Wa.options.__file="product_review.vue";var Ba=Wa.exports,Xa={components:{ProductHeader:ca,ProductMain:_a,ProductReview:Ba}},Ga=Xa,Za=(a("a4db"),Object(f["a"])(Ga,ta,ea,!1,null,"ad9565d8",null));Za.options.__file="ProductView.vue";var Qa=Za.exports;i["a"].use(I["a"]);var ti=new I["a"]({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:nt},{path:"/commodity/:id",name:"commodity",props:!0,component:Qe},{path:"/commodity/product/:item",name:"item",props:!0,component:Qa},{path:"/community",name:"community"}]}),ei=a("9f7b"),ai=(a("f9e3"),a("2dd8"),a("5b20")),ii=a.n(ai),si={install:function(t){t.prototype.ChartJS=ii.a}};i["a"].config.productionTip=!1,i["a"].use(ei["a"]),i["a"].use(si),new i["a"]({render:function(t){return t(k)},store:D,router:ti}).$mount("#app")},"67c7":function(t,e,a){},"6ae7":function(t,e,a){"use strict";var i=a("8b2e"),s=a.n(i);s.a},"6f44":function(t,e,a){},"79fa":function(t,e,a){"use strict";var i=a("46bf"),s=a.n(i);s.a},"7c9c":function(t,e,a){"use strict";var i=a("ec5c"),s=a.n(i);s.a},8863:function(t,e,a){},"8b2e":function(t,e,a){},"8b3e":function(t,e,a){"use strict";var i=a("bfdc"),s=a.n(i);s.a},"8cf8":function(t,e,a){},"8d0e":function(t,e,a){"use strict";var i=a("8cf8"),s=a.n(i);s.a},"90dd":function(t,e,a){},9280:function(t,e,a){},"96a2":function(t,e,a){},"9ad9":function(t,e,a){"use strict";var i=a("e188"),s=a.n(i);s.a},"9fc2":function(t,e,a){},a099:function(t,e,a){"use strict";var i=a("9280"),s=a.n(i);s.a},a4db:function(t,e,a){"use strict";var i=a("f56c"),s=a.n(i);s.a},a562:function(t,e,a){"use strict";var i=a("f23a"),s=a.n(i);s.a},a5ec:function(t,e,a){"use strict";var i=a("3693"),s=a.n(i);s.a},b014:function(t,e,a){"use strict";var i=a("5292"),s=a.n(i);s.a},b037:function(t,e,a){},b46c:function(t,e,a){},b7ca:function(t,e,a){},bd49:function(t,e,a){"use strict";var i=a("6f44"),s=a.n(i);s.a},bfdc:function(t,e,a){},c20e:function(t,e,a){"use strict";var i=a("b037"),s=a.n(i);s.a},c21b:function(t,e,a){},c486:function(t,e,a){},ce29:function(t,e,a){"use strict";var i=a("e8d7"),s=a.n(i);s.a},cf16:function(t,e,a){},d794:function(t,e,a){"use strict";var i=a("96a2"),s=a.n(i);s.a},d96b:function(t,e,a){"use strict";var i=a("07f5"),s=a.n(i);s.a},dc0b:function(t,e,a){},dd3b:function(t,e,a){"use strict";var i=a("cf16"),s=a.n(i);s.a},de50:function(t,e,a){},e188:function(t,e,a){},e8d7:function(t,e,a){},ec5c:function(t,e,a){},f23a:function(t,e,a){},f465:function(t,e,a){"use strict";var i=a("009b"),s=a.n(i);s.a},f4f8:function(t,e,a){"use strict";var i=a("de50"),s=a.n(i);s.a},f56c:function(t,e,a){}});
//# sourceMappingURL=app.c1c2a0fe.js.map