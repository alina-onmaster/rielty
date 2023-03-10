/*Бургер-меню start*/
const body = document.querySelector('body');
let openMenuBtn = document.querySelector(".burger");
let closeMenuBtn = document.querySelector(".main-nav__close-btn");
let menu = document.querySelector(".main-nav");
let menuList = document.querySelectorAll(".site-nav__item > a");
let windowWidth = document.documentElement.clientWidth;

openMenuBtn.onclick = function () {
  if (windowWidth < 992) {
    menu.classList.add("main-nav--opened");
    body.classList.add("lock");
  };
};

closeMenuBtn.onclick = function () {
  if (windowWidth < 992) {
    menu.classList.remove("main-nav--opened");
    body.classList.remove("lock");
  };
};

for (const menuItem of menuList) {
  menuItem.addEventListener('click', function(event) {
    if(window.innerWidth < 992 ) {
      menu.classList.remove("main-nav--opened");
      body.classList.remove("lock");
    }
  })
};



/*Бургер-меню end*/

/*Слайдер Каталог жилых комплексов start*/

(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:992px)' );

  // keep track of swiper instances to destroy later
  let complexesSlider;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
      if ( complexesSlider !== undefined ) complexesSlider.destroy( true, true );

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    complexesSlider = new Swiper ('.complexes__swiper-container', {

      preloadImages: false,
      lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,


      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.08,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1.08,
          spaceBetween: 30,
        },
      }
    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */

/*Слайдер Каталог жилых комплексов end*/

/*Каталог жилых комплексов одинаковая высота элементов start*/

window.onload = function() {
  setTimeout(function() {
    var mainDivs = document.getElementsByClassName("complexes__item");  //Получаем все элементы с классом complexes__item
    var maxHeight = 0;
    for (var i = 0; i < mainDivs.length; ++i) {
      if (maxHeight < mainDivs[i].clientHeight) { //Находим максимальную высоту
        maxHeight = mainDivs[i].clientHeight;
      }
    }
    for (var i = 0; i < mainDivs.length; ++i) {
      mainDivs[i].style.height = maxHeight + "px"; //Устанавливаем всем элементам максимальную высоту
    }
  }, 1000);
}

/*Каталог жилых комплексов одинаковая высота элементов end*/

/*Слайдер Отзывы start*/
new Swiper('.reviews__swiper-container',{
  preloadImages: false,
  navigation: {
    nextEl: '.reviews__slider-btn--right',
    prevEl: '.reviews__slider-btn--left'
  },
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.08,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1.25,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },

    2000: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }

});
/*Слайдер Отзывы end*/

// Политика конфиденциальных данных
$(document).ready(function () {
  $('.privacy-policy__chapter-title').click(function () {
    $(this).toggleClass('privacy-policy__chapter-title--in').next().slideToggle();
    $('.privacy-policy__chapter-title').not(this).removeClass('privacy-policy__chapter-title--in').next().slideUp();
  });
});

