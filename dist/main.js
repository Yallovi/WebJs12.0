!function(e){var n={};function t(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(c,o,function(n){return e[n]}.bind(null,o));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,c=new Array(n);t<n;t++)c[t]=e[t];return c}var r=function(){var e=document.getElementById("collapseTwo").children[0].children,n=document.querySelector(".onoffswitch-checkbox"),t=document.querySelector("#myonoffswitch-two"),o=document.querySelector("#calc-result"),r=document.querySelector("#collapseFour").children[0].children[1],l=document.querySelector(".director-form").user_quest,i=(document.querySelector(".construct-btn"),document.forms),u=document.createElement("div");u.textContent="Тут будет сообщение!",u.style.cssText="font-size: 2rem; color: black;";c(i).forEach((function(i){i.addEventListener("submit",(function(a){a.preventDefault(),i.appendChild(u),u.textContent="Загрузка...";var s=new FormData(i),d={};s.forEach((function(e,n){d[n]=e})),d["Количество камер"]=n.value,d["Диаметр 1-го колодца"]=e[1].children[1].value,d["Количество колец 1-го колодца"]=e[2].children[1].value,n.checked||(d["Диаметр 2-го колодца"]=e[4].children[1].value,d["Количество колец 2-го колодца"]=e[5].children[1].value),d["Наличие днища у колодца"]=t.value,d["Растояние до дома"]=r.value,d["Общая стоимость"]=o.value,""!==l.value&&(d["Вопрос"]=l.value),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(d).then((function(e){if(200!==e.status)throw new Error("status network not 200");u.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){u.remove()}),5e3)})).catch((function(e){u.textContent="Что то пошло не так...",console.error(e),setTimeout((function(){u.remove()}),5e3)})),c(i.elements).forEach((function(e){"input"===e.tagName.toLowerCase()&&(e.value="")}))}))}))},l=function(){var e=document.querySelector(".add-sentence-btn"),n=document.querySelector(".sentence"),t=Array.from(n.children[0].children[0].children[1].children);e.addEventListener("click",(function(){t.forEach((function(n){console.log(n),(n.classList.contains("hidden")||n.classList.contains("visible-sm-block"))&&(n.classList.remove("hidden"),n.classList.remove("visible-sm-block")),e.style.display="none"}))}))},i=function(){var e=document.querySelectorAll('input[name="user_phone"]'),n=document.querySelectorAll('input[name="user_name"]');e.forEach((function(e){e.addEventListener("input",(function(){if(event.data){var n="+"===e.value.slice(0,1)?e.value.slice(-1):e.value.slice(0,1);e.value.length<=4&&(e.value="+7("+n),6===e.value.length&&(e.value=e.value+")"),10===e.value.length&&(e.value=e.value+"-"),13===e.value.length&&(e.value=e.value+"-"),e.value.length>16&&(e.value=e.value.slice(0,16))}e.value=e.value.replace(/[^0-9\-()+]/g,"")})),e.addEventListener("focus",(function(){e.value=0===e.value.length?"+7(":e.value}))})),n.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^А-Яа-я]/g,"")}))}))},u=function(){var e=document.getElementById("accordion-two"),n=Array.from(e.children);n.forEach((function(e){e.addEventListener("click",(function(){event.preventDefault(),n.forEach((function(e){e.children[1].classList.contains("in")&&e.children[1].classList.remove("in")})),e.children[1].classList.add("in")}))}))},a=function(){var e=document.getElementById("accordion"),n=Array.from(e.children);n.forEach((function(e){e.children[0].addEventListener("click",(function(){event.preventDefault(),n.forEach((function(e){e.children[1].classList.contains("in")&&e.children[1].classList.remove("in")})),e.children[1].classList.add("in")}))})),document.querySelectorAll(".construct-btn").forEach((function(e){e.addEventListener("click",(function(){event.preventDefault(),n.forEach((function(t){t.children[1].classList.contains("in")&&t.children[1].classList.remove("in"),t.children[1].id===e.getAttribute("href").substr(1)&&t.children[1].classList.add("in"),n.forEach((function(e){}))}))}))}))},s=function(){var e=document.querySelector(".onoffswitch-checkbox"),n=(document.querySelectorAll(".form-control"),document.getElementById("collapseTwo").children[0].children),t=document.querySelector("#accordion"),c=document.querySelector("#calc-result"),o=document.querySelector("#myonoffswitch-two"),r=document.querySelector("#collapseFour").children[0].children[1],l=document.querySelector("#collapseFour").children[0].children[2],i=0;t.addEventListener("click",(function(){if(e.checked){n[5].classList.add("hidden"),n[4].classList.add("hidden"),n[3].classList.add("hidden");i=1e4,"2 метра"===n[1].children[1].value&&(i=12e3),"2 штуки"===n[2].children[1].value?i+=3e3:"3 штуки"===n[2].children[1].value&&(i+=5e3),o.checked&&(i+=1e3)}else{n[5].classList.remove("hidden"),n[4].classList.remove("hidden"),n[3].classList.remove("hidden");i=15e3,"2 метра"===n[1].children[1].value&&(i+=3e3),"2 штуки"===n[2].children[1].value?i+=4500:"3 штуки"===n[2].children[1].value&&(i+=7500),"2 метра"===n[4].children[1].value&&(i+=3e3),"2 штуки"===n[5].children[1].value?i+=4500:"3 штуки"===n[5].children[1].value&&(i+=7500),o.checked&&(i+=2e3),console.log(n)}c.value=i,l.disabled=!0,r.addEventListener("input",(function(){r.value=r.value.replace(/[^0-9\-()+]/g,""),""===r.value?l.disabled=!0:l.disabled=!1}))}))};(function(){var e=document.querySelectorAll(".call-btn"),n=document.querySelector(".popup");e.forEach((function(e){e.addEventListener("click",(function(){n.style.display="block"}))})),n.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?n.style.display="none":(t=t.closest(".popup-content"))||(n.style.display="none")}));var t=document.querySelectorAll(".discount-btn"),c=document.querySelector(".popup-discount");t.forEach((function(e){e.addEventListener("click",(function(){c.style.display="block"}))})),c.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?c.style.display="none":(n=n.closest(".popup-content"))||(c.style.display="none")}));var o=document.querySelector(".check-btn"),r=document.querySelector(".popup-check");o.addEventListener("click",(function(){r.style.display="block"})),r.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?r.style.display="none":(n=n.closest(".popup-content"))||(r.style.display="none")}));var l=document.querySelector(".consultation-btn"),i=document.querySelector(".popup-consultation"),u=document.querySelector(".director-form").user_quest;l.disabled=!0,u.addEventListener("input",(function(){""!==u.value?l.disabled=!1:l.disabled=!0})),l.addEventListener("click",(function(){event.preventDefault(),i.style.display="block"})),i.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?i.style.display="none":(n=n.closest(".popup-content"))||(i.style.display="none")}))})(),r(),l(),i(),u(),a(),s()}]);