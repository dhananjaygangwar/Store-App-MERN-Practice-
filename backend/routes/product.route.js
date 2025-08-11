import express from "express";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import { getProducts, createProduct, updateProduct, deleteProduct} from "../controllers/product.controller.js";

const router = express.Router();

//GET
router.get("/", getProducts );

//POST
router.post("/", createProduct );

//PUT
router.put("/:id", updateProduct );

//DELETE  
router.delete("/:id", deleteProduct);

export default router;