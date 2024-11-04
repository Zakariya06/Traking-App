var options = {
  series: [{
    name: 'Net Profit',
    data: [100, 60, 70, 90, 95, 55, 70],
  }],
  chart: {
    type: 'bar',
    height: 150,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      endingShape: 'rounded',
      borderRadius: 8,
      distributed: true // Enables individual colors for each bar
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent']
  },
  colors: ['#DCE6FE', '#487FFC', '#DCE6FE', '#DCE6FE', '#487FFC', '#DCE6FE', '#DCE6FE'], // Custom color pattern
  legend: {
    show: false // Hide the color legend
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: {
      show: true // Keep month names visible
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  grid: {
    show: false
  },
  fill: {
    opacity: 1
  }
};

var chart = new ApexCharts(document.querySelector("#columnChart"), options);
chart.render();
