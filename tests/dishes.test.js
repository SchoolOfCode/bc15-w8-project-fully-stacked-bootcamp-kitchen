// Import test and expect functions from the "vitest" library
import { test, expect } from "vitest";
// Import the request function from the "supertest" library
import request from "supertest";
// Import the "app" module from the "./client/app.js" file
import app from "../client/app.js";

// Define a test case named "GET /dishes"
//Send a GET request to the "/dishes" endpoint using the "app" instance
// Log the response body to the console
// Expect the HTTP response status code to be 200
test("GET /dishes", async () => {
  const response = await request(app).get("/dishes");
  console.log(response.body);
  expect(response.status).toBe(200);
});





//import express from "express"; // Import Express
//app.use(express.json());

 //app.use("/dishes", dishesRoutes);

// Export your Express app so it can be used in your server
//module.exports = app;
