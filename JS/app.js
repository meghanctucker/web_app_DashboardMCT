//GRAPH OBJECTS
const lineChart = document.getElementById('traffic');
const barChart = document.getElementById('dailyTraffic');
const donutChart = document.getElementById('mobileUsers');

//ALERT BANNER OBJECTS
const alertBanner = document.getElementById('alert');

//MESSAGE FIELD OBJECTS
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

//GRAPH CODE
const Traffic = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      data: [500,1000,750,1250,1750,1250,1500,1000,1500,2000,1500],
      label: "Weekly",
      backgroundColor: 'rgba(116, 119, 191, 0.36)',
      lineTension: 0,
      pointStyle: 'circle',
      radius: 7,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointBorderColor: 'rgba(116, 119, 191, 1)'
    }]
  }
});

const Daily = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        backgroundColor: 'rgba(116, 119, 191, 1)',
        data: [50, 75, 150, 100, 200, 175, 75]
      }
    ]
  },
  options: {
    legend: {display: false}
  }
});

const Mobile = new Chart(donutChart, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [
      {
        backgroundColor: ['#74B1BF', '#81C98F', '#7377BF'],
        data: [431, 765, 1256]
      }
    ]
  }
});


//ALERT BANNER CODE
alertBanner.innerHTML =
  `
  <div class="alert-banner">
    <p><strong>ALERT:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
  </div>
  `

alertBanner.addEventListener('click', e=>{
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});

//MESSAGE FIELD CODE
send.addEventListener('click', () => {
  //ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert("Messaage successfully sent to: ${user.value}");
  }
});
