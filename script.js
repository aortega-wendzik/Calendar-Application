

var today = moment().format("dddd, MMMM Do YYYY ");

var now = moment().format("H A");
$("#currentDay").text(today);

var saveButtons = document.querySelectorAll(".btn.saveBtn.col-2.col-md-1")

// Add a click event listener to the save button
saveButtons.forEach(function(saveButton) {
saveButton.addEventListener("click", function() {
  // Get the time-block element that contains the save button
  var timeBlocks = saveButton.parentElement;

  // Get the id of the time-block element
  var timeBlockId = timeBlock.id;

  // Get the user input element by its class name
  var userInput = timeBlock.querySelectorAll(".col-8.col-md-10.description");

  // Get the value of the user input element
  var userInputValue = userInput.value;

  // Save the user input value in local storage using the time-block id as the key
  localStorage.setItem(timeBlockId, userInputValue);
});
});
// Add an event listener that runs when the document is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the time-block element by its id
    var timeBlocks = document.querySelectorAll(".time-block");

    //Loop through each tim-time element
    timeBlocks.forEach(function(timeBlocks){
        
    //Get the id of the time-block element
    var timeBlockId = timeBlock.id;
  
    // Get the user input element by its class name
    var userInput = timeBlocks.querySelectorAll(".col-8.col-md-10.description");
  
    // Get the value from local storage using the time-block id as the key
    var userInputValue = localStorage.getItem(timeBlockId);
  
    // Set the value of the user input element
    userInput.value = userInputValue;
  });
});

