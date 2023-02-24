(()=>{"use strict";var e={800:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(81),n=r.n(o),a=r(645),c=r.n(a)()(n());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Karla:weight@400;700&display=swap);"]),c.push([e.id,'body{font-family:"Karla",sans-serif;color:#000}input:focus{outline:none}.container{margin:0 auto;position:relative;top:50px;width:30%;box-shadow:0 0 16px #d1d1d1}.headerWrapper{justify-content:space-between;padding:0 16px;margin:10px 0;display:flex;border:none;border-bottom:2px solid #000;border-color:#f0f0f0}.headerText{font-weight:400}.reload{vertical-align:middle;position:relative;top:20px;height:16px;width:14px}.reload:hover{animation:roll 1s ease}@keyframes roll{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}#input{margin:10px 0;padding:0;padding-left:20px;border:none;border-bottom:2px solid #000;border-color:#f0f0f0;width:95%;font-style:italic}.todo-list{display:flex;flex-direction:column}.list{border:none;padding:10px 20px;width:80%;border-radius:10px}.wrapper,.wrapperCheck{padding:0 16px;padding-right:0;border-bottom:2px solid #000;border-color:#f0f0f0}.check{position:relative;top:2px;width:12px;height:12px}.clear{height:30px;text-decoration:none;color:#000;text-align:center;background-color:#f0f0f0;padding:10px}.clear-link{text-decoration:none;color:#000;margin:0 auto;position:relative;top:5px;user-select:none}.clear:active{background-color:#d1d0d0}',""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=r(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=n(h,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var d=o(e,n),s=0;s<a.length;s++){var l=r(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{const e=r.p+"51a2705e2d39fc2b1ced.png",t=document.querySelector(".header"),o=document.querySelector(".clear-link"),n=()=>{window.location.reload()},a=document.getElementById("input"),c=document.querySelector(".todo-list"),i=new class{constructor(){this.array=[]}add(e){this.array.push(e);const t=JSON.stringify(this.array);localStorage.setItem("data",t)}restore(e,t){this.item=e,JSON.parse(this.item).forEach((e=>{t.text=e}))}};let d=0;const s=(e,t,r,o,n,a)=>{e.style.textDecoration=a,r.removeChild(o),n.appendChild(t),n.appendChild(e),r.prepend(n)},l=(e,t)=>{d+=1;const r=document.createElement("div"),o=document.createElement("div"),n=document.createElement("input"),l=document.createElement("input");n.type="checkbox",r.classList.add("wrapper"),r.classList.add(d),o.classList.add("wrapperCheck"),l.classList.add("list"),n.classList.add("check"),l.value=t,n.checked=e.checked,e.text=t,e.checked=n.checked,e.index=d,n.addEventListener("change",(()=>{const t=n.checked;(e=>{const t=JSON.parse(localStorage.getItem("data"));t.forEach((t=>{t.index===e&&(t.checked=!t.checked)})),localStorage.setItem("data",JSON.stringify(t))})(e.index),t?s(l,n,c,r,o,"line-through"):s(l,n,c,o,r,"none")})),i.add(e),r.appendChild(n),r.appendChild(l),c.appendChild(r),a.value="",n.checked&&s(l,n,c,r,o,"line-through")};window.onload=()=>{const e=localStorage.getItem("data"),t=JSON.parse(e);localStorage.clear(),null!==t&&t.forEach((e=>{l(e,e.text)}))};var p=r(379),u=r.n(p),h=r(795),f=r.n(h),m=r(569),g=r.n(m),v=r(565),y=r.n(v),x=r(216),b=r.n(x),w=r(589),S=r.n(w),E=r(800),k={};k.styleTagTransform=S(),k.setAttributes=y(),k.insert=g().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=b(),u()(E.Z,k),E.Z&&E.Z.locals&&E.Z.locals,(()=>{const r=document.createElement("div"),a=document.createElement("h3"),c=document.createElement("img");r.classList.add("headerWrapper"),a.classList.add("headerText"),c.classList.add("reload"),a.textContent="Today's To Do",c.src=e,c.onclick=n,r.appendChild(a),r.appendChild(c),t.appendChild(r),o.textContent="Clear Completed"})();const C=document.getElementById("input"),T=document.querySelector(".clear");C.addEventListener("keydown",(e=>{"Enter"===e.key&&l({},a.value)})),T.addEventListener("click",(()=>{c.querySelectorAll(".wrapperCheck").forEach((e=>{e.remove()})),i.array=[];const e=JSON.parse(localStorage.getItem("data"));localStorage.clear(),e.filter((e=>!0!==e.checked)).forEach((e=>{i.add(e)}))}))})()})();