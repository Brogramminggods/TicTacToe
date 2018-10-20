// ./src/logic/ComputerLogic.jest.js

const computerMove = require("./ComputerLogic");
const sumOf2D = require('./sumOf2D');
	describe("Testing RNG insert function", () => {
		// A blank game board 
		it("Should return 1 on a empty game board", () => {
			expect(sumOf2D(computerMove([[0,0,0],
						                 [0,0,0],
                                         [0,0,0]], 1))).toEqual(1);
        });
        it("Should return 9 on a 8 square game board", () => {
			expect(sumOf2D(computerMove([[1,1,1],
				                         [1,1,1],
                                         [0,1,1]], 1))).toEqual(9);
        });
        
    });
