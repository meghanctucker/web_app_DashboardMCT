//Random USER
$.ajax({
  url: 'https://randomuser.me/api/?inc=picture,name',
  dataType: 'json',
  success: function(data) {
    const result = data.results[0];
    const userPic = result.picture.thumbnail;
    const userName = result.name.first;
    const userLast = result.name.last;
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
//default settings
hourlyChart.style.display="none";
dailyChart.style.display="none";
weeklyChart.style.display="block";
monthlyChart.style.display="none";
document.getElementsByClassName('traffic-nav-link')[2].classList.add('active');

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
    //then create an array of the letters in the href attribute
    let splitHref = href.split("");
    //a function to remove the # from the variable
    function newId(id) {
      //will return the array without the hashtag
      return id!=="#";
    }
    //creates a variable to filter through the array without the hashtag
      let newIdArray = splitHref.filter(newId);
      //finally creates a variable that joins the array into a string
      let finalId = newIdArray.join('');

  for(let i=0; i<chart_Array.length; i++) {
    let currentChart = chart_Array[i];
    if (currentChart == finalId){
      var correctChart = currentChart;
     document.getElementById(correctChart).style.display="block";
  } else {
    var wrongChart = currentChart;
    document.getElementById(wrongChart).style.display="none";
   }
  }
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
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels: {

      }
    }
  }
});


//ALERT BANNER CODE
alertBanner.innerHTML =
  `
  <div class="alert-banner">
    <p><strong>ALERT:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
  </div>
  `;

alertBanner.addEventListener('click', e=>{
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

//NOTIFY DROPDOWN

  const notify = document.getElementById('notify');
  const notifyModal = document.getElementById('notification-modal');
  const notifyMessage = document.getElementsByClassName('notification-message');
  const greenDot = document.getElementById('notification');
  let items = notifyMessage.length;
  notifyModal.style.display = "none";
  //when the notify bell IS clicked
  notify.addEventListener('click', function(){
    notifyModal.style.display = "block";
    for(let i=0; i<notifyMessage.length; i++){
      let clickedMessage = notifyMessage[i];
      clickedMessage.addEventListener('click', function(){
        clickedMessage.style.display = "none";
        items -= 1;
        if (items>0) {
          console.log(items);
        } else {
          notifyModal.style.display = "none";
          greenDot.style.display = "none";
        }
      });
      notify.addEventListener('click', function(){
        notifyModal.style.display = "none";
        greenDot.style.display = "none";
      });
    }
  });


//MESSAGE FIELD CODE
const searchBox = document.getElementById('userField');
const users_array = [ 'Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
let pick_Letter = [];

send.addEventListener('click', () => {
  //ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert("Message successfully sent to: " + user.value + ".");
  }
});

// message Search

function autocomplete(inp, arr) {
  //inp = the input of te text field, arr = the array of possible names
  var currentFocus;
  //execute function when user writes in text field
  inp.addEventListener("input", function(e){
    var a, b, i, val = this.value;
    //close any already open lists of autocompleted values
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    //create a DIV element that will contain the items (values):
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    //append the DIV element as a child of the autocomplete countainer:
    this.parentNode.appendChild(a);
    //for each item in the array...
    for(i=0; i<arr.length; i++){
      //check if the item starts with the same letters as the text field values
      if (arr[i].substr(0, val.length).toLowerCase() == val.toLowerCase()) {
        //create a DIV element for each matching elements
        b = document.createElement("DIV");
        //make the matching letters bold
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        //insert an input field that will hold the current array item's value
        b.innerHTML += "<input type='hidden' value='"+ arr[i] +"'>";
        //execute a function when someone clicks on the item value (DIV elements):
          b.addEventListener("click", function(e) {
            //insert the value for the autocomplete text field:
            inp.value = this.getElementsByTagName("input")[0].value;
            //close the list of autocompleted values, or any other open lists
            closeAllLists();
          });
          a.appendChild(b);
      }
    }
  });
  //execute a function presses a key on the keyboard
  inp.addEventListener("keyup", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if(x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      //if the down arrow is pressed increase the currentFocus variable
      currentFocus++;
      //and make the current item more visible
      addActive(x);
    } else if (e.keyCode ==38) {
      //up
      currentFocus--;
      //make more visible
      addActive(x);
    } else if (e.keyCode == 13) {
      //if the enter key is pressed, prevent the form from being submited
      e.preventDefault();
      if (currentFocus > -1) {
        //and simulate a click on the active item
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    // a function to classify the item as active
    if (!x) return false;
    //start by removing all the active items
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    //add class autocomplete-active:
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    //a function to remove the active class from all autocomplete items
    for (var i =0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    //close all autocomplete lists in the document, except the one passed by the argument
    var x = document.getElementsByClassName("autocomplete-items");
      for (var i=0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
  }
  //execute a function when someone clicks in the document:
  document.addEventListener("click", function (e){
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("userField"), users_array);

//LOCAL STORAGE CODE *********************************************************

let emailNotifications = document.getElementsByClassName('switch-light')[0].getElementsByTagName('input')[0];
let publicProfile = document.getElementsByClassName('switch-light')[1].getElementsByTagName('input')[0];
const timeZone = document.getElementById('timezone').getElementsByTagName('option');//.getElementsByClassName('selected')[0];
const saveIt = document.getElementById('save');
const clearIt = document.getElementById('cancel');

//get emailNotifications
var set1 = emailNotifications.checked;
var result1 = localStorage.getItem('set1', JSON.stringify(set1));
if (result1 == "true") {
  emailNotifications.checked = true;
} else if (result1 == "false") {
  emailNotifications.checked = false;
} else {
  emailNotifications.checked = false;
}
//getpublicprofile
var set2 = publicProfile.checked;
var result2 = localStorage.getItem('set2', JSON.stringify(set2));
if (result2 == "true") {
  publicProfile.checked = true;
} else if (result1 == "false") {
  publicProfile.checked = false;
} else {
  publicProfile.checked = false;
}

var set3 = localStorage.getItem('set3', JSON.stringify(set3));
if(set3 != undefined){
timeZone[set3].selected = true;
} else {
  timeZone[0].selected = true;
}

//set
saveIt.addEventListener('click', function(){
  var set1 = emailNotifications.checked;
  localStorage.setItem('set1', JSON.stringify(set1));
  var set2 = publicProfile.checked;
  localStorage.setItem('set2', JSON.stringify(set2));
//save selected timezone
for(let i = 0; i <timeZone.length; i++) {
  var myTime = timeZone[i].selected;
  if (myTime == true) {
    var set3 = i;
  //  console.log(set3);
      localStorage.setItem('set3', JSON.stringify(set3));
  }
}
});

//clear
clearIt.addEventListener('click', function(){
//  var set1 = emailNotifications.checked;
  localStorage.removeItem('set1', JSON.stringify(set1));
  emailNotifications.checked = set1;
//  var set2 = publicProfile.checked;
  localStorage.removeItem('set2', JSON.stringify(set2));
  publicProfile.checked = set2;
  //clear selected timezone
  localStorage.removeItem('set3', JSON.stringify(set3));
});
