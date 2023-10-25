import express from "express";

import * as controller from "./server/controller.js";

export const dishesRoutes = express.Router();

dishesRoutes.get("/", controller.getDishes);

dishesRoutes.get("/:tag", controller.getDishesByTag);