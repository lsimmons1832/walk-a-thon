//Define global variables to hold information received
var increament = document.getElementsByClassName("donation");
var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

//Add function to clear form on cancel
 function cancel(){
 	console.log("I clicked cancel");
 		var userInput = document.getElementsByTagName("input");
 		for (var y = 0; y < 3; y++) {
 		userInput[y].value = '';
	
};

// Add function to capture user input
function donate(){
	var userInput = document.getElementsByTagName("input");
	console.log("I clicked donate");
	if (userInput[0].value = "" || userInput[1].value = '' || userInput[2].value = "") {
		alert("Please complete all fields.");
	} else{
			oldWalkAThon.addDonor();
			oldWalkAThon.getDonor();
		}
		cancel();
};

//Add function to insert user input into DOM when donate clicked
function writeDOM(captureInput){
	oldWalkAThon.getDonor(captureInput);

}

// Add event listener for donate button
donateButton.addEventListener("click", donate);
//Add event listener for cancel button
cancelButton.addEventListener("click", cancel);

