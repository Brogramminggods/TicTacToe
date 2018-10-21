const css = require('../css/app.css');
const hasWon = require("../logic/hasWon");

var moveNr = 0;
var gameState = 0;
var board = [[0,0,0],[0,0,0],[0,0,0]]; 
var htmlBoard = document.getElementsByClassName('cell');
/*
for(var i = 0; i < 9; i++) {
	htmlBoard[i].addEventListener("click", function() {ticTacToe(floor(i/3), (i%3));});
}
*/
htmlBoard[0].addEventListener("click", function() {ticTacToe(0, 0);});
htmlBoard[1].addEventListener("click", function() {ticTacToe(0, 1);});
htmlBoard[2].addEventListener("click", function() {ticTacToe(0, 2);});
htmlBoard[3].addEventListener("click", function() {ticTacToe(1, 0);});
htmlBoard[4].addEventListener("click", function() {ticTacToe(1, 1);});
htmlBoard[5].addEventListener("click", function() {ticTacToe(1, 2);});
htmlBoard[6].addEventListener("click", function() {ticTacToe(2, 0);});
htmlBoard[7].addEventListener("click", function() {ticTacToe(2, 1);});
htmlBoard[8].addEventListener("click", function() {ticTacToe(2, 2);});

function ticTacToe(row, col) {
	console.log("I clicked on a field");
	if(board[row][col] === 0){
		if(moveNr % 2 === 0) {
			// X's move
			htmlBoard[((row * 3) + col)].innerHTML = "X";
			board[row][col] = 1;
			if(hasWon(board)) {
				gameState = 1;
				console.log("X has won");
			}
		} else {
			// O's move
			htmlBoard[((row * 3) + col)].innerHTML = "O";
			board[row][col] = 2;
			if(hasWon(board)) {
				gameState = 2;
				console.log("O has won");
			}
		}
		moveNr++;
		//return "move was made";
	} else {
		// the square was not free
		//return "move was not made";
	}
	if(gameState === 0) {
		// The game is still in progress
	} else if(gameState === 1) {
		// X has won 
		console.log("Reseting board");
		reset();
	} else if(gameState === 2) {
		// O has won 
		console.log("Reseting board");
		reset();
	}
}

function reset() {
	moveNr = 0;
	gameState = 0;
	board = [[0,0,0],[0,0,0],[0,0,0]]; 
	for(var i = 0; i < 9; i++) {
		htmlBoard[i].innerHTML = "";
	}
}