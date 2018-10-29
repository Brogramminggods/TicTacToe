// ./src/logic/victoryMessage.js
//returns a Victory Message
function victoryMessage(moveNr) {

    if((moveNr%2) == 1)
    {
        document.getElementById('playerTurnDisplay').innerHTML = "Player X, you have slain mr.Y!";
        return;
    }
    else{
        document.getElementById('playerTurnDisplay').innerHTML = "Player Y, your mortal enemy has been vanquished!";
        return;
    }
}

module.exports = victoryMessage;