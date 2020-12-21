(() => {
  $(window).load(function () {
    const $slider = $('.devices__slider');

    if (!$slider) {
      return;
    }

    console.log($slider);
    const swiper = new Swiper('.devices__slider', {
      // mousewheel: true,
      // slidesPerView: 1,
      // slidesPerColumn: 3,
      // //slidesPerColumnFill: 'row',
      // freeMode: false,
      // watchOverflow: true,
      // spaceBetween: 15,
      // navigation: {
      //   nextEl: '.devices__nav-next',
      //   prevEl: '.devices__nav-prev',
      // },



      mousewheel: true,
      slidesPerView: 'auto',
      slidesPerColumn: 1,
      freeMode: true,
      watchOverflow: true,
      spaceBetween: 5,
      navigation: {
        nextEl: '.devices__nav-next',
        prevEl: '.devices__nav-prev',
      },

      breakpoints: {
        768: {
          spaceBetween: 15,
        },
        1280: {
          spaceBetween: 15,
          slidesPerView: 1,
          slidesPerColumn: 3,
          freeMode: false,
        }
      }
    });
  })
})();
