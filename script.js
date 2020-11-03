// window.onload = function () {
//     document.querySelector('.page').classList.remove('page');
// }

// function showPage(){
//     document.querySelector('.page').classList.remove('page');
// }

// const menuIcon = document.querySelector('.hamberger');

const body = document.querySelector('body');

body.addEventListener('click', function(e){
    const dropMenu = document.querySelector('div.drop-menu');

    if (e.target.classList.contains('menu')){
        if (dropMenu.style.display == 'none'){
            dropMenu.style.display = 'block';
        } else {
            dropMenu.style.display = 'none';
        }

        // console.log('clicked!');
        
    };
});

