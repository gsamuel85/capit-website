'use strict';
// TODO: Update Linting
// TODO: ES6


// Show / hide menu on scroll
var stickMenu = function stickMenu() {
	var navHeight = document.getElementById("header").clientHeight + 100;
	var header = document.getElementById("header");

	if (window.scrollY > navHeight) {
		header.className = "reveal";
	}
	else {
		header.className = "reveal alt";

	}
};

window.addEventListener("scroll", function(e) {
	stickMenu();
});


// TODO: Remove form
// Handle form submission
var form = document.getElementById("contact-form");

if (form) {
	form.addEventListener("submit", function submitContact(e) {
		e.preventDefault();

		var contactData = new FormData();
		contactData.append("formId", "wRKKzTKy5PoyLATiwmQi4A==");
		contactData.append("emails[0].Label", "Work");
		contactData.append("email[0]_Value", document.getElementById("email").value);

		var xhttp = new XMLHttpRequest();
		// xhttp.onreadystatechange = function() {
		//   if (xhttp.readyState === 4 && xhttp.status === 200) {

		//     console.log("Contact details sent");
		//   }
		// };
		xhttp.open("POST", "https://googleapps.insight.ly/WebToContact/Create", true);
		xhttp.send(contactData);

		// Toggle form / thank you
		var form = document.getElementById("contact-form");
		var thanks = document.getElementById("contact-thanks");

		form.style.display = "none";
		thanks.style.display = "block";
	});
}