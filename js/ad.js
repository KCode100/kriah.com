const teachersBtn = document.querySelector('.teachers-btn');
const parentsBtn = document.querySelector('.parents-btn');
const teachersForm = document.getElementById('teachers-form');
const parentsForm = document.getElementById('parents-form');
const adContainer = document.querySelector('.ad-content');

parentsBtn.addEventListener('click', showParentsForm);
teachersBtn.addEventListener('click', showTeachersForm);

function showParentsForm(){
    adContainer.style.display = 'none';
    parentsForm.style.display = 'block';
    console.log('well done');
}
function showTeachersForm(){
    adContainer.style.display = 'none';
    teachersForm.style.display = 'block';
    console.log('well done');
}