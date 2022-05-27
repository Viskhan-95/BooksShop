const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const route = Router();

route.get('/genres', genresController.getGenres);
route.get('/genre/:id', genresController.getGenreById);
route.post('/genre/add', genresController.addGenre);
route.delete('/genre/delete/:id', genresController.delGenre);
route.patch('/genre/update/:id', genresController.updateGenre);

module.exports = route;