const express = require("express")
const app = express()
const mongose = require("mongoose")
const port = 8080;
const path = require("path");
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate')  // require ejs mate
const ExpressError = require("./utils/ExpressError.js")
const session = require("express-session")
const flash = require('connect-flash');
const passport = require("passport")
const LocatStartegy = require("passport-local")
const User = require("./models/user.js")

// Required route
const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")




main()
.then(()=>{
    console.log("connected to DB")
})
.catch((err) =>{
    console.log(err)
})

async function  main (){
    await mongose.connect(Mongo_URL)
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const sessionOption = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true,
    cookie: {
        expires : Date.now() + 7 * 24 *60 * 60 *1000,
        maxAge : 7 * 24 *60 * 60 *1000,
        httpOnly: true,
    }
}
app.get("/", (req, res)=>{
    res.send("Hi I am root welcome to a big game  ")
})

app.use(session(sessionOption));
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocatStartegy(User.authenticate()))


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/demouser",async (req, res) =>{
//     let fakeUser = new User({
//         email: "monsafbiggame@gmail.com",
//         username: "kamalgroup"
//     })
//     let registerUser = await User.register(fakeUser, "heloworld");
//     res.send(registerUser)
// })

app.use("/listings", listingRouter)
app.use("/listings/:id/reviews", reviewRouter)
app.use("/", userRouter)

app.all("*", (req, res, next) =>{
    next(new ExpressError(404, "Page Not found"))
})

app.use((err, req, res, next) =>{
    let {statusCode=500, message="Something Went Wrong"} = err;
    res.status(statusCode).render("error.ejs", {message})
   
})
app.listen(port,()=>{
    console.log("Server is listening to port", port)
})