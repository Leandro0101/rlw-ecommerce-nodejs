import express from 'express'
import ProductController from '../app/controllers/ProductController'

import storage from '../config/multer'
import multer from 'multer'
const routerProduct = express.Router()
const upload = multer({ storage })

routerProduct.post('/upload/:id_product', upload.single("file"),ProductController.upload);

routerProduct.post('/product', ProductController.store)
routerProduct.get('/product', ProductController.index)

routerProduct.patch("/product/:id", ProductController.update);




export default routerProduct
