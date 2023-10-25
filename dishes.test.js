import { test, expect } from "vitest";
import request from "supertest";
import express from "express"; // Import Express
import app from "./client/app.js"


const app = express();
app.use(express.json());

const dishesRoutes = require("./dishesRoutes.js");
app.use('/dishes', dishesRoutes);

test("GET /dishes", async () => {
  const response = await request(app).get("/dishes");
  console.log(response.body);
  expect(response.status).toBe(200);
});

// Export your Express app so it can be used in your server
//module.exports = app;

