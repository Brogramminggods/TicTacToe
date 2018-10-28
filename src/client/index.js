//const css = require('../css/app.css');
const tictactoe = require("../logic/tictactoe");
const increaseScore = require("../logic/increaseScore");
const setPlayerMove = require("../logic/setPlayerMove");

var moveNr = 0;
var hasWon = false;
var board = [[0,0,0],[0,0,0],[0,0,0]]; 
var htmlBoard = document.getElementsByClassName('cell');
var xScore = document.getElementById('XplayerScoreDisplay');
var yScore = document.getElementById('YplayerScoreDisplay');
var playerTurnDisplay = document.getElementById('playerTurnDisplay');


htmlBoard[0].addEventListener("click", function() {playerMove(0, 0);});
htmlBoard[1].addEventListener("click", function() {playerMove(0, 1);});
htmlBoard[2].addEventListener("click", function() {playerMove(0, 2);});
htmlBoard[3].addEventListener("click", function() {playerMove(1, 0);});
htmlBoard[4].addEventListener("click", function() {playerMove(1, 1);});
htmlBoard[5].addEventListener("click", function() {playerMove(1, 2);});
htmlBoard[6].addEventListener("click", function() {playerMove(2, 0);});
htmlBoard[7].addEventListener("click", function() {playerMove(2, 1);});
htmlBoard[8].addEventListener("click", function() {playerMove(2, 2);});

function playerMove(row, col) {
  var moveMade = tictactoe(row, col, board, moveNr);
  if(moveMade == true)
  {
    moveNr++;
      fetch("/api/boardInsert/"+moveNr)
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        htmlBoard[row*3+col].innerHTML = data.boardInsert;
      });
      console.log(board[0][0]);
      fetch("/api/hasWonAPI/"+board[0][0]+"/"+board[0][1]+"/"+board[0][2]+"/"+board[1][0]+"/"+board[1][1]+"/"+board[1][2]+"/"+board[2][0]+"/"+board[2][1]+"/"+board[2][2])
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        console.log(data);
        hasWon = data.hasWonAPI;
      })
      if(hasWon || moveNr == 9)
      {
        fetch("/api/reset")
        .then(function(res){
          return res.json();
        })
        .then(function(data){
          board = data.reset;
          moveNr = 0;
          for(var i = 0; i < 9; i++) {
            htmlBoard[i].innerHTML = "";
          }
        });
      }
    setPlayerMove(playerTurnDisplay, moveNr);
}
  else{
    return;
  }
}