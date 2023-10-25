import express from "express";

import * as controller from "./controller.js";

export const dishesRoutes = express.Router();

dishesRoutes.get("/", controller.getDishes);

dishesRoutes.get("/:id", controller.getDishesByTag);