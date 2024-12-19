$(document).ready(function () {
  CongThucController.init();
});

var CongThucController = {
  init: function () {
    CongThucController.submitForm();
  },

  submitForm: function () {
    var csrf = $('meta[name="csrf-token"]').attr('content');
    var url = $('input[name="api_du_doan_chieu_cao"]').val();

    let data = {
      'height': $('#height').text(),
      'weight': $('#weight').text(),
      'date_of_birth': $('#date_of_birth').val(),
      'gender': $('#gender').val(),
      'created_at': $('#created_at').val(),
    };

    $.ajax({
      type: 'POST',
      url: url,
      headers: {'X-CSRF-TOKEN': csrf},
      data: data,
      cache: false,
      success: function (response) {
        CongThucController.renderChart(response.xValues, response.values);
        $('#mucdo_height').text(response.mucdo_height)
        $('#chenhlech_height').text(response.chenhlech_height)
        $('#chenhlech_weight').text(response.chenhlech_weight)
        $('#mucdo_weight').text(response.mucdo_weight)
        $('#h20').text(response.h20)

      },
      error: function (e) {
        console.log('Change language error ... ')
      }
    });
  },
  renderChart: function (xValues, values) {
    var ctx = document.getElementById('lineChart');
    Chart.register(ChartDataLabels);
    var myChart = new Chart(ctx, {
      type: "line",
      // plugins: [ChartDataLabels],
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            backgroundColor: "#006cd8",
            borderColor: "#006cd8",
            data: values.mainValue,
            label: "Đường chiều cao của con",
            borderWidth: 5,
          },
          {
            fill: false,
            backgroundColor: "#efd655",
            borderColor: "#efd655",
            data: values.c4,
            label: "Dưới chuẩn độ 1",
            datalabels: {},
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#ef8e00",
            borderColor: "#ef8e00",
            data: values.c3,
            label: "Dưới chuẩn độ 2",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#b20400",
            borderColor: "#b20400",
            data: values.c2,
            label: "Dưới chuẩn độ 3",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#ee2820",
            borderColor: "#ee2820",
            data: values.c1,
            label: "Dưới chuẩn độ 4",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#a082e8",
            borderColor: "#a082e8",
            data: values.c5,
            label: "Tiêu chuẩn",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#beea53",
            borderColor: "#beea53",
            data: values.c6,
            label: "Trên chuẩn độ 1",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#4a9e2b",
            borderColor: "#4a9e2b",
            data: values.c7,
            label: "Trên chuẩn độ 2",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#1e7a00",
            borderColor: "#1e7a00",
            data: values.c8,
            label: "Trên chuẩn độ 3",
            pointStyle: false,
          },
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "#6bbaf9",
            borderColor: "#6bbaf9",
            data: values.c9,
            label: "Trên chuẩn độ 4",
            pointStyle: false,
          },
        ]
      },
      options: {
        // legend: true,
        maintainAspectRatio: true,
        aspectRatio: 1, // 0.5
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
            align: 'center',
          },
          title: {
            display: false,
            text: ''
          },
          datalabels: {
            color: '#006cd8',
            font: {
              weight: 'bold',
              size: 10,
            },
            align: 'end',
            anchor: 'end',
            formatter: (value, context) => context.datasetIndex == 0 ? value : ''
          },
        },
        scales: {
          y: {
            display: true,
            title: {
              display: true,
              text: 'Chiều cao (cm)',
              color: '#27a9e3',
            },
            beginAtZero: true,
            min: 0,
          },
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tuổi',
              color: '#27a9e3',
            },
            min: 0,
            max: 20,
          }
        },
      }});
  },
};
