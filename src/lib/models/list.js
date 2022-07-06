import mongoose from 'mongoose';
import slug from 'slugg';
import metaSchema from './meta-schema.js';

const Schema = mongoose.Schema;
const metas = new Schema(metaSchema);

const config = {
	timestamps: true,
	toJSON: {
		transform(doc, obj) {
			obj.id = obj._id;
			delete obj._id;
		}
	}
};

const listSchema = new Schema(
	{
		title: { type: String, required: true, maxlength: 70 },
		slug: { type: String, unique: true, index: true },
		detail: { type: String },
		metas: metas
	},
	config
);

listSchema.pre('save', function (next) {
	this.slug = slug(this.title);
	next();
});

export const List = mongoose.model('List', listSchema);
export default List;
