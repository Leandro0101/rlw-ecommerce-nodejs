import express from "express";
import routerUser from './user';
import routerCategory from './category';
import routerAddress from './address';
import routerPromotion from './promotion';
import routerAuth from './auth';
import auth from '../app/middlewares/auth';
import adm from '../app/middlewares/admin';

const app = express();

app.use(express.json());

app.use(routerAuth);
app.use(routerUser);
app.use(auth, adm, routerCategory);
app.use(auth, routerAddress);
app.use(auth, adm, routerPromotion);

export default app;

