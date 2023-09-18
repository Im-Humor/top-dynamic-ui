/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktop_dynamic_ui"] = self["webpackChunktop_dynamic_ui"] || []).push([["image-slider"],{

/***/ "./src/image-slider.js":
/*!*****************************!*\
  !*** ./src/image-slider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addArrowListeners: () => (/* binding */ addArrowListeners),\n/* harmony export */   importingAll: () => (/* binding */ importingAll),\n/* harmony export */   initPhoto: () => (/* binding */ initPhoto)\n/* harmony export */ });\n/* eslint-disable prefer-destructuring */\nfunction importAll(r) {\n\treturn r.keys().map(r);\n}\n\nconst importingAll = () => {\n\timportAll(__webpack_require__(\"./src/img sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n};\n\nconst imageArray = [\n\t\"./img/pexels-eberhard-grossgasteiger-1612351\",\n\t\"./img/pexels-kelly-2510067\",\n\t\"./img/pexels-tobi-463734\",\n\t\"./img/pexels-tobias-bjørkli-2360673\",\n];\n\nlet selectedImage = 0;\n\nconst initPhoto = () => {\n\tconst sliderContent = document.querySelector(\".slider-content\");\n\tsliderContent.innerHTML = \"\";\n\tconst img = document.createElement(\"img\");\n\timg.src = imageArray[selectedImage];\n\timg.alt = \"Image of house\";\n\n\tsliderContent.appendChild(img);\n};\n\nconst arrowEvent = (event) => {\n\tif (\n\t\tevent.target.classList.contains(\n\t\t\t false && 0,\n\t\t)\n\t) {\n\t\tselectedImage += 1;\n\t\tif (selectedImage > imageArray.length - 1) {\n\t\t\tselectedImage = 0;\n\t\t}\n\t}\n\tif (\n\t\tevent.target.classList.contains(\"slide-left\") === true &&\n\t\tselectedImage > 0\n\t) {\n\t\tselectedImage -= 1;\n\t\tif (selectedImage < 0) {\n\t\t\tselectedImage = 0;\n\t\t}\n\t}\n\tinitPhoto();\n};\n\nconst addArrowListeners = () => {\n\tconst arrowElements = document.querySelectorAll(\"button\");\n\tarrowElements.forEach((element) =>\n\t\telement.addEventListener(\"click\", arrowEvent),\n\t);\n};\n\n\n//# sourceURL=webpack://top-dynamic-ui/./src/image-slider.js?");

/***/ }),

/***/ "./src/img sync \\.(png%7Cjpe?g%7Csvg)$":
/*!***********************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./pexels-eberhard-grossgasteiger-1612351.jpg\": \"./src/img/pexels-eberhard-grossgasteiger-1612351.jpg\",\n\t\"./pexels-kelly-2510067.jpg\": \"./src/img/pexels-kelly-2510067.jpg\",\n\t\"./pexels-tobi-463734.jpg\": \"./src/img/pexels-tobi-463734.jpg\",\n\t\"./pexels-tobias-bjørkli-2360673.jpg\": \"./src/img/pexels-tobias-bjørkli-2360673.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://top-dynamic-ui/./src/img/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/img/pexels-eberhard-grossgasteiger-1612351.jpg":
/*!************************************************************!*\
  !*** ./src/img/pexels-eberhard-grossgasteiger-1612351.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/pexels-eberhard-grossgasteiger-1612351\";\n\n//# sourceURL=webpack://top-dynamic-ui/./src/img/pexels-eberhard-grossgasteiger-1612351.jpg?");

/***/ }),

/***/ "./src/img/pexels-kelly-2510067.jpg":
/*!******************************************!*\
  !*** ./src/img/pexels-kelly-2510067.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/pexels-kelly-2510067\";\n\n//# sourceURL=webpack://top-dynamic-ui/./src/img/pexels-kelly-2510067.jpg?");

/***/ }),

/***/ "./src/img/pexels-tobi-463734.jpg":
/*!****************************************!*\
  !*** ./src/img/pexels-tobi-463734.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/pexels-tobi-463734\";\n\n//# sourceURL=webpack://top-dynamic-ui/./src/img/pexels-tobi-463734.jpg?");

/***/ }),

/***/ "./src/img/pexels-tobias-bjørkli-2360673.jpg":
/*!***************************************************!*\
  !*** ./src/img/pexels-tobias-bjørkli-2360673.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/pexels-tobias-bjørkli-2360673\";\n\n//# sourceURL=webpack://top-dynamic-ui/./src/img/pexels-tobias-bj%C3%B8rkli-2360673.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/image-slider.js"));
/******/ }
]);