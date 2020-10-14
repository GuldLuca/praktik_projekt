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

router.post("/api/admin/category/add", (req, res) =>{
    
    Category.create({
        title: req.body.title,
        imageUrl: req.body.imageUrl
    }).then(category =>{
        return res.send(category);
    })

})

router.get("/admin/category", (req, res) =>{
    res.sendFile("/views/admin/category.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;