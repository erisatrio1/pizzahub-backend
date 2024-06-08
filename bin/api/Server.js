import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import v1CatalogModule from '../modules/v1/catalog/forms.js'

const app = express();
const VERSION = process.env.VERSION;

app.use(cors({
    origin: '*'
}))

console.log("SERVER VERSION: ", VERSION);

app.use('/v1/forms', v1CatalogModule);

export default app;