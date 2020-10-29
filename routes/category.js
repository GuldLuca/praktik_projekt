const express = require("express");
const router = express.Router();
const Category = require("../models/category");

router.get("/api/admin/category", async (req, res) =>{

    const categories = await Category.findAll();

    if(categories.length > 0){
        return res.send({response : categories});
    }
    else{
        return res.status(400).send({ response: "No categories found" });
    }
})

router.post("/api/admin/category/add", async (req, res) =>{
    
    const title = req.body.title;
    const category = await Category.findAll({where: {"title": title}});

    if(category.length > 0){
        return res.status(500).send({errorMessage: "Category already exists"});
    }
    else{
        Category.create({
            title: title,
            imageUrl: req.body.imageUrl
        }).then(newCategory =>{
            return res.send(newCategory);
        })
    }

})

router.get("/admin/category", (req, res) =>{
    res.sendFile("/public/html/admin/category.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;