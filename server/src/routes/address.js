import express from "express";
import AddressController from "../app/controllers/AddressController";
const routerAddress = express.Router();

routerAddress.post("/users/:user_id/addresses", AddressController.store);
routerAddress.get("/users/address", AddressController.show);

export default routerAddress;