const express = require('express');
const controller = require('./user.controller');
// const validator = require('./validator');

const router = express.Router();

router.get('/list', controller.getList);
router.get('/', controller.getUsers);
router.post('/', controller.create);
// router.delete('/:customerId', controller.deleteCustomer);

module.exports = router;
