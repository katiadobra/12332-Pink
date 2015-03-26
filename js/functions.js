var tgl = document.querySelector('.js-nav-toggle');
var menu = document.querySelector('.page-header');

tgl.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('open');
});