!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);console.clear();const r=document.querySelectorAll("[data-tab-target]"),o=document.querySelectorAll("[data-tab-content]");r.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(e.dataset.tabTarget);o.forEach(e=>{e.classList.remove("active")}),r.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),t.classList.add("active")})}),document.addEventListener("DOMContentLoaded",e=>{document.querySelector("#home").innerHTML=' \n     \n      <div class="details">\n        <div class="details-heading">\n          <h1>Odunsi\'s Restaurant</h1>\n        </div>\n        <p class="details-content">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore\n          architecto rem! Atque, enim commodi exercitationem corrupti iste illum\n          temporibus eum rem! Corporis dolore assumenda perferendis harum\n          aliquam officia incidunt, dignissimos quo, minus rem, quam consectetur\n          debitis iste! Libero, autem?\n        </p>\n      </div>\n    '})}]);