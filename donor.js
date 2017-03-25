var WalkAThon = (function(oldWalkAThon) {
  var donor = [{name: "Latasha Simmons", email:"lsimmons1832@gmail.com", amount:"100", increament: "single"}];

  return {
      getDonor: function() {
      	return donor;
      },
      addDonor: function(newDonor) {
          donor.push(newDonor);
          console.log("new object",newDonor);
      },
      setDonor: function(userInput) {
          var donorsList = donor.length - 1;
          for (var x = 0; x < userInput.length; x++) {
              if (userInput[x].id === "name" && userInput[x].value !== '') {
                  donor[donorsList].name = userInput[x].value;
              }
              if (userInput[x].id === "email" && userInput[x].value !== '') {
                  donor[donorsList].email = userInput[x].value;
              }
              if (userInput[x].id === "amount" && userInput[x].value !== '') {
                  donor[donorsList].amount = userInput[x].value;
              }
              if (userInput[x].checked === true) {
                  donor[donorsList].increament = userInput[x].value;
                  console.log(userInput);
              }
            }
          }
        }
})();