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

/***/ "./common.js":
/*!*******************!*\
  !*** ./common.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_common_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/script */ \"./src/common/script.js\");\n\r\n\r\ngsap.defaults({\r\n    duration: 0,\r\n});\r\n\r\n(0,_src_common_script__WEBPACK_IMPORTED_MODULE_0__.useCommonScripts)();\r\n\n\n//# sourceURL=webpack://lass/./common.js?");

/***/ }),

/***/ "./src/animationTriggers/screen.js":
/*!*****************************************!*\
  !*** ./src/animationTriggers/screen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useScreenTrigger: () => (/* binding */ useScreenTrigger)\n/* harmony export */ });\nconst useScreenTrigger = () => {\r\n    const elements = document.querySelectorAll('[data-animation-trigger=\"screen\"]');\r\n\r\n    if (!elements) {\r\n        return;\r\n    }\r\n\r\n    const observers = {};\r\n\r\n    elements.forEach((element) => {\r\n        const observer = getObserver(element.dataset.triggerMargin || 0);\r\n        observer.observe(element);\r\n    });\r\n\r\n    return () => {\r\n        Object.values(observers).forEach((observer) => observer.disconnect());\r\n    };\r\n\r\n    function getObserver(margin = 15) {\r\n        const key = margin;\r\n\r\n        if (!observers[key]) {\r\n            observers[key] = new IntersectionObserver((entries) => {\r\n                entries.forEach((entry) => {\r\n                    if (entry.isIntersecting) {\r\n                        entry.target.animate?.();\r\n                        if (!entry.target.reverse) {\r\n                            observers[key].unobserve(entry.target);\r\n                        }\r\n                    } else {\r\n                        entry.target.reverse?.();\r\n                    }\r\n                });\r\n            }, { rootMargin: `-${margin}% 0% -${margin}% 0%`, threshold: 0 });\r\n        }\r\n        return observers[key];\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/animationTriggers/screen.js?");

/***/ }),

/***/ "./src/common/buttons/style.scss":
/*!***************************************!*\
  !*** ./src/common/buttons/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/buttons/style.scss?");

/***/ }),

/***/ "./src/common/header/script.js":
/*!*************************************!*\
  !*** ./src/common/header/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useHeader: () => (/* binding */ useHeader)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/common/header/style.scss\");\n\r\n\r\nconst useHeader = () => {\r\n    const header = document.querySelector('.header');\r\n    if (!header) {\r\n        return;\r\n    }\r\n    \r\n    const { pathname } = window.location;\r\n    const currentLink = header.querySelector(`[href*=\"${pathname}\"]`);\r\n\r\n    if (!currentLink) {\r\n        return;\r\n    }\r\n\r\n    const entry = currentLink.closest('.header__nav__entry');\r\n    if (entry) {\r\n        entry.classList.add('header__nav__entry--active');\r\n    }\r\n};\n\n//# sourceURL=webpack://lass/./src/common/header/script.js?");

/***/ }),

/***/ "./src/common/header/style.scss":
/*!**************************************!*\
  !*** ./src/common/header/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/header/style.scss?");

/***/ }),

/***/ "./src/common/menu/script.js":
/*!***********************************!*\
  !*** ./src/common/menu/script.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMenu: () => (/* binding */ useMenu)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/common/menu/style.scss\");\n\r\n\r\nconst useMenu = () => {\r\n    const menu = document.querySelector('.menu');\r\n    const trigger = document.querySelector('.burger-btn');\r\n    const links = menu.querySelectorAll('a');\r\n\r\n    if (!menu || !trigger) {\r\n        return;\r\n    }\r\n\r\n    let isOpened = false;\r\n\r\n    setTimeout(() => {\r\n        trigger.classList.add('transition');\r\n    }, 10);\r\n\r\n    trigger.addEventListener('click', () => {\r\n        if (isOpened) {\r\n            closeMenu();\r\n        } else {\r\n            openMenu();\r\n        }\r\n    });\r\n\r\n    links.forEach((link) => {\r\n        if (!link.getAttribute('href')?.includes('/')) {\r\n            link.addEventListener('click', closeMenu);\r\n        }\r\n    });\r\n\r\n    function openMenu() {\r\n        trigger.classList.add('opened');\r\n        isOpened = true;\r\n\r\n        gsap.timeline()\r\n            .to(menu, { display: 'block', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })\r\n            .to(menu, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.6 });\r\n    }\r\n\r\n    function closeMenu() {\r\n        trigger.classList.remove('opened');\r\n        isOpened = false;\r\n\r\n        gsap.timeline()\r\n            .to(menu, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 0.8 })\r\n            .to(menu, { display: 'none' });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/common/menu/script.js?");

/***/ }),

/***/ "./src/common/menu/style.scss":
/*!************************************!*\
  !*** ./src/common/menu/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/menu/style.scss?");

/***/ }),

/***/ "./src/common/photos/align.scss":
/*!**************************************!*\
  !*** ./src/common/photos/align.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/photos/align.scss?");

/***/ }),

/***/ "./src/common/popupBlockScroll/script.js":
/*!***********************************************!*\
  !*** ./src/common/popupBlockScroll/script.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blockScrollOnPopup: () => (/* binding */ blockScrollOnPopup)\n/* harmony export */ });\nconst blockScrollOnPopup = () => {\r\n  const POPUP_OPENED_ATTR = 'popup-opened';\r\n\r\n  addStyles();\r\n  const cleanup = setScrollBarWidthListener();\r\n\r\n  const elements = document.querySelectorAll('[data-block-scroll]');\r\n\r\n  const observer = new IntersectionObserver((entries) => {\r\n    for (const entry of entries) {\r\n      if (entry.isIntersecting) {\r\n        blockScroll();\r\n        return;\r\n      }\r\n      \r\n      unblockScroll();\r\n    }\r\n  });\r\n\r\n  elements.forEach(element => {\r\n    observer.observe(element);\r\n  });\r\n\r\n  return () => {\r\n    observer.disconnect();\r\n    unblockScroll();\r\n    cleanup?.();\r\n  };\r\n\r\n  function blockScroll() {\r\n    document.documentElement.setAttribute(POPUP_OPENED_ATTR, '');\r\n    window.onBlockScroll?.();\r\n  }\r\n\r\n  function unblockScroll() {\r\n    document.documentElement.removeAttribute(POPUP_OPENED_ATTR);\r\n    window.onUnblockScroll?.();\r\n  }\r\n\r\n  function addStyles() {\r\n    if (document.getElementById('popup-block-scroll-style')) {\r\n      return;\r\n    }\r\n\r\n    const style = document.createElement('style');\r\n    style.setAttribute('id', 'popup-block-scroll-style');\r\n    style.innerHTML = `\r\n      html {\r\n        overflow: auto;\r\n      }\r\n      [${POPUP_OPENED_ATTR}] {\r\n        overflow: hidden;\r\n\r\n        @media screen and (min-width: 1000px) {\r\n          [compensate-scrollbar-padding] {\r\n            padding-right: var(--scroll-bar-width, 0);\r\n          }\r\n\r\n          [compensate-scrollbar-transform] {\r\n            transform: translateX(calc(-1 * var(--scroll-bar-width, 0) / 2));\r\n          }\r\n        }\r\n      }\r\n    `;\r\n    document.head.appendChild(style);\r\n  }\r\n\r\n  function setScrollBarWidthListener() {\r\n    const cleanup = () => window.scrollBarListener?.disconnect?.();\r\n\r\n    if (window.scrollBarListener) {\r\n      return cleanup;\r\n    }\r\n\r\n    const onResize = () => {\r\n        const currentValue = document.documentElement.style.getPropertyValue('--scroll-bar-width');\r\n        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;\r\n        if (scrollBarWidth && currentValue !== `${scrollBarWidth}px`) {\r\n            document.documentElement.style.setProperty('--scroll-bar-width', `${scrollBarWidth}px`);\r\n        }\r\n    };\r\n\r\n    window.scrollBarListener = new ResizeObserver(onResize);\r\n    window.scrollBarListener.observe(document.documentElement);\r\n    onResize();\r\n\r\n    return cleanup;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/common/popupBlockScroll/script.js?");

/***/ }),

/***/ "./src/common/popups/script.js":
/*!*************************************!*\
  !*** ./src/common/popups/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePopups: () => (/* binding */ usePopups)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/common/popups/style.scss\");\n\r\n\r\nconst usePopups = () => {\r\n    const popups = document.querySelectorAll('.popup');\r\n    if (!popups) {\r\n        return;\r\n    }\r\n\r\n    popups.forEach(initPopup);\r\n\r\n    function initPopup(popup) {\r\n        const id = popup.id;\r\n        const content = popup.querySelector('.popup__content');\r\n        const openBtn = document.querySelectorAll(`[data-popup-trigger=\"${id}\"]`);\r\n        const closeBtns = popup.querySelectorAll('.popup__close, .popup__backdrop');\r\n\r\n        openBtn.forEach((btn) => btn.addEventListener('click', open));\r\n        closeBtns.forEach((btn) => btn.addEventListener('click', close));\r\n\r\n        function open() {\r\n            gsap.timeline()\r\n                .to(popup, { display: 'block', opacity: 0, pointerEvents: 'none' })\r\n                .to(popup, { opacity: 1, pointerEvents: 'all', duration: 0.5, ease: 'power2.inOut' })\r\n                .add(() => content.focus());\r\n        }\r\n\r\n        function close() {\r\n            gsap.timeline()\r\n                .to(popup, { opacity: 0, duration: 0.5, ease: 'power2.inOut' })\r\n                .to(popup, { display: 'none', pointerEvents: 'none' });\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/common/popups/script.js?");

/***/ }),

/***/ "./src/common/popups/style.scss":
/*!**************************************!*\
  !*** ./src/common/popups/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/popups/style.scss?");

/***/ }),

/***/ "./src/common/runner/initAll.js":
/*!**************************************!*\
  !*** ./src/common/runner/initAll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useRunners: () => (/* binding */ useRunners)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/common/runner/script.js\");\n\r\n\r\nconst useRunners = () => {\r\n    const runners = document.querySelectorAll('[data-animation=\"runner\"]');\r\n    if (!runners.length) {\r\n        return;\r\n    }\r\n\r\n    runners.forEach((block) => {\r\n        const { toggleRunner } = (0,_script__WEBPACK_IMPORTED_MODULE_0__.useRunner)(block, '[data-animation=\"runner-entity\"]', '[data-animation=\"runner-entry\"]');\r\n\r\n        block.animate = () => toggleRunner(true);\r\n        block.reverse = () => toggleRunner(false);\r\n        block.setAttribute('data-animation-trigger', 'screen');\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/common/runner/initAll.js?");

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

/***/ "./src/common/script.js":
/*!******************************!*\
  !*** ./src/common/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCommonScripts: () => (/* binding */ useCommonScripts)\n/* harmony export */ });\n/* harmony import */ var _animationTriggers_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animationTriggers/screen */ \"./src/animationTriggers/screen.js\");\n/* harmony import */ var _header_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/script */ \"./src/common/header/script.js\");\n/* harmony import */ var _menu_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/script */ \"./src/common/menu/script.js\");\n/* harmony import */ var _popups_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popups/script */ \"./src/common/popups/script.js\");\n/* harmony import */ var _popupBlockScroll_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popupBlockScroll/script */ \"./src/common/popupBlockScroll/script.js\");\n/* harmony import */ var _runner_initAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runner/initAll */ \"./src/common/runner/initAll.js\");\n/* harmony import */ var _buttons_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/style.scss */ \"./src/common/buttons/style.scss\");\n/* harmony import */ var _photos_align_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/align.scss */ \"./src/common/photos/align.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ \"./src/common/styles.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst useCommonScripts = () => {\r\n    (0,_header_script__WEBPACK_IMPORTED_MODULE_1__.useHeader)();\r\n    (0,_menu_script__WEBPACK_IMPORTED_MODULE_2__.useMenu)();\r\n    (0,_popups_script__WEBPACK_IMPORTED_MODULE_3__.usePopups)();\r\n    (0,_popupBlockScroll_script__WEBPACK_IMPORTED_MODULE_4__.blockScrollOnPopup)();\r\n    (0,_runner_initAll__WEBPACK_IMPORTED_MODULE_5__.useRunners)();\r\n    (0,_animationTriggers_screen__WEBPACK_IMPORTED_MODULE_0__.useScreenTrigger)();\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/common/script.js?");

/***/ }),

/***/ "./src/common/styles.scss":
/*!********************************!*\
  !*** ./src/common/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/common/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./common.js");
/******/ 	
/******/ })()
;