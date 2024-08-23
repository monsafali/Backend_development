const express = require("express")
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const {validatereview, isLoggedin, isReviewAuthor} = require("../middleware.js")



const reviewController = require("../controllers/reviews.js")
// Post Reviews Route
router.post("/", isLoggedin,validatereview, wrapAsync(reviewController.createReview))

// Delete Review Route
router.delete("/:reviewId",isLoggedin,isReviewAuthor, wrapAsync(reviewController.distoryReview));



module.exports = router;

