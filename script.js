

// Display the current day at the top of the calendar
var currentDayEl = document.getElementById("currentDay");
var currentDay = moment().format("dddd, MMMM Do");
currentDayEl.textContent = currentDay;

// Get all the time blocks
var timeBlocks = document.querySelectorAll(".time-block");

// Loop through each time block
timeBlocks.forEach(function (timeBlock) {
  var hour = timeBlock.id.split("-")[1];
  var currentHour = moment().hour();

  console.log("Hour:", hour, typeof hour);
  console.log("Current Hour:", currentHour, typeof currentHour);


  // Color code each time block to indicate past, present, or future
  if (parseInt(hour) < parseInt(currentHour)) {
    console.log("Hour is less than currentHour");
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    console.log("Hour is equal to currentHour");
    timeBlock.classList.add("present");
  } else {
    console.log("Hour is greater than currentHour");
    timeBlock.classList.add("future");
    
  }

  // Retrieve the saved event from local storage and display it in the textarea
  var savedEvent = localStorage.getItem(timeBlock.id);
  var textarea = timeBlock.querySelector("textarea");
  textarea.value = savedEvent;

  // Save the entered event to local storage when the save button is clicked
  var saveBtn = timeBlock.querySelector(".saveBtn");
  saveBtn.addEventListener("click", function () {
    localStorage.setItem(timeBlock.id, textarea.value);
  });
});