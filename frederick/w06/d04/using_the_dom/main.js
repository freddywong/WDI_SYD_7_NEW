var fadeOut = function(element) {
	
}

var h1 = document.getElementById("home_header");
h1.onclick = function() {
	alert("Go home!");
}

// document.body.onclick = function() {
// 	alert("body clicked");
// }

//onsubmit is an event listener. it listens to events and if assigned a function it will perform it once the event happens.


// document.forms[0].onsubmit = function() {
// 	var nameField = document.getElementById("name");
// 	var emailField = document.getElementById("email");

// 	validatesPresence(nameField);
// 	validatesPresence(emailField);
// }

var validatesPresence = function(formField) {
	if (formField.value.length === 0) {
		formField.setAttribute("style", "border: 1px solid red;");

	} else {
		formField.setAttribute("style", "border: 1px solid black");
	}
}

