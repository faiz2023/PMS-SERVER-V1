var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    org_id: {
        type: String,
        unique: true, 
    },
    product_name: {
        type: String,
        default: ''
    },
    product_item: {
        type: String,
        trim: true,
      },
      
    product_image: {
        type: String,
        default: ''
    },
    product_quantity: {
        type: String,
        default: ''
    },
    product_price: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    created_at: {
        type: Date,
        default: ''
    },
    updated_at: {
        type: Date,
        default: ''
    },
    
    accepttrems: Boolean,
});

var Products = new mongoose.model('Products', schema);

module.exports = Products;

