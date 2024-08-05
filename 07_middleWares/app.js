const express = require("express");
const app = express();



// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//    return next();
//    console.log('abc')   
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//    next();
// });

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString()
    console.log(req.method, req.hostname,req.path,req.time)
   next();
});


app.get("/", (req, res) =>{
    res.send("Hi I'm Root ")
})

app.get("/random", (req, res) =>{
    res.send("This is   random page. ")
})

app.listen(8080, ()=>{
    console.log("Server listening to port 8080")
});