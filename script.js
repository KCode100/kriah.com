// window.onload = function () {
//     document.querySelector('.page').classList.remove('page');
// }

// function showPage(){
//     document.querySelector('.page').classList.remove('page');
// }

// const body = document.querySelector('body');


// menuIcon.addEventListener('click', open);
// menuIcon.addEventListener('clickout', close);

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

// function close(){
//     const dropMenu = document.querySelector('div.drop-menu');
//     dropMenu.style.height = '0px';

// }

