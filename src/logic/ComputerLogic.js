// ./src/logic/ComputerLogic.js

var computerMove = function(board, xOrO){
    while(true){
        var row = Math.floor(Math.random() * 3); 
        var col = Math.floor(Math.random() * 3); 
        if(board[row][col] == 0)
        {
            board[0][0] = xOrO;
            return board;
        }
    }
}
module.exports = computerMove;