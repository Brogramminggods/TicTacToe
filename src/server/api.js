// ./src/server/api.js
const express = require("express");
const app = express();
//const tictactoe = require("../logic/tictactoe");

app.get("/tictactoe", (req, res) => {
    res.status(200);
    res.send();
});

module.exports = app;
