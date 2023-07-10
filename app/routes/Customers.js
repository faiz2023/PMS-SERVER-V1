const express = require('express')
const CustomersController = require('../controllers/Customers')
const router = express.Router();

router.get('/', CustomersController.findAll);
router.get('/:id', CustomersController.findOne);
router.post('/', CustomersController.create);
router.patch('/:id', CustomersController.update);
router.delete('/:id', CustomersController.destroy);

module.exports = router