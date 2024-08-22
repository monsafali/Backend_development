const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const {isLoggedin, isOwner, validateListing} = require("../middleware.js")




// index Route
router.get("/", wrapAsync (async (req, res)=>{
    const allListening = await Listing.find({});
    res.render("listings/index.ejs", {allListening})
})
)

// New Route
router.get("/new", isLoggedin, (req, res) =>{
    res.render("listings/new.ejs")
})


// Show Route
router.get("/:id", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing
    .findById(id).populate({path:"reviews",populate: {path: "author"}})
    .populate("owner");

    if(!listing){
        req.flash("error", "Listing Your requeste for does not exist");
        res.redirect("/listings")
    }

    console.log(listing)
    res.render("listings/show.ejs", {listing})
})
)
// Create Route
router.post("/",isLoggedin, validateListing, wrapAsync( async(req, res,next) =>{
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "new listing created");
    res.redirect("/listings")
   })
)
// Edit Route
router.get("/:id/edit",isLoggedin, isOwner,wrapAsync( async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    if(!listing){
        req.flash("error", "Listing Your requeste for does not exist");
        res.redirect("/listings")
    }
    res.render("listings/edit.ejs", {listing})
})
)


// update Route
router.put("/:id",isLoggedin, isOwner,validateListing, wrapAsync (async(req, res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`)
})
)

// Delete Rout
router.delete("/:id", isLoggedin,isOwner, wrapAsync(async (req, res)=>{
    let {id} = req.params;
    const DeleteListing = await Listing.findByIdAndDelete(id)
    console.log(DeleteListing)
    req.flash("success", "Listing Deleted Successfuly");
    res.redirect("/listings")
})
)


module.exports = router;


