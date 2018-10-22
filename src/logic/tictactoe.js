var tictactoe = function tictactoe(row, col, board, htmlBoard, moveNr){
if(board[row][col] === 0){
    if(moveNr % 2 === 0) {
        // X's move
        
        board[row][col] = 1;
    } else {
        // O's move
        board[row][col] = 2;
    }
    moveNr++;
    return true;
}
    return false;
}
module.exports = tictactoe;