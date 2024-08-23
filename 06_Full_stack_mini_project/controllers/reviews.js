
const Listing = require("../models/listing.js")
const Review = require("../models/review.js")


module.exports.createReview = async (req, res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id
    console.log(newReview.author)
    listing.reviews.push(newReview)
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Added");
    res.redirect(`/listings/${listing._id}`)
    // res.redirect(`/listings/${listing._id}`)
}


module.exports.distoryReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
}
