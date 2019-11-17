(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={name:"app",components:{}},c=a,u=(n("034f"),n("2877")),s=Object(u["a"])(c,o,i,!1,null,null,null),l=s.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h2",[e._v("URL Shortener")]),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"text",name:"url",placeholder:"Input url",required:""},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),e.url?n("span",{staticClass:"clear",on:{click:e.clear}},[e._v("×")]):e._e()]),n("input",{attrs:{type:"submit",name:""}})]),e.link?n("div",{staticClass:"inline link"},[n("a",{attrs:{href:e.link,target:"_blank"}},[e._v(e._s(e.link))]),n("button",{on:{click:e.copy}},[e._v(e._s(e.copied?"Copied":"Copy"))])]):e._e()])},f=[],h=(n("d3b7"),n("ac1f"),n("1276"),n("9911"),{name:"Main",data:function(){return{url:"",result:"",error:"",link:"",copied:!1}},methods:{checkValidURL:function(){var e=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;return this.result=e.test(this.url),this.result&&this.error&&(this.error=""),this.result},handleSubmit:function(){var e=this;this.checkValidURL()?fetch("http://localhost:9000/api/url",{method:"POST",body:JSON.stringify({url:this.url}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.link=document.location.href.split("#")[0]+t.shortenCode,e.copied&&(e.copied=!1)})).catch((function(t){e.error="Something wrong:"+t})):(this.error="Please input the valid URL",this.link&&(this.link=""),this.copied&&(this.copied=!1))},copy:function(){var e=document.createElement("textarea");e.value=this.link,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.copied=!0},clear:function(){this.url="",this.link="",this.error=""}},watch:{url:function(e,t){e!==t&&(this.link&&(this.link=""),this.error&&(this.error=""),this.copied&&(this.copied=!1))}}}),m=h,v=(n("d952"),Object(u["a"])(m,d,f,!1,null,"df936d98",null)),b=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Oooops...We can not find "+e._s(e.$route.params.code?"shortenURL for "+e.$route.params.code:"this page"))]),n("p",[e._v("This page will redirect to main page in "+e._s(e.second)+" "+e._s(1===e.second?"second":"seconds"))])])},_=[],g={name:"NotFound",data:function(){return{second:10}},mounted:function(){var e=this,t=setInterval((function(){e.second--}),1e3);setTimeout((function(){clearInterval(t),window.location.href=document.location.href.split("#")[0]}),1e4)}},w=g,k=Object(u["a"])(w,y,_,!1,null,"297e9d34",null),O=k.exports;r["a"].use(p["a"]);var j=new p["a"]({routes:[{path:"/",name:"Main",component:b},{path:"/404",name:"NotFound",component:O},{path:"/404/:code",name:"NotFound",component:O}]});r["a"].config.productionTip=!1,new r["a"]({router:j,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},"95aa":function(e,t,n){},d952:function(e,t,n){"use strict";var r=n("95aa"),o=n.n(r);o.a}});
//# sourceMappingURL=app.354adb66.js.map