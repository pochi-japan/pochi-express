const express = require('express');
const app = express();

// CORS package for providing a middleware
const cors = require('cors');

// Controller for recommendations
const recController = require('./controllers/recController');
// const hashtagController = require('./controllers/hashtagController');

// Set the port to listen on
const PORT = process.env.PORT || 8000;

// middleware function that parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
	res.redirect('/api');
});

// This function adding new middleware
app.use('/api', recController);
// app.use('/api/hashtag', hashtagController);

// used to assign the setting name to port
app.set('port', PORT);

// listen the connections
app.listen(PORT, () => {
	console.log('Pochi app started on:' + PORT);
});
