const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")


const checkToken =  (req, res , next )=>{
    let {token} = req. query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied");
};
app.get("/api", checkToken,(req, res)=>{
    res.send("data");
});


app.get("/", (req, res)=>{
    res.send("HI I am root")
});

app.get("/random", (req, res) =>{
    res.send("This is   random page. ")
})

app.get("/err", (req, res)=>{
    abcd = abcd;
})

app.get("/admin", (req, res) =>{
    throw new ExpressError (403, "Access is forbidden")
})


app.use((err, req, res , next )=>{
    let { status=500, message = "Some errro Accured"} = err
    res.status(status).send(message)
})
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








// 404
app.use((req, res) => {
    res.send("page Not found!")
})




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



// Error Handling

app.get("/", (req, res) =>{
    res.status(404).send("Hi I'm Root ")
})



app.listen(8080, ()=>{
    console.log("Server listening to port 8080")
});