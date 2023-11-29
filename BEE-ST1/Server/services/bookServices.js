const mongoose = require('mongoose')
const Book = require('../model/Book')

exports.createBook = async (data)=>{
    return await Book.create(data)
}

exports.getBook = async ()=>{
    return await Book.find()
}