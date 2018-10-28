// ./src/server/api.test.js
const request = require("supertest");
const app = require("../app");

describe("OPTIONS /api", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).options("/api");
    expect(res.status).toBe(200);
  });
});

describe("GET /api", () => {
  it("should return 405 status code and an error message", async () => {
    const res = await request(app).get("/api");
    expect(res.status).toBe(405);
    expect(res.body).toHaveProperty("error");
  });
});

describe("GET /api/boardInsert/2", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).get("/api/boardInsert/2");
    expect(res.status).toBe(200);
    expect(res.body.boardInsert).toBe("O");
  });
});
describe("GET /api/hasWonAPI", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).get("/api/hasWonAPI/1/0/0/0/1/1/0/1/0");
    expect(res.status).toBe(200);
    expect(res.body.hasWonAPI).toBe(false);
  });
});
describe("GET /api/hasWonAPI", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).get("/api/hasWonAPI/1/1/1/0/0/0/0/1/1");
    expect(res.status).toBe(200);
    expect(res.body.hasWonAPI).toBe(true);
  });
});

describe("GET /api/reset", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).get("/api/reset");
    expect(res.status).toBe(200);
    expect(res.body.reset).toEqual([[0,0,0],
                                    [0,0,0],
                                    [0,0,0]]);
  });
});

