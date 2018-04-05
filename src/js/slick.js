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
});
