const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

const darkMode = document.getElementById('darkmode');
const body = document.body;

darkMode.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});
