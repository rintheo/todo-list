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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5saXN0ID0gJ0hvbWUnO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gJyc7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0aGlzLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRUYXNrTGlzdChsaXN0KSB7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza0R1ZURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRlbXBvcmFyaWx5IGZpbGwgdGFza3NcclxuY29uc3QgdGFza3MgPSBbXHJcbiAgbmV3IFRhc2soXCJCdXkgZ3JvY2VyaWVzXCIsIFwiR2V0IG1pbGssIGVnZ3MsIGJyZWFkLCBhbmQgdmVnZXRhYmxlcyBmcm9tIHRoZSBzdXBlcm1hcmtldC5cIiwgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKSxcclxuICBuZXcgVGFzayhcIkZpbmlzaCByZXBvcnQgZm9yIHdvcmtcIiwgXCJDb21waWxlIHRoZSBzYWxlcyBkYXRhIGFuZCB3cml0ZSBhIHN1bW1hcnkgZm9yIHRoZSBxdWFydGVybHkgcmVwb3J0LlwiLCBEYXRlLm5vdygpICsgMTIzKSxcclxuICBuZXcgVGFzayhcIkNhbGwgTW9tXCIsIFwiQ2F0Y2ggdXAgd2l0aCBNb20gYW5kIGNoZWNrIGhvdyBzaGUncyBkb2luZy5cIiwgRGF0ZS5ub3coKSArIDExMDIpLFxyXG4gIG5ldyBUYXNrKFwiR28gZm9yIGEgam9nXCIsIFwiUnVuIGZvciAzMCBtaW51dGVzIGFyb3VuZCB0aGUgcGFyayB0byBzdGF5IGFjdGl2ZS5cIiwgRGF0ZS5ub3coKSArIDIzMjMpLFxyXG4gIG5ldyBUYXNrKFwiUmVhZCBhIGJvb2tcIiwgXCJTdGFydCByZWFkaW5nICdUaGUgR3JlYXQgR2F0c2J5JyBieSBGLiBTY290dCBGaXR6Z2VyYWxkLlwiLCBEYXRlLm5vdygpICsgNDI0MiksXHJcbiAgbmV3IFRhc2soXCJDbGVhbiB0aGUgZ2FyYWdlXCIsIFwiT3JnYW5pemUgYW5kIGRlY2x1dHRlciB0aGUgZ2FyYWdlIHNwYWNlLlwiLCBEYXRlLm5vdygpICsgMTI1MTIpLFxyXG4gIG5ldyBUYXNrKFwiUGF5IHV0aWxpdHkgYmlsbHNcIiwgXCJTZXR0bGUgZWxlY3RyaWNpdHksIHdhdGVyLCBhbmQgaW50ZXJuZXQgYmlsbHMgZm9yIHRoZSBtb250aC5cIiwgRGF0ZS5ub3coKSArIDQwMDAwKSxcclxuICBuZXcgVGFzayhcIlBsYW4gd2Vla2VuZCB0cmlwXCIsIFwiUmVzZWFyY2ggZGVzdGluYXRpb25zIGFuZCBjcmVhdGUgYW4gaXRpbmVyYXJ5IGZvciB0aGUgd2Vla2VuZCBnZXRhd2F5LlwiLCBEYXRlLm5vdygpICsgNTEyNDMpLFxyXG4gIG5ldyBUYXNrKFwiVXBkYXRlIHJlc3VtZVwiLCBcIkFkZCByZWNlbnQgd29yayBleHBlcmllbmNlcyBhbmQgc2tpbGxzIHRvIHRoZSByZXN1bWUuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCksXHJcbiAgbmV3IFRhc2soXCJQcmFjdGljZSBndWl0YXJcIiwgXCJTcGVuZCAxIGhvdXIgcHJhY3RpY2luZyBjaG9yZHMgYW5kIHNjYWxlcyBvbiB0aGUgZ3VpdGFyLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiAyKyA1MTI1KSxcclxuICBuZXcgVGFzayhcIk9yZ2FuaXplIGRpZ2l0YWwgZmlsZXNcIiwgXCJTb3J0IGFuZCBhcnJhbmdlIGRvY3VtZW50cyBhbmQgcGhvdG9zIG9uIHRoZSBjb21wdXRlci5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogMyArIDEyMDUxMiksXHJcbiAgbmV3IFRhc2soXCJXYXRlciB0aGUgcGxhbnRzXCIsIFwiR2l2ZSB0aGUgaW5kb29yIGFuZCBvdXRkb29yIHBsYW50cyBhIGdvb2Qgd2F0ZXJpbmcuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDQgKyAxMjA1MjQpLFxyXG4gIG5ldyBUYXNrKFwiQXR0ZW5kIHlvZ2EgY2xhc3NcIiwgXCJKb2luIHRoZSBldmVuaW5nIHlvZ2Egc2Vzc2lvbiBhdCB0aGUgbG9jYWwgc3R1ZGlvLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA0ICsgMTIwNTM2KSxcclxuICBuZXcgVGFzayhcIkZpeCBsZWFraW5nIGZhdWNldFwiLCBcIkNhbGwgdGhlIHBsdW1iZXIgb3IgYXR0ZW1wdCB0byByZXBhaXIgdGhlIGZhdWNldCB5b3Vyc2VsZi5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSArIDEyMDczOCksXHJcbiAgbmV3IFRhc2soXCJXYXRjaCBhIGRvY3VtZW50YXJ5XCIsIFwiUGljayBhbiBpbnRlcmVzdGluZyBkb2N1bWVudGFyeSBhbmQgbGVhcm4gc29tZXRoaW5nIG5ldy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSAgKyAxMjI2MjYpLFxyXG4gIG5ldyBUYXNrKFwiU3RhcnQgbGVhcm5pbmcgYSBsYW5ndWFnZVwiLCBcIkRvd25sb2FkIGxhbmd1YWdlIGxlYXJuaW5nIGFwcCBhbmQgYmVnaW4gd2l0aCBiYXNpYyBwaHJhc2VzLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA2KSxcclxuXTtcclxuXHJcbi8vIHRlbXBvcmFyeSB2YWx1ZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbnRhc2tzWzBdLnNldFRhc2tQcmlvcml0eSgnaGlnaCcpO1xyXG50YXNrc1sxXS5zZXRUYXNrUHJpb3JpdHkoJ2hpZ2gnKTtcclxudGFza3NbMl0uc2V0VGFza1ByaW9yaXR5KCdtZWRpdW0nKTtcclxudGFza3NbM10udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcclxudGFza3NbNF0udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcclxudGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suaW5kZXgpKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcblxyXG5jb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzO1xyXG5cclxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xyXG4gIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KVswXTtcclxufVxyXG5cclxuY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XHJcbiAgdGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSk7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcclxuICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgdGFza3Muc3BsaWNlKHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpLCAxKTtcclxufVxyXG5cclxuY29uc3QgZG9lc1Rhc2tFeGlzdCA9IChpbmRleCkgPT4ge1xyXG4gIHJldHVybiB0YXNrcy5zb21lKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleCk7XHJcbn1cclxuXHJcbmNvbnN0IGxpc3RzID0gW1xyXG4gICdIb21lJyxcclxuICAnV29yaycsXHJcbl07XHJcblxyXG5jb25zdCBnZXRMaXN0cyA9ICgpID0+IGxpc3RzO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRUYXNrLFxyXG4gIGdldFRhc2tzLFxyXG4gIGFkZFRhc2ssXHJcbiAgdXBkYXRlVGFzayxcclxuICBkZWxldGVUYXNrLFxyXG4gIGRvZXNUYXNrRXhpc3QsXHJcbiAgZ2V0TGlzdHMsXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=