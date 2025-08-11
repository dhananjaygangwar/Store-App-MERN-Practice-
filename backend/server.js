import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());//middlewar for json data in body

//GET
app.get("/api/products", async (req,res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log("error in fetching products:",error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
})


//POST
app.post("/api/products", async (req,res) => {
    const product = req.body;// user send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("Error to Create Product:",error.message);
        res.status(500).json({ success: false,message: "Server Error"});
    }
});

//PUT
app.put("/api/products/:id", async (req,res) => {
    const { id } = req.params;
    
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess: false, message:"Invalid Product ID"});
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product,{new:true});
        res.status(200).json({ sucess: true, data: updateProduct});
    } catch (error) {
        res.status(500).json({sucess: false, message:"Server error"});        
    }
} )

//DELETE  
app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    // console.log("id:",id)
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message:"Product deleted"})
    } catch (error) {
        console.error("Error in deleting Product:",error.message);
        res.status(404).json({success: false, message:"Product not found"});
    }
})



app.listen(5000,() => {
    connectDB();
    console.log("Server started at http://localhost:5000")
})

