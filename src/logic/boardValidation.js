// ./src/logic/boardValidation.js

function boardValidation(board) {
	// Checking if the board is an Array 
	if(board.constructor !== Array) {
		throw "Invalid game board";
	}
	// Checking if the board is a 2D Array
	if(board[0].constructor !== Array)  {
		throw "Invalid game board";
	}
	// Checking if the board has the correct dimensions
	if((board.length !== 3) && (board[0].length !== 3)) {
		throw "Invalid game board";
	}
	// Checking if the board values are of the correct type
	if(board[0][0].constructor !== Number)  {
		throw "Invalid game board";
	}
}

module.exports = boardValidation;