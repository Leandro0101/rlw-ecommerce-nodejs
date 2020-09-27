const express = require("express");
const route = express.Router();
const AddressController = require("./app/controllers/AddressController");
const UserController = require("./app/controllers/UserController");
const PromotionController = require("./app/controllers/PromotionController")
const AuthController = require("./app/controllers/AuthController");
const CategoryController = require("./app/controllers/CategoryController");

route.post("/users", UserController.store);
route.post("/users/:user_id/addresses", AddressController.store);

route.get("/promotions", PromotionController.index);
route.post("/promotions", PromotionController.store);
route.patch("/promotions/:id", PromotionController.update);
route.delete("/promotions/:id", PromotionController.delete);

route.post("/categories",CategoryController.create);
route.get("/categories",CategoryController.index);

route.post("/authentication", AuthController.authentication);

route.post("/categories", CategoryController.create);

module.exports = route;
