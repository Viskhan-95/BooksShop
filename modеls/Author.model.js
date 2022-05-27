const { default: mongoose } = require("mongoose");

const authorSchema = mongoose.Schema({
    name: String,
    aboutAuthor: String,
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;