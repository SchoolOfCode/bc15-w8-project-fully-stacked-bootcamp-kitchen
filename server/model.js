// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../server/index.js";

export async function getDishes() {
  // Query the database and return all dishes

  // Define the SQL query to fetch all dishes from the 'dishes' table
  const queryText = "SELECT * FROM dishes";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getDishesByTag(tags) {
    // Query the database and return the dish with a matching id or null

    // Define the SQL query to fetch the dish with the specified id from the 'dishes' table
    const queryText = "SELECT * FROM dishes WHERE tag = $1";

    // Use the pool object to send the query to the database
    // passing the id as a parameter to prevent SQL injection
    const result = await pool.query(queryText, [tags]);

    // The rows property of the result object contains the retrieved records
    return result.rows[0] || null;
  }