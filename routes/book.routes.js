const express = require('express')
const bookRouter = express.Router()
const connect = require('./../DataBase/db')


bookRouter.route("/")
    .get((req, res)=>{
        res.send("All books")
    })
    .post((req, res)=>{
        res.send("Your book have been successfully created ! Good job !")
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