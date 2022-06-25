const model = require('../model/home');
const response = require('../helper/response');
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


controller.quiz = (req, res) => {
    res.render('home/quiz', {
       title: "Quiz | Little Einsten",
       css: ['quiz'],
       js: []
   })
}

controller.quiz_page = (req, res) => {
    res.render('home/quiz_page', {
        title: "1 | Little Einsten",
        css: ['quiz_page'],
        js: []
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

module.exports = controller;
