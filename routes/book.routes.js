const express = require('express')
const bookRouter = express.Router()
const Book = require('./../DataBase/models/book.model')


bookRouter.route("/")
    .get((req, res)=>{
        Book.find()
            .exec((err, books)=>{
                if(err){
                    res.send("An error occured while finding data")
                    console.error(`An error occured while get all the books: ${err}`);
                }else{
                    res.json(books)
                }
            })
    })
    .post((req, res)=>{
        /*let book = new Book;*/

    })

bookRouter.route("/:id")
    .get((req, res)=>{
        res.send(`Book n° ${req.params.id}`)
    })
    .patch((req, res)=>{
        res.send(`Book n° ${req.params.id} have been update`)
    })
    .delete((req, res)=>{
        res.send(`Book n° ${req.params.id} have been delete`)
    })

module.exports = bookRouter; 