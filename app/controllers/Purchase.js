const PurchaseModel = require('../model/Purchase')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("test");
    if (!req.body.f_name && !req.body.l_name && !req.body.date && !req.body.buy_product && 
         !req.body.product_price && !req.body.vendor_name 
       ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Purchase = new PurchaseModel({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        date: req.body.date,
        buy_product: req.body.buy_product,
        product_price: req.body.product_price,
        vendor_name: req.body.vendor_name,  
       
    });
   
    
    await Purchase.save().then(data => {
        res.send({
            message:"Purchase created successfully!!",
            Purchase:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Purchase"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const Purchase = await PurchaseModel.find();
        res.status(200).json(Purchase);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const Purchase = await PurchaseModel.findById(req.params.id);
        res.status(200).json(Purchase);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
const Purchase = require('../model/Purchase');

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  try {
    const updatedVendor = await Purchase.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    if (!updatedVendor) {
      return res.status(404).send({
        message: "Purchase not found."
      });
    }

    return res.send({
      message: "Purchase updated successfully."
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};




// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await PurchaseModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Purchase not found.`
          });
        } else {
          res.send({
            message: "Purchase deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};
