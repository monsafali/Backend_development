module.exports.isLoggedin = (req, res, next) => {
    if(!req.isAuthenticated()){
        // redirect URL save
        req.session.redirectUrl = req.originalUrl;
        req.flash("error"," You must be logged in to crteate listing")
       return res.redirect("/login")
    }
    next();
}



module.exports.saveRedirctUrl = (req, res, next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
