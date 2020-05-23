const lineChart = document.getElementById('traffic');
const Traffic = new Chart(lineChart, {
  type: 'line',
  data: [{
    x: 10,
    y: 20
  }, {
    x: 15,
    y: 10
  }
  ]
})
