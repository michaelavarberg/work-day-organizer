var today = new Date();
var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var day = weekdays[today.getDay()];
var month = months[today.getMonth()];
var date = today.getDate();
var timeBlocksList = $("#time-blocks").children();
var currentHour = today.getHours();
var timeBlocksSection = $("#time-blocks");
var savedEvents = JSON.parse(localStorage.getItem("saved-events"));

if (savedEvents === null) {
  savedEvents = ["", "", "", "", "", "", "", "", ""];
} else {
  timeBlocksList.children().each(function (index) {
    timeBlocksList
      .children()
      .eq(index)
      .children()
      .eq(1)
      .text(savedEvents[index]);
  });
}
//Loads any saved events
timeBlocksList.children().each(function (index) {});
//Saves array to local storage
function storeSchedule() {
  localStorage.setItem("saved-events", JSON.stringify(savedEvents));
}
//Loads background color of time blocks based on current time
timeBlocksList.children().each(function (index) {
  var time = timeBlocksList.eq(index).attr("id");
  var block = timeBlocksList.eq(index).children().children().eq(1);
  if (time < currentHour) {
    block.addClass("past");
  } else if (time > currentHour) {
    block.addClass("future");
  } else {
    block.addClass("present");
  }
});
//Loads saved text into correct blocks
function init() {}
//Loads current date in the header
$("#currentDay").text(day + ", " + month + " " + date + nth(date));

//Adds correct ending to date in the header
function nth(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

timeBlocksSection.on("click", ".fas", function (event) {
  var index = $(event.target).parent().parent().parent().attr("id");
  index = parseInt(index);
  index -= 9;
  var item = $(event.target).parent().prev().val();
  savedEvents.splice(index, 1, item);
  storeSchedule();
});

// console.log(JSON.parse("saved-events"));
//Write code to take input from any text area, record its position, push it to an array of objects
//Write code to save array to local storage
//Write code to render events from local storage and print to screen on load: helpful
// To write text to any of the time blocks
// timeBlocksArray.children().eq(0).children().eq(1).text("Hello");
console.log(savedEvents);
