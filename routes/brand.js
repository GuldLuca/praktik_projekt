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

router.post("/api/admin/brand/add", (req, res) =>{
    
    Brand.create({
        title: req.body.title,
        imageUrl: req.body.imageUrl
    }).then(brand =>{
        return res.send(brand);
    })

})

router.get("/admin/brand", (req, res) =>{
    res.sendFile("/views/admin/brand.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;