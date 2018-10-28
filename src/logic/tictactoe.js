// ./src/logic/tictactoe.js
var tictactoe = function tictactoe(row, col, board, moveNr){
if(board[row][col] === 0){      //if no move has been made here, we go into the if statement
    if(moveNr % 2 === 0) {
        // X's move
        
        board[row][col] = 1;    
    } else {
        // O's move
        
        board[row][col] = 2;
    }
    return true;
}
    return false;
}
module.exports = tictactoe;