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

console.log(timeBlocksList.eq(5).attr("id"));

timeBlocksList.children().each(function (index) {
  var time = timeBlocksList.eq(index).attr("id");
  var block = timeBlocksList.eq(index);
  if (time < currentHour) {
    block.addClass("past");
  } else if (time > currentHour) {
    block.addClass("future");
  } else {
    block.addClass("present");
  }
});

$("#currentDay").text(day + ", " + month + " " + date + nth(date));

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
//make an array of timeblocks
//Write code to change class of a time-block based on if it is before, during or after a time
//Write code to take input from any text area, record its position, push it to an array of objects
//Write code to save array to local storage
//Write code to render events from local storage and print to screen on load: helpful
// To write text to any of the time blocks
// timeBlocksArray.children().eq(0).children().eq(1).text("Hello");
