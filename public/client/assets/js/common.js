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

var CommonController = {
  init: function () {
    CommonController.hanldeClickScrollToTop();
    CommonController.handleShowHumbergerIcon();
    CommonController.handleShowTogglePasswordIcon();

    $(".nav_pc .dropdown_item").hover(function () {
      $(this).find('> .dropdown_menu').toggleClass("show_dropdown_menu");
    });
  },

  handleShowTogglePasswordIcon: function () {
    $(".toggle_password").click(function () {
      $(this).toggleClass('show_icon_toggle_password')
      var input = $(this).parents('.box-input').find('input[class="allow_show_password"]');
      if (input.attr("type") === "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    })
  },

  handleShowHumbergerIcon: function () {
    $("#toggle").click(function () {
      $(this).toggleClass('show_icon')
      $('.menu').toggleClass('show_menu')
      $('.dropdown_menu').removeClass('show_dropdown_menu')
    })

    $('.nav_sp .dropdown_item > .item_link > i').click(function () {
      $(this).closest('li.dropdown_item').find('> .dropdown_menu').toggleClass('show_dropdown_menu')
    })
  },

  hanldeClickScrollToTop: function () {
    $('.to-top-btn').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
  }
};
