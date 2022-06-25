const express = require('express');
const controller = require('../controller/account');
const router = express.Router();

router.get('/', controller.getAccount);
router.post('/', controller.postAccount);

module.exports = router