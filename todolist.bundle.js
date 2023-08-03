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
/* harmony export */   getLists: () => (/* binding */ getLists),
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
    this.list = 'Home';
    this.dueDate = '';
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }

  setTaskPriority(priority) {
    this.priority = priority;
  }

  setTaskList(list) {
    this.list = list;
  }

  setTaskDueDate(date) {
    this.dueDate = date;
  }
}

// temporarily fill tasks
const tasks = [
  new Task("Buy groceries", "Get milk, eggs, bread, and vegetables from the supermarket.", Date.now() - 86400000),
  new Task("Finish report for work", "Compile the sales data and write a summary for the quarterly report.", Date.now() + 123),
  new Task("Call Mom", "Catch up with Mom and check how she's doing.", Date.now() + 1102),
  new Task("Go for a jog", "Run for 30 minutes around the park to stay active.", Date.now() + 2323),
  new Task("Read a book", "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.", Date.now() + 4242),
  new Task("Clean the garage", "Organize and declutter the garage space.", Date.now() + 12512),
  new Task("Pay utility bills", "Settle electricity, water, and internet bills for the month.", Date.now() + 40000),
  new Task("Plan weekend trip", "Research destinations and create an itinerary for the weekend getaway.", Date.now() + 51243),
  new Task("Update resume", "Add recent work experiences and skills to the resume.", Date.now() + 86400000),
  new Task("Practice guitar", "Spend 1 hour practicing chords and scales on the guitar.", Date.now() + 86400000 * 2+ 5125),
  new Task("Organize digital files", "Sort and arrange documents and photos on the computer.", Date.now() + 86400000 * 3 + 120512),
  new Task("Water the plants", "Give the indoor and outdoor plants a good watering.", Date.now() + 86400000 * 4 + 120524),
  new Task("Attend yoga class", "Join the evening yoga session at the local studio.", Date.now() + 86400000 * 4 + 120536),
  new Task("Fix leaking faucet", "Call the plumber or attempt to repair the faucet yourself.", Date.now() + 86400000 * 5 + 120738),
  new Task("Watch a documentary", "Pick an interesting documentary and learn something new.", Date.now() + 86400000 * 5  + 122626),
  new Task("Start learning a language", "Download language learning app and begin with basic phrases.", Date.now() + 86400000 * 6),
];

// temporary values ================================================ //
tasks[0].setTaskPriority('high');
tasks[1].setTaskPriority('high');
tasks[2].setTaskPriority('medium');
tasks[3].toggleTaskCompletion();
tasks[4].toggleTaskCompletion();
tasks.forEach(task => task.dueDate = new Date(task.index));

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

const lists = [
  'Home',
  'Work',
];

const getLists = () => lists;


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5wcmlvcml0eSA9ICdub25lJztcbiAgICB0aGlzLmxpc3QgPSAnSG9tZSc7XG4gICAgdGhpcy5kdWVEYXRlID0gJyc7XG4gIH1cblxuICB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gdGhpcy5pc0NvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIHNldFRhc2tQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIHNldFRhc2tMaXN0KGxpc3QpIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG5cbiAgc2V0VGFza0R1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XG4gIH1cbn1cblxuLy8gdGVtcG9yYXJpbHkgZmlsbCB0YXNrc1xuY29uc3QgdGFza3MgPSBbXG4gIG5ldyBUYXNrKFwiQnV5IGdyb2Nlcmllc1wiLCBcIkdldCBtaWxrLCBlZ2dzLCBicmVhZCwgYW5kIHZlZ2V0YWJsZXMgZnJvbSB0aGUgc3VwZXJtYXJrZXQuXCIsIERhdGUubm93KCkgLSA4NjQwMDAwMCksXG4gIG5ldyBUYXNrKFwiRmluaXNoIHJlcG9ydCBmb3Igd29ya1wiLCBcIkNvbXBpbGUgdGhlIHNhbGVzIGRhdGEgYW5kIHdyaXRlIGEgc3VtbWFyeSBmb3IgdGhlIHF1YXJ0ZXJseSByZXBvcnQuXCIsIERhdGUubm93KCkgKyAxMjMpLFxuICBuZXcgVGFzayhcIkNhbGwgTW9tXCIsIFwiQ2F0Y2ggdXAgd2l0aCBNb20gYW5kIGNoZWNrIGhvdyBzaGUncyBkb2luZy5cIiwgRGF0ZS5ub3coKSArIDExMDIpLFxuICBuZXcgVGFzayhcIkdvIGZvciBhIGpvZ1wiLCBcIlJ1biBmb3IgMzAgbWludXRlcyBhcm91bmQgdGhlIHBhcmsgdG8gc3RheSBhY3RpdmUuXCIsIERhdGUubm93KCkgKyAyMzIzKSxcbiAgbmV3IFRhc2soXCJSZWFkIGEgYm9va1wiLCBcIlN0YXJ0IHJlYWRpbmcgJ1RoZSBHcmVhdCBHYXRzYnknIGJ5IEYuIFNjb3R0IEZpdHpnZXJhbGQuXCIsIERhdGUubm93KCkgKyA0MjQyKSxcbiAgbmV3IFRhc2soXCJDbGVhbiB0aGUgZ2FyYWdlXCIsIFwiT3JnYW5pemUgYW5kIGRlY2x1dHRlciB0aGUgZ2FyYWdlIHNwYWNlLlwiLCBEYXRlLm5vdygpICsgMTI1MTIpLFxuICBuZXcgVGFzayhcIlBheSB1dGlsaXR5IGJpbGxzXCIsIFwiU2V0dGxlIGVsZWN0cmljaXR5LCB3YXRlciwgYW5kIGludGVybmV0IGJpbGxzIGZvciB0aGUgbW9udGguXCIsIERhdGUubm93KCkgKyA0MDAwMCksXG4gIG5ldyBUYXNrKFwiUGxhbiB3ZWVrZW5kIHRyaXBcIiwgXCJSZXNlYXJjaCBkZXN0aW5hdGlvbnMgYW5kIGNyZWF0ZSBhbiBpdGluZXJhcnkgZm9yIHRoZSB3ZWVrZW5kIGdldGF3YXkuXCIsIERhdGUubm93KCkgKyA1MTI0MyksXG4gIG5ldyBUYXNrKFwiVXBkYXRlIHJlc3VtZVwiLCBcIkFkZCByZWNlbnQgd29yayBleHBlcmllbmNlcyBhbmQgc2tpbGxzIHRvIHRoZSByZXN1bWUuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCksXG4gIG5ldyBUYXNrKFwiUHJhY3RpY2UgZ3VpdGFyXCIsIFwiU3BlbmQgMSBob3VyIHByYWN0aWNpbmcgY2hvcmRzIGFuZCBzY2FsZXMgb24gdGhlIGd1aXRhci5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogMisgNTEyNSksXG4gIG5ldyBUYXNrKFwiT3JnYW5pemUgZGlnaXRhbCBmaWxlc1wiLCBcIlNvcnQgYW5kIGFycmFuZ2UgZG9jdW1lbnRzIGFuZCBwaG90b3Mgb24gdGhlIGNvbXB1dGVyLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiAzICsgMTIwNTEyKSxcbiAgbmV3IFRhc2soXCJXYXRlciB0aGUgcGxhbnRzXCIsIFwiR2l2ZSB0aGUgaW5kb29yIGFuZCBvdXRkb29yIHBsYW50cyBhIGdvb2Qgd2F0ZXJpbmcuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDQgKyAxMjA1MjQpLFxuICBuZXcgVGFzayhcIkF0dGVuZCB5b2dhIGNsYXNzXCIsIFwiSm9pbiB0aGUgZXZlbmluZyB5b2dhIHNlc3Npb24gYXQgdGhlIGxvY2FsIHN0dWRpby5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNCArIDEyMDUzNiksXG4gIG5ldyBUYXNrKFwiRml4IGxlYWtpbmcgZmF1Y2V0XCIsIFwiQ2FsbCB0aGUgcGx1bWJlciBvciBhdHRlbXB0IHRvIHJlcGFpciB0aGUgZmF1Y2V0IHlvdXJzZWxmLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA1ICsgMTIwNzM4KSxcbiAgbmV3IFRhc2soXCJXYXRjaCBhIGRvY3VtZW50YXJ5XCIsIFwiUGljayBhbiBpbnRlcmVzdGluZyBkb2N1bWVudGFyeSBhbmQgbGVhcm4gc29tZXRoaW5nIG5ldy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSAgKyAxMjI2MjYpLFxuICBuZXcgVGFzayhcIlN0YXJ0IGxlYXJuaW5nIGEgbGFuZ3VhZ2VcIiwgXCJEb3dubG9hZCBsYW5ndWFnZSBsZWFybmluZyBhcHAgYW5kIGJlZ2luIHdpdGggYmFzaWMgcGhyYXNlcy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNiksXG5dO1xuXG4vLyB0ZW1wb3JhcnkgdmFsdWVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xudGFza3NbMF0uc2V0VGFza1ByaW9yaXR5KCdoaWdoJyk7XG50YXNrc1sxXS5zZXRUYXNrUHJpb3JpdHkoJ2hpZ2gnKTtcbnRhc2tzWzJdLnNldFRhc2tQcmlvcml0eSgnbWVkaXVtJyk7XG50YXNrc1szXS50b2dnbGVUYXNrQ29tcGxldGlvbigpO1xudGFza3NbNF0udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcbnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrLmR1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrLmluZGV4KSk7XG5cbi8vIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcblxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICB0YXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpKTtcbn1cblxuY29uc3QgdXBkYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcbiAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgdGFza3Muc3BsaWNlKHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpLCAxKTtcbn1cblxuY29uc3QgZG9lc1Rhc2tFeGlzdCA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3Muc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpO1xufVxuXG5jb25zdCBsaXN0cyA9IFtcbiAgJ0hvbWUnLFxuICAnV29yaycsXG5dO1xuXG5jb25zdCBnZXRMaXN0cyA9ICgpID0+IGxpc3RzO1xuXG5leHBvcnQge1xuICBnZXRUYXNrLFxuICBnZXRUYXNrcyxcbiAgYWRkVGFzayxcbiAgdXBkYXRlVGFzayxcbiAgZGVsZXRlVGFzayxcbiAgZG9lc1Rhc2tFeGlzdCxcbiAgZ2V0TGlzdHMsXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9