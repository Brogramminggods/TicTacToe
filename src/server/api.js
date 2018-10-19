// ./src/server/api.js
const express = require("express");
const app = express();
const greeting = require("../logic/tictactoe");

app.get("/tictactoe/:name", (req, res) => {
	res.status(200);
	res.send({greeting : "Welcome To TicTacToe, " + req.params.name + "!"});
 });

module.exports = app;
