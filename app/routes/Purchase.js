const express = require('express')
const PurchaseController = require('../controllers/Purchase')
const router = express.Router();

router.get('/', PurchaseController.findAll);
router.get('/:id', PurchaseController.findOne);
router.post('/', PurchaseController.create);
router.patch('/:id', PurchaseController.update);
router.delete('/:id', PurchaseController.destroy);

module.exports = router