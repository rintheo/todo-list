/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks)
/* harmony export */ });
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a"),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a"),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a"),
];

const getTasks = () => tasks;

const addTask = (title, description) => {
  tasks.push(new Task(title, description));
  console.log(tasks);
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


// Header Elements 
const buttonSidebar = document.querySelector('#buttonSidebar');
const searchBox = document.querySelector('#searchBox');
const buttonNotification = document.querySelector('#buttonNotification');
const buttonSettings = document.querySelector('#buttonSettings');
const buttonUser = document.querySelector('#buttonUser');

// Card Elements
const main = document.querySelector('.main');
const cardsContainer = document.querySelector('.cards > .container');
const addTaskOverlay = document.querySelector('#addTaskOverlay');
const addTaskCardWrapper = document.querySelector('#addTaskOverlay > .wrapper');
const addTaskCard = document.querySelector('.card.add');

// Add Task Elements
const inputTaskTitle = document.querySelector('#inputTaskTitle');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const buttonAddTask = document.querySelector('#buttonAddTask');
const buttonCancelAddTask = document.querySelector('#buttonCancelAddTask');

// Side Bar Elements
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('#sidebarOverlay');

const clearCardsContainer = () => {
  while (cardsContainer.firstElementChild) {
    cardsContainer.removeChild(cardsContainer.firstElementChild);
  }
}

const fillCardsContainer = () => {
  for (let task of _todo_js__WEBPACK_IMPORTED_MODULE_0__.getTasks()) {
    generateCard(task);
  }
}

const regenerateCardsContainer = () => {
  clearCardsContainer();
  fillCardsContainer();
}

const generateCard = (task) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const buttonDone = document.createElement('button');
  buttonDone.classList.add('button');
  buttonDone.classList.add('done');

  const dummy = document.createElement('div');
  buttonDone.appendChild(dummy);
  
  dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;

  const h4 = document.createElement('h4');
  h4.textContent = task.title;

  const p = document.createElement('p');
  p.textContent = task.description;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const buttonsEtc = [
    {class: 'duedate', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock</title><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>`},
    {class: 'list', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder-outline</title><path d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" /></svg>`},
    {class: 'priority', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>flag-outline</title><path d="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4" /></svg>`},
    {class: 'delete', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`},
  ]

  for (let buttonEtc of buttonsEtc) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(buttonEtc.class);

    const dummy = document.createElement('div');

    button.appendChild(dummy)
    buttonsContainer.appendChild(button);
    
    dummy.outerHTML = buttonEtc.svg;
  }

  card.appendChild(buttonDone);
  card.appendChild(h4);
  card.appendChild(p);
  card.appendChild(buttonsContainer);
  cardsContainer.appendChild(card);
}

const autoSizeTextArea = (e) => {
  e.currentTarget.style.height = "75px";
  e.currentTarget.style.height = (e.currentTarget.scrollHeight) + "px";
}

const clickAddTaskOverlay = (e) => {
  if (e.target === e.currentTarget) {
    hideAddTaskDialog();
  }
}

const hideAddTaskDialog = (e) => {
  addTaskOverlay.classList.add('visibility-hidden');
  addTaskOverlay.addEventListener('transitionend', () => {
    resetAddTaskDialog();
  }, {once: true});
}

const showAddTaskDialog = (e) => {  
  addTaskOverlay.classList.remove('visibility-hidden');  
}

const resetAddTaskDialog = () => {
  inputTaskTitle.value = '';
  inputTaskDescription.value = '';
}

const addTask = () => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;

  _todo_js__WEBPACK_IMPORTED_MODULE_0__.addTask(title, description);
  hideAddTaskDialog();
  regenerateCardsContainer();
}

const toggleSidebarVisibility = () => {
  if (!sidebar.classList.contains('sidebar-hidden')) {
    sidebar.classList.add('sidebar-hidden');
    sidebarOverlay.classList.add('sidebar-hidden');
    main.classList.add('sidebar-hidden'); 
  }
  else {
    sidebar.classList.remove('sidebar-hidden');
    sidebarOverlay.classList.remove('sidebar-hidden');
    main.classList.remove('sidebar-hidden');
    sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});   
  }
}

const expandSearchBoxOnMobile = () => {
  if (!buttonNotification.classList.contains('searchBox-focused')) {
    buttonNotification.classList.add('searchBox-focused');
    buttonSettings.classList.add('searchBox-focused');
    buttonUser.classList.add('searchBox-focused');
    searchBox.addEventListener('blur', expandSearchBoxOnMobile, {once: true});
  }
  else {
    buttonNotification.classList.remove('searchBox-focused');
    buttonSettings.classList.remove('searchBox-focused');
    buttonUser.classList.remove('searchBox-focused');
    searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});    
  }
}

inputTaskDescription.addEventListener('input', autoSizeTextArea);
addTaskOverlay.addEventListener('click', clickAddTaskOverlay);
addTaskCardWrapper.addEventListener('click', clickAddTaskOverlay);
addTaskCard.addEventListener('click', showAddTaskDialog);
buttonCancelAddTask.addEventListener('click', hideAddTaskDialog);
buttonAddTask.addEventListener('click', addTask);
buttonSidebar.addEventListener('click', toggleSidebarVisibility);
sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});
searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});


// Initial generation of cards container
regenerateCardsContainer();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4Q0FBYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUssNGlCQUE0aUI7QUFDampCLEtBQUssNk9BQTZPO0FBQ2xQLEtBQUssd05BQXdOO0FBQzdOLEtBQUssd09BQXdPO0FBQzdPOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsV0FBVztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsNkNBQVk7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsV0FBVztBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsV0FBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFdBQVc7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxXQUFXO0FBQzlFLDhEQUE4RCxXQUFXOzs7QUFHekU7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmNvbnN0IHRhc2tzID0gW1xuICBuZXcgVGFzayhcIlRhc2sgMVwiLCBcImxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgbG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBzYWQgYXNmYWxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgc2FkIGFzZmFzYWQgYXNmYXNkYWpwc2FqIGZzZiBhXCIpLFxuICBuZXcgVGFzayhcIlRhc2sgMlwiLCBcImxvYXMgYXMgcmFzZGdhc2VtIGlwc3VtIGJsYWJsYWJhbGFzZCBhc2QgYWwgYXNmcGFzanBzYWogZnNmIGFcIiksXG4gIG5ldyBUYXNrKFwiVGFzayAzXCIsIFwibG9yYXNkZ2EgIGdlbSBpcHN1bSBibCBhc2dhcyBkZ3NhZCBnYWJsYWJhbGJhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiKSxcbl07XG5cbmNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIHRhc2tzLnB1c2gobmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKSk7XG4gIGNvbnNvbGUubG9nKHRhc2tzKTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0VGFza3MsXG4gIGFkZFRhc2ssXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4vdG9kby5qcyc7XG5cbi8vIEhlYWRlciBFbGVtZW50cyBcbmNvbnN0IGJ1dHRvblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2lkZWJhcicpO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJveCcpO1xuY29uc3QgYnV0dG9uTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbk5vdGlmaWNhdGlvbicpO1xuY29uc3QgYnV0dG9uU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2V0dGluZ3MnKTtcbmNvbnN0IGJ1dHRvblVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uVXNlcicpO1xuXG4vLyBDYXJkIEVsZW1lbnRzXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzID4gLmNvbnRhaW5lcicpO1xuY29uc3QgYWRkVGFza092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza092ZXJsYXknKTtcbmNvbnN0IGFkZFRhc2tDYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrT3ZlcmxheSA+IC53cmFwcGVyJyk7XG5jb25zdCBhZGRUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLmFkZCcpO1xuXG4vLyBBZGQgVGFzayBFbGVtZW50c1xuY29uc3QgaW5wdXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrVGl0bGUnKTtcbmNvbnN0IGlucHV0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBidXR0b25BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkFkZFRhc2snKTtcbmNvbnN0IGJ1dHRvbkNhbmNlbEFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uQ2FuY2VsQWRkVGFzaycpO1xuXG4vLyBTaWRlIEJhciBFbGVtZW50c1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCBzaWRlYmFyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyT3ZlcmxheScpO1xuXG5jb25zdCBjbGVhckNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICB3aGlsZSAoY2FyZHNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJkc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuY29uc3QgZmlsbENhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICBmb3IgKGxldCB0YXNrIG9mIHRvZG8uZ2V0VGFza3MoKSkge1xuICAgIGdlbmVyYXRlQ2FyZCh0YXNrKTtcbiAgfVxufVxuXG5jb25zdCByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIgPSAoKSA9PiB7XG4gIGNsZWFyQ2FyZHNDb250YWluZXIoKTtcbiAgZmlsbENhcmRzQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgY29uc3QgYnV0dG9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcblxuICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25Eb25lLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgXG4gIGR1bW15Lm91dGVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz48L3N2Zz5gO1xuXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaDQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGJ1dHRvbnNFdGMgPSBbXG4gICAge2NsYXNzOiAnZHVlZGF0ZScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItY2xvY2s8L3RpdGxlPjxwYXRoIGQ9XCJNMTUsMTNIMTYuNVYxNS44MkwxOC45NCwxNy4yM0wxOC4xOSwxOC41M0wxNSwxNi42OVYxM00xOSw4SDVWMTlIOS42N0M5LjI0LDE4LjA5IDksMTcuMDcgOSwxNkE3LDcgMCAwLDEgMTYsOUMxNy4wNyw5IDE4LjA5LDkuMjQgMTksOS42N1Y4TTUsMjFDMy44OSwyMSAzLDIwLjEgMywxOVY1QzMsMy44OSAzLjg5LDMgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QTIsMiAwIDAsMSAyMSw1VjExLjFDMjIuMjQsMTIuMzYgMjMsMTQuMDkgMjMsMTZBNyw3IDAgMCwxIDE2LDIzQzE0LjA5LDIzIDEyLjM2LDIyLjI0IDExLjEsMjFINU0xNiwxMS4xNUE0Ljg1LDQuODUgMCAwLDAgMTEuMTUsMTZDMTEuMTUsMTguNjggMTMuMzIsMjAuODUgMTYsMjAuODVBNC44NSw0Ljg1IDAgMCwwIDIwLjg1LDE2QzIwLjg1LDEzLjMyIDE4LjY4LDExLjE1IDE2LDExLjE1WlwiIC8+PC9zdmc+YH0sXG4gICAge2NsYXNzOiAnbGlzdCcsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Zm9sZGVyLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMjAsMThINFY4SDIwTTIwLDZIMTJMMTAsNEg0QzIuODksNCAyLDQuODkgMiw2VjE4QTIsMiAwIDAsMCA0LDIwSDIwQTIsMiAwIDAsMCAyMiwxOFY4QzIyLDYuODkgMjEuMSw2IDIwLDZaXCIgLz48L3N2Zz5gfSxcbiAgICB7Y2xhc3M6ICdwcmlvcml0eScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZmxhZy1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyLjM2LDZMMTIuNzYsOEgxOFYxNEgxNC42NEwxNC4yNCwxMkg3VjZIMTIuMzZNMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRcIiAvPjwvc3ZnPmB9LFxuICAgIHtjbGFzczogJ2RlbGV0ZScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGVsZXRlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNVpcIiAvPjwvc3ZnPmB9LFxuICBdXG5cbiAgZm9yIChsZXQgYnV0dG9uRXRjIG9mIGJ1dHRvbnNFdGMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYnV0dG9uRXRjLmNsYXNzKTtcblxuICAgIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoZHVtbXkpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIFxuICAgIGR1bW15Lm91dGVySFRNTCA9IGJ1dHRvbkV0Yy5zdmc7XG4gIH1cblxuICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbkRvbmUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGg0KTtcbiAgY2FyZC5hcHBlbmRDaGlsZChwKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5cbmNvbnN0IGF1dG9TaXplVGV4dEFyZWEgPSAoZSkgPT4ge1xuICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI3NXB4XCI7XG4gIGUuY3VycmVudFRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCkgKyBcInB4XCI7XG59XG5cbmNvbnN0IGNsaWNrQWRkVGFza092ZXJsYXkgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgIGhpZGVBZGRUYXNrRGlhbG9nKCk7XG4gIH1cbn1cblxuY29uc3QgaGlkZUFkZFRhc2tEaWFsb2cgPSAoZSkgPT4ge1xuICBhZGRUYXNrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xuICBhZGRUYXNrT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgIHJlc2V0QWRkVGFza0RpYWxvZygpO1xuICB9LCB7b25jZTogdHJ1ZX0pO1xufVxuXG5jb25zdCBzaG93QWRkVGFza0RpYWxvZyA9IChlKSA9PiB7ICBcbiAgYWRkVGFza092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTsgIFxufVxuXG5jb25zdCByZXNldEFkZFRhc2tEaWFsb2cgPSAoKSA9PiB7XG4gIGlucHV0VGFza1RpdGxlLnZhbHVlID0gJyc7XG4gIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gaW5wdXRUYXNrVGl0bGUudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWU7XG5cbiAgdG9kby5hZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gIGhpZGVBZGRUYXNrRGlhbG9nKCk7XG4gIHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcigpO1xufVxuXG5jb25zdCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgaWYgKCFzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1oaWRkZW4nKSkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTsgXG4gIH1cbiAgZWxzZSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIHNpZGViYXJPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaGlkZGVuJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIHNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7ICAgXG4gIH1cbn1cblxuY29uc3QgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUgPSAoKSA9PiB7XG4gIGlmICghYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoQm94LWZvY3VzZWQnKSkge1xuICAgIGJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uVXNlci5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUsIHtvbmNlOiB0cnVlfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uU2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBidXR0b25Vc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUsIHtvbmNlOiB0cnVlfSk7ICAgIFxuICB9XG59XG5cbmlucHV0VGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXV0b1NpemVUZXh0QXJlYSk7XG5hZGRUYXNrT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQWRkVGFza092ZXJsYXkpO1xuYWRkVGFza0NhcmRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tBZGRUYXNrT3ZlcmxheSk7XG5hZGRUYXNrQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBZGRUYXNrRGlhbG9nKTtcbmJ1dHRvbkNhbmNlbEFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWRkVGFza0RpYWxvZyk7XG5idXR0b25BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG5idXR0b25TaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHkpO1xuc2lkZWJhck92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSwge29uY2U6IHRydWV9KTtcbnNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pO1xuXG5cbi8vIEluaXRpYWwgZ2VuZXJhdGlvbiBvZiBjYXJkcyBjb250YWluZXJcbnJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==