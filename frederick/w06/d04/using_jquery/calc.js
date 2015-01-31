$(function(){
  $('#calculate').submit(function(){
    var firstNum = parseInt($('#number_one').val());
    var secondNum = parseInt($('#number_two').val());

    validateForm(firstNum, secondNum);

    if ($( "#operation" ).val() === "add") {
      $('#answer').text(firstNum + secondNum);
    } else if ($( "#operation" ).val() === "subtract") {
      $('#answer').text(firstNum - secondNum);
    } else if ($( "#operation" ).val() === "multiply") {
      $('#answer').text(firstNum * secondNum);
    } else if ($( "#operation" ).val() === "divide") {
      $('#answer').text(firstNum / secondNum);
    }
  });

    var validateForm = function(firstNum, secondNum){
    if (isNaN(firstNum)) {
        $('#number_one').attr("style", "border: 2px solid red;");
        $('#error').text("Please enter a number in the red field/s");
    } else if (isNaN(secondNum)) {
        $('#number_two').attr("style", "border: 2px solid red;");
        $('#error').text("Please enter a number in the red field/s");
    } else if (secondNum === 0) {
        $('#number_one').attr("style", "border: 2px solid red;");
        $('#error').text("Please enter a number other than 0");
    } else {
        $('#number_one').attr("style", "border: 1px solid black;");
        $('#number_two').attr("style", "border: 1px solid black;");
        $('#error').text("");
    }    
  }
});

// $( ":input" ).select(function() {
//   $( "div" ).text( "Something was selected" ).show().fadeOut( 1000 );
// });

// var validatesPresence = function(formField) {
//   if (formField.value.length === 0) {
//     formField.setAttribute("style", "border: 1px solid red;");

//   } else {
//     formField.setAttribute("style", "border: 1px solid black");
//   }
// }

// $("#w3s").attr("href","http://www.w3schools.com/jquery");

// $(function(){
//     $("#show_me").on('click', function(e) {
//     console.log(e);
//     $("#green_square").toggleClass("red");
//     $("#green_square").toggleClass("green");
//   });
// });

// document.forms[0].onsubmit = function() {
//   var firstNum = parseInt(document.getElementById("number_one").value);
//   var secondNum = parseInt(document.getElementById("number_two").value);
//   var operationSymbol = document.getElementById("operation").value;
//   console.log(firstNum)
//   console.log(secondNum)
//   console.log(operationSymbol)
//   calculate(firstNum, secondNum, operationSymbol);  
// }


// var calculate = function(firstNum, secondNum, operationSymbol) {
//   if (operationSymbol === "add") {
//     document.getElementById("answer").innerHTML = (firstNum + secondNum); 
//   } else if (operationSymbol === "subtract") {
//     document.getElementById("answer").innerHTML = (firstNum - secondNum);
//   } else if (operationSymbol === "multiply") {
//     document.getElementById("answer").innerHTML = (firstNum * secondNum);
//   } else if( operationSymbol === "divide") {
//     document.getElementById("answer").innerHTML = (firstNum / secondNum);
//   }
// }

