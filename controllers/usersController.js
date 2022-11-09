const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

// SIGN UP
// POST /api/signup
router.post('/signup', async (req, res, next) => {
	try {
		//default number is 10, the number is how many characters is going to be hashed with the password, 6-10 is normal
		const password = await bcrypt.hash(req.body.password, 8);
		const user = await User.create({
			email: req.body.email,
			password,
			name: req.body.name,
		});
		return res.status(201).json(user);
	} catch (err) {
		return next(err);
	}
});

//SIGN UP
// router.post('/signup', async (req, res, next) => {
// 	try {
// 		const user = await User.create(req.body);
// 		// token will be a string
// 		const token = createUserToken(user);
// 		// send back the token as a string
// 		// which we need to account for
// 		// in the client
// 		return res.json(token);
// 	} catch (err) {
// 		return next(err);
// 	}
// });

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {
	User.findOne({ email: req.body.email })
		// Pass the user and the request to createUserToken
		.then((user) => createUserToken(req, user))
		// .then((user) => console.log(user))
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.
		.then((token) => res.json(token))
		.catch(next);
});

function checkToken(req, res) {
	console.log('req.user', req.user);
	res.json(req.exp);
}

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken);

/*-- Helper Functions --*/

// function createJWT(user) {
// 	return jwt.sign(
// 		// data payload
// 		{ user },
// 		process.env.SECRET,
// 		{ expiresIn: '24h' }
// 	);
// }

module.exports = router;
