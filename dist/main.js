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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main/script */ \"./src/main/script.js\");\n\r\n\r\n(0,_src_main_script__WEBPACK_IMPORTED_MODULE_0__.useMainPageScripts)();\r\n\n\n//# sourceURL=webpack://lass/./main.js?");

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

/***/ "./src/main/dragIcon/script.js":
/*!*************************************!*\
  !*** ./src/main/dragIcon/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDragIconAnimation: () => (/* binding */ useDragIconAnimation)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/main/dragIcon/style.scss\");\n\r\n\r\nconst useDragIconAnimation = () => {\r\n    const icon = document.querySelector('.methodology__drag-icon');\r\n    if (!icon) {\r\n        return;\r\n    }\r\n\r\n    icon.classList.add('oscillator');\r\n\r\n    icon.animate = () => icon.classList.add('oscillator--active');\r\n    icon.reverse = () => icon.classList.remove('oscillator--active');\r\n\r\n    icon.setAttribute('data-animation-trigger', 'screen');\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/main/dragIcon/script.js?");

/***/ }),

/***/ "./src/main/dragIcon/style.scss":
/*!**************************************!*\
  !*** ./src/main/dragIcon/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/main/dragIcon/style.scss?");

/***/ }),

/***/ "./src/main/media/script.js":
/*!**********************************!*\
  !*** ./src/main/media/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMediaTicker: () => (/* binding */ useMediaTicker)\n/* harmony export */ });\n/* harmony import */ var _common_runner_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/runner/script */ \"./src/common/runner/script.js\");\n\r\n\r\nconst useMediaTicker = () => {\r\n    const block = document.querySelector('.media-runner');\r\n    if (!block) {\r\n        return;\r\n    }\r\n\r\n    const { toggleRunner } = (0,_common_runner_script__WEBPACK_IMPORTED_MODULE_0__.useRunner)(block, '.media-runner__wrapper', '.media-runner__list');\r\n\r\n    block.animate = () => toggleRunner(true);\r\n    block.reverse = () => toggleRunner(false);\r\n    block.setAttribute('data-animation-trigger', 'screen');\r\n    block.setAttribute('data-trigger-margin', '0');\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/main/media/script.js?");

/***/ }),

/***/ "./src/main/methodology/style.scss":
/*!*****************************************!*\
  !*** ./src/main/methodology/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/main/methodology/style.scss?");

/***/ }),

/***/ "./src/main/script.js":
/*!****************************!*\
  !*** ./src/main/script.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMainPageScripts: () => (/* binding */ useMainPageScripts)\n/* harmony export */ });\n/* harmony import */ var _media_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/script */ \"./src/main/media/script.js\");\n/* harmony import */ var _dragIcon_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragIcon/script */ \"./src/main/dragIcon/script.js\");\n/* harmony import */ var _methodology_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methodology/style.scss */ \"./src/main/methodology/style.scss\");\n\r\n\r\n\r\n\r\n\r\nconst useMainPageScripts = () => {\r\n    (0,_media_script__WEBPACK_IMPORTED_MODULE_0__.useMediaTicker)();\r\n    (0,_dragIcon_script__WEBPACK_IMPORTED_MODULE_1__.useDragIconAnimation)();\r\n}\n\n//# sourceURL=webpack://lass/./src/main/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;