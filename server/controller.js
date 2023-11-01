// Import modle from "./server/model.js"
import * as model from "./model.js";
// Import "app" module from "./client/app.js"
import app from "./app.js";
// Import the Express framework
import express from "express";
// Import and configure the "dotenv" module to load environment variables from a .env file
import dotenv from "dotenv";
dotenv.config();

// Define an async function "getDishes" to handle HTTP GET requests
export async function getDishes(req, res) {
	// Call the "getDishes" function from the "model" module and await the result
	const dishes = await model.getDishes();
	// Send a JSON response with status 200 and the retrieved dishes data
	res.status(200).json({ status: "success", data: dishes });
}

//const app = express();
/*
export async function getDishesByTag(req, res) {
	const tags = req.params.tags;
	const dishes = await model.getDishesByTag(tags);
	// Assume 404 status if the dish is not found
	if (!dishes) {
		return res
			.status(404)
			.json({ status: "fail", data: { msg: "Dish not found" } });
	}
	res.status(200).json({ status: "success", data: dishes });
}
*/
