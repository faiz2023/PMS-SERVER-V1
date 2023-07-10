const SupportEnquiryModel = require('../model/SupportEnquiry')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("test");
    if (!req.body.fname && !req.body.lname && !req.body.email && !req.body.mobile &&  !req.body.enq_for && !req.body.loc ){
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const SupportEnquiry = new SupportEnquiryModel({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      mobile: req.body.mobile,
      enq_for: req.body.enq_for,
      loc: req.body.loc,
           
    });
   
    
    await SupportEnquiry.save().then(data => {
        res.send({
            message:"SupportEnquiry created successfully!!",
            SupportEnquiry:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating SupportEnquiry"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const SupportEnquiry = await SupportEnquiryModel.find();
        res.status(200).json(SupportEnquiry);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const SupportEnquiry = await SupportEnquiryModel.findById(req.params.id);
        res.status(200).json(SupportEnquiry);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
const SupportEnquiry = require('../model/SupportEnquiry');

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  try {
    const updatedVendor = await SupportEnquiry.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
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
    await SupportEnquiryModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `SupportEnquiry not found.`
          });
        } else {
          res.send({
            message: "SupportEnquiry deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};