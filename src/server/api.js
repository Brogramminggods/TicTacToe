// ./src/server/api.js
const express = require("express");
const router = express.Router();
const reset = require("../logic/reset");
const boardInsert = require("../logic/boardInsert");
const hasWonAPI = require("../logic/hasWonAPI");
const increaseScore = require("../logic/increaseScore");
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
  router.get("/increaseScore/:moveNr", (req, res) => {
    res.status(200).send({ increaseScore: increaseScore(req.params.moveNr) });
  });
  router.get("/hasWonAPI/:field0/:field1/:field2/:field3/:field4/:field5/:field6/:field7/:field8", (req, res) => {
    res.status(200).send({ hasWonAPI: hasWonAPI(req.params.field0, req.params.field1, req.params.field2, req.params.field3, req.params.field4, req.params.field5, req.params.field6, req.params.field7, req.params.field8 ) });
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