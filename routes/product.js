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

    console.log("products ", products);

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

//Get all brands from DB

router.get("/api/admin/products/add/sizes", async (req, res) =>{
    const sizes = await Size.findAll();

    if(sizes.length > 0){
        return res.send({response: sizes});
    }
    else{
        return res.status(400).send({response: "No sizes found"});
    }
});

//Get all brands from DB

router.get("/api/admin/products/add/tags", async (req, res) =>{
    const tags = await Tag.findAll();

    if(tags.length > 0){
        return res.send({response: tags});
    }
    else{
        return res.status(400).send({response: "No tags found"});
    }
});

//Get all brands from DB

router.get("/api/admin/products/add/categories", async (req, res) =>{
    const categories = await Category.findAll();

    if(categories.length > 0){
        return res.send({response: categories});
    }
    else{
        return res.status(400).send({response: "No categories found"});
    }
});

//Get all brands from DB

router.get("/api/admin/products/add/colors", async (req, res) =>{
    const colors = await Color.findAll();

    if(colors.length > 0){
        return res.send({response: colors});
    }
    else{
        return res.status(400).send({response: "No brands found"});
    }
});

//Get all brands from DB

router.get("/api/admin/products/add/fits", async (req, res) =>{
    const fits = await Fit.findAll();

    if(fits.length > 0){
        return res.send({response: fits});
    }
    else{
        return res.status(400).send({response: "No fits found"});
    }
});


//Add product to db
router.post("/api/admin/products/add", async (req, res) => {

    let values = [
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
        color = req.body.color
    ];

    console.log("all values ", values);
    console.log("values.brand ", values.brand);
    console.log("values.category", values.category);

    const productCategory = await Category.findOne({where: {title: values.category}});
    const productTag = await Tag.findOne({where: {title: values.tag}});
    const productBrand = await Brand.findOne({where: {title: values.brand}});
    const productFit = await Fit.findOne({where: {title: values.fit}});
    const productSize = await Size.findOne({where: {title: values.size}});
    const productColor = await Color.findOne({where: {title: values.color}});



    const product = Product.create({
        title: values.title,
        imageUrl: values.imageUrl,
        quantity: values.quantity,
        description: values.description,
        price: values.price
    }).then(product =>{
        return res.send(product);
    });

    product.setCategory(productCategory);
    product.setTag(productTag);
    product.setBrand(productBrand);
    product.setFit(productFit);
    product.setSize(productSize);
    product.setColor(productColor);

});

//Get products html file
router.get("/admin/products", (req, res) =>{
    res.sendFile("/views/admin/products.html", {root: "/home/luca/Skole/Praktik/webshop"});
})


//Get add products html file
router.get("/admin/products/add", (req, res) =>{
    res.sendFile("/views/admin/add-product.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;