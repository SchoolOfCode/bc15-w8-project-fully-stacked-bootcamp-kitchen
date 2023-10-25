import express from "express";
import morgan from "morgan";
import { dishesRoutes } from "../dishesRoutes.js";
import cors from "cors";

export const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use("/dishes", dishesRoutes);
