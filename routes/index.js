const { Router } = require("express");

const route = Router();

route.use(require("./authors.route"));
route.use(require("./books.route"));
route.use(require("./genres.route"));
route.use(require("./reviews.route"));

module.exports = route;