const controller = {}

controller.index = (req, res) => {
    res.render('home/index', {
        title: "home | little einsten",
        css: ['index','animation_index'],
        js: []
    })
}

module.exports = controller;
