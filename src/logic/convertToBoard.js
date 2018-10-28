
function convertToBoard(field0, field1, field2, field3, field4, field5, field6, field7, field8){
    var board = [[field0,field1,field2],[field3,field4,field5],[field6,field7,field8]]; 
    for(i = 0; i<board.length; i++)
    {
        for(j = 0; j<board[i].length; j++)
        {
            board[i][j] = parseInt(board[i][j])
        }
    }
    return board;
}
module.exports = convertToBoard;