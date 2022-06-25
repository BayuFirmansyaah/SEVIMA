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
    res.render('home/quiz', {
        title: "Quiz | Little Einsten",
        css: ['quiz'],
        js: []
    })
}

module.exports = controller;
