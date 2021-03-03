const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const submitRegister = document.querySelector('#submit-register');
const container = document.querySelector('.container');

const alertLogin = document.querySelector('.sign-in-form .alert-login');
const alertRegister = document.querySelector('.sign-up-form .alert-register');

const usernameTxt = document.getElementById('username-register');
const emailTxt = document.getElementById('email-register');
const passwordTxt = document.getElementById('password-register');


sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

submitRegister.addEventListener('click', () => {
    if (usernameTxt.value == '') {
        alertRegister.innerHTML = 'Gagal Login';
        setInterval(() => {
            alertRegister.innerHTML = '';
        }, 4000);
    } else {
        container.classList.remove('sign-up-mode');

    }

});
