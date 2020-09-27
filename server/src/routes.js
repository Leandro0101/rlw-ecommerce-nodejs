const express = require("express");
const route = express.Router();
const AddressController = require("./app/controllers/AddressController");
const UserController = require("./app/controllers/UserController");
const CategoryController = require("./app/controllers/CategoryController");

route.post("/users", UserController.store);
route.post("/users/:user_id/addresses", AddressController.store);

route.post("/categories",CategoryController.create);
route.get("/categories",CategoryController.index);

module.exports = route;