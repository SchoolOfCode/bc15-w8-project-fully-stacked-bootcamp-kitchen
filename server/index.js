import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Retrieve the database connection string from the environment variable
const connectionString = process.env.DATABASE_URL;

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error(
    "No DATABASE_URL defined. Did you load in your env variables?"
  );
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
  // Pass the connection string to the pool, so it knows how to connect to your database
  connectionString,
});

