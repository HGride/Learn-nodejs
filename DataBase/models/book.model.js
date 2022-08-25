const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    author: {
        type: String,
        default: "unknown"
    },
    pages: {
        type: Number,
        require: true,
        min: 0,
        max: 9000000000000000
    },
    publishingDate: {
        type: Date,
        default: Date.now
    },
    resume: {
        type: String,
        default: ""
    },
    cover: {
        type: String,
        default: "?noCover"
    },
    detail: {
        readers: Number,
        reviews: Number,
        rank: Number,
    }

});

module.exports = mongoose.model( "Book", BookSchema );