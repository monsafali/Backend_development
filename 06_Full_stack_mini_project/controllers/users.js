// const { models } = require("mongoose");
const User = require("../models/user.js");


module.exports.signup = async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email,username})
        const registeredUser = await User.register(newUser, password)
        console.log(registeredUser);
        req.login(registeredUser, (err) =>{
            if(err){
               return next(err);
            }
            req.flash("success", "Welcome to Wanderlust")
            res.redirect(req.session.redirectUrl)
        })
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup")
    }
}


module.exports.renderSigupForm = (req, res)=>{
    res.render("user/signup.ejs")
  }




module.exports.loginform = (req, res)=>{
    res.render("user/login.ejs")
}


module.exports.login = async(req,res)=>{
    req.flash("success","Welcome to Wanderlust your are logged In!")
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl)
 }

module.exports.logout = (req, res,next) =>{
    req.logOut((err) =>{
        if(err){
           return next(err);
        }
        req.flash("success", "yoru are logged out now")
        res.redirect("/listings")
    })
}