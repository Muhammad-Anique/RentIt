const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/ItemController');

router.get('/getAll', itemController.getAllItems);
router.get('/getbycategory/:cat', itemController.getItemByMainCat);
router.get('/getbysubcategory/:main/:cat', itemController.getItemBySubCat);
router.get('/getType/:subcat', itemController.getTypeIdAndType);
router.post('/addItem/', itemController.addItemWithDetails);
router.get('/:itemId', itemController.getItemByID)
router.get('/city/:city', itemController.getItemByCity)
router.get('/query/:query', itemController.getItemBySearchQuery)
router.get('/get/all/conv/:participantid', itemController.getConversations);
router.delete('/delete/:id', itemController.deleteItemById)
router.put('/update/:id', itemController.updateItemWithDetails)

module.exports = router;
