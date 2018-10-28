const reset = require('./reset');

describe("Function that returns a empty 2D array", () => {
    // A blank game board 
    it("Should return an empty array", () => {
        expect(reset()).toEqual([[0,0,0],
                              [0,0,0],
                              [0,0,0]]);
    })
});