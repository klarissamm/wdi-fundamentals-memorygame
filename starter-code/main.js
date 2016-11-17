console.log("JS file is connected to HTML! Woo!")


var cards = ['queen', 'queen', 'king', 'king'];

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/*if (cardOne === cardTwo || cardThree === cardFour) {
  window.alert("You found a match!");
} else if (cardTwo === cardFour) {
	window.alert("You found a match!");
} else {
  window.alert("Sorry, try again.");
}*/

var board = document.getElementById('game-board');
console.log(board);
var createCards = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    board.appendChild(cardElement);
  }
};
createCards();


