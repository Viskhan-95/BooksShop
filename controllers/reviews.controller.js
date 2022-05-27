const Review = require("../modеls/Review.model");

module.exports.reviewsController = {
    getReview: (reg, res) => {
        Review.find({bookId: reg.params.id}).populate("bookId", "name")
        .then((data) => {
            res.json(data)
        })
    },
    addReview: (reg, res) => {
        Review.create({
            bookId: reg.body.bookId,
            text: reg.body.text,
            nameAuthorReview: reg.body.nameAuthorReview
        }).then(() => {
            res.json("Рецензия добавлена")
        })
    },
    delReview: (reg, res) => {
        Review.findByIdAndRemove(reg.params.bookId)
        .then(() => {
            res.json("Рецензия удалена")
        })
    }
}