import express from "express";
import UserController from "../app/controllers/UserController";
import auth from '../app/middlewares/auth';

const routerUser = express.Router();

routerUser.post("/users",  UserController.store);
routerUser.get("/user", auth,UserController.show);
routerUser.patch("/users", auth, UserController.update);
routerUser.delete("/users", auth, UserController.destroy);

export default routerUser;