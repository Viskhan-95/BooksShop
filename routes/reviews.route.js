const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const route = Router();

route.get('/review/:id', reviewsController.getReview);
route.post('/review/add', reviewsController.addReview);
route.delete('/review/delete/:id', reviewsController.delReview);

module.exports = route;