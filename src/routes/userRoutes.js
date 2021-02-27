var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userControllers');

/* GET users listing. */
router.get('/get_users', userControllers.getAllUsers);

module.exports = router;
