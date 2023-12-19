var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,

    navigation: { // Добавленные опции навигации
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});