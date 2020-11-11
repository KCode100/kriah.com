document.addEventListener('click', check);


function check(e){
    const dropMenu = document.querySelector('div.drop-menu');
    const menuIcon = document.querySelector('.hamberger');

    // let inside = menuIcon.contains(e.target);

    if (menuIcon.contains(e.target)){
        dropMenu.classList.toggle('reveal');
    } else {
        dropMenu.classList.remove('reveal');
    }
}


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }


// // // // // // // //
// // LOGIN MODAL// //
// // // // // // // //

const loginBtn = document.querySelectorAll('.login-button');
const modal = document.querySelector('.login-container');
const usernameUI = document.querySelector('#username');
const passwordUI = document.querySelector('#password');
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', checkInput);
window.addEventListener('click', closeModal);

// listen to ALL "client zone" buttons
loginBtn.forEach(function(element){
    element.addEventListener('click', openModal);
})

function openModal(){
    modal.style.display = 'block';
}

function closeModal(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}

passwordUI.addEventListener('input', function(){
    const usernameInput = usernameUI.value.toLowerCase();
    const correctUsername = 'talmidim';
    const loginBox = document.querySelector('.login-box');
    const passwordInput = passwordUI.value.toLowerCase();
    const correctPassword = 'zobin123'

    if (usernameInput === correctUsername && passwordInput === correctPassword){
        loginBox.style.border = '6px solid #62f77b';
    }
});

// Login with correct username and password
function checkInput(){
    const usernameInput = usernameUI.value.toLowerCase();
    const passwordInput = passwordUI.value.toLowerCase();
    const loginBox = document.querySelector('.login-box');
    const correctUsername = 'talmidim';
    const correctPassword = 'zobin123'
    if (usernameInput === correctUsername && passwordInput === correctPassword){
        setTimeout(clientPage, 1000);
        loginBox.style.border = '6px solid #62f77b';
    } else {
        console.log('incorrect username or password');
        loginBox.style.border = '6px solid red';

    }
}

function clientPage(){
    document.location = 'user.html';
}


// const input = document.querySelector('input');
// input.addEventListener('focus', function(){

//     this.placeholder = '';
// });
// input.addEventListener('blur', function(){

//     this.placeholder = "&#xf007; username";
// });



