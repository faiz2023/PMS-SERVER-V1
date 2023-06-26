const VendorsModel = require('../model/Vendors')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("test");
    if (!req.body.email && !req.body.fname && !req.body.lname && !req.body.mobile &&  !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Vendors = new VendorsModel({
        email: req.body.email,
        fname: req.body.fname,
        lname: req.body.lname,
        mobile: req.body.mobile,
        password: req.body.password
       
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
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await Vendors.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Vendors not found.`
            });
        }else{
            res.send({ message: "Vendors updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
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