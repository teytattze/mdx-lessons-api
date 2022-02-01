import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { logger } from './middlewares/logger.middleware.js';
import router from './routers/api.router.js';

const app = express();

app.use(cors());

// app.use(express.static('public'));

app.use(bodyParser.json());
app.use(logger());

app.use('/api', router);

export default app;
