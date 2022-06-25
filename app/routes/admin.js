const express = require('express');
const router = express.Router();
const controller = require('../controller/admin');
const s_admin = require('../helper/session/admin');

router.get('/', [s_admin], controller.index);

// account
router.get('/account', [s_admin], controller.account);
router.get('/register', [s_admin], controller.register);
router.get('/manage/account', [s_admin], controller.manage_account);

// article
router.get('/article', [s_admin], controller.article);
router.get('/create/article', [s_admin], controller.create_article);
router.get('/manage/article', [s_admin], controller.manage_article)

// quiz
router.get('/quiz', [s_admin], controller.quiz);
router.get('/create/quiz', [s_admin], controller.create_quiz);
router.get('/manage/quiz', [s_admin], controller.manage_quiz);

router.post('/create/quiz', [s_admin], controller.create_quiz_post);

module.exports = router;
