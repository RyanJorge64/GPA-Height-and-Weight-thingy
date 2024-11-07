document.addEventListener("DOMContentLoaded", function() {
	var button = document.getElementById("acoolButton");
	var theResults = document.getElementById("theResults");
	
	button.addEventListener("click", function() {
		var name = prompt("Please enter your name:");
		var GPA = prompt("Enter your GPA:");
		var height = prompt ("Enter your height");
		var weight = prompt("Enter your weight");
		
		theResults.textContent = "Hello, " + name + " Your GPA is " + GPA + " You are " + height + " tall and you weigh " + weight + ".";
		
	    });
    });
	