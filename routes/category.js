const express = require("express");
const router = express.Router();
const DB = require("../models/database");
const Category = require("../models/category");

router.get("/api/category", async (req, res) =>{

    const categories = await Category.findAll();

    if(categories.length > 0){
        return res.send({response : categories});
    }
    else{
        return res.status(400).send({ response: "No categories found" });
    }
})

router.post("/api/category/add", (req, res) =>{
    
    const sql = "INSERT into categories (title) VALUES (?)"

    const value = req.body.category;

    DB.query(sql, value, (error, data, fields) =>{
        if(error) throw error;
        res.json({
            status: 200,
            message: "New category added"
        })
    })
})

router.get("/admin/category", (req, res) =>{
    res.sendFile("/views/admin/category.html", {root: "/home/luca/Skole/Praktik/webshop"});
})

module.exports = router;