const hasWon = require("./hasWon"); //Has won is used to see if anyone has won
const convertToBoard = require("./convertToBoard");  //This function converts the string fields into integer 2d array

function hasWonAPI(field0, field1, field2, field3, field4, field5, field6, field7, field8){             
    var board = convertToBoard(field0, field1, field2, field3, field4, field5, field6, field7, field8); //convert to int 2d arr
    return hasWon(board);               //return true if someone has won, else return false
}
module.exports = hasWonAPI;