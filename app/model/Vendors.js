var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname: {
        type: String,
            
    },
    lname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
      
        unique: true,
        trim: true,
      },
      
    mobile: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    accepttrems: Boolean,
});

var Vendors = new mongoose.model('Vendors', schema);

module.exports = Vendors;

