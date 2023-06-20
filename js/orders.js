$(document).ready(function () {
    $('.nav-links').each(function () {
      const navSlides = $(this).find('.nav-tabs--slider')
      const contentSlides = $(this).find('.tab-content--slider')
  
      contentSlides.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        asNavFor: navSlides
      });
  
      navSlides.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: contentSlides,
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true
      });
    });
  });
  
  
  