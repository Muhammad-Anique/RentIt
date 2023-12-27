const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/ItemController');

router.get('/getAll', itemController.getAllItems);
router.get('/getbycategory/:cat', itemController.getItemByMainCat);
router.get('/getbysubcategory/:main/:cat', itemController.getItemBySubCat);

module.exports = router;
