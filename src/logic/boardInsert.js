// ./src/logic/boardInsert.js

function boardInsert(row, col, htmlBoard, moveNr) {
    if((moveNr%2)+1 === 1){ 
    htmlBoard[((row * 3) + col)].innerHTML = "O";
    }
    else{
    htmlBoard[((row * 3) + col)].innerHTML = "X";  
    }  
}

module.exports = boardInsert;