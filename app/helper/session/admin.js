const admin = (req, res, next) =>{
    console.log(req.session.user_id)
    if(!req.session.user_id){
        return res.redirect('/login');
    }else{
        return next();
    }
}

module.exports = admin;