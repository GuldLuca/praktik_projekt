const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

const DB = require("./models/database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname + "/public/")));
app.set("views", path.join(__dirname + "views/html"));

//Routes
const checkoutRoute = require('./routes/checkout');
app.use(checkoutRoute);
const shopRoute = require("./routes/shop");
app.use(shopRoute);
const categoryRoute = require("./routes/category");
app.use(categoryRoute);
const adminRoute = require("./routes/product");
app.use(adminRoute);
const brandRoute = require("./routes/brand");
app.use(brandRoute);
/*const colorRoute = require("./routes/color");
app.use(colorRoute);*/


//DB Models instances
const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Brand = require("./models/brand");
const Category = require("./models/category");
const Tag = require("./models/tag");
const WishList = require("./models/wishlist");
const Fit = require("./models/fit");
const Size = require("./models/size");
const Color = require("./models/color");


//DB associations
User.hasOne(WishList);
User.hasOne(Cart);
WishList.hasMany(Product);
Cart.hasMany(CartItem);
WishList.belongsTo(User);
Cart.belongsTo(User);


//Product associations

Product.belongsTo(Category);
Product.belongsTo(Tag);
Product.belongsTo(Color);
Product.belongsTo(Fit);
Product.belongsTo(Brand);
Product.belongsTo(Size);

Tag.hasMany(Product);
Fit.hasMany(Product);
Color.hasMany(Product);
Size.hasMany(Product);
Brand.hasMany(Product);
Category.hasMany(Product);


//Product.belongsTo(Brand);

DB.sync({force: false});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('[server] Started server');
});