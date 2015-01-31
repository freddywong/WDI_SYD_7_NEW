document.forms[0].onsubmit = function() {
  var firstNum = parseInt(document.getElementById("number_one").value);
  var secondNum = parseInt(document.getElementById("number_two").value);
  var operationSymbol = document.getElementById("operation").value;
  console.log(firstNum)
  console.log(secondNum)
  console.log(operationSymbol)
  calculate(firstNum, secondNum, operationSymbol);  
}


var calculate = function(firstNum, secondNum, operationSymbol) {
  if (operationSymbol === "add") {
    document.getElementById("answer").innerHTML = (firstNum + secondNum); 
  } else if (operationSymbol === "subtract") {
    document.getElementById("answer").innerHTML = (firstNum - secondNum);
  } else if (operationSymbol === "multiply") {
    document.getElementById("answer").innerHTML = (firstNum * secondNum);
  } else if( operationSymbol === "divide") {
    document.getElementById("answer").innerHTML = (firstNum / secondNum);
  }
}