const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const recSchema = new Schema(
	{
		name: String,
		description: String,
		category: String,
		recRating: String,
		picture1: String,
		picture2: String,
		picture3: String,
		picture4: String,
		address: String,
		url: String,
		hashtags: String,
		// Try to implement this in the future
		// user: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: 'User',
		// 	required: true,
		// },

		// This will be the user's email
		owner: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Rec = mongoose.model('Rec', recSchema);

module.exports = Rec;
