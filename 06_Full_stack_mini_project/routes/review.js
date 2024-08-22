const express = require("express")
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js")
const Listing = require("../models/listing.js")
const {validatereview} = require("../middleware.js")



// Post Reviews Route
router.post("/", validatereview, wrapAsync(async (req, res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview)
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Added");
    res.redirect(`/listings/${listing._id}`)
    // res.redirect(`/listings/${listing._id}`)
}))

// Delete Review Route
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
}));



module.exports = router;

