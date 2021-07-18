var app = require('express')();
var BodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId; 
var mongoose = require('mongoose');
var { modelProduct,
    modelTableOrder,
    modelPickupOrder,
    modelShippingOrder } = require('./models')
    
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json());
var mongoDb = 'mongodb+srv://Elisheva:12345@sushishop.qwjfr.mongodb.net/SushiShop?retryWrites=true&w=majority';

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModif:true },
    error=>{
        if(error)console.log('mongodb connecting error:',error);
        else console.log('mongodb connected');
});

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.post("/product",async (req, res) => {
    var getProduct = new modelProduct({
        category: req.body.category,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });

    await getProduct.save()
    modelProduct.find()
        .exec(function (err, list) {
            if (err) return next(err);
        res.send("the productId " + list);
        })
})

exports.get_table_orders = function (req, res, next) {
    modelTableOrder
        .find()
        .populate('products')
        .exec(function (err, list) {
        if (err) return next(err);
        res.send(list);
    });
};

exports.get_pickup_orders = function (req, res, next) {
    modelPickupOrder
        .find()
        .populate('products')
        .exec(function (err, list) {
        if (err) return next(err);
        res.send(list);
    });
};

exports.get_shipping_orders = function (req, res, next) {
    modelShippingOrder
        .find()
        .populate('products')
        .exec(function (err, list) {
        if (err) return next(err);
        res.send(list);
    });
};

exports.get_product = function (req, res, next) {
    modelProduct
        .find(ObjectId(req.params.id))
        .exec(function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};

exports.get_products = function (req, res, next) {
    modelProduct
        .find({category: req.query.category})
        .exec(function (err, list) {
        if (err) return next(err);
        res.send(list);
    });
};

exports.create_table_order = async function (req, res, next) {
    const order = req.body;
    const newOrder = new modelTableOrder(order);
    await newOrder.save();
    modelTableOrder.find()
    .exec(function (err, list) {
    if (err) return next(err);
    res.send(newOrder);
    });
};

exports.create_pickup_order = async function (req, res, next) {
    const order = req.body;
    const newOrder = new modelPickupOrder(order);
    await newOrder.save();
    modelPickupOrder.find()
    .exec(function (err, list) {
    if (err) return next(err);
    res.send(order);
    });
};

exports.create_shipping_order = async function (req, res, next) {
    const order = req.body;
    const newOrder = new modelShippingOrder(order);
    await newOrder.save();
    modelShippingOrder.find()
    .exec(function (err, list) {
    if (err) return next(err);
    res.send(order);
    });
};

app.get("/tableOrders", this.get_table_orders);
app.get("/pickupOrders", this.get_pickup_orders);
app.get("/shippingOrders", this.get_shipping_orders);
app.get("/products", this.get_products);
app.get("/product/:id", this.get_product);
app.post("/tableOrder", this.create_table_order);
app.post("/pickupOrder", this.create_pickup_order);
app.post("/shippingOrder", this.create_shipping_order);

var server = app.listen(3080, function () {
    console.log("server run...")
})