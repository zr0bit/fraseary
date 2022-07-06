import mongoose from 'mongoose';
import { DEV_DB_CLOUD } from './config.js';

import './models/index.js';

// Mongoose connection
if (process.env.DB_ENV === 'test') {
	console.log('####> Database Env: testing <####');
	if (process.env.DEV_ENV === 'ci') {
		console.log('####> Dev Env: gitlab CI <####');
		mongoose.connect('mongodb://mongo/fraseary-test');
	} else {
		console.log('####> Dev Env: Local <####');
		mongoose.connect('mongodb://localhost/fraseary-test');
	}
} else if (process.env.NODE_ENV === 'production') {
	// mongoose.connect('mongodb://localhost/db-fr-prod-1');
	// mongoose.connect('mongodb://localhost/fraseary-local-copy');
	mongoose.connect(DEV_DB_CLOUD);
} else {
	//connect to local mongodb for dev env
	// mongoose.connect('mongodb://localhost/fraseary-local-copy', { useNewUrlParser: true, useUnifiedTopology: true});

	//connect to cloud mongodb for dev env
	mongoose.connect(DEV_DB_CLOUD);
}

// Database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database is Ready');
	// We're connected!
});
