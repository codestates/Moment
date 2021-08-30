const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

// Users Controller
router.put('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/profile', userController.profile);
router.put('/fixprofile', userController.fixProfile);
router.get('/facebook', userController.facebook);
router.get('/google', userController.google);

module.exports = router;
