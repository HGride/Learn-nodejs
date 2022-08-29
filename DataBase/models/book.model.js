const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
{
    title: {
        type: String,
        validate: {
            validator: function(toValidate){
                return /[\s\d\w\°-]*/g.test(toValidate)
            },
            message: props => `${props.value} is not a  valid title`
        },
        require: [true, 'The title is required'],
        unique: [true, "It's not unique"]
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
        type: String,
        default: "?noDate"
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