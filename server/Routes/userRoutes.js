const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.post('/authenticate', userController.getUserByEmailAndPassword)
router.post('/register',userController.registerUser)
router.get('/get/user/items/:id', userController.getUserWithItems)
router.put('/update/status/:em/:otp', userController.updateUserStatus)
router.put('/update/profile/:id', userController.updateProfile )
router.put('/update/isonline/:id/:bit', userController.updateIsOnlineStatus )

module.exports = router;
