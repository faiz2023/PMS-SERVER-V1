var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    f_name: {
        type: String,
        
    },
    l_name: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        trim: true,
    },
    buy_product: {
        type: String,
        default: ''
    },
    product_price: {
        type: String,
        default: ''
    },
    purchase_date: {
        type: Date,
        default: ''
    },
    vendor_name: {
        type: String,
        default: ''
    },
    
    accepttrems: Boolean,
});

var Customers = new mongoose.model('Customers', schema);

module.exports = Customers;

