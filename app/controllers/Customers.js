const CustomersModel = require('../model/Customers')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("test");
    if (!req.body.f_name && !req.body.l_name && !req.body.phone && !req.body.email && !req.body.address && !req.body.buy_product 
        && !req.body.product_price && !req.body.purchase_date &&  !req.body.vendor_name ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Customers = new CustomersModel({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        buy_product: req.body.buy_product,
        product_price: req.body.product_price,
        purchase_date: req.body.purchase_date,
        vendor_name: req.body.vendor_name,
       
    });
   
    
    await Customers.save().then(data => {
        res.send({
            message:"Customers created successfully!!",
            Customers:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Customers"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const Customers = await CustomersModel.find();
        res.status(200).json(Customers);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const Customers = await CustomersModel.findById(req.params.id);
        res.status(200).json(Customers);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
const Customers = require('../model/Customers');

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  try {
    const updatedVendor = await Customers.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    if (!updatedVendor) {
      return res.status(404).send({
        message: "Customers not found."
      });
    }

    return res.send({
      message: "Customers updated successfully."
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};




// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await CustomersModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Customers not found.`
          });
        } else {
          res.send({
            message: "Customers deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};
