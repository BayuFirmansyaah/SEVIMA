const login = (req, res, next) => {
    if(!req.session.user_id){
        return next();
    }else{
        return res.redirect('/admin');
    }
}

module.exports = login