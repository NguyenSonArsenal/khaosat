$(document).ready(function () {
  ProductController.init();
});

var ProductController = {
  init: function () {
    if ($(window).width() >= 1000) {
      ProductController.handleScroll();
      $('#bottle-container').addClass('fixedXX');
    } else {
      $('#bottle-container').removeClass('fixedXX');
    }

    ProductController.handleMainFeedback();
    ProductController.slideChungChi();
    ProductController.handleShowQuestion();
  },

  handleShowQuestion: function() {
    $('.list_question .question_item').click(function () {
      var id = $(this).data('question-id');
      $('.answer').hide();
      $('.answer_' + id).show();
      $('.question_item').css('background-color', 'unset');
      $('.question_item_' + id).css('background-color', '#fbfbfb');
    })
  },

  handleScroll: function () {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop(); // check the visible top of the browser
      var height =  $('#product-wrapper').outerHeight() - 500;
      if (scrollTop > height) {
        $('#bottle-container').removeClass('fixedXX');
        $('#bottle-container').addClass('normal');
      } else {
        $('#bottle-container').removeClass('normal');
        $('#bottle-container').addClass('fixedXX');
      }
    });
  },

  handleMainFeedback: function () {
    $('.section-main-feedback').slick({
      speed: 200,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ],
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#feedback-arrow-left'),
      nextArrow: $('#feedback-arrow-right'),
      dots: false
    });
  },

  slideChungChi: function () {
    $('.section_main_slider_chung_chi').slick({
      speed: 200,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#banner-arrow-left'),
      nextArrow: $('#banner-arrow-right'),
      dots: false,
      lazyLoad: 'ondemand',
    });
  },
};
