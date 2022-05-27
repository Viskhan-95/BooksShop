const { default: mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({
    bookId: {
        ref: "Book",
        type: mongoose.SchemaTypes.ObjectId
    },
    text: String,
    nameAuthorReview: String,
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;