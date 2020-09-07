const express = require("express");
const route = express.Router();
const CategoryController = require("./controllers/CategoryController");

route.post('/category', CategoryController.store);
route.get('/categories', CategoryController.index);

module.exports = route;