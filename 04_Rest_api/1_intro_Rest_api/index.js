const express = require("express")
const app = express();
const port = 8080;

const path = require("path")
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")))

let posts = [
    {
        username: "Apna Colle",
        content: "I love Coding"
    },
    {
        username: "Monsaf Ali",
        content: "Only your work hard make you unique from others"
    },
    {
        username: "Kaleem",
        content: "Now one can achieve the desire golas a someone achieve them very work hard"
    },
]

app.get("/posts", (req, res)=>{
    // res.send("server is start now")
    res.render("index.ejs", {posts})
})

app.listen(port,()=>{
    console.log("server is start at port", port)
})