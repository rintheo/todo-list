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
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   getCompletedTasks: () => (/* binding */ getCompletedTasks),
/* harmony export */   getOngoingTasks: () => (/* binding */ getOngoingTasks),
/* harmony export */   uncompleteTask: () => (/* binding */ uncompleteTask)
/* harmony export */ });
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
    console.log(this.isCompleted); // temp
  }
}

const ongoingTasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a"),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a"),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a"),
];
const completedTasks = [];

const getOngoingTasks = () => ongoingTasks;
const getCompletedTasks = () => completedTasks;

const addTask = (title, description) => {
  ongoingTasks.push(new Task(title, description));
}

const completeTask = (index) => {
  completedTasks.push(...getOngoingTasks().splice(index, 1))
}

const uncompleteTask = (index) => {
  ongoingTasks.push(...getCompletedTasks().splice(index, 1))
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
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.getOngoingTasks().forEach(generateCard);
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.getCompletedTasks().forEach(generateCard);
}

const regenerateCardsContainer = () => {
  clearCardsContainer();
  fillCardsContainer();
}

function getCardIndex(e) {
  let cardIndex;
  document
      .querySelectorAll('.card')
      .forEach(card => {
          if (card.contains(e.target)) {
              cardIndex = card.getAttribute('data-index');
          };
      });
  return cardIndex;
}

const completeCard = (e) => {
  const index = getCardIndex(e);
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.getOngoingTasks()[index].toggleTaskCompletion();
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.completeTask(index);
  regenerateCardsContainer();
}

const uncompleteCard = (e) => {
  const index = getCardIndex(e);
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.getCompletedTasks()[index].toggleTaskCompletion();
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.uncompleteTask(index);
  regenerateCardsContainer();
}

const generateCard = (task, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;

  const buttonDone = document.createElement('button');
  buttonDone.classList.add('button');
  buttonDone.classList.add('done');

  const dummy = document.createElement('div');
  buttonDone.appendChild(dummy);
  
  const h4 = document.createElement('h4');
  h4.textContent = task.title;
  
  const p = document.createElement('p');
  p.textContent = task.description;

  if (task.isCompleted) {
    buttonDone.addEventListener('click', uncompleteCard);    
    h4.classList.add('completed');  
    p.classList.add('completed');    
    dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
  }
  else {
    buttonDone.addEventListener('click', completeCard);    
    h4.classList.add('remove');  
    p.classList.add('remove');    
    dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxREFBb0I7QUFDdEIsRUFBRSx1REFBc0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHFEQUFvQjtBQUN0QixFQUFFLGtEQUFpQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHVEQUFzQjtBQUN4QixFQUFFLG9EQUFtQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw0aUJBQTRpQjtBQUNqakIsS0FBSyw2T0FBNk87QUFDbFAsS0FBSyx3TkFBd047QUFDN04sS0FBSyx3T0FBd087QUFDN087O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRyxXQUFXO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw2Q0FBWTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxXQUFXO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsV0FBVztBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLFdBQVc7QUFDOUUsOERBQThELFdBQVc7OztBQUd6RTtBQUNBLDJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24oKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRoaXMuaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlZCk7IC8vIHRlbXBcbiAgfVxufVxuXG5jb25zdCBvbmdvaW5nVGFza3MgPSBbXG4gIG5ldyBUYXNrKFwiVGFzayAxXCIsIFwibG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIHNhZCBhc2ZhbG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBzYWQgYXNmYXNhZCBhc2Zhc2RhanBzYWogZnNmIGFcIiksXG4gIG5ldyBUYXNrKFwiVGFzayAyXCIsIFwibG9hcyBhcyByYXNkZ2FzZW0gaXBzdW0gYmxhYmxhYmFsYXNkIGFzZCBhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiKSxcbiAgbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJsb3Jhc2RnYSAgZ2VtIGlwc3VtIGJsIGFzZ2FzIGRnc2FkIGdhYmxhYmFsYmFsIGFzZnBhc2pwc2FqIGZzZiBhXCIpLFxuXTtcbmNvbnN0IGNvbXBsZXRlZFRhc2tzID0gW107XG5cbmNvbnN0IGdldE9uZ29pbmdUYXNrcyA9ICgpID0+IG9uZ29pbmdUYXNrcztcbmNvbnN0IGdldENvbXBsZXRlZFRhc2tzID0gKCkgPT4gY29tcGxldGVkVGFza3M7XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIG9uZ29pbmdUYXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbikpO1xufVxuXG5jb25zdCBjb21wbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgY29tcGxldGVkVGFza3MucHVzaCguLi5nZXRPbmdvaW5nVGFza3MoKS5zcGxpY2UoaW5kZXgsIDEpKVxufVxuXG5jb25zdCB1bmNvbXBsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICBvbmdvaW5nVGFza3MucHVzaCguLi5nZXRDb21wbGV0ZWRUYXNrcygpLnNwbGljZShpbmRleCwgMSkpXG59XG5cbmV4cG9ydCB7XG4gIGdldE9uZ29pbmdUYXNrcyxcbiAgZ2V0Q29tcGxldGVkVGFza3MsXG4gIGFkZFRhc2ssXG4gIGNvbXBsZXRlVGFzayxcbiAgdW5jb21wbGV0ZVRhc2ssXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4vdG9kby5qcyc7XG5cbi8vIEhlYWRlciBFbGVtZW50cyBcbmNvbnN0IGJ1dHRvblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2lkZWJhcicpO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJveCcpO1xuY29uc3QgYnV0dG9uTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbk5vdGlmaWNhdGlvbicpO1xuY29uc3QgYnV0dG9uU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2V0dGluZ3MnKTtcbmNvbnN0IGJ1dHRvblVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uVXNlcicpO1xuXG4vLyBDYXJkIEVsZW1lbnRzXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzID4gLmNvbnRhaW5lcicpO1xuY29uc3QgYWRkVGFza092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza092ZXJsYXknKTtcbmNvbnN0IGFkZFRhc2tDYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrT3ZlcmxheSA+IC53cmFwcGVyJyk7XG5jb25zdCBhZGRUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLmFkZCcpO1xuXG4vLyBBZGQgVGFzayBFbGVtZW50c1xuY29uc3QgaW5wdXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrVGl0bGUnKTtcbmNvbnN0IGlucHV0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBidXR0b25BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkFkZFRhc2snKTtcbmNvbnN0IGJ1dHRvbkNhbmNlbEFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uQ2FuY2VsQWRkVGFzaycpO1xuXG4vLyBTaWRlIEJhciBFbGVtZW50c1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCBzaWRlYmFyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyT3ZlcmxheScpO1xuXG5jb25zdCBjbGVhckNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICB3aGlsZSAoY2FyZHNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJkc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuY29uc3QgZmlsbENhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICB0b2RvLmdldE9uZ29pbmdUYXNrcygpLmZvckVhY2goZ2VuZXJhdGVDYXJkKTtcbiAgdG9kby5nZXRDb21wbGV0ZWRUYXNrcygpLmZvckVhY2goZ2VuZXJhdGVDYXJkKTtcbn1cblxuY29uc3QgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICBjbGVhckNhcmRzQ29udGFpbmVyKCk7XG4gIGZpbGxDYXJkc0NvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiBnZXRDYXJkSW5kZXgoZSkge1xuICBsZXQgY2FyZEluZGV4O1xuICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJylcbiAgICAgIC5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgIGlmIChjYXJkLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICBjYXJkSW5kZXggPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICAgIH07XG4gICAgICB9KTtcbiAgcmV0dXJuIGNhcmRJbmRleDtcbn1cblxuY29uc3QgY29tcGxldGVDYXJkID0gKGUpID0+IHtcbiAgY29uc3QgaW5kZXggPSBnZXRDYXJkSW5kZXgoZSk7XG4gIHRvZG8uZ2V0T25nb2luZ1Rhc2tzKClbaW5kZXhdLnRvZ2dsZVRhc2tDb21wbGV0aW9uKCk7XG4gIHRvZG8uY29tcGxldGVUYXNrKGluZGV4KTtcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IHVuY29tcGxldGVDYXJkID0gKGUpID0+IHtcbiAgY29uc3QgaW5kZXggPSBnZXRDYXJkSW5kZXgoZSk7XG4gIHRvZG8uZ2V0Q29tcGxldGVkVGFza3MoKVtpbmRleF0udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcbiAgdG9kby51bmNvbXBsZXRlVGFzayhpbmRleCk7XG4gIHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcigpO1xufVxuXG5jb25zdCBnZW5lcmF0ZUNhcmQgPSAodGFzaywgaW5kZXgpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgY29uc3QgYnV0dG9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcblxuICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25Eb25lLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaDQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICBidXR0b25Eb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdW5jb21wbGV0ZUNhcmQpOyAgICBcbiAgICBoNC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgIFxuICAgIHAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7ICAgIFxuICAgIGR1bW15Lm91dGVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrLWNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFpcIiAvPjwvc3ZnPmA7XG4gIH1cbiAgZWxzZSB7XG4gICAgYnV0dG9uRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlQ2FyZCk7ICAgIFxuICAgIGg0LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpOyAgXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTsgICAgXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPmA7XG4gIH1cblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcblxuICBjb25zdCBidXR0b25zRXRjID0gW1xuICAgIHtjbGFzczogJ2R1ZWRhdGUnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLWNsb2NrPC90aXRsZT48cGF0aCBkPVwiTTE1LDEzSDE2LjVWMTUuODJMMTguOTQsMTcuMjNMMTguMTksMTguNTNMMTUsMTYuNjlWMTNNMTksOEg1VjE5SDkuNjdDOS4yNCwxOC4wOSA5LDE3LjA3IDksMTZBNyw3IDAgMCwxIDE2LDlDMTcuMDcsOSAxOC4wOSw5LjI0IDE5LDkuNjdWOE01LDIxQzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM0g2VjFIOFYzSDE2VjFIMThWM0gxOUEyLDIgMCAwLDEgMjEsNVYxMS4xQzIyLjI0LDEyLjM2IDIzLDE0LjA5IDIzLDE2QTcsNyAwIDAsMSAxNiwyM0MxNC4wOSwyMyAxMi4zNiwyMi4yNCAxMS4xLDIxSDVNMTYsMTEuMTVBNC44NSw0Ljg1IDAgMCwwIDExLjE1LDE2QzExLjE1LDE4LjY4IDEzLjMyLDIwLjg1IDE2LDIwLjg1QTQuODUsNC44NSAwIDAsMCAyMC44NSwxNkMyMC44NSwxMy4zMiAxOC42OCwxMS4xNSAxNiwxMS4xNVpcIiAvPjwvc3ZnPmB9LFxuICAgIHtjbGFzczogJ2xpc3QnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmZvbGRlci1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTIwLDE4SDRWOEgyME0yMCw2SDEyTDEwLDRINEMyLjg5LDQgMiw0Ljg5IDIsNlYxOEEyLDIgMCAwLDAgNCwyMEgyMEEyLDIgMCAwLDAgMjIsMThWOEMyMiw2Ljg5IDIxLjEsNiAyMCw2WlwiIC8+PC9zdmc+YH0sXG4gICAge2NsYXNzOiAncHJpb3JpdHknLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmZsYWctb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMi4zNiw2TDEyLjc2LDhIMThWMTRIMTQuNjRMMTQuMjQsMTJIN1Y2SDEyLjM2TTE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40XCIgLz48L3N2Zz5gfSxcbiAgICB7Y2xhc3M6ICdkZWxldGUnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmRlbGV0ZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVaXCIgLz48L3N2Zz5gfSxcbiAgXVxuXG4gIGZvciAobGV0IGJ1dHRvbkV0YyBvZiBidXR0b25zRXRjKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGJ1dHRvbkV0Yy5jbGFzcyk7XG5cbiAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGR1bW15KVxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBcbiAgICBkdW1teS5vdXRlckhUTUwgPSBidXR0b25FdGMuc3ZnO1xuICB9XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25Eb25lKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChoNCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQocCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG4gIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG5jb25zdCBhdXRvU2l6ZVRleHRBcmVhID0gKGUpID0+IHtcbiAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNzVweFwiO1xuICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gKGUuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHQpICsgXCJweFwiO1xufVxuXG5jb25zdCBjbGlja0FkZFRhc2tPdmVybGF5ID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICBoaWRlQWRkVGFza0RpYWxvZygpO1xuICB9XG59XG5cbmNvbnN0IGhpZGVBZGRUYXNrRGlhbG9nID0gKGUpID0+IHtcbiAgYWRkVGFza092ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcbiAgYWRkVGFza092ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICByZXNldEFkZFRhc2tEaWFsb2coKTtcbiAgfSwge29uY2U6IHRydWV9KTtcbn1cblxuY29uc3Qgc2hvd0FkZFRhc2tEaWFsb2cgPSAoZSkgPT4geyAgXG4gIGFkZFRhc2tPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7ICBcbn1cblxuY29uc3QgcmVzZXRBZGRUYXNrRGlhbG9nID0gKCkgPT4ge1xuICBpbnB1dFRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGlucHV0VGFza1RpdGxlLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuXG4gIHRvZG8uYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICBoaWRlQWRkVGFza0RpYWxvZygpO1xuICByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcbn1cblxuY29uc3QgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHkgPSAoKSA9PiB7XG4gIGlmICghc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItaGlkZGVuJykpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7XG4gICAgc2lkZWJhck92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7IFxuICB9XG4gIGVsc2Uge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5LCB7b25jZTogdHJ1ZX0pOyAgIFxuICB9XG59XG5cbmNvbnN0IGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlID0gKCkgPT4ge1xuICBpZiAoIWJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaEJveC1mb2N1c2VkJykpIHtcbiAgICBidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBidXR0b25TZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblVzZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pO1xuICB9XG4gIGVsc2Uge1xuICAgIGJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uVXNlci5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pOyAgICBcbiAgfVxufVxuXG5pbnB1dFRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGF1dG9TaXplVGV4dEFyZWEpO1xuYWRkVGFza092ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0FkZFRhc2tPdmVybGF5KTtcbmFkZFRhc2tDYXJkV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQWRkVGFza092ZXJsYXkpO1xuYWRkVGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkVGFza0RpYWxvZyk7XG5idXR0b25DYW5jZWxBZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUFkZFRhc2tEaWFsb2cpO1xuYnV0dG9uQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuYnV0dG9uU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5KTtcbnNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7XG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTtcblxuXG4vLyBJbml0aWFsIGdlbmVyYXRpb24gb2YgY2FyZHMgY29udGFpbmVyXG5yZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=