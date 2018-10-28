// ./src/server/api.js
const express = require("express");
const router = express.Router();
const reset = require("../logic/reset");
const boardInsert = require("../logic/boardInsert");
//const greeting = require("../logic/index");

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

router.options("/", (req,res) =>{
  const options = {
    options: { get: ["/api/boardInsert/{Score}" ] }};
    res.status(200).send(options);
  });
  router.get("/boardInsert/:moveNr", (req, res) => {
    res.status(200).send({ boardInsert: boardInsert(req.params.moveNr) });
  });
  router.options("/", (req,res) =>{
    const options = {
      options: { get: ["/api/reset" ] }};
      res.status(200).send(options);
    });
  router.get("/reset", (req, res) => {
    res.status(200).send({ reset: reset() });
  });
  /*
  router.get("/increaseScore/:moveNr", (req, res) => {
    res.status(200).send({ increaseScore: increaseScore(req.params.moveNr) });
  });

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/greeting", "/api/greeting/{NAME}"] }
  };
  res.status(200).send(options);
});

router.get("/greeting/:name", (req, res) => {
  res.status(200).send({ greeting: greeting(req.params.name) });
});
*/
module.exports = router;