const ProductsModel = require('../model/Products')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("test");
    if (!req.body.org_id && !req.body.product_name && !req.body.product_item && !req.body.product_image &&  !req.body.product_quantity && !req.body.product_price 
        && !req.body.description && !req.body.created_at &&  !req.body.updated_at ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Products = new ProductsModel({
        org_id: req.body.org_id,
        product_name: req.body.product_name,
        product_item: req.body.product_item,
        product_image: req.body.product_image,
        product_quantity: req.body.product_quantity,
        product_price: req.body.product_price,
        description: req.body.description,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
       
    });
   
    
    await Products.save().then(data => {
        res.send({
            message:"Products created successfully!!",
            Products:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Products"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const Products = await ProductsModel.find();
        res.status(200).json(Products);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const Products = await ProductsModel.findById(req.params.id);
        res.status(200).json(Products);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
const Products = require('../model/Products');

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  try {
    const updatedVendor = await Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    if (!updatedVendor) {
      return res.status(404).send({
        message: "Products not found."
      });
    }

    return res.send({
      message: "Products updated successfully."
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};




// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await ProductsModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Products not found.`
          });
        } else {
          res.send({
            message: "Products deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};
