const express = require("express");
const route = express.Router();
const AddressController = require("./app/controllers/AddressController");
const UserController = require("./app/controllers/UserController");
const AuthController = require("./app/controllers/AuthController");
const CategoryController = require("./app/controllers/CategoryController");

route.post("/users", UserController.store);
route.post("/users/:user_id/addresses", AddressController.store);

route.post("/authentication", AuthController.authentication);

route.post("/categories", CategoryController.create);


module.exports = route;