import express from "express";
import AddressController from "./app/controllers/AddressController";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import CategoryController from "./app/controllers/CategoryController";
import PromotionController from "./app/controllers/PromotionController";
import auth from './app/middlewares/auth';

const route = express.Router();


route.post("/users", auth, UserController.store);
route.post("/users/:user_id/addresses", AddressController.store);

route.get("/promotions", PromotionController.index);
route.post("/promotions", PromotionController.store);
route.patch("/promotions/:id", PromotionController.update);
route.delete("/promotions/:id", PromotionController.delete);

route.post("/categories",CategoryController.create);
route.get("/categories",CategoryController.index);

route.post("/authentication", AuthController.authentication);

export default route;


