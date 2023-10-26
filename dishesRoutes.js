// Import the Express framework
import express from "express";
// Import the controller module
import * as controller from "./controller.js";
// Create a new router instance for defining routes
export const dishesRoutes = express.Router();
// Define a route that handles GET requests for the "/dishes" endpoint
dishesRoutes.get("/", controller.getDishes);






//dishesRoutes.get("/:tags", controller.getDishesByTag);


