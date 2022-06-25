const bcrypt = require('bcrypt');
const asyncQuery = require('../helper/mysql/asyncQuery');
const model = {}

model.auth = async (req) => {
    // get data
    const {username, password} = req.body;

    // query
    let user = await asyncQuery(`SELECT * FROM account WHERE username='${username}'`);

    if(user.length > 0){
        // check password
        user = user[0];
        const match = await bcrypt.compare(password, user.password);
        if(match){
            return {code: 200, data: user}
        }else{
            return {code: 400, message: "password doesn't match with this username"}    
        }

    }else{
        return {code: 400, message: "username not found!!"}
    }

}

module.exports = model;
