
const loginBtn = document.querySelectorAll('.login-button');
const modal = document.querySelector('.login-container');
const usernameUI = document.querySelector('#username');
const passwordUI = document.querySelector('#password');
const submitBtn = document.querySelector('.submit-btn');
const loginBox = document.querySelector('.login-box');
const spinner = document.querySelector('.spinner');
const page = document.querySelector('.page');
if (submitBtn){
    submitBtn.addEventListener('click', checkInput);
}
window.addEventListener('click', closeModal);
document.addEventListener('click', check);

// window.addEventListener('load', function(){
//     page.style.visibility = 'visible';
//     console.log('window loaded!');
// });


// page loader icon until page loads
document.onreadystatechange = function () {
    const state = document.readyState
    if (state == 'interactive') {
         document.querySelector('.page').style.display = 'none';
    } else if (state == 'complete') {
        setTimeout(function(){
        //    document.getElementById('interactive');
           document.querySelector('.loading-icon').style.display = 'none';
           document.querySelector('.page').style.display = 'initial';
            AOS.init();

        },500);
    }
  }





function check(e){
    const dropMenu = document.querySelector('div.drop-menu');
    const menuIcon = document.querySelector('.hamberger');
    const smallNavAbout = document.querySelector('.small-nav-about');
    const smallNavContact = document.querySelector('.small-nav-contact');
    const dropdownAbout = document.querySelector('.open-about');
    const dropdownContact = document.querySelector('.open-contact');
    const dropdownArrow1 = document.querySelector('.dropdown-arrow1');
    const dropdownArrow2 = document.querySelector('.dropdown-arrow2');
    // const openAbout = document.querySelector('.open-about');
    const openContact = document.querySelector('.open-contact');
    // let inside = menuIcon.contains(e.target);

    if (menuIcon.contains(e.target)){
        dropMenu.classList.toggle('reveal');
    } else if (openContact.contains(e.target)){
        // dropdownArrow1.classList.remove('dropdown-spin');
        dropdownArrow2.classList.remove('dropdown-spin');
    }else if (smallNavAbout.contains(e.target)){
        dropMenu.classList.add('reveal');
        dropdownAbout.classList.toggle('reveal-dropdown');
        dropdownArrow1.classList.toggle('dropdown-spin');
    } else if (smallNavContact.contains(e.target)){
        dropMenu.classList.add('reveal');
        dropdownContact.classList.toggle('reveal-dropdown');
        dropdownArrow2.classList.toggle('dropdown-spin');
    }
    else {
        dropMenu.classList.remove('reveal');
    }

    // about link nav dropdown
    // const aboutBtn = document.querySelector('.about-link');
    // const dropdownList = document.querySelector('ul.dropdown');
    // if (aboutBtn.contains(e.target)){
    //     dropdownList.classList.toggle('hide-dropdown');
    // } else{
    //     dropdownList.classList.add('hide-dropdown');
    // }
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
    loginBox.classList.add('animate__animated','animate__zoomIn');
}

function closeModal(e){
    if (e.target == modal || e.target.classList.contains('close-icon')){
        modal.style.display = 'none';
        document.querySelector('input[type=password]').value = '';
        document.querySelector('input[type=text]').value = '';
    }
}

// green border with correct username and password //
if (passwordUI){
    passwordUI.addEventListener('input', function(){
        const usernameInput = usernameUI.value.toLowerCase();
        const correctUsername = 'talmidim';
        const loginBox = document.querySelector('.login-box');
        const passwordInput = passwordUI.value.toLowerCase();
        const correctPassword = 'zobin123'
    
        if (usernameInput === correctUsername && passwordInput === correctPassword){
            loginBox.style.border = '4px solid #eed49f';
            submitBtn.innerText = 'Login';
        }
    });
}

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
        setTimeout(function(){
            clientPage();
        },1000);
        loginBox.classList.remove('animate__animated','animate__zoomIn');
        loginBox.classList.add('animate__animated', 'animate__backOutUp');
        // loginBox.style.border = '4px solid #62f77b';
    } else {
        displaySpinner();
    }
}

function displaySpinner(){
    setTimeout(border, 1300);
    spinner.style.display = 'block';
    submitBtn.style.display = 'none';
}

function border(){
    const usernameInput = usernameUI.value.toLowerCase();
    const passwordInput = passwordUI.value.toLowerCase();
    setTimeout(clearBorder, 1000);
    spinner.style.display = 'none';
    submitBtn.style.display = 'block';
    document.querySelector('input[type=password]').value = '';
    document.querySelector('input[type=text]').value = '';
    if (usernameInput === '' && passwordInput === ''){
        loginBox.style.border = '2px solid red';
        loginBox.classList.remove('animate__animated','animate__zoomIn');
        loginBox.classList.add('animate__animated', 'animate__headShake');

    } else if (usernameInput === ''){
        // setTimeout(500, clearBorder);
        document.querySelector('input[type=text]').style.border = '2px solid red';
        document.querySelector('input[type=text]').style.transform = 'scale(1.1)';
    } else if(passwordInput === ''){
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
    loginBox.classList.remove('animate__animated', 'animate__headShake');
}

function clientPage(){
    window.location.href = 'user.html';
}


// add current year to copyright
const copyrightYear = document.querySelector('.copyright-year');
const date = new Date();
const year = date.getFullYear();
copyrightYear.innerHTML = year;


