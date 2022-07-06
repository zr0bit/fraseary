import mongoose from 'mongoose';
import slug from 'slugg';
import hashId from 'shortid';
import words from 'lodash/words.js';
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

const quoteSchema = new Schema(
	{
		hashId: { type: String, index: true, default: hashId.generate },
		content: { type: String, text: true },
		score: { type: Number, default: 0, enum: [2, 1, 0, -1, -2] },
		slug: String,
		size: { type: String, enum: ['tiny', 'small', 'medium', 'large'] },
		sizeInt: Number,
		author: { type: Schema.Types.ObjectId, ref: 'Author' },
		tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
		lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
		metas: metas
	},
	config
);

quoteSchema.pre('save', function (next) {
	const self = this;
	const len = self.content.length;

	self.slug = slug(words(self.content).slice(0, 7).join(' '));

	self.sizeInt = len;
	self.size = ['large', 'medium', 'small', 'tiny'][
		[180, 120, 60, 0].findIndex((elem) => len > elem)
	];
	next();
});

export const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
