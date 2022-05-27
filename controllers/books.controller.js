const Book = require("../modеls/Book.model");

module.exports.booksController = {
    getBooks: (reg, res) => {
        Book.find().populate("authorId").populate("genreId")
        .then((data) => {
            res.json(data)
        })
    },
    getBookById: (reg, res) => {
        Book.findById(reg.params.id).populate("authorId").populate("genreId")
        .then((data) => {
            res.json(data)
        })
    },
    getBookByGenre: (reg, res) => {
        Book.find({genreId: reg.params.id}).populate("authorId").populate("genreId")
        .then((data) => {
            res.json(data)
        })
    },
    addBook: (reg, res) => {
        Book.create({
            name: reg.body.name,
            genreId: reg.body.genreId,
            authorId: reg.body.authorId
        }) .then(() => {
            res.json("Книга успешно добавлена")
        })
    },
    delBook: (reg, res) => {
        Book.findByIdAndRemove(reg.params.bookId)
        .then(() => {
            res.json("Книга удалена")
        })
    },
    updateBook: (reg, res) => {
        Book.findByIdAndUpdate(reg.params.id, {$set: {
            name: reg.body.name,
            genreId: reg.body.genreId,
            authorId: reg.body.authorId
        }})
        .then(() => {
            res.json("Данные о книге изменены")
        })
    }
}