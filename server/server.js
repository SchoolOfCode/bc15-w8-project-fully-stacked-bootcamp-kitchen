import { app } from "../client/app.js";

const PORT = 3000;
//process.env.PORT;

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});