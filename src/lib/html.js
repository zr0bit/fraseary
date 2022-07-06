import { readFileSync } from 'fs';
import { HTML_SVG } from './config.js';

let svg;
try {
	svg = readFileSync(HTML_SVG, 'utf8').toString();
} catch (err) {
	console.error(err);
}

export default svg;
