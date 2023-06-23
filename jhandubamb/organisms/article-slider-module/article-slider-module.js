$(".feature-article-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow:
    '<img class="prev" src="https://dev-fragmatic-builder-node.oslabs.app/public/assets/lt_arrow.svg" alt="prev" />',
  nextArrow:
    '<img class="next" src="https://dev-fragmatic-builder-node.oslabs.app/public/assets/rt_arrow.svg" alt="next" />',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        dots: true,
        arrows: false,
      },
    },
  ],
});
