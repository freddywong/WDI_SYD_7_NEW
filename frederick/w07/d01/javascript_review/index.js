// FUNCTIONS

var vito = function(greeting) {
  console.log(greeting + " Vito");
};

vito("Hello");

function vito() {

}

// CONSTRUCTORS
var Todo = function(attributes) {
  this.text = attributes.text;
}

var myTodo = new Todo({text: "Do the dishes" });

//OBJECTS (Known as hashes in Ruby)
var myObject = {
  jack: "21",
  wolf: "Unknown",
  displayAges: function() {
    console.log(this.jack);
    console.log(this.wolf);    
  }
}

myObject.displayAges();

// console.log(myObject["jack"]);
// console.log(myObject["wolf"]);

var calculator = {
  calculation: function(number1, number2, symbol) {
    if (symbol === "plus"){
      console.log(number1 + number2);
    } else if (symbol === "minus") {
      console.log(number1 - number2);
    } else if (symbol === "multiply") {
      console.log(number1 * number2);
    } else if (symbol === "divide") {
      console.log(number1 / number2);
    }
  }
}

calculator.calculation(3,5, "multiply");