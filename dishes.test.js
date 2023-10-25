import { test, expect } from "vitest";
import morgan from "morgan";
import request from "supertest"; // Import the request function from the supertest library
import { app } from "./client/app.js";
//import pg from "pg";
//import dotenv from "dotenv";
//import { app } from "./controller.js";
//import { defineConfig } from ".vitest.config.js";
const PORT = process.env.PORT;
app.use(morgan("dev"));
import { pool } from "./server/index.js";



test("GET /dishes", async  () => {
   // Define a test case for making a GET request to /api/health
    const response = await request(app).get("/dishes"); // Send a GET request to the specified route and store the response
    console.log(response.body); // Log the response body to the console
    expect(response.status).toBe(200); // Assert that the HTTP response status code is 200
  });
