var increaseScore = function(moveNr)
//If X won we return O, else we return X
{
    if((moveNr%2+1) == 1)
    {
        return 'O';
    }
    else{
        return 'X';
    }
}
module.exports = increaseScore;