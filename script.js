
const loginBtn = document.querySelectorAll('.login-button');
const modal = document.querySelector('.login-container');
const usernameUI = document.querySelector('#username');
const passwordUI = document.querySelector('#password');
const submitBtn = document.querySelector('.submit-btn');
const loginBox = document.querySelector('.login-box');
const spinner = document.querySelector('.spinner');
if (submitBtn){
    submitBtn.addEventListener('click', checkInput);
}
window.addEventListener('click', closeModal);


document.addEventListener('click', check);


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
            loginBox.style.border = '6px solid #62f77b';
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



