const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const bookConroller = require('../controller/bookController');

app.use('/book/create-book', bookConroller.createBook);
app.use('/book/get-book', bookConroller.getBooks);


app.use("",router);
module.exports = app