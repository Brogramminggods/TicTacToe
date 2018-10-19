// ./src/server/api.test.js
const request = require("supertest");
const api = require("./api");


describe("GET /tictactoe/:name endpoint", () => {
 it("should return a 200 OK status code", async () => {
 const res = await request(api).get("/tictactoe/_");
 expect(res.status).toBe(200);
 });
 
 it("should return the tictactoe hello message in a object", async () => {
 const res = await request(api).get("/tictactoe/Diana");
 expect(res.body.greeting).toBe("Welcome To TicTacToe, Diana!");
 });
});