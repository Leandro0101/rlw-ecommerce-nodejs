import express from 'express'
import cors from 'cors'
import routerUser from './user'
import routerCategory from './category'
import routerAddress from './address'
import routerPromotion from './promotion'
import routerFavoriteProduct from './FavoriteProduct'
import routerAuth from './auth'
import auth from '../app/middlewares/auth'
import routerProduct from './product'
import routerNotification from './notification'

const app = express()

// app.use((req, res, next) => {
//   req.header('Access-Control-Allow-Origin', 'http://localhost:3000/login')
//   app.use(cors())
//   next()
// })
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

// Não precisa de autenticação

app.use(routerAuth)
app.use(routerNotification)

// Essas rotas possuem métodos q precisam de autenticação, e também métodos que não precisam
app.use(routerUser)
app.use(routerProduct)

// Todas essas rotas precisarão de autenticação para serem acessadas
app.use(auth)
app.use(routerCategory)
app.use(routerFavoriteProduct)
app.use(routerPromotion)
app.use(routerAddress)

export default app
