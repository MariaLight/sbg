const swiper = new Swiper('.feedback-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,

    pagination: {
        el: '.feedback .swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.feedback .swiper-button-next',
        prevEl: '.feedback .swiper-button-prev',
    },

});