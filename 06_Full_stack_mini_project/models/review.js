// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema ({
//     Comment: String,
//     rating: {
//         type : Number,
//         min: 1,
//         max: 5
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// });

// module.exports = mongoose.model("Review", reviewSchema)



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
 
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
