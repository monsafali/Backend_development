const express = require("express")
const app = express()
const users = require("./routes/user")
// const posts = require("./routes/post")
const session = require('express-session')


app.use(session({secret: "mysupersecretstring", resave: false, saveUninitialized: true}))

app.get("/reqcount", (req, res)=>{
    if(req.session.count){
        req.session.count ++
    } else{
        req.session.count = 1
    }
    
    res.send(`You send a message ${req.session.count} time`);
})
// app.get("/test",(req, res) =>{
//     res.send("text successfuly")
// })



app.listen(3000, ()=>{
    console.log("server start successfully")
})


