$(document).ready(function () {
  ProductController.init();
});

var ProductController = {
  init: function () {
    $('#image_manager').change(function () {
      var src = URL.createObjectURL(this.files[0])
      document.getElementById('product-image-preview').src = src
    })
  },
};
