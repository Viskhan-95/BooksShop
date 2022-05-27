const { default: mongoose } = require("mongoose");

const genreSchema = mongoose.Schema({
    name: String,
    diskription: String,
})

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;