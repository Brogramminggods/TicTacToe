// ./src/server/api.js
// src/api.js
const express = require("express");
const app = express();
const greeting = require("../logic/tictactoe");
app.get("/tictactoe/:name", (req, res) => {
    res.status(200);
    res.send({greeting : "Welcome To TicTacToe, " + req.params.name + "!"});
// Fill in your code that:
// 1. set's the status code to 200
// 2. and returns an object with the greeting
// Hint: `req.params.name
});
module.exports = app;
