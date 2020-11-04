// window.onload = function () {
//     document.querySelector('.page').classList.remove('page');
// }

// function showPage(){
//     document.querySelector('.page').classList.remove('page');
// }

// const menuIcon = document.querySelector('.hamberger');

const body = document.querySelector('body');

body.addEventListener('click', function(e){
    // const ul = document.querySelector('div.drop-menu ul');
    
    if (e.target.classList.className ='hamberger'){
        const dropMenu = document.querySelector('div.drop-menu');
        // if (dropMenu.classList.contains('hide')){
        //     dropMenu.classList.remove('hide');
        // } else {
        //     dropMenu.classList.add('hide');
        // }
        dropMenu.classList.toggle('reveal');
    };
});

