const boardInsert = require('./boardInsert');

describe("Returns X or O", () => {
    // A blank game board 
    it("Should return X", () => {
        expect(boardInsert(0)).toBe('O');
    })
    it("Should return O", () => {
        expect(boardInsert(1)).toBe('X');
    })
});