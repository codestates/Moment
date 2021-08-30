const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

// Users Controller
router.put('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/profile', userController.profile);
router.patch('/fixprofile', userController.fixProfile);
router.get('/facebook', userController.facebook);
router.get('/facebook_redirect', userController.facebook_redirect);
router.get('/google', userController.google);
router.get('/google_redirect', userController.google_redirect);
router.get('/myPost/:num', userController.myPost);
router.get('/myPostDetail/:id', userController.myPostDetail);

module.exports = router;
