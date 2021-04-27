/* eslint-disable strict,lines-around-directive,no-undef,no-unused-vars,no-use-before-define */
'use strict';

const burgerMenu = () => {
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
};
const sliderSwiper = () => {
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
};
const checkIsMobile = () => {
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
};
const headerMouseAction = {
  clickOnEmail() {
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
  },
  createPopup() {
    const menuItemPhone = document.querySelector('.menu__item_phone');
    const popupMenu = document.querySelector('.popup');
    const closePopup = document.querySelector('.popup__close');
    const overlay = document.querySelector('.modal_overlay');
    menuItemPhone.addEventListener('mouseover', () => {
      menuItemPhone.style.backgroundColor = 'rgba(100%, 100%, 100%, .5)';
      popupMenu.classList.toggle('open');
      overlay.classList.toggle('active');
    });
    menuItemPhone.addEventListener('mouseout', () => {
      menuItemPhone.style.backgroundColor = 'transparent';
    });
    closePopup.addEventListener('click', () => {
      popupMenu.classList.remove('open');
      overlay.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
      popupMenu.classList.remove('open');
      overlay.classList.remove('active');
    });
  },
};

burgerMenu();
sliderSwiper();
checkIsMobile();
headerMouseAction.clickOnEmail();
headerMouseAction.createPopup();
