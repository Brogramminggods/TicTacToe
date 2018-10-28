var increaseScore = function(moveNr)
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