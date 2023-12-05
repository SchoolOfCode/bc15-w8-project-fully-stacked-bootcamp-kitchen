// Import the Express framework
import express from "express";
// Import "morgan" middleware for logging
import morgan from "morgan";
// Import "dishesRoutes" from an external file
import { dishesRoutes } from "./dishesRoutes.js";
// Import "cors" middleware for handling cross-origin requests
import cors from "cors";

// Create an Express application instance
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for this app - front to back
app.use(cors());
// Use middleware for logging with the "dev" format
app.use(morgan("dev"));
// Parse incoming JSON data
app.use(express.json());
// Attach the routes defined in "dishesRoutes" to the "/dishes" endpoint
app.use("/dishes", dishesRoutes);

// Get port from environment variables
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Start Express server & listen on the specified port
app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});

// Export the Express app to be used in other parts of the application
export default app;
