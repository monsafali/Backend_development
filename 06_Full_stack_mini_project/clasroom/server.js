const express = require("express")
const app = express()
const users = require("./routes/user")
// const posts = require("./routes/post")
const session = require('express-session')
const sessionOption = {secret: "mysupersecretstring", resave: false, saveUninitialized: true}
const flash = require('connect-flash')
const path = require("path");
const { name } = require("ejs")
app.use(flash());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionOption));



app.use((req, res, next) =>{
    res.locals.success = req.flash("success")
    res.locals.err = req.flash("err")
    next();
})

app.get("/register",(req,res) =>{
    let {name= "anonymous"} = req.query
   req.session.name = name
   
   if(name === 'anonymous'){
    req.flash('err','user not registered')
   } else{
    req.flash("success",'user registered successfuly')
   }
    res.redirect("/hello")
})

app.get("/hello", (req, res)=>{
    res.render("page.ejs", {name: req.session.name})
})

// app.get("/reqcount", (req, res)=>{
//     if(req.session.count){
//         req.session.count ++
//     } else{
//         req.session.count = 1
//     }
    
//     res.send(`You send a message ${req.session.count} time`);
// })



// app.get("/test",(req, res) =>{
//     res.send("text successfuly")
// })



app.listen(3000, ()=>{
    console.log("server start successfully")
})


