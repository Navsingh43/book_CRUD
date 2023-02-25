/*File Name: books.js   
  Author Name: Navjot Singh 
  Student ID: 301157391
  WebApp Name: Favorite Book List
  */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
