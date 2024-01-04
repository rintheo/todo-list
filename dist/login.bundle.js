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
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   token: () => (/* binding */ token)
/* harmony export */ });
const loginScreen = document.querySelector('.login-overlay')
const buttonLogin = document.querySelector('#buttonLogin');
const buttonSignup = document.querySelector('#buttonSignup');
const buttonExistingAccount = document.querySelector('#buttonExistingAccount');
const buttonNewAccount = document.querySelector('#buttonNewAccount');
const formLogIn = document.querySelector('.form.login');
const formSignUp = document.querySelector('.form.signup');
const formLogInError = document.querySelector('form.login .form-error');
const formSignUpError = document.querySelector('form.signup .form-error');
const inputLogInEmail = document.querySelector('#loginEmail');
const inputLogInPassword = document.querySelector('#loginPassword');
const inputSignUpEmail = document.querySelector('#signupEmail');
const inputSignUpPassword = document.querySelector('#signupPassword');

let token = null;

function hide(element) {
    element.classList.add('display-none');
}

function show(element) {
    element.classList.remove('display-none');
}

function disableButton(button) {
    button.classList.add('loading');
    button.disabled = true;
}

function enableButton(button) {
    button.classList.remove('loading');
    button.disabled = false;
}

function resetForms() {
    formLogIn.reset();
    formSignUp.reset();
}

function showSignUpForm() {
    hide(buttonNewAccount);
    hide(formLogIn);
    show(buttonExistingAccount);
    show(formSignUp);
    resetForms();
}

function showLoginForm() {
    hide(buttonExistingAccount);
    hide(formSignUp);
    show(buttonNewAccount);
    show(formLogIn);
    resetForms();
}

function logIn(e) {
    if (
        !inputLogInEmail.checkValidity() ||
        !inputLogInPassword.checkValidity()
    ) {
        return false;
    }

    const button = e.currentTarget;
    const body = {
        email: inputLogInEmail.value,
        password: inputLogInPassword.value,
    }    

    disableButton(button);

    fetch('https://todo-list-backend.azurewebsites.net/identity/login',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => {
        // console.log(response);
        enableButton(button);
        if (response.status) {
            show(formLogInError);
            formLogInError.textContent="❌ Incorrect login credentials."
            return;
        }
        resetForms();
        token = response.accessToken;
        loginScreen.classList.add('visibility-hidden');
        // index.generateTodoList();
    })
}

function signUp(e) {
    if (
        !inputSignUpEmail.checkValidity() ||
        !inputSignUpPassword.checkValidity()
    ) {
        return false;
    }

    const button = e.currentTarget;
    const body = {
        email: inputSignUpEmail.value,
        password: inputSignUpPassword.value,
    }    

    disableButton(button);

    fetch('https://todo-list-backend.azurewebsites.net/identity/register',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(data => {
        if (!data.ok) {
            data.json().then(response => {
                console.log(response);
                if (response.status) {
                    show(formSignUpError);
                    formSignUpError.textContent="❌ Invalid registration."
                    return;
                }
            })
        } else {
            show(formSignUpError);
            formSignUpError.textContent="✔ Successfully registered. You may now login."
        }
        enableButton(button);
        resetForms();
    })    
}

inputLogInEmail.addEventListener('click', () => {hide(formLogInError)});
inputLogInPassword.addEventListener('click', () => {hide(formLogInError)});
inputSignUpEmail.addEventListener('click', () => {hide(formSignUpError)});
inputSignUpPassword.addEventListener('click', () => {hide(formSignUpError)});

buttonSignup.addEventListener('click', signUp);
buttonLogin.addEventListener('click', logIn);
buttonNewAccount.addEventListener('click', showSignUpForm);
buttonExistingAccount.addEventListener('click', showLoginForm);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFLG9EQUFvRCxxQkFBcUI7QUFDekUsa0RBQWtELHNCQUFzQjtBQUN4RSxxREFBcUQsc0JBQXNCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW92ZXJsYXknKVxyXG5jb25zdCBidXR0b25Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Mb2dpbicpO1xyXG5jb25zdCBidXR0b25TaWdudXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2lnbnVwJyk7XHJcbmNvbnN0IGJ1dHRvbkV4aXN0aW5nQWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25FeGlzdGluZ0FjY291bnQnKTtcclxuY29uc3QgYnV0dG9uTmV3QWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25OZXdBY2NvdW50Jyk7XHJcbmNvbnN0IGZvcm1Mb2dJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLmxvZ2luJyk7XHJcbmNvbnN0IGZvcm1TaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS5zaWdudXAnKTtcclxuY29uc3QgZm9ybUxvZ0luRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmxvZ2luIC5mb3JtLWVycm9yJyk7XHJcbmNvbnN0IGZvcm1TaWduVXBFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2lnbnVwIC5mb3JtLWVycm9yJyk7XHJcbmNvbnN0IGlucHV0TG9nSW5FbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbkVtYWlsJyk7XHJcbmNvbnN0IGlucHV0TG9nSW5QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpblBhc3N3b3JkJyk7XHJcbmNvbnN0IGlucHV0U2lnblVwRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lnbnVwRW1haWwnKTtcclxuY29uc3QgaW5wdXRTaWduVXBQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWdudXBQYXNzd29yZCcpO1xyXG5cclxubGV0IHRva2VuID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcclxuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtcygpIHtcclxuICAgIGZvcm1Mb2dJbi5yZXNldCgpO1xyXG4gICAgZm9ybVNpZ25VcC5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwRm9ybSgpIHtcclxuICAgIGhpZGUoYnV0dG9uTmV3QWNjb3VudCk7XHJcbiAgICBoaWRlKGZvcm1Mb2dJbik7XHJcbiAgICBzaG93KGJ1dHRvbkV4aXN0aW5nQWNjb3VudCk7XHJcbiAgICBzaG93KGZvcm1TaWduVXApO1xyXG4gICAgcmVzZXRGb3JtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9naW5Gb3JtKCkge1xyXG4gICAgaGlkZShidXR0b25FeGlzdGluZ0FjY291bnQpO1xyXG4gICAgaGlkZShmb3JtU2lnblVwKTtcclxuICAgIHNob3coYnV0dG9uTmV3QWNjb3VudCk7XHJcbiAgICBzaG93KGZvcm1Mb2dJbik7XHJcbiAgICByZXNldEZvcm1zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgICAhaW5wdXRMb2dJbkVtYWlsLmNoZWNrVmFsaWRpdHkoKSB8fFxyXG4gICAgICAgICFpbnB1dExvZ0luUGFzc3dvcmQuY2hlY2tWYWxpZGl0eSgpXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbWFpbDogaW5wdXRMb2dJbkVtYWlsLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiBpbnB1dExvZ0luUGFzc3dvcmQudmFsdWUsXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uKTtcclxuXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9pZGVudGl0eS9sb2dpbicse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9uKGJ1dHRvbik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBzaG93KGZvcm1Mb2dJbkVycm9yKTtcclxuICAgICAgICAgICAgZm9ybUxvZ0luRXJyb3IudGV4dENvbnRlbnQ9XCLinYwgSW5jb3JyZWN0IGxvZ2luIGNyZWRlbnRpYWxzLlwiXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXRGb3JtcygpO1xyXG4gICAgICAgIHRva2VuID0gcmVzcG9uc2UuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgbG9naW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICAgICAgICAvLyBpbmRleC5nZW5lcmF0ZVRvZG9MaXN0KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXAoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgICFpbnB1dFNpZ25VcEVtYWlsLmNoZWNrVmFsaWRpdHkoKSB8fFxyXG4gICAgICAgICFpbnB1dFNpZ25VcFBhc3N3b3JkLmNoZWNrVmFsaWRpdHkoKVxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgZW1haWw6IGlucHV0U2lnblVwRW1haWwudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGlucHV0U2lnblVwUGFzc3dvcmQudmFsdWUsXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uKTtcclxuXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9pZGVudGl0eS9yZWdpc3Rlcicse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgICAgIGRhdGEuanNvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3coZm9ybVNpZ25VcEVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2lnblVwRXJyb3IudGV4dENvbnRlbnQ9XCLinYwgSW52YWxpZCByZWdpc3RyYXRpb24uXCJcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvdyhmb3JtU2lnblVwRXJyb3IpO1xyXG4gICAgICAgICAgICBmb3JtU2lnblVwRXJyb3IudGV4dENvbnRlbnQ9XCLinJQgU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQuIFlvdSBtYXkgbm93IGxvZ2luLlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuYWJsZUJ1dHRvbihidXR0b24pO1xyXG4gICAgICAgIHJlc2V0Rm9ybXMoKTtcclxuICAgIH0pICAgIFxyXG59XHJcblxyXG5pbnB1dExvZ0luRW1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7aGlkZShmb3JtTG9nSW5FcnJvcil9KTtcclxuaW5wdXRMb2dJblBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2hpZGUoZm9ybUxvZ0luRXJyb3IpfSk7XHJcbmlucHV0U2lnblVwRW1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7aGlkZShmb3JtU2lnblVwRXJyb3IpfSk7XHJcbmlucHV0U2lnblVwUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7aGlkZShmb3JtU2lnblVwRXJyb3IpfSk7XHJcblxyXG5idXR0b25TaWdudXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWduVXApO1xyXG5idXR0b25Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ0luKTtcclxuYnV0dG9uTmV3QWNjb3VudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTaWduVXBGb3JtKTtcclxuYnV0dG9uRXhpc3RpbmdBY2NvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0xvZ2luRm9ybSk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgdG9rZW4sXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9