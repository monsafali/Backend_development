const express = require("express")
const app = express()
const mongose = require("mongoose")
const port = 8080;
const Listing = require("./models/listing.js")
const path = require("path");

const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connected to DB")
})
.catch((err) =>{
    console.log(err)
})


async function  main (){
    await mongose.connect(Mongo_URL)
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res)=>{
    res.send("Hi I am root welcome to a big game  ")
})


// index Route
app.get("/listings", async (req, res)=>{
    const allListening = await Listing.find({});
    res.render("listings/index.ejs", {allListening})
})


// app.get("/testListening", async(req, res)=>{
//     let sampleListing = new Listing({
//         title : "My new Villa",
//         description: "By teh beach",
//         price: 1200,
//         locaation: "Calangute, Goa",
//         country: "India"
//     })
//     await sampleListing.save();
//     console.log("Sample Was saved Successfuly")
//     res.send("successfully testing")
// })


app.listen(port,()=>{
    console.log("Server is listening to port", port)
})