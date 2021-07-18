var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema(
    {
        category: {type: String},
        type: {type: String},
        description: {type: String},
        price: {type: String},
        image:{type: String}
    }
);

var tableOrder = new Schema(
    {
        name: {type: String},
        phone_number: {type: String},
        email: {type: String},
        comment: {type: String},
        date: {type: String},
        time: {type: String},
        number: {type: String},
        table: {type: String}
    }
);

var pickupOrder = new Schema(
    {
        name: {type: String},
        phone_number: {type: String},
        message: {type: String},
        products_list: [{id: {type: mongoose.Types.ObjectId, ref:"product"},
        amount: {type: Number}}]
    }
);

var shippingOrder = new Schema(
    {
        name: {type: String},
        address: {type: String},
        phone_number: {type: String},
        email: {type: String},
        message: {type: String},
        products_list: [{id: {type: mongoose.Types.ObjectId, ref:"product"},
        amount: {type: Number}}]
    }
);

var modelProduct = mongoose.model('products', product);
var modelTableOrder = mongoose.model('tableOrders', tableOrder);
var modelPickupOrder = mongoose.model('pickupOrders', pickupOrder);
var modelShippingOrder = mongoose.model('shippingOrders', shippingOrder);

module.exports =  {
    modelProduct,
    modelTableOrder,
    modelPickupOrder,
    modelShippingOrder,
}
