$(document).ready(function () {
  QuestionController.init();
});

$(document).on('click', '.remove-option', function () {
  // Xóa dòng option
  $(this).closest('.option-item').remove();
  // Cập nhật lại số thứ tự các lựa chọn
  updateOptionIndexes();
});

function updateOptionIndexes() {
  $('#options-container .option-item').each(function (index) {
    // Cập nhật lại label và input name/id
    $(this).find('label').text('Lựa chọn ' + (index + 1));
    // $(this).find('input').attr('name', 'options[' + index + ']').attr('id', 'options_' + index);
  });
}

var QuestionController = {
  init: function () {
    QuestionController.addOption();
    QuestionController.delAOption();
  },

  delAOption() {
    $('.remove-option').click(function () {
      $(this).closest('.option-item').remove();
    })
  },

  addOption() {
    $('#add-option').click(function () {
      // Get the number of existing options to calculate the new index
      var index = $('#options-container .option-item').length;

      // Create the HTML for the new option
      var newOption = `
              <div class="form-group row option-item">
                  <label for="fname" class="col-sm-3 text-right control-label col-form-label">Lựa chọn ${index + 1}</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" name="options[]"
                           value=""
                           required
                           placeholder="Nhập nội dung">
                  </div>
                  <button type="button" class="remove-option btn btn-xs btn-danger">Xóa</button>
              </div>
          `;

      // Append the new option to the container
      $('#options-container').append(newOption);
    })
  },
};
