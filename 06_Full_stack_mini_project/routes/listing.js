const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const {isLoggedin, isOwner, validateListing} = require("../middleware.js")




const listingController = require("../controllers/listings.js")
// index Route
router.get("/", wrapAsync (listingController.index)
)

// New Route
router.get("/new", isLoggedin, listingController.renderNewForm)


// Show Route
router.get("/:id", wrapAsync(listingController.showListing)
)
// Create Route
router.post("/",isLoggedin, validateListing, wrapAsync( listingController.createListing)
)
// Edit Route
router.get("/:id/edit",isLoggedin, isOwner,wrapAsync(listingController.renderEditForm)
)


// update Route
router.put("/:id",isLoggedin, isOwner,validateListing, wrapAsync (listingController.updateLising)
)

// Delete Rout
router.delete("/:id", isLoggedin,isOwner, wrapAsync(listingController.distroyListing)
)


module.exports = router;


