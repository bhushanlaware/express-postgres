var express = require('express');
var router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

/* GET users listing. */
router.post('/subscription', subscriptionController.createSubscription);
router.get('/subscription/:username', subscriptionController.getSubscriptions);
router.get('/subscription/:username/:startdate', subscriptionController.getSubscriptions);

module.exports = router;
