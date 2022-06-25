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

model.createQuestion = async (req, image) => {
    const {
        id_quiz,
        answer_a, value_a,
        answer_b, value_b,
        answer_c, value_c,
        answer_d, value_d
    } = req.body

    const answer = [
        { answer_a, value_a},
        { answer_b, value_b},
        { answer_c, value_c},
        { answer_d, value_d}
    ];

    const data = {
        id_quiz,
        image,
        answer : JSON.stringify(answer)
    }

    const result = await insert('soal_quiz', data);

    return result;
}

module.exports = model;
