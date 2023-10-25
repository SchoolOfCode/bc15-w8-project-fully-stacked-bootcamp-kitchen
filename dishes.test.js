import { test, expect } from "vitest";
import request from "supertest"; // Import the request function from the supertest library
import app from "./extraapp.js";
// import { pool } from "./server/index.js";

test("GET /dishes", async  () => { // Define a test case for making a GET request to /api/health
    const response = await request(app).get("/dishes"); // Send a GET request to the specified route and store the response
    console.log(response.body); // Log the response body to the console
    expect(response.status).toBe(200); // Assert that the HTTP response status code is 200
  });