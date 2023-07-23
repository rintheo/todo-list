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

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nconst cardsContainer = document.querySelector('.cards-container');\n\nconst clearCardsContainer = () => {\n  while (cardsContainer.firstChild) {\n    cardsContainer.removeChild(cardsContainer.firstChild);\n  }\n}\n\nconst fillCardsContainer = () => {\n  for (let task of _todo_js__WEBPACK_IMPORTED_MODULE_0__.tasks) {\n    generateCard(task);\n  }\n}\n\nconst generateCard = (task) => {\n  const card = document.createElement('div');\n  card.classList.add('card');\n\n  const buttonDone = document.createElement('button');\n  buttonDone.classList.add('button');\n  buttonDone.classList.add('done');\n\n  const dummy = document.createElement('div');\n  buttonDone.appendChild(dummy);\n  \n  dummy.outerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>check-circle-outline</title><path d=\"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z\" /></svg>`;\n\n  const h4 = document.createElement('h4');\n  h4.textContent = task.title;\n\n  const p = document.createElement('p');\n  p.textContent = task.description;\n\n  const buttonsContainer = document.createElement('div');\n  buttonsContainer.classList.add('buttons-container');\n\n  const buttonsEtc = [\n    {class: 'duedate', svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>calendar-clock</title><path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\" /></svg>`},\n    {class: 'list', svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>folder-outline</title><path d=\"M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z\" /></svg>`},\n    {class: 'priority', svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>flag-outline</title><path d=\"M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4\" /></svg>`},\n    {class: 'delete', svg: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>delete-outline</title><path d=\"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z\" /></svg>`},\n  ]\n\n  for (let buttonEtc of buttonsEtc) {\n    const button = document.createElement('button');\n    button.classList.add('button');\n    button.classList.add(buttonEtc.class);\n\n    const dummy = document.createElement('div');\n\n    button.appendChild(dummy)\n    buttonsContainer.appendChild(button);\n    \n    dummy.outerHTML = buttonEtc.svg;\n  }\n\n  card.appendChild(buttonDone);\n  card.appendChild(h4);\n  card.appendChild(p);\n  card.appendChild(buttonsContainer);\n  cardsContainer.appendChild(card);\n}\n\nclearCardsContainer();\nfillCardsContainer();\n\n//# sourceURL=webpack://todo-list/./src/domController.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\nclass Task {\n  constructor(title, description) {\n    this.title = title;\n    this.description = description;\n  }\n}\n\nconst tasks = [\n  new Task(\"Task 1\", \"lorem ipsum blablabalbal asfpas sad asfasdajpsaj fsf a\"),\n  new Task(\"Task 2\", \"loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a\"),\n  new Task(\"Task 3\", \"lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a\"),\n];\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domController.js");
/******/ 	
/******/ })()
;