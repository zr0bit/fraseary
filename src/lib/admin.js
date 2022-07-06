/**
 * Admin with forest: https://app.forestadmin.com
 * when update model, next update models/index.js
 * on admin forest click on edit layout and
 * active collections visibility
 */

import {
	ADMIN_PORT,
	DEV_DB_CLOUD,
	FOREST_ENV_SECRET,
	FOREST_AUTH_SECRET
} from './config.js';

import express from 'express';
import mongoose from 'mongoose';
import forest from 'forest-express-mongoose';

//don't delete this line coz restart forest admin
//restart layout configurations
import './models/index.js';

const app = express();

// Mongoose connection
mongoose.connect(DEV_DB_CLOUD);

// Database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database is Ready');

	//forest config
	forest
		.init({
			envSecret: FOREST_ENV_SECRET,
			authSecret: FOREST_AUTH_SECRET,
			objectMapping: mongoose,
			connections: { default: db }
		})
		.then((FAMiddleware) => {
			app.use(FAMiddleware);
		});
});

app.listen(ADMIN_PORT, () => {
	console.log(`Admin server is Ready: port: ${ADMIN_PORT}`);
	console.log('Admin panel: https://app.forestadmin.com/fraseary');
});
