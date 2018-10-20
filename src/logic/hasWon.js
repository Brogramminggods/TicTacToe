// ./src/logic/hasWon.js

function hasWon(board) {	
	/** Assuming the default value is 0 and Array[col][row]*/
	// Vertical win conditions 
		   if ((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && (board[0][0] !== 0)) {
		return true;
	} else if ((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][0] !== 0)) {
		return true;
	} else if ((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][0] !== 0)) {
		return true;
	
	// Horizontal win conditions
	} else if ((board[0][0] === board[1][0]) && (board[0][0] === board[2][0]) && (board[0][0] !== 0)) {
		return true;
	} else if ((board[0][1] === board[1][1]) && (board[0][1] === board[2][1]) && (board[0][1] !== 0)) {
		return true;
	} else if ((board[0][2] === board[1][2]) && (board[0][2] === board[2][2]) && (board[0][2] !== 0)) {
		return true;
		
	// Diagonal win conditions 
	} else if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && (board[1][1] !== 0)) {
		return true;
	} else if ((board[2][0] === board[1][1]) && (board[2][0] === board[0][2]) && (board[1][1] !== 0)) {
		return true;
	}
	
	// All win conditions fail
	return false;
}

module.exports = hasWon;