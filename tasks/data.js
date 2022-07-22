import fs from 'fs';
import gulp from 'gulp';
import mongoose from 'mongoose';
import { getMainAuthors } from '../src/lib/queries/author-query.js';
import { DEV_DB_CLOUD } from '../src/lib/config.js';

async function connectDB(cb) {
	try {
		await mongoose.connect(DEV_DB_CLOUD);
	} catch (error) {
		console.error(error);
	}
	cb();
}

async function cachedAuthors(cb) {
	const authors = await getMainAuthors(15);
	try {
		fs.writeFileSync(
			'./src/routes/autores/_authors.json',
			JSON.stringify(authors)
		);
	} catch (err) {
		console.error(err);
	}
	mongoose.connection.close();
	cb();
}

gulp.task('get:authors', gulp.series(connectDB, cachedAuthors));
