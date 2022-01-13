import express from 'express';
import router from './routers/api.router.js';

const app = express();

app.use(express.static('public'));
app.use('/api', router);

export default app;
