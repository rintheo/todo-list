/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
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
        console.log(response);
        enableButton(button);
        if (response.status) {
            show(formLogInError);
            formLogInError.textContent="❌ Incorrect login credentials."
            return;
        }
        resetForms();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFLG9EQUFvRCxxQkFBcUI7QUFDekUsa0RBQWtELHNCQUFzQjtBQUN4RSxxREFBcUQsc0JBQXNCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnV0dG9uTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uTG9naW4nKTtcclxuY29uc3QgYnV0dG9uU2lnbnVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvblNpZ251cCcpO1xyXG5jb25zdCBidXR0b25FeGlzdGluZ0FjY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRXhpc3RpbmdBY2NvdW50Jyk7XHJcbmNvbnN0IGJ1dHRvbk5ld0FjY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uTmV3QWNjb3VudCcpO1xyXG5jb25zdCBmb3JtTG9nSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS5sb2dpbicpO1xyXG5jb25zdCBmb3JtU2lnblVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0uc2lnbnVwJyk7XHJcbmNvbnN0IGZvcm1Mb2dJbkVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5sb2dpbiAuZm9ybS1lcnJvcicpO1xyXG5jb25zdCBmb3JtU2lnblVwRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNpZ251cCAuZm9ybS1lcnJvcicpO1xyXG5jb25zdCBpbnB1dExvZ0luRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW5FbWFpbCcpO1xyXG5jb25zdCBpbnB1dExvZ0luUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW5QYXNzd29yZCcpO1xyXG5jb25zdCBpbnB1dFNpZ25VcEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ251cEVtYWlsJyk7XHJcbmNvbnN0IGlucHV0U2lnblVwUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lnbnVwUGFzc3dvcmQnKTtcclxuXHJcbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcclxuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtcygpIHtcclxuICAgIGZvcm1Mb2dJbi5yZXNldCgpO1xyXG4gICAgZm9ybVNpZ25VcC5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2lnblVwRm9ybSgpIHtcclxuICAgIGhpZGUoYnV0dG9uTmV3QWNjb3VudCk7XHJcbiAgICBoaWRlKGZvcm1Mb2dJbik7XHJcbiAgICBzaG93KGJ1dHRvbkV4aXN0aW5nQWNjb3VudCk7XHJcbiAgICBzaG93KGZvcm1TaWduVXApO1xyXG4gICAgcmVzZXRGb3JtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TG9naW5Gb3JtKCkge1xyXG4gICAgaGlkZShidXR0b25FeGlzdGluZ0FjY291bnQpO1xyXG4gICAgaGlkZShmb3JtU2lnblVwKTtcclxuICAgIHNob3coYnV0dG9uTmV3QWNjb3VudCk7XHJcbiAgICBzaG93KGZvcm1Mb2dJbik7XHJcbiAgICByZXNldEZvcm1zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgICAhaW5wdXRMb2dJbkVtYWlsLmNoZWNrVmFsaWRpdHkoKSB8fFxyXG4gICAgICAgICFpbnB1dExvZ0luUGFzc3dvcmQuY2hlY2tWYWxpZGl0eSgpXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbWFpbDogaW5wdXRMb2dJbkVtYWlsLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiBpbnB1dExvZ0luUGFzc3dvcmQudmFsdWUsXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uKTtcclxuXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9pZGVudGl0eS9sb2dpbicse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9uKGJ1dHRvbik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICBzaG93KGZvcm1Mb2dJbkVycm9yKTtcclxuICAgICAgICAgICAgZm9ybUxvZ0luRXJyb3IudGV4dENvbnRlbnQ9XCLinYwgSW5jb3JyZWN0IGxvZ2luIGNyZWRlbnRpYWxzLlwiXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXRGb3JtcygpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgICAhaW5wdXRTaWduVXBFbWFpbC5jaGVja1ZhbGlkaXR5KCkgfHxcclxuICAgICAgICAhaW5wdXRTaWduVXBQYXNzd29yZC5jaGVja1ZhbGlkaXR5KClcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgIGVtYWlsOiBpbnB1dFNpZ25VcEVtYWlsLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiBpbnB1dFNpZ25VcFBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbik7XHJcblxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vdG9kby1saXN0LWJhY2tlbmQuYXp1cmV3ZWJzaXRlcy5uZXQvaWRlbnRpdHkvcmVnaXN0ZXInLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICghZGF0YS5vaykge1xyXG4gICAgICAgICAgICBkYXRhLmpzb24oKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93KGZvcm1TaWduVXBFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNpZ25VcEVycm9yLnRleHRDb250ZW50PVwi4p2MIEludmFsaWQgcmVnaXN0cmF0aW9uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3coZm9ybVNpZ25VcEVycm9yKTtcclxuICAgICAgICAgICAgZm9ybVNpZ25VcEVycm9yLnRleHRDb250ZW50PVwi4pyUIFN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkLiBZb3UgbWF5IG5vdyBsb2dpbi5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVCdXR0b24oYnV0dG9uKTtcclxuICAgICAgICByZXNldEZvcm1zKCk7XHJcbiAgICB9KSAgICBcclxufVxyXG5cclxuaW5wdXRMb2dJbkVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2hpZGUoZm9ybUxvZ0luRXJyb3IpfSk7XHJcbmlucHV0TG9nSW5QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtoaWRlKGZvcm1Mb2dJbkVycm9yKX0pO1xyXG5pbnB1dFNpZ25VcEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2hpZGUoZm9ybVNpZ25VcEVycm9yKX0pO1xyXG5pbnB1dFNpZ25VcFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2hpZGUoZm9ybVNpZ25VcEVycm9yKX0pO1xyXG5cclxuYnV0dG9uU2lnbnVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lnblVwKTtcclxuYnV0dG9uTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dJbik7XHJcbmJ1dHRvbk5ld0FjY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2lnblVwRm9ybSk7XHJcbmJ1dHRvbkV4aXN0aW5nQWNjb3VudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dMb2dpbkZvcm0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==