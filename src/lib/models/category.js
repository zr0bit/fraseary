const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const config = {
	timestamps: true
};

const categorySchema = new Schema(
	{
		name: String,
		slug: { type: String, required: true, unique: true, index: true }
	},
	config
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
