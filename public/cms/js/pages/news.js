$(document).ready(function () {
  NewsController.init();
});

const MAX_LENGTH_META_TITLE = $("input[name='max_length_meta_title']").val();
const MAX_LENGTH_META_DESCRIPTION = $("input[name='max_length_meta_description']").val();
const MAX_FOCUS_KEYWORD = $("input[name='max_focus_keyword']").val();

var NewsController = {
  init: function () {
    this.displayThumbnailAvatar();
    this.selectKeywords();
    this.countCharacterTitle();
    this.countCharacterMetaTitle();
    this.countCharacterPermalink();
    this.countCharacterMetaDescription();
    this.initCountCharacterEditScreen();
  },
  initCountCharacterEditScreen() {
    $('#count_character_title').text($('#title').val().length)

    $('#count_character_permalink').text($('#permalink ').val().length)
    $('#permalink').val().length > MAX_LENGTH_META_TITLE ?
      NewsController.showWarningPermalink() :
      NewsController.hideWarningPermalink();

    $('#count_character_meta_title').text($('#meta_title').val().length)
    $('#meta_title').val().length > MAX_LENGTH_META_TITLE ?
      NewsController.showWarningMetaTitle() :
      NewsController.hideWarningMetaTitle();

    $('#count_character_meta_description').text($('#meta_description').val().length)
  },

  displayThumbnailAvatar() {
    $('#product-image').change(function () {
      var src = URL.createObjectURL(this.files[0])
      document.getElementById('product-image-preview').src = src
    })
  },

  selectKeywords() {
    $('.select_key_words').select2({
      tags: true,
      maximumSelectionLength: MAX_FOCUS_KEYWORD
    })
  },

  countCharacterTitle() {
    $("#title").keyup(function() {
      var title = $(this).val();
      var lengthTitle = title.length
      $('#count_character_title').text(lengthTitle)
      $('#count_character_meta_title').text(lengthTitle)
      $('#count_character_permalink').text(lengthTitle)
      // $('#count_character_meta_description').text(lengthTitle)
      $("#meta_title").val(title.trim());
      $("#permalink").val(slug(title.trim()));
      if (lengthTitle > MAX_LENGTH_META_TITLE) {
        NewsController.showWarningMetaTitle()
        NewsController.showWarningPermalink()
      } else {
        NewsController.hideWarningMetaTitle()
        NewsController.hideWarningPermalink()
      }
    });
  },

  countCharacterMetaTitle() {
    $("#meta_title").keyup(function() {
      var text = $(this).val();
      var lengthTitle = text.length
      $('#count_character_meta_title').text(lengthTitle)
      lengthTitle > MAX_LENGTH_META_TITLE
        ? NewsController.showWarningMetaTitle()
        : NewsController.hideWarningMetaTitle();
    })
  },

  countCharacterPermalink() {
    $("#permalink").keyup(function() {
      var text = $(this).val();
      var lengthTitle = text.length
      $('#count_character_permalink').text(lengthTitle)
      $(this).val().trim().length > MAX_LENGTH_META_TITLE
        ? NewsController.showWarningPermalink()
        : NewsController.hideWarningPermalink();
    })
  },

  countCharacterMetaDescription() {
    $("#meta_description").keyup(function() {
      var text = $(this).val();
      var lengthTitle = text.length
      $('#count_character_meta_description').text(lengthTitle)
      lengthTitle > MAX_LENGTH_META_DESCRIPTION
        ? NewsController.showWarningMetaDescription()
        : NewsController.hideWarningMetaDescription();
    })
  },

  showWarningMetaTitle() {
    $('#count_character_meta_title').closest('.form-group').find('input').addClass('is-invalid')
    $('#warning_count_character_meta_title').addClass('text-danger')
  },

  hideWarningMetaTitle() {
    $('#count_character_meta_title').closest('.form-group').find('input').removeClass('is-invalid')
    $('#warning_count_character_meta_title').removeClass('text-danger')
  },

  showWarningMetaDescription() {
    $('#count_character_meta_description').closest('.form-group').find('textarea').addClass('is-invalid')
    $('#warning_count_character_meta_description').addClass('text-danger')
  },

  hideWarningMetaDescription() {
    $('#count_character_meta_description').closest('.form-group').find('textarea').removeClass('is-invalid')
    $('#warning_count_character_meta_description').removeClass('text-danger')
  },

  showWarningPermalink() {
    $('#count_character_permalink').closest('.form-group').find('input').addClass('is-invalid')
    $('#warning_count_character_permalink').addClass('text-danger')
  },

  hideWarningPermalink() {
    $('#count_character_permalink').closest('.form-group').find('input').removeClass('is-invalid')
    $('#warning_count_character_permalink').removeClass('text-danger')
  }
};
