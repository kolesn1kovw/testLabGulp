const header = document.querySelector('.header');
const burger = document.querySelector('.wrapper-button');
const body = document.body;
const closeBurger = document.querySelector('.close-menu');

const headerLinks = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
  body.classList.add('lock-scroll');
  header.classList.add('show-menu');
});

closeBurger.addEventListener('click', () => {
  body.classList.remove('lock-scroll');
  header.classList.remove('show-menu');
});

headerLinks.forEach((el) => {
  el.addEventListener('click', () => {
    body.classList.remove('lock-scroll');
    header.classList.remove('show-menu');
  });
});
