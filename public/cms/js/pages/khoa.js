$(document).ready(function () {
    KhoaController.init();
});

var KhoaController = {
    init: function () {
      $('input[name="makhoa"]').on('input', function() {
        let value = $(this).val().replace(/\s/g, ''); // Loại bỏ khoảng trắng
        if (value.length > 5) {
          value = value.substring(0, 5); // Giới hạn 3 ký tự
        }
        $(this).val(value); // Cập nhật giá trị
      });
    },
};
