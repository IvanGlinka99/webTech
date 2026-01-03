function burgerMenu() {
  const burger = document.querySelector(".header__burger");
  const navbar = document.querySelector(".header__navbar");
  const menu = document.querySelector(".header__menu");
  const body = document.body;

  if (!burger || !navbar || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    menu.classList.toggle("active-menu"); // приховуємо bars
    navbar.classList.toggle("active"); // показуємо меню
    body.classList.toggle("lock"); // блокуємо прокрутку
  });
}

document.addEventListener("DOMContentLoaded", burgerMenu);
;
const accordionRows = document.querySelectorAll(
  ".services__accordion-button-row"
);

accordionRows.forEach((row) => {
  const button = row.querySelector(".services__accordion-button");
  const content = row.querySelector(".services__accordion-hidden");
  const arrow = row.querySelector(".services__accordion-arrow");

  button.addEventListener("click", () => {
    accordionRows.forEach((otherRow) => {
      if (otherRow !== row) {
        otherRow
          .querySelector(".services__accordion-hidden")
          .classList.remove("services__open");

        otherRow
          .querySelector(".services__accordion-arrow")
          .classList.remove("active-arrow");
      }
    });

    content.classList.toggle("services__open");
    arrow.classList.toggle("active-arrow");
  });
});
;
const swiper = new Swiper(".swiper", {
	loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
;
const testimonialsSwiper = new Swiper(".testimonials__swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".testimonials__swiper .swiper-button-next",
    prevEl: ".testimonials__swiper .swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: { slidesPerView: 2, spaceBetween: 10 },
  },
});
;
;














