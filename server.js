const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));
//app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const VendorsRoute = require('./app/routes/Vendors')
app.use('/Vendors',VendorsRoute)

const ProductsRoute = require('./app/routes/Products')
app.use('/Products',ProductsRoute)

const CustomersRoute = require('./app/routes/Customers')
app.use('/Customers',CustomersRoute)

const SupportEnquiryRoute = require('./app/routes/SupportEnquiry')
app.use('/SupportEnquiry',SupportEnquiryRoute)

const PurchaseRoute = require('./app/routes/Purchase')
app.use('/Purchase',PurchaseRoute)


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.get('/', (req, res) => {
    res.json({"message": "Hello Server started"});
});  

app.listen(3003, () => {
    console.log("Server is listening on port 3003");
});
