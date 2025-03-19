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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1024,initial-scale=1" />
    <title>Hotelify</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="app-bar">
      <div class="container">
        <div class="brand">
          <img src="images/ic_hotel.svg" alt="Hotel" />
          <h1>Hotelify</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Checking</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div class="form-input">
        <h2 class="title">Mau Menginap? Ayo Isi Data Dulu ya!</h2>
        <form>
          <div class="segment-1">
            <input type="radio" id="tunai" name="payment" value="1" checked="checked" />
            <label for="tunai">Tunai</label><br />
            <input type="radio" id="nonTunai" name="payment" value="2" />
            <label for="nonTunai">Non Tunai</label><br />
          </div>
          <div class="segment-2">
            <label for="fullName">Nama Lengkap</label>
            <input id="fullName" placeholder="ex. John Doe" required />
            <label for="address">Alamat</label>
            <textarea
              id="address"
              placeholder="ex. Sudirman, DKI Jakarta"
              required
            ></textarea>
          </div>
          <div class="segment-3">
            <div class="room-type">
              <label for="roomType">Tipe Kamar</label>
              <select id="roomType">
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div class="check-in">
              <label for="checkIn">Tanggal Check-In</label>
              <input type="date" id="checkIn" required />
            </div>
            <div class="check-out">
              <label for="checkOut">Tanggal Check-Out</label>
              <input type="date" id="checkOut" required />
            </div>
            <div class="bank-transfer">
              <label for="bankTransfer">Bank Transfer</label>
              <select id="bankTransfer" disabled="disabled">
                <option value="mandiri">Mandiri</option>
                <option value="bni">BNI</option>
                <option value="bri">BRI</option>
              </select>
            </div>
          </div>
          <div class="segment-4">
            <input type="checkbox" id="agreement" />
            <label for="agreement">
              Dengan ini saya setuju dengan syarat dan ketentuan berlaku
            </label>
          </div>
          <button disabled="disabled">Pesan Kamar</button>
        </form>
      </div>
      <div class="instruction">
        <h2>Instruction</h2>
        <span>Simak instruksi di bawah ini untuk mendapatkan kata kunci rahasia</span>
        <br /><br />
        <p>
          Inputlah data pemesanan kamar hotel atas nama "Valentino Rossi" yang beralamat
          di "Cikutra, Kota Bandung." untuk 2 malam pada tanggal 14 Agustus 2020 hingga 16
          Agustus 2020. Berikan tipe kamar deluxe dan transaksi menggunakan non tunai
          (Bank BNI).
        </p>
      </div>
      <div class="click-hider"></div>
    </main>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    'index.js': {
      hidden: true,
      code: '',
    },
    code: '',
  },
  'index.js': {
    hidden: true,
    code: '!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n||4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,(function(n){return e[n]}).bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t(1);let r=document.querySelector("#agreement"),i=document.querySelector("button"),o=document.querySelector("form"),a=document.querySelector("#tunai"),c=document.querySelector("#nonTunai"),p=document.querySelector("#fullName"),l=document.querySelector("#address"),s=document.querySelector("#roomType"),d=document.querySelector("#checkIn"),u=document.querySelector("#checkOut"),f=document.querySelector("#bankTransfer"),m=()=>{console.log("in"),f.disabled=!c.checked};r.addEventListener("click",()=>{i.disabled=!r.checked}),o.addEventListener("submit",e=>{e.preventDefault(),c.checked&&"VALENTINO ROSSI"===p.value.toUpperCase()&&"CIKUTRA, KOTA BANDUNG."===l.value.toUpperCase()&&"deluxe"===s.value&&"2020-08-14"===d.value&&"2020-08-16"===u.value&&"bni"===f.value?alert(\'Good Job! Kata kunci rahasianya adalah "Venus"\'):alert("Yah, data yang dimasukkan masih kurang tepat.")}),a.addEventListener("click",m),c.addEventListener("click",m)},function(e,n,t){var r=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]),r(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},function(e,n,t){"use strict";var r,i,o=(r={},function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}r[e]=n}return r[e]}),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function p(e,n){for(var t={},r=[],i=0;i<e.length;i++){var o=e[i],p=n.base?o[0]+n.base:o[0],l=t[p]||0,s="".concat(p," ").concat(l);t[p]=l+1;var d=c(s),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:s,updater:b(u,n),references:1}),r.push(s)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])}),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,g=0;function b(e,n){var t,r,i;if(n.singleton){var o=g++;t=m||(m=l(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=l(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap)&&r(e=n):i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=p(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=c(t[r]);a[i].references--}for(var o=p(e,n),l=0;l<t.length;l++){var s=c(t[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=o}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,"*{padding:0;margin:0;box-sizing:border-box}body,button,input{font-family:\'Noto Sans\', sans-serif;color:#333333}body{background-color:whitesmoke}.app-bar{width:100%;height:81px;padding:16px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2)}.app-bar .container{margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr}.app-bar .container .brand{display:flex;align-items:center}.app-bar .container .brand img{width:40px}.app-bar .container .brand h1{font-size:24px;padding:8px 16px;font-weight:bold;color:cadetblue}.app-bar .container nav{display:flex;align-items:center;justify-content:flex-end}.app-bar .container nav ul li{display:inline-block}.app-bar .container nav ul li a{display:block;padding:0.3em 1em;text-decoration:none;color:black}main{margin-top:50px;display:flex;flex-direction:column;align-items:center;justify-content:center}main .form-input{width:1000px;background-color:white;padding:32px 64px;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2)}main .form-input .title{display:block;text-align:center;font-size:24px;font-weight:bold;color:cadetblue}main .form-input .segment-1{width:100%;padding:8px 0}main .form-input .segment-2{width:100%;padding:8px 0}main .form-input .segment-2 *{display:block;padding:8px 0;width:100%}main .form-input .segment-2 label:last-of-type{margin-top:10px}main .form-input .segment-2 input,main .form-input .segment-2 textarea{font-family:\'Noto Sans\', sans-serif;padding:8px;border:0;font-size:16px;border-bottom:1px solid cadetblue}main .form-input .segment-3{width:100%;padding:8px 0;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:40px}main .form-input .segment-3 .room-type *{display:block;width:100%}main .form-input .segment-3 .room-type label{padding:8px 0}main .form-input .segment-3 .room-type select{font-size:16px;font-family:\'Noto Sans\', sans-serif;min-height:25px;border:0;background-color:transparent;border-bottom:1px solid cadetblue;padding:6px}main .form-input .segment-3 .room-type option{background-color:white;color:black}main .form-input .segment-3 .check-in *{display:block;width:100%}main .form-input .segment-3 .check-in label{padding:8px 0}main .form-input .segment-3 .check-in input{border:0;border-bottom:1px solid cadetblue;font-size:16px;min-height:25px;padding:6px}main .form-input .segment-3 .check-out *{display:block;width:100%}main .form-input .segment-3 .check-out label{padding:8px 0}main .form-input .segment-3 .check-out input{border:0;border-bottom:1px solid cadetblue;font-size:16px;min-height:25px;padding:6px}main .form-input .segment-3 .bank-transfer *{display:block;width:100%}main .form-input .segment-3 .bank-transfer label{padding:8px 0}main .form-input .segment-3 .bank-transfer select{min-height:25px}main .form-input .segment-3 .bank-transfer select{font-size:16px;font-family:\'Noto Sans\', sans-serif;min-height:25px;border:0;background-color:transparent;border-bottom:1px solid cadetblue;padding:6px}main .form-input .segment-3 .bank-transfer option{background-color:white;color:black}main .form-input .segment-4{padding:16px 0 8px 0}main .form-input button{display:block;padding:8px;width:400px;margin:32px auto 0 auto;background-color:cadetblue;color:white;border:0;border-radius:8px;cursor:pointer;font-size:18px}main .form-input button:disabled{background-color:lightgray;cursor:not-allowed}main .instruction{width:1000px;padding:32px 0}main .instruction h2{text-align:center;padding:16px 0 8px 0}main .instruction span{font-size:12px;display:block;text-align:center}main .click-hider{position:absolute;width:100vw;height:calc(100vh - 150px);background-color:transparent}\\n","",]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t,r,i,o=e[1]||"",a=e[3];if(!a)return o;if(n&&"function"==typeof btoa){var c=(t=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */"));return[o].concat(a.sources.map(function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")})).concat([c]).join("\\n")}return[o].join("\\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t}).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);r&&i[p[0]]||(t&&(p[2]?p[2]="".concat(t," and ").concat(p[2]):p[2]=t),n.push(p))}},n}},]);',
  },
};

function ExperiencingFocus01() {
  return (
  // <StaticWebSandpack
  //   files={files}
  //   options={{
  //     showConsole: true,
  //     editorWidthPercentage: 50,
  //   }}
  // />
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default ExperiencingFocus01;
