const response = (res, status, data) => {
    res.set('Content-Type', 'application/json').status(status).json(data);
}

module.exports = response;