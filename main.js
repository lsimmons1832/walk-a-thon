//Define global variables to hold information received
var increament = document.getElementsByClassName("donation");
var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

//Add function to clear form on cancel

// Add function to capture user input
function donate() {
    var userInput = document.getElementsByTagName("input");
    console.log("I clicked donate");
    if (userInput[0].value === "" || userInput[1].value === '' || userInput[2].value === "" || userInput[3].value === "") {
        alert("Please complete all fields.");
    } else {
    	var newDonor = {
              name: userInput[0].value,
              email: userInput[1].value,
              amount: userInput[2].value,
              increament: userInput[3].value
          }

    		WalkAThon.addDonor(newDonor);
        writeDOM();
      }
};

function cancel() {
    console.log("I clicked cancel");
    var userInput = document.getElementsByTagName("input");
    for (var i = 0; i < 3; i++) {
        userInput[i].value = '';
    }
};
//Add function to insert user input into DOM when donate clicked
function writeDOM() {
  var currentDonor = document.getElementById('tbody');
  var donorString = '';
  var donor = WalkAThon.getDonor();
  console.log("my orig", donor);
    for (var i = 0; i < donor.length; i++) {
      // if (true) {
          donorString += `<tr><td>${donor[i].name}</td>`
          donorString += `<td>${donor[i].email}</td>`
          donorString += `<td>${donor[i].amount}</td>`
          donorString += `<td>${donor[i].increament}</td></tr>`
      // }
  }
      currentDonor.innerHTML = donorString;
      return currentDonor;

}

// Add event listener for donate button
donateButton.addEventListener("click", donate);
//Add event listener for cancel button
cancelButton.addEventListener("click", cancel);
writeDOM();