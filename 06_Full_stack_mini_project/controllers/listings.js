const Listing = require("../models/listing.js")
module.exports.index = async (req, res)=>{
    const allListening = await Listing.find({});
    res.render("listings/index.ejs", {allListening})
}

module.exports.renderNewForm = (req, res) =>{
    res.render("listings/new.ejs")
}


module.exports.showListing = async (req, res) =>{
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
}



module.exports.createListing = async(req, res,next) =>{
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "new listing created");
    res.redirect("/listings")
   }



module.exports.renderEditForm = async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    if(!listing){
        req.flash("error", "Listing Your requeste for does not exist");
        res.redirect("/listings")
    }
    res.render("listings/edit.ejs", {listing})
}


module.exports.updateLising = async(req, res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`)
}



module.exports.distroyListing = async (req, res)=>{
    let {id} = req.params;
    const DeleteListing = await Listing.findByIdAndDelete(id)
    console.log(DeleteListing)
    req.flash("success", "Listing Deleted Successfuly");
    res.redirect("/listings")
}