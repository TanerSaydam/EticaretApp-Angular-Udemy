const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const {v4: uuidv4} = require("uuid");
const fs = require("fs");
const upload = require("../services/file.service");

//Ürün Ekleme
router.post("/add",upload.array("images"),async(req, res)=>{
    try {
        const {name, stock, price, categories} = req.body;

        const productId = uuidv4();
        let product = new Product({
            _id: productId,
            name: name.toUpperCase(),
            stock: stock,
            price: price,
            categories: categories,
            isActive: true,
            imageUrls: req.files,
            createdDate: new Date()
        });
        await product.save();

        res.json({message: "Ürün kaydı başarıyla tamamlandı!"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})