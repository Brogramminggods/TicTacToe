const sumOf2D = require('./sumOf2D');

describe("Sums the arr", () => {
    // A blank game board 
    it("Sums a empty board", () => {
        expect(sumOf2D([[0,0,0],
                        [0,0,0],
                        [0,0,0]])).toBe(0);
    })
    it("sums a board with mixed numbers", () => {
        expect(sumOf2D([[2,1,1],
                        [1,0,2],
                        [0,2,1]])).toBe(2+1+1+1+2+2+1);
    })
});