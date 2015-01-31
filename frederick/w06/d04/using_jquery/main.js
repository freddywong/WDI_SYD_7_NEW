$(function(){
	$("#show_me").on('click', function(e) {
		console.log(e);
		$("#green_square").toggleClass("red");
		$("#green_square").toggleClass("green");
	});

});