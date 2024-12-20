$(document).ready(function () {
  ThongKeController.init();
});

var ThongKeController = {
  init: function () {
    console.log('js is running')
    ThongKeController.renderChart();

    // mobile: 5 day, pc: 10 day
    ThongKeController.renderBidvBarChart();
    ThongKeController.renderVtbBarChart();
    ThongKeController.renderVcbBarChart();
  },

  renderChart: function () {
    var ctx = document.getElementById('lineChart');
    var dataX = JSON.parse($('#data_chart').val());

    const data = {
      labels: dataX.label,
      datasets: [{
        label: 'My First dataset',
        data: dataX.data,
        backgroundColor: [
          '#9ECAE1',
          '#005993',
          '#074c31',
        ],
        borderColor: [
          '#9ECAE1',
          '#005993',
          '#074c31',
        ],
        borderWidth: 1,
      }]
    };

    var pieOptions = {
      events: false,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'bottom',
      },
      animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset) {

            for (var i = 0; i < dataset.data.length; i++) {
              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle)/2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = '#fff';
              if (i == 3){ // Darker text color for lighter background
                ctx.fillStyle = '#444';
              }

              var val = dataset.data[i];
              var percent = String(Math.round(val/total*100)) + "%";

              if(val != 0) {
                ctx.fillText(dataset.data[i].format(), model.x + x, model.y + y);
                // Display percent in another line, line break doesn't work for fillText
                ctx.fillText(percent, model.x + x, model.y + y + 15);
              }
            }
          });
        }
      }
    };

    new Chart(ctx, {
      type: 'pie',
      data: data,
      pieceLabel: { mode: 'percentage', precision: 2 },
      options: pieOptions
    })
  },

  renderBidvBarChart: function () {
    var ctx = document.getElementById('bidvBarChart');
    var dataX = JSON.parse($('#data_bidv_chart').val());

    const data = {
      labels: dataX.label,
      datasets: [{
        label: 'Top giao dịch BIDV',
        data: dataX.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.5)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 200)'
        ],
        borderWidth: 1
      }]
    };

    var opt = {
      events: false,
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      animation: {
        duration: 1,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: opt
    })
  },

  renderVtbBarChart: function () {
    var ctx = document.getElementById('vtbBarChart');
    var dataX = JSON.parse($('#data_vtb_chart').val());

    const data = {
      labels: dataX.label,
      datasets: [{
        label: 'Top giao dịch VTB',
        data: dataX.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    var opt = {
      events: false,
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      animation: {
        duration: 1,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: opt
    })
  },

  renderVcbBarChart: function () {
    var ctx = document.getElementById('vcbBarChart');
    var dataX = JSON.parse($('#data_vcb_chart').val());

    const data = {
      labels: dataX.label,
      datasets: [{
        label: 'Top giao dịch VCB',
        data: dataX.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    var opt = {
      events: false,
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      animation: {
        duration: 1,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: opt
    })
  },
};

Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
};

