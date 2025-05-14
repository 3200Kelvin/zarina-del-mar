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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMainPageScripts: () => (/* binding */ useMainPageScripts)\n/* harmony export */ });\n/* harmony import */ var _dragIcon_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragIcon/script */ \"./src/main/dragIcon/script.js\");\n/* harmony import */ var _methodology_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodology/style.scss */ \"./src/main/methodology/style.scss\");\n\r\n\r\n\r\n\r\nconst useMainPageScripts = () => {\r\n    (0,_dragIcon_script__WEBPACK_IMPORTED_MODULE_0__.useDragIconAnimation)();\r\n}\n\n//# sourceURL=webpack://lass/./src/main/script.js?");

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