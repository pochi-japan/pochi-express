// const express = require('express');
// const Hashtags = require('../models/Hashtag');

// const router = express.Router();

// // Index: Get all hashtags
// // http://localhost:8000/hashtag/
// router.get('/hashtag', (req, res, next) => {
// 	Hashtags.find({}).then((hashtag) =>
// 		res.status(200).json(hashtag).catch(next)
// 	);
// });

// // Show: Get one hashtag by id
// // http://localhost:8000/hashtag/:id
// router.get('/hashtag/:id', (req, res, next) => {
// 	Hashtags.findById({ _id: req.params.id }).then((hashtag) =>
// 		res.status(200).json(hashtag).catch(next)
// 	);
// });

// // Create: Add a hashtag
// // http://localhost:8000/hashtag/
// router.post('/hashtag', (req, res, next) => {
// 	Hashtags.create(req.body).then((hashtag) =>
// 		res.status(201).json(hashtag).catch(next)
// 	);
// });

// // Update: Edit a hashtag by id
// // http://localhost:8000/hashtag/:id
// router.patch('/hashtag/:id', (req, res, next) => {
// 	Hashtags.findByIdAndUpdate({ _id: req.params.id }, req.body, {
// 		new: true,
// 	}).then((hashtag) => res.status(204).json(hashtag).catch(next));
// });

// // Delete: Remove a hashtag by id
// // http://localhost:8000/hashtag/:id
// router.delete('/hashtag/:id', (req, res, next) => {
// 	Hashtags.findByIdAndDelete({ _id: req.params.id }).then(
// 		(delHashtag) => res.status(204).json(delHashtag).catch(next)
// 	);
// });

// module.exports = router;
