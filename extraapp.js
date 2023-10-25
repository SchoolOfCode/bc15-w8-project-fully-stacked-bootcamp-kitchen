import express from "express";
import logger from "morgan";
import dishesRoutes from "./dishesRoutes.js"
const app = express();
app.use(express.json());
app.use(logger("dev"));

app.get("/dishes", (req, res) => {
    res.json({
      success: true,
      payload: "API is running correctly",
    });
  });
