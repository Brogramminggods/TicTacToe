// ./src/logic/boardInsert.js

function boardInsert(htmlBoard, Movenr) {
    htmlBoard[((row * 3) + col)].innerHTML = "O";
    
    htmlBoard[((row * 3) + col)].innerHTML = "X";    
}

module.exports = boardValidation;