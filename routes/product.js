const express = require("express");
const router = express.Router();
const DB = require("../models/database");
const Product = require("../models/product");
const Brand = require("../models/brand");
const Size = require("../models/size");
const Fit = require("../models/fit");
const Tag = require("../models/tag");
const Category = require("../models/category");
const Color = require("../models/color");

//Get all products from db
router.get("/api/admin/products", async (req, res) => {

    const products = await Product.findAll();

    if(products.length > 0){
        return res.send({ response: products });
    } 
    else{
        return res.status(400).send({ response: "No products found" });
    }

});

//Get all brands from DB
router.get("/api/admin/products/add/brands", async (req, res) =>{
    const brands = await Brand.findAll();

    if(brands.length > 0){
        return res.send({response: brands});
    }
    else{
        return res.status(400).send({response: "No brands found"});
    }
});

//Get all sizes from DB
router.get("/api/admin/products/add/sizes", async (req, res) =>{
    const sizes = await Size.findAll();

    if(sizes.length > 0){
        return res.send({response: sizes});
    }
    else{
        return res.status(400).send({response: "No sizes found"});
    }
});

//Get all tags from DB
router.get("/api/admin/products/add/tags", async (req, res) =>{
    const tags = await Tag.findAll();

    if(tags.length > 0){
        return res.send({response: tags});
    }
    else{
        return res.status(400).send({response: "No tags found"});
    }
});

//Get all categories from DB
router.get("/api/admin/products/add/categories", async (req, res) =>{
    const categories = await Category.findAll();

    if(categories.length > 0){
        return res.send({response: categories});
    }
    else{
        return res.status(400).send({response: "No categories found"});
    }
});

//Get all colors from DB
router.get("/api/admin/products/add/colors", async (req, res) =>{
    const colors = await Color.findAll();

    if(colors.length > 0){
        return res.send({response: colors});
    }
    else{
        return res.status(400).send({response: "No colors found"});
    }
});

//Get all fits from DB
router.get("/api/admin/products/add/fits", async (req, res) =>{
    const fits = await Fit.findAll();

    if(fits.length > 0){
        return res.send({response: fits});
    }
    else{
        return res.status(400).send({response: "No fits found"});
    }
});


//Add product to DB
router.post("/api/admin/products/add", async (req, res) => {
    
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const brand = req.body.brand;
    const category = req.body.category;
    const tag = req.body.tag;
    const fit = req.body.fit;
    const size = req.body.size;
    const color = req.body.color;

    const productCategory = await Category.findOne({where: {"title": category}});
    const productTag = await Tag.findOne({where: {"title": tag}});
    const productBrand = await Brand.findOne({where: {"title": brand}});
    const productFit = await Fit.findOne({where: {"title": fit}});
    const productSize = await Size.findOne({where: {"title": size}});
    const productColor = await Color.findOne({where: {"title": color}});


   console.log(productCategory.id);


    const product = Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
        quantity: quantity
    }).then( async product =>{
        console.log(product);
        await product.setCategory(productCategory);
        await product.setTag(productTag);
        await product.setBrand(productBrand);
        await product.setFit(productFit);
        await product.setSize(productSize);
        await product.setColor(productColor);
        console.log("PRODUCT AFTER SET METHODS ", product);
        return res.send(product);
    });
});

//Get products html file
router.get("/admin/products", (req, res) =>{
    res.sendFile("/public/html/admin/products.html", {root: "/home/luca/Skole/Praktik/webshop"});
})


//Get add products html file
router.get("/admin/products/add", (req, res) =>{
    res.sendFile("/public/html/admin/add-product.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;