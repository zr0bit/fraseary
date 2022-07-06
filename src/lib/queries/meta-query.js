const Meta = require('../models/meta');

function getMetaBy(arg = {}) {
	return Meta.findOne(arg).exec();
}

module.exports.getMetaBy = getMetaBy;
