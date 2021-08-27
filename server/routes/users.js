const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

// Users Controller
router.put('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/profile', userController.profile);

module.exports = router;
