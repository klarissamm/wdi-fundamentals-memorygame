console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo || cardThree === cardFour) {
  window.alert("You found a match!");
} else if (cardTwo === cardFour) {
	window.alert("You found a match!");
} else {
  window.alert("Sorry, try again.");
}


