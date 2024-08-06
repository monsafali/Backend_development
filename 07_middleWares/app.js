const express = require("express");
const app = express();



// app.use((req, res, next) => {
//     console.log("I am only for random");
//    next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//    return next();
//    console.log('abc')   
// });


// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//    next();
// });

const checkToken =  (req, res , next )=>{
    let {token} = req. query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error("Accesss Denied");
};
// app.get("/wrong", (req, res)=>{
//     abcd = abcd;
// })
app.get("/api", checkToken,(req, res)=>{
    res.send("data");
});


// LOgger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString()
//     console.log(req.method, req.hostname,req.path,req.time)
//    next();
// });

app.use("/random", (req, res, next) =>{
    console.log("I am only for a random")
    next();
})

// 404
// app.use((req, res) => {
//     res.send("page Not found!")
// })


app.get("/", (req, res) =>{
    res.status(404).send("Hi I'm Root ")
})

app.get("/random", (req, res) =>{
    res.send("This is   random page. ")
})

app.listen(8080, ()=>{
    console.log("Server listening to port 8080")
});