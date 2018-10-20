// ./src/logic/ComputerLogic.jest.js

const computerMove = require("./ComputerLogic");


describe("Win conditions", () => {
	describe("In progress games", () => {
		// A blank game board 
		it("Should return false on a empty game board", () => {
			expect(computerMove([[0,0,0],
						   [0,0,0],
                           [0,0,0]], 1)).toEqual([[1,0,0],[0,0,0],[0,0,0]]);
		});
    })
});
