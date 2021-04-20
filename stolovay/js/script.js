"use strict"

/* SLIDER */
const swiper = new Swiper('.swiper-container', {
    // Optional parameters

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
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
// check device
if (isMobile.any()) {
    document.body.classList.add('_touch');
}else{
    document.body.classList.add('_pc')
}

/* BURGER MENU */
    const iconMenu = document.querySelector('.menu__icon');
    if (iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    };


    const email = document.querySelector('.menu__link_email');
    const headerEmailClick = document.querySelector('.header__email_click');
    email.addEventListener('click', () => {
        email.style.backgroundColor = "rgb(100%, 100%, 100%, .5)";
        headerEmailClick.style.display = "block";
    })
    headerEmailClick.addEventListener('click', () => {
        headerEmailClick.style.display = "none";
    })
