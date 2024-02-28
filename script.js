var swiper = new Swiper(".mySwiper",{
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints:{
        1024:{
            slidesPerView:4,
        }
    }
});