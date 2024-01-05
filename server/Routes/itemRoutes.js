const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/ItemController');

router.get('/getAll', itemController.getAllItems);
router.get('/getbycategory/:cat', itemController.getItemByMainCat);
router.get('/getbysubcategory/:main/:cat', itemController.getItemBySubCat);
router.get('/getType/:subcat', itemController.getTypeIdAndType);
router.post('/addItem/', itemController.addItemWithDetails);
router.post('/addImage1', itemController.addImage1)
router.post('/addImage2', itemController.addImage2)
router.post('/addImage3', itemController.addImage3)
router.post('/addImage4', itemController.addImage4)
router.post('/addImage5', itemController.addImage5)


module.exports = router;
