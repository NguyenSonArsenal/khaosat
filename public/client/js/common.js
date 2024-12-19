$(document).ready(function () {
  CommonController.init();

  $('.my-select2__select2').select2({
    allowClear: true
  });
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

var CommonController = {
  init: function () {
    CommonController.collapseMenu();
    CommonController.hanldeClickScrollToTop();
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
  }
};