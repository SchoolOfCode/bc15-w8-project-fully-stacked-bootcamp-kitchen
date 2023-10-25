// Import the pg (node-postgres) library
import pg from "pg";

// Retrieve the database connection string from environment variables
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
