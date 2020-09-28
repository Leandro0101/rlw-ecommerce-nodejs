import express from "express";
import routes from "./routes";
const app = express();
import "./database";
app.use(express.json());
app.use('/', routes);
app.listen(3001);