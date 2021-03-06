const model = require('../model/home');
const response = require('../helper/response');
const asyncQuery = require('../helper/mysql/asyncQuery');
const controller = {}

controller.index = (req, res) => {
    res.render('home/index', {
        title: "Home | Little Einsten",
        css: ['index','animation_index'],
        js: []
    })
}

controller.eksplorasi = (req, res) => {
     res.render('home/eksplorasi', {
        title: "Eksplorasi | Little Einsten",
        css: ['eksplorasi'],
        js: []
    })
}


controller.quiz = async (req, res) => {
    const quiz = await model.quizCollection();

    res.render('home/quiz', {
       title: "Quiz | Little Einsten",
       css: ['quiz'],
       js: [],
       quiz
   })
}

controller.quiz_page = (req, res) => {
    let id_quiz = req.params.id
    res.render('home/quiz_page', {
        title: "Quiz | Little Einsten",
        css: ['quiz_page'],
        js: ['quiz'],
        id_quiz
    })
}

controller.login = (req, res) => {
    let flash_message = null;

    if(req.session.flash_message){
        flash_message = req.session.flash_message;
        req.session.flash_message = null;
        req.session.save();
    }

    res.render('home/login', {
        title: "Login | Little Einsten",
        css: ['login'],
        js: [],
        flash_message
    })
}

controller.login_auth = async (req, res) => {
    const user = await model.auth(req);

    if(user.code == 200){
        console.log(user)
        req.session.user_id = user.data.id;
        req.session.save();
        res.redirect('/admin');
    }else{
        req.session.flash_message = user.message;
        req.session.save();
        res.redirect('/login');
    }
}

controller.category_quiz = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await asyncQuery(`SELECT * FROM quiz WHERE kategori=${id}`);
    response(res, 200, result);
}

controller.data_quiz = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await asyncQuery(`SELECT * FROM soal_quiz WHERE id_quiz=${id}`);
    response(res, 200, {result});
}

controller.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/')
}

module.exports = controller;
