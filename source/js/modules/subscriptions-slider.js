(() => {
  $(window).load(function () {
    const $slider = $('.subscriptions__slider');

    if (!$slider) {
      return;
    }

    const swiper = new Swiper($slider, {
      slidesPerView: 'auto',
      freeMode: true,
      watchOverflow: true,
      spaceBetween: 15,
      navigation: {
        nextEl: '.subscriptions__nav-next',
        prevEl: '.subscriptions__nav-prev',
      },
      mousewheel: true,

      // freeMode: false,
      // slidesPerView: 2,
      // spaceBetween: 15,
      // watchOverflow: true,
      // mousewheel: true,
      // navigation: {
      //   nextEl: '.subscriptions__nav-next',
      //   prevEl: '.subscriptions__nav-prev',
      // },

      breakpoints: {
        1280: {
          slidesPerView: 2,
          freeMode: false,
          spaceBetween: 15,
          navigation: {
            nextEl: '.subscriptions__nav-next',
            prevEl: '.subscriptions__nav-prev',
          },
          mousewheel: true,
        }
      }
    });
  })
})();
