var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userControllers');

/* GET users listing. */
router.get('/users', userControllers.getAllUsers);
router.get('/user/:username', userControllers.getUserByUsername);

module.exports = router;
