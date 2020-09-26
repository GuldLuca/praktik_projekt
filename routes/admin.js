const express = require("express");
const router = express.Router();
const DB = require("../models/database");
const Product = require("../models/product");

//Get all products from db
router.get("/api/products", async (req, res) => {

    const products = await Product.findAll();

    console.log(products);

    if(products.length > 0){
        return res.send({ response: products });
    } 
    else{
        return res.status(400).send({ response: "No products found" });
    }

});

router.post("/api/products/add", (req, res) => {

    let sql = "INSERT into products (title, price, imageUrl, description, quantity) VALUES (?)"
    let values = [
        req.body.title, 
        req.body.price,
        req.body.imageUrl,
        req.body.description,
        req.body.quantity,
        req.body.brand,
        req.body.category,
        req.body.tag,
        req.body.fit,
        req.body.size,
        req.body.color,
    ];

    DB.query(sql, [values], (error, data, fields) =>{
        if(error) throw error;
        res.json({
            status: 200,
            message: "New product added"
        })
    })
});

//Get products html file
router.get("/products", (req, res) =>{
    res.sendFile("/views/admin/products.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;