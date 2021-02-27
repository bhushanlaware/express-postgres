const express = require('express');

const router = express.Router();

const routes = [
  require('./userRoutes'),
];

router.use('/', routes);

module.exports = router;
