const express = require("express")
const app = express()
const users = require("./routes/user")

const cookieParser = require("cookie-parser")


app.use(cookieParser("secretcode"))

app.get("/getsignedcookie", (req, res)=>{
    res.cookie("made_in","Indian",{signed: true})
    res.send("signed cokokies send")
})

app.get("/verify", (req, res)=>{
    console.log(req.signedCookies)
    res.send("verifiy")
})

app.get("/getcookies", (req, res)=>{
    res.cookie("great", "Hello");
    res.cookie("mission","Welcome to a big game")
    res.send("Sent you some responsed")
})

app.get("/greet", (req, res)=>{
    let {name = "Kamal"} = req.cookies 
    res.send(`Hi ${name}`)
})

app.get("/", (req, res)=>{
    console.dir(req.cookies)
    res.send("Hi I am root!")
})

app.use("/users", users)


app.listen(3000, ()=>{
    console.log("server start successfully")
})