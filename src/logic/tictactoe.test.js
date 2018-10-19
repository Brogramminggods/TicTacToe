// tictactoe.test.js
const tictactoe = require('./tictactoe');

test("returns welcomeTogame with custom name", () => {
  expect(tictactoe("Mei")).toBe("Welcome To TicTacToe, Mei!");
});
