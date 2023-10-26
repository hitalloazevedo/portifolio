let n = 0

if (document.body.style.width <= 321) {
  n = 1
} else {
  n = 2
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: n,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});