const express = require('express');
const router = express.Router();
const controller = require('../controller/home');

router.get('/', controller.index);
router.get('/eksplorasi', controller.eksplorasi);
router.get('/quiz', controller.quiz);
router.get('/quiz/:id', controller.quiz_page);

// login
router.get('/login', controller.login);
router.post('/login', controller.login_auth);


module.exports = router;
