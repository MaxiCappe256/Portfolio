const hamburguer = document.querySelector('.navbar__hambur');
const menu = document.querySelector('.navbar__links');
const links = document.querySelectorAll('.navbar__link');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !hamburguer.contains(e.target)) {
        menu.classList.remove('active');
    }
});