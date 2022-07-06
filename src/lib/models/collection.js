import mongoose from 'mongoose';
const slug = require('slugg');
import metaSchema from './meta-schema.js';

const Schema = mongoose.Schema;
const metas = new Schema(metaSchema);

const config = {
	timestamps: true,
	toJSON: {
		virtuals: true,
		transform(doc, obj) {
			obj.id = obj._id;
			delete obj._id;
		}
	}
};

const collectionSchema = new Schema(
	{
		title: String,
		slug: String,
		description: String,
		metas: metas
	},
	config
);

collectionSchema.pre('save', function (next) {
	this.slug = slug(this.title);
	next();
});

export const Collection = mongoose.model('Collection', collectionSchema);
export default Collection;
