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

const User = mongoose.model("User", userSchema);


// inserting One
// const user2 = new User({
//   name: "kaleem",
//   email: "azaadgee@gmail.com",
//   age: 22
// })

// user2.save().then((res)=>{
//   console.log(res)
// }).catch((err) =>{
//   console.log(err)
// })


// inserting Multiple


// User.insertMany([
//   {name: "Alice", email: "alice123@gmail.com", age: 28},
//   {name: "Bob", email: "bob_the_builder@gmail.com", age: 34},
//   {name: "Charlie", email: "charlie_brown@gmail.com", age: 22},
//   {name: "Diana", email: "diana_queen@gmail.com", age: 29},
//   {name: "Ethan", email: "ethan_hunt@gmail.com", age: 35},
//   {name: "Fiona", email: "fiona_princess@gmail.com", age: 26},
//   {name: "George", email: "george_of_the_jungle@gmail.com", age: 31},
//   {name: "Hannah", email: "hannah_montana@gmail.com", age: 24},
//   {name: "Ian", email: "ian_somerhalder@gmail.com", age: 27},
//   {name: "Julia", email: "julia_roberts@gmail.com", age: 33}

// ]).then((res) =>{
//   console.log(res)
// })


// Find Model


// User.find({ age: {$gte:35}})
// .then((res)=>{
//   console.log(res[0].name);
// })
// .catch((err)=>{
//   console.log(err);
// });

// User.findById({ _id: "669b9471e6d745f7dd67e2c0"})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });


// Updating()

// User.updateOne({name:"Bob"}, {age:35})
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//   });
  


// User.updateMany({age: {$gt: 30}}, {age:35})
// .then((res)=>{
//   console.l og(res)
// })
// .catch((err)=>{
//     console.log(err);
//   });
  


// User.findOneAndUpdate({name:"Julia"}, {age:40}, {new: true})
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//   });


//   User.findByIdAndUpdate("669b9471e6d745f7dd67e2c8",{ $set: { name: "kamal" } },{ new: true })
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//   });



// Delete method

//   User.deleteOne({name: "kamal"})
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//   });


  // User.deleteMany({age: 35})
  // .then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //     console.log(err);
  //   });
  
  User.findByIdAndDelete("669b9471e6d745f7dd67e2c7").then((res)=>{
  console.log(res)
})
.catch((err)=>{
    console.log(err);
  });