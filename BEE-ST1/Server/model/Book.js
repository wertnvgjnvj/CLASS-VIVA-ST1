const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    book_code: {type:String},
    book_name: {type:String},
    book_price: {type:Number},
    publisher_name: {type:String},
    book_description: {type:String},
})

module.exports = mongoose.model('Book', Book);