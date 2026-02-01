import express from "express";
const app = express();
import { bootstrap } from "./app.controller";
const port = 3000;
bootstrap(app, express);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
