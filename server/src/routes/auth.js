import express from "express";
import AuthController from "../app/controllers/SessionController";

const routerAuth = express.Router();

routerAuth.post("/authentication", AuthController.store);

export default routerAuth;