const mongoose = require('mongoose');

let url = "https://localhost:8080/users"

main().then((res) =>{
    console.log("connection Successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})


// Model

// const User = mongoose.model("User", userSchema); //"parsing User is your choice whatever name you choose"


const Employee = mongoose.model("Employee", userSchema);