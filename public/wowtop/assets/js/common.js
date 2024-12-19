$(document).ready(function () {
  CommonController.init();
});

window.onscroll = function() {
  scrollFunction()
};
// When the user scrolls down 20px from the top of the document, show the button to-top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('.to-top-btn').show();
  } else {
    $('.to-top-btn').hide();
  }
}
// End handle toggle btn to-top


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if(lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

var CommonController = {
  init: function () {
    CommonController.collapseMenu();
    CommonController.hanldeClickScrollToTop();
    CommonController.changeLanguage();
    CommonController.changeLanguage2();
  },

  collapseMenu: function () {
    $("#toggle-navbar").click(function(e){
      e.preventDefault()
      const element = $("#nav-items");
      if (element.hasClass("block")) {
        element.removeClass("block");
        element.addClass("hidden");
      } else {
        element.addClass("block");
        element.removeClass("hidden");
      }
    });
  },

  hanldeClickScrollToTop: function () {
    $('.to-top-btn').click(function (speed) {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
  },

  changeLanguage: function (lang) {
    $('.multi_lang').click(function () {
      var lang = $(this).data("text");
      let langOrigin = $("input[name='my_language']").val();

      if (lang == langOrigin) {
        return;
      }

      var url = $('input[name="url-change-language"]').val();
      var csrf = $('meta[name="csrf-token"]').attr('content');

      let data = {
        'lang': lang
      };

      // showLoading();

      $.ajax({
        type: 'POST',
        url: url,
        headers: {'X-CSRF-TOKEN': csrf},
        data: data,
        cache: false,
        success: function (response) {
          if (response.status == 200) {
            console.log('Change language successfully ... ')
          } else {
            console.log('Change language error ... ')
          }
          // hideLoading();
          location.reload();
        },
        error: function (e) {
          console.log('Change language error ... ')
          // hideLoading();
        }
      });
    })
  },
  // change language with library: stichoza/google-translate-php
  changeLanguage2: function() {
    var url = $('#changeLang').val();
    $(".multi_lang").click(function(){
      var lang = $(this).data("text");
      window.location.href = url + "?locale="+ lang;
    });
  },
};
