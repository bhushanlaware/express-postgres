var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userControllers');
const user = require('../controllers/userControllers');

/* GET users listing. */
router.get('/users', userControllers.getAllUsers);
router.get('/user/:username', userControllers.getUserByUsername);
router.delete('/user/:username', userControllers.deleteByUsername);
router.post('/user', userControllers.createUser);
router.put('/user/:id', userControllers.updateUser);

module.exports = router;
