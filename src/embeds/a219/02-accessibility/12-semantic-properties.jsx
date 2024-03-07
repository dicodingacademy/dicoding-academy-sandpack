import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic Properties</title>

    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <button>Sign Up!</button>
    <select>
      <option>Opsi 1</option>
      <option>Opsi 2</option>
    </select>
    <input type="checkbox" title="setuju" />
    <input type="text" placeholder="Nama Lengkap" />
    <input type="password" title="password" />
    <input type="color" title="pilih warna" />
    <input type="date" title="Ulang Tahun" value="1990-01-01" />
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
body {
  overflow: hidden;
}

input,
select,
button {
  display: block;
  margin: 16px;
}
`,
  },
  'index.js': {
    hidden: false,
    code: '!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);const o=document.querySelector("#agreement"),r=document.querySelector("button"),i=document.querySelector("form"),a=document.querySelector("#tunai"),c=document.querySelector("#nonTunai"),d=document.querySelector("#fullName"),u=document.querySelector("#address"),l=document.querySelector("#roomType"),p=document.querySelector("#checkIn"),s=document.querySelector("#checkOut"),f=document.querySelector("#bankTransfer"),m=()=>{f.disabled=!c.checked};o.addEventListener("click",()=>{r.disabled=!o.checked}),i.addEventListener("submit",e=>{e.preventDefault(),c.checked&&"VALENTINO ROSSI"===d.value.toUpperCase()&&"CIKUTRA, KOTA BANDUNG."===u.value.toUpperCase()&&"deluxe"===l.value&&"2020-08-14"===p.value&&"2020-08-16"===s.value&&"bni"===f.value?alert(\'Good Job! Kata kunci rahasianya adalah "Capella"\'):alert("Yah, data yang dimasukkan masih kurang tepat.")}),a.addEventListener("click",m),c.addEventListener("click",m)},function(e,n,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],d=n.base?i[0]+n.base:i[0],u=t[d]||0,l="".concat(d," ").concat(u);t[d]=u+1;var p=c(l),s={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(s)):a.push({identifier:l,updater:g(s,n),references:1}),o.push(l)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");a.appendChild(n)}return n}var l,p=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\\n")});function s(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,b=0;function g(e,n){var t,o,r;if(n.singleton){var i=b++;t=m||(m=u(n)),o=s.bind(null,t,i,!1),r=s.bind(null,t,i,!0)}else t=u(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=d(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,"*{padding:0;margin:0;box-sizing:border-box}body,button,input{font-family:\'Noto Sans\', sans-serif;color:#333333}body{background-color:whitesmoke}.app-bar{width:100%;height:81px;padding:16px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2)}.app-bar .container{margin:0 auto;width:1000px;display:grid;grid-template-columns:1fr 1fr}.app-bar .container .brand{display:flex;align-items:center}.app-bar .container .brand img{width:40px}.app-bar .container .brand h1{font-size:24px;padding:8px 16px;font-weight:bold;color:cadetblue}.app-bar .container nav{display:flex;align-items:center;justify-content:flex-end}.app-bar .container nav ul li{display:inline-block}.app-bar .container nav ul li a{display:block;padding:0.3em 1em;text-decoration:none;color:black}main{margin-top:50px;display:flex;flex-direction:column;align-items:center;justify-content:center}main .form-input{width:1000px;background-color:white;padding:32px 64px;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2)}main .form-input .title{display:block;text-align:center;font-size:24px;font-weight:bold;color:cadetblue}main .form-input .segment-1{width:100%;padding:8px 0}main .form-input .segment-2{width:100%;padding:8px 0}main .form-input .segment-2 *{display:block;padding:8px 0;width:100%}main .form-input .segment-2 label:last-of-type{margin-top:10px}main .form-input .segment-2 input,main .form-input .segment-2 textarea{font-family:\'Noto Sans\', sans-serif;padding:8px;border:0;font-size:16px;border-bottom:1px solid cadetblue}main .form-input .segment-3{width:100%;padding:8px 0;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:40px}main .form-input .segment-3 .room-type *{display:block;width:100%}main .form-input .segment-3 .room-type label{padding:8px 0}main .form-input .segment-3 .room-type select{font-size:16px;font-family:\'Noto Sans\', sans-serif;min-height:25px;border:0;background-color:transparent;border-bottom:1px solid cadetblue;padding:6px}main .form-input .segment-3 .room-type option{background-color:white;color:black}main .form-input .segment-3 .check-in *{display:block;width:100%}main .form-input .segment-3 .check-in label{padding:8px 0}main .form-input .segment-3 .check-in input{border:0;border-bottom:1px solid cadetblue;font-size:16px;min-height:25px;padding:6px}main .form-input .segment-3 .check-out *{display:block;width:100%}main .form-input .segment-3 .check-out label{padding:8px 0}main .form-input .segment-3 .check-out input{border:0;border-bottom:1px solid cadetblue;font-size:16px;min-height:25px;padding:6px}main .form-input .segment-3 .bank-transfer *{display:block;width:100%}main .form-input .segment-3 .bank-transfer label{padding:8px 0}main .form-input .segment-3 .bank-transfer select{min-height:25px}main .form-input .segment-3 .bank-transfer select{font-size:16px;font-family:\'Noto Sans\', sans-serif;min-height:25px;border:0;background-color:transparent;border-bottom:1px solid cadetblue;padding:6px}main .form-input .segment-3 .bank-transfer option{background-color:white;color:black}main .form-input .segment-4{padding:16px 0 8px 0}main .form-input button{display:block;padding:8px;width:400px;margin:32px auto 0 auto;background-color:cadetblue;color:white;border:0;border-radius:8px;cursor:pointer;font-size:18px}main .form-input button:disabled{background-color:lightgray;cursor:not-allowed}main .instruction{width:1000px;padding:32px 0}main .instruction h2{text-align:center;padding:16px 0 8px 0}main .instruction span{font-size:12px;display:block;text-align:center}.click-hider{position:absolute;top:0;left:0;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);width:100vw;height:100vh}\\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\\n")}var a,c,d;return[t].join("\\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}}]);',
  },
};

function SemanticProperties12() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default SemanticProperties12;
