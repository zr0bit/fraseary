// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const config = {
	timestamps: true,
	toJSON: {
		virtuals: true
	}
};

const metaSchema = new Schema(
	{
		path: { type: String, require: true, unique: true, index: true },
		title: { type: String, require: true, maxlength: 80 },
		description: { type: String, maxlength: 160 },
		og: {
			title: { type: String, maxlength: 90 },
			description: { type: String, maxlength: 200 }
		}
	},
	config
);

export const Meta = mongoose.model('Meta', metaSchema);
export default Meta;
// module.exports = Meta;
