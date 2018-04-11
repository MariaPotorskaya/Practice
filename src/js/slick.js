$(document).ready(function() {
  $(".slick-slider-members").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});

$(".slick-slider-video").slick({
  dots: true,
  centerMode: true,
  centerPadding: "650px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1850,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "550px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1640,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "400px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1340,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1130,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 935,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "150px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "150px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 460,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1
      }
    },
  ]
});
