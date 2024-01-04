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


const tempToken = 'CfDJ8NCBEr79Go5FnHcYPhsOzXEME8-gATxp-Hmop3M3RRTZDnVc_iTJ9yj6wVE_98p2AzLRbN8XqeSZgLOm2VrlW_A8yNKH5Ev_qmH_8rIwgD-E6FgG2pcvqDy6ibE8hNJfpRZCKBjoWGDoVzd0mki53rRTJW-fGuP3vcK8RrGgtFAX5zDtSymz38gNsFAju-1OU6Y-tsjLxNFmQVV7BhD6XPSFYNjO8ZfulMg5PynEUCpii9YJixBKRipE2RQodzuuMJZ6tMGlIixfglof1OzTeriYjIkHglto1ywZ0I7wxuuCZDGuvqV4jrOHCSPwqD3BkCeKbUUvEIP7dAYF7lqx63UhxzKH0_dz9SxB618FUChK9NiQqtnaBZETRZRye65_YPOSQOUqp758j18niXwSSfCKZ9fkUdTRfFbsxgiGbGEbDsjM6hgraXsl4CH5GN2CimKEvYXTjaevgiewt28U0nDLLpppaHzEWrro3COybs58ZO0UmnRlLbvdAFFjlGC-gtbyRsjsM9eeggCFHs0NBV7S2vd3UxLnN051g9FE4wXXOsLS2wH3OLbWXYz5-3vwOtwy5L-QKwf7EAWuAIBwMpjUtQt31BdqGoR6bREaNaba37OzfkZMdPcIrhKuvFk3ZhhKfYx0swm55l6a6xzy7LVu-DnqzLnfMYTMAZlsVbCNjwhpgIqnzrWrGtcE3LdxL2ZsmMA0mopUb2rjBLqEYgQ';

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
            )
          )
        })
        tasks.forEach(task => 
          task.dueDate = new Date(task.index)
        );
        resolve(tasks);
      });
  })
};

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

// API Tests

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcblxyXG5jb25zdCB0ZW1wVG9rZW4gPSAnQ2ZESjhOQ0JFcjc5R281Rm5IY1lQaHNPelhFTUU4LWdBVHhwLUhtb3AzTTNSUlRaRG5WY19pVEo5eWo2d1ZFXzk4cDJBekxSYk44WHFlU1pnTE9tMlZybFdfQTh5TktINUV2X3FtSF84ckl3Z0QtRTZGZ0cycGN2cUR5NmliRThoTkpmcFJaQ0tCam9XR0RvVnpkMG1raTUzclJUSlctZkd1UDN2Y0s4UnJHZ3RGQVg1ekR0U3ltejM4Z05zRkFqdS0xT1U2WS10c2pMeE5GbVFWVjdCaEQ2WFBTRllOak84WmZ1bE1nNVB5bkVVQ3BpaTlZSml4QktSaXBFMlJRb2R6dXVNSlo2dE1HbElpeGZnbG9mMU96VGVyaVlqSWtIZ2x0bzF5d1owSTd3eHV1Q1pER3V2cVY0anJPSENTUHdxRDNCa0NlS2JVVXZFSVA3ZEFZRjdscXg2M1VoeHpLSDBfZHo5U3hCNjE4RlVDaEs5TmlRcXRuYUJaRVRSWlJ5ZTY1X1lQT1NRT1VxcDc1OGoxOG5pWHdTU2ZDS1o5ZmtVZFRSZkZic3hnaUdiR0ViRHNqTTZoZ3JhWHNsNENINUdOMkNpbUtFdllYVGphZXZnaWV3dDI4VTBuRExMcHBwYUh6RVdycm8zQ095YnM1OFpPMFVtblJsTGJ2ZEFGRmpsR0MtZ3RieVJzanNNOWVlZ2dDRkhzME5CVjdTMnZkM1V4TG5OMDUxZzlGRTR3WFhPc0xTMndIM09MYldYWXo1LTN2d090d3k1TC1RS3dmN0VBV3VBSUJ3TXBqVXRRdDMxQmRxR29SNmJSRWFOYWJhMzdPemZrWk1kUGNJcmhLdXZGazNaaGhLZll4MHN3bTU1bDZhNnh6eTdMVnUtRG5xekxuZk1ZVE1BWmxzVmJDTmp3aHBnSXFuenJXckd0Y0UzTGR4TDJac21NQTBtb3BVYjJyakJMcUVZZ1EnO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpZCxcclxuICAgIHVzZXJJZCxcclxuICAgIGVtYWlsLFxyXG4gICAgdGl0bGUsIFxyXG4gICAgZGVzY3JpcHRpb24sIFxyXG4gICAgaXNDb21wbGV0ZWQsXHJcbiAgICBpbmRleCxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbGlzdCxcclxuICApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIHRoaXMuZHVlRGF0ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24oKSB7XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gdGhpcy5pc0NvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFRhc2tQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza0xpc3QobGlzdCkge1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICB9XHJcblxyXG4gIHNldFRhc2tEdWVEYXRlKGRhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB0YXNrcyA9IFtcclxuICAvLyBuZXcgVGFzayhcIkJ1eSBncm9jZXJpZXNcIiwgXCJHZXQgbWlsaywgZWdncywgYnJlYWQsIGFuZCB2ZWdldGFibGVzIGZyb20gdGhlIHN1cGVybWFya2V0LlwiLCBEYXRlLm5vdygpIC0gODY0MDAwMDApLFxyXG4gIC8vIG5ldyBUYXNrKFwiRmluaXNoIHJlcG9ydCBmb3Igd29ya1wiLCBcIkNvbXBpbGUgdGhlIHNhbGVzIGRhdGEgYW5kIHdyaXRlIGEgc3VtbWFyeSBmb3IgdGhlIHF1YXJ0ZXJseSByZXBvcnQuXCIsIERhdGUubm93KCkgKyAxMjMpLFxyXG4gIC8vIG5ldyBUYXNrKFwiQ2FsbCBNb21cIiwgXCJDYXRjaCB1cCB3aXRoIE1vbSBhbmQgY2hlY2sgaG93IHNoZSdzIGRvaW5nLlwiLCBEYXRlLm5vdygpICsgMTEwMiksXHJcbiAgLy8gbmV3IFRhc2soXCJHbyBmb3IgYSBqb2dcIiwgXCJSdW4gZm9yIDMwIG1pbnV0ZXMgYXJvdW5kIHRoZSBwYXJrIHRvIHN0YXkgYWN0aXZlLlwiLCBEYXRlLm5vdygpICsgMjMyMyksXHJcbiAgLy8gbmV3IFRhc2soXCJSZWFkIGEgYm9va1wiLCBcIlN0YXJ0IHJlYWRpbmcgJ1RoZSBHcmVhdCBHYXRzYnknIGJ5IEYuIFNjb3R0IEZpdHpnZXJhbGQuXCIsIERhdGUubm93KCkgKyA0MjQyKSxcclxuICAvLyBuZXcgVGFzayhcIkNsZWFuIHRoZSBnYXJhZ2VcIiwgXCJPcmdhbml6ZSBhbmQgZGVjbHV0dGVyIHRoZSBnYXJhZ2Ugc3BhY2UuXCIsIERhdGUubm93KCkgKyAxMjUxMiksXHJcbiAgLy8gbmV3IFRhc2soXCJQYXkgdXRpbGl0eSBiaWxsc1wiLCBcIlNldHRsZSBlbGVjdHJpY2l0eSwgd2F0ZXIsIGFuZCBpbnRlcm5ldCBiaWxscyBmb3IgdGhlIG1vbnRoLlwiLCBEYXRlLm5vdygpICsgNDAwMDApLFxyXG4gIC8vIG5ldyBUYXNrKFwiUGxhbiB3ZWVrZW5kIHRyaXBcIiwgXCJSZXNlYXJjaCBkZXN0aW5hdGlvbnMgYW5kIGNyZWF0ZSBhbiBpdGluZXJhcnkgZm9yIHRoZSB3ZWVrZW5kIGdldGF3YXkuXCIsIERhdGUubm93KCkgKyA1MTI0MyksXHJcbiAgLy8gbmV3IFRhc2soXCJVcGRhdGUgcmVzdW1lXCIsIFwiQWRkIHJlY2VudCB3b3JrIGV4cGVyaWVuY2VzIGFuZCBza2lsbHMgdG8gdGhlIHJlc3VtZS5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwKSxcclxuICAvLyBuZXcgVGFzayhcIlByYWN0aWNlIGd1aXRhclwiLCBcIlNwZW5kIDEgaG91ciBwcmFjdGljaW5nIGNob3JkcyBhbmQgc2NhbGVzIG9uIHRoZSBndWl0YXIuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDIrIDUxMjUpLFxyXG4gIC8vIG5ldyBUYXNrKFwiT3JnYW5pemUgZGlnaXRhbCBmaWxlc1wiLCBcIlNvcnQgYW5kIGFycmFuZ2UgZG9jdW1lbnRzIGFuZCBwaG90b3Mgb24gdGhlIGNvbXB1dGVyLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiAzICsgMTIwNTEyKSxcclxuICAvLyBuZXcgVGFzayhcIldhdGVyIHRoZSBwbGFudHNcIiwgXCJHaXZlIHRoZSBpbmRvb3IgYW5kIG91dGRvb3IgcGxhbnRzIGEgZ29vZCB3YXRlcmluZy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNCArIDEyMDUyNCksXHJcbiAgLy8gbmV3IFRhc2soXCJBdHRlbmQgeW9nYSBjbGFzc1wiLCBcIkpvaW4gdGhlIGV2ZW5pbmcgeW9nYSBzZXNzaW9uIGF0IHRoZSBsb2NhbCBzdHVkaW8uXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDQgKyAxMjA1MzYpLFxyXG4gIC8vIG5ldyBUYXNrKFwiRml4IGxlYWtpbmcgZmF1Y2V0XCIsIFwiQ2FsbCB0aGUgcGx1bWJlciBvciBhdHRlbXB0IHRvIHJlcGFpciB0aGUgZmF1Y2V0IHlvdXJzZWxmLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA1ICsgMTIwNzM4KSxcclxuICAvLyBuZXcgVGFzayhcIldhdGNoIGEgZG9jdW1lbnRhcnlcIiwgXCJQaWNrIGFuIGludGVyZXN0aW5nIGRvY3VtZW50YXJ5IGFuZCBsZWFybiBzb21ldGhpbmcgbmV3LlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA1ICArIDEyMjYyNiksXHJcbiAgLy8gbmV3IFRhc2soXCJTdGFydCBsZWFybmluZyBhIGxhbmd1YWdlXCIsIFwiRG93bmxvYWQgbGFuZ3VhZ2UgbGVhcm5pbmcgYXBwIGFuZCBiZWdpbiB3aXRoIGJhc2ljIHBocmFzZXMuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDYpLFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0VGFza3MgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGZldGNoKCdodHRwczovL3RvZG8tbGlzdC1iYWNrZW5kLmF6dXJld2Vic2l0ZXMubmV0L2FwaScsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGFza3MubGVuZ3RoID0gMDtcclxuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIHRhc2tzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBUYXNrKFxyXG4gICAgICAgICAgICAgIGVudHJ5LmlkLFxyXG4gICAgICAgICAgICAgIGVudHJ5LnVzZXJJZCxcclxuICAgICAgICAgICAgICBlbnRyeS5lbWFpbCxcclxuICAgICAgICAgICAgICBlbnRyeS50aXRsZSwgXHJcbiAgICAgICAgICAgICAgZW50cnkuZGVzY3JpcHRpb24sIFxyXG4gICAgICAgICAgICAgIGVudHJ5LmlzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgIGVudHJ5LmluZGV4LFxyXG4gICAgICAgICAgICAgIGVudHJ5LnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgIGVudHJ5Lmxpc3QsXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiBcclxuICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suaW5kZXgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKHRhc2tzKTtcclxuICAgICAgfSk7XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHtcclxuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xyXG4gIHRhc2tzLnB1c2gobmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkpO1xyXG59XHJcblxyXG5jb25zdCB1cGRhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcclxuICBjb25zdCB0YXNrID0gZ2V0VGFzayhpbmRleCk7XHJcbiAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gIHRhc2tzLnNwbGljZSh0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KSwgMSk7XHJcbn1cclxuXHJcbmNvbnN0IGRvZXNUYXNrRXhpc3QgPSAoaW5kZXgpID0+IHtcclxuICByZXR1cm4gdGFza3Muc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpO1xyXG59XHJcblxyXG5jb25zdCBsaXN0cyA9IFtcclxuICAnSG9tZScsXHJcbiAgJ1dvcmsnLFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0TGlzdHMgPSAoKSA9PiBsaXN0cztcclxuXHJcbi8vIEFQSSBUZXN0c1xyXG5leHBvcnQge1xyXG4gIGdldFRhc2ssXHJcbiAgZ2V0VGFza3MsXHJcbiAgYWRkVGFzayxcclxuICB1cGRhdGVUYXNrLFxyXG4gIGRlbGV0ZVRhc2ssXHJcbiAgZG9lc1Rhc2tFeGlzdCxcclxuICBnZXRMaXN0cyxcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==