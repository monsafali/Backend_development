const express = require('express')
const app = express();
const port = 8080;
const path = require("path");


 app.set("view Engin", "ejs");
 app.set('views', path.join(__dirname, "/views"))

app.get("/", (req, res) =>{
   // res.send('this is root')
   res.render('home.ejs')
})


app.get('/hello', (req,res)=>{
   res.send('hello')
})


app.get('/ig/:username', (req,res)=>{
   let {username } = req.params;
   // console.log(username)
   res.render('instagramp.ejs', {username})
   
})

app.get('/rolldice', (req,res)=>{
   let diceVal = Math.floor(Math.random()*6)+1;
   res.render('rolldice.ejs', {diceVal})
})

 app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
 });