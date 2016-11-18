console.log("JS file is connected to HTML! Woo!")


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }
  console.log(board);
}

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png" alt="King of Hearts">';
	} else {
		this.innerHTML = '<img src="queen.png" alt="Queen of Spades">';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


function isMatch(cards) {
  if (cards[0] === cards[1]) {
  	window.alert("You found a match!");
} else {
  window.alert("Sorry, try again.");
}
}


createBoard();

/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/





