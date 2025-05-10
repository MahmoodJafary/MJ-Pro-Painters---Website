var swiper = new Swiper(".hero-section-slider", {
    spaceBetween: 30,
    effect: "fade",
    lazyLoading: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
  });