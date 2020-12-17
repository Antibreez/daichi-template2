(() => {
  $(window).load(function () {
    const $slider = $('.subscriptions__slider');

    if (!$slider) {
      return;
    }

    console.log($slider);
    const swiper = new Swiper('.subscriptions__slider', {
      mousewheel: true,
      slidesPerView: 'auto',
      freeMode: true,
      watchOverflow: true,
      spaceBetween: 5,
      navigation: {
        nextEl: '.subscriptions__nav-next',
        prevEl: '.subscriptions__nav-prev',
      },

      breakpoints: {
        768: {
          spaceBetween: 15,
        },
        1280: {
          spaceBetween: 15,
          slidesPerView: 2,
          freeMode: false,
        }
      }
    });
  })
})();
