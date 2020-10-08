import express from "express";
import ProductController from "../app/controllers/ProductController";

const routerProduct = express.Router();

routerProduct.post('/product',ProductController.create)

export default routerProduct;