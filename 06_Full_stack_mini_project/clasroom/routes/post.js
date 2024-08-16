const express = require("express")


// post

app.get("/post", (req, res)=>{
    res.send("GEt for users")
})

//Post user
app.get("/posts/:id", (req, res)=>{
    res.send("GEt for show users")
})

// Post users
app.post("/posts", (req, res)=>{
    res.send("GEt for show users")
})

// Delete users
app.post("/posts/:id", (req, res)=>{
    res.send("GEt for users ID")
})