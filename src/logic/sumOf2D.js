var sumOf2D = function(board)
{
    var sum = 0;
    for(i = 0; i<board.length; i++)
    {
        for(j = 0; j<board[i].length; j++)
        {
            sum = sum + board[i][j];
        }
    }
    return sum;
}
module.exports = sumOf2D;