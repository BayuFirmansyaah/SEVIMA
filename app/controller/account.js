const model = require('../model/account');
const response = require('../helper/response');
const controller = {}

controller.getAccount = async (req, res) => {
    const account = await model.collectionAccount();
    response(res, 200, account);
}

controller.postAccount = async (req, res) => {
    const account = await model.createAccount(req);
    response(res, account.code, account.data);
}

module.exports = controller;