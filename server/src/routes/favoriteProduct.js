import express from 'express'
import FavoriteProductController from '../app/controllers/FavoriteProductController'

const routerFavoriteProduct = express.Router()

routerFavoriteProduct.get('/users/products', FavoriteProductController.index)
routerFavoriteProduct.post('/users/products', FavoriteProductController.store)
routerFavoriteProduct.delete('/users/products', FavoriteProductController.remove)

export default routerFavoriteProduct
