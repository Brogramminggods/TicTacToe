const css = require('../css/app.css');
const hasWon = require("../logic/hasWon");
const tictactoe = require("../logic/tictactoe");
const sumOf2D = require("../logic/sumOf2D");

var moveNr = 0;
var board = [[0,0,0],[0,0,0],[0,0,0]]; 
var htmlBoard = document.getElementsByClassName('cell');
/*
for(var i = 0; i < 9; i++) {
	htmlBoard[i].addEventListener("click", function() {ticTacToe(floor(i/3), (i%3));});
}
*/
htmlBoard[0].addEventListener("click", function() {playerMove(0, 0);});
htmlBoard[1].addEventListener("click", function() {playerMove(0, 1);});
htmlBoard[2].addEventListener("click", function() {playerMove(0, 2);});
htmlBoard[3].addEventListener("click", function() {playerMove(1, 0);});
htmlBoard[4].addEventListener("click", function() {playerMove(1, 1);});
htmlBoard[5].addEventListener("click", function() {playerMove(1, 2);});
htmlBoard[6].addEventListener("click", function() {playerMove(2, 0);});
htmlBoard[7].addEventListener("click", function() {playerMove(2, 1);});
htmlBoard[8].addEventListener("click", function() {playerMove(2, 2);});

function playerMove(row, col) {
  var moveMade = tictactoe(row, col, board, htmlBoard, moveNr);
  if(moveMade = true)
  {
    moveNr++;
    console.log(moveNr);
    if(hasWon(board)) {
      console.log("Player " + moveNr%2+1 +" has won");
      reset();
    }
}
  else{
    return;
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