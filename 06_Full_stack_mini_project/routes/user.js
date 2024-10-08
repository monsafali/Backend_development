const express = require("express")
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const e = require("connect-flash");
const passport = require("passport");
const { saveRedirctUrl } = require("../middleware.js");


const userController = require("../controllers/users.js")

router.route("/signup")
.get(userController.renderSigupForm)
.post(wrapAsync(userController.signup))

router.route("/login")
.get(userController.loginform)
.post(saveRedirctUrl,passport.authenticate('local'
    ,{failureRedirect: '/login',failureFlash: true,}),userController.login)

    
router.get("/logout",userController.logout )

module.exports = router
