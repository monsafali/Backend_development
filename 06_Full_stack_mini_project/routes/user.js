const express = require("express")
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const e = require("connect-flash");
const passport = require("passport");
const { saveRedirctUrl } = require("../middleware.js");


const userController = require("../controllers/users.js")

router.get("/signup", userController.renderSigupForm)

router.post("/signup",wrapAsync(userController.signup))


router.get("/login", userController.loginform)

router.post(
    "/login",  
    saveRedirctUrl,
    passport.authenticate('local',{
        failureRedirect: '/login',
        failureFlash: true,
    }),
    userController.login
    )

router.get("/logout",userController.logout )

module.exports = router
