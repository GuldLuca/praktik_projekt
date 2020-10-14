const express = require("express");
const router = express.Router();
const DB = require("../models/database");
const Product = require("../models/product");

//Get all products from db
router.get("/api/admin/products", async (req, res) => {

    const products = await Product.findAll();

    console.log(products);

    if(products.length > 0){
        return res.send({ response: products });
    } 
    else{
        return res.status(400).send({ response: "No products found" });
    }

});

//Add product to db
router.post("/api/admin/products/add", (req, res) => {

    /*let values = [
        title = req.body.title, 
        price = req.body.price,
        imageUrl = req.body.imageUrl,
        description = req.body.description,
        quantity = req.body.quantity,
        brand = req.body.brand,
        category = req.body.category,
        tag = req.body.tag,
        fit = req.body.fit,
        size = req.body.size,
        color = req.body.color,
    ];

    Product.create({
        title: values.title,
        imageUrl: values.imageUrl
    }).then(product =>{
        return res.send(product);
    })*/

    
});

//Get products html file
router.get("/admin/products", (req, res) =>{
    res.sendFile("/views/admin/products.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;