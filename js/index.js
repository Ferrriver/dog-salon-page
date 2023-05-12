const menu = document.querySelector("#menu");
const toggleOpen = document.querySelector("#toggle-open");
const toggleClose = document.querySelector("#toggle-close");
const logo = document.querySelector("#logo");


toggleOpen.addEventListener('click', toggleMenu);
toggleClose.addEventListener('click', toggleMenu);

function toggleMenu () {
    menu.classList.toggle('show-menu');

    if(menu.classList.contains('show-menu')) {
        toggleOpen.style.display = 'none';
        logo.style.display = 'none';
        toggleClose.style.display = 'flex';
    } else {
        toggleOpen.style.display = 'flex';
        logo.style.display = 'flex';
        toggleClose.style.display = 'none';
    }
}