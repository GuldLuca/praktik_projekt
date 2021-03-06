const express = require("express");
const router = express.Router();
const Brand = require("../models/category");

router.get("/api/admin/brand", async (req, res) =>{

    const brands = await Brand.findAll();

    if(brands.length > 0){
        return res.send({response : brands});
    }
    else{
        return res.status(400).send({ response: "No brands found" });
    }
})

router.post("/api/admin/brand/add", async (req, res) =>{
    
    const title = req.body.title;
    const brand = await Brand.findAll({where: {"title": title}});

    if(brand.length > 0){
        return res.status(500).send({errorMessage: "Brand already exists"});
    }
    else{
        Brand.create({
            title: title,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }).then(newBrand =>{
            return res.send(newBrand);
        })
    }

})

router.get("/admin/brand", (req, res) =>{
    res.sendFile("/public/html/admin/brand.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;