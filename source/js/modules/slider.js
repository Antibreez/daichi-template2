(() => {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      900: {
        slidesPerView: 1,
        freeMode: false,
      }
    }
  });
})();
