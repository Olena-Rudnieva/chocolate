// $(function(){
//     $('.products-slider-wrap').slick({
//         arrows: false,
//         dots: true,
    
//     });
// });

$('.products-slider-wrap').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
   
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});