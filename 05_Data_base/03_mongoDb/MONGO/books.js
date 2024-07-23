const mongoose = require('mongoose');

let url = "https://localhost:8080/users"

main().then((res) =>{
    console.log("connection Successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength:20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fictions"]
    },
    genre: [String]
});

const book = mongoose.model("Book", bookSchema)

// updating existing values
book.findByIdAndUpdate("669f201bf215e5c59cd19a72", {price: -100}, {runValidators: true})
.then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err.errors.price.properties.message)
    })



// let book1 = new book({
//     title: "Holly Quran",
//     author: "Muhammad (PBAH)",
//     price: 1,
//     category: "fiction",
//     genre: ["Truely","Last Book",]
// });

// book1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })