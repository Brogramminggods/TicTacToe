// ./src/logic/setPlayerMove.js
//Function that changes the player move from X to Y or reverse
function setPlayerMove(moveNr) {

    if((moveNr%2+1) == 1)
    {
        document.getElementById('playerTurnDisplay').innerHTML = "X, it's your turn!";
        return;
    }
    else{
        document.getElementById('playerTurnDisplay').innerHTML = "Y, it's your turn!";
        return;
    }
}

module.exports = setPlayerMove;