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