// ./src/logic/boardValidation.test.js
const hasWon = require("./boardValidation");

describe("Invalid game boards", () => {
	// Invalid game board 
	it("Should throw error when passed an invalid game board", () => {
		expect(() => {
			hasWon("");
		}).toThrow();
	});

	// Invalid game board 
	it("Should throw error when passed an invalid game board", () => {
		expect(() => {
			hasWon(["A","invalid","game","board"]);
		}).toThrow();
	});

	// Invalid game board 
	it("Should throw error when passed an invalid game board", () => {
		expect(() => {
			hasWon([["A","invalid","game","board"],
					["A","invalid","game","board"],
					["A","invalid","game","board"],
					["A","invalid","game","board"]]);
		}).toThrow();
	});
});