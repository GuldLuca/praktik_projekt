const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

const DB = require("./models/database");


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//Routes
var checkout = require('./routes/checkout');
app.use('/checkout', checkout);

//DB Models instances
const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Brand = require("./models/brand");
const Category = require("./models/category");
const Tag = require("./models/tag");
const WishList = require("./models/wishlist");

//DB associations
User.hasOne(WishList);
User.hasOne(Cart);
WishList.hasMany(Product);
Cart.hasMany(CartItem);
Product.hasOne(Brand);
Product.hasMany(Category);
Product.hasMany(Tag);
WishList.belongsTo(User);
Cart.belongsTo(User);

DB.sync();

const port = process.env.PORT || 4000;

app.listen(port, (error) =>{
    if(error) {
        console.log("Error starting the server");
    }
    console.log("Server started on port", Number(port));
})