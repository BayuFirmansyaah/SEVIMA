const express = require('express');
const router = express.Router();
const controller = require('../controller/home');

router.get('/', controller.index);
router.get('/eksplorasi', controller.eksplorasi);
router.get('/quiz', controller.quiz);

module.exports = router;
