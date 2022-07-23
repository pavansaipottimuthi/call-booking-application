const express = require('express');
const router = express.Router();

router.use('/bookings', require('./booking'));

module.exports = router;
