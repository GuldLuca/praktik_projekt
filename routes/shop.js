const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//Get all products from db
router.get("/api/products", async (req, res) => {

    const products = await Product.findAll();

    if(products.length > 0){
        return res.send({ response: products });
    } 
    else{
        return res.status(400).send({ response: "No products found" });
    }
});

//Get products html file
router.get("/products", (req, res) =>{
    res.sendFile("/views/shop/products.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;