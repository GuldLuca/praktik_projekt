const express = require("express");
const router = express.Router();
const DB = require("../models/database");
const Product = require("../models/product");

//Get all products from db
router.get("/api/products/add", async (req, res) => {

    const products = await Product.findAll();

    console.log(products);

    if(products.length > 0){
        return res.send({ response: products });
    } 
    else{
        return res.status(400).send({ response: "No products found" });
    }

    
});

//Get products html file
router.get("/products", (req, res) =>{
    res.sendFile("/views/admin/products.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;