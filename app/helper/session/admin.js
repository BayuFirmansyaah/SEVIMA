const admin = (req, res, next) =>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }else{
        return next();
    }
}

module.exports = admin;