//Random USER
$.ajax({
  url: 'https://randomuser.me/api/?inc=picture,name',
  dataType: 'json',
  success: function(data) {
    const result = data.results[0];
//    console.log(result.picture.thumbnail);
    const userPic = result.picture.thumbnail;
    console.log(userPic);
//    console.log(result.name.first);
    const userName = result.name.first;
    console.log(userName);
//    console.log(result.name.last);
    const userLast = result.name.last;
    console.log(userLast);
    console.log(userName + " " + userLast);
//adding the picture to the src of avatar image
  $('#avatar-image').attr('src', userPic);
//adding the name to the p tag
  const avatarName = document.getElementById("avatar-name");
  avatarName.append(userName + " " + userLast);
 }
});

//GRAPH OBJECTS
const hourlyChart = document.getElementById('hourlyChart');
const dailyChart = document.getElementById('dailyChart');
const weeklyChart = document.getElementById('traffic');
const monthlyChart = document.getElementById('monthlyChart');
const barChart = document.getElementById('dailyTraffic');
const donutChart = document.getElementById('mobileUsers');

const chart_Array = [hourlyChart.getAttribute('id'),
                    dailyChart.getAttribute('id'),
                    weeklyChart.getAttribute('id'),
                    monthlyChart.getAttribute('id')];


//creates variable which grabs onto array of list items
const clickItems = document.getElementsByClassName('traffic-nav-link');
//iterates through list items
for(let i=0; i<clickItems.length; i++) {
  //creates variable for an index in the array
  const clickItem = clickItems[i];
  //when indexed array item is clicked
  clickItem.addEventListener("click", function(){
    //iterate through the original array again
    for(let i=0; i<clickItems.length; i++) {
      //remove all classes with the name "active"
      clickItems[i].classList.remove("active");
    }
    //then add the class "active" to the list item that was clicked
    clickItem.classList.add("active");
    //then create a variable which gets the href attribute of the clicked list item
    let href = clickItem.getAttribute('href');
//---> DO I NEED THIS?    //create a function that returns the ID name that the href of the clicked item
//    function getId(){
    //then create an array of the letters in the href attribute
    let splitHref = href.split("");
    console.log(splitHref);
    //a function to remove the # from the variable
    function newId(id) {
      //will return the array without the hashtag
      return id!=="#";
    }
    //creates a variable to filter through the array without the hashtag
      let newIdArray = splitHref.filter(newId);
      console.log(newIdArray);
      //finally creates a variable that joins the array into a string
      let finalId = newIdArray.join('');
    //  console.log(finalId);
      //console.log(finalId);
  //    function nameChart(currentChart){
  //      for(let i=0; i<chart_Array.length; i++) {
  //        let currentChart = chart_Array[i];
  //        return currentChart;
  //      }
  //    }
  //    var x = nameChart();
  //    console.log(x);
  console.log(finalId);
  console.log(chart_Array);
  for(let i=0; i<chart_Array.length; i++) {
    let currentChart = chart_Array[i];
    if (currentChart == finalId){
      console.log(currentChart);
      currentChart.style.display="block";
    } else {
      console.log('false');
      currentChart.style.display="none";
    }
  }
      //returns that string
      return finalId;
  });
}



//ALERT BANNER OBJECTS
const alertBanner = document.getElementById('alert');

//MESSAGE FIELD OBJECTS
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

//GRAPH CODE

  //line charts
//  hourlyChart.style.display="none";
//  dailyChart.style.display="none";
//  monthlyChart.style.display="none";
//  weeklyChart.style.display="none";


    //HourlyLine
    const HourlyLine = new Chart(hourlyChart, {
      type: 'line',
      data: {
        labels: ['0100', '0200', '0300', '0400', '0500', '0600','0700', '0800', '0900', '1000', '1100'],
        datasets: [{
          data: [25,30,100,80,75,120,150,100,150,200,150],
          label: "Hourly",
          backgroundColor: 'rgba(116, 119, 191, 0.36)',
          lineTension: 0,
          pointStyle: 'circle',
          radius: 7,
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderColor: 'rgba(116, 119, 191, 1)'
        }]
      },
      options: {
        label: {
          display: false,
        },
        legend: {
          display: false,
        }
      }
    });


    //DailyLine
  const DailyLine = new Chart(dailyChart, {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
      datasets: [{
        data: [1750,1250,1500,1000,1500,2000,1500],
        label: "Daily",
        backgroundColor: 'rgba(116, 119, 191, 0.36)',
        lineTension: 0,
        pointStyle: 'circle',
        radius: 7,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(116, 119, 191, 1)'
      }]
    },
    options: {
      label: {
        display: false,
      },
      legend: {
        display: false,
      }
    }
  });

    //weekly traffic
const Weekly = new Chart(weeklyChart, {
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
  },
  options: {
    label: {
      display: false,
    },
    legend: {
      display: false,
    }
  }
});

  //MonthlyLine
  const Monthly = new Chart(monthlyChart, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'November', 'December'],
      datasets: [{
        data: [1000,1200,750,1250,1550,2050,1000,1000,1500,200,1600,1775],
        label: "Monthly",
        backgroundColor: 'rgba(116, 119, 191, 0.36)',
        lineTension: 0,
        pointStyle: 'circle',
        radius: 7,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(116, 119, 191, 1)'
      }]
    },
    options: {
      label: {
        display: false,
      },
      legend: {
        display: false,
      }
    }
  });

//BarChart

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

//DonutChart

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
