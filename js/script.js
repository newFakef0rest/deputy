
$(document).ready(function() {


    $('.burger').click(function(event) {
        $('.burger, .header-nav__nav').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    })

    $('.deputy-slider').slick({
        slidesToShow: 4,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                },
            }
        ]
    })

});


// let burger = documenet.querySelector('.burger')
// burger.addEventListener('click', () => {
//     let headerNav = document.querySelector('.header-nav__nav')
//     headerNav.classList.toggle('active')
//     document.body.classList.toggle('overflow-hidden')
// })

