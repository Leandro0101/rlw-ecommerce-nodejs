import express from "express";
import CategoryController from "../app/controllers/CategoryController";

const routerCategory = express.Router();

routerCategory.post("/categories",CategoryController.store);
routerCategory.get("/categories",CategoryController.index);
routerCategory.patch("/categories/:id", CategoryController.update);
routerCategory.delete("/categories/:id", CategoryController.delete);

export default routerCategory;