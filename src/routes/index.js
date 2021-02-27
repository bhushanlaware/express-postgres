const express = require('express');

const router = express.Router();

const routes = [
  require('./userRoutes'),
  require('./subscriptionRoutes'),
];

router.use('/', routes);

module.exports = router;
