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
controller.quiz = (req, res) => {
    res.render('admin/quiz/index', {
        title: "Quiz | Little Einstein",
        js: []
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
        js: [],
        flash_message
    })
}

controller.create_quiz_post = async (req, res) => {
    const result = await model.createQuiz(req);
    req.session.flash_message = result;
    req.session.save();
    res.redirect('/admin/create/quiz')
}

controller.manage_quiz = (req, res) => {
    res.render('admin/quiz/manage', {
        title: "Manage Quiz | Little Einstein",
        js: []
    })
}

module.exports = controller;