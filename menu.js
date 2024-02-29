
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let links = document.querySelectorAll('a');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        if (!link.classList.contains('img-port')) {
            event.preventDefault();
        } else {
            return;
        }

        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

