const express = require("express");
const app = express();
const port = 8080;
const path = require("path")


app.use(express.urlencoded({extended: true}))



app.set("view enging", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "monsaf ali",
        content: "i love coding"
    },
    {
        username: "muhammad kaleem",
        content: "i love automation"
    },
    {
        username: "kamal",
        content: "i love Ai only you worked hard make you unique"
    },
];


app.get("/posts", (req, res)=>{
    // res.send("services working well!")
    res.render("index.ejs", {posts})
})

 app.listen(port, ()=>{
    console.log("Listenign to port: 8080")
 })