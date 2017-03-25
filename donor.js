var WalkAThon = (function(oldWalkAThon) {
	var donor = [];

	return{
		getDonor: function(){
			var currentDonor = document.getElementByClassName('table');
			var donorString = '';
			donorString += `<tbody><th>Name:</th><th>Email:</th><th>Donation Amount:</th><th>Donation Basis:</th>`
			for (var i = 0; i < donor.length; i++) {
				if (true) {
					donorString += `<tr><td>${donor[i].name}<td/>`
					donorString += `<td>${donor[i].email}<td/>`
					donorString += `<td>${donor[i].amount}<td/>`
					donorString += `<td>${donor[i].increament}<td/></tr>`
				}
				donorString += `</tbody>`
				currentDonor.innerHTML = donorString;

				return donor;
				}
			},
			addDonor: function(){
				donor.push({name:"", email:"",amount:"", increament:""});
			}
 };
	return oldWalkAThon;
})(WalkAThon);