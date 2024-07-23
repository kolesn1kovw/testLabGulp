import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const mythsSlider = new Swiper(document.querySelector('.reviews__slider'), {
  slidesPerView: 3,
  spaceBetween: 32,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    577: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
