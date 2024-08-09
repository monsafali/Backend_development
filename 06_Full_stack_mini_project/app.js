const express = require("express")
const app = express()
const mongose = require("mongoose")
const port = 8080;
const Listing = require("./models/listing.js")
const path = require("path");
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate')  // require ejs mate
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")


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
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    res.send("Hi I am root welcome to a big game  ")
})

// index Route
app.get("/listings", wrapAsync (async (req, res)=>{
    const allListening = await Listing.find({});
    res.render("listings/index.ejs", {allListening})
})
)

// New Route
app.get("/listings/new", (Req, res) =>{
    res.render("listings/new.ejs")
})


// Show Route
app.get("/listings/:id", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/show.ejs", {listing})
})
)


// Create Route
app.post("/listings",wrapAsync( async(req, res,next) =>{
    if(!req.body.listing){
        throw new  ExpressError(400, "Send valid data for listing");
    }
        let listing = req.body.listing;
        const newListing = new Listing(listing) 
        await newListing.save();
        res.redirect("/listings")
    
   })
)

// Edit Route
app.get("/listings/:id/edit",wrapAsync( async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/edit.ejs", {listing})
})
)


// update Route
app.put("/listings/:id", wrapAsync (async(req, res) =>{
    if(!req.body.listing){
        throw new  ExpressError(400, "Send valid data for listing");
    }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    // res.redirect("/listings")
    res.redirect(`/listings/${id}`)
})
)

// Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res)=>{
    let {id} = req.params;
    const DeleteListing = await Listing.findByIdAndDelete(id)
    console.log(DeleteListing)
    res.redirect("/listings")
})
)



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

app.all("*", (req, res, next) =>{
    next(new ExpressError(404, "Page Not found"))
})

app.use((err, req, res, next) =>{
    let {statusCode=500, message="Something Went Wrong"} = err;
    res.status(statusCode).render("error.ejs", {message})
   
})
app.listen(port,()=>{
    console.log("Server is listening to port", port)
})