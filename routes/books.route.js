const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const route = Router();

route.get('/books', booksController.getBooks);
route.get('/book/author/:id', booksController.getBookById);
route.get('/book/genre/:id', booksController.getBookByGenre);
route.post('/book/add', booksController.addBook);
route.delete('/book/delete/:id', booksController.delBook);
route.patch('/book/update/:id', booksController.updateBook);

module.exports = route;