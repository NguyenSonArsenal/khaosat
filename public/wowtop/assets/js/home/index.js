$(document).ready(function () {
  HomeController.init();
});

var HomeController = {
  init: function () {
    // HomeController.handleMainSlide();
    HomeController.handleYoutube();
    HomeController.handleNewspaperSlide();
    HomeController.handleFeelSlide();
    HomeController.toggleInputSearch();
    HomeController.handleMainFeedback();
  },

  handleYoutube: function() {
    ( function() {

      var youtube = document.querySelectorAll( ".youtube" );

      for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/y9vlAFDEr7I" +"/sddefault.jpg";  // https://www.youtube.com/embed/y9vlAFDEr7I?si=zDi8B9unDuWxPVnw

        var image = new Image();
        image.src = source;
        image.alt = "Alt image";
        image.addEventListener( "load", function() {
          youtube[ i ].appendChild( image );
        }( i ) );

        youtube[i].addEventListener( "click", function() {

          var iframe = document.createElement( "iframe" );

          iframe.setAttribute( "frameborder", "0" );
          iframe.setAttribute( "allowfullscreen", "" );
          iframe.setAttribute( "allow", "autoplay" );
          iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ "y9vlAFDEr7I" +"?rel=0&showinfo=0&autoplay=1" );

          this.innerHTML = "";
          this.appendChild( iframe );
        } );
      };
    } )();
  },

  toggleInputSearch: function () {
    $('.header-search__form__delete').click(function () {
      var e = $(".header-search");
      if (e.hasClass('is-opened')) {
        e.removeClass('is-opened')
      }
    })
  },

  handleFeelSlide: function () {
    $('.slide-cam-nhan').slick({
      speed: 200,
      autoplay: true,
      infinite: true,
      slidesToShow: 2,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ],
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#customer-fell-arrow-left'),
      nextArrow: $('#customer-fell-arrow-right'),
      dots: true
    });
  },

  handleMainSlide: function () {
    $('.section-main-slider').slick({
      speed: 200,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#banner-arrow-left'),
      nextArrow: $('#banner-arrow-right'),
      lazyLoad: 'ondemand',
      dots: true
    });
  },

  handleMainFeedback: function () {
    $('.section-main-feedback').slick({
      speed: 200,
      lazyLoad: 'ondemand',
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

  handleNewspaperSlide: function () {
    $('.slide-newspaper').slick({
      speed: 200,
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ],
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#newspaper-arrow-left'),
      nextArrow: $('#newspaper-arrow-right'),
      dots: false
    });
  },
};
