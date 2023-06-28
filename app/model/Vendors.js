var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    First_name: {
        type: String,
            
    },
    Last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
      
        unique: true,
        trim: true,
      },
      
    Phone: {
        type: String,
        default: ''
    },
    alternative_no: {
        type: String,
        default: ''
    },
    Address: {
        type: String,
        default: ''
    },
    Id_Proof: {
        type: String,
        default: ''
    },
    Logo: {
        type: String,
        default: ''
    },
    Company_Name: {
        type: String,
        default: ''
    },
    Products: {
        type: String,
        default: ''
    },
    Company_Lisence_Number: {
        type: String,
        default: ''
    },
    Company_Lisence_Id: {
        type: String,
        default: ''
    },
    Product_Category: {
        type: String,
        default: ''
    },
    accepttrems: Boolean,
});

var Vendors = new mongoose.model('Vendors', schema);

module.exports = Vendors;

