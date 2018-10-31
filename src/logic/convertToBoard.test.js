// ./src/logic/hasWon.test.js
const convertToBoard = require("./convertToBoard");
	
describe("Convert to a tic board", () => {
    // A completed game board 
    it("Should return a 2D 3x3 array", () => {
        expect(convertToBoard(1,1,1,2,0,0,0,2,0)).toEqual([[1,5,1],
                                                           [2,0,0],
                                                           [0,2,0]]);
    });
});
