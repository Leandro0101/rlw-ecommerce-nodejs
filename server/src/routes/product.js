import express from "express";
import ProductController from "../app/controllers/ProductController";
const routerProduct = express.Router();

import storage from "../config/multer";
import multer from "multer";
const upload = multer({storage});


// routerProduct.post('/upload', upload.single("file"),ProductController.upload);

routerProduct.post('/product',ProductController.story);
routerProduct.get('/product',ProductController.index);

export default routerProduct;