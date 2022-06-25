const express = require('express');
const router = express.Router();
const controller = require('../controller/admin');

router.get('/', controller.index);

// account
router.get('/account', controller.account);
router.get('/register', controller.register);
router.get('/manage/account', controller.manage_account);

// article
router.get('/article', controller.article);
router.get('/create/article', controller.create_article);
router.get('/manage/article', controller.manage_article)

// quiz
router.get('/quiz', controller.quiz);
router.get('/create/quiz', controller.create_quiz);
router.get('/manage/quiz', controller.manage_quiz);


module.exports = router;
