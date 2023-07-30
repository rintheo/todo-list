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
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   doesTaskExist: () => (/* binding */ doesTaskExist),
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
    this.priority = 'none';
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }

  setTaskPriority(priority) {
    this.priority = priority;
  }
}

// temporarily fill tasks
const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690255509265),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255517012),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690255521737),
  new Task("Task 4", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521739),
  new Task("Task 5", "lorem ipsum blablabalbal asfpas llorem ipsum blablabalbal asfasdajpsaj fsf a", 1690255521740),
  new Task("Task 6", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255521741),
  new Task("Task 7", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 169025552142),
  new Task("Task 8", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521743),
];

// temporary values ================================================ //
tasks[0].setTaskPriority('low');
tasks[1].setTaskPriority('medium');
tasks[2].setTaskPriority('high');
tasks[3].toggleTaskCompletion();
tasks[4].toggleTaskCompletion();

// console.log(tasks);

// ================================================================= //

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

const deleteTask = (index) => {
  tasks.splice(tasks.findIndex(task => task.index == index), 1);
}

const doesTaskExist = (index) => {
  return tasks.some(task => task.index == index);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMucHJpb3JpdHkgPSAnbm9uZSc7XG4gIH1cblxuICB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gdGhpcy5pc0NvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIHNldFRhc2tQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG4vLyB0ZW1wb3JhcmlseSBmaWxsIHRhc2tzXG5jb25zdCB0YXNrcyA9IFtcbiAgbmV3IFRhc2soXCJUYXNrIDFcIiwgXCJsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIGxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgc2FkIGFzZmFsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIHNhZCBhc2Zhc2FkIGFzZmFzZGFqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTA5MjY1KSxcbiAgbmV3IFRhc2soXCJUYXNrIDJcIiwgXCJsb2FzIGFzIHJhc2RnYXNlbSBpcHN1bSBibGFibGFiYWxhc2QgYXNkIGFsIGFzZnBhc2pwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MTcwMTIpLFxuICBuZXcgVGFzayhcIlRhc2sgM1wiLCBcImxvcmFzZGdhICBnZW0gaXBzdW0gYmwgYXNnYXMgZGdzYWQgZ2FibGFiYWxiYWwgYXNmcGFzanBzYWogZnNmIGFcIiwgMTY5MDI1NTUyMTczNyksXG4gIG5ldyBUYXNrKFwiVGFzayA0XCIsIFwiYXNkZ2FzcHN1bSBibCBhYXNnYXMgZGdzYWRnc2FnIGdzYWRnYXNhZ2JhbCBhc2ZwYXNqcHNhaiBzZGdzZFwiLCAxNjkwMjU1NTIxNzM5KSxcbiAgbmV3IFRhc2soXCJUYXNrIDVcIiwgXCJsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIGxsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmYXNkYWpwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MjE3NDApLFxuICBuZXcgVGFzayhcIlRhc2sgNlwiLCBcImxvYXMgYXMgcmFzZGdhc2VtIGlwc3VtIGJsYWJsYWJhbGFzZCBhc2QgYWwgYXNmcGFzanBzYWogZnNmIGFcIiwgMTY5MDI1NTUyMTc0MSksXG4gIG5ldyBUYXNrKFwiVGFzayA3XCIsIFwibG9yYXNkZ2EgIGdlbSBpcHN1bSBibCBhc2dhcyBkZ3NhZCBnYWJsYWJhbGJhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTIxNDIpLFxuICBuZXcgVGFzayhcIlRhc2sgOFwiLCBcImFzZGdhc3BzdW0gYmwgYWFzZ2FzIGRnc2FkZ3NhZyBnc2FkZ2FzYWdiYWwgYXNmcGFzanBzYWogc2Rnc2RcIiwgMTY5MDI1NTUyMTc0MyksXG5dO1xuXG4vLyB0ZW1wb3JhcnkgdmFsdWVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xudGFza3NbMF0uc2V0VGFza1ByaW9yaXR5KCdsb3cnKTtcbnRhc2tzWzFdLnNldFRhc2tQcmlvcml0eSgnbWVkaXVtJyk7XG50YXNrc1syXS5zZXRUYXNrUHJpb3JpdHkoJ2hpZ2gnKTtcbnRhc2tzWzNdLnRvZ2dsZVRhc2tDb21wbGV0aW9uKCk7XG50YXNrc1s0XS50b2dnbGVUYXNrQ29tcGxldGlvbigpO1xuXG4vLyBjb25zb2xlLmxvZyh0YXNrcyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbmNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG5cbmNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHtcbiAgcmV0dXJuIHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpWzBdO1xufVxuXG5jb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcbiAgdGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSk7XG59XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICBjb25zdCB0YXNrID0gZ2V0VGFzayhpbmRleCk7XG4gIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XG4gIHRhc2tzLnNwbGljZSh0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KSwgMSk7XG59XG5cbmNvbnN0IGRvZXNUYXNrRXhpc3QgPSAoaW5kZXgpID0+IHtcbiAgcmV0dXJuIHRhc2tzLnNvbWUodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0VGFzayxcbiAgZ2V0VGFza3MsXG4gIGFkZFRhc2ssXG4gIHVwZGF0ZVRhc2ssXG4gIGRlbGV0ZVRhc2ssXG4gIGRvZXNUYXNrRXhpc3QsXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9