const VendorsModel = require('../model/Vendors')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("test");
    if (!req.body.First_name && !req.body.Last_name && !req.body.email && !req.body.Phone &&  !req.body.alternative_no && !req.body.Address 
        && !req.body.Id_Proof && !req.body.Logo &&  !req.body.Company_Name &&  !req.body.Products && !req.body.Company_Lisence_Number &&  !req.body.Company_Lisence_Id &&  !req.body.Product_Category) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Vendors = new VendorsModel({
       First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        email: req.body.email,
        Phone: req.body.Phone,
        alternative_no: req.body.alternative_no,
        Address: req.body.Address,
        Id_Proof: req.body.Id_Proof,
        Logo: req.body.Logo,
        Company_Name: req.body.Company_Name,
        Products: req.body.Products,
        Company_Lisence_Number: req.body.Company_Lisence_Number,
        Company_Lisence_Id: req.body.Company_Lisence_Id,
        Product_Category: req.body.Product_Category,
       
    });
   
    
    await Vendors.save().then(data => {
        res.send({
            message:"Vendors created successfully!!",
            Vendors:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Vendors"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const Vendors = await VendorsModel.find();
        res.status(200).json(Vendors);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const Vendors = await VendorsModel.findById(req.params.id);
        res.status(200).json(Vendors);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
const Vendors = require('../model/Vendors');

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  try {
    const updatedVendor = await Vendors.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    if (!updatedVendor) {
      return res.status(404).send({
        message: "Vendor not found."
      });
    }

    return res.send({
      message: "Vendor updated successfully."
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};




// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await VendorsModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Vendors not found.`
          });
        } else {
          res.send({
            message: "Vendors deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};