export const metaSchema = {
	title: { type: String, maxlength: 90 },
	description: { type: String, maxlength: 200 },
	og: {
		title: { type: String, maxlength: 90 },
		description: { type: String, maxlength: 200 }
	}
};

export default metaSchema;
