(function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],p=0,f=[];p<u.length;p++)i=u[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"08fa":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",[t._v(t._s(t.msg))]),n("div",[t._v(t._s(t.data))]),n("button",{on:{click:t.getMusic}},[t._v("get")])])},u=[],c={name:"HelloWorld",props:{msg:String},data:function(){return{data:""}},methods:{getMusic:function(){this.$axios.get("https://api.kkbox.com/v1.1/search?q=盧芸&type=artist,track&territory=TW",{headers:{Authorization:"Bearer "+this.data.access_token}}).then(function(t){})}},mounted:function(){var t=this;this.$axios.get("http://localhost:3000/token").then(function(e){console.log(e.data),t.data=e.data})}},l=c,s=(n("d17d"),n("2877")),p=Object(s["a"])(l,i,u,!1,null,"7d5897f1",null);p.options.__file="HelloWorld.vue";var f=p.exports,d={name:"app",components:{HelloWorld:f}},v=d,h=(n("034f"),Object(s["a"])(v,o,a,!1,null,null,null));h.options.__file="App.vue";var g=h.exports,b=n("bc3a"),m=n.n(b);r["a"].config.productionTip=!1,r["a"].prototype.$axios=m.a,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d17d:function(t,e,n){"use strict";var r=n("08fa"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f24d09c1.js.map