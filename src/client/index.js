const tictactoe = require("../logic/tictactoe");
const setPlayerMove = require("../logic/setPlayerMove");
const victoryMessage = require("../logic/victoryMessage");
var moveNr = 0;
var hasWon = false;
var board = [[0,0,0],[0,0,0],[0,0,0]];
var resetButton = document.getElementById("resetButton");     //The reset button element
var htmlBoard = document.getElementsByClassName('cell');      //This is the TicTacToe HTML board
var xScore = document.getElementById('XplayerScoreDisplay');  //This is the element that keeps score for X
var yScore = document.getElementById('YplayerScoreDisplay');  //This is the element that keeps score for Y

resetButton.addEventListener("click", function() {resetBoard();});      //Event Listener for the reset button
htmlBoard[0].addEventListener("click", function() {playerMove(0, 0);}); //Event listener for every field in the
htmlBoard[1].addEventListener("click", function() {playerMove(0, 1);}); //Tic tac toe field 
htmlBoard[2].addEventListener("click", function() {playerMove(0, 2);}); //The prior number stands for row
htmlBoard[3].addEventListener("click", function() {playerMove(1, 0);}); //the latter stands for collum
htmlBoard[4].addEventListener("click", function() {playerMove(1, 1);});
htmlBoard[5].addEventListener("click", function() {playerMove(1, 2);});
htmlBoard[6].addEventListener("click", function() {playerMove(2, 0);});
htmlBoard[7].addEventListener("click", function() {playerMove(2, 1);});
htmlBoard[8].addEventListener("click", function() {playerMove(2, 2);});

async function playerMove(row, col) {                  //We have this Async so we can await the fetch requests
  
  var moveMade = tictactoe(row, col, board, moveNr);   //We could not figure out how to do this with API :$
  if(moveMade == true)                                 
  {
    if(moveNr == 9 || hasWon == true){
      return;
    }
    moveNr++;                                          //increase the move
      fetch("/api/boardInsert/"+moveNr)                //Insert into the html board
      .then(function(res){ 
        return res.json();
      })
      .then(function(data){
        htmlBoard[row*3+col].innerHTML = data.boardInsert;
      });     //
      await fetch("/api/hasWonAPI/"+board[0][0]+"/"+board[0][1]+"/"+board[0][2]+"/"+board[1][0]+"/"+board[1][1]+"/"+board[1][2]+"/"+board[2][0]+"/"+board[2][1]+"/"+board[2][2])
      .then(function(res){    //This fetch logic returns true if either player has won
      return res.json();
      })
      .then(function(data){
        hasWon = data.hasWonAPI;
      });
      if( hasWon || moveNr == 9)  //if it is a draw or either player won we go into this if statement
      {
        if(moveNr != 9)           //if either player won, we incrament their score
        {
          fetch("/api/increaseScore/" + moveNr)
          .then(function(res){
            return res.json();
          })
          .then(function(data){
            if(data.increaseScore === 'X')
            {
              xScore.innerHTML++;
            }
            else{
              yScore.innerHTML++;
            }
          })
        victoryMessage(moveNr);
        }
        return;
      }
    setPlayerMove(moveNr); //just html manipulation turns x -> y and y->x
}
  else{
    return;
  }
}



function resetBoard()   //this resets the tictactoe board, both the html and the invisible one
{
  fetch("/api/reset")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    board = data.reset;
    moveNr = 0;
    setPlayerMove(moveNr);
    hasWon = false;
    for(var i = 0; i < 9; i++) {
      htmlBoard[i].innerHTML = "";
    }
  });
}