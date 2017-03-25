//Define global variables to hold information received
var userName = document.getElementById("exampleInputName2");
var email = document.getElementById("exampleInputEmail1");
var donationAmount = document.getElementById("exampleInputAmount");
var increament = document.getElementsByClassName("donatiom");
var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

// Add function to capture user input
function donate(){
	captureInput = userName.value;
	if (userName.value = '' || email.value = '' || donationAmount.value = '') {
		alert("Please complete all fields.");
	} else
			WalkAThon.addDonor(captureInput);
}

//Add function to clear form on cancel
 function cancel(){
	console.log("I'm doing something when cancel is clicked");
};
//Add function to insert user input into DOM when donate clicked
function writeDOM(captureInput){
	oldWalkAThon.getDonor(captureInput);

}

// Add event listener for donate button
donateButton.addEventListener("click", donate);
//Add event listener for cancel button
cancelButton.addEventListener("click", cancel);

