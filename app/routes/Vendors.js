const express = require('express')
const VendorsController = require('../controllers/Vendors')
const router = express.Router();

router.get('/', VendorsController.findAll);
router.get('/:id', VendorsController.findOne);
router.post('/', VendorsController.create);
router.patch('/:id', VendorsController.update);
router.delete('/:id', VendorsController.destroy);

module.exports = router