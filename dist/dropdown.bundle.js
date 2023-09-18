"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktop_dynamic_ui"] = self["webpackChunktop_dynamic_ui"] || []).push([["dropdown"],{

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   sideEventListener: () => (/* binding */ sideEventListener)\n/* harmony export */ });\nconst addDrop = (event) => {\n\tconst targetClass = event.target.classList[0];\n\tconst dropElements = document.querySelectorAll(`.${targetClass}`);\n\t// dropdown-item from display none to block\n\t// className add background color and formatting\n\tdropElements.forEach((element) => {\n\t\tif (element.classList.contains(\"head-item\")) {\n\t\t\telement.parentElement.classList.toggle(\"dropdown-item-vis\");\n\t\t} else {\n\t\t\telement.classList.toggle(\"invis\");\n\t\t\telement.classList.toggle(\"dropdown-item-vis\");\n\t\t}\n\t});\n};\n\nconst dropEventListener = () => {\n\tconst headItems = document.querySelectorAll(\".head-item\");\n\theadItems.forEach((item) => item.addEventListener(\"click\", addDrop));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropEventListener);\n\nconst sideMenuToggle = () => {\n\tconst sideMenu = document.querySelector(\".side-menu\");\n\tsideMenu.classList.toggle(\"invis\");\n\tconst sideExitBtn = document.querySelector(\".menu-close\");\n\tsideExitBtn.removeEventListener(\"click\", sideMenuToggle);\n};\n\nconst sideEventListener = () => {\n\tconst menuBtn = document.querySelector(\".mobile-menu-btn\");\n\tconst sideExitBtn = document.querySelector(\".menu-close\");\n\tconst sideMenu = document.querySelector(\".side-menu\");\n\tmenuBtn.addEventListener(\"click\", () => {\n\t\tsideMenu.classList.toggle(\"invis\");\n\t\tsideExitBtn.addEventListener(\"click\", sideMenuToggle);\n\t});\n};\n\n\n//# sourceURL=webpack://top-dynamic-ui/./src/dropdown.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dropdown.js"));
/******/ }
]);