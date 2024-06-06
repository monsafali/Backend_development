const express = require ("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true})); //we always write this line of code its dependencies
app.use(express.json());



app.get("/register", (req, res)=>{
    let {user, password } = req.query;
    res.send(`Standard Get response. Welcome ${user}`)
})

app.post("/register", (req, res)=>{
    let {user, password } = req.body
    res.send(`Standard Post response. Welcome ${user}`)
})


app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});