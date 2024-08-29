if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

const express = require("express")
const app = express()
const mongose = require("mongoose")
const port = 8080;
const path = require("path");
const dbUrl = process.env.ATLASDB_URL
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate')  // require ejs mate
const ExpressError = require("./utils/ExpressError.js")
const session = require("express-session")
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require("passport")
const LocatStartegy = require("passport-local")
const User = require("./models/user.js")

// Required route
const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js");
const { error } = require('console');


main()
.then(()=>{
    console.log("connected to DB")
})
.catch((err) =>{
    console.log(err)
})

async function  main (){
    await mongose.connect(dbUrl)
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));



const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", ()=>{
    console.log("Error is mnog session STore", err)
})

const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: {
        expires : Date.now() + 7 * 24 *60 * 60 *1000,
        maxAge : 7 * 24 *60 * 60 *1000,
        httpOnly: true,
    }
}



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