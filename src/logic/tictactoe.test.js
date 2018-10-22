const tictactoe = require('./tictactoe');

describe("Sums the arr", () => {
    // A blank game board 
    it("Sums a empty board", () => {
        expect(tictactoe(0,0,[[0,0,0],
                        [0,0,0],
                        [0,0,0]], 0, 0)).toBe(true);
    })
    it("sums a board with mixed numbers", () => {
        expect(tictactoe(0,0,[[2,1,1],
                        [1,0,2],
                        [0,2,1]],0,0)).toBe(false);
    })
});