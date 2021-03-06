//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters = _.shuffle(lettersSmall);

//counter for number of times card has been clicked.
var counter = 0;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';
       

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  

  $("#game").on("click", "div", function() {
      var index = parseInt($(this).attr("id"));
      var whichLetter = letters[index];
      $(this).text(whichLetter);
      

      if (lastCard === whichLetter) {
        $("div:contains(lastCard)").addClass("found");
        $("div:contains(whichLetter)").addClass("found");

      };

      lastId = index;
      lastCard = whichLetter;


      // if (counter === 1) {
      //   var firstLetter = whichLetter;
      // };
      // if (counter === 2) {
      //   var secondLetter = whichLetter;
      //       debugger;
      // };



            // debugger;
  });

  $("#small").on("click", function() {
    counter = 0;
    var $game = $("#game").html("");

    _.each(letters, function(letter, index) {
      $("<div></div>")
        .addClass("column")
        .appendTo($game)
        .attr("id", index);
    });
  });
});

// Initializes the game and creates the board
function startGame(letters) {

}


// Flips a card and checks for a match
function cardClick() {

}

//Add hoverclass to cards.
function hovering() {

}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}