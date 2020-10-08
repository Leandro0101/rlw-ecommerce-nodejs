import express from "express";
import PromotionController from "../app/controllers/PromotionController";

const routerPromotion = express.Router();

routerPromotion.get("/promotions", PromotionController.index);
routerPromotion.post("/promotions", PromotionController.store);
routerPromotion.patch("/promotions/:id", PromotionController.update);
routerPromotion.delete("/promotions/:id", PromotionController.delete);

export default routerPromotion;