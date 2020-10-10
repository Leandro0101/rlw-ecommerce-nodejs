import express from "express";
import routerUser from './user';
import routerCategory from './category';
import routerAddress from './address';
import routerPromotion from './promotion';
import routerFavoriteProduct from './FavoriteProduct';
import routerAuth from './auth';
import auth from '../app/middlewares/auth';
import routerProduct from "./product";

const app = express();

app.use(express.json());

//Não precisa de autenticação
app.use(routerAuth);

//Essas rotas possuem métodos q precisam de autenticação, e também métodos que não precisam
app.use(routerUser);
app.use(routerProduct);

//Todas essas rotas precisarão de autenticação para serem acessadas
app.use(auth);
app.use(routerCategory);
app.use(routerFavoriteProduct);
app.use(routerPromotion);
app.use(routerAddress);

export default app