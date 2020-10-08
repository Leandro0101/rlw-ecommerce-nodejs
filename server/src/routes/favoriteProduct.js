import express from "express";
import FavoriteProductController from "../app/controllers/FavoriteProductController";

const routerFavoriteProduct = express.Router();

routerFavoriteProduct.post("/users/favoriteProducts", FavoriteProductController.store);

export default routerFavoriteProduct;