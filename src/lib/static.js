import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import stylus, { middleware } from 'stylus';
import nib from 'nib';

import { STATIC_PORT } from './config.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

function compile(str, path) {
	return stylus(str).set('filename', path).set('compress', false).use(nib());
}

app.use(
	middleware({
		src: join(__dirname, '../assets/styles'),
		dest: join(__dirname, '../../dist/styles'),
		compile: compile,
		sourcemap: true
	})
);
app.use(express.static(join(__dirname, '../../dist/')));

app.listen(STATIC_PORT, () => {
	const url = `http://localhost:${STATIC_PORT}`;
	console.log(`Static server: ${url}`);
	console.log(`Styles: ${url}/styles/main.css`);
});
