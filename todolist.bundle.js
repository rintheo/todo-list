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

const deleteTask = (index) => {
  tasks.splice(tasks.findIndex(task => task.index == index), 1);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHRvZ2dsZVRhc2tDb21wbGV0aW9uKCkge1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0aGlzLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlO1xuICB9XG59XG5cbi8vIHRlbXBvcmFyaWx5IGZpbGwgdGFza3NcbmNvbnN0IHRhc2tzID0gW1xuICBuZXcgVGFzayhcIlRhc2sgMVwiLCBcImxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgbG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBzYWQgYXNmYWxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgc2FkIGFzZmFzYWQgYXNmYXNkYWpwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MDkyNjUpLFxuICBuZXcgVGFzayhcIlRhc2sgMlwiLCBcImxvYXMgYXMgcmFzZGdhc2VtIGlwc3VtIGJsYWJsYWJhbGFzZCBhc2QgYWwgYXNmcGFzanBzYWogZnNmIGFcIiwgMTY5MDI1NTUxNzAxMiksXG4gIG5ldyBUYXNrKFwiVGFzayAzXCIsIFwibG9yYXNkZ2EgIGdlbSBpcHN1bSBibCBhc2dhcyBkZ3NhZCBnYWJsYWJhbGJhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTIxNzM3KSxcbiAgbmV3IFRhc2soXCJUYXNrIDRcIiwgXCJhc2RnYXNwc3VtIGJsIGFhc2dhcyBkZ3NhZGdzYWcgZ3NhZGdhc2FnYmFsIGFzZnBhc2pwc2FqIHNkZ3NkXCIsIDE2OTAyNTU1MjE3MzkpLFxuICBuZXcgVGFzayhcIlRhc2sgNVwiLCBcImxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgbGxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2Zhc2RhanBzYWogZnNmIGFcIiwgMTY5MDI1NTUyMTc0MCksXG4gIC8vIG5ldyBUYXNrKFwiVGFzayA2XCIsIFwibG9hcyBhcyByYXNkZ2FzZW0gaXBzdW0gYmxhYmxhYmFsYXNkIGFzZCBhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTIxNzQxKSxcbiAgLy8gbmV3IFRhc2soXCJUYXNrIDdcIiwgXCJsb3Jhc2RnYSAgZ2VtIGlwc3VtIGJsIGFzZ2FzIGRnc2FkIGdhYmxhYmFsYmFsIGFzZnBhc2pwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MjE0MiksXG4gIC8vIG5ldyBUYXNrKFwiVGFzayA4XCIsIFwiYXNkZ2FzcHN1bSBibCBhYXNnYXMgZGdzYWRnc2FnIGdzYWRnYXNhZ2JhbCBhc2ZwYXNqcHNhaiBzZGdzZFwiLCAxNjkwMjU1NTIxNzQzKSxcbl07XG5cbi8vIHRlbXBvcmFyeSB0cnVlXG50YXNrc1szXS50b2dnbGVUYXNrQ29tcGxldGlvbigpO1xudGFza3NbNF0udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcblxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICB0YXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpKTtcbn1cblxuY29uc3QgdXBkYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcbiAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgdGFza3Muc3BsaWNlKHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpLCAxKTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0VGFzayxcbiAgZ2V0VGFza3MsXG4gIGFkZFRhc2ssXG4gIHVwZGF0ZVRhc2ssXG4gIGRlbGV0ZVRhc2ssXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9