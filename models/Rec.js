const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const recSchema = new Schema({
	name: String,
	description: String,
	category: String,
	recRating: Number,
	pictures: String,
	location: String,
	url: String,
	hashtag: [String],
});

const Rec = mongoose.model('Rec', recSchema);

module.exports = Rec;
