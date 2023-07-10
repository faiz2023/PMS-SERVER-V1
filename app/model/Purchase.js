var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    f_name: {
        type: String,
            
    },
    l_name: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: ''
    },
      
    buy_product: {
        type: String,
        default: ''
    },
    product_price: {
        type: String,
        default: ''
    },
    vendor_name: {
        type: String,
        default: ''
    },
    
    accepttrems: Boolean,
});

var Purchase = new mongoose.model('Purchase', schema);

module.exports = Purchase;

