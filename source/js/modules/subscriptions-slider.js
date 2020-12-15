(() => {
  $(window).load(function () {
    const swiper = new Swiper('.subscriptions__slider', {
      slidesPerView: 2,
      spaceBetween: 15,
      watchOverflow: true,
      mousewheel: true,
      navigation: {
        nextEl: '.subscriptions__nav-next',
        prevEl: '.subscriptions__nav-prev',
      },
      // breakpoints: {

      //   1280: {
      //     freeMode: true,
      //     slidesPerView: 'auto',
      //     allowTouchMove: false
      //   }
      // }
    });
  })
})();
