// ./src/logic/hasWon.test.js
const hasWon = require("./hasWon");

// Invalid game board 
it("Should throw error when passed an invalid game board", () => {
	expect(() => {
		hasWon("");
	}).toThrow();
});
