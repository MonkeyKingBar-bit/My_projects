/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(() => {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/

    /***/
    () => {
      "use strict";

      eval("/* eslint-disable strict,lines-around-directive,no-undef,no-unused-vars,no-use-before-define */\n\n\nconst burgerMenu = () => {\n  const iconMenu = document.querySelector('.menu__icon');\n\n  if (iconMenu) {\n    const menuBody = document.querySelector('.menu__body');\n    iconMenu.addEventListener('click', () => {\n      document.body.classList.toggle('_lock');\n      iconMenu.classList.toggle('_active');\n      menuBody.classList.toggle('_active');\n    });\n  }\n};\n\nconst sliderSwiper = () => {\n  const swiper = new Swiper('.swiper-container', {\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n};\n\nconst checkIsMobile = () => {\n  const isMobile = {\n    Android() {\n      return navigator.userAgent.match(/Android/i);\n    },\n\n    BlackBerry() {\n      return navigator.userAgent.match(/BlackBerry/i);\n    },\n\n    iOS() {\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n\n    Opera() {\n      return navigator.userAgent.match(/Opera Mini/i);\n    },\n\n    Windows() {\n      return navigator.userAgent.match(/IEMobile/i);\n    },\n\n    any() {\n      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();\n    }\n\n  }; // check device\n\n  if (isMobile.any()) {\n    document.body.classList.add('_touch');\n  } else {\n    document.body.classList.add('_pc');\n  }\n};\n\nconst headerMouseAction = {\n  clickOnEmail() {\n    const email = document.querySelector('.menu__link_email');\n    const menuItemEmail = document.querySelector('.menu__item_email');\n    const headerEmailClick = document.querySelector('.header__email_click');\n    email.addEventListener('click', () => {\n      menuItemEmail.style.backgroundColor = 'rgb(100%, 100%, 100%, .5)';\n      email.style.marginBottom = '27px';\n      headerEmailClick.style.display = 'block';\n    });\n    headerEmailClick.addEventListener('click', () => {\n      headerEmailClick.style.display = 'none';\n      email.style.marginBottom = '0';\n      menuItemEmail.style.backgroundColor = 'transparent';\n    });\n  },\n\n  createPopup() {\n    const menuLinkPhone = document.querySelector('.menu__link_phone');\n    const menuItemPhone = document.querySelector('.menu__item_phone');\n    const popupMenu = document.querySelector('.popup');\n    const closePopup = document.querySelector('.popup__close');\n    const body = document.querySelector('body');\n    const overlay = document.querySelector('.modal_overlay');\n    menuLinkPhone.addEventListener('mouseover', () => {\n      menuItemPhone.style.backgroundColor = 'rgba(100%, 100%, 100%, .5)';\n      popupMenu.classList.toggle('open');\n      body.classList.toggle('lock');\n      overlay.classList.toggle('active');\n    });\n    closePopup.addEventListener('click', () => {\n      popupMenu.classList.remove('open');\n      menuItemPhone.style.backgroundColor = 'transparent';\n      overlay.classList.remove('active');\n      body.classList.remove('lock');\n    });\n    overlay.addEventListener('click', () => {\n      popupMenu.classList.remove('open');\n      overlay.classList.remove('active');\n    });\n  }\n\n};\nburgerMenu();\nsliderSwiper();\ncheckIsMobile();\nheaderMouseAction.clickOnEmail();\nheaderMouseAction.createPopup();\n\n//# sourceURL=webpack://stolovay/./src/index.js?");
      /***/
    },

    /***/
    "./src/css/style.scss":
    /*!****************************!*\
      !*** ./src/css/style.scss ***!
      \****************************/

    /***/
    () => {
      eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Invalid CSS after \\\"... p:nth-child(1)\\\": expected \\\"{\\\", was \\\"\\\"\\n        on line 92 of src/css/_popup.scss\\n        from line 1 of src/css/style.scss\\n>> }#form_message > p:nth-child(1)\\n   -------------------------------^\\n\\n    at processResult (/home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/webpack/lib/NormalModule.js:676:19)\\n    at runLoaders (/home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/webpack/lib/NormalModule.js:778:5)\\n    at /home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/loader-runner/lib/LoaderRunner.js:399:11\\n    at /home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/loader-runner/lib/LoaderRunner.js:251:18\\n    at context.callback (/home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\\n    at Object.render [as callback] (/home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/sass-loader/dist/index.js:54:7)\\n    at Object.done [as callback] (/home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/home/pc/WebstormProjects/JS/My_projects/stolovay/node_modules/node-sass/lib/index.js:293:32)\");\n\n//# sourceURL=webpack://stolovay/./src/css/style.scss?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module can't be inlined because the eval devtool is used.

  /******/

  __webpack_modules__["./src/index.js"]();
  /******/


  var __webpack_exports__ = {};
  /******/

  __webpack_modules__["./src/css/style.scss"]();
  /******/

  /******/

})();