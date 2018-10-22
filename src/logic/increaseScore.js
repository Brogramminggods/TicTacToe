var increaseScore = function(xScore, yScore, moveNr)
{
    if((moveNr%2+1) == 1)
    {
        yScore.innerHTML++;
        return;
    }
    else{
        xScore.innerHTML++;
        return;
    }
}
module.exports = increaseScore;