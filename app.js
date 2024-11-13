"use strict";

const headerTitle = document.querySelector(".header__title");
const mobileMenuBtn = document.querySelector(".mobile-menu-icon");
const menu = document.querySelector(".menu");
const themeBtn = document.querySelector(".theme-btn");

// Display & Hide mobile menu
mobileMenuBtn.addEventListener("click", e => {
  console.log("click on button");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    mobileMenuBtn.querySelector(".mobile-menu-icon--close").style.display = "none";
    mobileMenuBtn.querySelector(".mobile-menu-icon--open").style.display = "block";
  } else {
    mobileMenuBtn.querySelector(".mobile-menu-icon--close").style.display = "block";
    mobileMenuBtn.querySelector(".mobile-menu-icon--open").style.display = "none";
  }
});

// switch theme
themeBtn.addEventListener("click", e => {
  themeBtn.classList.toggle("theme--dark");
});

// Typewriter Effect
const typewriter = new Typewriter(headerTitle, {
  loop: true,
});

typewriter.typeString("Create a new generation website ").pauseFor(500).typeString('<strong style="color: var(--primary-color)">for your business</strong>').start();

// Animaion On Scroll Effect (AOS lib)
AOS.init();

// Swiper ( comments slider )
const commentsSlider = new Swiper(".comments-slider", {
  loop: true,
  grabCursor: true,

  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      // effect : 'slide'
    },

    992: {
      slidesPerView: 3,
    },
  },
});

// Swiper ( companies slider )

const companiesSlider = new Swiper(".comanies-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
