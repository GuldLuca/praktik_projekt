const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

const DB = require("./models/database");


app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname + "/public/")));
app.set("views", path.join(__dirname + "views/html"))

//Routes
const checkoutRoute = require('./routes/checkout');
app.use(checkoutRoute);
const shopRoute = require("./routes/shop");
app.use(shopRoute);

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

DB.sync({force: true});

const listener = app.listen(process.env.PORT || 8000, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});