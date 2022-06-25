const bcrypt = require('bcrypt')
const collection = require('../helper/mysql/collection');
const asyncQuery = require('../helper/mysql/asyncQuery');
const insert = require('../helper/mysql/insert');
const model = {};

model.collectionAccount = async () => {
    const account = await collection('account');
    return account;
}

model.createAccount = async (req) => {
    // get data
    const {username, password, r_password, role} = req.body;

    // check data not null
    if(!username || !password || !r_password || !role){
        return {code: 400, data: {message: "column required"}}
    }

    // check username is already or nah ?
    const user = await asyncQuery(`SELECT * FROM account WHERE username='${username}'`);
    if(user.length > 0){
        return {code: 400, data: {message: "username is already"}}
    }

    // check password and repeat password same
    if(password !== r_password){
        return {code: 400, data: {message: "password doesn't match"}}
    }

    // insert data
    const salt = await bcrypt.genSaltSync(9);
    const hash_password = await bcrypt.hashSync(password, salt);
    const result = await insert('account', {username, password:hash_password, role});
    
    return {code:200, data: {message: "Success Create Account"}};

}

module.exports = model;