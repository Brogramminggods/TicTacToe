// tictactoe.test.js
const tictactoe = require('./tictactoe');

test("returns welcomeTogame with custom name", () => {
  expect(greeting("Mei")).toBe("Welcome To TicTacToe, Mei!");
});