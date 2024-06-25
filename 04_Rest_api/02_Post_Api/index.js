const express = require("express");
const app = express();
const port = 8080;
const path = require("path")

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


app.use(express.urlencoded({extended: true}))



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username: "monsaf ali",
        content: "i love coding"
    },
    {
        id : uuidv4(),
        username: "muhammad kaleem",
        content: "i love automation"
    },
    {
        id : uuidv4(),
        username: "kamal",
        content: "i love Ai only you worked hard make you unique"
    },
];


app.get("/posts", (req, res)=>{
    // res.send("services working well!")
    res.render("index.ejs", {posts})
})


// post request

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs")
})

app.post("/posts",(req, res)=>{
    // console.log(req.body)
    let {username, content} = req.body;

    // res.send("Post request working")
    posts.push({username, content});
    res.redirect("/posts")
})


app.get("/posts/:id", (req, res)=>{
   let {id} = req.params;
   let post = posts.find((p) => id === p.id)
//    console.log(post)
res.render("show.ejs", {post})

})



 app.listen(port, ()=>{
    console.log("Listenign to port: 8080")
 })



