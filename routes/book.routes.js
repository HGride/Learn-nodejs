// /book Routes

const express = require('express')
const bookRouter = express.Router()

//Controller
const bookController = require('../Controllers/book.controller')

// Routes

// /book
bookRouter.route("/")
    .get(bookController.index)
    .post(bookController.create)

// /book/:id
bookRouter.route("/:id")
    .get(bookController.getOneBook)
    .put(bookController.upsert)
    .delete(bookController.remove)

module.exports = bookRouter; 