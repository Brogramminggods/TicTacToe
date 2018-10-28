// ./src/logic/convertToBoard.js

//turns 9 string numbers into a tic tac toe 2d int array
function convertToBoard(field0, field1, field2, field3, field4, field5, field6, field7, field8){
    var board = [[field0,field1,field2],[field3,field4,field5],[field6,field7,field8]];  //create a string array from input
    for(i = 0; i<board.length; i++)                 //loop through the 2d string array
    {
        for(j = 0; j<board[i].length; j++)
        {
            board[i][j] = parseInt(board[i][j])      //turn from string to int
        }
    }
    return board;                                    //return the new board
}
module.exports = convertToBoard;