// ./src/logic/hasWon.test.js
const hasWon = require("./hasWon");

describe("Win conditions", () => {
	describe("In progress games", () => {
		// A blank game board 
		it("Should return false on a empty game board", () => {
			expect(hasWon([[0,0,0],
						   [0,0,0],
						   [0,0,0]])).toBe(false);
		});
		
		// A in progress board
		it("Should return false on a empty game board", () => {
			expect(hasWon([[1,0,0],
						   [0,1,0],
						   [0,0,2]])).toBe(false);
		});
	});
	
	describe("Won games", () => {
		describe("Vertical victory", () => {
			// A completed game board 
			it("Should return true on a vertical victory", () => {
				expect(hasWon([[1,1,1],
							   [2,0,0],
							   [0,2,0]])).toBe(true);
			});

			// A completed game board 
			it("Should return true on a vertical victory", () => {
				expect(hasWon([[2,2,1],
							   [1,1,1],
							   [1,2,2]])).toBe(true);
			});

			// A completed game board 
			it("Should return true on a vertical victory", () => {
				expect(hasWon([[2,0,0],
							   [0,2,0],
							   [1,1,1]])).toBe(true);
			});
		});

		describe("Horizontal victory", () => {
			// A completed game board 
			it("Should return true on a horizontal victory", () => {
				expect(hasWon([[1,0,0],
							   [1,2,2],
							   [1,0,0]])).toBe(true);
			});

			// A completed game board 
			it("Should return true on a horizontal victory", () => {
				expect(hasWon([[1,2,0],
							   [0,2,1],
							   [0,2,0]])).toBe(true);
			});

			// A completed game board 
			it("Should return true on a horizontal victory", () => {
				expect(hasWon([[0,2,1],
							   [2,0,1],
							   [0,0,1]])).toBe(true);
			});
		});
		
		describe("Diagonal victory", () => {
			// A completed game board 
			it("Should return true on a diagonal victory", () => {
				expect(hasWon([[1,0,2],
							   [0,1,0],
							   [0,2,1]])).toBe(true);
			});

			// A completed game board 
			it("Should return true on a diagonal victory", () => {
				expect(hasWon([[1,1,2],
							   [0,2,0],
							   [2,1,1]])).toBe(true);
			});
		});
	});
});
