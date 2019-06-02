const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

router.get('/', homeCallback);

router.get('/create', (req, res) => {

	Book.create({
		name: 'Harry Potter 2',
		author: 'J K Rowling',
		copiesSold: 10000
	}).then(function(){
		res.send("Created");
	});

})

router.get('/fetch', (req, res) => {
	
	// Book.find({}, function(){
	// 	console.log(result);
	// });

	Book.find({
		copiesSold: 10000,
		// name: 'Harry Potter'
	}).then((books) => {
		// console.log(books);
		// res.json(books);
		res.render('home', {
			books: books
		})
	});

})


router.get('/test', (req, res) => {
	res.render('books/list');
})

router.get('/services', (req, res) => {
	res.render('services');
})

function homeCallback(req, res){
	var data = "I am Data" // From Database

	res.render('home', {
		data: ['Samar', 'A', 'b', 'C'],
		active: false
	});
}

module.exports = router;