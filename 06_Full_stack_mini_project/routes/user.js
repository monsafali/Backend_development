const express = require("express")
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const e = require("connect-flash");
const passport = require("passport");
const { saveRedirctUrl } = require("../middleware.js");



router.get("/signup",(req, res)=>{
  res.render("user/signup.ejs")
})

router.post("/signup",wrapAsync( async(req, res)=>{
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
    
}))


router.get("/login", (req, res)=>{
    res.render("user/login.ejs")
})

router.post(
    "/login",  
    saveRedirctUrl,
    passport.authenticate('local',{
        failureRedirect: '/login',
        failureFlash: true,
    }),
    async(req,res)=>{
       req.flash("success","Welcome to Wanderlust your are logged In!")
       let redirectUrl = res.locals.redirectUrl || "/listings";
       res.redirect(redirectUrl)
    })

router.get("/logout", (req, res,next) =>{
    req.logOut((err) =>{
        if(err){
           return next(err);
        }
        req.flash("success", "yoru are logged out now")
        res.redirect("/listings")
    })
})

module.exports = router
