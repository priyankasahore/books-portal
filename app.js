const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/books", { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', (error) => {
	console.log(error);
})

db.on('open', () => {
	console.log("Database Connected");
})

const indexRoutes = require('./routes/index.routes');
const staticRoutes = require('./routes/static.routes');

app.use('/', indexRoutes);
app.use('/static/home', staticRoutes);

// Part 1
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Added ANother line

app.listen(3000, () => {
	console.log("Server started at", 3000);
});