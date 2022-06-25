const express = require('express');
const router = express.Router();
const controller = require('../controller/home');
const s_login = require('../helper/session/login');

router.get('/', controller.index);
router.get('/eksplorasi', controller.eksplorasi);
router.get('/quiz', controller.quiz);
router.get('/quiz/:id', controller.quiz_page);

// login
router.get('/login', [s_login], controller.login);
router.post('/login', controller.login_auth);

// get quiz
router.get('/category/quiz/:id', controller.category_quiz);
router.get('/quiz/data/:id', controller.data_quiz);


module.exports = router;
