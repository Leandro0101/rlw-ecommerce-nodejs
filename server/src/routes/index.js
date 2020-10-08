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
app.use(auth, routerAddress);
app.use(auth, adm, routerPromotion);
app.use(auth,adm,routerProduct);


export default app;

