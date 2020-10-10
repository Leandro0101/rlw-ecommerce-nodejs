import express from "express";
import routerUser from './user';
import routerCategory from './category';
import routerAddress from './address';
import routerPromotion from './promotion';
import routerAuth from './auth';
import auth from '../app/middlewares/auth';
import adm from '../app/middlewares/admin';
import routerProduct from "./product";

const app = express();

app.use(express.json());

app.use(routerAuth);
app.use(routerCategory);
app.use(routerProduct);
app.use( routerAddress);
app.use( routerPromotion);



export default app;

