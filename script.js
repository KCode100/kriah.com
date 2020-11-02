window.onload = function () {
    document.querySelector('.page').classList.remove('page');
}

// function showPage(){
//     document.querySelector('.page').classList.remove('page');
// }

const menuIcon = document.querySelector('.hamberger');

menuIcon.addEventListener('click', showMenu);

function showMenu(){
    document.querySelector('div.drop-menu').style.display = 'block';
}