$(document).ready(function () {
  HomeController.init();
});

var HomeController = {
  init: function () {
    HomeController.sliderBenhHoHap();
    HomeController.handleMainSlide();
    HomeController.handleShareSlide();
    HomeController.handlePoliceSlide();
    HomeController.handleProductSlide();
    HomeController.handleHistorySlide();
  },

  sliderBenhHoHap: function () {
    $('.respiratory-slide').slick({
      speed: 300,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevArrow: $('#ho-hap-arrow-left'),
      nextArrow: $('#ho-hap-arrow-right'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  },

  handleMainSlide: function () {
    $('.section-main-slider').slick({
      speed: 200,
      autoplay:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      dots: true
    });
  },

  handleShareSlide: function () {
    $('.share-slide').slick({
      speed: 300,
      autoplay:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('#shared-corner-arrow-left'),
      nextArrow: $('#shared-corner-arrow-right'),
      dots: true
    });
  },

  handlePoliceSlide: function () {
    $('.polite-slide').slick({
      speed: 300,
      autoplay:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      dots: true
    });
  },

  handleProductSlide: function () {
    $('.product-slide').slick({
      speed: 300,
      autoplay:false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      dots: true,
      prevArrow: $('#product-slide-arrow-left'),
      nextArrow: $('#product-slide-arrow-right'),
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  },
  handleHistorySlide: function () {
    $('.history-slide').slick({
      speed: 300,
      autoplay:false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      prevArrow: $('#history-slide-arrow-left'),
      nextArrow: $('#history-slide-arrow-right'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }
};