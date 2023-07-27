/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
class Task {
  constructor(title, description, index) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.index = index;
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }
}

// temporarily fill tasks
const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690255509265),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255517012),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690255521737),
  new Task("Task 4", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521739),
  new Task("Task 5", "lorem ipsum blablabalbal asfpas llorem ipsum blablabalbal asfasdajpsaj fsf a", 1690255521740),
  // new Task("Task 6", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255521741),
  // new Task("Task 7", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 169025552142),
  // new Task("Task 8", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521743),
];

// temporary true
tasks[3].toggleTaskCompletion();
tasks[4].toggleTaskCompletion();

const getTasks = () => tasks;

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = (title, description, index) => {
  tasks.push(new Task(title, description, index));
}

const updateTask = (title, description, index) => {
  const task = getTask(index);
  task.title = title;
  task.description = description;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gdGhpcy5pc0NvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxufVxuXG4vLyB0ZW1wb3JhcmlseSBmaWxsIHRhc2tzXG5jb25zdCB0YXNrcyA9IFtcbiAgbmV3IFRhc2soXCJUYXNrIDFcIiwgXCJsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIGxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgc2FkIGFzZmFsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIHNhZCBhc2Zhc2FkIGFzZmFzZGFqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTA5MjY1KSxcbiAgbmV3IFRhc2soXCJUYXNrIDJcIiwgXCJsb2FzIGFzIHJhc2RnYXNlbSBpcHN1bSBibGFibGFiYWxhc2QgYXNkIGFsIGFzZnBhc2pwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MTcwMTIpLFxuICBuZXcgVGFzayhcIlRhc2sgM1wiLCBcImxvcmFzZGdhICBnZW0gaXBzdW0gYmwgYXNnYXMgZGdzYWQgZ2FibGFiYWxiYWwgYXNmcGFzanBzYWogZnNmIGFcIiwgMTY5MDI1NTUyMTczNyksXG4gIG5ldyBUYXNrKFwiVGFzayA0XCIsIFwiYXNkZ2FzcHN1bSBibCBhYXNnYXMgZGdzYWRnc2FnIGdzYWRnYXNhZ2JhbCBhc2ZwYXNqcHNhaiBzZGdzZFwiLCAxNjkwMjU1NTIxNzM5KSxcbiAgbmV3IFRhc2soXCJUYXNrIDVcIiwgXCJsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIGxsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmYXNkYWpwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MjE3NDApLFxuICAvLyBuZXcgVGFzayhcIlRhc2sgNlwiLCBcImxvYXMgYXMgcmFzZGdhc2VtIGlwc3VtIGJsYWJsYWJhbGFzZCBhc2QgYWwgYXNmcGFzanBzYWogZnNmIGFcIiwgMTY5MDI1NTUyMTc0MSksXG4gIC8vIG5ldyBUYXNrKFwiVGFzayA3XCIsIFwibG9yYXNkZ2EgIGdlbSBpcHN1bSBibCBhc2dhcyBkZ3NhZCBnYWJsYWJhbGJhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTIxNDIpLFxuICAvLyBuZXcgVGFzayhcIlRhc2sgOFwiLCBcImFzZGdhc3BzdW0gYmwgYWFzZ2FzIGRnc2FkZ3NhZyBnc2FkZ2FzYWdiYWwgYXNmcGFzanBzYWogc2Rnc2RcIiwgMTY5MDI1NTUyMTc0MyksXG5dO1xuXG4vLyB0ZW1wb3JhcnkgdHJ1ZVxudGFza3NbM10udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcbnRhc2tzWzRdLnRvZ2dsZVRhc2tDb21wbGV0aW9uKCk7XG5cbmNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG5cbmNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHtcbiAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpWzBdO1xufVxuXG5jb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcbiAgdGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSk7XG59XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICBjb25zdCB0YXNrID0gZ2V0VGFzayhpbmRleCk7XG4gIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQge1xuICBnZXRUYXNrLFxuICBnZXRUYXNrcyxcbiAgYWRkVGFzayxcbiAgdXBkYXRlVGFzayxcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=