const { Router } = require("express");
const { authorsController } = require("../controllers/authors.controller");

const route = Router();

route.get('/authors', authorsController.getAuthors);
route.get('/author/:id', authorsController.getAuthorById);
route.post('/author/add', authorsController.addAuthor);
route.delete('/author/delete/:id', authorsController.delAuthor);
route.patch('/author/update/:id', authorsController.updateAuthor);

module.exports = route;