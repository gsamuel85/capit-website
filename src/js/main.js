'use strict';
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