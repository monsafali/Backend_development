const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const { listingSchema } = require("../schema.js")
const ExpressError = require("../utils/ExpressError.js")
const Listing = require("../models/listing.js")


const validateListing = ( req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new  ExpressError(400,errMsg);
    } else{
        next();
    }
}

// index Route
router.get("/", wrapAsync (async (req, res)=>{
    const allListening = await Listing.find({});
    res.render("listings/index.ejs", {allListening})
})
)

// New Route
router.get("/new", (Req, res) =>{
    res.render("listings/new.ejs")
})


// Show Route
router.get("/:id", wrapAsync(async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");

    if(!listing){
        req.flash("error", "Listing Your requeste for does not exist");
        res.redirect("/listings")
    }

    res.render("listings/show.ejs", {listing})
})
)
// Create Route
router.post("/",validateListing, wrapAsync( async(req, res,next) =>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "new listing created");
    res.redirect("/listings")
   })
)
// Edit Route
router.get("/:id/edit",wrapAsync( async (req, res) =>{
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
router.put("/:id",validateListing, wrapAsync (async(req, res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`)
})
)

// Delete Route
router.delete("/:id", wrapAsync(async (req, res)=>{
    let {id} = req.params;
    const DeleteListing = await Listing.findByIdAndDelete(id)
    console.log(DeleteListing)
    req.flash("success", "Listing Deleted Successfuly");
    res.redirect("/listings")
})
)


module.exports = router;


