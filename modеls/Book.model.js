const { default: mongoose } = require("mongoose");

const bookSchema = mongoose.Schema({
    name: String,
    authorId: {
        ref: "Author",
        type: mongoose.SchemaTypes.ObjectId
    },
    genreId: {
        ref: "Genre",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;