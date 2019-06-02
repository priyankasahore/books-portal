var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	name: { type: String },
	author: { type : String },
	copiesSold : { type: Number }
	// name: { type: String, default: 'Untitled', required: true },
	// pages: { type: Number },
	// publishDate: Date,
	// contributors : [{
	// 	name: String,
	// 	age: Number
	// }],
	// active : { type: String, default: false, required: true}
});

console.log(BookSchema);

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;