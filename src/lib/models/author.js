import mongoose from 'mongoose';
import slug from 'slugg';
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

const authorSchema = new Schema(
	{
		name: String,
		slug: String,
		score: { type: Number, default: 0, enum: [2, 1, 0, -1, -2] },
		bio: {
			avatar: String,
			resume: String,
			meta: [{ _id: false, label: String, value: String }]
		},
		metas: metas
	},
	config
);

authorSchema.virtual('quotes', {
	ref: 'Quote',
	localField: '_id',
	foreignField: 'author'
});

authorSchema.pre('save', function (next) {
	this.slug = slug(this.name);
	next();
});

authorSchema.statics.getOrCreate = function (doc, cb) {
	const self = this;
	if (doc.name) {
		if (!doc.slug) {
			doc.slug = slug(doc.name);
		}
	}
	self.findOne({ slug: doc.slug }, (err, data) => {
		if (!data) {
			self.create({ name: doc.name }, (err, data) => {
				cb(err, data);
			});
		}
		cb(err, data);
	});
};

export const Author = mongoose.model('Author', authorSchema);
export default Author;
