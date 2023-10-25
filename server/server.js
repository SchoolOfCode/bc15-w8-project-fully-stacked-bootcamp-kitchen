import { app } from "../client/app.js";

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});