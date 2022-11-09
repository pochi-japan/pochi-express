const mongoose = require('../db/connection');
const bcrypt = require('bcrypt');

// cost factor
// const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

// userSchema.pre('save', async function (next) {
// 	// 'this' is the user doc
// 	if (!this.isModified('password')) return next();
// 	// update the password with the computed hash
// 	this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
// 	return next();
// });

const User = mongoose.model('User', userSchema);
module.exports = User;
