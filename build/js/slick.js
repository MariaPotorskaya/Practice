$(document).ready(function() {
    $(".slick__slider").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }
        ]
    });
    // $('.slick__videos').slick({
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 1,
    //     responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 2
    //     }
    //     }
    // ]
    // });
});
