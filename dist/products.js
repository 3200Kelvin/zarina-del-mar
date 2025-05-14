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

/***/ "./products.js":
/*!*********************!*\
  !*** ./products.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_products_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/products/script */ \"./src/products/script.js\");\n/* harmony import */ var _src_common_addStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/addStyle */ \"./src/common/addStyle.js\");\n\r\n\r\n\r\n(0,_src_common_addStyle__WEBPACK_IMPORTED_MODULE_1__.addStyle)(document.currentScript);\r\n\r\n(0,_src_products_script__WEBPACK_IMPORTED_MODULE_0__.useProductPageScripts)();\r\n\n\n//# sourceURL=webpack://lass/./products.js?");

/***/ }),

/***/ "./src/common/addStyle.js":
/*!********************************!*\
  !*** ./src/common/addStyle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addStyle: () => (/* binding */ addStyle)\n/* harmony export */ });\nfunction addStyle(currentScript) {\r\n    const scriptUrl = currentScript.src;\r\n    const style = document.createElement('link');\r\n    style.setAttribute('rel', 'stylesheet');\r\n    style.setAttribute('type', 'text/css');\r\n    style.setAttribute('href', scriptUrl.replace('.js', '.css'));\r\n    document.head.appendChild(style);\r\n}\n\n//# sourceURL=webpack://lass/./src/common/addStyle.js?");

/***/ }),

/***/ "./src/common/runner/script.js":
/*!*************************************!*\
  !*** ./src/common/runner/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useRunner: () => (/* binding */ useRunner)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/common/runner/style.scss\");\n\r\n\r\nconst useRunner = (block, wrapperSelector, entrySelector) => {\r\n    const defaultDuration = 20;\r\n    const wrapper = block.querySelector(wrapperSelector);\r\n    const entry = wrapper.querySelector(entrySelector);\r\n\r\n    const {\r\n        durationDesk = defaultDuration,\r\n        durationTablet = durationDesk,\r\n        durationMobile = durationTablet,\r\n        direction = 'left',\r\n    } = block.dataset;\r\n    \r\n    block.classList.add('runner');\r\n\r\n    if (direction === 'right') {\r\n        block.classList.add('runner--right');\r\n    } else if (direction === 'top') {\r\n        block.classList.add('runner--top');\r\n    } else if (direction === 'bottom') {\r\n        block.classList.add('runner--bottom');\r\n    }\r\n\r\n    wrapper.classList.add('runner__wrapper');\r\n    entry.classList.add('runner__entry');\r\n\r\n    let isInitialized = false;\r\n    let speedCoeff = 1;\r\n    let wrapperClone;\r\n    let currentNumber = 1;\r\n    let entryResizeDebounce;\r\n    let wrapperResizeDebounce;\r\n\r\n    const entryResizeObserver = new ResizeObserver(([entry]) => {\r\n        clearTimeout(entryResizeDebounce);\r\n        entryResizeDebounce = setTimeout(() => onEntryResize(entry), 250);\r\n    });\r\n    entryResizeObserver.observe(entry);\r\n\r\n    const wrapperResizeObserver = new ResizeObserver(([entry]) => {\r\n        clearTimeout(wrapperResizeDebounce);\r\n        wrapperResizeDebounce = setTimeout(() => onWrapperResize(entry), 250);\r\n    });\r\n    wrapperResizeObserver.observe(wrapper);\r\n\r\n    return { toggleRunner, cleanup };\r\n\r\n    function cleanup () {\r\n        entryResizeObserver.disconnect();\r\n        wrapperResizeObserver.disconnect();\r\n    }\r\n\r\n    function onEntryResize(entry) {\r\n        const targetNumber = getTargetAmount(entry);\r\n        if (currentNumber !== targetNumber || !isInitialized) {\r\n            changeAmountOfEntries(targetNumber);\r\n            currentNumber = targetNumber;\r\n            isInitialized = true;\r\n        }\r\n    }\r\n\r\n    function onWrapperResize(entry) {\r\n        const newSpeedCoeff = getSpeedCoeff(entry);\r\n        if (speedCoeff !== newSpeedCoeff) {\r\n            setSpeed(newSpeedCoeff);\r\n            speedCoeff = newSpeedCoeff;\r\n        }\r\n    }\r\n\r\n    function isHorizontal() {\r\n        return direction === 'left' || direction === 'right';\r\n    }\r\n\r\n    function getTargetAmount(entry) {\r\n        if (isHorizontal()) {\r\n            return Math.ceil(block.offsetWidth / entry.contentRect.width);\r\n        }\r\n        return Math.ceil(block.offsetHeight / entry.contentRect.height);\r\n    }\r\n\r\n    function getSpeedCoeff(entry) {\r\n        if (isHorizontal()) {\r\n            return entry.contentRect.width / block.offsetWidth;\r\n        }\r\n        return entry.contentRect.height / block.offsetHeight;\r\n    }\r\n\r\n    function setSpeed(newSpeedCoeff) {\r\n        block.style.setProperty('--duration-desk', `${durationDesk * newSpeedCoeff}s`);\r\n        block.style.setProperty('--duration-tablet', `${durationTablet * newSpeedCoeff}s`);\r\n        block.style.setProperty('--duration-mobile', `${durationMobile * newSpeedCoeff}s`);\r\n    }\r\n\r\n    function changeAmountOfEntries(targetNumber) {\r\n        if (targetNumber > currentNumber) {\r\n            const toAdd = targetNumber - currentNumber;\r\n            for (let i = 0; i < toAdd; i++) {\r\n                const clone = entry.cloneNode(true);\r\n                wrapper.appendChild(clone);\r\n            }\r\n        } else {\r\n            const toRemove = currentNumber - targetNumber;\r\n            for (let i = 0; i < toRemove; i++) {\r\n                wrapper.removeChild(wrapper.lastElementChild);\r\n            }\r\n        }\r\n\r\n        if (wrapperClone) {\r\n            wrapperClone.remove();\r\n        }\r\n\r\n        wrapperClone = wrapper.cloneNode(true);\r\n        wrapper.after(wrapperClone);\r\n\r\n        block.classList.add('runner--reset');\r\n        setTimeout(() => block.classList.remove('runner--reset'), 10);\r\n    }\r\n\r\n    function toggleRunner(isVisible = false) {\r\n        if (isVisible) {\r\n            block.classList.add('runner--visible');\r\n        } else {\r\n            block.classList.remove('runner--visible');\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/common/runner/script.js?");

/***/ }),

/***/ "./src/common/runner/style.scss":
/*!**************************************!*\
  !*** ./src/common/runner/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/runner/style.scss?");

/***/ }),

/***/ "./src/products/programs/cards/script.js":
/*!***********************************************!*\
  !*** ./src/products/programs/cards/script.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProgramCards: () => (/* binding */ useProgramCards)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/products/programs/cards/style.scss\");\n\r\n\r\nconst useProgramCards = () => {\r\n    const cards = document.querySelectorAll('.program-card');\r\n    if (!cards) {\r\n        return;\r\n    }\r\n\r\n    cards.forEach(card => {\r\n        const contentEntries = card.querySelectorAll('li');\r\n        contentEntries.forEach((entry, index) => {\r\n            entry.style.setProperty('--order', getLeadingZero(index + 1));\r\n        });\r\n    });\r\n\r\n    function getLeadingZero(num) {\r\n        return num < 10 ? `0${num}` : num;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/products/programs/cards/script.js?");

/***/ }),

/***/ "./src/products/programs/cards/style.scss":
/*!************************************************!*\
  !*** ./src/products/programs/cards/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/products/programs/cards/style.scss?");

/***/ }),

/***/ "./src/products/programs/dropdown/script.js":
/*!**************************************************!*\
  !*** ./src/products/programs/dropdown/script.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLinkDropdown: () => (/* binding */ useLinkDropdown)\n/* harmony export */ });\nconst useLinkDropdown = () => {\r\n    const block = document.querySelector('.programs-mob');\r\n\r\n    if (!block) {\r\n        return;\r\n    }\r\n\r\n    let isOpened = false;\r\n\r\n    const button = block.querySelector('.programs-mob__title');\r\n    const collection = block.querySelector('.programs-mob__collection');\r\n    const list = block.querySelector('.programs-mob__list');\r\n    const links = list.querySelectorAll('.programs-mob__link');\r\n\r\n    links.forEach((link) => {\r\n        link.setAttribute('href', `#${link.dataset.id}`);\r\n    });\r\n\r\n    button.addEventListener('click', open);\r\n\r\n    function open() {\r\n        if (isOpened) {\r\n            return;\r\n        }\r\n\r\n        isOpened = true;\r\n\r\n        gsap.timeline()\r\n            .to(list, {\r\n                transform: 'translateY(-100%)',\r\n            })\r\n            .to(collection, { display: 'block' })\r\n            .to(list, {\r\n                transform: 'translateY(0%)',\r\n                duration: 0.4,\r\n            })\r\n            .add(() => {\r\n                document.body.addEventListener('click', close);\r\n            });\r\n    }\r\n    \r\n    function close() {\r\n        isOpened = false;\r\n        document.body.removeEventListener('click', close);\r\n\r\n        gsap.timeline()\r\n            .to(list, {\r\n                transform: 'translateY(-100%)',\r\n                duration: 0.2,\r\n            })\r\n            .to(collection, { display: 'none' });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/products/programs/dropdown/script.js?");

/***/ }),

/***/ "./src/products/programs/links/script.js":
/*!***********************************************!*\
  !*** ./src/products/programs/links/script.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProgramsLinks: () => (/* binding */ useProgramsLinks)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/products/programs/links/style.scss\");\n\r\n\r\nconst useProgramsLinks = () => {\r\n    const links = document.querySelectorAll('.programs__short-list a');\r\n\r\n    if (!links) {\r\n        return;\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.setAttribute('href', `#${link.dataset.id}`);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/products/programs/links/script.js?");

/***/ }),

/***/ "./src/products/programs/links/style.scss":
/*!************************************************!*\
  !*** ./src/products/programs/links/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/products/programs/links/style.scss?");

/***/ }),

/***/ "./src/products/programs/script.js":
/*!*****************************************!*\
  !*** ./src/products/programs/script.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePrograms: () => (/* binding */ usePrograms)\n/* harmony export */ });\n/* harmony import */ var _cards_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards/script */ \"./src/products/programs/cards/script.js\");\n/* harmony import */ var _links_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links/script */ \"./src/products/programs/links/script.js\");\n\r\n\r\n\r\nconst usePrograms = () => {\r\n    (0,_cards_script__WEBPACK_IMPORTED_MODULE_0__.useProgramCards)();\r\n    (0,_links_script__WEBPACK_IMPORTED_MODULE_1__.useProgramsLinks)();\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/products/programs/script.js?");

/***/ }),

/***/ "./src/products/script.js":
/*!********************************!*\
  !*** ./src/products/script.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProductPageScripts: () => (/* binding */ useProductPageScripts)\n/* harmony export */ });\n/* harmony import */ var _programs_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programs/script */ \"./src/products/programs/script.js\");\n/* harmony import */ var _testimonials_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials/script */ \"./src/products/testimonials/script.js\");\n/* harmony import */ var _programs_dropdown_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programs/dropdown/script */ \"./src/products/programs/dropdown/script.js\");\n\r\n\r\n\r\n\r\nconst useProductPageScripts = () => {\r\n    (0,_programs_script__WEBPACK_IMPORTED_MODULE_0__.usePrograms)();\r\n    (0,_testimonials_script__WEBPACK_IMPORTED_MODULE_1__.useTestimonials)();\r\n    (0,_programs_dropdown_script__WEBPACK_IMPORTED_MODULE_2__.useLinkDropdown)();\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/products/script.js?");

/***/ }),

/***/ "./src/products/testimonials/script.js":
/*!*********************************************!*\
  !*** ./src/products/testimonials/script.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useTestimonials: () => (/* binding */ useTestimonials)\n/* harmony export */ });\n/* harmony import */ var _common_runner_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/runner/script */ \"./src/common/runner/script.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/products/testimonials/style.scss\");\n\r\n\r\n\r\n\r\nconst useTestimonials = () => {\r\n    const block = document.querySelector('.testimonials__content');\r\n\r\n    if (!block) {\r\n        return;\r\n    }\r\n\r\n    const columns = block.querySelectorAll('.testimonials__column');\r\n\r\n    columns.forEach((column) => {\r\n        const { toggleRunner } = (0,_common_runner_script__WEBPACK_IMPORTED_MODULE_0__.useRunner)(column, '.testimonials__list-wrapper', '.testimonials__list');\r\n    \r\n        column.animate = () => toggleRunner(true);\r\n        column.reverse = () => toggleRunner(false);\r\n        column.setAttribute('data-animation-trigger', 'screen');\r\n        column.setAttribute('data-trigger-margin', '0');\r\n\r\n        column.addEventListener('mouseenter', () => {\r\n            toggleRunner(false);\r\n        });\r\n\r\n        column.addEventListener('mouseleave', () => {\r\n            toggleRunner(true);\r\n        });\r\n    });\r\n};\n\n//# sourceURL=webpack://lass/./src/products/testimonials/script.js?");

/***/ }),

/***/ "./src/products/testimonials/style.scss":
/*!**********************************************!*\
  !*** ./src/products/testimonials/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/products/testimonials/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./products.js");
/******/ 	
/******/ })()
;