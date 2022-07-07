const nav = document.querySelector('.main-nav');
const openMenuButton = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__list');
const navLinks = document.querySelectorAll('.main-nav__item-link');

nav.classList.remove('main-nav--noJs');

const closeMenuEscKeydown = (evt) => {
  if ((evt = evt.key === 'Escape')) {
    navList.classList.remove('main-nav__list--isActive');
    openMenuButton.classList.remove('main-nav__toggle--isActive');
  }
};

openMenuButton.addEventListener('click', () => {
  navList.classList.toggle('main-nav__list--isActive');
  openMenuButton.classList.toggle('main-nav__toggle--isActive');
  document.addEventListener('keydown', closeMenuEscKeydown);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('main-nav__list--isActive');
    openMenuButton.classList.remove('main-nav__toggle--isActive');
  });
});
