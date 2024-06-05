const { error } = require('console');
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
   // const followers = ['monsaf','ali','kama','ramzan']

   // let {username } = req.params;
   // // console.log(username)
   // res.render('instagramp.ejs', {username, followers})


   // import from data base

   
   let {username } = req.params;
   const instaData = require("./data.json")
   const data = instaData[username]
   if(data){
      res.render('instagramp.ejs',{data})
   }else{
      res.render('error.ejs')
   }


   
   
})

app.get('/rolldice', (req,res)=>{
   let diceVal = Math.floor(Math.random()*6)+1;
   res.render('rolldice.ejs', {diceVal})
})

 app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
 });