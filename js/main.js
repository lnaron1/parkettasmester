const menuBtn = document.querySelector('.collapse');
const closebtn = document.querySelector('.closebutton');
const sideBar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});

closebtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});