window.onload = function () {
    document.querySelector('.page').classList.remove('page');
}

// function showPage(){
//     document.querySelector('.page').classList.remove('page');
// }

const menuIcon = document.querySelector('.hamberger');

menuIcon.addEventListener('click', showMenu);

function showMenu(){
    const dropMenu = document.querySelector('div.drop-menu');
    if (dropMenu.style.display == 'none'){
        dropMenu.style.display = 'block';
    } else {
        dropMenu.style.display = 'none';
    }
}