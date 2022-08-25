import 'dotenv/config';

export const ENV = process.env.ENV;
export const API = 'http://localhost:4000/api';
export const HTML_SVG = process.env.HTML_SVG;
export const PORT = process.env.PORT || 3000;
export const STATIC_PORT = process.env.STATIC_PORT || 4000;

export const DEV_DB_CLOUD = process.env.DEV_DB_CLOUD;
export const PROD_DB = process.env.PROD_DB;

export const ADMIN_PORT = process.env.DEV_ADMIN_PORT;
export const FOREST_AUTH_SECRET = process.env.FOREST_AUTH_SECRET;
export const FOREST_ENV_SECRET = process.env.FOREST_ENV_SECRET;
