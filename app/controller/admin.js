const controller = {};

controller.index = (req, res) => {
    res.render('admin/index', {
        title: "Admin | Little Einstein"
    })
}


// account
controller.account = (req, res) => {
    res.render('admin/account/index', {
        title: "Account | Little Einstein"
    })
}

controller.register = (req, res) => {
    res.render('admin/account/register', {
        title: "Register | Little Einstein"
    })
}

controller.manage_account = (req, res) => {
    res.render('admin/account/manage', {
        title: "Manage Account | Little Einstein"
    })
}


// article
controller.article = (req, res) => {
    res.render('admin/article/index', {
        title: "Article | Little Einstein"
    })
}

controller.create_article = (req, res) => {
    res.render('admin/article/create', {
        title: "Create Article | Little Einstein"
    })
}

controller.manage_article = (req, res) => {
    res.render('admin/article/manage', {
        title: "Manage Article | Little Einstein"
    })
}


// quiz
controller.quiz = (req, res) => {
    res.render('admin/quiz/index', {
        title: "Quiz | Little Einstein"
    })
}

controller.create_quiz = (req, res) => {
    res.render('admin/quiz/create', {
        title: "Create Quiz | Little Einstein"
    })
}

controller.manage_quiz = (req, res) => {
    res.render('admin/quiz/manage', {
        title: "Manage Quiz | Little Einstein"
    })
}

module.exports = controller;