import express from "express";
import AddressController from "./app/controllers/AddressController";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/SessionController";
import CategoryController from "./app/controllers/CategoryController";
import PromotionController from "./app/controllers/PromotionController";
import admin from "./app/middlewares/admin";
import auth from './app/middlewares/auth';

const route = express.Router();

route.post("/users", UserController.store);
route.patch("/users", UserController.update);
route.delete("/users", UserController.destroy);
route.get("/user", UserController.single);

route.post("/users/:user_id/addresses", AddressController.store);

route.post("/authentication", AuthController.store);

route.get("/promotions", PromotionController.index);
route.post("/promotions", PromotionController.store);
route.patch("/promotions/:id", PromotionController.update);
route.delete("/promotions/:id", PromotionController.delete);

route.post("/categories",CategoryController.create);
route.get("/categories",CategoryController.index);
route.patch("/categories/:id", CategoryController.update);
route.delete("/categories/:id", CategoryController.delete);

export default route;


