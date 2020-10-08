import express from "express";
import UserController from "../app/controllers/UserController";
import auth from '../app/middlewares/auth';
import AuthController from "../app/controllers/SessionController";
import routerAuth from "./auth";

const routerUser = express.Router();

routerUser.post("/users", UserController.store);
routerUser.use(auth);
routerUser.get("/user", UserController.show);
routerUser.patch("/users", UserController.update);
routerUser.delete("/users", UserController.destroy);

export default routerUser;