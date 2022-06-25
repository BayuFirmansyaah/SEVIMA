const asyncQuery = require('../helper/mysql/asyncQuery');
const insert = require('../helper/mysql/insert');
const collection = require('../helper/mysql/collection');
const model = {}


model.createQuiz = async (req) => {
    // get data
    let {title, kategori} = req.body;
    kategori = parseInt(kategori);
   
    // check title already
    const check_title = await 
        asyncQuery(`SELECT * FROM quiz WHERE title="${title}" && kategori=${kategori}`);

    if(check_title.length > 0){
        return {code: 400, message: "quiz is already!!", path: "/create/quiz"}
    }

    // insert into database
    await insert('quiz', {title, kategori})

    return {code: 200, message: "Success Create Message", path: "/create/quiz"}

}

model.quizCollection = async () => {
    const quiz = await collection('quiz');
    return quiz;
}

module.exports = model;
