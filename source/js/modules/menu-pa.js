(() => {
  const swiper = new Swiper('.menu-pa__container', {
    freeMode: true,
    slidesPerView: 'auto',
    breakpoints: {
      // when window width is >= 640px
      1279: {
        freeMode: true,
        slidesPerView: 'auto',
        allowTouchMove: false
      }
    }
  })
})();
