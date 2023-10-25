import express from "express";
import morgan from "morgan";
import { dishesRoutes } from "../dishesRoutes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/dishes", dishesRoutes);