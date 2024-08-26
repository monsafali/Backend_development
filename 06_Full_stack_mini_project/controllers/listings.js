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
    let url = req.file.path;
    let filename = req.file.filename
    
    const newListing = new Listing(req.body.listing);
    newListing.image = {url, filename}
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
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250")

    res.render("listings/edit.ejs", {listing, originalImageUrl})
}


module.exports.updateLising = async(req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing})
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename
        listing.image = {url, filename}
        await listing.save();
    }


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