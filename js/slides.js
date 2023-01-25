/*==================== SWIPER CONFIGURATION  ====================*/
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1
      }
    }
  });
  

  /* MODAL STUFF NOT USED
  / ==================== SERVICES MODAL ==================== /
const modalViews = document.querySelectorAll(".services__modal"),
modalBtns = document.querySelectorAll(".services__button"),
modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
modalBtn.addEventListener("click", () => {
  modal(i);
});
});

modalCloses.forEach((modalClose) => {
modalClose.addEventListener("click", () => {
  modalViews.forEach((modalView) => {
    modalView.classList.remove("active-modal");
  });
});
});
*/