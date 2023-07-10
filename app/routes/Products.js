const express = require('express')
const ProductsController = require('../controllers/Products')
const router = express.Router();

router.get('/', ProductsController.findAll);
router.get('/:id', ProductsController.findOne);
router.post('/', ProductsController.create);
router.patch('/:id', ProductsController.update);
router.delete('/:id', ProductsController.destroy);

module.exports = router