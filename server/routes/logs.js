const express = require('express');
const router = express.Router();

const { logController } = require('../controllers');

// Users Controller
router.post('/submit', logController.submit);
router.post('/fix/:id', logController.fix);
router.post('/delete/:id', logController.delete);

module.exports = router;
