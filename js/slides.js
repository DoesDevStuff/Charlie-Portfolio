/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    /* mousewheel: true,
    keyboard: true, */
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