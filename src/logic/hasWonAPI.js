const hasWon = require("./hasWon");
const convertToBoard = require("./convertToBoard");

function hasWonAPI(field0, field1, field2, field3, field4, field5, field6, field7, field8){
    var board = convertToBoard(field0, field1, field2, field3, field4, field5, field6, field7, field8);
    return hasWon(board);
}
module.exports = hasWonAPI;