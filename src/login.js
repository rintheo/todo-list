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