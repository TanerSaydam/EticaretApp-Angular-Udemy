const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const {v4: uuidv4} = require("uuid");
const fs = require("fs");
const upload = require("../services/file.service");
const response = require("../services/response.service");

//Ürün Ekleme
router.post("/add",upload.array("images"),async(req, res)=>{
    response(res, async ()=> {
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
    });  
});

//Ürün Silme
router.post("/removeById", async (req, res)=> {
    response(res, async()=> {
        const {_id}= req.body;

        const product = await Product.findById(_id);
        for(const image of product.imageUrls){
            fs.unlink(image.path, ()=> {});
        }

        await Product.findByIdAndRemove(_id);
        res.json({message: "Ürün kaydı başarıyla silindi!"});
    });
});

//Ürün Listesi Getir
router.post("/", async(req, res)=> {
    response(res, async()=> {
        const {pageNumber, pageSize, search} = req.body;

        let productCount = await Product.find({
            $or: [
                {
                    name: { $regex: search, $options: 'i'}
                }
            ]
        }).count();

        let products = await Product
        .find({
            $or: [
                {
                    name: { $regex: search, $options: 'i'}
                }
            ]
        })
        .sort({name: 1})
        .populate("categories")
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize);

        let totalPageCount = Math.ceil(productCount / pageSize);
        let model = {
            datas: products,
            pageNumber: pageNumber,
            pageSize: pageSize,
            totalPageCount: totalPageCount,
            isFirstPage: pageNumber == 1 ? true : false,
            isLastPage: totalPageCount == pageNumber ? true : false
        };

        res.json(model);
    });
});

//Ürünü Id'ye Göre Getir
router.post("/getById", async(req, res)=> {
    response(res, async()=>{
        const {_id}= req.body;
        let product = await Product.findById(_id);
        res.json(product);
    });
});