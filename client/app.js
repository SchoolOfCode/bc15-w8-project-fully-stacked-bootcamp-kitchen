import express from "express";
import morgan from "morgan";
import { dishesRoutes } from "../dishesRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/dishes", dishesRoutes);

const PORT = process.env.PORT;

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});


export default app;