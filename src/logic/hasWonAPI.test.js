const hasWonAPI = require('./hasWonAPI');

describe("Function that returns if the game is won or not", () => {
    // A blank game board 
    it("Should return false", () => {
        expect(hasWonAPI(1,0,0,0,1,1,1,0,0)).toBe(false);
    })
    it("Should return true", () => {
        expect(hasWonAPI(1,0,0,1,1,1,1,0,0)).toBe(true);
    })
});