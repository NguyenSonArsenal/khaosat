$(document).ready(function () {
  DkDungThuController.init();
});

var DkDungThuController = {
  init: function () {
    DkDungThuController.handleMainSlide();
    DkDungThuController.handleInputChildName();
    DkDungThuController.handleInputPhone();
    DkDungThuController.handleInputBirthday();
    DkDungThuController.handleChangeProvince();
    DkDungThuController.handleChangeDistrict();
    DkDungThuController.handleChangePhone();

    $('#province_id').select2();
    $('#district_id').select2();
    $('#ward_id').select2();
  },

  handleChangePhone: function () {

    $('input[name="phone"]').on('blur', function () {
      var phone = $(this).val();
      if (phone.length == 0) {
        return;
      }
      var data = {
        child_name: $('input[name="child_name"]').val(),
        date_of_birth: $('input[name="date_of_birth"]').val(),
        height_child: $('input[name="height_child"]').val(),
        height_mother: $('input[name="height_mother"]').val(),
        height_father: $('input[name="height_father"]').val(),
        province_id: $('select[name="province_id"]').val(),
        district_id: $('select[name="district_id"]').val(),
        ward_id: $('select[name="ward_id"]').val(),
        address: $('input[name="address"]').val(),
        phone: phone,
      };

      $.ajax({
        type: 'POST',
        url: '/ajax-dkdt',
        data: data,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        cache: false,
        dataType: "json",
        success: function (response) {
          console.log(response, '// response')
        },
        error: function (e) {
          console.log('Store dkdt error ...')
        }
      });
    })
  },

  handleChangeProvince: function() {
    $('select[name="province_id"]').on('change',function(){
      var country_id= $(this).val();
      if (!country_id) {
        $('select[name="district_id"]').empty();
        $('select[name="district_id"]').append('<option value="">Quận/huyện*</option>');
        $('select[name="ward_id"]').empty();
        $('select[name="ward_id"]').append('<option value="">Xã/phường*</option>');
      }
      $.ajax({
        url: '/api/district/' + country_id,
        type: "GET",
        dataType: "json",
        success: function(data){
          $('select[name="district_id"]').empty();
          $('select[name="district_id"]').append('<option value="">Quận/huyện*</option>');
          $.each(data,function(key,value){
            $('select[name="district_id"]').append('<option value="'+value.id+'">'+value.name+'</option>');
          });
        }
      });
    });
  },

  handleChangeDistrict: function() {
    $('select[name="district_id"]').on('change',function(){
      var country_id= $(this).val();
      $.ajax({
        url: '/api/ward/' + country_id,
        type: "GET",
        dataType: "json",
        success: function(data){
          $('select[name="ward_id"]').empty();
          $('select[name="ward_id"]').append('<option value="">Xã/phường*</option>');
          $.each(data,function(key,value){
            $('select[name="ward_id"]').append('<option value="'+value.id+'">'+value.name+'</option>');
          });
        }
      });
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
      dots: true
    });
  },

  handleInputChildName: function () {
    $("input[name='child_name']").bind('keyup blur change', function () {
      $("#child_name_warning_submit").text('');
      if ($(this).val().length > 0) {
        $("#child_name_warning_submit").text('');
        $("#child_name_warning").text('');
      } else {
        $("#child_name_warning").text('Vui lòng nhập họ và tên con');
      }
    });
  },
  handleInputPhone: function () {
    // allow only  Number 0 to 9
    $('#phone').bind('keyup blur change', function () {
      const pattern1 = new RegExp("^[0-9]+$");
      if (!pattern1.test($(this).val())) {
        $(this).val($(this).val().slice(0, -1));
      }
      if ($(this).val().length > 11) {
        $(this).val($(this).val().slice(0, -1));
      }
      $('#phone_warning_submit').text('');
      if ($(this).val().length >= 1 && $(this).val().length < 10) {
        $('#phone_warning').text('Xin vui lòng nhập một số điện thoại hợp lệ');
        return
      } else if ($(this).val().length == 10) {
        $('#phone_warning').text('');
        return
      } else if ($(this).val().length == 0) {
        $('#phone_warning').text('Vui lòng nhập vào số điện thoại');
        return
      }
    });
  },

  handleInputBirthday: function () {
    $("#datepicker").datepicker({
      changeYear: true,
      changeMonth: true,
      dateFormat: 'dd-mm-yy',
      timeFormat: "H:m",
      monthNames: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"],
      monthNamesShort: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
      dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      maxDate: 0,
    });
    $('#datepicker').change(function() {
      if (this.value) {
        $('#date_of_birth_warning').text('');
        $('#date_of_birth_submit').text('');
      } else {
        $('#date_of_birth_warning').text('Vui lòng nhập thông tin ngày tháng năm sinh');
        $('#date_of_birth_submit').text('');
      }
    });
  },

  handleInput: function(id) {
    $(id).keypress(function() {
      if (!pattern.test($(this).val())) {
        $(this).val($(this).val().slice(0, -1));
      }
      DkDungThuController.clearTextAfterDot(id)
    });
    $(id).keyup(function() {
      if (!pattern.test($(this).val())) {
        $(this).val($(this).val().slice(0, -1));
      }
      DkDungThuController.clearTextAfterDot(id)
      if (!$(this).val().includes('.')) {
        var v = $(this).val();
        $('.suggest_' + id.substring(1, id.length)).show();
        $('.number_' + id.substring(1, id.length)).text($(this).val())
        // }
      }
      if($(this).val().trim().length == 0 || (id.includes('height') && $(id).val() == 200) || (id.includes('weight') && $(id).val() == 150)) {
        $('.suggest_' + id.substring(1, id.length)).hide()
      }
    });
    $(id).change(function(){
      value = $(this).val();
      value = value.replace(/[^0-9.]/g, '');
      DkDungThuController.clearTextAfterDot(id)
    });
  },

  clearTextAfterDot: function(id) {
    value = $(id).val();
    if (value == '.') {
      $(id).val($(id).val().slice(0, -1));
      return
    }

    if ((id.includes('height') && value > 200) || (id.includes('weight') && value > 150)) {
      $(id).val($(id).val().slice(0, -1));
      return
    }

    value = value.replace(/[^0-9.]/g, '');
    if (value.includes('.')) {
      arr = value.split(".");
      value2 = arr[0] + '.' + arr[1].charAt(0)
      $(id).val(value2)
    }
    DkDungThuController.toggleSuggest(id)
  },

  toggleSuggest: function(id) {
    if($(id).val().trim().length == 0 || $(id).val().includes('.') || (id.includes('height') && $(id).val() == 200) || (id.includes('weight') && $(id).val() == 150)) {
      $('.suggest_' + id.substring(1, id.length)).hide()
    }
  },

  initSuggest: function(name) {
    $('.suggest_' + name).hide();
    $('.suggest_' + name + ' li').click(function () {
      $('.suggest_' + name).hide();
      $('#' + name).val($(this).text())
    });
  },
};
