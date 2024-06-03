const express = require("express");
const app = express();

console.dir(app)



// This is the app fucntion also have many more
let port = 8080;

app.listen(port, ()=>{
    console.log(`app listening or port ${port}`);
})


app.get("/", (req,res) =>{
    res.send('Hi i am root')
})

app.get("/:username/:id", (req,res) =>{

    let{username, id} = req.params
    let htmlSTr= (`<h1>welcome to the page of ${username}. and id of:${id}</h1>`)
    res.send(htmlSTr);
})


app.get("/search", (req,res) =>{
    // console.log(req.query);
    // res.send('no result')

    let {q} = req.query;

    if (!q){
        res.send("<h1>Nothing searched</h1>")
    }

    res.send(`<h1>these are the search results for querry ${q}</h1>`)
})