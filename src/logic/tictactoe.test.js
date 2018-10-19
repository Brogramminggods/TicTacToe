// greeting.test.js
const tictactoe = require('./tictactoe');

test("returns greeting with custom name", () => {
  expect(greeting("Mei")).toBe("Welcome To TicTacToe, Mei!");
});
