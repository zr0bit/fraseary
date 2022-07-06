const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const hashId = require('shortid');

const Schema = mongoose.Schema;

const config = {
	timestamps: true
};

const userSchema = new Schema(
	{
		hashId: { type: String, index: true, default: hashId.generate },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String },
		profile: {
			description: String,
			avatar: String
		},
		likes: { type: Number, default: 0 }
	},
	config
);

userSchema.pre('save', function (next) {
	const self = this;
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			throw err;
		}
		bcrypt.hash(self.password, salt, (err, hash) => {
			if (err) {
				throw err;
			} else {
				self.password = hash;
				next();
			}
		});
	});
});

const User = mongoose.model('User', userSchema);

module.exports = User;
