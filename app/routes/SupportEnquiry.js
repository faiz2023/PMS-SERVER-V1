const express = require('express')
const SupportEnquiryController = require('../controllers/SupportEnquiry')
const router = express.Router();

router.get('/', SupportEnquiryController.findAll);
router.get('/:id', SupportEnquiryController.findOne);
router.post('/', SupportEnquiryController.create);
router.patch('/:id', SupportEnquiryController.update);
router.delete('/:id', SupportEnquiryController.destroy);

module.exports = router