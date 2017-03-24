var WalkAThon = (function(oldWalkAThon) {
//Define global variables to hold information received
var userName = document.getElementById("exampleInputName2");
var donationAmount = document.getElementById("exampleInputAmount");
var increament = document.getElementById("increament");
var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

// Add event listener for donate button
donateButton.addEventListener("click", function(writeDOM){
	console.log("I'm doing something when submit is clicked");
});

//Add event listener for cancel button
donateButton.addEventListener("click", function(clearForm){
	console.log("I'm doing something when cancel is clicked");
});
//Add function to insert user input into DOM when donate clicked

//Add function to clear form on cancel

})();