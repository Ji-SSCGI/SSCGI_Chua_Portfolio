
const btnMobileNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnMobileNav.addEventListener('click', function () {
    header.classList.toggle('nav-open');
});
