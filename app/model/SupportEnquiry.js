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
      
      
        trim: true,
      },
      
      mobile: {
        type: String,
        default: ''
    },
    enq_for: {
        type: String,
        default: ''
    },
    loc: {
        type: String,
        default: ''
    },
   
    accepttrems: Boolean,
});

var SupportEnquiry = new mongoose.model('SupportEnquiry', schema);

module.exports = SupportEnquiry;

