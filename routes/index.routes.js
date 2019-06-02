const express = require('express');
const router = express.Router();

router.get('/', homeCallback);


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