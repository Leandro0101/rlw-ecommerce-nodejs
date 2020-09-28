import express from "express";
import AddressController from "./app/controllers/AddressController";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import CategoryController from "./app/controllers/CategoryController";
import auth from './app/middlewares/auth';

const route = express.Router();

route.post("/users", auth, UserController.store);
route.post("/users/:user_id/addresses", AddressController.store);

route.post("/authentication", AuthController.authentication);

route.post("/categories", CategoryController.create);


export default route;