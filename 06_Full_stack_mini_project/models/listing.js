const mongoose = require("mongoose");
const Review = require("./review");
const { ref } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,

    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: {
        type: [String],
        default: []
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});


listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}})
}
})
const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
