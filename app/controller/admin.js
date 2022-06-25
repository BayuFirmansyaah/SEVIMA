const asyncQuery = require('../helper/mysql/asyncQuery');
const model = require('../model/admin');
const controller = {};

controller.index = (req, res) => {
    res.render('admin/index', {
        title: "Admin | Little Einstein",
        js: []
    })
}


// account
controller.account = (req, res) => {
    res.render('admin/account/index', {
        title: "Account | Little Einstein",
        js: ['admin/account']
    })
}

controller.register = (req, res) => {
    let flash_message = null;
    
    if(req.session.flash_message){
        flash_message = req.session.flash_message;
        req.session.flash_message = null;
    }

    res.render('admin/account/register', {
        title: "Register | Little Einstein",
        js: [],
        flash_message
    })
}

controller.manage_account = (req, res) => {
    res.render('admin/account/manage', {
        title: "Manage Account | Little Einstein",
        js: []
    })
}


// article
controller.article = (req, res) => {
    res.render('admin/article/index', {
        title: "Article | Little Einstein",
        js: []
    })
}

controller.create_article = (req, res) => {
    res.render('admin/article/create', {
        title: "Create Article | Little Einstein",
        js: []
    })
}

controller.manage_article = (req, res) => {
    res.render('admin/article/manage', {
        title: "Manage Article | Little Einstein",
        js: []
    })
}


// quiz
controller.quiz = async (req, res) => {
    const quiz = await model.quizCollection();

    res.render('admin/quiz/index', {
        title: "Quiz | Little Einstein",
        js: [],
        quiz
    })
}

controller.create_quiz = (req, res) => {
    let flash_message = null;

    if(req.session.flash_message){
        flash_message = req.session.flash_message;
        req.session.flash_message = null;
        req.session.save();
    }

    res.render('admin/quiz/create', {
        title: "Create Quiz | Little Einstein",
        js: ['create_quiz'],
        flash_message
    })
}

controller.create_quiz_post = async (req, res) => {
    const result = await model.createQuiz(req);
    req.session.flash_message = result;
    req.session.save();
    res.redirect('/admin/create/quiz')
}

controller.create_question = async (req, res) => {
    const file = req.file.filename;
    const result = await model.createQuestion(req, file);
    
    const data = {
        code: result.code,
        message: result.data.message,
        path: "/create/question" 
    }

    req.session.flash_message = data;
    req.session.save();
    res.redirect('/admin/create/quiz');
}

controller.manage_quiz = async (req, res) => {
    let flash_message = null;

    if(req.session.flash_message){
        flash_message = req.session.flash_message;
        req.session.flash_message = null;
        req.session.save();
    }

    const quiz = await model.quizCollection();
    res.render('admin/quiz/manage', {
        title: "Manage Quiz | Little Einstein",
        js: [],
        quiz,
        flash_message
    })
}

controller.delete_quiz = async (req, res) => {
    let id = parseInt(req.params.id);
    let result = await asyncQuery(`DELETE FROM quiz WHERE id=${id}`);
    let data = null;

    if(result.affectedRows > 0){
        data = {code: 200, message: "success delete data!!", path:"/manage/quiz"}
    }else{
        data = {code: 400, message: "can't delete data!!", path:"/manage/quiz"}
    }

    req.session.flash_message = data;
    req.session.save();
    res.redirect('/admin/manage/quiz')
}

module.exports = controller;