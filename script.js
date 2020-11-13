
const loginBtn = document.querySelectorAll('.login-button');
const modal = document.querySelector('.login-container');
const usernameUI = document.querySelector('#username');
const passwordUI = document.querySelector('#password');
const submitBtn = document.querySelector('.submit-btn');
const loginBox = document.querySelector('.login-box');
const spinner = document.querySelector('.spinner');
submitBtn.addEventListener('click', checkInput);
window.addEventListener('click', closeModal);


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

// listen to ALL "client zone" buttons
loginBtn.forEach(function(element){
    element.addEventListener('click', openModal);
})

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(e){
    if (e.target == modal || e.target.classList.contains('close-icon')){
        modal.style.display = 'none';
        document.querySelector('input[type=password]').value = '';
        document.querySelector('input[type=text]').value = '';
    }
}

// green border with correct username and password //
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
    const correctUsername = 'talmidim';
    const correctPassword = 'zobin123'
    // if (usernameInput === ''){
    //     setTimeout(2000, clearBorder);
    //     document.querySelector('input[type=text]').style.border = '3px solid red';
    // }
    // if(passwordInput === ''){
    //     document.querySelector('input[type=password]').style.border = '3px solid red';
    // }
    if (usernameInput === correctUsername && passwordInput === correctPassword){
        clientPage();
        // loginBox.style.border = '4px solid #62f77b';
    } else {
        displaySpinner();
    }
}

function displaySpinner(){
    setTimeout(border, 1000);
    spinner.style.display = 'block';
    submitBtn.style.display = 'none';
}

function border(){
    const usernameInput = usernameUI.value.toLowerCase();
    const passwordInput = passwordUI.value.toLowerCase();
    setTimeout(clearBorder, 1000);
    spinner.style.display = 'none';
    loginBox.style.border = '2px solid red';
    submitBtn.style.display = 'block';
    document.querySelector('input[type=password]').value = '';
    document.querySelector('input[type=text]').value = '';
    if (usernameInput === ''){
        // setTimeout(500, clearBorder);
        document.querySelector('input[type=text]').style.border = '2px solid red';
        document.querySelector('input[type=text]').style.transform = 'scale(1.1)';
    }
    if(passwordInput === ''){
        document.querySelector('input[type=password]').style.border = '2px solid red';
        document.querySelector('input[type=password]').style.transform = 'scale(1.1)';
    }
}

function clearBorder(){
    loginBox.style.border = 'black';
    document.querySelector('input[type=password]').style.border = 'black';
    document.querySelector('input[type=text]').style.border = 'black';
    document.querySelector('input[type=password]').style.transform = 'none';
    document.querySelector('input[type=text]').style.transform = 'none';
}

function clientPage(){
    window.location.href = 'user.html';
    console.log('still working');
}



