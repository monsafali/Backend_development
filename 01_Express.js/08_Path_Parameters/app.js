const express = require("express")
const app = express();

const port = 8080;

// app.get("/:username/:id", (req, res)=>{
//    let {username, id} = req.params
//     res.send(`Welcome to the page of ${username} in ID No${id}`);

// })

app.get("/search", (req, res)=>{
    let {q} = req.query;
    console.log(`Result is :${q}`)
})

app.listen(port,()=>{
    console.log("Server start successfuly in the port:",port )
})


