// ./src/logic/setPlayerMove.js

function setPlayerMove(playerMoveDisplay, moveNr) {
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