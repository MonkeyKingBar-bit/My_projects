/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider */ \"./src/js/slider.js\");\n/* eslint-disable strict,lines-around-directive,no-undef,no-unused-vars,no-use-before-define */\n\n\n\n\nconst burgerMenu = () => {\n  const iconMenu = document.querySelector('.menu__icon');\n\n  if (iconMenu) {\n    const menuBody = document.querySelector('.menu__body');\n    iconMenu.addEventListener('click', () => {\n      document.body.classList.toggle('_lock');\n      iconMenu.classList.toggle('_active');\n      menuBody.classList.toggle('_active');\n    });\n  }\n};\n\nconst sliderSwiper = () => {\n  const swiper = new Swiper('.swiper-container', {\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n};\n\nconst checkIsMobile = () => {\n  const isMobile = {\n    Android() {\n      return navigator.userAgent.match(/Android/i);\n    },\n\n    BlackBerry() {\n      return navigator.userAgent.match(/BlackBerry/i);\n    },\n\n    iOS() {\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n\n    Opera() {\n      return navigator.userAgent.match(/Opera Mini/i);\n    },\n\n    Windows() {\n      return navigator.userAgent.match(/IEMobile/i);\n    },\n\n    any() {\n      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();\n    }\n\n  }; // check device\n\n  if (isMobile.any()) {\n    document.body.classList.add('_touch');\n  } else {\n    document.body.classList.add('_pc');\n  }\n};\n\nconst headerMouseAction = {\n  clickOnEmail() {\n    const email = document.querySelector('.menu__link_email');\n    const menuItemEmail = document.querySelector('.menu__item_email');\n    const headerEmailClick = document.querySelector('.header__email_click');\n    email.addEventListener('click', () => {\n      menuItemEmail.style.backgroundColor = 'rgb(100%, 100%, 100%, .5)';\n      email.style.marginBottom = '27px';\n      headerEmailClick.style.display = 'block';\n    });\n    headerEmailClick.addEventListener('click', () => {\n      headerEmailClick.style.display = 'none';\n      email.style.marginBottom = '0';\n      menuItemEmail.style.backgroundColor = 'transparent';\n    });\n  },\n\n  createPopup() {\n    const menuLinkPhone = document.querySelector('.menu__link_phone');\n    const menuItemPhone = document.querySelector('.menu__item_phone');\n    const popupMenu = document.querySelector('.popup');\n    const closePopup = document.querySelector('.popup__close');\n    const body = document.querySelector('body');\n    const overlay = document.querySelector('.modal_overlay');\n    menuLinkPhone.addEventListener('mouseover', () => {\n      menuItemPhone.style.backgroundColor = 'rgba(100%, 100%, 100%, .5)';\n      popupMenu.classList.toggle('open');\n      body.classList.toggle('lock');\n      overlay.classList.toggle('active');\n    });\n    closePopup.addEventListener('click', () => {\n      popupMenu.classList.remove('open');\n      menuItemPhone.style.backgroundColor = 'transparent';\n      overlay.classList.remove('active');\n      body.classList.remove('lock');\n    });\n    overlay.addEventListener('click', () => {\n      menuItemPhone.style.backgroundColor = 'transparent';\n      popupMenu.classList.remove('open');\n      overlay.classList.remove('active');\n    });\n  }\n\n};\nburgerMenu();\nsliderSwiper();\ncheckIsMobile();\nheaderMouseAction.clickOnEmail();\nheaderMouseAction.createPopup();\n\n//# sourceURL=webpack://stolovay/./src/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchClickAll\": () => (/* binding */ searchClickAll)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nfunction searchClickAll() {\n  const clickAll = document.querySelector('.btn.active, .btn:active');\n  clickAll.addEventListener('click', () => {\n    console.log('clickAll');\n  });\n}\n\n//# sourceURL=webpack://stolovay/./src/js/slider.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://stolovay/./src/css/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/css/style.scss");
/******/ 	
/******/ })()
;