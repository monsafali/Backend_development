const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    // image:{
    //     type: String,
    //     default:
    //     "https://images.unsplash.com/photo-1721633617180-97c67428a48e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     set: (v) => 
    //     v === ""
    //      ? "https://images.unsplash.com/photo-1721633617180-97c67428a48e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     : v,
    // },
    image: {
        filename: String,
        url: String
    },
    price: Number,
    location: String,
    country: String,
})


const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;