const express = require("express");
const route = express.Router();
const AddressController = require("./app/controllers/AddressController");
const UserController = require("./app/controllers/UserController");
const PromotionController = require("./app/controllers/PromotionController");

route.post("/users", UserController.store);

route.post("/users/:user_id/addresses", AddressController.store);

route.post("/promotions", PromotionController.store);

module.exports = route;