$(document).ready(function () {
  CongThucController.init();
});

const exercise = {1: "Thường xuyên", 2: "Thỉnh thoảng", 3: "Không bao giờ"};
const product = {1: "Sữa tăng chiều cao", 2: "TPCN", 3: "Khác", 4: "Không sử dụng sản phẩm nào"};
const pattern = new RegExp("^[0-9.]+$");

var CongThucController = {
  init: function () {
    // allow only  Alphabets A-Z a-z and space
    // $('#parent_name').bind('keyup blur',function(){
    //   var node = $(this);
    //   node.val(node.val().replace(patternViet,'') ); }   // (/[^a-z]/g,''
    // );
    // $('#child_name').bind('keyup blur',function(){
    //   var node = $(this);
    //   node.val(node.val().replace(patternViet,'') ); }   // (/[^a-z]/g,''
    // );
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

    CongThucController.submitForm();
    CongThucController.handleInput("#height");
    CongThucController.handleInput("#weight");

    CongThucController.initSuggest("height");
    CongThucController.initSuggest("weight");

    $("input[name='parent_name']").bind('keyup blur change', function () {
      $("#parent_name_warning_submit").text('');
      if ($(this).val().length > 0) {
        $("#parent_name_warning_submit").text('');
        $("#parent_name_warning").text('');
      } else {
        $("#parent_name_warning").text('Vui lòng nhập họ và tên phụ huynh');
      }
    });

    $("input[name='child_name']").bind('keyup blur change', function () {
      $("#child_name_warning_submit").text('');
      if ($(this).val().length > 0) {
        $("#child_name_warning_submit").text('');
        $("#child_name_warning").text('');
      } else {
        $("#child_name_warning").text('Vui lòng nhập họ và tên con');
      }
    });

    $("input[name='height']").bind('keyup blur change', function () {
      $('#height_warning_submit').text('')
      var val = parseInt($(this).val());
      if (val < 50) {
        $('#height_warning').text('Chiều cao phải trong khoảng 50-200cm');
        return
      } else if (!$(this).val()) {
        $('#height_warning').text('Vui lòng nhập chiều cao của con');
        return
      } else {
        $('#height_warning').text('');
      }
    });

    $("input[name='weight']").bind('keyup blur change', function () {
      $('#weight_warning_submit').text('')
      var val = parseInt($(this).val());
      if (val < 1) {
        $('#weight_warning').text('Cân nặng phải trong khoảng 1 - 150kg');
        return
      } else if (!$(this).val()) {
        $('#weight_warning').text('Vui lòng nhập cân nặng của con');
        return
      } else {
        $('#weight_warning').text('');
      }
    });

    $('select[name=gender]').change(function() {
      if (this.value) {
        $('#gender_warning').text('');
        $('#gender_warning_submit').text('');
      } else {
        $('#gender_warning').text('Vui lòng chọn giới tính của con của con');
      }
    });

    $('select[name=time_to_exercise]').change(function() {
      if (this.value) {
        $('#time_to_exercise_submit').text('');
        $('#time_to_exercise_submit_warning').text('');
      } else {
        $('#time_to_exercise_submit_warning').text('Vui lòng chọn tần xuất vận động của con');
      }
    });

    $("#products_using").change(function () {
      if($(this).val().length) {
        $('#warning_products_using').text("")
        $('#products_using_submit').text("")
      }
      else {
        $('#warning_products_using').text("Vui lòng chọn sản phẩm sử dụng")
      }
    });

    $('#products_using').select2({
      multiple: true,
      placeholder: "Hiện tại con đang sử dụng các sản phẩm tăng chiều cao nào *",
      allowClear: true,
      closeOnSelect: false
    });

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

    $('#timepicker').timepicker({
      use24hours: true,
      timeFormat: 'HH:mm',
      dynamic: false,
      dropdown: true,
      scrollbar: true,
      interval: 30,
      startTime: '20:00',
      change: function(time) {
        console.log(time, '//time')
        if (time) {
          $('#time_sleep_warning').text('');
          $('#time_sleep_submit').text('');
        } else {
          $('#time_sleep_warning').text('Vui lòng nhập thông tin thời gian con ngủ');
          $('#time_sleep_submit').text('');
        }
      }
    });
  },

  initSuggest: function(name) {
    $('.suggest_' + name).hide();
    $('.suggest_' + name + ' li').click(function () {
      $('.suggest_' + name).hide();
      $('#' + name).val($(this).text())
    });
  },

  handleInput: function(id) {
    $(id).keypress(function() {
      if (!pattern.test($(this).val())) {
        $(this).val($(this).val().slice(0, -1));
      }
      CongThucController.clearTextAfterDot(id)
    });
    $(id).keyup(function() {
      if (!pattern.test($(this).val())) {
        $(this).val($(this).val().slice(0, -1));
      }
      CongThucController.clearTextAfterDot(id)
      if (!$(this).val().includes('.')) {
        console.log($(this).val(), id, '//$(this).val()')
        var v = $(this).val();
        // if ((id == "#height" && v >= 50 && v <= 200) || (id = "#weight" && v>1 && v<= 150)) {
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
      CongThucController.clearTextAfterDot(id)
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
    CongThucController.toggleSuggest(id)
  },

  toggleSuggest: function(id) {
    if($(id).val().trim().length == 0 || $(id).val().includes('.') || (id.includes('height') && $(id).val() == 200) || (id.includes('weight') && $(id).val() == 150)) {
      $('.suggest_' + id.substring(1, id.length)).hide()
    }
  },

  nowX: function () {
    var d = new Date,
      dformat = [d.getDate(),
            d.getMonth() + 1,
          d.getFullYear()].join('/') + ' ' +
        [d.getHours(),
          d.getMinutes(),
          d.getSeconds()].join(':');

    return dformat;
  },

  submitForm: function () {
    return;
    $('#submit').click(function () {
      var csrf = $('meta[name="csrf-token"]').attr('content');
      var url = $('input[name="api_du_doan_chieu_cao"]').val();
      var height = $('input[name="height"]').val();
      var weight = $('input[name="weight"]').val();
      var date_of_birth = $('input[name="date_of_birth"]').val();
      var gender = $('input[name="gender"]:checked').val();
      var phone = $('input[name="phone"]').val();
      var parent_name = $('input[name="parent_name"]').val();
      var child_name = $('input[name="child_name"]').val();

      let errorValidate = false;

      if (!parent_name) {
        $('#warning_parent_name').text('Vui lòng nhập họ tên phụ huynh');
        errorValidate = true;
      } else if (parent_name.length > 255) {
        $('#warning_parent_name').text('Vui lòng nhập họ tên phụ huynh nhỏ hơn 255 kí tự');
        errorValidate = true;
      } else {
        $('#warning_parent_name').text('');
      }

      if (!child_name) {
        $('#child_name_warning').text('Vui lòng nhập họ tên con');
        errorValidate = true;
      } else if (child_name.length > 255) {
        $('#child_name_warning').text('Vui lòng nhập họ tên con nhỏ hơn 255 kí tự');
        errorValidate = true;
      } else {
        $('#child_name_warning').text('');
      }

      const pattern = /^0\d{9,10}$/;
      if (!phone) {
        $('#phone_warning').text('Vui lòng nhập số điện thoại');
        errorValidate = true;
      } else if (!pattern.test(phone)) {
        $('#phone_warning').text('Vui lòng nhập số điện thoại 10-11 chữ số, bắt đầu với chữ số 0');
        errorValidate = true;
      } else {
        $('#phone_warning').text('');
      }
      if (!date_of_birth) {
        $('#warning_date').text('Vui lòng nhập ngày sinh của con');
        errorValidate = true;
      } else if (CongThucController.getOld(date_of_birth) > 20 || CongThucController.getOld(date_of_birth) < 0) {
        $('#warning_date').text('Vui lòng nhập ngày sinh của con từ 1 - 20 tuổi');
        errorValidate = true;
      } else {
        $('#warning_date').text('');
      }
      if (!gender) {
        $('#warning_gender').text('Vui lòng chọn giới tính của con');
        errorValidate = true;
      } else { // add condition date with today, < 20 nam
        $('#warning_gender').text('');
      }
      if (!height) {
        $('#warning_height').text('Vui lòng nhập chiều cao của con');
        errorValidate = true;
      } else if (height < 50 || height > 200) {
        $('#warning_height').text('Vui lòng nhập chiều cao của con trong khoảng 50-200 cm');
        errorValidate = true;
      } else {
        $('#warning_height').text('');
      }
      if (!weight) {
        $('#warning_weight').text('Vui lòng nhập cân nặng của con');
        errorValidate = true;
      } else if (weight < 1 || weight > 150) {
        $('#warning_weight').text('Vui lòng nhập chiều cao của con trong khoảng 1-150 kg');
        errorValidate = true;
      } else {
        $('#warning_weight').text('');
      }

      if (errorValidate) {
        // return;
      }

      var checkboxResult = "";
      $(':checkbox:checked').each(function(i){
        checkboxResult += product[$(this).val()] + ', ';
      });

      // Fill data to table
      $('#child_name').text($('input[name="child_name"]').val());

      $('#now').text(CongThucController.nowX());
      $('#gender').text(gender == 1 ? "Nam" : "Nữ");
      $('#height_result').text(height);
      $('#weight_result').text($('input[name="weight"]').val());
      $('#time_sleep_result').text($('input[name="time_sleep"]').val());
      if (date_of_birth) {
        $('#birthday').text(date_of_birth);
      }
      if ($("input[name='time_to_exercise']:checked").val()) {
        $('#time_to_exercise_result').text(exercise[$("input[name='time_to_exercise']:checked").val()]);
      }
      if (checkboxResult) {
        checkboxResult = checkboxResult.trim().replace(/,+$/, '');
        $('#products_using_result').text(checkboxResult);
      }
      $('#old_result').text(CongThucController.getAge(date_of_birth))

      let data = {
        'height': height,
        'weight': weight,
        'date_of_birth': date_of_birth,
        'parent_name': parent_name,
        'phone': phone,
        'child_name': child_name,
        'time_to_exercise': exercise[$("input[name='time_to_exercise']:checked").val()],
        'time_sleep': $('input[name="time_sleep"]').val(),
        'products_using': checkboxResult,
        'gender': gender,
        'store_db': true,
      };

      $.ajax({
        type: 'POST',
        url: url,
        headers: {'X-CSRF-TOKEN': csrf},
        data: data,
        cache: false,
        success: function (response) {
          CongThucController.renderChart(response.xValues, response.values)
          $('#chart').show();
          $('#table').show();
          $('#height_old_20').text(response.h20);
          $('#mucdo').text(response.mucdo_height);
          $('#chenhlech').text(response.chenhlech_height);
          $('#mucdo_weight').text(response.mucdo_weight);
          $('#chenhlech_weight').text(response.chenhlech_weight);
          $('#ma_phac_do').text(response.maphacdo);
        },
        error: function (e) {
          console.log('Change language error ...')
        }
      });
    })
  },
  renderChart: function (xValues, values) {
    var ctx = document.getElementById('lineChart');
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,1.0)",
            data: values.mainValue,
            label: "Đường chiều cao của con",
            showLine: true,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "yellow",
            borderColor: "yellow",
            data: values.lower_1,
            label: "Dưới chuẩn độ 1",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CCFFCC",
            borderColor: "#CCFFCC",
            data: values.lower_2,
            label: "Dưới chuẩn độ 2",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CCFF99",
            borderColor: "#CCFF99",
            data: values.lower_3,
            label: "Dưới chuẩn độ 3",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CCFF66",
            borderColor: "#CCFF66",
            data: values.lower_4,
            label: "Dưới chuẩn độ 4",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "red",
            borderColor: "red",
            data: values.standard,
            label: "Tiêu chuẩn",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CC3399",
            borderColor: "#CC3399",
            data: values.higher_1,
            label: "Trên chuẩn độ 1",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CC3366",
            borderColor: "#CC3366",
            data: values.higher_2,
            label: "Trên chuẩn độ 2",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CC3333",
            borderColor: "#CC3333",
            data: values.higher_3,
            label: "Trên chuẩn độ 3",
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#CC3300",
            borderColor: "#CC3300",
            data: values.higher_4,
            label: "Trên chuẩn độ 4",
          },
        ]
      },
      options: {
        // legend: {
        //   position: false
        // },
        legend: false,
        title: {
          display: true,
          text: 'Biểu đồ dự đoán chiều cao của con'
        },
        interaction: {
          intersect: false,
        },
        scales: {
          y: {
            display: true,
            title: {
              display: true,
              text: 'Chiều cao'
            },
            gridLines: {
              display: true
            },
            beginAtZero: true
          },
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tuổi'
            },
          }
        },
      }});
  },
  getOld: function(dateString) {
    var now = new Date();
    var yearNow = now.getYear();
    var dob = new Date(dateString);
    var yearDob = dob.getYear(dateString);
    yearAge = yearNow - yearDob;
    console.log(yearNow, yearDob, yearAge, '//yearAge')
    return yearAge;
  },
  getAge: function(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString);
  console.log(dob, '//dob');

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };

  if ( age.years > 1 ) yearString = " tuổi";
  else yearString = " year";
  if ( age.months> 1 ) monthString = " tháng";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " ngày";
  else dayString = " ngày";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.months + monthString + ", " + age.days + dayString;
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.days + dayString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString;
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString + "," + age.months + monthString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString + ", " + age.days + dayString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.days + dayString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString;
  else ageString = "";

  return ageString;
}
};
