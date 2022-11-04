const express = require('express');
const Rec = require('../models/Rec');

// creates a router as a module
const router = express.Router();

// define the home page route
router.get('/', async (req, res) => {
	try {
		res.json(await Rec.find({}));
	} catch (error) {
		res.status(200).json(error);
	}
});

// Show: Get recommendation by id
router.get('/:id', async (req, res) => {
	try {
		res.json(await Rec.findById({ _id: req.params.id }));
	} catch (error) {
		res.status(200).json(error);
	}
});

// Create: Add a recommendation
router.post('/', async (req, res) => {
	try {
		res.json(await Rec.create(req.body));
	} catch (error) {
		res.status(201).json(error);
	}
});

// Update: Edit a recommendation by id
router.patch('/:id', async (req, res) => {
	try {
		res.json(
			await Rec.findByIdAndUpdate({ _id: req.params.id }, req.body, {
				new: true,
			})
		);
	} catch (error) {
		res.status(204).json(error);
	}
});

// Delete: Remove a recommendation by id
router.delete('/:id', async (req, res) => {
	try {
		const deleteRec = await Rec.findByIdAndDelete(req.params.id);
		res.json(deleteRec);
	} catch (error) {
		res.status(204).json(error);
	}
});

module.exports = router;
