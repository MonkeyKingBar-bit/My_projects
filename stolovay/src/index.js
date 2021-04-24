/* eslint-disable strict,lines-around-directive,no-undef,no-unused-vars */
'use strict';

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
/* SLIDER */
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/* MOBILE */
const isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return (
      isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows());
  },
};
// check device
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}
/* BURGER MENU */

/* HEADER: CLICK ON EMAIL */
const email = document.querySelector('.menu__link_email');
const menuItemEmail = document.querySelector('.menu__item_email');
const headerEmailClick = document.querySelector('.header__email_click');

email.addEventListener('click', () => {
  menuItemEmail.style.backgroundColor = 'rgb(100%, 100%, 100%, .5)';
  email.style.marginBottom = '27px';
  headerEmailClick.style.display = 'block';
});
headerEmailClick.addEventListener('click', () => {
  headerEmailClick.style.display = 'none';
  email.style.marginBottom = '0';
  menuItemEmail.style.backgroundColor = 'transparent';
});
/* HEADER: MOUSEOVER PHONE */
const phone = document.querySelector('.menu__link_phone');
