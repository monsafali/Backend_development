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
        filename: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1721633617180-97c67428a48e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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
