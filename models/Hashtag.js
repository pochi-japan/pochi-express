const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const hashtagSchema = new Schema({
	name: String,
	// 1 to many?
});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

module.exports = Hashtag;

// // https://mongoosejs.com/docs/schematypes.html
// const BookSchema = new mongoose.Schema(
// 	{
// 		title: String,
// 		author: String,
// 		description: String,
// 		owner: {
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: 'User',
// 			required: true,
// 		},
// 	},
// 	{
// 		timestamps: true,
// 	}
// );

// const userSchema = new mongoose.Schema(
// 	{
// 		email: {
// 			type: String,
// 			required: true,
// 			unique: true,
// 		},
// 		password: {
// 			type: String,
// 			required: true,
// 		},
// 	},
// 	{
// 		timestamps: true,
// 		toJSON: {
// 			virtuals: true,
// 			//_doc is the BSON we are getting, and ret is the return value
// 			transform: (_doc, ret) => {
// 				delete ret.password;
// 				return ret;
// 			},
// 		},
// 	}
// );
