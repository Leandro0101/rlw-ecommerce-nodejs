const express = require("express");
const route = express.Router();
const AddressController = require("./app/controllers/AddressController");
const UserController = require("./app/controllers/UserController");
const AuthController = require("./app/controllers/AuthController");
const CategoryController = require("./app/controllers/CategoryController");

route.post("/users", UserController.store);
route.post("/users/:user_id/addresses", AddressController.store);

<<<<<<< HEAD
route.post("/categories",CategoryController.create);
route.get("/categories",CategoryController.index);
=======
route.post("/authentication", AuthController.authentication);

route.post("/categories", CategoryController.create);

>>>>>>> ca4b92bc3a901b9f4f77a65041ed5bfb7b1ca27f

module.exports = route;