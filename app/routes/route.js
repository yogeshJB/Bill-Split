const express = require('express');

const router = express.Router();

router.use('/user', require('../controller/user'));

module.exports = router;
