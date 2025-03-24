document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { slidesPerView: 3 },  //Desktop
            480: { slidesPerView: 2 },  //Tablet
            320: { slidesPerView: 1 },  //Mobile
        }
    });
});