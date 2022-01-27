const close = document.querySelector('.menu__burger');
const menuWrapp = document.querySelector('.menu__wrapp');


close.addEventListener('click', e => {
    document.body.classList.toggle('lock');
    menuWrapp.classList.toggle('active');
    close.classList.toggle('active');
})

