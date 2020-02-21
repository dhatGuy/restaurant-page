/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactGen = () => {\n    const contact = document.createElement('div')\n    contact.setAttribute('id', 'contact')\n    contact.setAttribute('data-tab-content', \" \")\n\n    const form = document.createElement('div')\n    form.classList.add('form')\n\n    const name = document.createElement('input')\n    name.setAttribute('placeholder', 'Name')\n    name.setAttribute('type', 'text')\n\n    const mail = document.createElement('input')\n    mail.setAttribute('placeholder', 'Email')\n    mail.setAttribute('type', 'email')\n\n    const submit = document.createElement('input')\n    submit.setAttribute('value', 'Submit')\n    submit.setAttribute('type', 'submit')\n\n    const textarea = document.createElement('textarea')\n    textarea.setAttribute('cols', '30')\n    textarea.setAttribute('rows', '10')\n    textarea.setAttribute('placeholder', 'We like to hear from you')\n\n    form.appendChild(name)\n    form.appendChild(mail)\n    form.appendChild(textarea)\n    form.appendChild(submit)\n\n    contact.appendChild(form)\n\n    return contact\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactGen);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst homeGen = () => {\n  //   const content = document.querySelector('#content');\n\n  const homeContainer = document.createElement('div');\n  homeContainer.setAttribute('id', 'home')\n  homeContainer.setAttribute('data-tab-content', \" \")\n\n  const details = document.createElement('div')\n  details.classList.add('details')\n\n  const detailsHeading = document.createElement('div')\n  detailsHeading.classList.add('heading-details')\n\n  const h1 = document.createElement('h1')\n  h1.textContent = `Odunsi's Restaurant`;\n\n  const detailsContent = document.createElement('p')\n  detailsContent.classList.add('details-content')\n  detailsContent.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore\n           architecto rem! Atque, enim commodi exercitationem corrupti iste illum\n           temporibus eum rem! Corporis dolore assumenda perferendis harum\n           aliquam officia incidunt, dignissimos quo, minus rem, quam consectetur\n           debitis iste! Libero, autem?`\n\n  homeContainer.appendChild(details)\n  details.appendChild(detailsHeading)\n  detailsHeading.appendChild(h1)\n  details.appendChild(detailsContent)\n\n  return homeContainer\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeGen);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPageLoad */ \"./src/initialPageLoad.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconsole.clear()\n\nconst content = document.querySelector('#content')\nconst tabs = document.querySelectorAll('[data-tab-target]');\nconst tabContents = document.querySelectorAll('[data-tab-content]')\n\n\nObject(_initialPageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\ntabs.forEach(tab => {\n    tab.addEventListener('click', function(e) {\n        if (e.target.id == 'home') {\n            tabs[2].classList.remove('active')\n            tabs[1].classList.remove('active')\n            tab.classList.add('active')\n            content.innerHTML = ``\n            content.appendChild(Object(_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n        } else if (e.target.id == 'menu') {\n            tabs[0].classList.remove('active')\n            tabs[2].classList.remove('active')\n            tab.classList.add('active')\n            content.innerHTML = ``\n            content.appendChild(Object(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n        } else {\n            tabs[0].classList.remove('active')\n            tabs[1].classList.remove('active')\n            tab.classList.add('active')\n            content.innerHTML = ``\n            content.appendChild(Object(_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n        }\n    })\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nconst onload = ()=> {\n    document.addEventListener('DOMContentLoaded', function () {\n        document.querySelector('#content').appendChild(Object(_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (onload);\n\n//# sourceURL=webpack:///./src/initialPageLoad.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst foodContainer = (source, text) => {\n\n    let food = document.createElement('div')\n    food.classList.add('food')\n\n    let img = document.createElement('img')\n\n    let paragraph = document.createElement('p')\n    paragraph.classList.add('name')\n    paragraph.textContent = text\n\n    img.setAttribute('src', source)\n\n    food.appendChild(img)\n    food.appendChild(paragraph)\n\n    return food\n}\nconst menuGen = () => {\n    const menuContainer = document.createElement('div');\n    menuContainer.setAttribute('id', 'menu')\n    menuContainer.setAttribute('data-tab-content', \" \")\n\n    let foods = document.createElement('div')\n    foods.classList.add('foods')\n\n\n    foods.appendChild(foodContainer('./images/jollof-featured-image.jpg', 'Nigerian Jollof Rice'));\n    foods.appendChild(foodContainer('./images/POUNDED-YAM-696x464.jpg', 'Pounded Yam'))\n    foods.appendChild(foodContainer('./images/Chicken-Suya.jpg', 'Chicken Suya'))\n\n    menuContainer.appendChild(foods)\n\n    return menuContainer\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuGen);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });