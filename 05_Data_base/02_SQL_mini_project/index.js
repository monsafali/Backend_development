const { faker, tr, es } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express")
const app = express();
const path = require("path")
const methodOverride = require("method-override")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'practise',
  password: "Root@1234"
});
 


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];   
};


// Home Route
app.get("/",(req, res) =>{
    let q = `select count(*) from user`;
     try {
        connection.query(q,(err, result) =>{
            if(err) throw err;
           let count = result[0]["count(*)"];
            res.render("home.ejs", {count});

        })
    } catch(err){
        console.log(err)
        res.send("Some error in DB")
    }
})


// Show Rouite



app.get("/user", (req, res) =>{
    let q = `SELECT * FROM user`

    try {
        connection.query(q,(err,users) =>{
            if(err) throw err;

            res.render("showusers.ejs", {users})
        });
    } catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

// Edit route
app.get("/user/:id/edit", (req, res) =>{
    let {id} = req.params
    let q = `SELECT * from user where id='${id}'`;
    try {
        connection.query(q,(err,result) =>{
            if(err) throw err;
            let user =result[0];
            res.render("edit.ejs", {user});
        });
    } catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

// Update DB route

app.patch("/user/:id", (req, res) =>{
    let {id} = req.params
    let {password: formPass, userName: newUserName} = req.body;
    let q = `SELECT * from user where id='${id}'`;
    // res.send("updated")
    try {
        connection.query(q,(err,result) =>{
            if(err) throw err;
            let user =result[0];
            if(formPass != user.password){
                res.send("Wrong Password")
            } else{
                let q2 = `UPDATE user SET username='${newUserName}' WHERE id='${id}'`;
                connection.query(q2, (err, result)=>{
                    if(err) throw err;
                    res.send(result);
                })
            }
            res.send(user)
        });
    } catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
})





app.listen("8080", () =>{
    console.log("Server is start at port 8080 ")
})



