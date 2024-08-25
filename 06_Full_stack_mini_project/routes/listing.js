const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const {isLoggedin, isOwner, validateListing} = require("../middleware.js")
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })

const listingController = require("../controllers/listings.js")


router.route("/")
.get(wrapAsync (listingController.index))
.post(isLoggedin,  upload.single("listing[image]"),
wrapAsync( listingController.createListing))


// New Route
router.get("/new", isLoggedin, listingController.renderNewForm)


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedin, isOwner,validateListing, wrapAsync (listingController.updateLising))
.delete(isLoggedin,isOwner, wrapAsync(listingController.distroyListing))

// Edit route
router.get("/:id/edit",isLoggedin, isOwner,wrapAsync(listingController.renderEditForm))

module.exports = router;


