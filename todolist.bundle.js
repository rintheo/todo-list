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
  constructor(
    id,
    userId,
    email,
    title, 
    description, 
    isCompleted,
    index,
    priority,
    list,
    dueDate,
  ) {
    this.id = id;
    this.userId = userId;
    this.email = email;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.index = index;
    this.priority = priority;
    this.list = list;
    this.dueDate = new Date(dueDate);
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

const tasks = [
  // new Task("Buy groceries", "Get milk, eggs, bread, and vegetables from the supermarket.", Date.now() - 86400000),
  // new Task("Finish report for work", "Compile the sales data and write a summary for the quarterly report.", Date.now() + 123),
  // new Task("Call Mom", "Catch up with Mom and check how she's doing.", Date.now() + 1102),
  // new Task("Go for a jog", "Run for 30 minutes around the park to stay active.", Date.now() + 2323),
  // new Task("Read a book", "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.", Date.now() + 4242),
  // new Task("Clean the garage", "Organize and declutter the garage space.", Date.now() + 12512),
  // new Task("Pay utility bills", "Settle electricity, water, and internet bills for the month.", Date.now() + 40000),
  // new Task("Plan weekend trip", "Research destinations and create an itinerary for the weekend getaway.", Date.now() + 51243),
  // new Task("Update resume", "Add recent work experiences and skills to the resume.", Date.now() + 86400000),
  // new Task("Practice guitar", "Spend 1 hour practicing chords and scales on the guitar.", Date.now() + 86400000 * 2+ 5125),
  // new Task("Organize digital files", "Sort and arrange documents and photos on the computer.", Date.now() + 86400000 * 3 + 120512),
  // new Task("Water the plants", "Give the indoor and outdoor plants a good watering.", Date.now() + 86400000 * 4 + 120524),
  // new Task("Attend yoga class", "Join the evening yoga session at the local studio.", Date.now() + 86400000 * 4 + 120536),
  // new Task("Fix leaking faucet", "Call the plumber or attempt to repair the faucet yourself.", Date.now() + 86400000 * 5 + 120738),
  // new Task("Watch a documentary", "Pick an interesting documentary and learn something new.", Date.now() + 86400000 * 5  + 122626),
  // new Task("Start learning a language", "Download language learning app and begin with basic phrases.", Date.now() + 86400000 * 6),
];

const getTasks = async (token) => {
  return new Promise((resolve) => {
    fetch('https://todo-list-backend.azurewebsites.net/api', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + token,
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        tasks.length = 0;
        response.forEach(entry => {
          tasks.push(
            new Task(
              entry.id,
              entry.userId,
              entry.email,
              entry.title, 
              entry.description, 
              entry.isCompleted,
              entry.index,
              entry.priority,
              entry.list,
              entry.dueDate,
            )
          )
        })
        resolve(tasks);
      });
  })
};

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = async (title, description, index, priority, list, email, dueDate, isCompleted, token) => {
  const body = {
    userId: 'string',
    title: title,
    description: description,
    isCompleted: isCompleted,
    index: index,
    priority: priority,
    list: list,
    email: email,
    dueDate: dueDate,
  }

  return new Promise((resolve) => {
    fetch('https://todo-list-backend.azurewebsites.net/api', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const updateTask = async (title, description, index, priority, list, email, dueDate, isComplete=false, token) => {
  const id = getTask(index).id;

  const body = {
    userId: 'string',
    title: title,
    description: description,
    isCompleted: isComplete,
    index: index,
    priority: priority,
    list: list,
    email: email,
    dueDate: dueDate,
  }

  return new Promise((resolve) => {
    fetch(`https://todo-list-backend.azurewebsites.net/api/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const deleteTask = async (index, token) => {
  const id = getTask(index).id;

  return new Promise((resolve) => {
    fetch(`https://todo-list-backend.azurewebsites.net/api/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const doesTaskExist = (index) => {
  return tasks.some(task => task.index == index);
}

const lists = [
  'Home',
  'Work',
];

const getLists = () => lists;

// API Tests

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsR0FBRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxHQUFHO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpZCxcclxuICAgIHVzZXJJZCxcclxuICAgIGVtYWlsLFxyXG4gICAgdGl0bGUsIFxyXG4gICAgZGVzY3JpcHRpb24sIFxyXG4gICAgaXNDb21wbGV0ZWQsXHJcbiAgICBpbmRleCxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbGlzdCxcclxuICAgIGR1ZURhdGUsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVRhc2tDb21wbGV0aW9uKCkge1xyXG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRoaXMuaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRUYXNrUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNldFRhc2tMaXN0KGxpc3QpIHtcclxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgfVxyXG5cclxuICBzZXRUYXNrRHVlRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdGFza3MgPSBbXHJcbiAgLy8gbmV3IFRhc2soXCJCdXkgZ3JvY2VyaWVzXCIsIFwiR2V0IG1pbGssIGVnZ3MsIGJyZWFkLCBhbmQgdmVnZXRhYmxlcyBmcm9tIHRoZSBzdXBlcm1hcmtldC5cIiwgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKSxcclxuICAvLyBuZXcgVGFzayhcIkZpbmlzaCByZXBvcnQgZm9yIHdvcmtcIiwgXCJDb21waWxlIHRoZSBzYWxlcyBkYXRhIGFuZCB3cml0ZSBhIHN1bW1hcnkgZm9yIHRoZSBxdWFydGVybHkgcmVwb3J0LlwiLCBEYXRlLm5vdygpICsgMTIzKSxcclxuICAvLyBuZXcgVGFzayhcIkNhbGwgTW9tXCIsIFwiQ2F0Y2ggdXAgd2l0aCBNb20gYW5kIGNoZWNrIGhvdyBzaGUncyBkb2luZy5cIiwgRGF0ZS5ub3coKSArIDExMDIpLFxyXG4gIC8vIG5ldyBUYXNrKFwiR28gZm9yIGEgam9nXCIsIFwiUnVuIGZvciAzMCBtaW51dGVzIGFyb3VuZCB0aGUgcGFyayB0byBzdGF5IGFjdGl2ZS5cIiwgRGF0ZS5ub3coKSArIDIzMjMpLFxyXG4gIC8vIG5ldyBUYXNrKFwiUmVhZCBhIGJvb2tcIiwgXCJTdGFydCByZWFkaW5nICdUaGUgR3JlYXQgR2F0c2J5JyBieSBGLiBTY290dCBGaXR6Z2VyYWxkLlwiLCBEYXRlLm5vdygpICsgNDI0MiksXHJcbiAgLy8gbmV3IFRhc2soXCJDbGVhbiB0aGUgZ2FyYWdlXCIsIFwiT3JnYW5pemUgYW5kIGRlY2x1dHRlciB0aGUgZ2FyYWdlIHNwYWNlLlwiLCBEYXRlLm5vdygpICsgMTI1MTIpLFxyXG4gIC8vIG5ldyBUYXNrKFwiUGF5IHV0aWxpdHkgYmlsbHNcIiwgXCJTZXR0bGUgZWxlY3RyaWNpdHksIHdhdGVyLCBhbmQgaW50ZXJuZXQgYmlsbHMgZm9yIHRoZSBtb250aC5cIiwgRGF0ZS5ub3coKSArIDQwMDAwKSxcclxuICAvLyBuZXcgVGFzayhcIlBsYW4gd2Vla2VuZCB0cmlwXCIsIFwiUmVzZWFyY2ggZGVzdGluYXRpb25zIGFuZCBjcmVhdGUgYW4gaXRpbmVyYXJ5IGZvciB0aGUgd2Vla2VuZCBnZXRhd2F5LlwiLCBEYXRlLm5vdygpICsgNTEyNDMpLFxyXG4gIC8vIG5ldyBUYXNrKFwiVXBkYXRlIHJlc3VtZVwiLCBcIkFkZCByZWNlbnQgd29yayBleHBlcmllbmNlcyBhbmQgc2tpbGxzIHRvIHRoZSByZXN1bWUuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCksXHJcbiAgLy8gbmV3IFRhc2soXCJQcmFjdGljZSBndWl0YXJcIiwgXCJTcGVuZCAxIGhvdXIgcHJhY3RpY2luZyBjaG9yZHMgYW5kIHNjYWxlcyBvbiB0aGUgZ3VpdGFyLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiAyKyA1MTI1KSxcclxuICAvLyBuZXcgVGFzayhcIk9yZ2FuaXplIGRpZ2l0YWwgZmlsZXNcIiwgXCJTb3J0IGFuZCBhcnJhbmdlIGRvY3VtZW50cyBhbmQgcGhvdG9zIG9uIHRoZSBjb21wdXRlci5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogMyArIDEyMDUxMiksXHJcbiAgLy8gbmV3IFRhc2soXCJXYXRlciB0aGUgcGxhbnRzXCIsIFwiR2l2ZSB0aGUgaW5kb29yIGFuZCBvdXRkb29yIHBsYW50cyBhIGdvb2Qgd2F0ZXJpbmcuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDQgKyAxMjA1MjQpLFxyXG4gIC8vIG5ldyBUYXNrKFwiQXR0ZW5kIHlvZ2EgY2xhc3NcIiwgXCJKb2luIHRoZSBldmVuaW5nIHlvZ2Egc2Vzc2lvbiBhdCB0aGUgbG9jYWwgc3R1ZGlvLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA0ICsgMTIwNTM2KSxcclxuICAvLyBuZXcgVGFzayhcIkZpeCBsZWFraW5nIGZhdWNldFwiLCBcIkNhbGwgdGhlIHBsdW1iZXIgb3IgYXR0ZW1wdCB0byByZXBhaXIgdGhlIGZhdWNldCB5b3Vyc2VsZi5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSArIDEyMDczOCksXHJcbiAgLy8gbmV3IFRhc2soXCJXYXRjaCBhIGRvY3VtZW50YXJ5XCIsIFwiUGljayBhbiBpbnRlcmVzdGluZyBkb2N1bWVudGFyeSBhbmQgbGVhcm4gc29tZXRoaW5nIG5ldy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSAgKyAxMjI2MjYpLFxyXG4gIC8vIG5ldyBUYXNrKFwiU3RhcnQgbGVhcm5pbmcgYSBsYW5ndWFnZVwiLCBcIkRvd25sb2FkIGxhbmd1YWdlIGxlYXJuaW5nIGFwcCBhbmQgYmVnaW4gd2l0aCBiYXNpYyBwaHJhc2VzLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA2KSxcclxuXTtcclxuXHJcbmNvbnN0IGdldFRhc2tzID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9hcGknLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRhc2tzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICB0YXNrcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgVGFzayhcclxuICAgICAgICAgICAgICBlbnRyeS5pZCxcclxuICAgICAgICAgICAgICBlbnRyeS51c2VySWQsXHJcbiAgICAgICAgICAgICAgZW50cnkuZW1haWwsXHJcbiAgICAgICAgICAgICAgZW50cnkudGl0bGUsIFxyXG4gICAgICAgICAgICAgIGVudHJ5LmRlc2NyaXB0aW9uLCBcclxuICAgICAgICAgICAgICBlbnRyeS5pc0NvbXBsZXRlZCxcclxuICAgICAgICAgICAgICBlbnRyeS5pbmRleCxcclxuICAgICAgICAgICAgICBlbnRyeS5wcmlvcml0eSxcclxuICAgICAgICAgICAgICBlbnRyeS5saXN0LFxyXG4gICAgICAgICAgICAgIGVudHJ5LmR1ZURhdGUsXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlc29sdmUodGFza3MpO1xyXG4gICAgICB9KTtcclxuICB9KVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xyXG4gIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KVswXTtcclxufVxyXG5cclxuY29uc3QgYWRkVGFzayA9IGFzeW5jICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4LCBwcmlvcml0eSwgbGlzdCwgZW1haWwsIGR1ZURhdGUsIGlzQ29tcGxldGVkLCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQ6ICdzdHJpbmcnLFxyXG4gICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgaXNDb21wbGV0ZWQ6IGlzQ29tcGxldGVkLFxyXG4gICAgaW5kZXg6IGluZGV4LFxyXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgbGlzdDogbGlzdCxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGZldGNoKCdodHRwczovL3RvZG8tbGlzdC1iYWNrZW5kLmF6dXJld2Vic2l0ZXMubmV0L2FwaScsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ2F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbixcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgdXBkYXRlVGFzayA9IGFzeW5jICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4LCBwcmlvcml0eSwgbGlzdCwgZW1haWwsIGR1ZURhdGUsIGlzQ29tcGxldGU9ZmFsc2UsIHRva2VuKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBnZXRUYXNrKGluZGV4KS5pZDtcclxuXHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIHVzZXJJZDogJ3N0cmluZycsXHJcbiAgICB0aXRsZTogdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICBpc0NvbXBsZXRlZDogaXNDb21wbGV0ZSxcclxuICAgIGluZGV4OiBpbmRleCxcclxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcclxuICAgIGxpc3Q6IGxpc3QsXHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9hcGkvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ2F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbixcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IGFzeW5jIChpbmRleCwgdG9rZW4pID0+IHtcclxuICBjb25zdCBpZCA9IGdldFRhc2soaW5kZXgpLmlkO1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGZldGNoKGBodHRwczovL3RvZG8tbGlzdC1iYWNrZW5kLmF6dXJld2Vic2l0ZXMubmV0L2FwaS8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRvZXNUYXNrRXhpc3QgPSAoaW5kZXgpID0+IHtcclxuICByZXR1cm4gdGFza3Muc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpO1xyXG59XHJcblxyXG5jb25zdCBsaXN0cyA9IFtcclxuICAnSG9tZScsXHJcbiAgJ1dvcmsnLFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0TGlzdHMgPSAoKSA9PiBsaXN0cztcclxuXHJcbi8vIEFQSSBUZXN0c1xyXG5leHBvcnQge1xyXG4gIGdldFRhc2ssXHJcbiAgZ2V0VGFza3MsXHJcbiAgYWRkVGFzayxcclxuICB1cGRhdGVUYXNrLFxyXG4gIGRlbGV0ZVRhc2ssXHJcbiAgZG9lc1Rhc2tFeGlzdCxcclxuICBnZXRMaXN0cyxcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==