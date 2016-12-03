$(".featured-slideshow").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 600,
  cssEase: 'ease',
  appendDots: $(".dots-nav")
});