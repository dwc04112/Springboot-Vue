(function(t){function e(e){for(var a,i,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d398f2d1"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var c=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},u=i,s=n("2877"),c=n("6544"),l=n.n(c),p=n("7496"),f=n("40dc"),d=n("8336"),v=n("132d"),m=n("adda"),b=n("f6c4"),h=n("2fa4"),g=Object(s["a"])(u,r,o,!1,null,null,null),y=g.exports;l()(g,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VIcon:v["a"],VImg:m["a"],VMain:b["a"],VSpacer:h["a"]});n("d3b7"),n("3ca3"),n("ddb0");var w=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticStyle:{width:"30%"}},[n("v-text-field",{attrs:{label:"1 or 2"},model:{value:t.b1,callback:function(e){t.b1=e},expression:"b1"}}),n("v-btn",{attrs:{outlined:""},on:{click:t.button}},[t._v("Click")]),n("p",[t._v(t._s(t.a))])],1)],1)},x=[],_={name:"App",data:function(){return{b1:"",a:""}},methods:{button:function(){var t=this;this.$axios.get("board/example",{params:{tEst:this.b1}}).then((function(e){console.log(e.data),t.a=e.data}))}}},k=_,O=n("b0af"),V=n("a523"),C=n("8654"),P=Object(s["a"])(k,j,x,!1,null,null,null),S=P.exports;l()(P,{VBtn:d["a"],VCard:O["a"],VContainer:V["a"],VTextField:C["a"]}),a["a"].use(w["a"]);var A=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new w["a"]({routes:A}),T=E,$=n("f309");a["a"].use($["a"]);var M=new $["a"]({}),B=n("bc3a"),L=n.n(B);a["a"].prototype.$eventBus=new a["a"],a["a"].prototype.$axios=L.a,a["a"].config.productionTip=!1,new a["a"]({router:T,vuetify:M,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.7fbf15b0.js.map